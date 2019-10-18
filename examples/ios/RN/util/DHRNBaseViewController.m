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
                                                     @"app-id" : @"800",
                                                     @"appkey" : @"015a5f879a124a258f51cf89ea21a701",
                                                     @"idfa" : @"4DF19967-45D3-4C04-8D7C-1FA604116508",
                                                     @"client-ip" : @"192.168.31.49",
                                                     @"deviceId" : @"7FAA1FDB-D231-4BD5-8CA6-B75E0152A8BC",
                                                     @"devicePlatform" : @"iOS",
                                                     @"channel-code" : @"AppStore",
                                                     @"deviceIMEI" : @"7FAA1FDB-D231-4BD5-8CA6-B75E0152A8BC",
                                                     @"packageName" : @"com.qijia.o2o",
                                                     @"appChannel" : @"AppStore",
                                                     @"appVersion" : @"3.4.0",
                                                     @"screenHeight" : @"896",
                                                     @"from-app" : @"Y",
                                                     @"city" : @"shanghai",
                                                     @"sessionId" : @"09f773c7-ef37-4c75-8ee8-67960029ec92",
                                                     @"device-id" : @"7FAA1FDB-D231-4BD5-8CA6-B75E0152A8BC",
                                                     @"platform" : @"ios",
                                                     @"channel-name" : @"AppStore",
                                                     @"area_cn" : @"上海",
                                                     @"appId" : @"800",
                                                     @"screenWidth" : @"414",
                                                     @"app-version" : @"3.4.0",
                                                     @"client-id" : @"18b983b9ff9e57bff740e5c2c9902941",
                                                     @"userId" : @"101526953"
                                                }}];
}

@end
