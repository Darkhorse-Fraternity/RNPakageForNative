def use_rn_pod!(root = ".", config = nil)

    require  root + '/node_modules/@react-native-community/cli-platform-ios/native_modules'

    pod 'FBLazyVector', :path =>  root + "/node_modules/react-native/Libraries/FBLazyVector"
    pod 'FBReactNativeSpec', :path => root + "/node_modules/react-native/Libraries/FBReactNativeSpec"
    pod 'RCTRequired', :path => root + "/node_modules/react-native/Libraries/RCTRequired"
    pod 'RCTTypeSafety', :path => root +  "/node_modules/react-native/Libraries/TypeSafety"
    pod 'React', :path => root + '/node_modules/react-native/'
    pod 'React-Core', :path => root + '/node_modules/react-native/'
    pod 'React-CoreModules', :path => root + '/node_modules/react-native/React/CoreModules'
    pod 'React-Core/DevSupport', :path => root + '/node_modules/react-native/'
    pod 'React-RCTActionSheet', :path => root + '/node_modules/react-native/Libraries/ActionSheetIOS'
    pod 'React-RCTAnimation', :path => root + '/node_modules/react-native/Libraries/NativeAnimation'
    pod 'React-RCTBlob', :path => root + '/node_modules/react-native/Libraries/Blob'
    pod 'React-RCTImage', :path => root + '/node_modules/react-native/Libraries/Image'
    pod 'React-RCTLinking', :path => root + '/node_modules/react-native/Libraries/LinkingIOS'
    pod 'React-RCTNetwork', :path => root + '/node_modules/react-native/Libraries/Network'
    pod 'React-RCTSettings', :path => root + '/node_modules/react-native/Libraries/Settings'
    pod 'React-RCTText', :path => root + '/node_modules/react-native/Libraries/Text'
    pod 'React-RCTVibration', :path => root + '/node_modules/react-native/Libraries/Vibration'
    pod 'React-Core/RCTWebSocket', :path => root + '/node_modules/react-native/'

    pod 'React-cxxreact', :path => root + '/node_modules/react-native/ReactCommon/cxxreact'
    pod 'React-jsi', :path => root + '/node_modules/react-native/ReactCommon/jsi'
    pod 'React-jsiexecutor', :path => root + '/node_modules/react-native/ReactCommon/jsiexecutor'
    pod 'React-jsinspector', :path => root + '/node_modules/react-native/ReactCommon/jsinspector'
    pod 'ReactCommon/jscallinvoker', :path => root + "/node_modules/react-native/ReactCommon"
    pod 'ReactCommon/turbomodule/core', :path => root + "/node_modules/react-native/ReactCommon"
    pod 'Yoga', :path => root + '/node_modules/react-native/ReactCommon/yoga'

    pod 'DoubleConversion', :podspec => root + '/node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
    pod 'glog', :podspec => root + '/node_modules/react-native/third-party-podspecs/glog.podspec'
    pod 'Folly', :podspec => root + '/node_modules/react-native/third-party-podspecs/Folly.podspec'

    use_native_modules!(root,config)
end
