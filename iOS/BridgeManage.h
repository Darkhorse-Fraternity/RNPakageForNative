//
//  BridgeManage.h
//  ZMZX
//
//  Created by 林通 on 2019/7/26.
//  Copyright © 2019年 齐家网. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeDelegate.h>


NS_ASSUME_NONNULL_BEGIN

@interface BridgeManage : NSObject <RCTBridgeDelegate>

@property(nonatomic,strong) RCTBridge *bridge;
@property(nonatomic,strong) NSString *bundleRoot;


+(instancetype)shareInstance;
-(void)run;
@end

NS_ASSUME_NONNULL_END
