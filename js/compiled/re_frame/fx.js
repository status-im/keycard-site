// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__4728 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__4729 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__4729;

try{try{var seq__4730 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__4731 = null;
var count__4732 = (0);
var i__4733 = (0);
while(true){
if((i__4733 < count__4732)){
var vec__4740 = chunk__4731.cljs$core$IIndexed$_nth$arity$2(null,i__4733);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4740,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4740,(1),null);
var temp__5718__auto___4762 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___4762)){
var effect_fn_4763 = temp__5718__auto___4762;
(effect_fn_4763.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4763.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4763.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4764 = seq__4730;
var G__4765 = chunk__4731;
var G__4766 = count__4732;
var G__4767 = (i__4733 + (1));
seq__4730 = G__4764;
chunk__4731 = G__4765;
count__4732 = G__4766;
i__4733 = G__4767;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4730);
if(temp__5720__auto__){
var seq__4730__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4730__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4730__$1);
var G__4768 = cljs.core.chunk_rest(seq__4730__$1);
var G__4769 = c__4550__auto__;
var G__4770 = cljs.core.count(c__4550__auto__);
var G__4771 = (0);
seq__4730 = G__4768;
chunk__4731 = G__4769;
count__4732 = G__4770;
i__4733 = G__4771;
continue;
} else {
var vec__4743 = cljs.core.first(seq__4730__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4743,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4743,(1),null);
var temp__5718__auto___4772 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___4772)){
var effect_fn_4773 = temp__5718__auto___4772;
(effect_fn_4773.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4773.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4773.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4774 = cljs.core.next(seq__4730__$1);
var G__4775 = null;
var G__4776 = (0);
var G__4777 = (0);
seq__4730 = G__4774;
chunk__4731 = G__4775;
count__4732 = G__4776;
i__4733 = G__4777;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__4548__auto___4778 = re_frame.interop.now();
var duration__4549__auto___4779 = (end__4548__auto___4778 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__4549__auto___4779,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__4548__auto___4778);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__4728;
}} else {
var seq__4746 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__4747 = null;
var count__4748 = (0);
var i__4749 = (0);
while(true){
if((i__4749 < count__4748)){
var vec__4756 = chunk__4747.cljs$core$IIndexed$_nth$arity$2(null,i__4749);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4756,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4756,(1),null);
var temp__5718__auto___4780 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___4780)){
var effect_fn_4781 = temp__5718__auto___4780;
(effect_fn_4781.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4781.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4781.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4782 = seq__4746;
var G__4783 = chunk__4747;
var G__4784 = count__4748;
var G__4785 = (i__4749 + (1));
seq__4746 = G__4782;
chunk__4747 = G__4783;
count__4748 = G__4784;
i__4749 = G__4785;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4746);
if(temp__5720__auto__){
var seq__4746__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4746__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4746__$1);
var G__4786 = cljs.core.chunk_rest(seq__4746__$1);
var G__4787 = c__4550__auto__;
var G__4788 = cljs.core.count(c__4550__auto__);
var G__4789 = (0);
seq__4746 = G__4786;
chunk__4747 = G__4787;
count__4748 = G__4788;
i__4749 = G__4789;
continue;
} else {
var vec__4759 = cljs.core.first(seq__4746__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4759,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4759,(1),null);
var temp__5718__auto___4790 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___4790)){
var effect_fn_4791 = temp__5718__auto___4790;
(effect_fn_4791.cljs$core$IFn$_invoke$arity$1 ? effect_fn_4791.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_4791.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__4792 = cljs.core.next(seq__4746__$1);
var G__4793 = null;
var G__4794 = (0);
var G__4795 = (0);
seq__4746 = G__4792;
chunk__4747 = G__4793;
count__4748 = G__4794;
i__4749 = G__4795;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__4796 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__4797 = null;
var count__4798 = (0);
var i__4799 = (0);
while(true){
if((i__4799 < count__4798)){
var map__4804 = chunk__4797.cljs$core$IIndexed$_nth$arity$2(null,i__4799);
var map__4804__$1 = (((((!((map__4804 == null))))?(((((map__4804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4804):map__4804);
var effect = map__4804__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4804__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4804__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__4796,chunk__4797,count__4798,i__4799,map__4804,map__4804__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__4796,chunk__4797,count__4798,i__4799,map__4804,map__4804__$1,effect,ms,dispatch))
,ms);
}


var G__4808 = seq__4796;
var G__4809 = chunk__4797;
var G__4810 = count__4798;
var G__4811 = (i__4799 + (1));
seq__4796 = G__4808;
chunk__4797 = G__4809;
count__4798 = G__4810;
i__4799 = G__4811;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4796);
if(temp__5720__auto__){
var seq__4796__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4796__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4796__$1);
var G__4812 = cljs.core.chunk_rest(seq__4796__$1);
var G__4813 = c__4550__auto__;
var G__4814 = cljs.core.count(c__4550__auto__);
var G__4815 = (0);
seq__4796 = G__4812;
chunk__4797 = G__4813;
count__4798 = G__4814;
i__4799 = G__4815;
continue;
} else {
var map__4806 = cljs.core.first(seq__4796__$1);
var map__4806__$1 = (((((!((map__4806 == null))))?(((((map__4806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4806):map__4806);
var effect = map__4806__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4806__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4806__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__4796,chunk__4797,count__4798,i__4799,map__4806,map__4806__$1,effect,ms,dispatch,seq__4796__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__4796,chunk__4797,count__4798,i__4799,map__4806,map__4806__$1,effect,ms,dispatch,seq__4796__$1,temp__5720__auto__))
,ms);
}


var G__4816 = cljs.core.next(seq__4796__$1);
var G__4817 = null;
var G__4818 = (0);
var G__4819 = (0);
seq__4796 = G__4816;
chunk__4797 = G__4817;
count__4798 = G__4818;
i__4799 = G__4819;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__4820 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__4821 = null;
var count__4822 = (0);
var i__4823 = (0);
while(true){
if((i__4823 < count__4822)){
var event = chunk__4821.cljs$core$IIndexed$_nth$arity$2(null,i__4823);
re_frame.router.dispatch(event);


var G__4824 = seq__4820;
var G__4825 = chunk__4821;
var G__4826 = count__4822;
var G__4827 = (i__4823 + (1));
seq__4820 = G__4824;
chunk__4821 = G__4825;
count__4822 = G__4826;
i__4823 = G__4827;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4820);
if(temp__5720__auto__){
var seq__4820__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4820__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4820__$1);
var G__4828 = cljs.core.chunk_rest(seq__4820__$1);
var G__4829 = c__4550__auto__;
var G__4830 = cljs.core.count(c__4550__auto__);
var G__4831 = (0);
seq__4820 = G__4828;
chunk__4821 = G__4829;
count__4822 = G__4830;
i__4823 = G__4831;
continue;
} else {
var event = cljs.core.first(seq__4820__$1);
re_frame.router.dispatch(event);


var G__4832 = cljs.core.next(seq__4820__$1);
var G__4833 = null;
var G__4834 = (0);
var G__4835 = (0);
seq__4820 = G__4832;
chunk__4821 = G__4833;
count__4822 = G__4834;
i__4823 = G__4835;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__4836 = cljs.core.seq(value);
var chunk__4837 = null;
var count__4838 = (0);
var i__4839 = (0);
while(true){
if((i__4839 < count__4838)){
var event = chunk__4837.cljs$core$IIndexed$_nth$arity$2(null,i__4839);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__4840 = seq__4836;
var G__4841 = chunk__4837;
var G__4842 = count__4838;
var G__4843 = (i__4839 + (1));
seq__4836 = G__4840;
chunk__4837 = G__4841;
count__4838 = G__4842;
i__4839 = G__4843;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__4836);
if(temp__5720__auto__){
var seq__4836__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4836__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__4836__$1);
var G__4844 = cljs.core.chunk_rest(seq__4836__$1);
var G__4845 = c__4550__auto__;
var G__4846 = cljs.core.count(c__4550__auto__);
var G__4847 = (0);
seq__4836 = G__4844;
chunk__4837 = G__4845;
count__4838 = G__4846;
i__4839 = G__4847;
continue;
} else {
var event = cljs.core.first(seq__4836__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__4848 = cljs.core.next(seq__4836__$1);
var G__4849 = null;
var G__4850 = (0);
var G__4851 = (0);
seq__4836 = G__4848;
chunk__4837 = G__4849;
count__4838 = G__4850;
i__4839 = G__4851;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
