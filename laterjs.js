/*!
   * Rolling Mint
   * roll20-log-customize
   *
   * https://headdrop.github.io/roll20-log-customize/
   *
   * by headdrop
   */
function selectRule(){let e=document.getElementById("rule"),t=e.options[document.getElementById("rule").selectedIndex].text,l=e.selectedIndex,s=[["Roll20 기본","Theme 2"],["Roll20 기본"]];if(document.getElementById("theme").innerHTML="",0!==l){var n=`<div class="message general"><div class="spacer"></div><div class="avatar" aria-hidden="true"></div><span class="tstamp" aria-hidden="true">March 13, 2021 8:34PM</span><span class="by">룰 템플릿 미리보기</span>${1===l?'<div class="sheet-rolltemplate-Ninpo"><div class="sheet-bordered"><div class="sheet-vtop"><div class="sheet-blacklabel sheet-top" style="width: 80%"><span class="sheet-big">PC Roll 기본공격</span><span>(공격)</span></div><div class="sheet-resright"><span class="inlinerollresult showtip tipsy-n-right fullcrit" title="Rolling 2d6 =3+6">9</span></div></div><div class="sheet-myrow"><span class="sheet-lbl sheet-bold" data-i18n="assigned-skill-z">지정특기: </span><span class="sheet-notes sheet-inl">파괴  </span></div><div class="sheet-myrow"><span class="sheet-lbl sheet-bold" data-i18n="target-z">목표치: </span><span class="sheet-notes sheet-inl">8</span></div><div class="sheet-desc"><span class="sheet-notes">목표 1명을 선택해서 명중판정을 한다. 명중판정이 성공하고, 목표가 회피판정에 실패하면 1D6점 대미지.</span></div></div></div>':2===l?'<div class="sheet-rolltemplate-coc-1"><table><caption>SAN Roll</caption><tbody><tr><td class="sheet-template_label" data-i18n="value">기준치:</td><td class="sheet-template_value"><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 50 = 50">50</span>/<span class="inlinerollresult showtip tipsy-n-right" title="Rolling floor(50/2) = floor(50/2)">25</span>/<span class="inlinerollresult showtip tipsy-n-right" title="Rolling floor(50/5) = floor(50/5)">10</span></td></tr><tr><td class="sheet-template_label" data-i18n="rolled">굴림:</td><td class="sheet-template_value"><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d100 = (<span class=&quot;basicdiceroll&quot;>44</span>)">44</span></td></tr><tr style="background: #bebebe"><td class="sheet-template_label" data-i18n="result">판정결과:</td><td style="background: darkgreen" class="sheet-template_value" data-i18n="success">보통 성공</td></tr></tbody></table></div>\n    </div><div class="message general">\n    <div class="sheet-rolltemplate-coc"><table><caption>근접전(격투)</caption><tbody><tr><td class="sheet-template_label" data-i18n="value">기준치:</td><td class="sheet-template_value"><span class="inlinerollresult showtip tipsy-n-right" original-title="Rolling 25 = 25">25</span>/<span class="inlinerollresult showtip tipsy-n-right" original-title="Rolling floor(25/2) = floor(25/2)">12</span>/<span class="inlinerollresult showtip tipsy-n-right" original-title="Rolling floor(25/5) = floor(25/5)">5</span></td></tr><tr><td class="sheet-template_label" data-i18n="rolled">굴림:</td><td class="sheet-template_value"><span class="inlinerollresult showtip tipsy-n-right" original-title="<img src=&quot;/images/quantumrollwhite.png&quot; class=&quot;inlineqroll&quot;> Rolling 1d100 = (<span class=&quot;basicdiceroll&quot;>58</span>)">58</span>, <span class="inlinerollresult showtip tipsy-n-right" original-title="<img src=&quot;/images/quantumrollwhite.png&quot; class=&quot;inlineqroll&quot;> Rolling 1d100 = (<span class=&quot;basicdiceroll&quot;>21</span>)">21</span>, <span class="inlinerollresult showtip tipsy-n-right" original-title="<img src=&quot;/images/quantumrollwhite.png&quot; class=&quot;inlineqroll&quot;> Rolling 1d100 = (<span class=&quot;basicdiceroll&quot;>76</span>)">76</span></td></tr><tr style="background: #dff0d8"><td class="sheet-template_label">+2:</td><td class="sheet-template_value" data-i18n="success">보통 성공</td></tr><tr style="background: #d9edf7"><td class="sheet-template_label">+1:</td><td class="sheet-template_value" data-i18n="success">보통 성공</td></tr><tr style="background: #d3d3d3"><td class="sheet-template_label">&nbsp;&nbsp;0:</td><td class="sheet-template_value" data-i18n="fail">실패</td></tr><tr style="background: #fcf8e3"><td class="sheet-template_label">-1:</td><td class="sheet-template_value" data-i18n="fail">실패</td></tr><tr style="background: #f2dede"><td class="sheet-template_label">-2:</td><td class="sheet-template_value" data-i18n="fail">실패</td></tr></tbody></table></div>':""}</div>`;s[l-1].forEach(((e,s)=>{let n=`<il><input type="radio" name="${t}" id="r${l}_t${s+1}"><label for="r${l}_t${s+1}">${e}</label></il> `;$("#theme").append(n),0===s&&$(`#r${l}_t${s+1}`).prop("checked",!0)})),theme()}else n="";document.getElementById("ruleExample").innerHTML=n,$("#theme input").on("change",theme)}$((function(){$("#rule").on("change",selectRule),document.getElementById("download").addEventListener("click",downloadCss),document.querySelector(".custom .apply").addEventListener("click",(()=>{customCss(),setTimeout((function(){checkOpt()}),800)}))}));let link=document.createElement("link");function theme(){try{document.getElementById("rule-css").remove()}catch{}let e=document.querySelector("#theme :checked").id;link.rel="stylesheet",link.type="text/css",link.href=`./theme/${e}.css`,link.id="rule-css",document.body.appendChild(link)}const inputElement=document.querySelector('input[type="file"]'),pond=FilePond.create(inputElement);var fileArr=[];function customCss(){$("style[id]").remove();var e=/(?<=\/\*\().+?(?=\)\*\/)/s;fileArr=[];let t=document.getElementById("editing").value;""!=t&&fileArr.push(t);var l=0;for(Promise.resolve();l<pond.getFiles().length;l++){var s=pond.getFile(l).file;const t=pond.getFile(l).id;new Promise(((n,a)=>{var i=new FileReader;i.onload=function(){var s=i.result;if(fileArr.push(s),-1!=s.indexOf("t1n4i2m4g5n8i9l7lor")){var n=e.exec(s)[0],a=JSON.parse(n);let t=document.querySelectorAll(".glo-option input");for(var o=0;o<t.length;o++){var d="true"===a.option.split(",")[o];t[o].checked=d}for(l of(tableColor(a.table),styleLog))".sheet-rolltemplate-default table"===l.selectorText?l.style.borderColor=a.table:".sheet-rolltemplate-default caption"===l.selectorText&&(l.style.backgroundColor=a.table);$("#rule").val(a.rule),selectRule(),$(".nice-select .current")[0].innerText=$(`option[value=${a.rule}]`)[0].innerText,"RULE"===a.rule||(document.getElementById(a.theme).checked="true")}var r=document.createElement("style");r.type="text/css",r.id=t,r.innerHTML=s,document.getElementsByTagName("head")[0].appendChild(r)},i.readAsText(s)})).then((e=>{}))}}function downloadCss(){for(var e=[],t=0;t<$(".glo-option input").length;t++)e.push($(".glo-option input")[t].checked);var l=$("#rule").val(),s="RULE"===l?"":document.querySelector("#theme :checked").id,n=""===$("#defaultTable").val()?"rgb(112, 32, 130)":$("#defaultTable").val();const a=`/* Rolling Mint by headdrop (@hdtrpg)\n  OPTION EXISTED identification code t1n4i2m4g5n8i9l7lor\n*/\n  \n  /*( {\n  "option" : "${e.join(",")}",\n  "table" : "${n}",\n  "rule" : "${l}",\n  "theme" : "${s}"\n  } )*/`;var i=[];for(t=10;t<styleNew.length;t++)-1!=styleNew[t].cssText.search("#")&&i.push(styleNew[t].cssText);saveToFile_Chrome("roll20 log mint custom.css",a+"\n\r"+i.join("\n"))}function saveToFile_Chrome(e,t){var l=new Blob([t],{type:"text/css"});objURL=window.URL.createObjectURL(l),window.__Xr_objURL_forCreatingFile__&&window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__),window.__Xr_objURL_forCreatingFile__=objURL;var s=document.createElement("a");s.download=e,s.href=objURL,s.click()}var styleLog=document.styleSheets[3].cssRules,styleNew=document.styleSheets[4].cssRules;function fillStyle(){var e,t;imgChange();for(let t of styleLog)null==e?e=t.cssText:e+=t.cssText;for(let e of styleNew)null==t?t=e.cssText:t+=e.cssText;for(var l=[],s=0;s<document.styleSheets.length;s++){if(null==document.styleSheets[s].href)for(let e of document.styleSheets[s].cssRules)l.push(e.cssText);if("rule-css"==document.styleSheets[s].ownerNode.id)for(let e of document.styleSheets[s].cssRules)l.push(e.cssText)}document.getElementById("styledata").innerText="<style>"+e+t+l.join("")+"</style>",manufacturLog()}function manufacturLog(e){var t=document.querySelector("[name='line']:checked").value,l=document.getElementById("log-content").innerHTML;if(l=l.replace(/(^\s*?<div (id="textchat"\s*|class="textchatcontainer"\s*){0,2}>\s*<div class="content">|<\/div>\s*<\/div>\s*$)/gi,""),l=$("#ck-colourised").is(":checked")?l.replace(/(before-style="background-color.+?")/gi,""):l.replace("before-style=","style="),$("#ck-noimg").is(":checked")&&(l=l.replace(/(<div class="avatar").+?(<\/div>)/gi,"")),"all"===t)document.getElementById("datatextarea").insertAdjacentHTML("beforeend",'<textarea id="inputVal-1"></textarea>'),document.getElementById("inputVal-1").innerText='<div class="textchatcontainer" id="textchat"><div class="content">'+l+"</div></div>";else try{const e=[...l.matchAll(/<div class="message/gi)];var s;Math.ceil(e.length);for(var n=1;;n++){var a,i;if(null==document.getElementById("inputVal-"+n)&&document.getElementById("datatextarea").insertAdjacentHTML("beforeend",`<textarea id="inputVal-${n}"></textarea>`),a=e[(n-1)*t].index,null==e[n*t]){document.getElementById("inputVal-"+n).innerText='<div class="textchatcontainer" id="textchat"><div class="content">'+l.substring(a)+"</div></div>",s=n,document.querySelector("#copy-modal .btn-box").insertAdjacentHTML("afterbegin",`<div id='page'><span></span> / ${s}</div>`);break}i=e[n*t].index,document.getElementById("inputVal-"+n).innerText='<div class="textchatcontainer" id="textchat"><div class="content">'+l.substring(a,i)+"</div></div>"}}catch(e){modaltog("#error-modal")}}function nextCopy(e){const t=document.querySelectorAll("[id^='inputVal']").length;null!=document.getElementById("page")&&(document.querySelector("#page span").innerText=e),e<t+1?(document.getElementById("output").innerText=document.getElementById("inputVal-"+e).value.replace(/(^<div><div>)|(<\/div><\/div>$)/gi,""),document.getElementById("copy-target-change").onclick=function(){nextCopy(e+1)}):(document.getElementById("output").innerText="",modaltog(),alert("완료되었습니다!"),$("[id^='inputVal']").remove())}function modaltog(e){null==e?($(".modal").fadeOut(200),setTimeout((function(){$(".modal>div").attr("style","")}),1e3),null!=document.getElementById("page")&&document.getElementById("page").remove()):($(".modal").fadeIn(200),document.querySelector(e).style.visibility="visible")}function loadertog(){return"flex"==document.querySelector(".loader").style.display?$(".loader").fadeOut(200):$(".loader").fadeIn(200).css("display","flex"),new Promise(((e,t)=>{e()}))}