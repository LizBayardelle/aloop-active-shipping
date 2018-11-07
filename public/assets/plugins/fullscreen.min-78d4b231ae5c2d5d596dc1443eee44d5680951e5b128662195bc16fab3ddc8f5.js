/*!
 * froala_editor v2.9.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */


!function(o){"function"==typeof define&&define.amd?define(["jquery"],o):"object"==typeof module&&module.exports?module.exports=function(e,t){return t===undefined&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),o(t)}:o(window.jQuery)}(function(c){c.FE.PLUGINS.fullscreen=function(o){var t,r,s,n;function i(){return o.$box.hasClass("fr-fullscreen")}function e(){if(o.helpers.isIOS()&&o.core.hasFocus())return o.$el.blur(),setTimeout(a,250),!1;t=o.helpers.scrollTop(),o.$box.toggleClass("fr-fullscreen"),c("body:first").toggleClass("fr-fullscreen"),o.helpers.isMobile()&&(o.$tb.data("parent",o.$tb.parent()),o.$tb.prependTo(o.$box),o.$tb.data("sticky-dummy")&&o.$tb.after(o.$tb.data("sticky-dummy"))),r=o.opts.height,s=o.opts.heightMax,n=o.opts.zIndex,o.position.refresh(),o.opts.height=o.o_win.innerHeight-(o.opts.toolbarInline?0:o.$tb.outerHeight()),o.opts.zIndex=2147483641,o.opts.heightMax=null,o.size.refresh(),o.opts.toolbarInline&&o.toolbar.showInline();for(var e=o.$box.parent();!e.is("body:first");)e.data("z-index",e.css("z-index")).data("overflow",e.css("overflow")).css("z-index","2147483640").css("overflow","visible"),e=e.parent();o.opts.toolbarContainer&&o.$box.prepend(o.$tb),o.events.trigger("charCounter.update"),o.events.trigger("codeView.update"),o.$win.trigger("scroll")}function l(){if(o.helpers.isIOS()&&o.core.hasFocus())return o.$el.blur(),setTimeout(a,250),!1;o.$box.toggleClass("fr-fullscreen"),c("body:first").toggleClass("fr-fullscreen"),o.$tb.prependTo(o.$tb.data("parent")),o.$tb.data("sticky-dummy")&&o.$tb.after(o.$tb.data("sticky-dummy")),o.opts.height=r,o.opts.heightMax=s,o.opts.zIndex=n,o.size.refresh(),c(o.o_win).scrollTop(t),o.opts.toolbarInline&&o.toolbar.showInline(),o.events.trigger("charCounter.update"),o.opts.toolbarSticky&&o.opts.toolbarStickyOffset&&(o.opts.toolbarBottom?o.$tb.css("bottom",o.opts.toolbarStickyOffset).data("bottom",o.opts.toolbarStickyOffset):o.$tb.css("top",o.opts.toolbarStickyOffset).data("top",o.opts.toolbarStickyOffset));for(var e=o.$box.parent();!e.is("body:first");)e.data("z-index")&&(e.css("z-index",""),e.css("z-index")!=e.data("z-index")&&e.css("z-index",e.data("z-index")),e.removeData("z-index")),e.data("overflow")?(e.css("overflow",""),e.css("overflow")!=e.data("overflow")&&e.css("overflow",e.data("overflow"))):e.css("overflow",""),e.removeData("overflow"),e=e.parent();o.opts.toolbarContainer&&c(o.opts.toolbarContainer).append(o.$tb),c(o.o_win).trigger("scroll"),o.events.trigger("codeView.update")}function a(){i()?l():e(),f(o.$tb.find('.fr-command[data-cmd="fullscreen"]'))}function f(e){var t=i();e.toggleClass("fr-active",t).attr("aria-pressed",t),e.find("> *:not(.fr-sr-only)").replaceWith(t?o.icon.create("fullscreenCompress"):o.icon.create("fullscreen"))}return{_init:function(){if(!o.$wp)return!1;o.events.$on(c(o.o_win),"resize",function(){i()&&(l(),e())}),o.events.on("toolbar.hide",function(){if(i()&&o.helpers.isMobile())return!1}),o.events.on("position.refresh",function(){if(o.helpers.isIOS())return!i()}),o.events.on("destroy",function(){i()&&l()},!0)},toggle:a,refresh:f,isActive:i}},c.FE.RegisterCommand("fullscreen",{title:"Fullscreen",undo:!1,focus:!1,accessibilityFocus:!0,forcedRefresh:!0,toggle:!0,callback:function(){this.fullscreen.toggle()},refresh:function(e){this.fullscreen.refresh(e)},plugin:"fullscreen"}),c.FE.DefineIcon("fullscreen",{NAME:"expand"}),c.FE.DefineIcon("fullscreenCompress",{NAME:"compress"})});
