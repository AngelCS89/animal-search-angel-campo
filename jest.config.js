module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.json",
      },
    },
  };