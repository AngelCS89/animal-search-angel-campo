module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    html: "<!doctype html><html><body></body></html>",
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
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