// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.components.source');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
pluto.playground.components.source.viewer = (function pluto$playground$components$source$viewer(p__8257){
var map__8258 = p__8257;
var map__8258__$1 = (((((!((map__8258 == null))))?(((((map__8258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8258):map__8258);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8258__$1,cljs.core.cst$kw$on_DASH_change);
var debounce = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (debounce,map__8258,map__8258__$1,on_change){
return (function (this$){
var el = (new CodeMirror(reagent.core.dom_node(this$),({"pollInterval": (1000)})));
parinferCodeMirror.init(el);

parinferCodeMirror.setMode(el,"smart");

parinferCodeMirror.setOptions(el,({"forceBalance": true}));

var G__8260_8262 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set,cljs.core.cst$kw$code_DASH_mirror,el], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8260_8262) : re_frame.core.dispatch.call(null,G__8260_8262));

if(cljs.core.truth_(on_change)){
return el.on("change",((function (el,debounce,map__8258,map__8258__$1,on_change){
return (function (_){
if(cljs.core.truth_(cljs.core.deref(debounce))){
clearTimeout(cljs.core.deref(debounce));
} else {
}

return cljs.core.reset_BANG_(debounce,setTimeout(((function (el,debounce,map__8258,map__8258__$1,on_change){
return (function (){
var G__8261 = el.getValue();
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__8261) : on_change.call(null,G__8261));
});})(el,debounce,map__8258,map__8258__$1,on_change))
,(1000)));
});})(el,debounce,map__8258,map__8258__$1,on_change))
);
} else {
return null;
}
});})(debounce,map__8258,map__8258__$1,on_change))
,cljs.core.cst$kw$reagent_DASH_render,((function (debounce,map__8258,map__8258__$1,on_change){
return (function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$block,cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$min_DASH_width,"0px"], null)], null)], null);
});})(debounce,map__8258,map__8258__$1,on_change))
], null));
});
