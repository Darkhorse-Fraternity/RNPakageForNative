package com.zxttrntest;

//import android.content.Intent;
//import android.os.Bundle;
//import android.os.PersistableBundle;
//
import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.Nullable;
//import androidx.appcompat.app.AppCompatActivity;


import androidx.appcompat.app.AppCompatActivity;

import com.facebook.react.ReactActivityDelegate;
import com.qeeka.zxtt_rn.RNActivity;

//import com.qeeka.zxtt_rn.RNActivity;

public class MainActivity extends RNActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {
          @Nullable
          @Override
          protected Bundle getLaunchOptions() {
              return new Bundle();
          }
      };
  }
}
