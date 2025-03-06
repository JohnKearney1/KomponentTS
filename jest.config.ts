// jest.config.ts
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['**/src/tests/**/*.(spec|test).[jt]s?(x)'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // if using jest-dom matchers
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
      },
  };
