/*!
 * froala_editor v2.9.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */


!function(i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof module&&module.exports?module.exports=function(n,e){return e===undefined&&(e="undefined"!=typeof window?require("jquery"):require("jquery")(n)),i(e)}:i(window.jQuery)}(function(s){s.extend(s.FE.DEFAULTS,{inlineClasses:{"fr-class-code":"Code","fr-class-highlighted":"Highlighted","fr-class-transparency":"Transparent"}}),s.FE.PLUGINS.inlineClass=function(i){return{apply:function(n){i.format.toggle("span",{"class":n})},refreshOnShow:function(n,e){e.find(".fr-command").each(function(){var n=s(this).data("param1"),e=i.format.is("span",{"class":n});s(this).toggleClass("fr-active",e).attr("aria-selected",e)})}}},s.FE.RegisterCommand("inlineClass",{type:"dropdown",title:"Inline Class",html:function(){var n='<ul class="fr-dropdown-list" role="presentation">',e=this.opts.inlineClasses;for(var i in e)e.hasOwnProperty(i)&&(n+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="inlineClass" data-param1="'+i+'" title="'+e[i]+'">'+e[i]+"</a></li>");return n+="</ul>"},callback:function(n,e){this.inlineClass.apply(e)},refreshOnShow:function(n,e){this.inlineClass.refreshOnShow(n,e)},plugin:"inlineClass"}),s.FE.DefineIcon("inlineClass",{NAME:"tag"})});
