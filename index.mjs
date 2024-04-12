// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-invgamma-entropy@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-invgamma-kurtosis@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-invgamma-mean@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-invgamma-mode@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-invgamma-quantile@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-invgamma-logpdf@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-invgamma-skewness@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-invgamma-stdev@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-invgamma-variance@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-invgamma-cdf@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-invgamma-pdf@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function b(){var s,e;if(!(this instanceof b))return 0===arguments.length?new b:new b(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!i(s=arguments[0]))throw new TypeError(v("12p8i",s));if(!i(e))throw new TypeError(v("12p8j",e))}else s=1,e=1;return t(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(v("12p8k",t));s=t}}),t(this,"beta",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t))throw new TypeError(v("12p8k",t));e=t}}),this}e(b.prototype,"entropy",(function(){return n(this.alpha,this.beta)})),e(b.prototype,"kurtosis",(function(){return r(this.alpha,this.beta)})),e(b.prototype,"mean",(function(){return a(this.alpha,this.beta)})),e(b.prototype,"mode",(function(){return o(this.alpha,this.beta)})),e(b.prototype,"skewness",(function(){return p(this.alpha,this.beta)})),e(b.prototype,"stdev",(function(){return h(this.alpha,this.beta)})),e(b.prototype,"variance",(function(){return l(this.alpha,this.beta)})),s(b.prototype,"cdf",(function(t){return f(t,this.alpha,this.beta)})),s(b.prototype,"logpdf",(function(t){return d(t,this.alpha,this.beta)})),s(b.prototype,"pdf",(function(t){return j(t,this.alpha,this.beta)})),s(b.prototype,"quantile",(function(t){return m(t,this.alpha,this.beta)}));export{b as default};
//# sourceMappingURL=index.mjs.map
