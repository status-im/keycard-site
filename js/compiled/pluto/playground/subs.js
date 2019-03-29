// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__7913_7919 = cljs.core.cst$kw$get;
var G__7914_7920 = ((function (G__7913_7919){
return (function (db,p__7915){
var vec__7916 = p__7915;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7916,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7916,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k);
});})(G__7913_7919))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7913_7919,G__7914_7920) : re_frame.core.reg_sub.call(null,G__7913_7919,G__7914_7920));
var G__7921_7927 = cljs.core.cst$kw$get_DASH_in;
var G__7922_7928 = ((function (G__7921_7927){
return (function (db,p__7923){
var vec__7924 = p__7923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7924,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7924,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__7921_7927))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7921_7927,G__7922_7928) : re_frame.core.reg_sub.call(null,G__7921_7927,G__7922_7928));
pluto.playground.subs.extension_parsed = (function pluto$playground$subs$extension_parsed(db,v){
return cljs.core.cst$kw$parsed.cljs$core$IFn$_invoke$arity$1(db);
});
var G__7929_7931 = cljs.core.cst$kw$extension_SLASH_parsed;
var G__7930_7932 = pluto.playground.subs.extension_parsed;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7929_7931,G__7930_7932) : re_frame.core.reg_sub.call(null,G__7929_7931,G__7930_7932));
pluto.playground.subs.extension_data = (function pluto$playground$subs$extension_data(db,v){
return cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(db);
});
var G__7933_7935 = cljs.core.cst$kw$extension_SLASH_data;
var G__7934_7936 = pluto.playground.subs.extension_data;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7933_7935,G__7934_7936) : re_frame.core.reg_sub.call(null,G__7933_7935,G__7934_7936));
pluto.playground.subs.extension_source = (function pluto$playground$subs$extension_source(db,v){
return cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db);
});
var G__7937_7939 = cljs.core.cst$kw$extension_SLASH_source;
var G__7938_7940 = pluto.playground.subs.extension_source;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7937_7939,G__7938_7940) : re_frame.core.reg_sub.call(null,G__7937_7939,G__7938_7940));
var G__7941_7943 = cljs.core.cst$kw$extension_SLASH_logs;
var G__7942_7944 = cljs.core.cst$kw$logs;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7941_7943,G__7942_7944) : re_frame.core.reg_sub.call(null,G__7941_7943,G__7942_7944));
var G__7945_7947 = cljs.core.cst$kw$extension_SLASH_errors;
var G__7946_7948 = cljs.core.cst$kw$errors;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7945_7947,G__7946_7948) : re_frame.core.reg_sub.call(null,G__7945_7947,G__7946_7948));
pluto.playground.subs.selected = (function pluto$playground$subs$selected(db,v){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(db);
});
var G__7949_7951 = cljs.core.cst$kw$extension_SLASH_selected;
var G__7950_7952 = pluto.playground.subs.selected;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7949_7951,G__7950_7952) : re_frame.core.reg_sub.call(null,G__7949_7951,G__7950_7952));
pluto.playground.subs.preview = (function pluto$playground$subs$preview(db,v){
var or__4131__auto__ = cljs.core.cst$kw$preview.cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});
var G__7953_7955 = cljs.core.cst$kw$extension_SLASH_preview;
var G__7954_7956 = pluto.playground.subs.preview;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7953_7955,G__7954_7956) : re_frame.core.reg_sub.call(null,G__7953_7955,G__7954_7956));
