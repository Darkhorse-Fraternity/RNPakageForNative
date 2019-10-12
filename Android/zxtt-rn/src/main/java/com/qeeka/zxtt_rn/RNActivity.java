package com.qeeka.zxtt_rn;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

public class RNActivity extends ReactActivity {


    @Override
    protected String getMainComponentName() {
        return "SuryaniRN";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {
                return RNActivity.this.getIntent().getExtras();
            }
        };
    }
}
