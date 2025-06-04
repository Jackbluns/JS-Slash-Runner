const e="【可点击的选择框】",t=/```\S*\s*<checkbox>(.*)<\/checkbox>\s*```/is,r=/(?:Checkbox_start|```\n<Checkbox>)([\s\S]+?)(?:Checkbox_end|<\/Checkbox>\n```)/i;var a,n;async function o(e){const a=getChatMessages(e)[0].message,o=a.match(t)||a.match(r);if(!o)return;const s=n.extract_checkbox_element(o[1]),l=retrieveDisplayedMessage(e),c=l.find('.roleplay_checkbox, pre:contains("<Checkbox>")');c.length>0&&(c.remove(),l.append(s))}async function s(){$("#chat").children(".mes[is_user='false'][is_system='false']").each(((e,t)=>{o(Number(t.getAttribute("mesid")))}))}function l(){const e=$('.mes[is_user="false"][is_system="false"]').last().find(".roleplay_checkbox_content").map(((e,t)=>$(t).text().trim())).toArray();triggerSlash(`/send ${0===e.length?"继续推进":_.sample(e)} || /trigger`)}!function(t){const a={input_mode:"直接发送"};t.update=async function(){const n=t.option;return t.option=await async function(){const t=_.merge({},...(await getLorebookEntries(e)).filter((e=>e.comment.startsWith("设置-")&&e.enabled)).map((e=>{const t=e.comment.replace("设置-","");return{[t]:e.content}})));let n=a;return _.has(t,"直接发送")?n.input_mode="直接发送":_.has(t,"覆盖输入")?n.input_mode="覆盖输入":_.has(t,"尾附输入")&&(n.input_mode="尾附输入"),n}(),!_.isEqual(t.option,n)}}(a||(a={})),function(t){let n;t.update=async function(){const t=n;return n=await async function(){const t=(await getLorebookEntries(e)).filter((e=>e.comment.startsWith("样式-")&&e.enabled));return 0===t.length?`<style>
        body {
            --bc: rgb(255, 255, 255);
            --bk: rgb(179, 179, 179);
        }

        .roleplay_checkbox_back {
            background-color: pink;
            padding: 10px;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            gap: 25px;
            padding-bottom: 30px;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
            margin-right: 5px;
            border: 1px solid #b18597;
            font-size: 15px;
            max-height: 100px;
            overflow-y: auto;
            margin: 20px 0;
        }

        .roleplay_checkbox_title {
            font-size: 13px;
            line-height: 1.4;
            letter-spacing: 0.7px;
            font-weight: 600;
            color: #382b22;
            margin-bottom: 4px;
        }

        .roleplay_checkbox_content {
            margin-left: 2rem;
            font-size: 14px;
            line-height: 1.4;
            letter-spacing: 0.7px;
            color: #382b22;
            font-weight: normal;
            transition: color .25s ease;
            text-align: left;
            flex: 1;
            overflow-wrap: anywhere;
        }

        .roleplay_checkbox_hr {
            display: block;
            border: 0;
            border-top: 1px solid #b18597;
            margin: 0.5em 0;
        }

        .roleplay_checkbox_item {
            font-weight: 600;
            color: #382b22;
            text-transform: uppercase;
            padding: 1em 1em 0.5em 1em;
            background: #fff0f0;
            border: 2px solid #b18597;
            border-radius: 0.75em;
            transform-style: preserve-3d;
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
            display: inline-block;
            cursor: pointer;
            outline: none;
            vertical-align: middle;
            text-decoration: none;
            font-family: inherit;
            font-size: 15px;
            -webkit-tap-highlight-color: transparent;
            position: relative;
            margin: 2px 0;
            width: 100%;
            box-sizing: border-box;
        }

        .roleplay_checkbox_item::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #f9c4d2;
            border-radius: inherit;
            box-shadow: 0 0 0 2px #b18597, 0 0.425em 0 0 #ffe3e2;
            transform: translate3d(0, 0.45em, -1em);
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
            z-index: -1;
        }

        .last_mes .roleplay_checkbox_item {
            cursor: pointer;
        }

        .last_mes .roleplay_checkbox_item:hover {
            background: #ffe9e9;
            transform: translate(0, 0.15em);
        }

        .last_mes .roleplay_checkbox_item:hover::before {
            box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
            transform: translate3d(0, 0.3em, -1em);
        }

        .last_mes .roleplay_checkbox_item:active {
            background: #ffe9e9;
            transform: translate(0em, 0.45em);
        }

        .last_mes .roleplay_checkbox_item:active::before {
            box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
            transform: translate3d(0, 0, -1em);
        }

        @media(max-width: 768px) {
            .roleplay_checkbox_back {
                padding: 14px;
                gap: 8px;
            }
            .roleplay_checkbox_item {
                padding: 12px 14px;
            }
            .roleplay_checkbox_title {
                font-size: .9em;
            }
            .roleplay_checkbox_content {
                font-size: .9em;
                line-height: 1.5;
            }
        }

        @media(prefers-reduced-motion: reduce) {
            .roleplay_checkbox_item {
                transition: none;
            }
            .roleplay_checkbox_item::before {
                transition: none;
            }
            .roleplay_checkbox_content,
            .roleplay_checkbox_title {
                transition: none;
            }
        }
    </style>`:t[0].content}(),!_.isEqual(n,t)},t.extract_checkbox_element=function(e){const t=$('<div class="roleplay_checkbox">');return t.append(n),t.append($('<div class="roleplay_checkbox_back">').append([...e.matchAll(/(.+?)[:：]\s*(.+)/gm)].map((e=>({title:e[1],content:e[2].replace(/^\$\{(.+)\}$/,"$1").replace(/^「(.+)」$/,"$1")}))).map((({title:e,content:t})=>{let n=0,o=!1;const r=$('<div class="roleplay_checkbox_item" tabindex="1">').on("click",(async function(e){if(o){console.log("忽略激活锁定期间的点击"),e.preventDefault(),e.stopPropagation();return}if(1==n)return;n=1;const r=$(this).find(".roleplay_checkbox_content").text().trim();if("直接发送"===a.option.input_mode)triggerSlash(`/send ${r} || /trigger`);else if("覆盖输入"===a.option.input_mode)triggerSlash(`/setinput ${r}`);else if("尾附输入"===a.option.input_mode){const e=$("#send_textarea").val();$("#send_textarea").val([e,r].join("\n")||"")[0].dispatchEvent(new Event("input",{bubbles:!0}))}await new Promise((e=>setTimeout(e,2e3))),n=0}));return $(window).on("focus",(function(){o=!0,console.log("页面获得焦点，激活锁定"),setTimeout((function(){o=!1,console.log("解除激活锁定")}),500)})),$(document).on("visibilitychange",(function(){document.hidden||(o=!0,console.log("页面变为可见，激活锁定"),setTimeout((function(){o=!1,console.log("解除激活锁定")}),500))})),r.append(`<span class="roleplay_checkbox_title"><strong>${e}</strong></span>`).append('<hr class="roleplay_checkbox_hr">').append(`<span class="roleplay_checkbox_content">${t}</span>`),r}))))),t}}(n||(n={})),$((async()=>{await errorCatched(a.update)(),await errorCatched(n.update)(),await s(),eventOn(tavern_events.CHAT_CHANGED,errorCatched(s)),eventOn(tavern_events.CHARACTER_MESSAGE_RENDERED,errorCatched(o)),eventOn(tavern_events.MESSAGE_UPDATED,errorCatched(o)),eventOn(tavern_events.MESSAGE_SWIPED,errorCatched(o)),eventOn(tavern_events.MESSAGE_DELETED,(()=>setTimeout(errorCatched(s),1e3))),eventOn(tavern_events.WORLDINFO_UPDATED,errorCatched((async t=>{t===e&&(await a.update()||await n.update())&&await s()})))}));let c=null;function i(){null!==c&&(setTimeout(l,_.get(getVariables({type:"global"}),[e,"自动推进发送间隔"],3e3)),++c,c===_.get(getVariables({type:"global"}),[e,"自动推进循环次数"],-1)&&d())}function d(){eventRemoveListener(tavern_events.CHARACTER_MESSAGE_RENDERED,i),c=null,toastr.success("已停止自动推进",e)}$((async()=>{eventOnButton("设置循环次数",(async()=>{const t=Number(await SillyTavern.callGenericPopup("设置循环次数 (-1 为直到按下 '停止自动推进')",SillyTavern.POPUP_TYPE.INPUT,_.get(getVariables({type:"global"}),[e,"自动推进循环次数"],"-1")));-1!==t&&t<=0?toastr.error("循环次数要么是 -1, 要么是大于 0 的整数"):(insertOrAssignVariables({[e]:{自动推进循环次数:t}},{type:"global"}),-1===t?toastr.success('已设置推进次数为 -1, 即直到按下 "停止自动推进" 才会停止',e):toastr.success(`已设置推进次数为 ${t} 次`,e))})),eventOnButton("设置发送间隔",(async()=>{const t=Number(await SillyTavern.callGenericPopup("设置发送间隔 (单位: 毫秒)",SillyTavern.POPUP_TYPE.INPUT,_.get(getVariables({type:"global"}),[e,"自动推进发送间隔"],"3000")));t<=0?toastr.error("发送间隔必须大于 0"):(insertOrAssignVariables({[e]:{自动推进发送间隔:t}},{type:"global"}),toastr.success(`已设置发送间隔为 ${t} 毫秒`,e))})),eventOnButton("启动自动推进",(()=>{null===c?(c=0,i(),eventOn(tavern_events.CHARACTER_MESSAGE_RENDERED,i),toastr.success("已开启自动推进",e)):toastr.error("自动推进在之前已开启, 请先停止自动推进")})),eventOnButton("停止自动推进",d)}));
