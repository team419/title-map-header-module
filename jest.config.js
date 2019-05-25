// jest.config.js
module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>__tests__/setupTests.js'],
  testEnvironment: 'node',
  // displayName: 'Title Component',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  // moduleFileExtensions: ['js', 'jsx'],
};

// collectCoverage: true,
// collectCoverageFrom: [
//   '**/*.{js,jsx}',
//   '!**/node_modules/**',
// ],
// coverageDirectory: './__tests__',
