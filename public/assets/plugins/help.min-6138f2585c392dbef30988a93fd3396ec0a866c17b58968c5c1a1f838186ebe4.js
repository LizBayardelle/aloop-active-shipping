/*!
 * froala_editor v2.9.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */


!function(l){"function"==typeof define&&define.amd?define(["jquery"],l):"object"==typeof module&&module.exports?module.exports=function(e,t){return t===undefined&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),l(t)}:l(window.jQuery)}(function(n){n.extend(n.FE.DEFAULTS,{helpSets:[{title:"Inline Editor",commands:[{val:"OSkeyE",desc:"Show the editor"}]},{title:"Common actions",commands:[{val:"OSkeyC",desc:"Copy"},{val:"OSkeyX",desc:"Cut"},{val:"OSkeyV",desc:"Paste"},{val:"OSkeyZ",desc:"Undo"},{val:"OSkeyShift+Z",desc:"Redo"},{val:"OSkeyK",desc:"Insert Link"},{val:"OSkeyP",desc:"Insert Image"}]},{title:"Basic Formatting",commands:[{val:"OSkeyA",desc:"Select All"},{val:"OSkeyB",desc:"Bold"},{val:"OSkeyI",desc:"Italic"},{val:"OSkeyU",desc:"Underline"},{val:"OSkeyS",desc:"Strikethrough"},{val:"OSkey]",desc:"Increase Indent"},{val:"OSkey[",desc:"Decrease Indent"}]},{title:"Quote",commands:[{val:"OSkey'",desc:"Increase quote level"},{val:"OSkeyShift+'",desc:"Decrease quote level"}]},{title:"Image / Video",commands:[{val:"OSkey+",desc:"Resize larger"},{val:"OSkey-",desc:"Resize smaller"}]},{title:"Table",commands:[{val:"Alt+Space",desc:"Select table cell"},{val:"Shift+Left/Right arrow",desc:"Extend selection one cell"},{val:"Shift+Up/Down arrow",desc:"Extend selection one row"}]},{title:"Navigation",commands:[{val:"OSkey/",desc:"Shortcuts"},{val:"Alt+F10",desc:"Focus popup / toolbar"},{val:"Esc",desc:"Return focus to previous position"}]}]}),n.FE.PLUGINS.help=function(s){var o,a="help";return{_init:function(){},show:function(){if(!o){var e="<h4>"+s.language.translate("Shortcuts")+"</h4>",t=function(){for(var e='<div class="fr-help-modal">',t=0;t<s.opts.helpSets.length;t++){var l=s.opts.helpSets[t],o="<table>";o+="<thead><tr><th>"+s.language.translate(l.title)+"</th></tr></thead>",o+="<tbody>";for(var a=0;a<l.commands.length;a++){var n=l.commands[a];o+="<tr>",o+="<td>"+s.language.translate(n.desc)+"</td>",o+="<td>"+n.val.replace("OSkey",s.helpers.isMac()?"&#8984;":"Ctrl+")+"</td>",o+="</tr>"}e+=o+="</tbody></table>"}return e+="</div>"}(),l=s.modals.create(a,e,t);o=l.$modal,l.$head,l.$body,s.events.$on(n(s.o_win),"resize",function(){s.modals.resize(a)})}s.modals.show(a),s.modals.resize(a)},hide:function(){s.modals.hide(a)}}},n.FroalaEditor.DefineIcon("help",{NAME:"question"}),n.FE.RegisterShortcut(n.FE.KEYCODE.SLASH,"help",null,"/"),n.FE.RegisterCommand("help",{title:"Help",icon:"help",undo:!1,focus:!1,modal:!0,callback:function(){this.help.show()},plugin:"help",showOnMobile:!1})});
