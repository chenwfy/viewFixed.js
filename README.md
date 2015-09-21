# viewFixed.js
通过动态计算缩放比例，以固定宽度适配HTML5移动WEB页面。
### 示例：
```
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>title</title>
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no, email=no, address=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width">
    <script src="viewFixed.js"></script>
</head>
<body>    
</body>
</html>

```
### 注意：
在引入viewFixed.js之前，必须写入
```
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width">

```
以获取设备原始屏幕像素宽度用于计算缩放比例。

### 已知问题：
1：目前仅在IPHONE和大部分常见android手机设备上测试通过，其他如平板等设备并未测试过。
2：猎豹浏览器手机版缩放设置无效，暂时未知原因。。。
