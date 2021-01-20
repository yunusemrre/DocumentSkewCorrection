window.onload = function () {

    //IE兼容性警告
    var isIE = !!window.ActiveXObject || "ActiveXObject" in window;
    if (isIE) {
        alert("IE is not currently supported, please use the latest version of Chrome access.");
    }

    // ESC 退出查看大图
    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) {
            $('.popup').classList.remove('popup-show');
            $('huawei-codelab').classList.remove('hidden');
            document.getElementById("bigImg").style.width = "80%";
            document.getElementById("bigImg").style.height = "auto"
        }
    });

    //点击图片显示大图
    var $ = function (obj) {
        return document.querySelector(obj);
    };

    //弹出窗口的关闭按钮加入点击监听
    $('.cloes-tag').addEventListener('click', function () {
        $('.popup').classList.remove('popup-show');
        $('huawei-codelab').classList.remove('hidden');
        document.getElementById("bigImg").style.width = "80%";
        document.getElementById("bigImg").style.height = "auto"
    }, false);

    //图片点击方法
    imageclick = function (src) {
        var windowW = window.innerWidth; //获取当前窗口宽度
        var windowH = window.innerHeight; //获取当前窗口高度

        //将点击图片赋值给弹出大图
        $('img').src = src;
        var realWidth = $('img').width; //获取图片真实宽度
        var realHeight = $('img').height; //获取图片真实高度
        var imgWidth, imgHeight;

        var scale = 0.8; //缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放
        if (realHeight > windowH * scale) {
            //判断图片高度
            imgHeight = windowH * scale; //如大于窗口高度，图片高度进行缩放
            imgWidth = (imgHeight / realHeight) * realWidth; //等比例缩放宽度
            if (imgWidth > windowW * scale) {
                //如宽度扔大于窗口宽度
                imgWidth = windowW * scale; //再对宽度进行缩放
            }
        } else if (realWidth > windowW * scale) {
            //如图片高度合适，判断图片宽度
            imgWidth = windowW * scale; //如大于窗口宽度，图片宽度进行缩放
            imgHeight = (imgWidth / realWidth) * realHeight; //等比例缩放高度
        } else {
            //如果图片真实高度和宽度都符合要求，高宽不变
            imgWidth = realWidth;
            imgHeight = realHeight;
        }

        document.getElementById("bigImg").style.width = imgWidth + "px";
        document.getElementById("bigImg").style.height = imgHeight + "px";

        $('.popup').classList.add('popup-show');
        $('huawei-codelab').classList.add('hidden');
    }

    var queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang') || 'en';
    var alertMsg=document.querySelectorAll('[id^="copy-button"]');
    for (i = 0; i < alertMsg.length; i++) {
        if(lang=="cn")
        {
            alertMsg[i].title="复制";
        }
        else if(lang=="en")
        {
            alertMsg[i].title="Copy";
        }
        else
        {
            alertMsg[i].title="Copy";
        }
    }

    const cardName = urlParams.get('cardName');
    if(cardName) {
        var url = `./../${cardName}/codelab.json?${Math.random()}`;
        var request = new XMLHttpRequest();
        request.open("get", url);
        request.send(null);
        request.onload = function () {
            if (request.status == 200) {
                var json = JSON.parse(request.responseText);
                if(json.updated) {
                    const releaseDoms = document.getElementsByClassName('release-time');
                    const updateStr =  getDateStr_YMD(new Date(json.updated)) + ' ' + (lang == 'en'?'updated':'更新');
                    if(releaseDoms.length > 0) {
                        releaseDoms[releaseDoms.length - 1].innerText = updateStr;
                        releaseDoms[releaseDoms.length - 1].style.display = 'block';
                    } else {
                        const codelabTimeEles =  document.getElementsByClassName('codelab-time-container');
                        if(codelabTimeEles.length  > 0) {
                            codelabTimeEles[codelabTimeEles.length - 1].innerHTML = `<div>
								<div class="release-time" style="display: block;">${updateStr}</div>
							</div>`;
                            codelabTimeEles[codelabTimeEles.length - 1].style.display = 'block';
                        }
                    }

                }
            }
        }
    }


    function getDateStr_YMD(date) {
        if (date) {
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            return year + "-" + parseStr(month) + "-" + parseStr(day) ;
        } else {
            return "";
        }
    }

    function parseStr(str) {
        let ret = str.toString();
        if (ret.length != 2) {
            ret = "0" + ret;
        }
        return ret;
    }

};

function copyCode(btnId) {
    /*复制*/
    var  code = document.getElementById(btnId).nextElementSibling;
    var text = code.innerText;
    var Textarea= document.createElement("textarea"); //使用createElement()创建 textarea 元素
    document.body.appendChild(Textarea); //添加 Textarea 元素
    Textarea.value = text; // 修改文本框的内容
    Textarea.select(); // 选中文本
    document.execCommand("copy"); // 执行浏览器复制命令
    //弹出提示框
    displayMsg();
    //隐藏提示框
    window.setTimeout(hiddenMsg,3000);
    Textarea.style.display = "none";
}
//弹出提示框
function displayMsg() {
    var queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang') || 'en';
    if(lang=="cn")
    {
        var alertMsg = document.getElementById("copy-alertMsg");
        alertMsg.innerHTML="已复制代码";
    }
    else if(lang=="en")
    {
        var alertMsg = document.getElementById("copy-alertMsg");
        alertMsg.innerHTML="Code Copied";
    }
    else
    {
        var alertMsg = document.getElementById("copy-alertMsg");
        alertMsg.innerHTML="Code Copied";
    }
    var alertMsg = document.getElementById("copy-alertMsg");
    alertMsg.style.display = "flex";
    alertMsg.style.bottom = "40px";
}
// 隐藏提示框
function hiddenMsg(){
    var alertMsg = document.getElementById("copy-alertMsg");
    alertMsg.style.display = "none";
}

//初始化hasdk
hasdk = _hasdk || [];
//设置上报地址和idsite，上报地址和idsite是运维人员提供的
hasdk.push(['setOnReportUrl', 'https://cloudbackup.hwcloudtest.cn:6447/webv1']);
hasdk.push(['setIdsite', 'developer.huawei.com/consumer']);
//点击Back按钮触发的事件，上报自定义数据。
document.getElementById('previous-step').onclick = function () {
    hasdk.sendClickData("eventName", "eventLabel", getSelfData("previous-step"), getSelfData("previous-step"));
};
//点击Next按钮触发的事件，上报自定义数据。
document.getElementById('next-step').onclick = function () {
    hasdk.sendClickData("eventName", "eventLabel", getSelfData('next-step'), getSelfData("previous-step"));
};
//获取要上报的数据
function getSelfData(btnId) {
    var stepsTitle = "";
    var totalTitle = document.getElementsByTagName('title')[0].innerHTML;
    var codelabSteps = document.getElementsByTagName('huawei-codelab-step');
    for (var i = 0; i < codelabSteps.length; i++) {
        if (codelabSteps[i].getAttribute('selected') == "") {
            if (btnId == "previous-step") {
                stepsTitle = codelabSteps[i - 1].getAttribute('label') + "-" + "Back";
                break;
            } else if (btnId == "next-step") {
                stepsTitle = codelabSteps[i + 1].getAttribute('label') + "-" + "Next";
                break;
            }
        }
    }
    var titleStr = "codelab" + "-" + totalTitle + "-" + stepsTitle;
    var resultStr = jointSelfData(titleStr);
    return resultStr;
    return titleStr;
}

function directoryClicked(num) {
    hasdk.sendClickData("eventName", "eventLabel", getNowSelfData(num), getNowSelfData(num));
}


function getNowSelfData(num) {
    var totalTitle = document.getElementsByTagName('title')[0].innerHTML;
    var codelabSteps = document.getElementsByTagName('huawei-codelab-step');
    var stepsTitle = codelabSteps[num].getAttribute('label');
    var titleStr = "codelab" + "-" + totalTitle + "-" + stepsTitle;
    var resultStr = jointSelfData(titleStr);
    return resultStr;
}

function jointSelfData(str) {
    var queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const lang = urlParams.get('lang') || 'en';
    var selfData = {
        "type": "clickEvent",
        "serviceItem": "918",
        "tagType": "CMMT0025",
        "language": lang,
        "domain": "official",
        "key": str
    }
    var resultStr = JSON.stringify(selfData);
    return resultStr;
}

function showRecommendations (videoList, cardList) {
    if(videoList.length > 0 || cardList.length > 0) {
        var newrequest = new XMLHttpRequest();
        newrequest.open("get", './../css/self-defined.css');
        newrequest.send(null);
        newrequest.onload = function () {
            if (newrequest.status == 200) {
                const style = document.createElement(`style`);
                style.type = `text/css`;
                style.innerHTML = newrequest.responseText;
                document.getElementsByTagName('body')[0].appendChild(style);

                var queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                const lang = urlParams.get('lang') || 'en';

                let recommentTitle = lang == 'en'?'Related recommendations' : '相关推荐';
                // 生成右侧的相关推荐
                let videoTempHtml = '',cardTempHtml = '',
                    videoListHmtl = '',cardListHtml = '';
                if(videoList.length > 0) {
                    videoList.forEach(function(item) {
                        videoListHmtl += `
						<div class="each-video-wrapper" data-title="${item.title}" data-link="${item.videoLink}">
						    <div class="video-content each-video-content-link" data-title="${item.title}" data-link="${item.videoLink}">
						        <a class="playingmask">►</a>
						        <img src='${item.coverUrl}' alt="">
						    </div>
						    <div class="video-title">${item.title}</div>
						</div>
						`;
                    })
                    videoTempHtml = `<div class="card-content">
						        ${videoListHmtl}
						    </div>`;
                }
                if( cardList.length > 0) {
                    cardList.forEach(function(item) {
                        let imgHtml;
                        if(item.categoryIconUrl) {
                            imgHtml = `<img class="card-maskImg" src='${item.categoryIconUrl}' alt="">`;
                        } else {
                            imgHtml = `<img class="card-maskImg" src='./../media/default-icon.png' alt="">`;
                        }
                        cardListHtml += `
						<div class="each-card-item" data-title="${item.cardName}" data-link="${item.cardDocFileName}">
						    <div class="title">${item.cardName}</div>
						    <div class="card-content">
						        ${item.cardIntroduction}
						    </div>
						    ${imgHtml}
						</div>
						`;
                    })
                    cardTempHtml = ` <div class="card-list-wrapper">
				           ${cardListHtml}
				        </div>`;
                }
                let recommendationHtml = document.createElement('div');
                recommendationHtml.setAttribute('id', 'recommend_container');
                recommendationHtml.setAttribute('class', 'right-recommend');
                recommendationHtml.innerHTML = `<div class="recommend-wrapper">
							<div class="recommend-title">Related recommendations</div>
							  ${videoTempHtml}
							   ${cardTempHtml}
						</div>`;
                document.getElementsByTagName('body')[0].appendChild(recommendationHtml);
                var stepEles = document.getElementsByClassName('inner');
                setTimeout(function(){
                    for( i = 0; i < stepEles.length; i ++) {
                        let pageRecommendationHtml = document.createElement('div');
                        pageRecommendationHtml.setAttribute('id', 'recommend_container');
                        pageRecommendationHtml.setAttribute('class', 'recommend-in-page');
                        var pageCardHtml = '', pageVideoHtml = '';
                        if(videoList.length > 0) {
                            videoList.forEach(function(item) {
                                pageVideoHtml += `
								<div class="each-video-wrapper list-item" data-title="${item.title}" data-link="${item.videoLink}">
								    <div class="video-content each-video-content-link" data-title="${item.title}" data-link="${item.videoLink}">
								        <a class="playingmask">►</a>
								        <img src='${item.coverUrl}' alt="">
								    </div>
								    <div class="video-title">${item.title}</div>
								</div>
								`;
                            })
                        }
                        if( cardList.length > 0) {
                            cardList.forEach(function(item) {
                                let imgHtml;
                                if(item.categoryIconUrl) {
                                    imgHtml = `<img class="card-maskImg" src='${item.categoryIconUrl}' alt="">`;
                                } else {
                                    imgHtml = `<img class="card-maskImg" src='./../media/default-icon.png' alt="">`;
                                }
                                pageCardHtml += `
								<div class="each-card-item list-item" data-title="${item.cardName}" data-link="${item.cardDocFileName}">
								    <div class="title">${item.cardName}</div>
								    <div class="card-content">
								        ${item.cardIntroduction}
								    </div>
								    ${imgHtml}
								</div>
								`;
                            })
                        }
                        pageRecommendationHtml.innerHTML = `
							<div class="recommend-title">${recommentTitle}</div>
							<div class="recommend-wrapper">
									${pageVideoHtml}
						            ${pageCardHtml}
						    </div>`;
                        stepEles[i].appendChild(pageRecommendationHtml);
                    }
                },10);


                setTimeout( function () {
                    const cardListElems =  document.getElementsByClassName('each-card-item');
                    for(let i = 0;i < cardListElems.length;i ++) {
                        cardListElems[i].addEventListener('click',function () {
                            const cardName = cardListElems[i].getAttribute('data-link'),
                                title = cardListElems[i].getAttribute('data-title');
                            sendRecommendClickEvent(title, lang);
                            window.parent.open(`/consumer/${lang}/codelabsPortal/carddetails/${cardName}`, '_blank');
                        })
                    }
                    const videoListElems =  document.getElementsByClassName('each-video-content-link');
                    for(let i = 0;i < videoListElems.length;i ++) {
                        videoListElems[i].addEventListener('click',function () {
                            const cardName = videoListElems[i].getAttribute('data-link'),
                                title = videoListElems[i].getAttribute('data-title');
                            sendRecommendClickEvent(title, lang);
                            window.parent.open(cardName, '_blank');
                        })
                    }
                },200)
            } else {
                console.log('获取css失败');
            }
        }
    } else {
        return;
    }
}

// 上报推荐的打点数据
function sendRecommendClickEvent(title, lang){
    hasdk.sendClickData("eventName", "eventLabel", JSON.stringify({
        "type": "clickEvent",
        "serviceItem": "918",
        "tagType": "CMMT0025",
        "language": lang,
        "domain": "official",
        "contentId": title,
        "type":"card"
    }), JSON.stringify( {
        "type": "clickEvent",
        "serviceItem": "918",
        "tagType": "CMMT0025",
        "language": lang,
        "domain": "official",
        "contentId": title,
        "type":"card"
    }));
}

