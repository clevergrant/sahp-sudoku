export const moduleNameMapper = {
	'\\.css$': '<rootDir>/__mocks__/styleMock.js',
}
export const resolver = 'jest-webpack-resolver'
export const setupFilesAfterEnv = [ '<rootDir>/src/setUpTests.js' ]