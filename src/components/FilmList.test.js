const rewire = require("rewire")
const FilmList = rewire("./FilmList")
const noop = FilmList.__get__("noop")
// @ponicode
describe("noop", () => {
    test("0", () => {
        let callFunction = () => {
            noop()
        }
    
        expect(callFunction).not.toThrow()
    })
})
