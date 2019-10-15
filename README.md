### ZXTT-RN 使用说明

1.rn的开发会和原生环境进行隔离,在完成后加入原生。

2.zxtt-rn 使用 node 包管理工具, 其配置在根目录的package.json 里面。可以通过[NPM](https://docs.npmjs.com/). 进行管理。 原生代码和js 代码会自动加载在node_module里面。

3.因为担心部分同学没有安装node ,所以我们会直接将node_module包加入主项目git中。


### 原生配置说明
#### iOS

1.在pod 中加入:
`require_relative  './node_modules/zxtt-rn/rn-pod'`
`pod 'ZXTTInRN', :path =>  './node_modules/zxtt-rn/iOS'`

2.在何处使用即加入:
`ZMRNBaseViewController *rnViewController = [ZMRNBaseViewController new];`

#### Android

1.在settings.gradle 中加入
`include ':zxtt-rn' `
`project(':zxtt-rn').projectDir = new File('./node_module/zxtt-rn')`

2.在项目build.gradle 中加入
`repositories{`
       ` ...`
      `maven {url("$rootDir/../../node_modules/react-native/android")}`
    `}`

3.在工程build.gradle dependencies中加入
`implementation project(':zxtt-rn')`

2.在何处使用即加入:
暂无

### RN开发第三方组件配置说明
iOS不使用rn0.60之后的自动配置,因为这会对原生项目造成侵入，而安卓继续沿用。

### npm
这边还是一样,通过npm add xxx 添加组件， 这里推荐使用[YARN](https://www.baidu.com/link?url=OZPDrLVCg4dnBsO1aTf_w8z-smPA3r6LG_SWU2BR5wLmH1kRg10P5_RYcd7qFZ72&wd=&eqid=e8bd0a2700d3f4c0000000065da14cb0) 来替代[NPM](https://docs.npmjs.com/)

#### iOS
在zxtt-rn根目录的rn-pod.rb上手动添加依赖

#### Android
无



### ZXTT-RN 测试
先在工程目录下执行 [yarn](https://www.baidu.com/link?url=OZPDrLVCg4dnBsO1aTf_w8z-smPA3r6LG_SWU2BR5wLmH1kRg10P5_RYcd7qFZ72&wd=&eqid=e8bd0a2700d3f4c0000000065da14cb0) install 或者(npm install)

#### iOS
`react-native run-ios --project-path ./examples/ios`

#### Android

`react-native run-android --root './examples/' --variant debug`


### 发布前运行
`npm run rn-deploy` 
