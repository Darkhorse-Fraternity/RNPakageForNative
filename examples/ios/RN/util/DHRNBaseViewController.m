//
//  DHRNBaseViewController.m
//  QJDecoratingHeadlines
//
//  Created by 罗伟 on 2019/10/15.
//  Copyright © 2019 www.jia.com. All rights reserved.
//

#import "DHRNBaseViewController.h"

@interface DHRNBaseViewController ()

@property (nonatomic) NSDictionary *common;

@end

@implementation DHRNBaseViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}
-(void)initData{
    [super initData];
//    self.networkConfig = [[NSMutableDictionary alloc] init];
//    [self.networkConfig setValue:AppInfo().ip forKey:@"client-ip"];
//    [self.networkConfig setValue:QJ_DEVICEID forKey:@"device-id"];
//    [self.networkConfig setValue:@"ios" forKey:@"platform"];
//    [self.networkConfig setValue:AppInfo().appVersion forKey:@"app-version"];
//    [self.networkConfig setValue:AppInfo().appkey forKey:@"appkey"];
//    [self.networkConfig setValue:NetworkConfig().appChannel forKey:@"channel-name"];
//    [self.networkConfig setValue:NetworkConfig().appChannel forKey:@"channel-code"];
//    [self.networkConfig setValue:AppInfo().stationID forKey:@"app-id"];
//    [self.networkConfig setValue:AppInfo().CID forKey:@"client-id"];
//    [self.networkConfig setValue:[NSString stringWithFormat:@"%.f",[[UIScreen mainScreen] bounds].size.width] forKey:@"screenWidth"];
//    [self.networkConfig setValue:[NSString stringWithFormat:@"%.f",[[UIScreen mainScreen] bounds].size.height] forKey:@"screenHeight"];
//    if (AppInfo().selectCityModel) {
//        [self.networkConfig setValue:AppInfo().selectCityName forKey:@"area_cn"];
//        [self.networkConfig setValue:AppInfo().selectCityNameP forKey:@"city"];
//    }else {
//        [self.networkConfig setValue:@"other" forKey:@"area_cn"];
//    }
}

@end
