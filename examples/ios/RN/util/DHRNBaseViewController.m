//
//  DHRNBaseViewController.m
//  QJDecoratingHeadlines
//
//  Created by 罗伟 on 2019/10/15.
//  Copyright © 2019 www.jia.com. All rights reserved.
//

#import "DHRNBaseViewController.h"

@interface DHRNBaseViewController ()
@end

@implementation DHRNBaseViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}
-(void)initData{
  [super initData];
  self.networkConfig= [NSMutableDictionary dictionaryWithCapacity:5];
  
  NSString * host = @"http://zxtt.jia.com/";
#ifdef DEBUG
  host = @"http://api-zxtt.zxtt.qa.qeeka.com/";
#endif
  
  
  [self.networkConfig addEntriesFromDictionary:@{@"host":host,
                                                 @"h5Host":@"https://:h5.m.jia.com/",
                                                 @"headerConfig":@{
                                                     @"client-ip" : @"192.168.31.49",
                                                     @"device-id" : @"7FAA1FDB-D231-4BD5-8CA6-B75E0152A8BC",
                                                     @"platform" : @"ios",
                                                     @"app-version" : @"3.4.0",
                                                     @"appkey" : @"015a5f879a124a258f51cf89ea21a701",
                                                     @"channel-name" : @"AppStore",
                                                     @"channel-code" : @"AppStore",
                                                     @"app-id" : @"800",
                                                     @"client-id" : @"18b983b9ff9e57bff740e5c2c9902941",
                                                     @"screenWidth" : @"414",
                                                     @"screenHeight" : @"896",
                                                     @"area_cn" : @"上海",
                                                     @"city" : @"shanghai"},
                                                 @"cookieConfig":@{@"from-app" : @"Y",
                                                       @"sessionId" : @"09f773c7-ef37-4c75-8ee8-67960029ec92",
                                                       @"userId" : @"101526953",
                                                       @"deviceId" : @"7FAA1FDB-D231-4BD5-8CA6-B75E0152A8BC",
                                                       @"appVersion" : @"3.4.0",
                                                       @"appChannel" : @"AppStore",
                                                       @"devicePlatform" : @"iOS",
                                                       @"deviceIMEI" : @"7FAA1FDB-D231-4BD5-8CA6-B75E0152A8BC",
                                                       @"appId" : @"800",
                                                       @"packageName" : @"com.qijia.o2o",
                                                       @"idfa" : @"4DF19967-45D3-4C04-8D7C-1FA604116508"}
                                                 }];
}

@end
