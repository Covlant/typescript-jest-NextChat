import nextJest from "next/jest.js";
import type { Config } from "jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  testMatch: ["**/*.test.js", "**/*.test.ts", "**/*.test.jsx", "**/*.test.tsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // 👇 Add these for TypeScript + ESM compatibility
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },

  extensionsToTreatAsEsm: [".ts", ".tsx"],

  // 👇 Add this to resolve ESM issues
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },

  // 👇 Optional but helps with modern modules
  transformIgnorePatterns: [
    "/node_modules/(?!(@babel/preset-env|other-esm-lib)/)",
  ],

  // 👇 Sometimes needed if you're using mixed CommonJS + ESM
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

export default createJestConfig(config);
