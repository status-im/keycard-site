// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.components');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('react_native_web.react');
goog.require('re_frame.core');
goog.require('status_im.colors');
react_native_web.components.input = (function react_native_web$components$input(p__5273){
var map__5274 = p__5273;
var map__5274__$1 = (((((!((map__5274 == null))))?(((((map__5274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5274):map__5274);
var keyboard_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5274__$1,cljs.core.cst$kw$keyboard_DASH_type);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5274__$1,cljs.core.cst$kw$style);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5274__$1,cljs.core.cst$kw$on_DASH_change);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5274__$1,cljs.core.cst$kw$placeholder);
var placeholder_text_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5274__$1,cljs.core.cst$kw$placeholder_DASH_text_DASH_color);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text_input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$placeholder,placeholder], null),(cljs.core.truth_(placeholder_text_color)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$placeholder_DASH_text_DASH_color,placeholder_text_color], null):null),(cljs.core.truth_(style)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,style], null):null),(cljs.core.truth_(keyboard_type)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyboard_DASH_type,keyboard_type], null):null),(cljs.core.truth_(on_change)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change_DASH_text,((function (map__5274,map__5274__$1,keyboard_type,style,on_change,placeholder,placeholder_text_color){
return (function (p1__5272_SHARP_){
var G__5276 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,p1__5272_SHARP_], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__5276) : on_change.call(null,G__5276));
});})(map__5274,map__5274__$1,keyboard_type,style,on_change,placeholder,placeholder_text_color))
], null):null)], 0))], null);
});
react_native_web.components.touchable_opacity = (function react_native_web$components$touchable_opacity(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5283 = arguments.length;
var i__4731__auto___5284 = (0);
while(true){
if((i__4731__auto___5284 < len__4730__auto___5283)){
args__4736__auto__.push((arguments[i__4731__auto___5284]));

var G__5285 = (i__4731__auto___5284 + (1));
i__4731__auto___5284 = G__5285;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_native_web.components.touchable_opacity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_native_web.components.touchable_opacity.cljs$core$IFn$_invoke$arity$variadic = (function (p__5279,children){
var map__5280 = p__5279;
var map__5280__$1 = (((((!((map__5280 == null))))?(((((map__5280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5280):map__5280);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5280__$1,cljs.core.cst$kw$style);
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5280__$1,cljs.core.cst$kw$on_DASH_press);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.touchable_highlight(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(on_press)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,((function (map__5280,map__5280__$1,style,on_press){
return (function (){
var G__5282 = cljs.core.PersistentArrayMap.EMPTY;
return (on_press.cljs$core$IFn$_invoke$arity$1 ? on_press.cljs$core$IFn$_invoke$arity$1(G__5282) : on_press.call(null,G__5282));
});})(map__5280,map__5280__$1,style,on_press))
], null):null),(cljs.core.truth_(style)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,style], null):null)], 0))], null),children);
});

react_native_web.components.touchable_opacity.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_native_web.components.touchable_opacity.cljs$lang$applyTo = (function (seq5277){
var G__5278 = cljs.core.first(seq5277);
var seq5277__$1 = cljs.core.next(seq5277);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5278,seq5277__$1);
});

react_native_web.components.image = (function react_native_web$components$image(p__5286){
var map__5287 = p__5286;
var map__5287__$1 = (((((!((map__5287 == null))))?(((((map__5287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5287):map__5287);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5287__$1,cljs.core.cst$kw$uri);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5287__$1,cljs.core.cst$kw$style);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.image(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(100),cljs.core.cst$kw$height,(100)], null),style], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$uri,uri], null)], null)], 0))], null);
});
react_native_web.components.link = (function react_native_web$components$link(p__5289){
var map__5290 = p__5289;
var map__5290__$1 = (((((!((map__5290 == null))))?(((((map__5290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5290):map__5290);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5290__$1,cljs.core.cst$kw$uri);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,status_im.colors.white,cljs.core.cst$kw$text_DASH_decoration_DASH_line,cljs.core.cst$kw$underline], null),cljs.core.cst$kw$on_DASH_press,((function (map__5290,map__5290__$1,uri){
return (function (){
var G__5292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$browser$ui_SLASH_message_DASH_link_DASH_pressed,uri], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__5292) : re_frame.core.dispatch.call(null,G__5292));
});})(map__5290,map__5290__$1,uri))
], null),uri], null);
});
react_native_web.components.activity_indicator_size = (function react_native_web$components$activity_indicator_size(k){
var pred__5293 = cljs.core._EQ_;
var expr__5294 = k;
if(cljs.core.truth_((function (){var G__5296 = cljs.core.cst$kw$small;
var G__5297 = expr__5294;
return (pred__5293.cljs$core$IFn$_invoke$arity$2 ? pred__5293.cljs$core$IFn$_invoke$arity$2(G__5296,G__5297) : pred__5293.call(null,G__5296,G__5297));
})())){
return "small";
} else {
if(cljs.core.truth_((function (){var G__5298 = cljs.core.cst$kw$large;
var G__5299 = expr__5294;
return (pred__5293.cljs$core$IFn$_invoke$arity$2 ? pred__5293.cljs$core$IFn$_invoke$arity$2(G__5298,G__5299) : pred__5293.call(null,G__5298,G__5299));
})())){
return "large";
} else {
return null;
}
}
});
react_native_web.components.activity_indicator = (function react_native_web$components$activity_indicator(p__5300){
var map__5301 = p__5300;
var map__5301__$1 = (((((!((map__5301 == null))))?(((((map__5301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5301):map__5301);
var animating = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5301__$1,cljs.core.cst$kw$animating);
var hides_when_stopped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5301__$1,cljs.core.cst$kw$hides_DASH_when_DASH_stopped);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5301__$1,cljs.core.cst$kw$color);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5301__$1,cljs.core.cst$kw$size);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.activity_indicator(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(animating)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$animating,animating], null):null),(cljs.core.truth_(hides_when_stopped)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hidesWhenStopped,hides_when_stopped], null):null),(cljs.core.truth_(color)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,color], null):null),(function (){var temp__5720__auto__ = react_native_web.components.activity_indicator_size(size);
if(cljs.core.truth_(temp__5720__auto__)){
var size_SINGLEQUOTE_ = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,size_SINGLEQUOTE_], null);
} else {
return null;
}
})()], 0))], null);
});
react_native_web.components.wrap_text_child = (function react_native_web$components$wrap_text_child(o){
if(cljs.core.ifn_QMARK_(o)){
return o;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(o);
}
});
react_native_web.components.text = (function react_native_web$components$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5305 = arguments.length;
var i__4731__auto___5306 = (0);
while(true){
if((i__4731__auto___5306 < len__4730__auto___5305)){
args__4736__auto__.push((arguments[i__4731__auto___5306]));

var G__5307 = (i__4731__auto___5306 + (1));
i__4731__auto___5306 = G__5307;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_native_web.components.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_native_web.components.text.cljs$core$IFn$_invoke$arity$variadic = (function (o,children){
if(cljs.core.map_QMARK_(o)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,o], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(react_native_web.components.wrap_text_child,children));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,cljs.core.PersistentArrayMap.EMPTY,o], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(react_native_web.components.wrap_text_child,children));
}
});

react_native_web.components.text.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_native_web.components.text.cljs$lang$applyTo = (function (seq5303){
var G__5304 = cljs.core.first(seq5303);
var seq5303__$1 = cljs.core.next(seq5303);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5304,seq5303__$1);
});

react_native_web.components.wrap_view_child = (function react_native_web$components$wrap_view_child(child){
if(cljs.core.vector_QMARK_(child)){
return child;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.components.text,cljs.core.PersistentArrayMap.EMPTY,child], null);
}
});
react_native_web.components.abstract_view = (function react_native_web$components$abstract_view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5311 = arguments.length;
var i__4731__auto___5312 = (0);
while(true){
if((i__4731__auto___5312 < len__4730__auto___5311)){
args__4736__auto__.push((arguments[i__4731__auto___5312]));

var G__5313 = (i__4731__auto___5312 + (1));
i__4731__auto___5312 = G__5313;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return react_native_web.components.abstract_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

react_native_web.components.abstract_view.cljs$core$IFn$_invoke$arity$variadic = (function (type,o,children){
if(cljs.core.map_QMARK_(o)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,o], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(react_native_web.components.wrap_view_child,children));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.PersistentArrayMap.EMPTY,react_native_web.components.wrap_view_child(o)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(react_native_web.components.wrap_view_child,children));
}
});

react_native_web.components.abstract_view.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
react_native_web.components.abstract_view.cljs$lang$applyTo = (function (seq5308){
var G__5309 = cljs.core.first(seq5308);
var seq5308__$1 = cljs.core.next(seq5308);
var G__5310 = cljs.core.first(seq5308__$1);
var seq5308__$2 = cljs.core.next(seq5308__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5309,G__5310,seq5308__$2);
});

react_native_web.components.view = (function react_native_web$components$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5316 = arguments.length;
var i__4731__auto___5317 = (0);
while(true){
if((i__4731__auto___5317 < len__4730__auto___5316)){
args__4736__auto__.push((arguments[i__4731__auto___5317]));

var G__5318 = (i__4731__auto___5317 + (1));
i__4731__auto___5317 = G__5318;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_native_web.components.view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_native_web.components.view.cljs$core$IFn$_invoke$arity$variadic = (function (o,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(react_native_web.components.abstract_view,react_native_web.react.view,o,children);
});

react_native_web.components.view.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_native_web.components.view.cljs$lang$applyTo = (function (seq5314){
var G__5315 = cljs.core.first(seq5314);
var seq5314__$1 = cljs.core.next(seq5314);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5315,seq5314__$1);
});

react_native_web.components.scroll_view = (function react_native_web$components$scroll_view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5321 = arguments.length;
var i__4731__auto___5322 = (0);
while(true){
if((i__4731__auto___5322 < len__4730__auto___5321)){
args__4736__auto__.push((arguments[i__4731__auto___5322]));

var G__5323 = (i__4731__auto___5322 + (1));
i__4731__auto___5322 = G__5323;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return react_native_web.components.scroll_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

react_native_web.components.scroll_view.cljs$core$IFn$_invoke$arity$variadic = (function (o,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(react_native_web.components.abstract_view,react_native_web.react.scroll_view(),o,children);
});

react_native_web.components.scroll_view.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
react_native_web.components.scroll_view.cljs$lang$applyTo = (function (seq5319){
var G__5320 = cljs.core.first(seq5319);
var seq5319__$1 = cljs.core.next(seq5319);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5320,seq5319__$1);
});

react_native_web.components.flat_list = (function react_native_web$components$flat_list(p__5324){
var map__5325 = p__5324;
var map__5325__$1 = (((((!((map__5325 == null))))?(((((map__5325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5325):map__5325);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5325__$1,cljs.core.cst$kw$key);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5325__$1,cljs.core.cst$kw$data);
var item_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5325__$1,cljs.core.cst$kw$item_DASH_view);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.scroll_view(),(function (){var iter__4523__auto__ = ((function (map__5325,map__5325__$1,key,data,item_view){
return (function react_native_web$components$flat_list_$_iter__5327(s__5328){
return (new cljs.core.LazySeq(null,((function (map__5325,map__5325__$1,key,data,item_view){
return (function (){
var s__5328__$1 = s__5328;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__5328__$1);
if(temp__5720__auto__){
var s__5328__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5328__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__5328__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__5330 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__5329 = (0);
while(true){
if((i__5329 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__5329);
cljs.core.chunk_append(b__5330,(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_view,item], null);
})()
);

var G__5331 = (i__5329 + (1));
i__5329 = G__5331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5330),react_native_web$components$flat_list_$_iter__5327(cljs.core.chunk_rest(s__5328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5330),null);
}
} else {
var item = cljs.core.first(s__5328__$2);
return cljs.core.cons((function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_view,item], null);
})()
,react_native_web$components$flat_list_$_iter__5327(cljs.core.rest(s__5328__$2)));
}
} else {
return null;
}
break;
}
});})(map__5325,map__5325__$1,key,data,item_view))
,null,null));
});})(map__5325,map__5325__$1,key,data,item_view))
;
return iter__4523__auto__(data);
})()], null);
});
react_native_web.components.component = (function react_native_web$components$component(){
return null;
});
react_native_web.components.button = (function react_native_web$components$button(p__5332,label){
var map__5333 = p__5332;
var map__5333__$1 = (((((!((map__5333 == null))))?(((((map__5333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5333):map__5333);
var m = map__5333__$1;
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5333__$1,cljs.core.cst$kw$on_DASH_click);
var enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5333__$1,cljs.core.cst$kw$enabled);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5333__$1,cljs.core.cst$kw$disabled);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.components.touchable_opacity,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,(cljs.core.truth_(on_click)?on_click:null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$background_DASH_color,status_im.colors.blue_light,cljs.core.cst$kw$border_DASH_radius,(4),cljs.core.cst$kw$padding,(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,label], null)], null)], null);
});
react_native_web.components.checkbox = (function react_native_web$components$checkbox(p__5336){
var map__5337 = p__5336;
var map__5337__$1 = (((((!((map__5337 == null))))?(((((map__5337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5337):map__5337);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5337__$1,cljs.core.cst$kw$on_DASH_change);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5337__$1,cljs.core.cst$kw$checked);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.view,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,status_im.colors.white], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.react.text,"Not supported yet"], null)], null);
});
react_native_web.components.all = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$touchable_DASH_opacity,cljs.core.cst$sym$text,cljs.core.cst$sym$map_DASH_link,cljs.core.cst$sym$view,cljs.core.cst$sym$link,cljs.core.cst$sym$transaction_DASH_status,cljs.core.cst$sym$activity_DASH_indicator,cljs.core.cst$sym$keyboard_DASH_avoiding_DASH_view,cljs.core.cst$sym$image,cljs.core.cst$sym$nft_DASH_token_DASH_viewer,cljs.core.cst$sym$picker,cljs.core.cst$sym$map,cljs.core.cst$sym$input,cljs.core.cst$sym$scroll_DASH_view,cljs.core.cst$sym$checkbox,cljs.core.cst$sym$list,cljs.core.cst$sym$button,cljs.core.cst$sym$icon],[new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.touchable_opacity,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_press,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,react_native_web.components.text], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,cljs.core.cst$kw$string,cljs.core.cst$kw$lng,cljs.core.cst$kw$any,cljs.core.cst$kw$lat,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,react_native_web.components.view], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.link,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$uri,cljs.core.cst$kw$string,cljs.core.cst$kw$text_QMARK_,cljs.core.cst$kw$string,cljs.core.cst$kw$open_DASH_in_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$one_DASH_of,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,null,cljs.core.cst$kw$device,null], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$outgoing,cljs.core.cst$kw$string,cljs.core.cst$kw$tx_DASH_hash,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.activity_indicator,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$animating,cljs.core.cst$kw$boolean,cljs.core.cst$kw$color,cljs.core.cst$kw$string,cljs.core.cst$kw$size,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hides_DASH_when_DASH_stopped,cljs.core.cst$kw$boolean], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,react_native_web.components.view], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.image,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$uri,cljs.core.cst$kw$string,cljs.core.cst$kw$source,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$token,cljs.core.cst$kw$string], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event,cljs.core.cst$kw$selected,cljs.core.cst$kw$string,cljs.core.cst$kw$enabled,cljs.core.cst$kw$boolean,cljs.core.cst$kw$data,cljs.core.cst$kw$vector], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$marker,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lng,cljs.core.cst$kw$number,cljs.core.cst$kw$lat,cljs.core.cst$kw$number,cljs.core.cst$kw$boundingbox,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$lng1,cljs.core.cst$kw$number,cljs.core.cst$kw$lat1,cljs.core.cst$kw$number,cljs.core.cst$kw$lng2,cljs.core.cst$kw$number,cljs.core.cst$kw$lat2,cljs.core.cst$kw$number], null)], null),cljs.core.cst$kw$fly_QMARK_,cljs.core.cst$kw$boolean,cljs.core.cst$kw$interactive_QMARK_,cljs.core.cst$kw$boolean,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.input,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$string,cljs.core.cst$kw$keyboard_DASH_type,cljs.core.cst$kw$keyword,cljs.core.cst$kw$change_DASH_delay_QMARK_,cljs.core.cst$kw$number,cljs.core.cst$kw$placeholder_DASH_text_DASH_color,cljs.core.cst$kw$any,cljs.core.cst$kw$selection_DASH_color,cljs.core.cst$kw$any], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.scroll_view,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keyboard_DASH_should_DASH_persist_DASH_taps,cljs.core.cst$kw$keyword,cljs.core.cst$kw$content_DASH_container_DASH_style,cljs.core.cst$kw$map], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.checkbox,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$event,cljs.core.cst$kw$checked,cljs.core.cst$kw$boolean], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.flat_list,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data,cljs.core.cst$kw$vector,cljs.core.cst$kw$item_DASH_view,cljs.core.cst$kw$view,cljs.core.cst$kw$key_QMARK_,cljs.core.cst$kw$keyword], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.button,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$enabled,cljs.core.cst$kw$boolean,cljs.core.cst$kw$disabled,cljs.core.cst$kw$boolean,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$event], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,react_native_web.components.component,cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$keyword,cljs.core.cst$kw$color,cljs.core.cst$kw$any], null)], null)]);
