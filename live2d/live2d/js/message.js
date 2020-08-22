function renderTip(template, context) {
    var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;
    return template.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2) {
            return word.replace('\\', '');
        }
        var variables = token.replace(/\s/g, '').split('.');
        var currentObject = context;
        var i, length, variable;
        for (i = 0, length = variables.length; i < length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    });
}

String.prototype.renderTip = function (context) {
    return renderTip(this, context);
};


/**
 * Object.defineProperty(对象,对象属性,对象属性的特性)
 * get:function(){}获取当前值是触发的方法
 * set:function(value){x = value}//当设置值的时候触发的函数,设置的新值通过参数value拿到
 */
var element = new Image();
Object.defineProperty(element, 'id', {
    get: function () {
        /* TODO */
        showMessage('哈哈，你打开了控制台，是想要看看我的秘密吗？', 5000);
    }
});
//%c表示css样式
//console.log('%cHello', element);

//原作者
// var re = /x/;
// console.log(re);
// re.toString = function () {
//     showMessage('哈哈，你打开了控制台，是想要看看我的秘密吗？', 5000);
//     return '';
// };

$(document).on('copy', function () {
    showMessage('你都复制了些什么呀，转载要记得加上出处哦~~', 5000);
});

//鼠标移入和点击事件
function initTips() {
    $.ajax({
        cache: true,
        url: "/live2d/live2d/MCMsg.json",
        dataType: "json",
        success: function (result) {
            $.each(result.mouseover, function (index, tips) {
                $(tips.selector).mouseover(function () {
                    var text = tips.text;
                    if (Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1) - 1];
                    text = text.renderTip({ text: $(this).text() });
                    showMessage(text, 3000);
                });
            });
            $.each(result.click, function (index, tips) {
                $(tips.selector).click(function () {
                    var text = tips.text;
                    if (Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1) - 1];
                    text = text.renderTip({ text: $(this).text() });
                    showMessage(text, 3000);
                });
            });
        }
    });
}
initTips();


//初次加载时的互动
(function () 
{
    var text;
    var text2;
    if (document.referrer != '') {
        var referrer = document.createElement('a');
        referrer.href = document.referrer;
        text = '嗨！来自 <span style="color:#0099cc;">' + referrer.hostname + '</span> 的朋友！';
        var domain = referrer.hostname.split('.')[1];

        if (domain == 'baidu') {
            text = '嗨！ 来自 百度搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 缘星星丶的个人博客 」</span>';
        } else if (domain == 'so') {
            text = '嗨！ 来自 360搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 缘星星丶的个人博客 」</span>';
        } else if (domain == 'google') {
            text = '嗨！ 来自 谷歌搜索 的朋友！<br>欢迎访问<span style="color:#0099cc;">「 缘星星丶的个人博客 」</span>';
        }
    } 

        var day = (new Date()).getDate();
        var month = (new Date()).getMonth() + 1;//0为1月 以此类推 什么鬼设定
        var date = month + '-' + day;
        var now = (new Date()).getHours();
        if (now > 23 || now <= 5) {
            text2 = '抓住一只夜猫子！··这么晚还不睡觉，明天起的来嘛？Σ(っ °Д °;)っ';
        } else if (now > 5 && now <= 7) {
            text2 = '早上好！一日之计在于晨，美好的一天就要开始了！';
        } else if (now > 7 && now <= 11) {
            text2 = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
        } else if (now > 11 && now <= 14) {
            text2 = '中午了，工作了一个上午，现在是午餐时间！';
        } else if (now > 14 && now <= 17) {
            text2 = '午后很容易犯困呢，今天的运动目标完成了吗？';
        } else if (now > 17 && now <= 19) {
            text2 = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~~';
        } else if (now > 19 && now <= 21) {
            text2 = '晚上好，今天过得怎么样？';
        } else if (now > 21 && now <= 23) {
            text2 = '已经这么晚了呀，早点休息吧，晚安~~';
        } else {
            text2 = 'Have a nice day!';
        }
        // console.log("Output:"+ text2 );
        if (date == '1-1')
            text = '元旦阔乐！！！';
        else if (date == '2-14')
            text = '情人节快乐丫~ （情人节还来这里 你是有多无聊呢 嘻嘻）';
        else if (date == '5-1')
            text = '劳动节的意义在于放假！！！ヽ(✿ﾟ▽ﾟ)ノ';
        else if (date == '10-1')
            text = '国庆节快乐 哼哼~';
        else if (date == '11-11')
            text = '光棍节欸 今天来这 你是老光棍了把（偷笑）';
        else if (date == '10-26')
            text = '呼呼 今天是本站作者缘星星丶的生日哦~';
        else if (date == '12-25')
            text = '圣诞快乐 一年又快要过去了呢';
        else
            text = '欢迎来到<span style="color:#0099cc;">「 缘星星丶的个人博客 」</span>(๑•̀ㅂ•́)و✧';
    showMessage(text + "<br />" + text2, 15000); 
    // 既然不知道如何分开输出 干脆就合在一起罢
}());

window.setInterval(showHitokoto, 25000);

function showHitokoto() {
    $.getJSON('https://v1.hitokoto.cn/', function (result) {
        showMessage(result.hitokoto, 5000);
    });
}

function showMessage(text, timeout) {
    if (Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1) - 1];
    // isArray 判断是否是一个数组  这里应该是false  math.floor 返回小于或等于一个给定数字的最大整数 
    //console.log('showMessage', text);
    $('.message').stop();
    $('.message').html(text).fadeTo(200, 1);
    if (timeout === null) timeout = 5000;
    hideMessage(timeout);
}

function hideMessage(timeout){
    $('.message').stop().css('opacity',1);
    if (timeout === null) timeout = 5000;
    $('.message').delay(timeout).fadeTo(200, 0);
}

function initLive2d (){
    $('.hide-button').fadeOut(0).on('click', () => {
        $('#landlord').css('display', 'none')
    })
    $('#landlord').hover(() => {
        $('.hide-button').fadeIn(600)
    }, () => {
        $('.hide-button').fadeOut(600)
    })
}
function ConsoleLogMsg()
{
    console.log(
        "%c ☁️ 缘星星丶's Blog %c https://fxlabtinystar.cn/",
        "color: white; background: #0078E7; padding:5px 0;",
        "padding:4px;border:1px solid #0078E7;"
      );
      
}
initLive2d();
ConsoleLogMsg();

