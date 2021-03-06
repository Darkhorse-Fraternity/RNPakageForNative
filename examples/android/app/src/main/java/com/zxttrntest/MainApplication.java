package com.zxttrntest;

import android.app.Application;
import android.content.Context;
//import com.facebook.react.ReactApplication;
//import com.facebook.react.ReactNativeHost;
//import com.facebook.react.ReactPackage;
//import com.facebook.soloader.SoLoader;
//import com.qeeka.zxtt_rn.RNManager;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.qeeka.zxtt_rn.RNManager;

import java.lang.reflect.InvocationTargetException;

public class MainApplication extends Application implements ReactApplication {

//
//  @Override
//  public ReactNativeHost getReactNativeHost() {
//    return RNManager.getReactNativeHost(this);
//  }

  @Override
  public void onCreate() {
    super.onCreate();
//    RNManager.init(this);
//    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this); // Remove this line if you don't want Flipper enabled
  }

  /**
   * Loads Flipper in React Native templates.
   *
   * @param context
   */
  private static void initializeFlipper(Context context) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.facebook.flipper.ReactNativeFlipper");
        aClass.getMethod("initializeFlipper", Context.class).invoke(null, context);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }

  @Override
  public ReactNativeHost getReactNativeHost() {
    return RNManager.getReactNativeHost(this);
  }
}
