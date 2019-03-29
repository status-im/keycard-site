// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.log');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$log_SLASH_category,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pluto$log_SLASH_trace,"null",cljs.core.cst$kw$pluto$log_SLASH_log,"null",cljs.core.cst$kw$pluto$log_SLASH_error,"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pluto$log_SLASH_trace,null,cljs.core.cst$kw$pluto$log_SLASH_log,null,cljs.core.cst$kw$pluto$log_SLASH_error,null], null), null));
pluto.log.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
pluto.log.next_id = (function pluto$log$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pluto.log.id,cljs.core.inc);
});
/**
 * Create a log map. To be used with `fire!`
 */
pluto.log.create = (function pluto$log$create(c,t,v){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,pluto.log.next_id(),cljs.core.cst$kw$category,c,cljs.core.cst$kw$type,t,cljs.core.cst$kw$data,v], null);
});
/**
 * Fire an event provided object using the ctx `log-fn`
 */
pluto.log.fire_BANG_ = (function pluto$log$fire_BANG_(p__7163,category,type,data){
var map__7164 = p__7163;
var map__7164__$1 = (((((!((map__7164 == null))))?(((((map__7164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7164):map__7164);
var log_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7164__$1,cljs.core.cst$kw$log_DASH_fn);
if(cljs.core.fn_QMARK_(log_fn)){
var G__7166 = pluto.log.create(category,type,data);
return (log_fn.cljs$core$IFn$_invoke$arity$1 ? log_fn.cljs$core$IFn$_invoke$arity$1(G__7166) : log_fn.call(null,G__7166));
} else {
return null;
}
});
