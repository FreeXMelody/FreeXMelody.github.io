// set up text to print, each item in array is new line
var aText = new Array(
"嗨 , 别来无恙 \u{01F609} ", 
"......",
"想来又快要是第二个三年了吧..",
"  ",
"这也是我第一次尝试以这样的方式呈现自己的想法...",
"  ",
"看到这个网页的链接了么?....",
" 它显示在页面的底部 ",
"  ",
"  ",
"嗯,这是我的博客...这个页面只能通过这个链接访问.",
"  ",
"  ",
"hmmm....让我们新开一页吧",
// new page
" 再来点音乐? ",
" 要开始囖```\u{01F3B5}",
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 14; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

var isComplete = false;
function typewriter(Array)
{
 sContents =  ' ';
//  Math.max() 函数返回一组数中的最大值。 ,这里一般是0吧?
 iRow = Math.max(0, iIndex-iScrollAt);
// 取得id为 typedtext object
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }

 destination.innerHTML = sContents + Array[iIndex].substring(0, iTextPos) + "<span class=\"acursor\">|</span>";
 // 为结尾符号设置动画
 const cur = document.getElementsByClassName("acursor");
 cur[0].style.cssText = 'animation: .8s blink; font-weight:600; font-family: Georgia, serif; animation-iteration-count: infinite;';
 
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter(aText)", 500);
  }
 } else {
  setTimeout("typewriter(aText)", iSpeed);
 }
}

function playMusic(Array,Callback)
{
        sContents =  ' ';
        //  Math.max() 函数返回一组数中的最大值。 ,这里一般是0吧?
         iRow = Math.max(0, iIndex-iScrollAt);
        // 取得id为 typedtext object
         var destination = document.getElementById("typedtext");
         
         while ( iRow < iIndex ) {
          sContents += aText[iRow++] + '<br />';
         }
        
         destination.innerHTML = sContents + Array[iIndex].substring(0, iTextPos) + "<span class=\"acursor\">|</span>";
         // 为结尾符号设置动画
         const cur = document.getElementsByClassName("acursor");
         cur[0].style.cssText = 'animation: .8s blink; font-weight:600; font-family: Georgia, serif; animation-iteration-count: infinite;';
         
         if ( iTextPos++ == iArrLength ) {
          iTextPos = 0;
          iIndex++;
          if ( iIndex != aText.length ) {
           iArrLength = aText[iIndex].length;
           setTimeout("typewriter(aText)", 500);
          }
         } else {
          setTimeout("typewriter(aText)", iSpeed);
         }

         Callback();
        //  isComplete = true;
}

function Callback() {
    code = "<input id=\"buttonAA\" type=\"button\" value=\"开始吧!\" id=\"btn\" style=\"background-color: transparent; border: 2px solid #0099cc; text-align: center; padding: 6px 32px; display: inline-block; margin: 0 4px;\">";
    document.getElementById("btnBox").innerHTML = code;
    
    var musicon = document.getElementById("buttonAA").onclick = function () {
    var audio= new Audio("./HappyBirthday2U.mp3");//这里的路径写上mp3文件在项目中的绝对路径
    audio.play();//播放
    
    }
}

var newPage = new Array (
"  ",
"  ",
"  ",
"  ",
"  ",
"  ",
"  ",
"  ",
"  ",
"  ",
"  ",
"  ",
"  ",
"  ",
"  "
)


console.log(aText[0]);
// 可行的js使用数组参数
// typewriter.apply(this,aText);
// 插入音乐元素
playMusic.apply(this,aText,Callback);
// if (isComplete == true) {
//     iSpeed = 40;
//     typewriter.apply(this,newPage);
// }
