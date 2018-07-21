package com.brooklyn

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.microsoft.appcenter.AppCenter
import com.microsoft.appcenter.analytics.Analytics
import com.microsoft.appcenter.crashes.Crashes



class MainActivity : ReactActivity() {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    override fun getMainComponentName(): String = "Brooklyn"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        //TODO: Read from appcenter-config
        AppCenter.start(application, "b797c2c4-fd77-4619-8306-4fb59752c158", Analytics::class.java, Crashes::class.java)
    }
}
