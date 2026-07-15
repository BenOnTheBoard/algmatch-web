import {K as Kv,h as nl,Z as Zv,aB as Rf,X as OI,b as Bf,a1 as PI,r as rc,o as oc,g as II,a2 as ep,m as my,E as EI,j as x$1,I,bi as SE,a9 as eI,bj as ci$1,ab as tv,J as Jn$1,a3 as mE,q as qf,b3 as Bg,af as jf,aK as Re$1,aL as he$1,ad as wg,bk as nI,G,x as xP,ae as FP,aI as KI,aQ as yo$1,aq as Rt$1,l as vo$1,bl as ng,bm as el,ba as re,b7 as nr,bd as HP,bn as Ql,s as ee,aT as zp,M as wh,bo as og,k as NE,aO as W,aN as U,aX as sh,z as dt$1,bp as je,O as OP,am as H,t as Yl,bq as X$1,ao as zn$1,aJ as jP,br as rh,bs as Hr,bt as Ih,bu as uh,aH as Ai,ar as M,u as Eh,b9 as rg,bv as mn,bw as dh,bx as Xa$1,by as Te$1,bb as Zr,bz as _,aR as Gm}from'./main-VZQCHN2F.js';var _n=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i;}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i);}registerOnTouched(t){this.onTouched=t;}registerOnChange(t){this.onChange=t;}setDisabledState(t){this.setProperty("disabled",t);}static \u0275fac=function(i){return new(i||e)(ci$1(tv),ci$1(Jn$1))};static \u0275dir=eI({type:e})}return e})(),yn=(()=>{class e extends _n{static \u0275fac=(()=>{let t;return function(o){return (t||(t=Bg(e)))(o||e)}})();static \u0275dir=eI({type:e,features:[Rf]})}return e})(),me=new x$1("");var wi={provide:me,useExisting:Zr(()=>Cn),multi:true};function Mi(){let e=X$1()?X$1().getUserAgent():"";return /android (\d+)/.test(e.toLowerCase())}var xi=new x$1(""),Cn=(()=>{class e extends _n{_compositionMode;_composing=false;constructor(t,i,o){super(t,i),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Mi());}writeValue(t){let i=t??"";this.setProperty("value",i);}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t);}_compositionStart(){this._composing=true;}_compositionEnd(t){this._composing=false,this._compositionMode&&this.onChange(t);}static \u0275fac=function(i){return new(i||e)(ci$1(tv),ci$1(Jn$1),ci$1(xi,8))};static \u0275dir=eI({type:e,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&qf("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)});},standalone:false,features:[mE([wi]),Rf]})}return e})();function pe(e){return e==null||fe(e)===0}function fe(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var et=new x$1(""),he=new x$1(""),Fi=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,le=class{static min(n){return En(n)}static max(n){return Dn(n)}static required(n){return An(n)}static requiredTrue(n){return Ii(n)}static email(n){return Vi(n)}static minLength(n){return Ti(n)}static maxLength(n){return Ni(n)}static pattern(n){return Oi(n)}static nullValidator(n){return Tt()}static compose(n){return Vn(n)}static composeAsync(n){return Tn(n)}};function En(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return !isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}function Dn(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return !isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}function An(e){return pe(e.value)?{required:true}:null}function Ii(e){return e.value===true?null:{required:true}}function Vi(e){return pe(e.value)||Fi.test(e.value)?null:{email:true}}function Ti(e){return n=>{let t=n.value?.length??fe(n.value);return t===null||t===0?null:t<e?{minlength:{requiredLength:e,actualLength:t}}:null}}function Ni(e){return n=>{let t=n.value?.length??fe(n.value);return t!==null&&t>e?{maxlength:{requiredLength:e,actualLength:t}}:null}}function Oi(e){if(!e)return Tt;let n,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),i=>{if(pe(i.value))return null;let o=i.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function Tt(e){return null}function wn(e){return e!=null}function Mn(e){return Xa$1(e)?Te$1(e):e}function xn(e){let n={};return e.forEach(t=>{n=t!=null?U(U({},n),t):n;}),Object.keys(n).length===0?null:n}function Fn(e,n){return n.map(t=>t(e))}function Si(e){return !e.validate}function In(e){return e.map(n=>Si(n)?n:t=>n.validate(t))}function Vn(e){if(!e)return null;let n=e.filter(wn);return n.length==0?null:function(t){return xn(Fn(t,n))}}function be(e){return e!=null?Vn(In(e)):null}function Tn(e){if(!e)return null;let n=e.filter(wn);return n.length==0?null:function(t){let i=Fn(t,n).map(Mn);return sh(i).pipe(dt$1(xn))}}function ge(e){return e!=null?Tn(In(e)):null}function fn(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Nn(e){return e._rawValidators}function On(e){return e._rawAsyncValidators}function de(e){return e?Array.isArray(e)?e:[e]:[]}function Nt(e,n){return Array.isArray(e)?e.includes(n):e===n}function hn(e,n){let t=de(n);return de(e).forEach(o=>{Nt(t,o)||t.push(o);}),t}function bn(e,n){return de(n).filter(t=>!Nt(e,t))}var Ot=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=be(this._rawValidators);}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=ge(this._rawAsyncValidators);}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n);}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[];}reset(n=void 0){this.control?.reset(n);}hasError(n,t){return this.control?this.control.hasError(n,t):false}getError(n,t){return this.control?this.control.getError(n,t):null}},$=class extends Ot{name;get formDirective(){return null}get path(){return null}};var ct="VALID",Vt="INVALID",X="PENDING",lt="DISABLED",L=class{},St=class extends L{value;source;constructor(n,t){super(),this.value=n,this.source=t;}},ut=class extends L{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t;}},mt=class extends L{touched;source;constructor(n,t){super(),this.touched=n,this.source=t;}},Q=class extends L{status;source;constructor(n,t){super(),this.status=n,this.source=t;}},kt=class extends L{source;constructor(n){super(),this.source=n;}},J=class extends L{source;constructor(n){super(),this.source=n;}};function Sn(e){return (Ht(e)?e.validators:e)||null}function ki(e){return Array.isArray(e)?be(e):e||null}function kn(e,n){return (Ht(n)?n.asyncValidators:e)||null}function Ri(e){return Array.isArray(e)?ge(e):e||null}function Ht(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function Pi(e,n,t){let i=e.controls;if(!(Object.keys(i)).length)throw new _(1e3,"");if(!Rn(i,t))throw new _(1001,"")}function Li(e,n,t){e._forEachChild((i,o)=>{if(t[o]===void 0)throw new _(-1002,"")});}var Rt=class{_pendingDirty=false;_hasOwnPendingAsyncValidator=null;_pendingTouched=false;_onCollectionChange=()=>{};_updateOn;_hasRequired=vo$1(false);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t);}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator();}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n;}get parent(){return this._parent}get status(){return SE(this.statusReactive)}set status(n){SE(()=>this.statusReactive.set(n));}_status=NE(()=>this.statusReactive());statusReactive=vo$1(void 0);get valid(){return this.status===ct}get invalid(){return this.status===Vt}get pending(){return this.status===X}get disabled(){return this.status===lt}get enabled(){return this.status!==lt}errors;get pristine(){return SE(this.pristineReactive)}set pristine(n){SE(()=>this.pristineReactive.set(n));}_pristine=NE(()=>this.pristineReactive());pristineReactive=vo$1(true);get dirty(){return !this.pristine}get touched(){return SE(this.touchedReactive)}set touched(n){SE(()=>this.touchedReactive.set(n));}_touched=NE(()=>this.touchedReactive());touchedReactive=vo$1(false);get untouched(){return !this.touched}_events=new ee;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n);}setAsyncValidators(n){this._assignAsyncValidators(n);}addValidators(n){this.setValidators(hn(n,this._rawValidators));}addAsyncValidators(n){this.setAsyncValidators(hn(n,this._rawAsyncValidators));}removeValidators(n){this.setValidators(bn(n,this._rawValidators));}removeAsyncValidators(n){this.setAsyncValidators(bn(n,this._rawAsyncValidators));}hasValidator(n){return Nt(this._rawValidators,n)}hasAsyncValidator(n){return Nt(this._rawAsyncValidators,n)}clearValidators(){this.validator=null;}clearAsyncValidators(){this.asyncValidator=null;}markAsTouched(n={}){let t=this.touched===false;this.touched=true;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(W(U({},n),{sourceControl:i})),t&&n.emitEvent!==false&&this._events.next(new mt(true,i));}markAllAsDirty(n={}){this.markAsDirty({onlySelf:true,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(n));}markAllAsTouched(n={}){this.markAsTouched({onlySelf:true,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n));}markAsUntouched(n={}){let t=this.touched===true;this.touched=false,this._pendingTouched=false;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:true,emitEvent:n.emitEvent,sourceControl:i});}),n.onlySelf||this._parent?._updateTouched(n,i),t&&n.emitEvent!==false&&this._events.next(new mt(false,i));}markAsDirty(n={}){let t=this.pristine===true;this.pristine=false;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(W(U({},n),{sourceControl:i})),t&&n.emitEvent!==false&&this._events.next(new ut(false,i));}markAsPristine(n={}){let t=this.pristine===false;this.pristine=true,this._pendingDirty=false;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:true,emitEvent:n.emitEvent});}),n.onlySelf||this._parent?._updatePristine(n,i),t&&n.emitEvent!==false&&this._events.next(new ut(true,i));}markAsPending(n={}){this.status=X;let t=n.sourceControl??this;n.emitEvent!==false&&(this._events.next(new Q(this.status,t)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(W(U({},n),{sourceControl:t}));}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=lt,this.errors=null,this._forEachChild(o=>{o.disable(W(U({},n),{onlySelf:true}));}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==false&&(this._events.next(new St(this.value,i)),this._events.next(new Q(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(W(U({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(true));}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=ct,this._forEachChild(i=>{i.enable(W(U({},n),{onlySelf:true}));}),this.updateValueAndValidity({onlySelf:true,emitEvent:n.emitEvent}),this._updateAncestors(W(U({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(false));}_updateAncestors(n,t){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t));}setParent(n){this._parent=n;}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ct||this.status===X)&&this._runAsyncValidator(i,n.emitEvent);}let t=n.sourceControl??this;n.emitEvent!==false&&(this._events.next(new St(this.value,t)),this._events.next(new Q(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(W(U({},n),{sourceControl:t}));}_updateTreeValidity(n={emitEvent:true}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:true,emitEvent:n.emitEvent});}_setInitialStatus(){this.status=this._allControlsDisabled()?lt:ct;}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=X,this._hasOwnPendingAsyncValidator={emitEvent:t!==false,shouldHaveEmitted:n!==false};let i=Mn(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:n});});}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??false;return this._hasOwnPendingAsyncValidator=null,n}return  false}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==false,this,t.shouldHaveEmitted);}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(n,t){let i=t?this.get(t):this;return i?.errors?i.errors[n]:null}hasError(n,t){return !!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Q(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,i);}_initObservables(){this.valueChanges=new Re$1,this.statusChanges=new Re$1;}_calculateStatus(){return this._allControlsDisabled()?lt:this.errors?Vt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(X)?X:this._anyControlsHaveStatus(Vt)?Vt:ct}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,t),o&&this._events.next(new ut(this.pristine,t));}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new mt(this.touched,t)),n.onlySelf||this._parent?._updateTouched(n,t);}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n;}_setUpdateStrategy(n){Ht(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn);}_parentMarkedDirty(n){return !n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=ki(this._rawValidators),this._updateHasRequiredValidator();}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Ri(this._rawAsyncValidators);}_updateHasRequiredValidator(){SE(()=>this._hasRequired.set(this.hasValidator(le.required)));}};function Rn(e,n){return Object.hasOwn(e,n)}function Bi(e){return e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"}function ji(e,n,t,i){switch(t){case "name":e.setAttribute(n,t,i);break;case "disabled":case "readonly":case "required":i?e.setAttribute(n,t,""):e.removeAttribute(n,t);break;case "max":case "min":case "minLength":case "maxLength":i!==void 0?e.setAttribute(n,t,i.toString()):e.removeAttribute(n,t);break}}var ue=class{kind;context;control;message;constructor({kind:n,context:t,control:i}){this.kind=n,this.context=t,this.control=i;}};function Pn(e){return typeof e=="number"?e:parseFloat(e)}var ve=(()=>{class e{_validator=Tt;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Tt,this._onChange?.();}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t;}enabled(t){return t!=null}static \u0275fac=function(i){return new(i||e)};static \u0275dir=eI({type:e,features:[wg]})}return e})(),Ui={provide:et,useExisting:Zr(()=>Hi),multi:true},Hi=(()=>{class e extends ve{max;inputName="max";normalizeInput=t=>Pn(t);createValidator=t=>Dn(t);static \u0275fac=(()=>{let t;return function(o){return (t||(t=Bg(e)))(o||e)}})();static \u0275dir=eI({type:e,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(i,o){i&2&&jf("max",o._enabled?o.max:null);},inputs:{max:"max"},standalone:false,features:[mE([Ui]),Rf]})}return e})(),Gi={provide:et,useExisting:Zr(()=>zi),multi:true},zi=(()=>{class e extends ve{min;inputName="min";normalizeInput=t=>Pn(t);createValidator=t=>En(t);static \u0275fac=(()=>{let t;return function(o){return (t||(t=Bg(e)))(o||e)}})();static \u0275dir=eI({type:e,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(i,o){i&2&&jf("min",o._enabled?o.min:null);},inputs:{min:"min"},standalone:false,features:[mE([Gi]),Rf]})}return e})(),Wi={provide:et,useExisting:Zr(()=>Ln),multi:true};var Ln=(()=>{class e extends ve{required;inputName="required";normalizeInput=FP;createValidator=t=>An;enabled(t){return t}static \u0275fac=(()=>{let t;return function(o){return (t||(t=Bg(e)))(o||e)}})();static \u0275dir=eI({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,o){i&2&&jf("required",o._enabled?"":null);},inputs:{required:"required"},standalone:false,features:[mE([Wi]),Rf]})}return e})();var $i=new x$1(""),pt=new x$1("",{factory:()=>Gt}),Gt="always";function qi(e,n,t=Gt){_e(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),Zi(e,n),Xi(e,n),Yi(e,n),Ki(e,n);}function Pt(e,n,t=true){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Bt(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}));}function Lt(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n);});}function Ki(e,n){if(n.valueAccessor.setDisabledState){let t=i=>{n.valueAccessor.setDisabledState(i);};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t);});}}function _e(e,n){let t=Nn(e);n.validator!==null?e.setValidators(fn(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let i=On(e);n.asyncValidator!==null?e.setAsyncValidators(fn(i,n.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let o=()=>e.updateValueAndValidity();Lt(n._rawValidators,o),Lt(n._rawAsyncValidators,o);}function Bt(e,n){let t=false;if(e!==null){if(n.validator!==null){let o=Nn(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==n.validator);r.length!==o.length&&(t=true,e.setValidators(r));}}if(n.asyncValidator!==null){let o=On(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==n.asyncValidator);r.length!==o.length&&(t=true,e.setAsyncValidators(r));}}}let i=()=>{};return Lt(n._rawValidators,i),Lt(n._rawAsyncValidators,i),t}function Zi(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=true,e._pendingDirty=true,e.updateOn==="change"&&Bn(e,n);});}function Yi(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=true,e.updateOn==="blur"&&e._pendingChange&&Bn(e,n),e.updateOn!=="submit"&&e.markAsTouched();});}function Bn(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:false}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=false;}function Xi(e,n){let t=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i);};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t);});}function jn(e,n){_e(e,n);}function Qi(e,n){return Bt(e,n)}function Ji(e,n){if(!e.hasOwnProperty("model"))return  false;let t=e.model;return t.isFirstChange()?true:!Object.is(n,t.currentValue)}function to(e){return Object.getPrototypeOf(e.constructor)===yn}function Un(e,n){e._syncPendingControls(),n.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=false);});}function eo(e,n){if(!n)return null;let t,i,o;return n.forEach(r=>{r.constructor===Cn?t=r:to(r)?i=r:o=r;}),o||i||t||null}function no(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1);}var io={provide:$i,useFactory:()=>{let e=I(tt,{self:true});return {setParseErrors:n=>{e.setParseErrorSource(n);},set onReset(n){e.onReset=n;}}}},tt=class extends Ot{_parent=null;name=null;valueAccessor=null;isCustomControlBased=false;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof J&&this.control&&this.userOnReset?.(this.control.value);}),this.subscription?.add(this.resetSubscription));}isNativeFormElement=false;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=eo(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,t,i){super(),this.injector=n,this.renderer=t,this.rawValueAccessors=i,this.injector?.get(je)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe();});}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(OP);if(!this.control||!n)return;let t=n.markForCheck.bind(n);this.subscription=new H,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof J&&this.control&&this.userOnReset?.(this.control.value);}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator);}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=true,n.listenToCustomControlModel(o=>{this.control?.setValue(o,{emitModelToViewChange:false}),this.control?.markAsDirty(),this.viewToModelUpdate(o);}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched();}),this.customControlBindings={},this.isNativeFormElement=Bi(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(o=>o instanceof Ln));}ngControlUpdate(n,t){if(!this.isCustomControlBased)return;let i=this.control,o=this.customControlBindings;Object.is(o.value,i.value)||(o.value=i.value,n.setCustomControlModelInput(i.value)),this.bindControlProperty(n,o,"touched",i.touched),this.bindControlProperty(n,o,"dirty",i.dirty),this.bindControlProperty(n,o,"valid",i.valid),this.bindControlProperty(n,o,"invalid",i.invalid),this.bindControlProperty(n,o,"pending",i.pending),this.bindControlProperty(n,o,"disabled",i.disabled),this.shouldBindRequired&&this.bindControlProperty(n,o,"required",this.isRequired);let r=i.errors;if(o.errors!==r){o.errors=r;let s=this._convertErrors(r);n.setInputOnDirectives("errors",s);}}get isRequired(){return (this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??false}get shouldBindRequired(){return  true}bindControlProperty(n,t,i,o){if(t[i]===o)return;t[i]=o;let r=n.setInputOnDirectives(i,o);this.isNativeFormElement&&!r&&(i==="disabled"||i==="required")&&this.renderer&&ji(this.renderer,n.nativeElement,i,o);}_convertErrors(n){if(n===null)return [];let t=this.control;return Object.entries(n).map(([i,o])=>new ue({context:o,kind:i,control:t}))}setParseErrorSource(n){if(n===void 0)return;let t=null,i=NE(()=>{let o=n();return o.length===0?null:o.reduce((r,s)=>(r[s.kind]=s,r),{})});this.parseErrorsValidator=(()=>t).bind(this),Yl(()=>{t=i(),this.control?.updateValueAndValidity({emitEvent:false});},{injector:this.injector});}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:false}));}},jt=class{_cd;constructor(n){this._cd=n;}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return !!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return !!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return !!this._cd?.control?.invalid}get isPending(){return !!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var fr=(()=>{class e extends jt{constructor(t){super(t);}static \u0275fac=function(i){return new(i||e)(ci$1(tt,2))};static \u0275dir=eI({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&ep("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending);},standalone:false,features:[Rf]})}return e})(),hr=(()=>{class e extends jt{constructor(t){super(t);}static \u0275fac=function(i){return new(i||e)(ci$1($,10))};static \u0275dir=eI({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){i&2&&ep("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted);},standalone:false,features:[Rf]})}return e})(),Ut=class extends Rt{constructor(n,t,i){super(Sn(t),kn(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:true,emitEvent:!!this.asyncValidator});}controls;registerControl(n,t){let i=this._find(n);return i||(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,i={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange();}removeControl(n,t={}){let i=this._find(n);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange();}setControl(n,t,i={}){let o=this._find(n);o&&o._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange();}contains(n){return this._find(n)?.enabled===true}setValue(n,t={}){SE(()=>{Li(this,true,n),Object.keys(n).forEach(i=>{Pi(this,true,i),this.controls[i].setValue(n[i],{onlySelf:true,emitEvent:t.emitEvent});}),this.updateValueAndValidity(t);});}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(i=>{let o=this._find(i);o&&o.patchValue(n[i],{onlySelf:true,emitEvent:t.emitEvent});}),this.updateValueAndValidity(t));}reset(n={},t={}){this._forEachChild((i,o)=>{i.reset(n?n[o]:null,W(U({},t),{onlySelf:true}));}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==false&&this._events.next(new J(this));}getRawValue(){return this._reduceChildren({},(n,t,i)=>(n[i]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(false,(t,i)=>i._syncPendingControls()?true:t);return n&&this.updateValueAndValidity({onlySelf:true}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&n(i,t);});}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange);});}_updateValue(){this.value=this._reduceValue();}_anyControls(n){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&n(i))return  true;return  false}_reduceValue(){let n={};return this._reduceChildren(n,(t,i,o)=>((i.enabled||this.disabled)&&(t[o]=i.value),t))}_reduceChildren(n,t){let i=n;return this._forEachChild((o,r)=>{i=t(i,o,r);}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return  false;return Object.keys(this.controls).length>0||this.disabled}_find(n){return Rn(this.controls,n)?this.controls[n]:null}};var oo={provide:$,useExisting:Zr(()=>ro)},dt=Promise.resolve(),ro=(()=>{class e extends ${callSetDisabledState;get submitted(){return SE(this.submittedReactive)}_submitted=NE(()=>this.submittedReactive());submittedReactive=vo$1(false);_directives=new Set;form;ngSubmit=new Re$1;options;constructor(t,i,o){super(),this.callSetDisabledState=o,this.form=new Ut({},be(t),ge(i));}ngAfterViewInit(){this._setUpdateStrategy();}get formDirective(){return this}get control(){return this.form}get path(){return []}get controls(){return this.form.controls}addControl(t){dt.then(()=>{let i=this._findContainer(t.path);t.control=i.registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:false}),this._directives.add(t);});}getControl(t){return this.form.get(t.path)}removeControl(t){dt.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t);});}addFormGroup(t){dt.then(()=>{let i=this._findContainer(t.path),o=new Ut({});jn(o,t),i.registerControl(t.name,o),o.updateValueAndValidity({emitEvent:false});});}removeFormGroup(t){dt.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name);});}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){dt.then(()=>{this.form.get(t.path).setValue(i);});}setValue(t){this.control.setValue(t);}onSubmit(t){return this.submittedReactive.set(true),Un(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new kt(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm();}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(false);}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn);}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(i){return new(i||e)(ci$1(et,10),ci$1(he,10),ci$1(pt,8))};static \u0275dir=eI({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,o){i&1&&qf("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()});},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:false,features:[mE([oo]),Rf]})}return e})();function gn(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1);}function vn(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var ao=class extends Rt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=false;constructor(n=null,t,i){super(Sn(t),kn(i,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:true,emitEvent:!!this.asyncValidator}),Ht(t)&&(t.nonNullable||t.initialValueIsDefault)&&(vn(n)?this.defaultValue=n.value:this.defaultValue=n);}setValue(n,t={}){SE(()=>{this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==false&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==false)),this.updateValueAndValidity(t);});}patchValue(n,t={}){this.setValue(n,t);}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=false,t?.emitEvent!==false&&this._events.next(new J(this));}_updateValue(){}_anyControls(n){return  false}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n);}_unregisterOnChange(n){gn(this._onChange,n);}registerOnDisabledChange(n){this._onDisabledChange.push(n);}_unregisterOnDisabledChange(n){gn(this._onDisabledChange,n);}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:true,emitModelToViewChange:false}),true):false}_applyFormState(n){vn(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:true,emitEvent:false}):this.enable({onlySelf:true,emitEvent:false})):this.value=this._pendingValue=n;}};var so=e=>e instanceof ao;var gr=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=eI({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:false})}return e})(),co={provide:me,useExisting:Zr(()=>lo),multi:true},lo=(()=>{class e extends yn{writeValue(t){let i=t??"";this.setProperty("value",i);}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i));};}static \u0275fac=(()=>{let t;return function(o){return (t||(t=Bg(e)))(o||e)}})();static \u0275dir=eI({type:e,selectors:[["input","type","number","formControlName","",3,"ngNoCva",""],["input","type","number","formControl","",3,"ngNoCva",""],["input","type","number","ngModel","",3,"ngNoCva",""]],hostBindings:function(i,o){i&1&&qf("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()});},standalone:false,features:[mE([co]),Rf]})}return e})();var uo=(()=>{class e extends ${callSetDisabledState;get submitted(){return SE(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t);}_submitted=NE(()=>this._submittedReactive());_submittedReactive=vo$1(false);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,i,o){super(),this.callSetDisabledState=o,this._setValidators(t),this._setAsyncValidators(i);}ngOnChanges(t){this.onChanges(t);}ngOnDestroy(){this.onDestroy();}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form);}onDestroy(){this.form&&(Bt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}));}get formDirective(){return this}get path(){return []}addControl(t){let i=this.form.get(t.path);return t._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:false}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){Pt(t.control||null,t,false),no(this.directives,t);}addFormGroup(t){this._setUpFormContainer(t);}removeFormGroup(t){this._cleanUpFormContainer(t);}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t);}removeFormArray(t){this._cleanUpFormContainer(t);}updateModel(t,i){this.form.get(t.path).setValue(i);}onReset(){this.resetForm();}resetForm(t=void 0,i={}){this.form.reset(t,i),this._submittedReactive.set(false);}onSubmit(t){return this.submitted=true,Un(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new kt(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,o=this.form.get(t.path);i!==o&&(Pt(i||null,t),so(o)&&t._setupWithForm(o,this.callSetDisabledState));}),this.form._updateTreeValidity({emitEvent:false});}_setUpFormContainer(t){let i=this.form.get(t.path);jn(i,t),i.updateValueAndValidity({emitEvent:false});}_cleanUpFormContainer(t){let i=this.form?.get(t.path);i&&Qi(i,t)&&i.updateValueAndValidity({emitEvent:false});}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{});}_updateValidators(){_e(this.form,this),this._oldForm&&Bt(this._oldForm,this);}_checkFormPresent(){this.form;}static \u0275fac=function(i){return new(i||e)(ci$1(et,10),ci$1(he,10),ci$1(pt,8))};static \u0275dir=eI({type:e,features:[Rf,wg]})}return e})();var Hn=new x$1(""),mo={provide:tt,useExisting:Zr(()=>po)},po=(()=>{class e extends tt{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new Re$1;static _ngModelWarningSentOnce=false;_ngModelWarningSent=false;constructor(t,i,o,r,s,u,y){super(y,u,o),this._ngModelWarningConfig=r,this.callSetDisabledState=s,this._setValidators(t),this._setAsyncValidators(i);}ngOnChanges(t){if(this._isControlChanged(t)){let i=t.form.previousValue;i&&(Pt(i,this,false),this.removeParseErrorsValidator(i)),this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,qi(this.form,this,this.callSetDisabledState)),this.form.updateValueAndValidity({emitEvent:false});}Ji(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model);}ngOnDestroy(){this.form&&Pt(this.form,this,false);}get path(){return []}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t);}_isControlChanged(t){return t.hasOwnProperty("form")}\u0275ngControlCreate(t){super.ngControlCreate(t);}\u0275ngControlUpdate(t){super.ngControlUpdate(t,true);}static \u0275fac=function(i){return new(i||e)(ci$1(et,10),ci$1(he,10),ci$1(me,10),ci$1(Hn,8),ci$1(pt,8),ci$1(tv,8),ci$1(he$1,8))};static \u0275dir=eI({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:false,features:[mE([mo,io]),Rf,wg,nI(null)]})}return e})();var fo={provide:$,useExisting:Zr(()=>ho)},ho=(()=>{class e extends uo{form=null;ngSubmit=new Re$1;get control(){return this.form}static \u0275fac=(()=>{let t;return function(o){return (t||(t=Bg(e)))(o||e)}})();static \u0275dir=eI({type:e,selectors:[["","formGroup",""]],hostBindings:function(i,o){i&1&&qf("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()});},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:false,features:[mE([fo]),Rf]})}return e})();var Gn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Kv({type:e});static \u0275inj=nl({})}return e})();var vr=(()=>{class e{static withConfig(t){return {ngModule:e,providers:[{provide:pt,useValue:t.callSetDisabledState??Gt}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=Kv({type:e});static \u0275inj=nl({imports:[Gn]})}return e})(),_r=(()=>{class e{static withConfig(t){return {ngModule:e,providers:[{provide:Hn,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:pt,useValue:t.callSetDisabledState??Gt}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=Kv({type:e});static \u0275inj=nl({imports:[Gn]})}return e})();var zt=new WeakMap,P=(()=>{class e{_appRef;_injector=I(he$1);_environmentInjector=I(re);load(t){let i=this._appRef=this._appRef||this._injector.get(nr),o=zt.get(i);o||(o={loaders:new Set,refs:[]},zt.set(i,o),i.onDestroy(()=>{zt.get(i)?.refs.forEach(r=>r.destroy()),zt.delete(i);})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(HP(t,{environmentInjector:this._environmentInjector})));}static \u0275fac=function(i){return new(i||e)};static \u0275prov=Rt$1({token:e,factory:e.\u0275fac})}return e})();var $t=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=Zv({type:e,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return e})(),Wt;function bo(){if(Wt===void 0&&(Wt=null,typeof window<"u")){let e=window;e.trustedTypes!==void 0&&(Wt=e.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}));}return Wt}function wr(e){return bo()?.createHTML(e)||e}function ft(e){return e.buttons===0||e.detail===0}function ht(e){let n=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return !!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var ye;function zn(){if(ye==null){let e=typeof document<"u"?document.head:null;ye=!!(e&&(e.createShadowRoot||e.attachShadow));}return ye}function Ce(e){if(zn()){let n=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function go(){let e=typeof document<"u"&&document?document.activeElement:null;for(;e&&e.shadowRoot;){let n=e.shadowRoot.activeElement;if(n===e)break;e=n;}return e}function x(e){if(e.composedPath)try{return e.composedPath()[0]}catch(n){}return e.target}var Ee;try{Ee=typeof Intl<"u"&&Intl.v8BreakIterator;}catch(e){Ee=false;}var b=(()=>{class e{_platformId=I(ng);isBrowser=this._platformId?el(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ee)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(i){return new(i||e)};static \u0275prov=Rt$1({token:e,factory:e.\u0275fac})}return e})();var bt;function Wn(){if(bt==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>bt=!0}));}finally{bt=bt||false;}return bt}function nt(e){return Wn()?e:!!e.capture}function vo(e,n=0){return $n(e)?Number(e):arguments.length===2?n:0}function $n(e){return !isNaN(parseFloat(e))&&!isNaN(Number(e))}function B(e){return e instanceof Jn$1?e.nativeElement:e}var qn=new x$1("cdk-input-modality-detector-options"),Kn={ignoreKeys:[18,17,224,91,16]},Zn=650,De={passive:true,capture:true},Yn=(()=>{class e{_platform=I(b);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new mn(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(i=>i===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=x(t));};_onMousedown=t=>{Date.now()-this._lastTouchMs<Zn||(this._modality.next(ft(t)?"keyboard":"mouse"),this._mostRecentTarget=x(t));};_onTouchstart=t=>{if(ht(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=x(t);};constructor(){let t=I(G),i=I(yo$1),o=I(qn,{optional:true});if(this._options=U(U({},Kn),o),this.modalityDetected=this._modality.pipe(Ih(1)),this.modalityChanged=this.modalityDetected.pipe(dh()),this._platform.isBrowser){let r=I(zn$1).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(i,"keydown",this._onKeydown,De),r.listen(i,"mousedown",this._onMousedown,De),r.listen(i,"touchstart",this._onTouchstart,De)]);}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t());}static \u0275fac=function(i){return new(i||e)};static \u0275prov=Rt$1({token:e,factory:e.\u0275fac})}return e})(),gt=(function(e){return e[e.IMMEDIATE=0]="IMMEDIATE",e[e.EVENTUAL=1]="EVENTUAL",e})(gt||{}),Xn=new x$1("cdk-focus-monitor-default-options"),qt=nt({passive:true,capture:true}),Ae=(()=>{class e{_ngZone=I(G);_platform=I(b);_inputModalityDetector=I(Yn);_origin=null;_lastFocusOrigin=null;_windowFocused=false;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=false;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=true,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=false);};_document=I(yo$1);_stopInputModalityDetector=new ee;constructor(){let t=I(Xn,{optional:true});this._detectionMode=t?.detectionMode||gt.IMMEDIATE;}_rootNodeFocusAndBlurListener=t=>{let i=x(t);for(let o=i;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o);};monitor(t,i=false){let o=B(t);if(!this._platform.isBrowser||o.nodeType!==1)return zp();let r=Ce(o)||this._document,s=this._elementInfo.get(o);if(s)return i&&(s.checkChildren=true),s.subject;let u={checkChildren:i,subject:new ee,rootNode:r};return this._elementInfo.set(o,u),this._registerGlobalListeners(u),u.subject}stopMonitoring(t){let i=B(t),o=this._elementInfo.get(i);o&&(o.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(o));}focusVia(t,i,o){let r=B(t),s=this._document.activeElement;r===s?this._getClosestElementsInfo(r).forEach(([u,y])=>this._originChanged(u,i,y)):(this._setOrigin(i),typeof r.focus=="function"&&r.focus(o));}ngOnDestroy(){this._elementInfo.forEach((t,i)=>this.stopMonitoring(i));}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===gt.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,i){t.classList.toggle("cdk-focused",!!i),t.classList.toggle("cdk-touch-focused",i==="touch"),t.classList.toggle("cdk-keyboard-focused",i==="keyboard"),t.classList.toggle("cdk-mouse-focused",i==="mouse"),t.classList.toggle("cdk-program-focused",i==="program");}_setOrigin(t,i=false){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&i,this._detectionMode===gt.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Zn:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o);}});}_onFocus(t,i){let o=this._elementInfo.get(i),r=x(t);!o||!o.checkChildren&&i!==r||this._originChanged(i,this._getFocusOrigin(r),o);}_onBlur(t,i){let o=this._elementInfo.get(i);!o||o.checkChildren&&t.relatedTarget instanceof Node&&i.contains(t.relatedTarget)||(this._setClasses(i),this._emitOrigin(o,null));}_emitOrigin(t,i){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(i));}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let i=t.rootNode,o=this._rootNodeFocusListenerCount.get(i)||0;o||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,qt),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,qt);}),this._rootNodeFocusListenerCount.set(i,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener);}),this._inputModalityDetector.modalityDetected.pipe(wh(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,true);}));}_removeGlobalListeners(t){let i=t.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let o=this._rootNodeFocusListenerCount.get(i);o>1?this._rootNodeFocusListenerCount.set(i,o-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,qt),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,qt),this._rootNodeFocusListenerCount.delete(i));}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId));}_originChanged(t,i,o){this._setClasses(t,i),this._emitOrigin(o,i),this._lastFocusOrigin=i;}_getClosestElementsInfo(t){let i=[];return this._elementInfo.forEach((o,r)=>{(r===t||o.checkChildren&&r.contains(t))&&i.push([r,o]);}),i}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:i,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!i||i===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return  false;let r=t.labels;if(r){for(let s=0;s<r.length;s++)if(r[s].contains(i))return  true}return  false}static \u0275fac=function(i){return new(i||e)};static \u0275prov=Rt$1({token:e,factory:e.\u0275fac})}return e})();function we(e){return Array.isArray(e)?e:[e]}var Qn=new Set,q,Kt=(()=>{class e{_platform=I(b);_nonce=I(og,{optional:true});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):yo;}matchMedia(t){return (this._platform.WEBKIT||this._platform.BLINK)&&_o(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=Rt$1({token:e,factory:e.\u0275fac})}return e})();function _o(e,n){if(!Qn.has(e))try{q||(q=document.createElement("style"),n&&q.setAttribute("nonce",n),q.setAttribute("type","text/css"),document.head.appendChild(q)),q.sheet&&(q.sheet.insertRule(`@media ${e.replace(/[{}]/g,"")} {body{ }}`,0),Qn.add(e));}catch(t){console.error(t);}}function yo(e){return {matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var Me=(()=>{class e{_mediaMatcher=I(Kt);_zone=I(G);_queries=new Map;_destroySubject=new ee;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete();}isMatched(t){return Jn(we(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=Jn(we(t)).map(s=>this._registerQuery(s).observable),r=rh(o);return r=Hr(r.pipe(Ai(1)),r.pipe(Ih(1),uh(0))),r.pipe(dt$1(s=>{let u={matches:false,breakpoints:{}};return s.forEach(({matches:y,query:V})=>{u.matches=u.matches||y,u.breakpoints[V]=y;}),u}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),r={observable:new M(s=>{let u=y=>this._zone.run(()=>s.next(y));return i.addListener(u),()=>{i.removeListener(u);}}).pipe(Eh(i),dt$1(({matches:s})=>({query:t,matches:s})),wh(this._destroySubject)),mql:i};return this._queries.set(t,r),r}static \u0275fac=function(i){return new(i||e)};static \u0275prov=Rt$1({token:e,factory:e.\u0275fac})}return e})();function Jn(e){return e.map(n=>n.split(",")).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}var Co=(()=>{class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=Rt$1({token:e,factory:e.\u0275fac})}return e})();var ti=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Kv({type:e});static \u0275inj=nl({providers:[Co]})}return e})();var Eo=(()=>{class e{_platform=I(b);isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return Ao(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return  false;let i=Do(No(t));if(i&&(ei(i)===-1||!this.isVisible(i)))return  false;let o=t.nodeName.toLowerCase(),r=ei(t);return t.hasAttribute("contenteditable")?r!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Vo(t)?false:o==="audio"?t.hasAttribute("controls")?r!==-1:false:o==="video"?r===-1?false:r!==null?true:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,i){return To(t)&&!this.isDisabled(t)&&(i?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(i){return new(i||e)};static \u0275prov=Rt$1({token:e,factory:e.\u0275fac})}return e})();function Do(e){try{return e.frameElement}catch(n){return null}}function Ao(e){return !!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects=="function"&&e.getClientRects().length)}function wo(e){let n=e.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function Mo(e){return Fo(e)&&e.type=="hidden"}function xo(e){return Io(e)&&e.hasAttribute("href")}function Fo(e){return e.nodeName.toLowerCase()=="input"}function Io(e){return e.nodeName.toLowerCase()=="a"}function oi(e){if(!e.hasAttribute("tabindex")||e.tabIndex===void 0)return  false;let n=e.getAttribute("tabindex");return !!(n&&!isNaN(parseInt(n,10)))}function ei(e){if(!oi(e))return null;let n=parseInt(e.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function Vo(e){let n=e.nodeName.toLowerCase(),t=n==="input"&&e.type;return t==="text"||t==="password"||n==="select"||n==="textarea"}function To(e){return Mo(e)?false:wo(e)||xo(e)||e.hasAttribute("contenteditable")||oi(e)}function No(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var Fe=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=false;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor));}_enabled=true;constructor(n,t,i,o,r=false,s){this._element=n,this._checker=t,this._ngZone=i,this._document=o,this._injector=s,r||this.attachAnchors();}destroy(){let n=this._startAnchor,t=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=false;}attachAnchors(){return this._hasAttached?true:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener));}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=true),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(n)));})}focusFirstTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(n)));})}focusLastTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(n)));})}_getRegionBoundary(n){let t=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let i=this._getFirstTabbableElement(t);return i?.focus(n),!!i}return t.focus(n),true}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let t=this._getRegionBoundary("start");return t&&t.focus(n),!!t}focusLastTabbableElement(n){let t=this._getRegionBoundary("end");return t&&t.focus(n),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let i=0;i<t.length;i++){let o=t[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[i]):null;if(o)return o}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let i=t.length-1;i>=0;i--){let o=t[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[i]):null;if(o)return o}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,t){n?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex");}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor));}_executeOnStable(n){Gm(n,{injector:this._injector});}},Oo=(()=>{class e{_checker=I(Eo);_ngZone=I(G);_document=I(yo$1);_injector=I(he$1);constructor(){I(P).load($t);}create(t,i=false){return new Fe(t,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=Rt$1({token:e,factory:e.\u0275fac})}return e})();var j=(function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e})(j||{}),ni="cdk-high-contrast-black-on-white",ii="cdk-high-contrast-white-on-black",xe="cdk-high-contrast-active",ri=(()=>{class e{_platform=I(b);_hasCheckedHighContrastMode=false;_document=I(yo$1);_breakpointSubscription;constructor(){this._breakpointSubscription=I(Me).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=false,this._applyBodyHighContrastModeCssClasses());});}getHighContrastMode(){if(!this._platform.isBrowser)return j.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let i=this._document.defaultView||window,o=i&&i.getComputedStyle?i.getComputedStyle(t):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case "rgb(0,0,0)":case "rgb(45,50,54)":case "rgb(32,32,32)":return j.WHITE_ON_BLACK;case "rgb(255,255,255)":case "rgb(255,250,239)":return j.BLACK_ON_WHITE}return j.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe();}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(xe,ni,ii),this._hasCheckedHighContrastMode=true;let i=this.getHighContrastMode();i===j.BLACK_ON_WHITE?t.add(xe,ni):i===j.WHITE_ON_BLACK&&t.add(xe,ii);}}static \u0275fac=function(i){return new(i||e)};static \u0275prov=Rt$1({token:e,factory:e.\u0275fac})}return e})(),So=(()=>{class e{constructor(){I(ri)._applyBodyHighContrastModeCssClasses();}static \u0275fac=function(i){return new(i||e)};static \u0275mod=Kv({type:e});static \u0275inj=nl({imports:[ti]})}return e})();function Da(e,...n){return n.length?n.some(t=>e[t]):e.altKey||e.shiftKey||e.ctrlKey||e.metaKey}var ai=new Map,Ie=class e{_appId=I(Ql);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=false){this._appId!=="ng"&&(n+=this._appId);let i=ai.get(n);return i===void 0?i=0:i++,ai.set(n,i),`${n}${t?e._infix+"-":""}${i}`}static \u0275fac=function(t){return new(t||e)};static \u0275prov=Rt$1({token:e,factory:e.\u0275fac})};var ci=" ";function ko(e,n,t){let i=Yt(e,n);t=t.trim(),!i.some(o=>o.trim()===t)&&(i.push(t),e.setAttribute(n,i.join(ci)));}function Ro(e,n,t){let i=Yt(e,n);t=t.trim();let o=i.filter(r=>r!==t);o.length?e.setAttribute(n,o.join(ci)):e.removeAttribute(n);}function Yt(e,n){return e.getAttribute(n)?.match(/\S+/g)??[]}var li="cdk-describedby-message",Zt="cdk-describedby-host",Te=0,ja=(()=>{class e{_platform=I(b);_document=I(yo$1);_messageRegistry=new Map;_messagesContainer=null;_id=`${Te++}`;constructor(){I(P).load($t),this._id=I(Ql)+"-"+Te++;}describe(t,i,o){if(!this._canBeDescribed(t,i))return;let r=Ve(i,o);typeof i!="string"?(si(i,this._id),this._messageRegistry.set(r,{messageElement:i,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(i,o),this._isElementDescribedByMessage(t,r)||this._addMessageReference(t,r);}removeDescription(t,i,o){if(!i||!this._isElementNode(t))return;let r=Ve(i,o);if(this._isElementDescribedByMessage(t,r)&&this._removeMessageReference(t,r),typeof i=="string"){let s=this._messageRegistry.get(r);s&&s.referenceCount===0&&this._deleteMessageElement(r);}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null);}ngOnDestroy(){let t=this._document.querySelectorAll(`[${Zt}="${this._id}"]`);for(let i=0;i<t.length;i++)this._removeCdkDescribedByReferenceIds(t[i]),t[i].removeAttribute(Zt);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear();}_createMessageElement(t,i){let o=this._document.createElement("div");si(o,this._id),o.textContent=t,i&&o.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(Ve(t,i),{messageElement:o,referenceCount:0});}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t);}_createMessagesContainer(){if(this._messagesContainer)return;let t="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let r=0;r<i.length;r++)i[r].remove();let o=this._document.createElement("div");o.style.visibility="hidden",o.classList.add(t),o.classList.add("cdk-visually-hidden"),this._platform.isBrowser||o.setAttribute("platform","server"),this._document.body.appendChild(o),this._messagesContainer=o;}_removeCdkDescribedByReferenceIds(t){let i=Yt(t,"aria-describedby").filter(o=>o.indexOf(li)!=0);t.setAttribute("aria-describedby",i.join(" "));}_addMessageReference(t,i){let o=this._messageRegistry.get(i);ko(t,"aria-describedby",o.messageElement.id),t.setAttribute(Zt,this._id),o.referenceCount++;}_removeMessageReference(t,i){let o=this._messageRegistry.get(i);o.referenceCount--,Ro(t,"aria-describedby",o.messageElement.id),t.removeAttribute(Zt);}_isElementDescribedByMessage(t,i){let o=Yt(t,"aria-describedby"),r=this._messageRegistry.get(i),s=r&&r.messageElement.id;return !!s&&o.indexOf(s)!=-1}_canBeDescribed(t,i){if(!this._isElementNode(t))return  false;if(i&&typeof i=="object")return  true;let o=i==null?"":`${i}`.trim(),r=t.getAttribute("aria-label");return o?!r||r.trim()!==o:false}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||e)};static \u0275prov=Rt$1({token:e,factory:e.\u0275fac})}return e})();function Ve(e,n){return typeof e=="string"?`${n||""}/${e}`:e}function si(e,n){e.id||(e.id=`${li}-${n}-${Te++}`);}var Po=new x$1("cdk-dir-doc",{providedIn:"root",factory:()=>I(yo$1)}),Lo=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function di(e){let n=e?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Lo.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Bo=(()=>{class e{get value(){return this.valueSignal()}valueSignal=vo$1("ltr");change=new Re$1;constructor(){let t=I(Po,{optional:true});if(t){let i=t.body?t.body.dir:null,o=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(di(i||o||"ltr"));}}ngOnDestroy(){this.change.complete();}static \u0275fac=function(i){return new(i||e)};static \u0275prov=Rt$1({token:e,factory:e.\u0275fac})}return e})();var Xt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Kv({type:e});static \u0275inj=nl({})}return e})();function Xa(e){return e==null?"":typeof e=="string"?e:`${e}px`}function Ja(e){return e!=null&&`${e}`!="false"}var vt=(function(e){return e[e.NORMAL=0]="NORMAL",e[e.NEGATED=1]="NEGATED",e[e.INVERTED=2]="INVERTED",e})(vt||{}),Qt,K;function ns(){if(K==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return K=false,K;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)K=true;else {let e=Element.prototype.scrollTo;e?K=!/\{\s*\[native code\]\s*\}/.test(e.toString()):K=false;}}return K}function is(){if(typeof document!="object"||!document)return vt.NORMAL;if(Qt==null){let e=document.createElement("div"),n=e.style;e.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let t=document.createElement("div"),i=t.style;i.width="2px",i.height="1px",e.appendChild(t),document.body.appendChild(e),Qt=vt.NORMAL,e.scrollLeft===0&&(e.scrollLeft=1,Qt=e.scrollLeft===0?vt.NEGATED:vt.INVERTED),e.remove();}return Qt}function rs(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var it,ui=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function ss(){if(it)return it;if(typeof document!="object"||!document)return it=new Set(ui),it;let e=document.createElement("input");return it=new Set(ui.filter(n=>(e.setAttribute("type",n),e.type===n))),it}var jo=new x$1("MATERIAL_ANIMATIONS"),mi=null;function Uo(){return I(jo,{optional:true})?.animationsDisabled||I(rg,{optional:true})==="NoopAnimations"?"di-disabled":(mi??=I(Kt).matchMedia("(prefers-reduced-motion)").matches,mi?"reduced-motion":"enabled")}function ot(){return Uo()!=="enabled"}var A=(function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e})(A||{}),Ne=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=A.HIDDEN;constructor(n,t,i,o=false){this._renderer=n,this.element=t,this.config=i,this._animationForciblyDisabledThroughCss=o;}fadeOut(){this._renderer.fadeOutRipple(this);}},pi=nt({passive:true,capture:true}),Oe=class{_events=new Map;addHandler(n,t,i,o){let r=this._events.get(t);if(r){let s=r.get(i);s?s.add(o):r.set(i,new Set([o]));}else this._events.set(t,new Map([[i,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,pi);});}removeHandler(n,t,i){let o=this._events.get(n);if(!o)return;let r=o.get(t);r&&(r.delete(i),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,pi)));}_delegateEventHandler=n=>{let t=x(n);t&&this._events.get(n.type)?.forEach((i,o)=>{(o===t||o.contains(t))&&i.forEach(r=>r.handleEvent(n));});}},_t={enterDuration:225,exitDuration:150},Ho=800,fi=nt({passive:true,capture:true}),hi=["mousedown","touchstart"],bi=["mouseup","mouseleave","touchend","touchcancel"],Go=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=Zv({type:e,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return e})(),yt=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=false;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=false;_containerRect=null;static _eventManager=new Oe;constructor(n,t,i,o,r){this._target=n,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=B(i)),r&&r.get(P).load(Go);}fadeInRipple(n,t,i={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=U(U({},_t),i.animation);i.centered&&(n=o.left+o.width/2,t=o.top+o.height/2);let s=i.radius||zo(n,t,o),u=n-o.left,y=t-o.top,V=r.enterDuration,C=document.createElement("div");C.classList.add("mat-ripple-element"),C.style.left=`${u-s}px`,C.style.top=`${y-s}px`,C.style.height=`${s*2}px`,C.style.width=`${s*2}px`,i.color!=null&&(C.style.backgroundColor=i.color),C.style.transitionDuration=`${V}ms`,this._containerElement.appendChild(C);let Pe=window.getComputedStyle(C),Ai=Pe.transitionProperty,Le=Pe.transitionDuration,te=Ai==="none"||Le==="0s"||Le==="0s, 0s"||o.width===0&&o.height===0,U$1=new Ne(this,C,i,te);C.style.transform="scale3d(1, 1, 1)",U$1.state=A.FADING_IN,i.persistent||(this._mostRecentTransientRipple=U$1);let Ct=null;return !te&&(V||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Be=()=>{Ct&&(Ct.fallbackTimer=null),clearTimeout(je),this._finishRippleTransition(U$1);},ee=()=>this._destroyRipple(U$1),je=setTimeout(ee,V+100);C.addEventListener("transitionend",Be),C.addEventListener("transitioncancel",ee),Ct={onTransitionEnd:Be,onTransitionCancel:ee,fallbackTimer:je};}),this._activeRipples.set(U$1,Ct),(te||!V)&&this._finishRippleTransition(U$1),U$1}fadeOutRipple(n){if(n.state===A.FADING_OUT||n.state===A.HIDDEN)return;let t=n.element,i=U(U({},_t),n.config.animation);t.style.transitionDuration=`${i.exitDuration}ms`,t.style.opacity="0",n.state=A.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n);}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut());}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut();});}setupTriggerEvents(n){let t=B(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,hi.forEach(i=>{e._eventManager.addHandler(this._ngZone,i,t,this);}));}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{bi.forEach(t=>{this._triggerElement.addEventListener(t,this,fi);});}),this._pointerUpEventsRegistered=true);}_finishRippleTransition(n){n.state===A.FADING_IN?this._startFadeOutTransition(n):n.state===A.FADING_OUT&&this._destroyRipple(n);}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=A.VISIBLE,!i&&(!t||!this._isPointerDown)&&n.fadeOut();}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=A.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove();}_onMousedown(n){let t=ft(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Ho;!this._target.rippleDisabled&&!t&&!i&&(this._isPointerDown=true,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig));}_onTouchStart(n){if(!this._target.rippleDisabled&&!ht(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=true;let t=n.changedTouches;if(t)for(let i=0;i<t.length;i++)this.fadeInRipple(t[i].clientX,t[i].clientY,this._target.rippleConfig);}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=false,this._getActiveRipples().forEach(n=>{let t=n.state===A.VISIBLE||n.config.terminateOnPointerUp&&n.state===A.FADING_IN;!n.config.persistent&&t&&n.fadeOut();}));}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(hi.forEach(t=>e._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(bi.forEach(t=>n.removeEventListener(t,this,fi)),this._pointerUpEventsRegistered=false));}};function zo(e,n,t){let i=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),o=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(i*i+o*o)}var Se=new x$1("mat-ripple-global-options"),xs=(()=>{class e{_elementRef=I(Jn$1);_animationsDisabled=ot();color;unbounded=false;centered=false;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled();}_disabled=false;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled();}_trigger;_rippleRenderer;_globalOptions;_isInitialized=false;constructor(){let t=I(G),i=I(b),o=I(Se,{optional:true}),r=I(he$1);this._globalOptions=o||{},this._rippleRenderer=new yt(this,t,this._elementRef,i,r);}ngOnInit(){this._isInitialized=true,this._setupTriggerEventsIfEnabled();}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents();}fadeOutAll(){this._rippleRenderer.fadeOutAll();}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent();}get rippleConfig(){return {centered:this.centered,radius:this.radius,color:this.color,animation:U(U(U({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger);}launch(t,i=0,o){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,i,U(U({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,U(U({},this.rippleConfig),t))}static \u0275fac=function(i){return new(i||e)};static \u0275dir=eI({type:e,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,o){i&2&&ep("mat-ripple-unbounded",o.unbounded);},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return e})();var Wo={capture:true},$o=["focus","mousedown","mouseenter","touchstart"],ke="mat-ripple-loader-uninitialized",Re="mat-ripple-loader-class-name",gi="mat-ripple-loader-centered",Jt="mat-ripple-loader-disabled",vi=(()=>{class e{_document=I(yo$1);_animationsDisabled=ot();_globalRippleOptions=I(Se,{optional:true});_platform=I(b);_ngZone=I(G);_injector=I(he$1);_eventCleanups;_hosts=new Map;constructor(){let t=I(zn$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>$o.map(i=>t.listen(this._document,i,this._onInteraction,Wo)));}ngOnDestroy(){let t=this._hosts.keys();for(let i of t)this.destroyRipple(i);this._eventCleanups.forEach(i=>i());}configureRipple(t,i){t.setAttribute(ke,this._globalRippleOptions?.namespace??""),(i.className||!t.hasAttribute(Re))&&t.setAttribute(Re,i.className||""),i.centered&&t.setAttribute(gi,""),i.disabled&&t.setAttribute(Jt,"");}setDisabled(t,i){let o=this._hosts.get(t);o?(o.target.rippleDisabled=i,!i&&!o.hasSetUpEvents&&(o.hasSetUpEvents=true,o.renderer.setupTriggerEvents(t))):i?t.setAttribute(Jt,""):t.removeAttribute(Jt);}_onInteraction=t=>{let i=x(t);if(i instanceof HTMLElement){let o=i.closest(`[${ke}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o);}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",t.getAttribute(Re)),t.append(i);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??_t.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??_t.exitDuration,u={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(Jt),rippleConfig:{centered:t.hasAttribute(gi),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:s}}},y=new yt(u,this._ngZone,i,this._platform,this._injector),V=!u.rippleDisabled;V&&y.setupTriggerEvents(t),this._hosts.set(t,{target:u,renderer:y,hasSetUpEvents:V}),t.removeAttribute(ke);}destroyRipple(t){let i=this._hosts.get(t);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(t));}static \u0275fac=function(i){return new(i||e)};static \u0275prov=Rt$1({token:e,factory:e.\u0275fac})}return e})();var _i=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=Zv({type:e,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2})}return e})();var qo=new x$1("MAT_BUTTON_CONFIG");function yi(e){return e==null?void 0:jP(e)}var Ci=(()=>{class e{_elementRef=I(Jn$1);_ngZone=I(G);_animationsDisabled=ot();_config=I(qo,{optional:true});_focusMonitor=I(Ae);_cleanupClick;_renderer=I(tv);_rippleLoader=I(vi);_isAnchor;_isFab=false;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled();}_disableRipple=false;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled();}_disabled=false;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t;}showProgress=xP(false,{transform:FP});constructor(){I(P).load(_i);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??false,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"});}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,true),this._isAnchor&&this._setupAsAnchor();}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);}focus(t="program",i){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,i):this._elementRef.nativeElement.focus(i);}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?true:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:true}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled);}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation());}));}static \u0275fac=function(i){return new(i||e)};static \u0275dir=eI({type:e,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(i,o){i&2&&(jf("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),KI(o.color?"mat-"+o.color:""),ep("mat-mdc-button-progress-indicator-shown",o.showProgress())("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled));},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",FP],disabled:[2,"disabled","disabled",FP],ariaDisabled:[2,"aria-disabled","ariaDisabled",FP],disabledInteractive:[2,"disabledInteractive","disabledInteractive",FP],tabIndex:[2,"tabIndex","tabIndex",yi],_tabindex:[2,"tabindex","_tabindex",yi],showProgress:[1,"showProgress"]}})}return e})();var Ei=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Kv({type:e});static \u0275inj=nl({imports:[Xt]})}return e})();var Ko=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],Zo=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function Yo(e,n){e&1&&(rc(0,"div",2),PI(1,3),oc());}var Di=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),tc=(()=>{class e extends Ci{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text");}_appearance=null;constructor(){super();let t=Xo(this._elementRef.nativeElement);t&&this.setAppearance(t);}setAppearance(t){if(t===this._appearance)return;let i=this._elementRef.nativeElement.classList,o=this._appearance?Di.get(this._appearance):null,r=Di.get(t);o&&i.remove(...o),i.add(...r),this._appearance=t;}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=Zv({type:e,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Rf],ngContentSelectors:Zo,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,o){i&1&&(OI(Ko),Bf(0,"span",0),PI(1),rc(2,"span",1),PI(3,1),oc(),PI(4,2),II(5,Yo,2,0,"div",2),Bf(6,"span",3)(7,"span",4)),i&2&&(ep("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab),my(5),EI(o.showProgress()?5:-1));},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return e})();function Xo(e){return e.hasAttribute("mat-raised-button")?"elevated":e.hasAttribute("mat-stroked-button")?"outlined":e.hasAttribute("mat-flat-button")?"filled":e.hasAttribute("mat-button")?"text":null}var ec=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Kv({type:e});static \u0275inj=nl({imports:[Ei,Xt]})}return e})();export{Ae as A,Bo as B,Cn as C,Da as D,Ei as E,me as F,rs as G,Hi as H,Ie as I,Ja as J,Kt as K,Xa as L,we as M,Eo as N,Oo as O,P,go as Q,x as R,So as S,ns as T,is as U,vt as V,Xt as X,_r as _,ao as a,lo as b,ti as c,b as d,ec as e,fr as f,gr as g,hr as h,tt as i,ho as j,B as k,le as l,Se as m,_i as n,ot as o,po as p,ja as q,ro as r,ss as s,tc as t,vo as u,vr as v,wr as w,A as x,xs as y,zi as z};