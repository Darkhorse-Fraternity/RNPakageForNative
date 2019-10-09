package com.qeeka.zxtt_rn;

import android.app.Application;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;

import java.util.List;

/**
 * Created by Even on 2019-09-29
 */
public class RNApplication {

    public static  ReactNativeHost reactNativeHost;

    public static ReactNativeHost getReactNativeHost(Application app) {
        return new ReactNativeHost(app) {
            @Override
            public boolean getUseDeveloperSupport() {
                return BuildConfig.DEBUG;
            }

            @Override
            protected List<ReactPackage> getPackages() {
                @SuppressWarnings("UnnecessaryLocalVariable")
                List<ReactPackage> packages = new PackageList(this).getPackages();
                // Packages that cannot be autolinked yet can be added manually here, for example:
                // packages.add(new MyReactNativePackage());
                return packages;
            }

            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };
    }

}
