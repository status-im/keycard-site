// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.playground.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('pluto.core');
goog.require('reagent.core');
goog.require('react_native_web.hooks');
goog.require('pluto.playground.ipfs');
goog.require('pluto.storages');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set,(function (db,p__8134){
var vec__8135 = p__8134;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8135,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8135,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8135,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_in,(function (db,p__8138){
var vec__8139 = p__8138;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8139,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8139,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8139,(2),null);
return cljs.core.assoc_in(db,path,v);
}));
pluto.playground.fx.update_extension_errors = (function pluto$playground$fx$update_extension_errors(p__8142,p__8143){
var map__8144 = p__8142;
var map__8144__$1 = (((((!((map__8144 == null))))?(((((map__8144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8144):map__8144);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8144__$1,cljs.core.cst$kw$db);
var vec__8145 = p__8143;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8145,(0),null);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8145,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$errors,errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_errors,pluto.playground.fx.update_extension_errors);
pluto.playground.fx.clear_errors = (function pluto$playground$fx$clear_errors(p__8149,_){
var map__8150 = p__8149;
var map__8150__$1 = (((((!((map__8150 == null))))?(((((map__8150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8150):map__8150);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8150__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$errors)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_clear_DASH_errors,pluto.playground.fx.clear_errors);
pluto.playground.fx.update_extension_parsed = (function pluto$playground$fx$update_extension_parsed(p__8152,p__8153){
var map__8154 = p__8152;
var map__8154__$1 = (((((!((map__8154 == null))))?(((((map__8154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8154):map__8154);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8154__$1,cljs.core.cst$kw$db);
var vec__8155 = p__8153;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8155,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8155,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$parsed,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,pluto.playground.fx.update_extension_parsed);
var G__8159_8171 = cljs.core.cst$kw$extension_SLASH_parse;
var G__8160_8172 = ((function (G__8159_8171){
return (function (p__8161){
var vec__8162 = p__8161;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8162,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8162,(1),null);
var map__8165 = pluto.core.parse(ctx,data);
var map__8165__$1 = (((((!((map__8165 == null))))?(((((map__8165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8165):map__8165);
var m = map__8165__$1;
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8165__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8165__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__8167 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8167) : re_frame.core.dispatch.call(null,G__8167));
} else {
var G__8168_8173 = react_native_web.hooks.hook_in(cljs.core.first(cljs.core.cst$kw$hooks.cljs$core$IFn$_invoke$arity$1(data__$1)));
var G__8169_8174 = document.getElementById("extension");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__8168_8173,G__8169_8174) : reagent.core.render_component.call(null,G__8168_8173,G__8169_8174));

var G__8170 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_parsed,data__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8170) : re_frame.core.dispatch.call(null,G__8170));
}
});})(G__8159_8171))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8159_8171,G__8160_8172) : re_frame.core.reg_fx.call(null,G__8159_8171,G__8160_8172));
pluto.playground.fx.update_extension_data = (function pluto$playground$fx$update_extension_data(p__8175,p__8176){
var map__8177 = p__8175;
var map__8177__$1 = (((((!((map__8177 == null))))?(((((map__8177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8177):map__8177);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8177__$1,cljs.core.cst$kw$db);
var vec__8178 = p__8176;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8178,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8178,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8178,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$data,data),cljs.core.cst$kw$extension_SLASH_parse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_data,pluto.playground.fx.update_extension_data);
var G__8182_8193 = cljs.core.cst$kw$extension_SLASH_read;
var G__8183_8194 = ((function (G__8182_8193){
return (function (p__8184){
var vec__8185 = p__8184;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8185,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8185,(1),null);
var G__8188_8195 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_clear_DASH_errors], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8188_8195) : re_frame.core.dispatch.call(null,G__8188_8195));

var map__8189 = pluto.core.read(source);
var map__8189__$1 = (((((!((map__8189 == null))))?(((((map__8189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8189):map__8189);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8189__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8189__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
var G__8191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_errors,errors], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8191) : re_frame.core.dispatch.call(null,G__8191));
} else {
var G__8192 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_data,ctx,data], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8192) : re_frame.core.dispatch.call(null,G__8192));
}
});})(G__8182_8193))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8182_8193,G__8183_8194) : re_frame.core.reg_fx.call(null,G__8182_8193,G__8183_8194));
pluto.playground.fx.update_extension_source = (function pluto$playground$fx$update_extension_source(p__8196,p__8197){
var map__8198 = p__8196;
var map__8198__$1 = (((((!((map__8198 == null))))?(((((map__8198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8198):map__8198);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8198__$1,cljs.core.cst$kw$db);
var vec__8199 = p__8197;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8199,(0),null);
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8199,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8199,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$source,data),cljs.core.cst$kw$extension_SLASH_read,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,data], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_source,pluto.playground.fx.update_extension_source);
var G__8203_8209 = cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value;
var G__8204_8210 = ((function (G__8203_8209){
return (function (p__8205){
var vec__8206 = p__8205;
var cm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8206,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8206,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = cm;
if(cljs.core.truth_(and__4120__auto__)){
return source;
} else {
return and__4120__auto__;
}
})())){
return cm.setValue(source);
} else {
return null;
}
});})(G__8203_8209))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8203_8209,G__8204_8210) : re_frame.core.reg_fx.call(null,G__8203_8209,G__8204_8210));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_update_DASH_editor,(function (p__8211,p__8212){
var map__8213 = p__8211;
var map__8213__$1 = (((((!((map__8213 == null))))?(((((map__8213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8213):map__8213);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8213__$1,cljs.core.cst$kw$db);
var vec__8214 = p__8212;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8214,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8214,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extension_SLASH_set_DASH_cm_DASH_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code_DASH_mirror.cljs$core$IFn$_invoke$arity$1(db),data], null)], null);
}));
pluto.playground.fx.append_log = (function pluto$playground$fx$append_log(p__8218,p__8219){
var map__8220 = p__8218;
var map__8220__$1 = (((((!((map__8220 == null))))?(((((map__8220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8220):map__8220);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8220__$1,cljs.core.cst$kw$db);
var vec__8221 = p__8219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8221,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8221,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$logs,cljs.core.conj,data)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_append_DASH_log,pluto.playground.fx.append_log);
pluto.playground.fx.set_selected = (function pluto$playground$fx$set_selected(p__8225,p__8226){
var map__8227 = p__8225;
var map__8227__$1 = (((((!((map__8227 == null))))?(((((map__8227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8227):map__8227);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8227__$1,cljs.core.cst$kw$db);
var vec__8228 = p__8226;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8228,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8228,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$selected,path)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_set_DASH_selected,pluto.playground.fx.set_selected);
pluto.playground.fx.switch_preview = (function pluto$playground$fx$switch_preview(p__8232,p__8233){
var map__8234 = p__8232;
var map__8234__$1 = (((((!((map__8234 == null))))?(((((map__8234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8234):map__8234);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8234__$1,cljs.core.cst$kw$db);
var vec__8235 = p__8233;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8235,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$preview,cljs.core.not)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_switch_DASH_preview,pluto.playground.fx.switch_preview);
var G__8239_8241 = cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs;
var G__8240_8242 = ((function (G__8239_8241){
return (function (value){
return pluto.playground.ipfs.save(value);
});})(G__8239_8241))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8239_8241,G__8240_8242) : re_frame.core.reg_fx.call(null,G__8239_8241,G__8240_8242));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extension_SLASH_publish,(function (p__8243,_){
var map__8244 = p__8243;
var map__8244__$1 = (((((!((map__8244 == null))))?(((((map__8244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8244):map__8244);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8244__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$publish,cljs.core.cst$kw$in_DASH_progress_QMARK_], null),true),cljs.core.cst$kw$extension_SLASH_publish_DASH_to_DASH_ipfs,cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(db)], null);
}));
var G__8247_8250 = cljs.core.cst$kw$fetch_DASH_extension_DASH_fx;
var G__8248_8251 = ((function (G__8247_8250){
return (function (){
var hash = (new URL(document.location)).searchParams.get("hash");
var uri = (cljs.core.truth_(hash)?["ipfs@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''):"url@assets/extensions/command/");
return pluto.storages.fetch(uri,((function (hash,uri,G__8247_8250){
return (function (p1__8246_SHARP_){
var G__8249 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$extension_SLASH_update_DASH_editor,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__8246_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$content], null))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8249) : re_frame.core.dispatch.call(null,G__8249));
});})(hash,uri,G__8247_8250))
);
});})(G__8247_8250))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__8247_8250,G__8248_8251) : re_frame.core.reg_fx.call(null,G__8247_8250,G__8248_8251));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fetch_DASH_extension,(function (p__8252,_){
var map__8253 = p__8252;
var map__8253__$1 = (((((!((map__8253 == null))))?(((((map__8253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8253):map__8253);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8253__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fetch_DASH_extension_DASH_fx,null], null);
}));
