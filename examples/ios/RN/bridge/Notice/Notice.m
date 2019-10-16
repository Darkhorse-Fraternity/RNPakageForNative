//
//  Notice.m
//  ZMZX
//
//  Created by tonyYo on 2019/8/20.
//  Copyright © 2019 齐家网. All rights reserved.
//

#import "Notice.h"

@implementation Notice

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}


- (instancetype)init
{
    self = [super init];
    if(self){
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(nativeLocationChange:)
                                                     name:@"userSwitch_City"
                                                   object:nil];
        
    }
    return self;
}

- (NSArray<NSString *> *)supportedEvents
{
    return @[@"NativeLocationChange"];
}


-(void)nativeLocationChange:(NSString *)city{
    [self sendEventWithName:@"NativeLocationChange" body:@{@"city": @""}];
}

-(void)dealloc{
     [[NSNotificationCenter defaultCenter] removeObserver:self];
}
@end
