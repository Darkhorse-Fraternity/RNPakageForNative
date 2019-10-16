//
//  ZMRNSearcherViewController.h
//  ZMZX
//
//  Created by 林通 on 2019/7/26.
//  Copyright © 2019年 齐家网. All rights reserved.
//

#import <UIKit/UIKit.h>
NS_ASSUME_NONNULL_BEGIN


@interface ZMRNBaseViewController : UIViewController

@property(strong,nonatomic)NSString *initialRouteName;
@property(assign,nonatomic)BOOL openBaseRouteBackBtn;
@property(strong,nonatomic)NSDictionary *initialProperties;
-(instancetype)initWithInitialRouteName:(NSString *)initialRouteName;
-(void)initData;
@end

NS_ASSUME_NONNULL_END
