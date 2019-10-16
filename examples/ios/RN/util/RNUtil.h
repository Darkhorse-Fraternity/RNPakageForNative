//
//  util.h
//  ZMZX
//
//  Created by 林通 on 2019/7/26.
//  Copyright © 2019年 齐家网. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface RNUtil : NSObject
+(UIViewController *)activityViewController;
+(UINavigationController *)getCurrentNCFrom:(UIViewController *)vc;
+(UINavigationController *)activityNavViewController ;
@end

NS_ASSUME_NONNULL_END
