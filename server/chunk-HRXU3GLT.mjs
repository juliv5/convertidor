import './polyfills.server.mjs';
import{A as m,B as h,C as J,D as K,E as k,F as T,G,H as _,I as M,J as me,K as ve,M as ye,S as _e,T as Ce,U as Q,W as Ve,X as De,Y as be,Z as Me,_ as Ae,a as ue,b as de,ba as Ee,c as ce,d as x,e as P,f as V,g as $,h as c,ha as Fe,i as E,j as z,k as D,l as y,m as Z,n as b,o as f,p as l,q as F,r as he,s as g,t as X,u as fe,v as Y,w as pe,x as u,y as d,z as ge}from"./chunk-FNX5DI35.mjs";import{a as v,b as C}from"./chunk-VVCT4QZE.mjs";var we=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=V({type:e,selectors:[["app-navbar"]],standalone:!0,features:[M],decls:4,vars:0,consts:[["data-bs-theme","dark",1,"navbar","bg-dark"],[1,"container-fluid"],[1,"navbar-brand","mb-0","h1"]],template:function(n,o){n&1&&(u(0,"nav",0)(1,"div",1)(2,"span",2),h(3,"App Convertidor de Monedas"),d()()())},styles:[".navbar[_ngcontent-%COMP%]{height:80px}.navbar-brand[_ngcontent-%COMP%]{font-size:1.5rem}"]});let t=e;return t})();var Ue=(()=>{let e=class e{constructor(i,n){this._renderer=i,this._elementRef=n,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,n){this._renderer.setProperty(this._elementRef.nativeElement,i,n)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(n){return new(n||e)(l(F),l(E))},e.\u0275dir=c({type:e});let t=e;return t})(),B=(()=>{let e=class e extends Ue{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=b(e)))(o||e)}})(),e.\u0275dir=c({type:e,features:[g]});let t=e;return t})(),O=new D("");var at={provide:O,useExisting:y(()=>H),multi:!0};function lt(){let t=Q()?Q().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ut=new D(""),H=(()=>{let e=class e extends Ue{constructor(i,n,o){super(i,n),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!lt())}writeValue(i){let n=i??"";this.setProperty("value",n)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(n){return new(n||e)(l(F),l(E),l(ut,8))},e.\u0275dir=c({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&m("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},features:[_([at]),g]});let t=e;return t})();function Ie(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}var Re=new D(""),dt=new D("");function ct(t){return e=>{if(Ie(e.value)||Ie(t))return null;let r=parseFloat(e.value);return!isNaN(r)&&r<t?{min:{min:t,actual:e.value}}:null}}function Se(t){return null}function Be(t){return t!=null}function He(t){return ye(t)?ue(t):t}function Le(t){let e={};return t.forEach(r=>{e=r!=null?v(v({},e),r):e}),Object.keys(e).length===0?null:e}function We(t,e){return e.map(r=>r(t))}function ht(t){return!t.validate}function qe(t){return t.map(e=>ht(e)?e:r=>e.validate(r))}function ft(t){if(!t)return null;let e=t.filter(Be);return e.length==0?null:function(r){return Le(We(r,e))}}function $e(t){return t!=null?ft(qe(t)):null}function pt(t){if(!t)return null;let e=t.filter(Be);return e.length==0?null:function(r){let i=We(r,e).map(He);return ce(i).pipe(de(Le))}}function ze(t){return t!=null?pt(qe(t)):null}function Oe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function gt(t){return t._rawValidators}function mt(t){return t._rawAsyncValidators}function te(t){return t?Array.isArray(t)?t:[t]:[]}function U(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ne(t,e){let r=te(e);return te(t).forEach(n=>{U(r,n)||r.push(n)}),r}function xe(t,e){return te(e).filter(r=>!U(t,r))}var R=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=$e(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ze(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,r){return this.control?this.control.hasError(e,r):!1}getError(e,r){return this.control?this.control.getError(e,r):null}},ie=class extends R{get formDirective(){return null}get path(){return null}},S=class extends R{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ne=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},vt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},gi=C(v({},vt),{"[class.ng-submitted]":"isSubmitted"}),Ze=(()=>{let e=class e extends ne{constructor(i){super(i)}};e.\u0275fac=function(n){return new(n||e)(l(S,2))},e.\u0275dir=c({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&pe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[g]});let t=e;return t})();var w="VALID",j="INVALID",A="PENDING",I="DISABLED";function yt(t){return(L(t)?t.validators:t)||null}function _t(t){return Array.isArray(t)?$e(t):t||null}function Ct(t,e){return(L(e)?e.asyncValidators:t)||null}function Vt(t){return Array.isArray(t)?ze(t):t||null}function L(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var re=class{constructor(e,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===j}get pending(){return this.status==A}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ne(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ne(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(xe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(xe(e,this._rawAsyncValidators))}hasValidator(e){return U(this._rawValidators,e)}hasAsyncValidator(e){return U(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=A,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(i=>{i.disable(C(v({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(C(v({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(i=>{i.enable(C(v({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(C(v({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===A)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;let r=He(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,r={}){this.errors=e,this._updateControlsErrors(r.emitEvent!==!1)}get(e){let r=e;return r==null||(Array.isArray(r)||(r=r.split(".")),r.length===0)?null:r.reduce((i,n)=>i&&i._find(n),this)}getError(e,r){let i=r?this.get(r):this;return i&&i.errors?i.errors[e]:null}hasError(e,r){return!!this.getError(e,r)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new x,this.statusChanges=new x}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(j)?j:w}_anyControlsHaveStatus(e){return this._anyControls(r=>r.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let r=this._parent&&this._parent.dirty;return!e&&!!r&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=_t(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Vt(this._rawAsyncValidators)}};var Xe=new D("CallSetDisabledState",{providedIn:"root",factory:()=>oe}),oe="always";function Dt(t,e){return[...e.path,t]}function bt(t,e,r=oe){At(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||r==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Et(t,e),wt(t,e),Ft(t,e),Mt(t,e)}function Pe(t,e){t.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(e)})}function Mt(t,e){if(e.valueAccessor.setDisabledState){let r=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(r),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(r)})}}function At(t,e){let r=gt(t);e.validator!==null?t.setValidators(Oe(r,e.validator)):typeof r=="function"&&t.setValidators([r]);let i=mt(t);e.asyncValidator!==null?t.setAsyncValidators(Oe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let n=()=>t.updateValueAndValidity();Pe(e._rawValidators,n),Pe(e._rawAsyncValidators,n)}function Et(t,e){e.valueAccessor.registerOnChange(r=>{t._pendingValue=r,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ye(t,e)})}function Ft(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ye(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ye(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function wt(t,e){let r=(i,n)=>{e.valueAccessor.writeValue(i),n&&e.viewToModelUpdate(i)};t.registerOnChange(r),e._registerOnDestroy(()=>{t._unregisterOnChange(r)})}function It(t,e){if(!t.hasOwnProperty("model"))return!1;let r=t.model;return r.isFirstChange()?!0:!Object.is(e,r.currentValue)}function St(t){return Object.getPrototypeOf(t.constructor)===B}function Ot(t,e){if(!e)return null;Array.isArray(e);let r,i,n;return e.forEach(o=>{o.constructor===H?r=o:St(o)?i=o:n=o}),n||i||r||null}function ke(t,e){let r=t.indexOf(e);r>-1&&t.splice(r,1)}function Te(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Nt=class extends re{constructor(e=null,r,i){super(yt(r),Ct(i,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(r)&&(r.nonNullable||r.initialValueIsDefault)&&(Te(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,r={}){this.value=this._pendingValue=e,this._onChange.length&&r.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,r.emitViewToModelChange!==!1)),this.updateValueAndValidity(r)}patchValue(e,r={}){this.setValue(e,r)}reset(e=this.defaultValue,r={}){this._applyFormState(e),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ke(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ke(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Te(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var xt={provide:S,useExisting:y(()=>se)},Ge=Promise.resolve(),se=(()=>{let e=class e extends S{constructor(i,n,o,a,s,p){super(),this._changeDetectorRef=s,this.callSetDisabledState=p,this.control=new Nt,this._registered=!1,this.name="",this.update=new x,this._parent=i,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=Ot(this,a)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let n=i.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),It(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){bt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Ge.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let n=i.isDisabled.currentValue,o=n!==0&&_e(n);Ge.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Dt(i,this._parent):[i]}};e.\u0275fac=function(n){return new(n||e)(l(ie,9),l(Re,10),l(dt,10),l(O,10),l(he,8),l(Xe,8))},e.\u0275dir=c({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[P.None,"disabled","isDisabled"],model:[P.None,"ngModel","model"],options:[P.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[_([xt]),g,Z]});let t=e;return t})();var Pt={provide:O,useExisting:y(()=>ae),multi:!0},ae=(()=>{let e=class e extends B{writeValue(i){let n=i??"";this.setProperty("value",n)}registerOnChange(i){this.onChange=n=>{i(n==""?null:parseFloat(n))}}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=b(e)))(o||e)}})(),e.\u0275dir=c({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,o){n&1&&m("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},features:[_([Pt]),g]});let t=e;return t})();var kt={provide:O,useExisting:y(()=>W),multi:!0};function Je(t,e){return t==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${t}: ${e}`.slice(0,50))}function Tt(t){return t.split(":")[0]}var W=(()=>{let e=class e extends B{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(i){this._compareWith=i}writeValue(i){this.value=i;let n=this._getOptionId(i),o=Je(n,i);this.setProperty("value",o)}registerOnChange(i){this.onChange=n=>{this.value=this._getOptionValue(n),i(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(i){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),i))return n;return null}_getOptionValue(i){let n=Tt(i);return this._optionMap.has(n)?this._optionMap.get(n):i}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=b(e)))(o||e)}})(),e.\u0275dir=c({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,o){n&1&&m("change",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[_([kt]),g]});let t=e;return t})(),Ke=(()=>{let e=class e{constructor(i,n,o){this._element=i,this._renderer=n,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(i){this._select!=null&&(this._select._optionMap.set(this.id,i),this._setElementValue(Je(this.id,i)),this._select.writeValue(this._select.value))}set value(i){this._setElementValue(i),this._select&&this._select.writeValue(this._select.value)}_setElementValue(i){this._renderer.setProperty(this._element.nativeElement,"value",i)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(n){return new(n||e)(l(E),l(F),l(W,9))},e.\u0275dir=c({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let t=e;return t})(),Gt={provide:O,useExisting:y(()=>Qe),multi:!0};function je(t,e){return t==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${t}: ${e}`.slice(0,50))}function jt(t){return t.split(":")[0]}var Qe=(()=>{let e=class e extends B{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(i){this._compareWith=i}writeValue(i){this.value=i;let n;if(Array.isArray(i)){let o=i.map(a=>this._getOptionId(a));n=(a,s)=>{a._setSelected(o.indexOf(s.toString())>-1)}}else n=(o,a)=>{o._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(i){this.onChange=n=>{let o=[],a=n.selectedOptions;if(a!==void 0){let s=a;for(let p=0;p<s.length;p++){let N=s[p],q=this._getOptionValue(N.value);o.push(q)}}else{let s=n.options;for(let p=0;p<s.length;p++){let N=s[p];if(N.selected){let q=this._getOptionValue(N.value);o.push(q)}}}this.value=o,i(o)}}_registerOption(i){let n=(this._idCounter++).toString();return this._optionMap.set(n,i),n}_getOptionId(i){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,i))return n;return null}_getOptionValue(i){let n=jt(i);return this._optionMap.has(n)?this._optionMap.get(n)._value:i}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=b(e)))(o||e)}})(),e.\u0275dir=c({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,o){n&1&&m("change",function(s){return o.onChange(s.target)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[_([Gt]),g]});let t=e;return t})(),et=(()=>{let e=class e{constructor(i,n,o){this._element=i,this._renderer=n,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(i){this._select!=null&&(this._value=i,this._setElementValue(je(this.id,i)),this._select.writeValue(this._select.value))}set value(i){this._select?(this._value=i,this._setElementValue(je(this.id,i)),this._select.writeValue(this._select.value)):this._setElementValue(i)}_setElementValue(i){this._renderer.setProperty(this._element.nativeElement,"value",i)}_setSelected(i){this._renderer.setProperty(this._element.nativeElement,"selected",i)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(n){return new(n||e)(l(E),l(F),l(Qe,9))},e.\u0275dir=c({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let t=e;return t})();function Ut(t){return typeof t=="number"?t:parseFloat(t)}var Rt=(()=>{let e=class e{constructor(){this._validator=Se}ngOnChanges(i){if(this.inputName in i){let n=this.normalizeInput(i[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Se,this._onChange&&this._onChange()}}validate(i){return this._validator(i)}registerOnValidatorChange(i){this._onChange=i}enabled(i){return i!=null}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=c({type:e,features:[Z]});let t=e;return t})();var Bt={provide:Re,useExisting:y(()=>le),multi:!0},le=(()=>{let e=class e extends Rt{constructor(){super(...arguments),this.inputName="min",this.normalizeInput=i=>Ut(i),this.createValidator=i=>ct(i)}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=b(e)))(o||e)}})(),e.\u0275dir=c({type:e,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(n,o){n&2&&fe("min",o._enabled?o.min:null)},inputs:{min:"min"},features:[_([Bt]),g]});let t=e;return t})();var Ht=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=$({type:e}),e.\u0275inj=z({});let t=e;return t})();var tt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Xe,useValue:i.callSetDisabledState??oe}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=$({type:e}),e.\u0275inj=z({imports:[Ht]});let t=e;return t})();function Wt(t,e){if(t&1&&(u(0,"option"),h(1),d()),t&2){let r=e.$implicit;f(),J(r)}}function qt(t,e){if(t&1&&(u(0,"option"),h(1),d()),t&2){let r=e.$implicit;f(),J(r)}}var it=(()=>{let e=class e{constructor(){this.cantidad=0,this.tengo="USD",this.quiero="EUR",this.total=0,this.monedas=["USD","EUR","LIBRA"]}ngOnInit(){}convertir(){switch(this.tengo){case"USD":this.quiero==="USD"&&(this.total=this.cantidad),this.quiero==="EUR"&&(this.total=this.cantidad*.92),this.quiero==="LIBRA"&&(this.total=this.cantidad*.79);break;case"EUR":this.quiero==="EUR"&&(this.total=this.cantidad),this.quiero==="USD"&&(this.total=this.cantidad*1.09),this.quiero==="LIBRA"&&(this.total=this.cantidad*.86);break;case"LIBRA":this.quiero==="LIBRA"&&(this.total=this.cantidad),this.quiero==="USD"&&(this.total=this.cantidad*1.27),this.quiero==="EUR"&&(this.total=this.cantidad*1.17);break}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=V({type:e,selectors:[["app-convertidor"]],standalone:!0,features:[M],decls:30,vars:12,consts:[[1,"container","mt-3"],[1,"row"],[1,"col-lg-12"],[1,"form-group"],["for","cantidad"],["type","number","min","0","onkeypress","return event.charCode >= 48","id","cantidad","placeholder","Ingrese la cantidad...",1,"form-control","form-control-lg",3,"ngModel","ngModelChange","input"],[1,"col-lg-6"],["for","tengo"],["id","tengo",1,"form-control","form-control-lg",3,"ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],["for","quiero"],["id","quiero",1,"form-control","form-control-lg",3,"ngModel","ngModelChange","change"],[1,"text-center"],[1,"badge","badge-success"],[1,"badge","badge-secondary"]],template:function(n,o){n&1&&(u(0,"p"),h(1,"convertidor works!"),d(),u(2,"div",0)(3,"div",1)(4,"div",2)(5,"div",3)(6,"label",4),h(7,"Ingrese cantidad"),d(),u(8,"input",5),G("ngModelChange",function(s){return T(o.cantidad,s)||(o.cantidad=s),s}),m("input",function(){return o.convertir()}),d()()(),u(9,"div",1)(10,"div",6)(11,"div",3)(12,"label",7),h(13,"Tengo"),d(),u(14,"select",8),G("ngModelChange",function(s){return T(o.tengo,s)||(o.tengo=s),s}),m("change",function(){return o.convertir()}),X(15,Wt,2,1,"option",9),d()()(),u(16,"div",6)(17,"div",3)(18,"label",10),h(19,"Quiero"),d(),u(20,"select",11),G("ngModelChange",function(s){return T(o.quiero,s)||(o.quiero=s),s}),m("change",function(){return o.convertir()}),X(21,qt,2,1,"option",9),d()()()()(),u(22,"h5",12)(23,"span",13),h(24),d(),u(25,"span",14),h(26,"SON"),d(),u(27,"span",13),h(28),me(29,"number"),d()()()),n&2&&(f(8),k("ngModel",o.cantidad),f(6),k("ngModel",o.tengo),f(),Y("ngForOf",o.monedas),f(5),k("ngModel",o.quiero),f(),Y("ngForOf",o.monedas),f(3),K("",o.cantidad," ",o.tengo,""),f(4),K("",ve(29,9,o.total,"0.0-2")," ",o.quiero,""))},dependencies:[tt,Ke,et,H,ae,W,Ze,le,se,be,Ve,De],styles:[".badge[_ngcontent-%COMP%]{margin:2px;font-size:150%;color:#000}label[_ngcontent-%COMP%]{font-size:150%;color:#fff}"]});let t=e;return t})();var nt=(()=>{let e=class e{constructor(){this.title="Juliana Velandia"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=V({type:e,selectors:[["app-root"]],standalone:!0,features:[M],decls:2,vars:0,template:function(n,o){n&1&&ge(0,"app-navbar")(1,"app-convertidor")},dependencies:[we,it]});let t=e;return t})();var rt=[];var ot={providers:[Fe(rt),Ae()]};var $t={providers:[Ee()]},st=Ce(ot,$t);var zt=()=>Me(nt,st),Gi=zt;export{Gi as a};
