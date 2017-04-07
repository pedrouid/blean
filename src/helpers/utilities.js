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
