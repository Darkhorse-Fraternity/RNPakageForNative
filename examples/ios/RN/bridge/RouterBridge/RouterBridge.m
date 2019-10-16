//
//  RouterBridge.m
//  ZMZX
//
//  Created by 林通 on 2019/7/26.
//  Copyright © 2019年 齐家网. All rights reserved.
//

#import "RouterBridge.h"
#import "RNUtil.h"
//#import "DHRouter.h"
//#import "DHTabBarController.h"
@interface RouterBridge()
@property(nonatomic) RCTPromiseResolveBlock resolveInfo;
@end

@implementation RouterBridge
RCT_EXPORT_MODULE();


- (NSArray<NSString *> *)supportedEvents
{
    return @[@"clickTabBar"];
}

RCT_EXPORT_METHOD(push:(NSString *)url)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // UI更新代码
        UINavigationController *nav=[RNUtil activityNavViewController];
        if (nav && url.length>0) {
//            [DHRouter routeByUrl:url onViewController:nav.topViewController];
        }
    });

}

RCT_EXPORT_METHOD(pop:(BOOL)animated)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // UI更新代码
        UINavigationController *nav=[RNUtil activityNavViewController];
        if (nav) {
            [nav popViewControllerAnimated:animated];
        }
    });
}


@end
