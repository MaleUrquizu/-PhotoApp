module.exports = {
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
    moduleFileExtensions: ['js', 'mjs'],
    globals: {
      'process.env.NODE_ENV': 'test',
    },
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };
  
  
  
  
  