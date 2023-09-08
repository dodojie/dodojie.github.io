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


## 获取bind_key
(仅部分设备需要此步)


1. 在homeassistant的`HACS`里面，搜索并安装 `Xiaomi Gateway 3`
2. 在homeassistant的`添加集成`里面，搜索并添加 `Xiaomi Gateway 3`集成。第一步动作选择`Add Mi Cloud Account`，第二步填写上你的小米账号即可。
3. 进入刚才添加的`Xiaomi Gateway 3`集成，点击`选项`，弹出米家所有设备下拉列表，选择你要获取`bind_key`的那个蓝牙子设备，提交即可。

如下图所示：
   <img src="/img/ble/1.png"  width="500" />|


## 配置MI32Keys
(仅部分设备需要此步)


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