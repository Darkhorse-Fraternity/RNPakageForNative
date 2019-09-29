/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <ZXTTInRN/ZMRNBaseViewController.h>
#import <ZXTTInRN/BridgeManage.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  
  [BridgeManage shareInstance].bundleRoot = @"index";
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  ZMRNBaseViewController *rootViewController = [ZMRNBaseViewController new];
  rootViewController.openBaseRouteBackBtn = false;
  //  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}


@end
