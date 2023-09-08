# 配置WIFI

## 连接WIFI

1.  
    * 使用一台可以连接wifi的设备(比如手机)，连接到网关自动生成的初始化配置热点，热点名称为HL810PRO-XXX-XXX-XXX，此热点无密码。- > 如图一所示 
    * 连接热点后，一般都会默认自动跳转到wifi配置页面，如果没自动跳转，请在手机的wifi连接页面，点一下网关的热点或者在浏览器的地址栏输入`192.168.4.1`并连接。如果还是无法进入，请把网关电源拔掉，然后重新上电。
2. 在wifi配置页面，填写网关要连接的wifi的账号和密码，然后点击保存按钮即可，等待网关主动连接wifi。- > 如图二所示
3. 如果wifi配置成功，会自动跳转到如图三所示的页面，请记住此处显示的ip地址，因为后面管理网关以及配置z2m或者zha都需要用到此ip地址。




:::note
* 无法连接到隐藏的AP。
* 网关上所带RGB氛围灯可以指示wifi连接状态，如果未连接wifi，RGB灯会持续闪烁，如果已连接wifi，将停止闪烁。
* z2m或者zha连接到网关的端口号为"8888"
:::





<center>
	<img src="https://herlon.gitee.io/img-bed/herlon-docs/wifi11.jpg" width="30%" />
	&emsp;&rArr;&emsp;
	<img src="https://herlon.gitee.io/img-bed/herlon-docs/wifi22.jpg" width="30%" />
	&emsp;&rArr;&emsp;
	<img src="https://herlon.gitee.io/img-bed/herlon-docs/wifi33.jpg" width="30%" />
</center>



## 设置静态IP


在网关后台管理主页面，依次点击，`consoles` ---> `控制台`，在控制台输入以下命令，回车执行。

```
IPAddress1 192.168.100.189
```
请将命令中的ip地址改为适合您自己网段的静态ip


## 设置动态IP(DHCP)


网关初始连接wifi后，默认即为动态IP，所以只有您设置过静态ip，而且想再改回到动态IP，才需要执行以下命令。

```
IPAddress1 0.0.0.0
```