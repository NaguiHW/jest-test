const randomCity = require('../index');

describe('Testing functionalities of "randomCity', () => {
  it('Should return a string', () => {
    expect(typeof (randomCity())).toBe('string');
  });
  
  it('Check that a city doesn\'t exists', () => {
    expect(randomCity()).not.toMatch(/Bogota/);
  });
});
