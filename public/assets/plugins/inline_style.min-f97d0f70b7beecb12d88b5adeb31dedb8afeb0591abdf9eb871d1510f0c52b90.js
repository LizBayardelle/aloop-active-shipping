/*!
 * froala_editor v2.9.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */


!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(e,n){return n===undefined&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(e)),t(n)}:t(window.jQuery)}(function(r){r.extend(r.FE.DEFAULTS,{inlineStyles:{"Big Red":"font-size: 20px; color: red;","Small Blue":"font-size: 14px; color: blue;"}}),r.FE.PLUGINS.inlineStyle=function(l){return{apply:function(e){if(""!==l.selection.text())for(var n=e.split(";"),t=0;t<n.length;t++){var i=n[t].split(":");n[t].length&&2==i.length&&l.format.applyStyle(i[0].trim(),i[1].trim())}else l.html.insert('<span style="'+e+'">'+r.FE.INVISIBLE_SPACE+r.FE.MARKERS+"</span>")}}},r.FE.RegisterCommand("inlineStyle",{type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',n=this.opts.inlineStyles;for(var t in n)n.hasOwnProperty(t)&&(e+='<li role="presentation"><span style="'+n[t]+'" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="inlineStyle" data-param1="'+n[t]+'" title="'+this.language.translate(t)+'">'+this.language.translate(t)+"</a></span></li>");return e+="</ul>"},title:"Inline Style",callback:function(e,n){this.inlineStyle.apply(n)},plugin:"inlineStyle"}),r.FE.DefineIcon("inlineStyle",{NAME:"paint-brush"})});
