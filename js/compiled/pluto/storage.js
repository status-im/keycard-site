// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.storage');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * 
 * @interface
 */
pluto.storage.Storage = function(){};

pluto.storage.fetch = (function pluto$storage$fetch(this$,id,callback){
if((((!((this$ == null)))) && ((!((this$.pluto$storage$Storage$fetch$arity$3 == null)))))){
return this$.pluto$storage$Storage$fetch$arity$3(this$,id,callback);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (pluto.storage.fetch[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callback) : m__4434__auto__.call(null,this$,id,callback));
} else {
var m__4431__auto__ = (pluto.storage.fetch["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callback) : m__4431__auto__.call(null,this$,id,callback));
} else {
throw cljs.core.missing_protocol("Storage.fetch",this$);
}
}
}
});

