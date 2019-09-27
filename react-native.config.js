module.exports = {
  dependencies: {
    'react-native-gesture-handler': {},
    'react-native-device-info': {
      platforms: {
        android: {
          packageInstance: 'new RNDeviceInfo(false)',
        },
      },
    },
    'react-native-simple-toast': {},
    'react-native-code-push': {
      platforms: {
        android: {
          packageInstance:
            'new CodePush(BuildConfig.CODEPUSH_KEY,getApplicationContext(),BuildConfig.DEBUG)',
        },
      },
    },
  },
  project: {
    ios: {
      project: 'examples/ios/ZXTTRNTest.xcodeproj',
    },
    android: {
      sourceDir: 'examples/android',
    },
  },
};
