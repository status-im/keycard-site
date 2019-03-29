// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.storages');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('pluto.storage');
goog.require('pluto.storage.http');
goog.require('pluto.storage.gist');
goog.require('pluto.storage.ipfs');
pluto.storages.all = new cljs.core.PersistentArrayMap(null, 3, ["url",(new pluto.storage.http.HTTPStorage()),"gist",(new pluto.storage.gist.GistStorage()),"ipfs",(new pluto.storage.ipfs.IPFSStorage())], null);
pluto.storages.fetch = (function pluto$storages$fetch(uri,cb){
if(cljs.core.truth_((function (){var and__4120__auto__ = uri;
if(cljs.core.truth_(and__4120__auto__)){
return cb;
} else {
return and__4120__auto__;
}
})())){
var vec__8048 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,"@");
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8048,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8048,(1),null);
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pluto.storages.all,type);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return pluto.storage.fetch(s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,id], null),cb);
} else {
return null;
}
} else {
return null;
}
});
