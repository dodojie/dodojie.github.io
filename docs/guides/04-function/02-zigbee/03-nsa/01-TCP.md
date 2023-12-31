# TCP

此工作方式为最常用工作方式。




## 拨动开关

拨动开关切换到如下状态。

1|ON
:---:|:---:
2|OFF
:::caution 注意

进行下一步之前，请务必确认拨动开关是否已设置正确，否则zigbee功能在此模式下将不能正常工作。

:::



## 设置

1. 进入网关管理页面，依次进入，`设置`-->`模板设置`
2. 设置引脚如下  
   `GPIO1 --->  TCP Tx`  
   `GPIO3 --->  TCP Rx`


:::tip

网关出厂固件默认即为此设置，如果您未修改过此处，便无需修改。

:::


## 上位机配置

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Z2M" label="Z2M" default>

打开z2m的配置文件 `configuration.yaml` ,修改以下配置：

```yaml
# 开启ha自动发现
homeassistant: true

# 开启配对模式
permit_join: true

# 开启前端网页管理(默认端口号为8080)
frontend: true

# MQTT配置
mqtt:
  # mqtt发布主题前缀
  base_topic: zigbee2mqtt
  # mqtt服务器地址(请务必改成自己的服务器地址)
  server: 'mqtt://192.168.100.1:1883'
  # mqtt账号密码，如果有账号密码请去掉前面的注释，如果没有无需修改。
  # user: my_user
  # password: my_password

# 串口设置(务必跟此处配置一致，请勿修改)
serial:
  port: tcp://[网关ip地址]:8888    //请务必修改[网关ip地址]
```
  </TabItem>
  <TabItem value="ZHA" label="ZHA">

hass搜索集成 `zha` 并添加 ---> 选择 `Enter Manually` 提交 ---> 选择`ZNP`提交 ---> 串行设备路径设置为如下地址，波特率勿改，数据流控制选择 `software` 填写正确后提交


```
socket://[网关ip地址]:8888
```
  </TabItem>
</Tabs>


