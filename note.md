# Web回顾和新学

复习和学习的目标是搭建一个完整的个人网站/小规模网站，并且记录下学习过程中的思考和对工具的理解。

## HTML
HTML实际上定义了页面的内容，并且用标签标明每一部分在页面中的角色，这些标签不用来排版，但是明确了内容的逻辑位置。

### w3school的html测试

4.在下列的 HTML 中，哪个可以插入折行？
您的回答：`<break>`

正确答案：`<br>` 
这是一个没有结尾的标签，不需要`</br>`，尽量使用`<br />`

6.请选择产生粗体字的 HTML 标签：
您的回答：`<bold>`

正确答案：`<b>`一般使用的是h1-h6，他们会自带换行

7.请选择产生斜体字的 HTML 标签：
您的回答：`<italics>`

正确答案：`<i>`

8.在下列的 HTML 中，哪个可以产生超链接？
您的回答：`<a url="http://www.w3school.com.cn">W3School.com.cn</a>`

正确答案：`<a href="http://www.w3school.com.cn">W3School</a>`
没有url这一属性

9.如何制作电子邮件链接？
您的回答：`<a href="mailto:xxx@yyy">`

10.如何在新窗口打开链接？
您的回答：`<a href="url" target="new">`

正确答案：`<a href="url" target="_blank">`
_blank可以每点击一次都在新标签页打开一个新链接， 其他的_new, new, blank会打开新标签页，但是每次点击都会刷新这个新标签页

11.以下选项中，哪个全部都是表格标签？
您的回答：`<table><tr><td>`

15.在下列的 HTML 中，哪个可以产生复选框？
您的回答：`<input type="check">`

正确答案：`<input type="checkbox">`
check和下面的text都是文本框

16.在下列的 HTML 中，哪个可以产生文本框？
您的回答：`<input type="text">`

17.在下列的 HTML 中，哪个可以产生下拉列表？
您的回答：`<select>`

18.在下列的 HTML 中，哪个可以产生文本区（textarea）？
您的回答：`<textarea>`

19.在下列的 HTML 中，哪个可以插入图像？
您的回答：`<img src="image.gif">`

20.在下列的 HTML 中，哪个可以插入背景图像？
您的回答：`<background img="background.gif">`

正确答案：`<body background="background.gif">`

### w3school琐碎

* anchor锚的使用，在跳转终点新创建一个a标签，里面属性name/id，在跳转起点链接标签中直接使用锚的名称作为href

* a标签的target属性。view_window可以打开新窗口，并且在点击新的此属性连接后会在同一窗口打开新内容；view_frame是在此网页的框架内打开窗口；_parent，_top等其他的http://www.w3school.com.cn/tags/att_a_target.asp

* 链接地址最后要加/：请始终将正斜杠添加到子文件夹。假如这样书写链接：`href="http://www.w3school.com.cn/html"`，就会向服务器产生两次 HTTP 请求。这是因为服务器会添加正斜杠到这个地址，然后创建一个新的请求，就像这样：`href="http://www.w3school.com.cn/html/"`

* div是块元素，span是内联元素（不换行）

* &nbsp不间断空格，不会被截短

* DOCTYPE：http://www.w3school.com.cn/tags/tag_doctype.asp

### HTML5
加入了新标准和新特性

* 视频/音频支持
```
<video src="movie.ogg" width="320" height="240" controls="controls">
Your browser does not support the video tag.
</video>
```
controls提供视频控件，video标签之间是无法显示视频时呈现的文字。也可以放入source标签，浏览器会显示第一个可识别的视频

* drag拖拽，主要使用dataTransfer记录拖拽数据，用ondrop等事件进行判断，把一个元素添加到另一个元素中http://www.w3school.com.cn/html5/html_5_draganddrop.asp

* Web存储：localStorage - 没有时间限制的数据存储，数据是永久的；sessionStorage - 针对一个 session 的数据存储，浏览器关闭后数据会清楚。他们都用javascript进行访问

* cache manifest可以缓存文件，让页面在离线状态下也能打开http://www.w3school.com.cn/html5/html_5_app_cache.asp

* webworker，运行在后台的js脚本，不影响页面性能http://www.w3school.com.cn/html5/html_5_webworkers.asp

* server-sent events，sse之前用过但是记得有3s请求一次的固定要求，把要发送的数据设置为格式text/event-stream，从后台发送数据到前台js的的sse中http://www.w3school.com.cn/html5/html_5_serversentevents.asp

* 新的input表单特性，可以对如email，number等格式进行要求http://www.w3school.com.cn/html5/html_5_form_input_types.asp 此外还有对表单元素的其他属性

### XHTML
看上去是一些基于HTML4.0.1的要求，没有HTML5好用


## CSS

选择器：元素选择器。同级并列选择用逗号隔开；多级选择用空格隔开：`div p`指选择div标签中的p标签；*通配选择器选择所有，可以忽略不写。

类选择器`.`。区分大小写，`.important.warning`选择同时属于这两个类的元素，如`<p class="important urgent warning">`，多个类用空格并列隔开。

ID选择器`#`。区分大小写，不支持类选择器一样的空格并列，一个HTML中一个id只能出现一次。

属性选择器`[]`。选择input标签中满足title属性要求的元素:`input[title="password"]`，这和`input [title="password"]`是不同的，后者中间有了空格就是后代选择器，选择input标签内满足属性要求的标签，而不是选择满足要求的input标签（类选择器同理）；另外`[attribute~=value]`用于选择在标签中以空格隔开的但是含有value的属性。

后代选择器vs子元素选择器。子选择器使用大于号`>`,后代选择器只要有上下关系即可，不需要明确作为下一级子元素，而子元素选择器要求满足子元素，例：`table.company td > p`：上面的选择器会选择作为 td 元素子元素的所有 p 元素，这个 td 元素本身从 table 元素继承，该 table 元素有一个包含 company 的 class 属性。

相邻兄弟选择器：使用加号`+`，`a + b`选择所有满足a同级相邻的b元素（如果同级有6个li，`li + li`的选择结果是5个li）。

伪类，委员素：使用`:`，具有hover等是否鼠标悬停，是否访问过等属性，伪类和伪元素的first-child使用完全不同。http://www.w3school.com.cn/css/css_pseudo_classes.asp

* 框模型：外边距合并问题:两个相邻的margini会自动合并为保留其中大的

* 定位：每个元素都包含框，块元素包含块框，行内元素包含行内框，即不换行地处于元素内

三种定位：普通定位，浮动和绝对定位;display:inline/block等可以进行设定显示模式。

posotion属性有四种：<br>
static：正常的文档流；<br>
relative：元素仍然占有static定位的位置，但是有相对偏移，可以理解为特殊的文档流定位；<br>
absolute：元素从文档流中删除，相对于包含块定位；<br>
fixed：相对于视窗window定位，即页面拖动后始终相对于窗口处在所设定位置，absolute会移动，其他相当于absolute

浮动定位：float设定之后定位脱离文档流。clear属性可以设定元素左/右是否有浮动元素，比如页面顶部和尾部使用clear，中间使用float，底部不加上clear：left就会让它显示在页面中间。

transform和transition：transform在css中定义一个元素的形状颜色位置等变化，transition规定进行这个元素css属性变化时的进行过程，比如delay，在ring-menu中用到了hover之后改变transform，这样元素就会执行transition中的效果，实现动画效果。

## JS

### 基础：
* 给未声明的变量赋值会让它成为全局变量，`str = "hello"`让str成为全局变量；重新声明变量不重新赋值不会改变变量的值

* 数字和字符串相加结果会是字符串

* js字符串的值不可改变（immutable）

* ===是类型和值的全等于，`x = 5, x == "5" true, x === "5" false`

### 高级

#### DOM
Document Object Model（文档对象模型），是HTML和XML文档的编程接口，主要对于js

* 渲染问题。js的write语句可以添加html标签，但是您只能在 HTML 输出中使用 document.write，如果您在文档加载后使用该方法，会覆盖整个文档。

* DOM的css属性采用camel-case命名，而css中采用短线连接多个单词命名

DOM的Event Flow事件流：三个阶段：捕获（capture）、目标（target）、冒泡（bubbling）

捕获阶段：事件对象在事件目标的祖先中上到下顺向传播，从最顶层的defaultView到事件目标的（直系）父元素，所以若div中包含一个button，button的点击事件在捕获阶段会现在div中触发，但是一般不监听捕获阶段。可以通过在addEventListener中第三个参数设为true监听`element.addEventListener('click', function() {}, true)`;

目标阶段：事件达到目标对象，点击事件在这里触发，若事件是不可冒泡事件，就在此阶段后终止；

冒泡阶段：事件对象会在事件目标的祖先元素里反向传播，由开始的父元素到最后的defaultView（document），实际的相应顺序是button-div，就是div在冒泡阶段触发。

https://www.jianshu.com/p/382895a4027d 最下的例子中展示了这个过程，在使用true设定捕获阶段事件时它就不能再捕获冒泡阶段事件了，需要另外加入一个监听器。

BOM: Browser Object Model（浏览器对象模型），包含window/document的浏览器方法，有计时器，cookies等；相对于DOM有标准，BOM有共识无标准；document在BOM和DOM共有

#### prototype

js中都是对象，函数也是对象，对象传递的都是引用

* 函数调用的四种方式

* this: js中this指向调用这个函数的上一级对象，没有就是window，所以this.value指向调用这个函数的上级对象的value；构造函数会让this指向新建的对象，apply（）也可以改变调用对象

* 函数scope

* closure 
```
var counter = function c(){
	var amount = 0;
    return function(){
    	return amount++;
        }
}
var c1 = counter();
var c2 = counter();
c1(); //0
c1(); //1
c2(); //0 因为c函数返回值是内层函数，c1c2在创建变量时都调用了以此这个c函数，每次都把amount初始化为0。若单独调用c（）是没有结果的，闭包可以隐藏起来amount变量，并且对每个新建的量初始化。
```

原型链：https://github.com/creeperyang/blog/issues/9

对象的`__proto__`指向自己构造函数的`prototype`，instanceof就是通过检查`a.__proto__.__proto__...===Constructor.prototype`实现的,检查对象a是不是Constructor的实例

```
function Foo(){};
var one = new Foo();
one.__proto__ === Foo.prototype; //true
Foo.prototype.constructor === Foo; //true 构造子
//往下走
Foo.prototype.__proto__ === Object.prototype //true 函数也是对象
Foo.__proto__ === Function.prototype; //true Foo的原型是Function
Function.prototype.__proto__ === Object.prototype; //true 函数也是对象
//但是
Function.__proto === Function.prototype; //true
Object.__proto__ === Function.prototype; //true 鸡生蛋蛋生鸡问题的起源
//最终
Object.prototype.__proto__ === null; //true原型链的终点
```

