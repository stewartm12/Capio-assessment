const chai = window.chai;
const expect = chai.expect;

describe("List Synchronization", () => {
  it("should return the list of integers which are not contained in both lists", () => {
    expect(sync([1, 2, 3], [1, 3, 4])).to.deep.equal([2, 4]);
  });
  it("should return an empty list ", () => {
    expect(sync([1, 2, 3], [1, 2, 3])).to.deep.equal([]);
  });
});

describe("Deep Equality", () => {
  it("should return true", () => {
    expect(
      deepEquality2(
        { "key1": "value", "key2": { "key3": 1 } },
        { "key1": "value", "key2": { "key3": 1 } }
      )
    ).to.deep.equal(true);
  });
  it("should return false ", () => {
    expect(
      deepEquality2(
        {"key1" : "value1", "key2" : {"key3": 1}, "key4" : "value2"},
        {"key1" : "value", "key2" : {"key3": 1}}
      )
    ).to.deep.equal(false)
  });
});