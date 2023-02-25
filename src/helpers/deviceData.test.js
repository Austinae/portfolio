// Import the deviceType function from deviceData
const { deviceType } = require('./deviceData')

// An alternative to jest.spyOn can also be achieved as follows:
// Object.defineProperty(navigator, 'userAgent', {
//   get() { return userAgent }
// })
describe('deviceType', () => {
  test.each([
    ['mobile', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1'],
    ['desktop', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'],
  ])('returns "%s" for %s user agents', (expected, userAgent) => {
    jest.spyOn(global.navigator, 'userAgent', 'get').mockReturnValue(userAgent)

    // Call the deviceType function and expect the output to be the expected value
    expect(deviceType()).toBe(expected)
  })
})
