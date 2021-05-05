module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
    // '@/pages/(.*)': '<rootDir>/pages/$1',
    // '@/components/(.*)': '<rootDir>/components/$1',
    // '@/store/(.*)': '<rootDir>/store/$1',
    // '@/test/(.*)': '<rootDir>/test/$1',
    // '@/constants': '<rootDir>/constants.ts',
    // '@/utils': '<rootDir>/utils.ts',
    // '@/GlobalStyles': '<rootDir>/GlobalStyles.ts',
  },
}
