//
//  Tool.m
//  ZMZX
//
//  Created by 林通 on 2019/7/30.
//  Copyright © 2019年 齐家网. All rights reserved.
//

#import "Tool.h"
#import "BridgeManage.h"
@implementation Tool
RCT_EXPORT_MODULE();



RCT_EXPORT_METHOD(getConfigInfo:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    resolve(@{
//              @"api_html_host":AppInfo().h5Host
              
              });
}

RCT_EXPORT_METHOD(isIphoneX:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    resolve(@{
//              @"isIphoneX":@(AppInfo().isIPhoneX)
              
              });
}

@end
