import KeyMirror from './keyMirror';

describe('Key Mirror', () => {
  it('generate key mirror object', () => {
    const testObj = {
      one: null,
      two: null,
      three: null,
    };
    const expectedObj = {
      one: 'one',
      two: 'two',
      three: 'three',
    };
    const result = KeyMirror(testObj);
    expect(result).toEqual(expectedObj);
  });

  it('throw error if argument is not Object', () => {
    expect(() => {
      KeyMirror([]);
    }).toThrowError('keyMirror(...): Argument must be an object');
    expect(() => {
      KeyMirror('string');
    }).toThrowError('keyMirror(...): Argument must be an object');
    expect(() => {
      KeyMirror(true);
    }).toThrowError('keyMirror(...): Argument must be an object');
  });
});
