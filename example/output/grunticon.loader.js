/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */
window.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.opera&&-1===navigator.userAgent.indexOf("Chrome")||-1!==navigator.userAgent.indexOf("Series40")),o={},r=function(r){var a=t.document.createElement("link"),c=t.document.getElementsByTagName("script")[0];a.rel="stylesheet",a.href=e[r&&n?0:r?1:2],a.media="only x",r&&n&&(a.onload=function(){o=i(),m(d),m(u)}),c.parentNode.insertBefore(a,c),setTimeout(function(){a.media="all"})},i=function(){for(var n,o=t.document.styleSheets,r=e[0],i=0;o.length>i;i++)if(o[i].href&&o[i].href.indexOf(r)>-1){n=o[i];break}if(n){var a={},d=n.cssRules?n.cssRules:n.rules;for(i=0;d.length>i;i++){var c=d[i].cssText,l=c.split("{")[0].split(",").pop(),s=l.replace(".","").trim(),u=c.split(");")[0].match(/US\-ASCII\,([^"']+)/);if(u&&u[1]){var m=decodeURIComponent(u[1]);a[s]=m}}return a}},a="data-grunticon-embed",d=function(){for(var e in o){var n=t.document.querySelectorAll("."+e+"["+a+"]");if(n.length)for(var r=0;n.length>r;r++)n[r].innerHTML=o[e],n[r].style.backgroundImage="none",n[r].removeAttribute(a)}},c="data-grunticon-use",l=t.document.createElement("div"),s=[],u=function(){for(var e in o){var n=t.document.querySelectorAll("."+e+"["+c+"]");if(n.length){if(l.parentNode||(l.className="grunticon-template",l.style.display="none",t.document.body.insertBefore(l,t.document.body.firstChild)),!t.document.getElementById(e)){var r=o[e].match(/viewBox="([^"]+)/im)&&RegExp.$1,i=o[e].replace(/<\/?svg[^>]*>/gim,"");s.push("<symbol id='"+e+"' viewBox='"+(r||"")+"'>"+i+"</symbol>")}var a="<svg><use xlink:href='#"+e+"'></use></svg>";t.document.createElement("div");for(var d=0;n.length>d;d++)n[d].innerHTML=a,n[d].style.backgroundImage="none",n[d].removeAttribute(c)}}l.innerHTML="<svg><defs>"+s.join("")+"</defs></svg>"},m=function(e){"loading"!==t.document.readyState?e():t.document.addEventListener&&t.document.addEventListener("DOMContentLoaded",e,!1)},g=new t.Image;g.onerror=function(){r(!1)},g.onload=function(){r(1===g.width&&1===g.height)},g.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};