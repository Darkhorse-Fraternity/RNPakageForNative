package com.zxttrntest;

import android.app.Application;
import android.content.Context;
//import com.facebook.react.ReactApplication;
//import com.facebook.react.ReactNativeHost;
//import com.facebook.react.ReactPackage;
//import com.facebook.soloader.SoLoader;
//import com.qeeka.zxtt_rn.RNApplication;

import com.qeeka.zxtt_rn.RNApplication;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

public class MainApplication extends RNApplication {

//
//  @Override
//  public ReactNativeHost getReactNativeHost() {
//    return RNApplication.getReactNativeHost(this);
//  }

  @Override
  public void onCreate() {
    super.onCreate();
    //RNApplication.getReactNativeHost(this);
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
}
