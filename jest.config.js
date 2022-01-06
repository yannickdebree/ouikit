/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "@ouikit/core": "<rootDir>/packages/core",
    "@ouikit/router": "<rootDir>/packages/router",
  },
};
