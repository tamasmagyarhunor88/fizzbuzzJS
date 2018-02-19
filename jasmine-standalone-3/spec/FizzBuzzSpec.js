describe("fizzBuzz", function() {

  it("should return FizzBuzz for multiples of BOTH 3 and 5", function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });

  it("should return Fizz for multiples of 3", function() {
    expect(fizzBuzz(6)).toEqual("Fizz");
  });

  it("should return Buzz for multiples of 5", function() {
    expect(fizzBuzz(10)).toEqual("Buzz");
  });

  it("should return number if none of the above", function() {
    expect(fizzBuzz(13)).toEqual(13);
  });

});
