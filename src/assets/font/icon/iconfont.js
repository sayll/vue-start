(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-delete" viewBox="0 0 1024 1024">'+""+'<path d="M759.634656 322.641351 603.072249 479.203757 446.612171 322.641351 415.29969 353.953832 571.759768 510.516239 415.29969 666.976317 446.612171 698.288798 603.072249 541.82872 759.634656 698.288798 790.947137 666.976317 634.384731 510.516239 790.947137 353.953832Z"  ></path>'+""+'<path d="M802.305586 200.563605c60.987709 0 110.616968 49.62926 110.616968 110.616968l0 398.364345c0 61.090037-49.526931 110.616968-110.616968 110.616968L426.044169 820.161887c-55.666633 0-267.281703-257.458179-304.324573-302.994304-3.274508-4.093135-3.274508-9.618867 0-13.712002 37.04287-45.638453 248.657939-302.994304 304.324573-302.994304L802.305586 200.461277M802.305586 156.35775 426.044169 156.35775c-78.178875 0-320.390127 298.184871-359.786549 347.302488-3.274508 4.093135-3.274508 9.618867 0 13.609673 39.396423 49.117618 281.607675 347.302488 359.786549 347.302488l376.261417 0c85.239532 0 154.925152-69.68562 154.925152-154.925152L957.230738 311.282902C957.230738 226.04337 887.545118 156.35775 802.305586 156.35775L802.305586 156.35775z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-true" viewBox="0 0 1049 1024">'+""+'<path d="M234.962 457.54l191.669 291.813c0 0 54.736-340.697 537.287-694.969-17.967 52.603-47.714 183.763 38.037 265.622-74.396 19.228-413.151 269.582-561.090 649.605-25.843-92.138-276.221-349.213-375.698-359.38 77.53-26.609 169.794-152.692 169.794-152.692z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)