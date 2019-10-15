桥接说明

### 1. RN调用NATIVE
|  方法名   | 参数  |  返回值  |  说明  |
|  ----  | ----  | ----  |----  |
| push  | {url:String,} | 无  | 视图跳转  |
| pop  | {animated:BOOL,} | 无  | 视图返回  |

### 2. NATIVE 调用RN
通过消息通知

|  key   | 是否必须  |  说明  |
|  ----  | ----  | ----  |
| key  | 否 | 暂无  |



### 3. RN默认初始值

|  key   | 是否必须  |  说明  |
|  ----  | ----  | ----  |
| openBaseRouteBackBtn  | 否 | 返回按钮  |
| initialRouteName  | 否 | 初始视图key  |
| initialProperties  | 否 | 其他  |

### 4. 视图key

|  视图   | key  |  
|  ----  | ----  |
| 签到好礼  | forGift |
