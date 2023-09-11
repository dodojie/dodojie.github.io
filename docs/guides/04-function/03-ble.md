# 蓝牙网关

## 支持的蓝牙子设备列表

型号|产品图片|bind_key|型号|产品图片|bind_key
:---:|:---:|:---:|:---:|:---:|:---:
MJ_HT_V1|<img src="/img/ble/mj_ht_v1.png"  width="150" />|不需要|MiFlora|<img src="/img/ble/miflora.png"  width="150" />|需要|
LYWSD02|<img src="/img/ble/LYWDS02.png"  width="150" />|不需要|LYWSD03MMC|<img src="/img/ble/LYWSD03MMC.png"  width="150" />|需要|
CGG1|<img src="/img/ble/CGG1.png"  width="150" />|不需要|NLIGHT|<img src="/img/ble/nlight.png"  width="150" />|需要|
CGD1|<img src="/img/ble/CGD1.png"  width="150" />|不需要|MJYD2S|<img src="/img/ble/mjyd2s.png"  width="150" />|需要|
YEE RC|<img src="/img/ble/yeerc.png"  width="150" />|需要|MHO-C401|<img src="/img/ble/MHO-C401.png"  width="150" />|需要|
MHO-C303|<img src="/img/ble/MHO-C303.png"  width="150" />|需要|MCCGQ02HL|<img src="/img/ble/MCCGQ02HL.png"  width="150" />|需要|

## 开启蓝牙网关功能

进入网关管理后台页面主菜单，依次点击 `设置` --> `Configure BLE` ，选中 `Enable Bluetooth`，然后点击`保存`即可。
:::note 小提醒

`Enable Active Scan`选项为使能主动扫描，开启后会缩短传感器数据获取的时间，但是会增加传感器耗电量，减少电池使用时间，请谨慎开启。

:::

开启蓝牙网关功能后，如果在蓝牙覆盖范围内有支持的蓝牙子设备，网关会自动通信，并将获取到的传感器数据展示到网关管理后台主页面上，如下图所示。

<img src="/img/ble/2.png"  width="400" />

## 获取bind_key
(仅部分设备需要此步)

大多数较旧的小米蓝牙传感器都是使用未加密的数据包传输，这类传感器无需获取bind_key即可正常工作。但是，自LYWSD03MMC等传感器开始，出现了数据被加密的情况，此类较新的传感器，建议获取bind_key后使用，否则可能会出现无法读取传感器数据或者耗电增加的情形。

1. 在homeassistant的`HACS`里面，搜索并安装 `Xiaomi Gateway 3`
2. 在homeassistant的`添加集成`里面，搜索并添加 `Xiaomi Gateway 3`集成。第一步动作选择`Add Mi Cloud Account`，第二步填写上你的小米账号即可。
3. 进入刚才添加的`Xiaomi Gateway 3`集成，点击`选项`，弹出米家所有设备下拉列表，选择你要获取`bind_key`的那个蓝牙子设备，提交即可。

如下图所示：
   <img src="/img/ble/1.png"  width="500" />|


## 配置MI32Keys
(仅部分设备需要此步)

此步是将刚才获取的bind_key传递给网关，使网关得以使用bind_key与蓝牙设备通信。

1. 在`consoles` ---> `控制台`，输入以下命令，多个ble设备用空格隔开。

```js
rule3 on System#Boot do MI32keys <mac>=<bind_key> <mac>=<bind_key> endon
```

示例

```js
rule3 on System#Boot do MI32keys C47C8D63AA38=000102030405060708090a0bFFFFFFFF C47C8D63AA03=000102030405060708090a0bFFFFFFFF endon
```

2. 输入以下命令，以启用`rule3`

```js
rule3 1
```


## MQTT主题格式

```js
tele/HL810PRO_[网关MAC后六位]/SENSOR
```

示例
```js
tele/HL810PRO_9D0EB0/SENSOR
```
不同传感器标识包含在MQTT消息中，如下列MQTT消息中，`"Flora63aa38"`即为小米的花花草草传感器，后六位字符为该蓝牙传感器的后六位MAC地址。

```
tele/HL810PRO_9D0EB0/SENSOR = {"Time":"2023-09-11T15:49:46","Flora63aa38":{"mac":"c47c8d63aa38","Temperature":30.3,"Illuminance":305,"Moisture":3,"Fertility":279,"RSSI":-60},"TempUnit":"C"}
```