// set up text to print, each item in array is new line

var birth = new Date('2021-9-29');
year = birth.getFullYear();
month = birth.getMonth() + 1;
day = birth.getDate();
// var nowTime = new Date('2021-10-5');
var nowTime = new Date().getTime();
var passedSec = Math.round(nowTime - birth)
console.log('已经过去了约' + Math.ceil(passedSec/86400000) + '天');
var aText = new Array( 
"或许当你看到这个网页的时候正值国庆假期,",
"所以...让我们把时间定格在\u{0231B}" + year + '年' + month + '月' + day + '日' + '......',
"  ","  ","  ",
"嗨 , 别来无恙 \u{01F609} ", 
"......",
"想来又快要是第二个三年了吧..",
"  ",
"这也是我第一次尝试以这样的方式呈现自己的想法...",
"  ",
"看到这个网页的链接了么?....",
" 它显示在页面的底部 ",
"  ",
"嗯,这是我的博客...这个页面只能通过这个链接访问.",
" 唔...或是我发给你的二维码 ",
"  ",
"这..算是我为你准备的一个小小生日礼物啦....",
"以独特的方式~~!",
"原谅JS(JavaScript)才没学多久...所以看起来有些粗糙...",
// new page
" 这是它的链接,等它显示完全后点击就可以进入啦!",
"https://fxlabtinystar.cn/timeline/to_u/specialGift/",
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

        //  isComplete = true;
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
playMusic.apply(this,aText);
// if (isComplete == true) {
//     iSpeed = 40;
//     typewriter.apply(this,newPage);
// }
