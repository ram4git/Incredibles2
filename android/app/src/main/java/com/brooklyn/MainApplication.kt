package com.brooklyn

import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.shell.MainReactPackage
import com.facebook.soloader.SoLoader
import com.idehub.GoogleAnalyticsBridge.GoogleAnalyticsBridgePackage
import com.microsoft.appcenter.reactnative.analytics.AppCenterReactNativeAnalyticsPackage
import com.microsoft.appcenter.reactnative.appcenter.AppCenterReactNativePackage
import com.microsoft.appcenter.reactnative.crashes.AppCenterReactNativeCrashesPackage
import java.util.*
import com.oblador.vectoricons.VectorIconsPackage
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage


import java.util.Arrays

class MainApplication : Application(), ReactApplication {

    private val reactNativeHost = BrooklynReactNativeHost(this)

    override fun getReactNativeHost(): ReactNativeHost = reactNativeHost

    class BrooklynReactNativeHost(applicationContext: Application) : ReactNativeHost(applicationContext) {
        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG
        override fun getJSMainModuleName() = "index"
        override fun getPackages(): List<ReactPackage> {
            return Arrays.asList<ReactPackage>(
                    MainReactPackage(),
                    AppCenterReactNativeCrashesPackage(this.application, this.application.resources.getString(R.string.appCenterCrashes_whenToSendCrashes)),
                    AppCenterReactNativeAnalyticsPackage(this.application, this.application.getString(R.string.appCenterAnalytics_whenToEnableAnalytics)),
                    AppCenterReactNativePackage(this.application),
                    GoogleAnalyticsBridgePackage(),
                    VectorIconsPackage(),
                    ReactNativeLocalizationPackage()
            )
        }
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, /* native exopackage */ false)
    }
}