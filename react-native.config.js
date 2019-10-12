module.exports = {
  dependencies: {
    'react-native-gesture-handler': {},
    'react-native-device-info': {},
    'react-native-simple-toast': {},
    'react-native-code-push': {
      platforms: {
        android: {
          packageInstance:
            'new CodePush("",getApplicationContext(),BuildConfig.DEBUG)',
        },
      },
    },
  },
  project: {
    android: {
      sourceDir: 'examples/android',
    },
  },
};
