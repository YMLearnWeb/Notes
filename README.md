# Notes
CSS and JS Notes


CSS note:
	• Pointer-events:none

Flex ISSUES
	• No width to the image, the image sharpness will be low. Set max-width could be helpful



下面着重说一下$(”body“).animate({“scrollTop”:top})不被Firefox支持的问题

##("body").animate({"scrollTop":top})
不被Firefox支持问题的解决。
其实是因为使用了body的：

##$("body").animate({"scrollTop":top})
只被chrome支持，而不被Firefox支持。
而使用html的：
?
##("html").animate({"scrollTop":top})
只被Firefox支持，而不被chrome支持。
如果想让这段js被chrome和Firefox都支持的话，应该这样：

##("html,body").animate({"scrollTop":top})
看到了吗，就是将html和body这两者都加上就可以了。
