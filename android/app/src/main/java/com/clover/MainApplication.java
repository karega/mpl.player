/* MainApplication.java */

package com.mplplayer;

import java.util.Arrays;
import java.util.List;
import android.app.Application;

// first...  react native dependencies...\
import com.facebook.react.ReactApplication;
import com.speechtotext.SpeechToTextPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import com.github.droibit.android.reactnative.customtabs.CustomTabsPackage;

import com.facebook.FacebookSdk;
import com.magus.fblogin.FacebookLoginPackage;

public class MainApplication extends Application implements ReactApplication {
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost( this ) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
            new SpeechToTextPackage(),
                new FacebookLoginPackage(),
                new CustomTabsPackage()
            );
        }
    };

    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
}