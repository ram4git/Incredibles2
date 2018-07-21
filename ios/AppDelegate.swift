//
//  AppDelegate.swift
//  Brooklyn
//
//  Created by Deren Ebdon on 6/12/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  var rctBridge: RCTBridge!
  var window: UIWindow?
  
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    AppCenterReactNativeAnalytics.register(withInitiallyEnabled: true)
    AppCenterReactNativeCrashes.registerWithAutomaticProcessing()
    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.rctBridge = RCTBridge(delegate: ReactBridgeDelegate(), launchOptions: launchOptions)
    #if DEBUG
    self.rctBridge.module(for: object_getClass(RCTDevLoadingView.self()))
    #endif
    let rctRootView = RCTRootView(bridge: rctBridge, moduleName: "Brooklyn", initialProperties: nil)
    let rootViewController = UIViewController()
    rootViewController.view = rctRootView;
    self.window!.rootViewController = rootViewController
    self.window!.makeKeyAndVisible()
    return true
  }
}
