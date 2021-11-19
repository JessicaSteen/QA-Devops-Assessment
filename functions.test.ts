// check that shuffleArray returns an array
// check that it returns an array of the same length as the argument sent in
// check that all the same items are in the array
// check that the items have been shuffled around


const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () => {
        expect(typeof shuffleArray).toBe("array") 
    });

    test('returns array of same length', () => {
        expect(shuffleArray).toEqual(expect.arrayContaining(shuffleArray.length))
    });shuffleArray
    
})