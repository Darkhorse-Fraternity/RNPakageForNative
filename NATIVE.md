桥接说明

### 1. RN调用NATIVE
| 方法名      | 参数             | 返回值 | 说明     |
| ----------- | ---------------- | ------ | -------- |
| push        | {url:String,}    | 无     | 视图跳转 |
| pop         | {animated:BOOL,} | 无     | 视图返回 |
| getUserinfo | {animated:BOOL,} | 无     | 视图返回 |

### 2. NATIVE 调用RN
通过消息通知

| key | 是否必须 | 说明 |
| --- | -------- | ---- |
| key | 否       | 暂无 |



### 3. RN默认初始值

| key                  | 是否必须 | 说明        | eg            |
| -------------------- | -------- | ----------- | ------------- |
| openBaseRouteBackBtn | 否       | 返回按钮    |
| initialRouteName     | 否       | 初始视图key |
| initialProperties    | 否       | 其他        | {host:String} |

### 4. RN视图key

| 视图       | key       |
| ---------- | --------- |
| 签到好礼   | forGift   |
| 一分钟学习 | onemstudy |

### 5. native视图key
  | 视图   | url                                                  |
  | ------ | ---------------------------------------------------- |
  | 课堂   | xxx                                                  |
  | 齐家币 | zxtt://open/native?params={\"url\":\"task_center\"}" |



### 6. req header 原生传递参数说明

`interface PropsApp {
  readonly networkConfig: string | Object;
  readonly user?: string | Object;
  readonly common?: string | Object;
  readonly initialRouteName?: string;
  readonly openBaseRouteBackBtn?: boolean;
}`
eg:
networkConfig：
{
  "app-id" : "800",
  "appkey" :"015a5f879a124a258f51cf89ea21a701",
  "idfa" : "4DF19967-45D3-4C04-8D7C-1FA604116508",
  "client-ip" : "192.168.31.49",
  "deviceId" : "7FAA1FDB-D231-4BD5-8CA6-B75E0152A8BC",
  "devicePlatform" : "iOS",
  "channel-code" : "AppStore",
  "deviceIMEI" : "7FAA1FDB-D231-4BD5-8CA6-B75E0152A8BC",
  "packageName" : "com.qijia.o2o",
  "appChannel" : "AppStore",
  "appVersion" : "3.4.0",
  "screenHeight" : "896",
  "from-app" : "Y",
  "city" : "shanghai",
  "sessionId" : "09f773c7-ef37-4c75-8ee8-67960029ec92",
  "device-id" : "7FAA1FDB-D231-4BD5-8CA6-B75E0152A8BC",
  "platform" : "ios",
  "channel-name" : "AppStore",
  "area_cn" : "上海",
  "appId" : "800",
  "screenWidth" : "414",
  "app-version" : "3.4.0",
  "client-id" : "18b983b9ff9e57bff740e5c2c9902941",
  "userId" : "101526953"
}