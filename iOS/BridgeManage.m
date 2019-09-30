//
//  BridgeManage.m
//  ZMZX
//
//  Created by 林通 on 2019/7/26.
//  Copyright © 2019年 齐家网. All rights reserved.
//

#import "BridgeManage.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <CodePush/CodePush.h>

@implementation BridgeManage
//
//+ (void)load {
//    [self shareInstance];
//
//}

static BridgeManage *_singleInstance = nil;
+(instancetype)shareInstance
{
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        if (_singleInstance == nil) {
            _singleInstance = [[self alloc]init];
//             _singleInstance.bundleRoot = @"node_modules/zxtt-rn/index";
            _singleInstance.bundleRoot = @"index";
           
           
        }
    }); 
    return _singleInstance;
}


-(void)run
{
    RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:_singleInstance launchOptions:nil];
    _singleInstance.bridge = bridge;
}

#pragma rn url delegate
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
    return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:self.bundleRoot fallbackResource:nil];
#else
    return [CodePush bundleURL];
#endif
}


@end
