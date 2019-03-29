// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__4570){
var map__4571 = p__4570;
var map__4571__$1 = (((((!((map__4571 == null))))?(((((map__4571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4571):map__4571);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4571__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4571__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4571__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4571__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__4573_4597 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__4574_4598 = null;
var count__4575_4599 = (0);
var i__4576_4600 = (0);
while(true){
if((i__4576_4600 < count__4575_4599)){
var vec__4587_4601 = chunk__4574_4598.cljs$core$IIndexed$_nth$arity$2(null,i__4576_4600);
var k_4602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4587_4601,(0),null);
var cb_4603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4587_4601,(1),null);
try{var G__4591_4604 = cljs.core.deref(re_frame.trace.traces);
(cb_4603.cljs$core$IFn$_invoke$arity$1 ? cb_4603.cljs$core$IFn$_invoke$arity$1(G__4591_4604) : cb_4603.call(null,G__4591_4604));
}catch (e4590){var e_4605 = e4590;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_4602,"while storing",cljs.core.deref(re_frame.trace.traces),e_4605], 0));
}

var G__4606 = seq__4573_4597;
var G__4607 = chunk__4574_4598;
var G__4608 = count__4575_4599;
var G__4609 = (i__4576_4600 + (1));
seq__4573_4597 = G__4606;
chunk__4574_4598 = G__4607;
count__4575_4599 = G__4608;
i__4576_4600 = G__4609;
continue;
} else {
var temp__5720__auto___4610 = cljs.core.seq(seq__4573_4597);
if(temp__5720__auto___4610){
var seq__4573_4611__$1 = temp__5720__auto___4610;
if(cljs.core.chunked_seq_QMARK_(seq__4573_4611__$1)){
var c__4550__auto___4612 = cljs.core.chunk_first(seq__4573_4611__$1);
var G__4613 = cljs.core.chunk_rest(seq__4573_4611__$1);
var G__4614 = c__4550__auto___4612;
var G__4615 = cljs.core.count(c__4550__auto___4612);
var G__4616 = (0);
seq__4573_4597 = G__4613;
chunk__4574_4598 = G__4614;
count__4575_4599 = G__4615;
i__4576_4600 = G__4616;
continue;
} else {
var vec__4592_4617 = cljs.core.first(seq__4573_4611__$1);
var k_4618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4592_4617,(0),null);
var cb_4619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4592_4617,(1),null);
try{var G__4596_4620 = cljs.core.deref(re_frame.trace.traces);
(cb_4619.cljs$core$IFn$_invoke$arity$1 ? cb_4619.cljs$core$IFn$_invoke$arity$1(G__4596_4620) : cb_4619.call(null,G__4596_4620));
}catch (e4595){var e_4621 = e4595;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_4618,"while storing",cljs.core.deref(re_frame.trace.traces),e_4621], 0));
}

var G__4622 = cljs.core.next(seq__4573_4611__$1);
var G__4623 = null;
var G__4624 = (0);
var G__4625 = (0);
seq__4573_4597 = G__4622;
chunk__4574_4598 = G__4623;
count__4575_4599 = G__4624;
i__4576_4600 = G__4625;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
