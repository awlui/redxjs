var testsContext = require.context('./spec', true, /\.spec\.ts/);
testsContext.keys().forEach(testsContext);
