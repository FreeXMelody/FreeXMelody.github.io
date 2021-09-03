<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>// 可爱的Title
// var OriginTitle = document.title;
// var titleTime;
// document.addEventListener('visibilitychange', function() {
//     if (document.hidden) {
//         $('[rel="icon"]').attr('href', "/img/favicon.png");
//         document.title = '(つ∇⊂) 看不到我~看不到我~~';
//         clearTimeout(titleTime);
//     } else {
//         $('[rel="icon"]').attr('href', "/img/favicon.png");
//         document.title = '(*´∇｀*) 还是被你发现啦~~' + OriginTitle;
//         titleTime = setTimeout(function() {
//             document.title = OriginTitle;
//         }, 2000);
//     }
// });

var l2d = document.getElementById("live2d");
var l2dCanvas = l2d.getContext("2d");
l2dCanvas.scale(0.5,0.5);