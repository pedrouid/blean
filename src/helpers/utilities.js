import ClientJS from 'clientjs';
import inbound from 'inbound';


/**
 * @desc create authenticated user session
 * @param  {String} [email='']
 * @param  {Date} [expires=Date.now()]
 * @param  {String} [intercomHash='']
 * @param  {Array} accounts
 * @return {Session}
 */
export const setSession = (
  email = '',
  expires = Date.now(),
  maxAge = Date.now(),
  intercomHash = '',
  accounts: [],
  publicID: '') => {
  const session = {
    email,
    expires,
    maxAge,
    intercom_hash: intercomHash,
    accounts,
    public_id: publicID
  };
  localStorage.setItem('LOOT_SESSION', JSON.stringify(session));
};

/**
 * @desc get session as an object
 * @return {Object}
 */
export const getSession = () => {
  const session = localStorage.getItem('LOOT_SESSION');
  return JSON.parse(session);
};

/**
 * @desc set and clear timeout for Session Expire Warning
 */
let timeout = null;
const refreshTimeout = (refreshTime) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.error('TIMEOUT');
  }, refreshTime);
};
export const clearSessionExpireWarning = () => {
  clearTimeout(timeout);
};


/**
 * @desc refresh sesion tokens
 * @return {Void}
 */
export const refreshSession = () => {
  const auth = getSession();

  const getRefreshedSession = (sessionObject, refreshTime) => {
    const newExpires = Date.now() + refreshTime;
    if (sessionObject.maxAge - newExpires > refreshTime) {
      sessionObject.expires = newExpires;
    } else sessionObject.expires = sessionObject.maxAge;
    return JSON.stringify(sessionObject);
  };

  if (auth) {
    localStorage.setItem('LOOT_SESSION', getRefreshedSession(auth, 300000)); // 5 min
    return refreshTimeout(240000); // 4 min
  }
};

/**
 * @desc detects mobile devices
 * @return {Boolean}
 */
export const isMobile = () => {
  if ('ontouchstart' in window && Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 800) return true;
  return false;
};

/**
 * @desc get user properties to send of in analytics api header
 * @type {base64}
 */
const client = new ClientJS();
export const userProperties = () => {
  let referrer = {};
  inbound.referrer.parse(window.location.href, document.referrer, (error, description) => {
    if (!error) referrer = description;
  });
  let richData = {
    $browser: client.getBrowser().name,
    $browser_version: client.getBrowser().version,
    $device: client.getDevice().model,
    $current_url: window.location.href,
    $initial_referrer: document.referrer,
    $initial_referring_domain: document.referrer.split('/')[2],
    $os: `${client.getOS().name} ${client.getOS().version}`,
    $referrer: document.referrer,
    $referring_domain: document.referrer.split('/')[2],
    $screen_height: window.innerHeight,
    $screen_width: window.innerWidth,
    $search_engine: referrer.type === 'search' ? referrer.engine : '',
    $mp_keyword: referrer.type === 'search' ? referrer.query : ''
  };
  richData = JSON.stringify(richData);
  const richDataBase64 = new Buffer(richData).toString('base64');
  return richDataBase64;
};
