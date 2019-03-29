// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__4859){
var vec__4860 = p__4859;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4860,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__4863 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4863,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4863,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4863,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__4867 = arguments.length;
switch (G__4867) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__4869_4893 = clojure.data.equality_partition;
var G__4870_4894 = "null";
var G__4871_4895 = ((function (G__4869_4893,G__4870_4894){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__4869_4893,G__4870_4894))
;
goog.object.set(G__4869_4893,G__4870_4894,G__4871_4895);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__4872_4896 = clojure.data.equality_partition;
var G__4873_4897 = "string";
var G__4874_4898 = ((function (G__4872_4896,G__4873_4897){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__4872_4896,G__4873_4897))
;
goog.object.set(G__4872_4896,G__4873_4897,G__4874_4898);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__4875_4899 = clojure.data.equality_partition;
var G__4876_4900 = "number";
var G__4877_4901 = ((function (G__4875_4899,G__4876_4900){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__4875_4899,G__4876_4900))
;
goog.object.set(G__4875_4899,G__4876_4900,G__4877_4901);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__4878_4902 = clojure.data.equality_partition;
var G__4879_4903 = "array";
var G__4880_4904 = ((function (G__4878_4902,G__4879_4903){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__4878_4902,G__4879_4903))
;
goog.object.set(G__4878_4902,G__4879_4903,G__4880_4904);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__4881_4905 = clojure.data.equality_partition;
var G__4882_4906 = "function";
var G__4883_4907 = ((function (G__4881_4905,G__4882_4906){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__4881_4905,G__4882_4906))
;
goog.object.set(G__4881_4905,G__4882_4906,G__4883_4907);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__4884_4908 = clojure.data.equality_partition;
var G__4885_4909 = "boolean";
var G__4886_4910 = ((function (G__4884_4908,G__4885_4909){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__4884_4908,G__4885_4909))
;
goog.object.set(G__4884_4908,G__4885_4909,G__4886_4910);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__4887_4911 = clojure.data.equality_partition;
var G__4888_4912 = "_";
var G__4889_4913 = ((function (G__4887_4911,G__4888_4912){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__4887_4911,G__4888_4912))
;
goog.object.set(G__4887_4911,G__4888_4912,G__4889_4913);
goog.object.set(clojure.data.Diff,"null",true);

var G__4914_4938 = clojure.data.diff_similar;
var G__4915_4939 = "null";
var G__4916_4940 = ((function (G__4914_4938,G__4915_4939){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4914_4938,G__4915_4939))
;
goog.object.set(G__4914_4938,G__4915_4939,G__4916_4940);

goog.object.set(clojure.data.Diff,"string",true);

var G__4917_4941 = clojure.data.diff_similar;
var G__4918_4942 = "string";
var G__4919_4943 = ((function (G__4917_4941,G__4918_4942){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4917_4941,G__4918_4942))
;
goog.object.set(G__4917_4941,G__4918_4942,G__4919_4943);

goog.object.set(clojure.data.Diff,"number",true);

var G__4920_4944 = clojure.data.diff_similar;
var G__4921_4945 = "number";
var G__4922_4946 = ((function (G__4920_4944,G__4921_4945){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4920_4944,G__4921_4945))
;
goog.object.set(G__4920_4944,G__4921_4945,G__4922_4946);

goog.object.set(clojure.data.Diff,"array",true);

var G__4923_4947 = clojure.data.diff_similar;
var G__4924_4948 = "array";
var G__4925_4949 = ((function (G__4923_4947,G__4924_4948){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__4923_4947,G__4924_4948))
;
goog.object.set(G__4923_4947,G__4924_4948,G__4925_4949);

goog.object.set(clojure.data.Diff,"function",true);

var G__4926_4950 = clojure.data.diff_similar;
var G__4927_4951 = "function";
var G__4928_4952 = ((function (G__4926_4950,G__4927_4951){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4926_4950,G__4927_4951))
;
goog.object.set(G__4926_4950,G__4927_4951,G__4928_4952);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__4929_4953 = clojure.data.diff_similar;
var G__4930_4954 = "boolean";
var G__4931_4955 = ((function (G__4929_4953,G__4930_4954){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4929_4953,G__4930_4954))
;
goog.object.set(G__4929_4953,G__4930_4954,G__4931_4955);

goog.object.set(clojure.data.Diff,"_",true);

var G__4932_4956 = clojure.data.diff_similar;
var G__4933_4957 = "_";
var G__4934_4958 = ((function (G__4932_4956,G__4933_4957){
return (function (a,b){
var fexpr__4936 = (function (){var G__4937 = clojure.data.equality_partition(a);
var G__4937__$1 = (((G__4937 instanceof cljs.core.Keyword))?G__4937.fqn:null);
switch (G__4937__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4937__$1)].join('')));

}
})();
return (fexpr__4936.cljs$core$IFn$_invoke$arity$2 ? fexpr__4936.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__4936.call(null,a,b));
});})(G__4932_4956,G__4933_4957))
;
goog.object.set(G__4932_4956,G__4933_4957,G__4934_4958);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
