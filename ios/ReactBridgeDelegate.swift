//
//  ReactBridgeDelegate.swift
//  Brooklyn
//
//  Created by Deren Ebdon on 6/12/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation

class ReactBridgeDelegate: NSObject, RCTBridgeDelegate {
  func sourceURL(for bridge: RCTBridge!) -> URL! {
    /*
    #if DEBUG
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil)!
    #else
    return CodePush.bundleURL()
    #endif
    */
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil)!
  }
}
