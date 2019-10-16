//
//  ZMRNSearcherViewController.m
//  ZMZX
//
//  Created by 林通 on 2019/7/26.
//  Copyright © 2019年 齐家网. All rights reserved.
//

#import "ZMRNBaseViewController.h"
#import <React/RCTRootView.h>

//#import "BIDObjectToNSDictionary.h"
#import "BridgeManage.h"
@interface ZMRNBaseViewController ()
@property (nonatomic, assign) UIStatusBarStyle barStyle;
@property (nonatomic, assign) BOOL navigationBarHide;
@end

@implementation ZMRNBaseViewController

- (instancetype)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil {
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        self.hidesBottomBarWhenPushed = YES;
        [self initData];
    }
    return self;
}

-(instancetype)initWithInitialRouteName:(NSString *)initialRouteName{
    self = [super init];
    if(self){
        self.initialRouteName = initialRouteName;
        
    }
    return self;
}
-(void)initData{
    
}

//findDesigner
- (void)viewDidLoad {
    [super viewDidLoad];
//    if(self.navigationController){
//        self.openBaseRouteBackBtn = self.navigationController.childViewControllers.count > 1;
//    }
    
    BridgeManage *bm = [BridgeManage shareInstance];
    [bm run];
//    ZMLoginUserInfoModel *info =  [QJShareTools getUserInfoModel].userInfo;
//    NSString *tracking_id = [[NSUserDefaults standardUserDefaults] objectForKey:KEY_Associative_Code];
    NSMutableDictionary *initialProperties = [NSMutableDictionary dictionaryWithCapacity:3];
//    initialProperties[@"config"] = @{ @"api_html_host":API_HTML_HOST};
    initialProperties[@"openBaseRouteBackBtn"] = @(self.openBaseRouteBackBtn);
    if (self.initialRouteName.length>0) {
        initialProperties[@"initialRouteName"] = self.initialRouteName;
    }
    if (self.networkConfig) {//httpRequest的参数
        initialProperties[@"networkConfig"] = self.networkConfig;
    }
    if (self.common) {//其他公共参数
        initialProperties[@"common"] = self.common;
    }
    if(self.initialProperties){
        [initialProperties addEntriesFromDictionary:self.initialProperties];
    }
  
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bm.bridge
                                                     moduleName:@"SuryaniRN"
                                              initialProperties:initialProperties];
    
    self.view = rootView;

    // Do any additional setup after loading the view.
}

-(void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear:animated];
    
    // 要做单独处理，否则首页的头部会不显示。可以做一个bool值来做判断。
    self.navigationBarHide = self.navigationController.navigationBar.hidden;
    [self.navigationController setNavigationBarHidden:true animated:false];
    if(self.barStyle && [UIApplication sharedApplication].statusBarStyle != self.barStyle){
//        [UIApplication sharedApplication].statusBarStyle = self.barStyle;
            [[UIApplication sharedApplication] setStatusBarStyle: self.barStyle
                                             animated:animated];
    }

 
//    if()
  
}

//-(UIStatusBarStyle)preferredStatusBarStyle{
//    if(self.barStyle){
//        return self.barStyle;
//    }else{
//        return UIStatusBarStyleDefault;
//    }
//}


-(void)viewWillDisappear:(BOOL)animated{
    [self.navigationController setNavigationBarHidden:false animated:false];
    self.barStyle =  [UIApplication sharedApplication].statusBarStyle;
    self.navigationController.navigationBar.hidden = self.navigationBarHide;
}


@end