//author:caibaojian
//website:http://caibaojian.com
//weibo:http:weibo.com/kujian
//这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为750，最大宽度为750，则为(750,750)
!function(e,t){function n(){var n=l.getBoundingClientRect().width;t=t||540,n>t&&(n=t);var i=100*n/e;r.innerHTML="html{font-size:"+i+"px;}"}var i,d=document,o=window,l=d.documentElement,r=document.createElement("style");if(l.firstElementChild)l.firstElementChild.appendChild(r);else{var a=d.createElement("div");a.appendChild(r),d.write(a.innerHTML),a=null}n(),o.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),o.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===d.readyState?d.body.style.fontSize="16px":d.addEventListener("DOMContentLoaded",function(e){d.body.style.fontSize="16px"},!1)}(750,750);

/*3.注意： 
如上述代码为640*828的设计稿，宽高比为1rem=50px（设计稿尺寸） 
换算公式：设计稿像素/50=rem的值 
举个栗子：设计稿需要图片宽高60px*60px 
实际操作：图片的宽度为1.2rem高度为1.2rem 
如果你的设计稿是750*1334请把最后连个参数改为(640,828)改为(750,750),换算依旧是1rem=50px，建议字体大小不用rem。
--------------------- 
作者：吴维炜 
来源：CSDN 
原文：https://blog.csdn.net/qq_38209578/article/details/80701891 
版权声明：本文为博主原创文章，转载请附上博文链接！*/