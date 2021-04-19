/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
import '@testing-library/jest-dom'

global.matchMedia = global.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  }
}

// eslint-disable-next-line no-labels
// eslint-disable-next-line no-unused-labels
setupFilesAfterEnv: ['<rootDir>/setupTest.js']