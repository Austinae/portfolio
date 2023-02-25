/**
 * Returns the device type (mobile or desktop) based on the user agent string
 * Uses an IIFE to avoid repeating the regular expression match on every function call
 * IMPORTANT, deviceType is never used except for jest test, always use deviceTypeIIFE
 * This is because having an IIFE makes it impossible to redeclare the method
 * @function
 * @returns {string} The device type. Possible values are "mobile" or "desktop".
 * @example
 * import { deviceTypeIIFE } from 'helpers/deviceData'
 * const type = deviceType // "mobile" or "desktop"
 */
const deviceType = () => {
  const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Windows Phone|SymbianOS|Nokia|Kindle|Silk|SonyEricsson|Sony Xperia|PalmOS|PalmSource/i.test(navigator.userAgent)
  return isMobileDevice ? 'mobile' : 'desktop'
}
const deviceTypeIIFE = (deviceType)()

export {
  deviceTypeIIFE,
  deviceType
}
