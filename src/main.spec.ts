import { hello } from './main'

describe('Main', () => {
  it("should work", () => {
    expect(hello()).toEqual('Hello, world')
  })
})
