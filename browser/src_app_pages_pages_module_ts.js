(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 89299:
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreakpointObserver": () => (/* binding */ BreakpointObserver),
/* harmony export */   "Breakpoints": () => (/* binding */ Breakpoints),
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule),
/* harmony export */   "MediaMatcher": () => (/* binding */ MediaMatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 93786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92890);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 81220);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 51590);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 26928);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7802);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 74172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 27045);






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{}]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Global registry for all dynamically-created, injected media queries. */
const mediaQueriesForWebkitCompatibility = new Set();
/** Style tag that holds all of the dynamically-created media queries. */
let mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */
class MediaMatcher {
    constructor(_platform) {
        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ?
            // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
            // call it from a different scope.
            window.matchMedia.bind(window) :
            noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     */
    matchMedia(query) {
        if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
        }
        return this._matchMedia(query);
    }
}
MediaMatcher.ɵfac = function MediaMatcher_Factory(t) { return new (t || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform)); };
MediaMatcher.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MediaMatcher_Factory() { return new MediaMatcher((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform)); }, token: MediaMatcher, providedIn: "root" });
MediaMatcher.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform }]; }, null); })();
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 */
function createEmptyStyleRule(query) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css');
            document.head.appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            mediaQueryStyleNode.sheet
                .insertRule(`@media ${query} {.fx-query-test{ }}`, 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
/** No-op matchMedia replacement for non-browser platforms. */
function noopMatchMedia(query) {
    // Use `as any` here to avoid adding additional necessary properties for
    // the noop matcher.
    return {
        matches: query === 'all' || query === '',
        media: query,
        addListener: () => { },
        removeListener: () => { }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Utility for checking the matching state of @media queries. */
class BreakpointObserver {
    constructor(_mediaMatcher, _zone) {
        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**  A map of all media queries currently being listened for. */
        this._queries = new Map();
        /** A subject for all other observables to takeUntil based on. */
        this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    /** Completes the active subject, signalling to all other observables to complete. */
    ngOnDestroy() {
        this._destroySubject.next();
        this._destroySubject.complete();
    }
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */
    isMatched(value) {
        const queries = splitQueries((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
        return queries.some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
    }
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */
    observe(value) {
        const queries = splitQueries((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
        const observables = queries.map(query => this._registerQuery(query).observable);
        let stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)(observables);
        // Emit the first state immediately, and then debounce the subsequent emissions.
        stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.concat)(stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)), stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(0)));
        return stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(breakpointStates => {
            const response = {
                matches: false,
                breakpoints: {},
            };
            breakpointStates.forEach(({ matches, query }) => {
                response.matches = response.matches || matches;
                response.breakpoints[query] = matches;
            });
            return response;
        }));
    }
    /** Registers a specific query to be listened for. */
    _registerQuery(query) {
        // Only set up a new MediaQueryList if it is not already being listened for.
        if (this._queries.has(query)) {
            return this._queries.get(query);
        }
        const mql = this._mediaMatcher.matchMedia(query);
        // Create callback for match changes and add it is as a listener.
        const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable((observer) => {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.
            const handler = (e) => this._zone.run(() => observer.next(e));
            mql.addListener(handler);
            return () => {
                mql.removeListener(handler);
            };
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(mql), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(({ matches }) => ({ query, matches })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroySubject));
        // Add the MediaQueryList to the set of queries.
        const output = { observable: queryObservable, mql };
        this._queries.set(query, output);
        return output;
    }
}
BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) { return new (t || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
BreakpointObserver.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); }, token: BreakpointObserver, providedIn: "root" });
BreakpointObserver.ctorParameters = () => [
    { type: MediaMatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MediaMatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, null); })();
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */
function splitQueries(queries) {
    return queries.map(query => query.split(','))
        .reduce((a1, a2) => a1.concat(a2))
        .map(query => query.trim());
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
const Breakpoints = {
    XSmall: '(max-width: 599.99px)',
    Small: '(min-width: 600px) and (max-width: 959.99px)',
    Medium: '(min-width: 960px) and (max-width: 1279.99px)',
    Large: '(min-width: 1280px) and (max-width: 1919.99px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599.99px) and (orientation: portrait), ' +
        '(max-width: 959.99px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 27045:
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Platform": () => (/* binding */ Platform),
/* harmony export */   "PlatformModule": () => (/* binding */ PlatformModule),
/* harmony export */   "_getShadowRoot": () => (/* binding */ _getShadowRoot),
/* harmony export */   "_supportsShadowDom": () => (/* binding */ _supportsShadowDom),
/* harmony export */   "getRtlScrollAxisType": () => (/* binding */ getRtlScrollAxisType),
/* harmony export */   "getSupportedInputTypes": () => (/* binding */ getSupportedInputTypes),
/* harmony export */   "normalizePassiveListenerOptions": () => (/* binding */ normalizePassiveListenerOptions),
/* harmony export */   "supportsPassiveEventListeners": () => (/* binding */ supportsPassiveEventListeners),
/* harmony export */   "supportsScrollBehavior": () => (/* binding */ supportsScrollBehavior)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 28267);



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.

let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && Intl.v8BreakIterator);
}
catch (_a) {
    hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
class Platform {
    constructor(_platformId) {
        this._platformId = _platformId;
        // We want to use the Angular platform check because if the Document is shimmed
        // without the navigator, the following checks will fail. This is preferred because
        // sometimes the Document may be shimmed without the user's knowledge or intention
        /** Whether the Angular application is being rendered in the browser. */
        this.isBrowser = this._platformId ?
            (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) : typeof document === 'object' && !!document;
        /** Whether the current browser is Microsoft Edge. */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /** Whether the current rendering engine is Microsoft Trident. */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        /** Whether the current rendering engine is Blink. */
        this.BLINK = this.isBrowser && (!!(window.chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        /** Whether the current rendering engine is WebKit. */
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /** Whether the current platform is Apple iOS. */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        /** Whether the current browser is Firefox. */
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /** Whether the current platform is Android. */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        /** Whether the current browser is Safari. */
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
}
Platform.ɵfac = function Platform_Factory(t) { return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); };
Platform.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Platform_Factory() { return new Platform((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); }, token: Platform, providedIn: "root" });
Platform.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Platform, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class PlatformModule {
}
PlatformModule.ɵfac = function PlatformModule_Factory(t) { return new (t || PlatformModule)(); };
PlatformModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PlatformModule });
PlatformModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlatformModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{}]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result Set of input types support by the current browser. */
let supportedInputTypes;
/** Types of `<input>` that *might* be supported. */
const candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/** @returns The input types supported by this browser. */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    let featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(value => {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result of whether the user's browser supports passive event listeners. */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
                get: () => supportsPassiveEvents = true
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param options Object to be normalized.
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */
let rtlScrollAxisType;
/** Cached result of the check that indicates whether the browser supports scroll behaviors. */
let scrollBehaviorSupported;
/** Check whether the browser supports scroll behaviors. */
function supportsScrollBehavior() {
    if (scrollBehaviorSupported == null) {
        // If we're not in the browser, it can't be supported.
        if (typeof document !== 'object' || !document) {
            scrollBehaviorSupported = false;
        }
        // If the element can have a `scrollBehavior` style, we can be sure that it's supported.
        if ('scrollBehavior' in document.documentElement.style) {
            scrollBehaviorSupported = true;
        }
        else {
            // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
            // supported but it doesn't handle scroll behavior, or it has been polyfilled.
            const scrollToFunction = Element.prototype.scrollTo;
            if (scrollToFunction) {
                // We can detect if the function has been polyfilled by calling `toString` on it. Native
                // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
                // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
                // polyfilled functions as supporting scroll behavior.
                scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
            }
            else {
                scrollBehaviorSupported = false;
            }
        }
    }
    return scrollBehaviorSupported;
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return 0 /* NORMAL */;
    }
    if (rtlScrollAxisType == null) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        const scrollContainer = document.createElement('div');
        const containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        const content = document.createElement('div');
        const contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = 0 /* NORMAL */;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? 1 /* NEGATED */ : 2 /* INVERTED */;
        }
        scrollContainer.parentNode.removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let shadowDomIsSupported;
/** Checks whether the user's browser support Shadow DOM. */
function _supportsShadowDom() {
    if (shadowDomIsSupported == null) {
        const head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
    }
    return shadowDomIsSupported;
}
/** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */
function _getShadowRoot(element) {
    if (_supportsShadowDom()) {
        const rootNode = element.getRootNode ? element.getRootNode() : null;
        // Note that this should be caught by `_supportsShadowDom`, but some
        // teams have been able to hit this code path on unsupported browsers.
        if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
            return rootNode;
        }
    }
    return null;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 93786:
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/coercion.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_isNumberValue": () => (/* binding */ _isNumberValue),
/* harmony export */   "coerceArray": () => (/* binding */ coerceArray),
/* harmony export */   "coerceBooleanProperty": () => (/* binding */ coerceBooleanProperty),
/* harmony export */   "coerceCssPixelValue": () => (/* binding */ coerceCssPixelValue),
/* harmony export */   "coerceElement": () => (/* binding */ coerceElement),
/* harmony export */   "coerceNumberProperty": () => (/* binding */ coerceNumberProperty)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceNumberProperty(value, fallbackValue = 0) {
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : `${value}px`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */
function coerceElement(elementOrRef) {
    return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/***/ }),

/***/ 30318:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ks89/angular-modal-gallery/__ivy_ngcc__/fesm2015/ks89-angular-modal-gallery.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryModule": () => (/* binding */ GalleryModule),
/* harmony export */   "Action": () => (/* binding */ Action),
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "ImageEvent": () => (/* binding */ ImageEvent),
/* harmony export */   "ImageModalEvent": () => (/* binding */ ImageModalEvent),
/* harmony export */   "DescriptionStrategy": () => (/* binding */ DescriptionStrategy),
/* harmony export */   "ButtonsStrategy": () => (/* binding */ ButtonsStrategy),
/* harmony export */   "ButtonType": () => (/* binding */ ButtonType),
/* harmony export */   "GalleryService": () => (/* binding */ GalleryService),
/* harmony export */   "LoadingType": () => (/* binding */ LoadingType),
/* harmony export */   "KS_DEFAULT_ACCESSIBILITY_CONFIG": () => (/* binding */ KS_DEFAULT_ACCESSIBILITY_CONFIG),
/* harmony export */   "KS_DEFAULT_BTN_FULL_SCREEN": () => (/* binding */ KS_DEFAULT_BTN_FULL_SCREEN),
/* harmony export */   "KS_DEFAULT_BTN_CLOSE": () => (/* binding */ KS_DEFAULT_BTN_CLOSE),
/* harmony export */   "KS_DEFAULT_BTN_DELETE": () => (/* binding */ KS_DEFAULT_BTN_DELETE),
/* harmony export */   "KS_DEFAULT_BTN_DOWNLOAD": () => (/* binding */ KS_DEFAULT_BTN_DOWNLOAD),
/* harmony export */   "KS_DEFAULT_BTN_EXTURL": () => (/* binding */ KS_DEFAULT_BTN_EXTURL),
/* harmony export */   "KS_DEFAULT_SIZE": () => (/* binding */ KS_DEFAULT_SIZE),
/* harmony export */   "LineLayout": () => (/* binding */ LineLayout),
/* harmony export */   "GridLayout": () => (/* binding */ GridLayout),
/* harmony export */   "AdvancedLayout": () => (/* binding */ AdvancedLayout),
/* harmony export */   "PlainGalleryStrategy": () => (/* binding */ PlainGalleryStrategy),
/* harmony export */   "ɵi": () => (/* binding */ AccessibleComponent),
/* harmony export */   "ɵf": () => (/* binding */ BackgroundComponent),
/* harmony export */   "ɵn": () => (/* binding */ CarouselPreviewsComponent),
/* harmony export */   "ɵe": () => (/* binding */ CarouselComponent),
/* harmony export */   "ɵc": () => (/* binding */ COMPONENTS),
/* harmony export */   "ɵh": () => (/* binding */ CurrentImageComponent),
/* harmony export */   "ɵr": () => (/* binding */ LoadingSpinnerComponent),
/* harmony export */   "ɵp": () => (/* binding */ DotsComponent),
/* harmony export */   "ɵd": () => (/* binding */ ModalGalleryComponent),
/* harmony export */   "ɵg": () => (/* binding */ PlainGalleryComponent),
/* harmony export */   "ɵq": () => (/* binding */ PreviewsComponent),
/* harmony export */   "ɵo": () => (/* binding */ UpperButtonsComponent),
/* harmony export */   "ɵy": () => (/* binding */ ATagBgImageDirective),
/* harmony export */   "ɵt": () => (/* binding */ ClickOutsideDirective),
/* harmony export */   "ɵz": () => (/* binding */ DescriptionDirective),
/* harmony export */   "ɵx": () => (/* binding */ DirectionDirective),
/* harmony export */   "ɵs": () => (/* binding */ DIRECTIVES),
/* harmony export */   "ɵv": () => (/* binding */ KeyboardNavigationDirective),
/* harmony export */   "ɵba": () => (/* binding */ MarginDirective),
/* harmony export */   "ɵbb": () => (/* binding */ MaxSizeDirective),
/* harmony export */   "ɵu": () => (/* binding */ SizeDirective),
/* harmony export */   "ɵw": () => (/* binding */ WrapDirective),
/* harmony export */   "ɵa": () => (/* binding */ KsHammerGestureConfig),
/* harmony export */   "ɵb": () => (/* binding */ setupKeyboardService),
/* harmony export */   "ɵm": () => (/* binding */ IdValidatorService),
/* harmony export */   "ɵj": () => (/* binding */ KEYBOARD_CONFIGURATION),
/* harmony export */   "ɵk": () => (/* binding */ KeyboardService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 81356);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 94058);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ 89299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 86219);







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to close the modal gallery clicking on the semi-transparent background.
 * In fact, it listens for a click on all elements that aren't 'inside' and it emits
 * an event using `\@Output clickOutside`.
 */





function BackgroundComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.backgroundTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.backgroundAriaLabel);
} }
const _c0 = function (a0, a1) { return { width: a0, height: a1 }; };
function CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template_img_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.onNavigationEvent("left", $event, ctx_r9.clickAction); })("keyup", function CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template_img_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.onNavigationEvent("left", $event, ctx_r11.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const leftPreview_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", leftPreview_r5.modal.alt ? leftPreview_r5.modal.alt : ctx_r6.getAltDescriptionByImage(leftPreview_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (leftPreview_r5.plain == null ? null : leftPreview_r5.plain.img) ? leftPreview_r5.plain.img : leftPreview_r5.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("hidden", ctx_r6.loading)("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r6.configSlide.sidePreviews == null ? null : ctx_r6.configSlide.sidePreviews.size.width, ctx_r6.configSlide.sidePreviews == null ? null : ctx_r6.configSlide.sidePreviews.size.height))("title", leftPreview_r5.modal.title ? leftPreview_r5.modal.title : ctx_r6.getDescriptionToDisplay(leftPreview_r5))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", leftPreview_r5.modal.ariaLabel);
} }
function CurrentImageComponent_ng_container_4_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r8.configSlide.sidePreviews == null ? null : ctx_r8.configSlide.sidePreviews.size.width, ctx_r8.configSlide.sidePreviews == null ? null : ctx_r8.configSlide.sidePreviews.size.height));
} }
function CurrentImageComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template, 1, 10, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CurrentImageComponent_ng_container_4_ng_container_1_ng_template_2_Template, 1, 4, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isFirstImage)("ngIfElse", _r7);
} }
function CurrentImageComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentImageComponent_ng_container_4_ng_container_1_Template, 4, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getLeftPreviewImage());
} }
function CurrentImageComponent_figcaption_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "figcaption", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", ctx_r1.configCurrentImage == null ? null : ctx_r1.configCurrentImage.description)("innerHTML", ctx_r1.getDescriptionToDisplay(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CurrentImageComponent_ng_container_9_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentImageComponent_ng_container_9_ng_container_1_img_1_Template_img_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.onNavigationEvent("right", $event, ctx_r18.clickAction); })("keyup", function CurrentImageComponent_ng_container_9_ng_container_1_img_1_Template_img_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.onNavigationEvent("right", $event, ctx_r20.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rightPreview_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", rightPreview_r14.modal.alt ? rightPreview_r14.modal.alt : ctx_r15.getAltDescriptionByImage(rightPreview_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (rightPreview_r14.plain == null ? null : rightPreview_r14.plain.img) ? rightPreview_r14.plain.img : rightPreview_r14.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("hidden", ctx_r15.loading)("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r15.slideConfig.sidePreviews == null ? null : ctx_r15.slideConfig.sidePreviews.size.width, ctx_r15.slideConfig.sidePreviews == null ? null : ctx_r15.slideConfig.sidePreviews.size.height))("title", rightPreview_r14.modal.title ? rightPreview_r14.modal.title : ctx_r15.getDescriptionToDisplay(rightPreview_r14))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", rightPreview_r14.modal.ariaLabel);
} }
function CurrentImageComponent_ng_container_9_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r17.slideConfig.sidePreviews == null ? null : ctx_r17.slideConfig.sidePreviews.size.width, ctx_r17.slideConfig.sidePreviews == null ? null : ctx_r17.slideConfig.sidePreviews.size.height));
} }
function CurrentImageComponent_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentImageComponent_ng_container_9_ng_container_1_img_1_Template, 1, 10, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CurrentImageComponent_ng_container_9_ng_container_1_ng_template_2_Template, 1, 4, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.isLastImage)("ngIfElse", _r16);
} }
function CurrentImageComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurrentImageComponent_ng_container_9_ng_container_1_Template, 4, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getRightPreviewImage());
} }
function CurrentImageComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ks-loading-spinner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loadingConfig", ctx_r3.configCurrentImage == null ? null : ctx_r3.configCurrentImage.loadingConfig)("accessibilityConfig", ctx_r3.accessibilityConfig);
} }
function ModalGalleryComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function ModalGalleryComponent_div_2_Template_div_clickOutside_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onClickOutside($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ks-upper-buttons", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delete", function ModalGalleryComponent_div_2_Template_ks_upper_buttons_delete_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onDelete($event); })("navigate", function ModalGalleryComponent_div_2_Template_ks_upper_buttons_navigate_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onNavigate($event); })("download", function ModalGalleryComponent_div_2_Template_ks_upper_buttons_download_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onDownload($event); })("close", function ModalGalleryComponent_div_2_Template_ks_upper_buttons_close_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onCloseGallery($event); })("fullscreen", function ModalGalleryComponent_div_2_Template_ks_upper_buttons_fullscreen_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onFullScreen($event); })("customEmit", function ModalGalleryComponent_div_2_Template_ks_upper_buttons_customEmit_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onCustomEmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ks-current-image", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loadImage", function ModalGalleryComponent_div_2_Template_ks_current_image_loadImage_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onImageLoad($event); })("changeImage", function ModalGalleryComponent_div_2_Template_ks_current_image_changeImage_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onChangeCurrentImage($event); })("close", function ModalGalleryComponent_div_2_Template_ks_current_image_close_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onCloseGallery($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ks-dots", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickDot", function ModalGalleryComponent_div_2_Template_ks_dots_clickDot_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onClickDot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ks-previews", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickPreview", function ModalGalleryComponent_div_2_Template_ks_previews_clickPreview_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onClickPreview($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.accessibilityConfig.modalGalleryContentTitle)("clickOutsideEnable", ctx_r0.enableCloseOutside);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.accessibilityConfig.modalGalleryContentAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentImage", ctx_r0.currentImage)("buttonsConfig", ctx_r0.buttonsConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.id)("images", ctx_r0.images)("currentImage", ctx_r0.currentImage)("isOpen", ctx_r0.opened)("slideConfig", ctx_r0.configSlide)("keyboardConfig", ctx_r0.keyboardConfig)("accessibilityConfig", ctx_r0.accessibilityConfig)("currentImageConfig", ctx_r0.currentImageConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx_r0.images)("currentImage", ctx_r0.currentImage)("dotsConfig", ctx_r0.dotsConfig)("accessibilityConfig", ctx_r0.accessibilityConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx_r0.images)("currentImage", ctx_r0.currentImage)("previewConfig", ctx_r0.previewConfig)("accessibilityConfig", ctx_r0.accessibilityConfig);
} }
function CarouselComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
} }
function CarouselComponent_figure_3_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_figure_3_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onNavigationEvent("left", $event, ctx_r9.clickAction); })("keyup", function CarouselComponent_figure_3_a_1_Template_a_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onNavigationEvent("left", $event, ctx_r11.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx_r5.isLastImage && !ctx_r5.infinite ? -1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r5.accessibilityConfig.carouselPrevImageAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx_r5.isFirstImage && !ctx_r5.infinite || !ctx_r5.configCarousel.showArrows ? "empty-arrow-image" : "left-arrow-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r5.accessibilityConfig.carouselPrevImageTitle);
} }
function CarouselComponent_figure_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function CarouselComponent_figure_3_figcaption_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "figcaption", 16);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", ctx_r7.configCurrentImageCarousel == null ? null : ctx_r7.configCurrentImageCarousel.description)("innerHTML", ctx_r7.getDescriptionToDisplay(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CarouselComponent_figure_3_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_figure_3_a_5_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onNavigationEvent("right", $event, ctx_r12.clickAction); })("keyup", function CarouselComponent_figure_3_a_5_Template_a_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.onNavigationEvent("right", $event, ctx_r14.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx_r8.isLastImage && !ctx_r8.infinite ? -1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r8.accessibilityConfig.carouselNextImageAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx_r8.isLastImage && !ctx_r8.infinite || !ctx_r8.configCarousel.showArrows ? "empty-arrow-image" : "right-arrow-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r8.accessibilityConfig.carouselNextImageTitle);
} }
const _c1 = function (a0) { return { width: a0, height: "" }; };
const _c2 = function (a0, a1) { return { maxWidth: a0, maxHeight: a1 }; };
function CarouselComponent_figure_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_figure_3_a_1_Template, 2, 6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_figure_3_ng_container_2_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_figure_3_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onClickCurrentImage(); })("swipeleft", function CarouselComponent_figure_3_Template_img_swipeleft_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.swipe($event.type); })("swiperight", function CarouselComponent_figure_3_Template_img_swiperight_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.swipe($event.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_figure_3_figcaption_4_Template, 1, 2, "figcaption", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_figure_3_a_5_Template, 2, 6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ks-dots", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickDot", function CarouselComponent_figure_3_Template_ks_dots_clickDot_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onClickDot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx_r2.configCarousel == null ? null : ctx_r2.configCarousel.maxWidth));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.configCarousel == null ? null : ctx_r2.configCarousel.showArrows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("object-fit", ctx_r2.configCarousel == null ? null : ctx_r2.configCarousel.objectFit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r2.currentImage.modal.alt ? ctx_r2.currentImage.modal.alt : ctx_r2.getAltDescriptionByImage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c2, ctx_r2.configCarousel == null ? null : ctx_r2.configCarousel.maxWidth, ctx_r2.configCarousel == null ? null : ctx_r2.configCarousel.maxHeight))("src", ctx_r2.currentImage.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", ctx_r2.currentImage.modal.title ? ctx_r2.currentImage.modal.title : ctx_r2.getTitleToDisplay())("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2.currentImage.modal.ariaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getDescriptionToDisplay() !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.configCarousel == null ? null : ctx_r2.configCarousel.showArrows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentImage", ctx_r2.currentImage)("dotsConfig", ctx_r2.configDots)("accessibilityConfig", ctx_r2.accessibilityConfig)("images", ctx_r2.images);
} }
function CarouselComponent_ng_template_4_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ng_template_4_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.onNavigationEvent("left", $event, ctx_r24.clickAction); })("keyup", function CarouselComponent_ng_template_4_a_1_Template_a_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.onNavigationEvent("left", $event, ctx_r26.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx_r20.isLastImage && !ctx_r20.infinite ? -1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r20.accessibilityConfig.carouselPrevImageAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx_r20.isFirstImage && !ctx_r20.infinite || !ctx_r20.configCarousel.showArrows ? "empty-arrow-image" : "left-arrow-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r20.accessibilityConfig.carouselPrevImageTitle);
} }
function CarouselComponent_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function CarouselComponent_ng_template_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 21);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", ctx_r22.configCurrentImageCarousel == null ? null : ctx_r22.configCurrentImageCarousel.description)("innerHTML", ctx_r22.getDescriptionToDisplay(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function CarouselComponent_ng_template_4_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ng_template_4_a_5_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.onNavigationEvent("right", $event, ctx_r27.clickAction); })("keyup", function CarouselComponent_ng_template_4_a_5_Template_a_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.onNavigationEvent("right", $event, ctx_r29.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx_r23.isLastImage && !ctx_r23.infinite ? -1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r23.accessibilityConfig.carouselNextImageAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx_r23.isLastImage && !ctx_r23.infinite || !ctx_r23.configCarousel.showArrows ? "empty-arrow-image" : "right-arrow-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r23.accessibilityConfig.carouselNextImageTitle);
} }
const _c3 = function (a1) { return { width: "100%", height: a1 }; };
const _c4 = function (a0) { return { maxWidth: a0 }; };
function CarouselComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_template_4_a_1_Template, 2, 6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_ng_template_4_ng_container_2_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ng_template_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.onClickCurrentImage(); })("swipeleft", function CarouselComponent_ng_template_4_Template_div_swipeleft_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.swipe($event.type); })("swiperight", function CarouselComponent_ng_template_4_Template_div_swiperight_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.swipe($event.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_ng_template_4_div_4_Template, 1, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_ng_template_4_a_5_Template, 2, 6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ks-dots", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickDot", function CarouselComponent_ng_template_4_Template_ks_dots_clickDot_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.onClickDot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c1, ctx_r4.configCarousel == null ? null : ctx_r4.configCarousel.maxWidth));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.configCarousel == null ? null : ctx_r4.configCarousel.showArrows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "transparent")("background-image", ctx_r4.sanitizeUrlBgStyle(ctx_r4.currentImage.modal.img + ""))("background-position", "center center")("background-size", "cover")("background-repeat", "no-repeat")("background-attachment", "scroll");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c3, ctx_r4.configCarousel == null ? null : ctx_r4.configCarousel.maxHeight))("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c4, ctx_r4.configCarousel == null ? null : ctx_r4.configCarousel.maxWidth))("title", ctx_r4.currentImage.modal.title ? ctx_r4.currentImage.modal.title : ctx_r4.getTitleToDisplay())("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r4.currentImage.modal.ariaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.getDescriptionToDisplay() !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.configCarousel == null ? null : ctx_r4.configCarousel.showArrows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentImage", ctx_r4.currentImage)("dotsConfig", ctx_r4.configDots)("accessibilityConfig", ctx_r4.accessibilityConfig)("images", ctx_r4.images);
} }
const _c5 = function (a0) { return { maxWidth: a0, maxHeight: "" }; };
const _c6 = ["*"];
const _c7 = ".arrow-image[_ngcontent-%COMP%], .empty-arrow-image[_ngcontent-%COMP%], .left-arrow-image[_ngcontent-%COMP%], .right-arrow-image[_ngcontent-%COMP%]{width:30px;height:30px;background-size:30px}.empty-arrow-image[_ngcontent-%COMP%]{background:#000;opacity:0}.left-arrow-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.left-arrow-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.right-arrow-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.right-arrow-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}";
function CarouselPreviewsComponent_nav_0_ng_container_4_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselPreviewsComponent_nav_0_ng_container_4_ng_container_1_img_1_Template_img_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onImageEvent(preview_r2, $event, ctx_r8.clickAction); })("keyup", function CarouselPreviewsComponent_nav_0_ng_container_4_ng_container_1_img_1_Template_img_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onImageEvent(preview_r2, $event, ctx_r11.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("inside preview-image", ctx_r7.isActive(preview_r2) ? " active" : "", "", !ctx_r7.configPreview.clickable ? " unclickable" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r7.getAlt(preview_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (preview_r2.plain == null ? null : preview_r2.plain.img) ? preview_r2.plain.img : preview_r2.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx_r7.configPreview == null ? null : ctx_r7.configPreview.width, ctx_r7.configPreview == null ? null : ctx_r7.configPreview.maxHeight))("title", ctx_r7.getTitle(preview_r2))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r7.getAriaLabel(preview_r2));
} }
function CarouselPreviewsComponent_nav_0_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselPreviewsComponent_nav_0_ng_container_4_ng_container_1_img_1_Template, 1, 13, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", preview_r2 == null ? null : preview_r2.modal == null ? null : preview_r2.modal.img);
} }
function CarouselPreviewsComponent_nav_0_ng_container_4_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselPreviewsComponent_nav_0_ng_container_4_ng_template_2_div_0_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onImageEvent(preview_r2, $event, ctx_r16.clickAction); })("keyup", function CarouselPreviewsComponent_nav_0_ng_container_4_ng_template_2_div_0_Template_div_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.onImageEvent(preview_r2, $event, ctx_r19.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("inside preview-ie11-image", ctx_r15.isActive(preview_r2) ? " active" : "", "", !ctx_r15.configPreview.clickable ? " unclickable" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", "transparent")("background-image", ctx_r15.sanitizeUrlBgStyle((preview_r2.plain == null ? null : preview_r2.plain.img) ? preview_r2.plain.img : preview_r2.modal.img))("background-position", "center center")("background-size", ctx_r15.getIE11LegacyBgSize())("background-repeat", "no-repeat")("background-attachment", "scroll");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c0, ctx_r15.configPreview == null ? null : ctx_r15.configPreview.width, ctx_r15.configPreview == null ? null : ctx_r15.configPreview.maxHeight))("title", ctx_r15.getTitle(preview_r2))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r15.getAriaLabel(preview_r2));
} }
function CarouselPreviewsComponent_nav_0_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselPreviewsComponent_nav_0_ng_container_4_ng_template_2_div_0_Template, 1, 23, "div", 11);
} if (rf & 2) {
    const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", preview_r2 == null ? null : preview_r2.modal == null ? null : preview_r2.modal.img);
} }
function CarouselPreviewsComponent_nav_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselPreviewsComponent_nav_0_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselPreviewsComponent_nav_0_ng_container_4_ng_template_2_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.carouselConfig == null ? null : ctx_r1.carouselConfig.legacyIE11Mode))("ngIfElse", _r5);
} }
function CarouselPreviewsComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselPreviewsComponent_nav_0_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onNavigationEvent("left", $event); })("keyup", function CarouselPreviewsComponent_nav_0_Template_a_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onNavigationEvent("left", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselPreviewsComponent_nav_0_ng_container_4_Template, 4, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselPreviewsComponent_nav_0_Template_a_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.onNavigationEvent("right", $event); })("keyup", function CarouselPreviewsComponent_nav_0_Template_a_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onNavigationEvent("right", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.carouselPreviewsContainerTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.carouselPreviewsContainerAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx_r0.configPreview.arrows && ctx_r0.start > 0 ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.carouselPreviewScrollPrevAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx_r0.configPreview.arrows && ctx_r0.start > 0 ? "left-arrow-preview-image" : "empty-arrow-preview-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.carouselPreviewScrollPrevTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.previews)("ngForTrackBy", ctx_r0.trackById);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx_r0.configPreview.arrows && ctx_r0.end < ctx_r0.images.length ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.carouselPreviewScrollNextAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx_r0.configPreview.arrows && ctx_r0.end < ctx_r0.images.length ? "right-arrow-preview-image" : "empty-arrow-preview-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.carouselPreviewScrollNextTitle);
} }
const _c8 = function (a0) { return { "font-size": a0 }; };
function UpperButtonsComponent_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpperButtonsComponent_ng_container_1_a_1_Template_a_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const btn_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onEvent(btn_r2, $event); })("keyup", function UpperButtonsComponent_ng_container_1_a_1_Template_a_keyup_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const btn_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onEvent(btn_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, btn_r2.size == null ? null : btn_r2.size.width, btn_r2.size == null ? null : btn_r2.size.height))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c8, btn_r2.fontSize))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", btn_r2.ariaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", btn_r2.className, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", btn_r2.title);
} }
function UpperButtonsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpperButtonsComponent_ng_container_1_a_1_Template, 2, 13, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.buttons)("ngForTrackBy", ctx_r0.trackById);
} }
const _c9 = function (a0) { return { "active": a0 }; };
function DotsComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DotsComponent_ng_container_1_div_1_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const index_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onDotEvent(index_r3, $event); })("keyup", function DotsComponent_ng_container_1_div_1_Template_div_keyup_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const index_r3 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onDotEvent(index_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c9, ctx_r1.isActive(index_r3)))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", (ctx_r1.accessibilityConfig == null ? null : ctx_r1.accessibilityConfig.dotAriaLabel) + " " + (index_r3 + 1));
} }
function DotsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DotsComponent_ng_container_1_div_1_Template, 1, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.images)("ngForTrackBy", ctx_r0.trackById);
} }
function PreviewsComponent_ng_container_1_ng_container_3_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewsComponent_ng_container_1_ng_container_3_img_1_Template_img_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onImageEvent(preview_r2, $event, ctx_r5.clickAction); })("keyup", function PreviewsComponent_ng_container_1_ng_container_3_img_1_Template_img_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onImageEvent(preview_r2, $event, ctx_r8.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const preview_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("inside preview-image ", ctx_r4.isActive(preview_r2) ? "active" : "", "", !ctx_r4.configPreview.clickable ? " unclickable" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", preview_r2.modal.alt ? preview_r2.modal.alt : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (preview_r2.plain == null ? null : preview_r2.plain.img) ? preview_r2.plain.img : preview_r2.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx_r4.configPreview.size ? ctx_r4.configPreview.size.width : ctx_r4.defaultPreviewSize.width, ctx_r4.configPreview.size ? ctx_r4.configPreview.size.height : ctx_r4.defaultPreviewSize.height))("title", preview_r2.modal.title ? preview_r2.modal.title : "")("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", preview_r2.modal.ariaLabel ? preview_r2.modal.ariaLabel : "");
} }
function PreviewsComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewsComponent_ng_container_1_ng_container_3_img_1_Template, 1, 13, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const preview_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", preview_r2 == null ? null : preview_r2.modal == null ? null : preview_r2.modal.img);
} }
function PreviewsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewsComponent_ng_container_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onNavigationEvent("left", $event); })("keyup", function PreviewsComponent_ng_container_1_Template_a_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onNavigationEvent("left", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreviewsComponent_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewsComponent_ng_container_1_Template_a_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onNavigationEvent("right", $event); })("keyup", function PreviewsComponent_ng_container_1_Template_a_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onNavigationEvent("right", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx_r0.configPreview.arrows && ctx_r0.start > 0 ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.previewScrollPrevAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx_r0.configPreview.arrows && ctx_r0.start > 0 ? "left-arrow-preview-image" : "empty-arrow-preview-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.previewScrollPrevTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.previews)("ngForTrackBy", ctx_r0.trackById);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx_r0.configPreview.arrows && ctx_r0.end < ctx_r0.images.length ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.previewScrollNextAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx_r0.configPreview.arrows && ctx_r0.end < ctx_r0.images.length ? "right-arrow-preview-image" : "empty-arrow-preview-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.previewScrollNextTitle);
} }
const _c10 = ".arrow-preview-image[_ngcontent-%COMP%], .empty-arrow-preview-image[_ngcontent-%COMP%], .left-arrow-preview-image[_ngcontent-%COMP%], .right-arrow-preview-image[_ngcontent-%COMP%]{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image[_ngcontent-%COMP%]{background:#000;opacity:0}.left-arrow-preview-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.left-arrow-preview-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.right-arrow-preview-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.right-arrow-preview-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}";
function LoadingSpinnerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoadingSpinnerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoadingSpinnerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoadingSpinnerComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoadingSpinnerComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoadingSpinnerComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function LoadingSpinnerComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_container_1_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const imgCol_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.showModalGalleryByImage(imgCol_r5); })("keyup", function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_container_1_img_1_Template_img_keyup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const imgCol_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.showModalGalleryByImage(imgCol_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgCol_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", (imgCol_r5.plain == null ? null : imgCol_r5.plain.alt) ? imgCol_r5.plain.alt : ctx_r10.getAltPlainDescriptionByImage(imgCol_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (imgCol_r5.plain == null ? null : imgCol_r5.plain.img) ? imgCol_r5.plain.img : imgCol_r5.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r10.size == null ? null : ctx_r10.size.width, ctx_r10.size == null ? null : ctx_r10.size.height))("title", (imgCol_r5.plain == null ? null : imgCol_r5.plain.title) ? imgCol_r5.plain.title : ctx_r10.getTitleDisplay(imgCol_r5))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", imgCol_r5.plain == null ? null : imgCol_r5.plain.ariaLabel);
} }
function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_container_1_img_1_Template, 1, 9, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const imgCol_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", imgCol_r5 == null ? null : imgCol_r5.modal == null ? null : imgCol_r5.modal.img);
} }
function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_template_2_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_template_2_a_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const j_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.showModalGallery(j_r6); })("keyup", function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_template_2_a_0_Template_a_keyup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const j_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.showModalGallery(j_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imgCol_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r18.configPlainGallery.advanced == null ? null : ctx_r18.configPlainGallery.advanced.additionalBackground);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", imgCol_r5)("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r18.size == null ? null : ctx_r18.size.width, ctx_r18.size == null ? null : ctx_r18.size.height))("title", (imgCol_r5.plain == null ? null : imgCol_r5.plain.title) ? imgCol_r5.plain.title : ctx_r18.getTitleDisplay(imgCol_r5))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", imgCol_r5.plain == null ? null : imgCol_r5.plain.ariaLabel);
} }
function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_template_2_a_0_Template, 1, 10, "a", 7);
} if (rf & 2) {
    const imgCol_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", imgCol_r5 == null ? null : imgCol_r5.modal == null ? null : imgCol_r5.modal.img);
} }
function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r4.configPlainGallery.advanced == null ? null : ctx_r4.configPlainGallery.advanced.aTags))("ngIfElse", _r8);
} }
function PlainGalleryComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlainGalleryComponent_div_0_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const imgRow_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", imgRow_r2);
} }
function PlainGalleryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlainGalleryComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wrap", ctx_r0.wrapStyle)("width", ctx_r0.widthStyle)("direction", ctx_r0.directionStyle)("justify", ctx_r0.justifyStyle)("title", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.plainGalleryContentTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.plainGalleryContentAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.imageGrid);
} }
class ClickOutsideDirective {
    constructor() {
        /**
         * Output to emit an event if the clicked element class doesn't contain 'inside' or it is 'hidden'. The payload is a boolean.
         */
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Method called by Angular itself every click thanks to `\@HostListener`.
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        event.stopPropagation();
        /** @type {?} */
        const targetElement = event.target;
        if (!this.clickOutsideEnable || !targetElement) {
            return;
        }
        /** @type {?} */
        let isInside = false;
        /** @type {?} */
        let isHidden = false;
        if (typeof targetElement.className !== 'string') {
            // it happens with @fortawesome/fontawesome 5
            // for some reasons className is an object with 2 empty properties inside
            isInside = true;
        }
        else {
            // in normal scenarios, use classname, because it's a simple string
            isInside = targetElement.className && targetElement.className.startsWith('inside');
            isHidden = targetElement.className.includes('hidden');
        }
        // if inside => don't close modal gallery
        // if hidden => close modal gallery
        /*
            i i' h | close
            0 1  0 |   1 => close modal gallery
            0 1  1 |   1 => close modal gallery
            1 0  0 |   0
            1 0  1 |   1 => close modal gallery
         */
        if (!isInside || isHidden) {
            // close modal gallery
            this.clickOutside.emit(true);
        }
    }
}
ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(); };
ClickOutsideDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ClickOutsideDirective, selectors: [["", "ksClickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { clickOutsideEnable: "clickOutsideEnable" }, outputs: { clickOutside: "clickOutside" } });
ClickOutsideDirective.propDecorators = {
    clickOutsideEnable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    clickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[ksClickOutside]'
            }]
    }], function () { return []; }, { clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * Method called by Angular itself every click thanks to `\@HostListener`.
     * @param {?} event
     * @return {?}
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click', ['$event']]
        }], clickOutsideEnable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change the size of an element.
 */
class SizeDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ngOnInit() {
        this.applyStyle();
    }
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    ngOnChanges() {
        this.applyStyle();
    }
    /**
     * Private method to change both width and height of an element.
     * @private
     * @return {?}
     */
    applyStyle() {
        if (!this.sizeConfig) {
            return;
        }
        // apply [style.width]
        this.renderer.setStyle(this.el.nativeElement, 'width', this.sizeConfig.width);
        this.renderer.setStyle(this.el.nativeElement, 'height', this.sizeConfig.height);
    }
}
SizeDirective.ɵfac = function SizeDirective_Factory(t) { return new (t || SizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
SizeDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SizeDirective, selectors: [["", "ksSize", ""]], inputs: { sizeConfig: "sizeConfig" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
SizeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
SizeDirective.propDecorators = {
    sizeConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SizeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[ksSize]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { sizeConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KeyboardNavigationDirective {
    constructor() {
        this.keyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Listener to catch keyboard's events and call the right method based on the key.
     * For instance, pressing esc, this will call `closeGallery(Action.KEYBOARD)` and so on.
     * If you passed a valid `keyboardConfig` esc, right and left buttons will be customized based on your data.
     * @param {?} e KeyboardEvent caught by the listener.
     * @return {?}
     */
    onKeyDown(e) {
        if (!this.isOpen) {
            return;
        }
        this.keyPress.emit(e.keyCode);
    }
}
KeyboardNavigationDirective.ɵfac = function KeyboardNavigationDirective_Factory(t) { return new (t || KeyboardNavigationDirective)(); };
KeyboardNavigationDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: KeyboardNavigationDirective, selectors: [["", "ksKeyboardNavigation", ""]], hostBindings: function KeyboardNavigationDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function KeyboardNavigationDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { isOpen: "isOpen" }, outputs: { keyPress: "keyPress" } });
KeyboardNavigationDirective.propDecorators = {
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    keyPress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['window:keydown', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyboardNavigationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[ksKeyboardNavigation]'
            }]
    }], function () { return []; }, { keyPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * Listener to catch keyboard's events and call the right method based on the key.
     * For instance, pressing esc, this will call `closeGallery(Action.KEYBOARD)` and so on.
     * If you passed a valid `keyboardConfig` esc, right and left buttons will be customized based on your data.
     * @param {?} e KeyboardEvent caught by the listener.
     * @return {?}
     */
    onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown', ['$event']]
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change the flex-wrap css property of an element.
 */
class WrapDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ngOnInit() {
        this.applyStyle();
    }
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    ngOnChanges() {
        this.applyStyle();
    }
    /**
     * Private method to change both widht and flex-wrap css properties.
     * @private
     * @return {?}
     */
    applyStyle() {
        // TODO is this right???? If wrap os false I cannot apply width and flex-wrap
        if (!this.wrap) {
            return;
        }
        this.renderer.setStyle(this.el.nativeElement, 'width', this.width);
        this.renderer.setStyle(this.el.nativeElement, 'flex-wrap', this.wrap ? 'wrap' : 'nowrap');
    }
}
WrapDirective.ɵfac = function WrapDirective_Factory(t) { return new (t || WrapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
WrapDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WrapDirective, selectors: [["", "ksWrap", ""]], inputs: { wrap: "wrap", width: "width" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
WrapDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
WrapDirective.propDecorators = {
    wrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[ksWrap]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { wrap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change the flex-direction of an element, based on two inputs (`direction` and `justify`).
 */
class DirectionDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ngOnInit() {
        this.applyStyle();
    }
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    ngOnChanges() {
        this.applyStyle();
    }
    /**
     * Private method to change both direction and justify of an element.
     * @private
     * @return {?}
     */
    applyStyle() {
        if (!this.direction || !this.justify) {
            return;
        }
        this.renderer.setStyle(this.el.nativeElement, 'flex-direction', this.direction);
        this.renderer.setStyle(this.el.nativeElement, 'justify-content', this.justify);
    }
}
DirectionDirective.ɵfac = function DirectionDirective_Factory(t) { return new (t || DirectionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
DirectionDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DirectionDirective, selectors: [["", "ksDirection", ""]], inputs: { direction: "direction", justify: "justify" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
DirectionDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
DirectionDirective.propDecorators = {
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    justify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[ksDirection]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], justify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 The MIT License (MIT)

 Copyright (c) 2017-2018 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Class `Image` that represents an image with both `modal` and `plain` configurations.
 * Both image `id` and `modal` are mandatory, instead `plain` is optional.
 */
class Image {
    /**
     * @param {?} id
     * @param {?} modal
     * @param {?=} plain
     */
    constructor(id, modal, plain) {
        this.id = id;
        this.modal = modal;
        this.plain = plain;
    }
}
/**
 * Class `ImageEvent` that represents the event payload with the result and the triggered action.
 */
class ImageEvent {
    /**
     * @param {?} action
     * @param {?} result
     */
    constructor(action, result) {
        this.action = action;
        this.result = result;
    }
}
/**
 * Class `ImageModalEvent` that represents the event payload with the result and the triggered action.
 */
class ImageModalEvent extends ImageEvent {
    /**
     * @param {?} action
     * @param {?} result
     */
    constructor(action, result) {
        super(action, result);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to add an image to an `<a>` tag with some additional custom properties.
 */
class ATagBgImageDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ngOnInit() {
        this.applyStyle();
    }
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    ngOnChanges() {
        this.applyStyle();
    }
    /**
     * Private method to add an image as background of an `<a>` tag.
     * @private
     * @return {?}
     */
    applyStyle() {
        if (!this.image || (!this.image.plain && !this.image.modal)) {
            return;
        }
        /** @type {?} */
        const imgPath = this.image.plain && this.image.plain.img ? this.image.plain.img : this.image.modal.img;
        this.renderer.setStyle(this.el.nativeElement, 'background', `url("${imgPath}") ${this.style}`);
    }
}
ATagBgImageDirective.ɵfac = function ATagBgImageDirective_Factory(t) { return new (t || ATagBgImageDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
ATagBgImageDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ATagBgImageDirective, selectors: [["", "ksATagBgImage", ""]], inputs: { image: "image", style: "style" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
ATagBgImageDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
ATagBgImageDirective.propDecorators = {
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ATagBgImageDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[ksATagBgImage]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to customize the description.
 */
class DescriptionDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ngOnInit() {
        this.applyStyle();
    }
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    ngOnChanges() {
        this.applyStyle();
    }
    /**
     * Private method to change description's style.
     * @private
     * @return {?}
     */
    applyStyle() {
        if (!this.description) {
            return;
        }
        if (this.description.style) {
            this.renderer.setStyle(this.el.nativeElement, 'background', this.description.style.bgColor);
            this.renderer.setStyle(this.el.nativeElement, 'color', this.description.style.textColor);
            if (this.description.style.width) {
                this.renderer.setStyle(this.el.nativeElement, 'width', this.description.style.width);
            }
            if (this.description.style.height) {
                this.renderer.setStyle(this.el.nativeElement, 'height', this.description.style.height);
            }
            if (this.description.style.position) {
                this.renderer.setStyle(this.el.nativeElement, 'position', this.description.style.position);
            }
            if (this.description.style.top) {
                this.renderer.setStyle(this.el.nativeElement, 'top', this.description.style.top);
            }
            if (this.description.style.bottom) {
                this.renderer.setStyle(this.el.nativeElement, 'bottom', this.description.style.bottom);
            }
            if (this.description.style.left) {
                this.renderer.setStyle(this.el.nativeElement, 'left', this.description.style.left);
            }
            if (this.description.style.right) {
                this.renderer.setStyle(this.el.nativeElement, 'right', this.description.style.right);
            }
            this.renderer.setStyle(this.el.nativeElement, 'margin-top', this.description.style.marginTop ? this.description.style.marginTop : '0px');
            this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', this.description.style.marginBottom ? this.description.style.marginBottom : '0px');
            this.renderer.setStyle(this.el.nativeElement, 'margin-left', this.description.style.marginLeft ? this.description.style.marginLeft : '0px');
            this.renderer.setStyle(this.el.nativeElement, 'margin-right', this.description.style.marginRight ? this.description.style.marginRight : '0px');
        }
    }
}
DescriptionDirective.ɵfac = function DescriptionDirective_Factory(t) { return new (t || DescriptionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
DescriptionDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DescriptionDirective, selectors: [["", "ksDescription", ""]], inputs: { description: "description" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
DescriptionDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
DescriptionDirective.propDecorators = {
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescriptionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[ksDescription]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change margins of an element.
 */
class MarginDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ngOnInit() {
        this.applyStyle();
    }
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    ngOnChanges() {
        this.applyStyle();
    }
    /**
     * Private method to change both width and height of an element.
     * @private
     * @return {?}
     */
    applyStyle() {
        if (this.marginLeft) {
            this.renderer.setStyle(this.el.nativeElement, 'margin-left', this.marginLeft);
        }
        if (this.marginRight) {
            this.renderer.setStyle(this.el.nativeElement, 'margin-right', this.marginRight);
        }
        if (this.marginTop) {
            this.renderer.setStyle(this.el.nativeElement, 'margin-top', this.marginTop);
        }
        if (this.marginBottom) {
            this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', this.marginBottom);
        }
    }
}
MarginDirective.ɵfac = function MarginDirective_Factory(t) { return new (t || MarginDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
MarginDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MarginDirective, selectors: [["", "ksMargin", ""]], inputs: { marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", marginBottom: "marginBottom" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
MarginDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
MarginDirective.propDecorators = {
    marginLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    marginRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    marginTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    marginBottom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarginDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[ksMargin]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { marginLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], marginRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], marginTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], marginBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change the max size of an element.
 */
class MaxSizeDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ngOnInit() {
        this.applyStyle();
    }
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    ngOnChanges() {
        this.applyStyle();
    }
    /**
     * Private method to change both max-width and max-height of an element.
     * @private
     * @return {?}
     */
    applyStyle() {
        if (!this.sizeConfig) {
            return;
        }
        if (this.sizeConfig.maxWidth) {
            this.renderer.setStyle(this.el.nativeElement, 'max-width', this.sizeConfig.maxWidth);
        }
        if (this.sizeConfig.maxHeight) {
            this.renderer.setStyle(this.el.nativeElement, 'max-height', this.sizeConfig.maxHeight);
        }
    }
}
MaxSizeDirective.ɵfac = function MaxSizeDirective_Factory(t) { return new (t || MaxSizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
MaxSizeDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MaxSizeDirective, selectors: [["", "ksMaxSize", ""]], inputs: { sizeConfig: "sizeConfig" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
MaxSizeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
MaxSizeDirective.propDecorators = {
    sizeConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaxSizeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[ksMaxSize]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { sizeConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Array of all directives.
 * @type {?}
 */
const DIRECTIVES = [
    ClickOutsideDirective,
    SizeDirective,
    KeyboardNavigationDirective,
    WrapDirective,
    DirectionDirective,
    ATagBgImageDirective,
    DescriptionDirective,
    MarginDirective,
    MaxSizeDirective
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with the semi-transparent background.
 */
class BackgroundComponent {
}
BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) { return new (t || BackgroundComponent)(); };
BackgroundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackgroundComponent, selectors: [["ks-background"]], inputs: { isOpen: "isOpen", accessibilityConfig: "accessibilityConfig" }, decls: 1, vars: 1, consts: [["class", "ng-overlay", 3, "title", 4, "ngIf"], [1, "ng-overlay", 3, "title"]], template: function BackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BackgroundComponent_div_0_Template, 1, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".ng-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#000;opacity:.8;z-index:9999}"], changeDetection: 0 });
BackgroundComponent.propDecorators = {
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ks-background',
                template: "<div class=\"ng-overlay\" *ngIf=\"isOpen\"\n     [attr.aria-label]=\"accessibilityConfig?.backgroundAriaLabel\"\n     [title]=\"accessibilityConfig?.backgroundTitle\"></div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".ng-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#000;opacity:.8;z-index:9999}"]
            }]
    }], null, { isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 The MIT License (MIT)

 Copyright (c) 2017-2018 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/** @enum {number} */
const Action = {
    NORMAL: 0,
    CLICK: 1,
    KEYBOARD: 2,
    SWIPE: 3,
    LOAD: 4,
    AUTOPLAY: 5,
};
Action[Action.NORMAL] = 'NORMAL';
Action[Action.CLICK] = 'CLICK';
Action[Action.KEYBOARD] = 'KEYBOARD';
Action[Action.SWIPE] = 'SWIPE';
Action[Action.LOAD] = 'LOAD';
Action[Action.AUTOPLAY] = 'AUTOPLAY';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const KEYBOARD_CONFIGURATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('KEYBOARD_CONFIGURATION');
/**
 * Service to intercept ctrl+s (or cmd+s on macOS) using a third-party library, called Mousetrap.
 */
class KeyboardService {
    /**
     * Constructor of `KeyboardService` to init `mousetrap` and `shortcuts` private variables.
     * @param {?} config
     */
    constructor(config) {
        // this.config is always defined, because forced by forRoot inside the module
        // when empty, it's simply an empty object: {}
        this.config = config;
        this.shortcuts = this.config && this.config.shortcuts ? this.config.shortcuts : ['ctrl+s', 'meta+s'];
        // temporary workaround to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/142
        if (this.config && !this.config.disableSsrWorkaround) {
            // To prevent issues with angular-universal on server-side
            if (typeof window !== 'undefined') {
                __webpack_require__(/*! mousetrap */ 47531);
                this.mousetrap = new ((/** @type {?} */ (Mousetrap)))();
            }
        }
    }
    /**
     * Method to add a lister for ctrl+s/cmd+s keyboard events.
     * @param {?} onBind
     * @return {?}
     */
    add(onBind) {
        // temporary workaround to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/142
        if (this.config && !this.config.disableSsrWorkaround) {
            // To prevent issues with angular-universal on server-side
            if (typeof window !== 'undefined') {
                this.mousetrap.bind(this.shortcuts, (/**
                 * @param {?} event
                 * @param {?} combo
                 * @return {?}
                 */
                (event, combo) => {
                    if (event.preventDefault) {
                        event.preventDefault();
                    }
                    else {
                        // internet explorer
                        event.returnValue = false;
                    }
                    onBind(event, combo);
                }));
            }
        }
    }
    /**
     * Method to reset all listeners. Please, call this function when needed
     * to free resources ad prevent leaks.
     * @return {?}
     */
    reset() {
        // temporary workaround to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/142
        if (this.config && !this.config.disableSsrWorkaround) {
            // To prevent issues with angular-universal on server-side
            if (typeof window !== 'undefined') {
                this.mousetrap.reset();
            }
        }
    }
}
KeyboardService.ɵfac = function KeyboardService_Factory(t) { return new (t || KeyboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](KEYBOARD_CONFIGURATION)); };
KeyboardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KeyboardService, factory: KeyboardService.ɵfac });
/** @nocollapse */
KeyboardService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [KEYBOARD_CONFIGURATION,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [KEYBOARD_CONFIGURATION]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Service to call methods on a gallery by its galleryId.
 */
class GalleryService {
    constructor() {
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.autoPlay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Method to open the modal gallery with the galleryId passed as parameter.
     * It will automatically shows the image at position index.
     * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @param {?} index number of the image that you want to open.
     * @return {?}
     */
    openGallery(galleryId, index) {
        if (galleryId === undefined || galleryId < 0 || index < 0) {
            throw new Error('Cannot open gallery via GalleryService with either index<0 or galleryId<0 or galleryId===undefined');
        }
        this.navigate.emit({
            galleryId: galleryId,
            index: index
        });
    }
    /**
     * Method to navigate to a specific index of the modal gallery with the galleryId passed as parameter.
     * At the moment, it's like openGallery, but in upcoming releases it will change the behaviour.
     * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @param {?} index number of the image that you want to open.
     * @return {?}
     */
    navigateGallery(galleryId, index) {
        if (galleryId === undefined || galleryId < 0 || index < 0) {
            throw new Error('Cannot navigate via GalleryService with either index<0 or galleryId<0 or galleryId===undefined');
        }
        this.navigate.emit({
            galleryId: galleryId,
            index: index
        });
    }
    /**
     * Method to close the modal gallery with the galleryId passed as parameter.
     * @throws a error with a message if galleryId is either undefined or < 0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?}
     */
    closeGallery(galleryId) {
        if (galleryId === undefined || galleryId < 0) {
            throw new Error('Cannot close gallery via GalleryService with galleryId<0 or galleryId===undefined');
        }
        this.close.emit(galleryId);
    }
    /**
     * Service to update an image with a new object
     * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
     *
     * \@since 6.3.0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @param {?} index number of the image that you want to update.
     * @param {?} image
     * @return {?}
     */
    updateGallery(galleryId, index, image) {
        if (galleryId === undefined || galleryId < 0 || index < 0) {
            throw new Error('Cannot update gallery via GalleryService with either index<0 or galleryId<0 or galleryId===undefined');
        }
        if (!image) {
            throw new Error('Cannot update gallery via GalleryService, because image is not valid');
        }
        this.update.emit({
            galleryId: galleryId,
            index: index,
            image: image
        });
    }
    /**
     * Service to play modal-gallery
     * @throws a error with a message if galleryId is either undefined or < 0
     *
     * \@since 7.2.0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?}
     */
    play(galleryId) {
        if (galleryId === undefined || galleryId < 0) {
            throw new Error('Cannot play gallery via GalleryService with galleryId<0 or galleryId===undefined');
        }
        this.autoPlay.emit({
            galleryId: galleryId,
            result: true
        });
    }
    /**
     * Service to stop modal-gallery
     * @throws a error with a message if galleryId is either undefined or < 0
     *
     * \@since 7.2.0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?}
     */
    stop(galleryId) {
        if (galleryId === undefined || galleryId < 0) {
            throw new Error('Cannot stop gallery via GalleryService with galleryId<0 or galleryId===undefined');
        }
        this.autoPlay.emit({
            galleryId: galleryId,
            result: false
        });
    }
}
GalleryService.ɵfac = function GalleryService_Factory(t) { return new (t || GalleryService)(); };
GalleryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GalleryService, factory: GalleryService.ɵfac, providedIn: 'root' });
/** @nocollapse */ GalleryService.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.defineInjectable)({ factory: function GalleryService_Factory() { return new GalleryService(); }, token: GalleryService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Code of the keyboard's key `enter`
 * @type {?}
 */
const ENTER_CODE = 'Enter';
/**
 * Code of the keyboard's key `space`
 * @type {?}
 */
const SPACE_CODE = 'Space';
/**
 * KeyCode of the main mouse button
 * @type {?}
 */
const MOUSE_MAIN_BUTTON_CLICK = 0;
/**
 * Const NEXT
 * @type {?}
 */
const NEXT = 1;
/**
 * Const PREV
 * @type {?}
 */
const PREV = -1;
/**
 * Const NOTHING to represents a situation when it isn't both NEXT and PREV
 * @type {?}
 */
const NOTHING = 0;
/**
 * Const to represent the right direction
 * @type {?}
 */
const DIRECTION_RIGHT = 'right';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides some useful methods to add accessibility features to subclasses.
 * In particular, it exposes a method to handle navigation event with both Keyboard and Mouse
 * and another with also the direction (right or left).
 */
class AccessibleComponent {
    constructor() { }
    /**
     * Method to handle navigation events with both Keyboard and Mouse.
     * @param {?} direction
     * @param {?} event
     * @return {?} number -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    handleNavigationEvent(direction, event) {
        if (!event) {
            return NOTHING;
        }
        if (event instanceof KeyboardEvent) {
            return this.handleKeyboardNavigationEvent(direction, event);
        }
        else if (event instanceof MouseEvent) {
            return this.handleMouseNavigationEvent(direction, event);
        }
        return NOTHING;
    }
    /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @param {?} event
     * @return {?} number 1 for NEXT and 0 for NOTHING
     */
    handleImageEvent(event) {
        if (!event) {
            return NOTHING;
        }
        if (event instanceof KeyboardEvent) {
            return this.handleImageKeyboardEvent(event);
        }
        else if (event instanceof MouseEvent) {
            return this.handleImageMouseEvent(event);
        }
        return NOTHING;
    }
    /**
     * Private method to handle keyboard events over an image.
     * @private
     * @param {?} event
     * @return {?} number 1 for NEXT and 0 for NOTHING
     */
    handleImageKeyboardEvent(event) {
        /** @type {?} */
        const key = event.code;
        if (key === SPACE_CODE || key === ENTER_CODE) {
            return NEXT;
        }
        return NOTHING;
    }
    /**
     * Private method to handle mouse events over an image.
     * @private
     * @param {?} event
     * @return {?} number 1 for NEXT and 0 for NOTHING
     */
    handleImageMouseEvent(event) {
        /** @type {?} */
        const mouseBtn = event.button;
        if (mouseBtn === MOUSE_MAIN_BUTTON_CLICK) {
            return NEXT;
        }
        return NOTHING;
    }
    /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @private
     * @param {?} direction
     * @param {?} event
     * @return {?} number -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    handleKeyboardNavigationEvent(direction, event) {
        /** @type {?} */
        const key = event.code;
        if (key === SPACE_CODE || key === ENTER_CODE) {
            return direction === DIRECTION_RIGHT ? NEXT : PREV;
        }
        return NOTHING;
    }
    /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @private
     * @param {?} direction
     * @param {?} event
     * @return {?} number -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    handleMouseNavigationEvent(direction, event) {
        /** @type {?} */
        const mouseBtn = event.button;
        if (mouseBtn === MOUSE_MAIN_BUTTON_CLICK) {
            return direction === DIRECTION_RIGHT ? NEXT : PREV;
        }
        return NOTHING;
    }
}
AccessibleComponent.ɵfac = function AccessibleComponent_Factory(t) { return new (t || AccessibleComponent)(); };
AccessibleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessibleComponent, selectors: [["ks-accessible"]], decls: 0, vars: 0, template: function AccessibleComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
AccessibleComponent.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessibleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ks-accessible',
                template: ``,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const DescriptionStrategy = {
    ALWAYS_HIDDEN: 1,
    ALWAYS_VISIBLE: 2,
    HIDE_IF_EMPTY: 3,
};
DescriptionStrategy[DescriptionStrategy.ALWAYS_HIDDEN] = 'ALWAYS_HIDDEN';
DescriptionStrategy[DescriptionStrategy.ALWAYS_VISIBLE] = 'ALWAYS_VISIBLE';
DescriptionStrategy[DescriptionStrategy.HIDE_IF_EMPTY] = 'HIDE_IF_EMPTY';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 The MIT License (MIT)

 Copyright (c) 2017-2018 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/** @enum {number} */
const Keyboard = {
    ESC: 27,
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
    UP_ARROW: 38,
    DOWN_ARROW: 40,
};
Keyboard[Keyboard.ESC] = 'ESC';
Keyboard[Keyboard.LEFT_ARROW] = 'LEFT_ARROW';
Keyboard[Keyboard.RIGHT_ARROW] = 'RIGHT_ARROW';
Keyboard[Keyboard.UP_ARROW] = 'UP_ARROW';
Keyboard[Keyboard.DOWN_ARROW] = 'DOWN_ARROW';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const LoadingType = {
    STANDARD: 1,
    CIRCULAR: 2,
    BARS: 3,
    DOTS: 4,
    CUBE_FLIPPING: 5,
    CIRCLES: 6,
    EXPLOSING_SQUARES: 7,
};
LoadingType[LoadingType.STANDARD] = 'STANDARD';
LoadingType[LoadingType.CIRCULAR] = 'CIRCULAR';
LoadingType[LoadingType.BARS] = 'BARS';
LoadingType[LoadingType.DOTS] = 'DOTS';
LoadingType[LoadingType.CUBE_FLIPPING] = 'CUBE_FLIPPING';
LoadingType[LoadingType.CIRCLES] = 'CIRCLES';
LoadingType[LoadingType.EXPLOSING_SQUARES] = 'EXPLOSING_SQUARES';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 The MIT License (MIT)

 Copyright (c) 2017-2018 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Utility function to get the index of the input `image` from `arrayOfImages`
 * @throws an Error if either image or arrayOfImages are not valid,
 *  or if the input image doesn't contain an 'id', or the 'id' is < 0
 * @param {?} image
 * @param {?} arrayOfImages
 * @return {?} number the index of the image. -1 if not found.
 */
function getIndex(image, arrayOfImages) {
    if (!image) {
        throw new Error('image must be a valid Image object');
    }
    if (!arrayOfImages) {
        throw new Error('arrayOfImages must be a valid Image[]');
    }
    if (!image.id && image.id !== 0) {
        // id = 0 is admitted
        throw new Error(`A numeric Image 'id' is mandatory`);
    }
    if (image.id < 0) {
        throw new Error(`Image 'id' must be >= 0`);
    }
    return arrayOfImages.findIndex((/**
     * @param {?} val
     * @return {?}
     */
    (val) => val.id === image.id));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with the current image with some additional elements like arrows and side previews.
 */
class CurrentImageComponent extends AccessibleComponent {
    /**
     * @param {?} _platformId
     * @param {?} _ngZone
     * @param {?} ref
     */
    constructor(_platformId, _ngZone, ref) {
        super();
        this._platformId = _platformId;
        this._ngZone = _ngZone;
        this.ref = ref;
        /**
         * Output to emit an event when images are loaded. The payload contains an `ImageLoadEvent`.
         */
        this.loadImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit any changes of the current image. The payload contains an `ImageModalEvent`.
         */
        this.changeImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit an event when the modal gallery is closed. The payload contains an `ImageModalEvent`.
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Subject to play modal-gallery.
         */
        this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /**
         * Subject to stop modal-gallery.
         */
        this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /**
         * Enum of type `Action` that represents a normal action.
         * Declared here to be used inside the template.
         */
        this.normalAction = Action.NORMAL;
        /**
         * Enum of type `Action` that represents a mouse click on a button.
         * Declared here to be used inside the template.
         */
        this.clickAction = Action.CLICK;
        /**
         * Enum of type `Action` that represents a keyboard action.
         * Declared here to be used inside the template.
         */
        this.keyboardAction = Action.KEYBOARD;
        /**
         * Boolean that it's true when you are watching the first image (currently visible).
         * False by default
         */
        this.isFirstImage = false;
        /**
         * Boolean that it's true when you are watching the last image (currently visible).
         * False by default
         */
        this.isLastImage = false;
        /**
         * Boolean that it's true if an image of the modal gallery is still loading.
         * True by default
         */
        this.loading = true;
        /**
         * Private object without type to define all swipe actions used by hammerjs.
         */
        this.SWIPE_ACTION = {
            LEFT: 'swipeleft',
            RIGHT: 'swiperight',
            UP: 'swipeup',
            DOWN: 'swipedown'
        };
    }
    /**
     * Listener to stop the gallery when the mouse pointer is over the current image.
     * @return {?}
     */
    onMouseEnter() {
        // if carousel feature is disable, don't do anything in any case
        if (!this.configSlide || !this.configSlide.playConfig) {
            return;
        }
        if (!this.configSlide.playConfig.pauseOnHover) {
            return;
        }
        this.stopCarousel();
    }
    /**
     * Listener to play the gallery when the mouse pointer leave the current image.
     * @return {?}
     */
    onMouseLeave() {
        // if carousel feature is disable, don't do anything in any case
        if (!this.configSlide || !this.configSlide.playConfig) {
            return;
        }
        if (!this.configSlide.playConfig.pauseOnHover || !this.configSlide.playConfig.autoPlay) {
            return;
        }
        this.playCarousel();
    }
    /**
     * Method ´ngOnInit´ to build `configCurrentImage` applying default values.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const defaultLoading = { enable: true, type: LoadingType.STANDARD };
        /** @type {?} */
        const defaultDescriptionStyle = {
            bgColor: 'rgba(0, 0, 0, .5)',
            textColor: 'white',
            marginTop: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
            marginRight: '0px'
        };
        /** @type {?} */
        const defaultDescription = {
            strategy: DescriptionStrategy.ALWAYS_VISIBLE,
            imageText: 'Image ',
            numberSeparator: '/',
            beforeTextDescription: ' - ',
            style: defaultDescriptionStyle
        };
        /** @type {?} */
        const defaultCurrentImageConfig = {
            navigateOnClick: true,
            loadingConfig: defaultLoading,
            description: defaultDescription,
            downloadable: false,
            invertSwipe: false
        };
        this.configCurrentImage = Object.assign({}, defaultCurrentImageConfig, this.currentImageConfig);
        this.configCurrentImage.description = Object.assign({}, defaultDescription, this.configCurrentImage.description);
        this.configSlide = Object.assign({}, this.slideConfig);
    }
    /**
     * Method ´ngOnChanges´ to update `loading` status and emit events.
     * If the gallery is open, then it will also manage boundary arrows and sliding.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const images = changes.images;
        /** @type {?} */
        const currentImage = changes.currentImage;
        if (currentImage && currentImage.previousValue !== currentImage.currentValue) {
            this.updateIndexes();
        }
        else if (images && images.previousValue !== images.currentValue) {
            this.updateIndexes();
        }
        /** @type {?} */
        const slideConfig = changes.slideConfig;
        if (slideConfig && slideConfig.previousValue !== slideConfig.currentValue) {
            this.configSlide = Object.assign({}, this.slideConfig);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // interval doesn't play well with SSR and protractor,
        // so we should run it in the browser and outside Angular
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this._platformId)) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.start$
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((/**
                 * @return {?}
                 */
                () => this.configSlide && this.configSlide.playConfig && this.configSlide.playConfig.autoPlay && this.configSlide.playConfig.interval)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((/**
                 * @param {?} interval
                 * @return {?}
                 */
                interval => interval > 0)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((/**
                 * @param {?} interval
                 * @return {?}
                 */
                interval => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(interval).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.stop$)))))
                    .subscribe((/**
                 * @return {?}
                 */
                () => this._ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    if (!this.isLastImage) {
                        this.nextImage(Action.AUTOPLAY);
                    }
                    this.ref.markForCheck();
                }))));
                this.start$.next();
            }));
        }
    }
    /**
     * Method to handle keypress based on the `keyboardConfig` input. It gets the keyCode of
     * the key that triggered the keypress event to navigate between images or to close the modal gallery.
     * @param {?} keyCode
     * @return {?}
     */
    onKeyPress(keyCode) {
        /** @type {?} */
        const esc = this.keyboardConfig && this.keyboardConfig.esc ? this.keyboardConfig.esc : Keyboard.ESC;
        /** @type {?} */
        const right = this.keyboardConfig && this.keyboardConfig.right ? this.keyboardConfig.right : Keyboard.RIGHT_ARROW;
        /** @type {?} */
        const left = this.keyboardConfig && this.keyboardConfig.left ? this.keyboardConfig.left : Keyboard.LEFT_ARROW;
        switch (keyCode) {
            case esc:
                this.close.emit(new ImageModalEvent(Action.KEYBOARD, true));
                break;
            case right:
                this.nextImage(Action.KEYBOARD);
                break;
            case left:
                this.prevImage(Action.KEYBOARD);
                break;
        }
    }
    /**
     * Method to get the image description based on input params.
     * If you provide a full description this will be the visible description, otherwise,
     * it will be built using the `Description` object, concatenating its fields.
     * @throws an Error if description isn't available
     * @param {?=} image
     * @return {?} String description of the image (or the current image if not provided)
     */
    getDescriptionToDisplay(image = this.currentImage) {
        if (!this.configCurrentImage || !this.configCurrentImage.description) {
            throw new Error('Description input must be a valid object implementing the Description interface');
        }
        /** @type {?} */
        const imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === '';
        switch (this.configCurrentImage.description.strategy) {
            case DescriptionStrategy.HIDE_IF_EMPTY:
                return imageWithoutDescription ? '' : image.modal.description + '';
            case DescriptionStrategy.ALWAYS_HIDDEN:
                return '';
            default:
                // ----------- DescriptionStrategy.ALWAYS_VISIBLE -----------------
                return this.buildTextDescription(image, imageWithoutDescription);
        }
    }
    /**
     * Method to get `alt attribute`.
     * `alt` specifies an alternate text for an image, if the image cannot be displayed.
     * @param {?=} image
     * @return {?} String alt description of the image (or the current image if not provided)
     */
    getAltDescriptionByImage(image = this.currentImage) {
        if (!image) {
            return '';
        }
        return image.modal && image.modal.description ? image.modal.description : `Image ${getIndex(image, this.images) + 1}`;
    }
    /**
     * Method to get the title attributes based on descriptions.
     * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
     * it prevents an empty string as title.
     * @throws an Error if description isn't available
     * @param {?=} image
     * @return {?} String title of the image based on descriptions
     */
    getTitleToDisplay(image = this.currentImage) {
        if (!this.configCurrentImage || !this.configCurrentImage.description) {
            throw new Error('Description input must be a valid object implementing the Description interface');
        }
        /** @type {?} */
        const imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === '';
        /** @type {?} */
        const description = this.buildTextDescription(image, imageWithoutDescription);
        return description;
    }
    /**
     * Method to get the left side preview image.
     * @return {?} Image the image to show as size preview on the left
     */
    getLeftPreviewImage() {
        /** @type {?} */
        const currentIndex = getIndex(this.currentImage, this.images);
        if (currentIndex === 0 && this.configSlide.infinite) {
            // the current image is the first one,
            // so the previous one is the last image
            // because infinite is true
            return this.images[this.images.length - 1];
        }
        this.handleBoundaries(currentIndex);
        return this.images[Math.max(currentIndex - 1, 0)];
    }
    /**
     * Method to get the right side preview image.
     * @return {?} Image the image to show as size preview on the right
     */
    getRightPreviewImage() {
        /** @type {?} */
        const currentIndex = getIndex(this.currentImage, this.images);
        if (currentIndex === this.images.length - 1 && this.configSlide.infinite) {
            // the current image is the last one,
            // so the next one is the first image
            // because infinite is true
            return this.images[0];
        }
        this.handleBoundaries(currentIndex);
        return this.images[Math.min(currentIndex + 1, this.images.length - 1)];
    }
    /**
     * Method called by events from both keyboard and mouse on an image.
     * This will invoke the nextImage method.
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    onImageEvent(event, action = Action.NORMAL) {
        // check if triggered by a mouse click
        // If yes, It should block navigation when navigateOnClick is false
        if (action === Action.CLICK && !this.configCurrentImage.navigateOnClick) {
            // a user has requested to block navigation via configCurrentImage.navigateOnClick property
            return;
        }
        /** @type {?} */
        const result = super.handleImageEvent(event);
        if (result === NEXT) {
            this.nextImage(action);
        }
    }
    /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * @param {?} direction
     * @param {?} event
     * @param {?=} action
     * @param {?=} disable
     * @return {?}
     */
    onNavigationEvent(direction, event, action = Action.NORMAL, disable = false) {
        if (disable) {
            return;
        }
        /** @type {?} */
        const result = super.handleNavigationEvent(direction, event);
        if (result === NEXT) {
            this.nextImage(action);
        }
        else if (result === PREV) {
            this.prevImage(action);
        }
    }
    /**
     * Method to go back to the previous image.
     * @param {?=} action Enum of type `Action` that represents the source
     *  action that moved back to the previous image. `Action.NORMAL` by default.
     * @return {?}
     */
    prevImage(action = Action.NORMAL) {
        // check if prevImage should be blocked
        if (this.isPreventSliding(0)) {
            return;
        }
        /** @type {?} */
        const prevImage = this.getPrevImage();
        this.loading = !prevImage.previouslyLoaded;
        this.changeImage.emit(new ImageModalEvent(action, getIndex(prevImage, this.images)));
        this.start$.next();
    }
    /**
     * Method to go back to the previous image.
     * @param {?=} action Enum of type `Action` that represents the source
     *  action that moved to the next image. `Action.NORMAL` by default.
     * @return {?}
     */
    nextImage(action = Action.NORMAL) {
        // check if nextImage should be blocked
        if (this.isPreventSliding(this.images.length - 1)) {
            return;
        }
        /** @type {?} */
        const nextImage = this.getNextImage();
        this.loading = !nextImage.previouslyLoaded;
        this.changeImage.emit(new ImageModalEvent(action, getIndex(nextImage, this.images)));
        this.start$.next();
    }
    /**
     * Method to emit an event as loadImage output to say that the requested image if loaded.
     * This method is invoked by the javascript's 'load' event on an img tag.
     * @param {?} event
     * @return {?}
     */
    onImageLoad(event) {
        /** @type {?} */
        const loadImageData = {
            status: true,
            index: getIndex(this.currentImage, this.images),
            id: this.currentImage.id
        };
        this.loadImage.emit(loadImageData);
        this.loading = false;
    }
    /**
     * Method used by Hammerjs to support touch gestures (you can also invert the swipe direction with configCurrentImage.invertSwipe).
     * @param {?=} action String that represent the direction of the swipe action. 'swiperight' by default.
     * @return {?}
     */
    swipe(action = this.SWIPE_ACTION.RIGHT) {
        switch (action) {
            case this.SWIPE_ACTION.RIGHT:
                if (this.configCurrentImage.invertSwipe) {
                    this.prevImage(Action.SWIPE);
                }
                else {
                    this.nextImage(Action.SWIPE);
                }
                break;
            case this.SWIPE_ACTION.LEFT:
                if (this.configCurrentImage.invertSwipe) {
                    this.nextImage(Action.SWIPE);
                }
                else {
                    this.prevImage(Action.SWIPE);
                }
                break;
            // case this.SWIPE_ACTION.UP:
            //   break;
            // case this.SWIPE_ACTION.DOWN:
            //   break;
        }
    }
    /**
     * Method used in `modal-gallery.component` to get the index of an image to delete.
     * @param {?=} image
     * @return {?} number the index of the image
     */
    getIndexToDelete(image = this.currentImage) {
        return getIndex(image, this.images);
    }
    /**
     * Method to play modal gallery.
     * @return {?}
     */
    playCarousel() {
        this.start$.next();
    }
    /**
     * Stops modal gallery from cycling through items.
     * @return {?}
     */
    stopCarousel() {
        this.stop$.next();
    }
    /**
     * Method to cleanup resources. In fact, this will stop the modal gallery.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this.stopCarousel();
    }
    /**
     * Private method to update both `isFirstImage` and `isLastImage` based on
     * the index of the current image.
     * @private
     * @param {?} currentIndex
     * @return {?}
     */
    handleBoundaries(currentIndex) {
        if (this.images.length === 1) {
            this.isFirstImage = true;
            this.isLastImage = true;
            return;
        }
        if (!this.configSlide || this.configSlide.infinite === true) {
            // infinite sliding enabled
            this.isFirstImage = false;
            this.isLastImage = false;
        }
        else {
            switch (currentIndex) {
                case 0:
                    // execute this only if infinite sliding is disabled
                    this.isFirstImage = true;
                    this.isLastImage = false;
                    break;
                case this.images.length - 1:
                    // execute this only if infinite sliding is disabled
                    this.isFirstImage = false;
                    this.isLastImage = true;
                    break;
                default:
                    this.isFirstImage = false;
                    this.isLastImage = false;
                    break;
            }
        }
    }
    /**
     * Private method to check if next/prev actions should be blocked.
     * It checks if configSlide.infinite === false and if the image index is equals to the input parameter.
     * If yes, it returns true to say that sliding should be blocked, otherwise not.
     * @private
     * @param {?} boundaryIndex
     * @return {?} boolean true if configSlide.infinite === false and the current index is
     *  either the first or the last one.
     */
    isPreventSliding(boundaryIndex) {
        return !!this.configSlide && this.configSlide.infinite === false && getIndex(this.currentImage, this.images) === boundaryIndex;
    }
    /**
     * Private method to get the next index.
     * This is necessary because at the end, when you call next again, you'll go to the first image.
     * That happens because all modal images are shown like in a circle.
     * @private
     * @return {?}
     */
    getNextImage() {
        /** @type {?} */
        const currentIndex = getIndex(this.currentImage, this.images);
        /** @type {?} */
        let newIndex = 0;
        if (currentIndex >= 0 && currentIndex < this.images.length - 1) {
            newIndex = currentIndex + 1;
        }
        else {
            newIndex = 0; // start from the first index
        }
        return this.images[newIndex];
    }
    /**
     * Private method to get the previous index.
     * This is necessary because at index 0, when you call prev again, you'll go to the last image.
     * That happens because all modal images are shown like in a circle.
     * @private
     * @return {?}
     */
    getPrevImage() {
        /** @type {?} */
        const currentIndex = getIndex(this.currentImage, this.images);
        /** @type {?} */
        let newIndex = 0;
        if (currentIndex > 0 && currentIndex <= this.images.length - 1) {
            newIndex = currentIndex - 1;
        }
        else {
            newIndex = this.images.length - 1; // start from the last index
        }
        return this.images[newIndex];
    }
    /**
     * Private method to build a text description.
     * This is used also to create titles.
     * @private
     * @param {?} image
     * @param {?} imageWithoutDescription
     * @return {?} String description built concatenating image fields with a specific logic.
     */
    buildTextDescription(image, imageWithoutDescription) {
        if (!this.configCurrentImage || !this.configCurrentImage.description) {
            throw new Error('Description input must be a valid object implementing the Description interface');
        }
        // If customFullDescription use it, otherwise proceed to build a description
        if (this.configCurrentImage.description.customFullDescription && this.configCurrentImage.description.customFullDescription !== '') {
            return this.configCurrentImage.description.customFullDescription;
        }
        /** @type {?} */
        const currentIndex = getIndex(image, this.images);
        // If the current image hasn't a description,
        // prevent to write the ' - ' (or this.description.beforeTextDescription)
        /** @type {?} */
        const prevDescription = this.configCurrentImage.description.imageText ? this.configCurrentImage.description.imageText : '';
        /** @type {?} */
        const midSeparator = this.configCurrentImage.description.numberSeparator ? this.configCurrentImage.description.numberSeparator : '';
        /** @type {?} */
        const middleDescription = currentIndex + 1 + midSeparator + this.images.length;
        if (imageWithoutDescription) {
            return prevDescription + middleDescription;
        }
        /** @type {?} */
        const currImgDescription = image.modal && image.modal.description ? image.modal.description : '';
        /** @type {?} */
        const endDescription = this.configCurrentImage.description.beforeTextDescription + currImgDescription;
        return prevDescription + middleDescription + endDescription;
    }
    /**
     * Private method to call handleBoundaries when ngOnChanges is called.
     * @private
     * @return {?}
     */
    updateIndexes() {
        /** @type {?} */
        let index;
        try {
            index = getIndex(this.currentImage, this.images);
        }
        catch (err) {
            console.error('Cannot get the current image index in current-image');
            throw err;
        }
        if (this.isOpen) {
            this.handleBoundaries(index);
        }
    }
}
CurrentImageComponent.ɵfac = function CurrentImageComponent_Factory(t) { return new (t || CurrentImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
CurrentImageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentImageComponent, selectors: [["ks-current-image"]], hostBindings: function CurrentImageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CurrentImageComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function CurrentImageComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { id: "id", currentImage: "currentImage", images: "images", isOpen: "isOpen", currentImageConfig: "currentImageConfig", slideConfig: "slideConfig", accessibilityConfig: "accessibilityConfig", keyboardConfig: "keyboardConfig" }, outputs: { loadImage: "loadImage", changeImage: "changeImage", close: "close" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 33, consts: [["ksKeyboardNavigation", "", 1, "main-image-container", 3, "isOpen", "title", "keyPress"], [1, "left-sub-container"], ["role", "button", 3, "tabindex", "click", "keyup"], ["aria-hidden", "true", 3, "title"], [4, "ngIf"], ["id", "current-figure"], ["id", "current-image", "role", "img", 1, "inside", 3, "ngClass", "src", "title", "alt", "tabindex", "load", "click", "keyup", "swipeleft", "swiperight"], ["class", "inside description", "ksDescription", "", 3, "description", "innerHTML", 4, "ngIf"], [1, "right-sub-container"], ["class", "inside current-image-previous", "ksSize", "", "role", "img", 3, "src", "hidden", "sizeConfig", "title", "alt", "tabindex", "click", "keyup", 4, "ngIf", "ngIfElse"], ["firstImage", ""], ["ksSize", "", "role", "img", 1, "inside", "current-image-previous", 3, "src", "hidden", "sizeConfig", "title", "alt", "tabindex", "click", "keyup"], ["ksSize", "", 1, "current-image-previous", "hidden", 3, "sizeConfig"], ["ksDescription", "", 1, "inside", "description", 3, "description", "innerHTML"], ["class", "inside current-image-next", "ksSize", "", "role", "img", 3, "src", "hidden", "sizeConfig", "title", "alt", "tabindex", "click", "keyup", 4, "ngIf", "ngIfElse"], ["lastImage", ""], ["ksSize", "", "role", "img", 1, "inside", "current-image-next", 3, "src", "hidden", "sizeConfig", "title", "alt", "tabindex", "click", "keyup"], ["ksSize", "", 1, "current-image-next", "hidden", 3, "sizeConfig"], [3, "loadingConfig", "accessibilityConfig"]], template: function CurrentImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyPress", function CurrentImageComponent_Template_main_keyPress_0_listener($event) { return ctx.onKeyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentImageComponent_Template_a_click_2_listener($event) { return ctx.onNavigationEvent("left", $event, ctx.normalAction, ctx.isFirstImage); })("keyup", function CurrentImageComponent_Template_a_keyup_2_listener($event) { return ctx.onNavigationEvent("left", $event, ctx.normalAction, ctx.isFirstImage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CurrentImageComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "figure", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function CurrentImageComponent_Template_img_load_6_listener($event) { return ctx.onImageLoad($event); })("click", function CurrentImageComponent_Template_img_click_6_listener($event) { return ctx.onImageEvent($event, ctx.clickAction); })("keyup", function CurrentImageComponent_Template_img_keyup_6_listener($event) { return ctx.onImageEvent($event, ctx.keyboardAction); })("swipeleft", function CurrentImageComponent_Template_img_swipeleft_6_listener($event) { return ctx.swipe($event.type); })("swiperight", function CurrentImageComponent_Template_img_swiperight_6_listener($event) { return ctx.swipe($event.type); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CurrentImageComponent_figcaption_7_Template, 1, 2, "figcaption", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CurrentImageComponent_ng_container_9_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CurrentImageComponent_ng_container_10_Template, 2, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentImageComponent_Template_a_click_11_listener($event) { return ctx.onNavigationEvent("right", $event, ctx.normalAction, ctx.isLastImage); })("keyup", function CurrentImageComponent_Template_a_keyup_11_listener($event) { return ctx.onNavigationEvent("right", $event, ctx.normalAction, ctx.isLastImage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx.isOpen)("title", ctx.accessibilityConfig.mainContainerTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig.mainContainerAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-left ", ctx.isFirstImage ? "no-pointer" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx.isFirstImage ? -1 : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig.mainPrevImageAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx.isFirstImage ? "empty-arrow-image" : "left-arrow-image", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.isFirstImage ? "" : ctx.accessibilityConfig.mainPrevImageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.configSlide == null ? null : ctx.configSlide.sidePreviews == null ? null : ctx.configSlide.sidePreviews.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.loading ? "none" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.currentImage.modal.alt ? ctx.currentImage.modal.alt : ctx.getAltDescriptionByImage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "rotate" + (ctx.currentImage.modal && ctx.currentImage.modal.angle ? ctx.currentImage.modal.angle : "0"))("src", ctx.currentImage.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", ctx.currentImage.modal.title ? ctx.currentImage.modal.title : ctx.getTitleToDisplay())("tabindex", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.currentImage.modal.ariaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getDescriptionToDisplay() !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideConfig == null ? null : ctx.slideConfig.sidePreviews == null ? null : ctx.slideConfig.sidePreviews.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading && (ctx.configCurrentImage == null ? null : ctx.configCurrentImage.loadingConfig == null ? null : ctx.configCurrentImage.loadingConfig.enable));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-right ", ctx.isFirstImage ? "no-pointer" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx.isLastImage ? -1 : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig.mainNextImageAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("inside ", ctx.isLastImage ? "empty-arrow-image" : "right-arrow-image", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.isLastImage ? "" : ctx.accessibilityConfig.mainNextImageTitle);
    } }, directives: function () { return [KeyboardNavigationDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, SizeDirective, DescriptionDirective, LoadingSpinnerComponent]; }, styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center}.main-image-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.main-image-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], .main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%], .main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{-webkit-animation:1s animatezoom;animation:1s animatezoom;cursor:pointer;transition:.5s}.main-image-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, .main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover, .main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{margin-right:5px;margin-left:15px}.main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left.no-pointer[_ngcontent-%COMP%]{cursor:default!important}.main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{margin-right:15px;margin-left:5px}.main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right.no-pointer[_ngcontent-%COMP%]{cursor:default!important}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%]{-webkit-animation:.8s fadein-visible;animation:.8s fadein-visible;text-align:center;margin:0;position:relative}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%] > #current-image[_ngcontent-%COMP%]{max-width:100%;height:auto;display:block}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{padding:10px;position:absolute;bottom:0;left:0;right:0}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-weight:700;text-align:center}#current-image[_ngcontent-%COMP%]{height:auto;max-width:80vw;max-height:60vh;cursor:pointer}@media screen and (min-width:70vw){#current-image[_ngcontent-%COMP%]{max-width:70vw}}@-webkit-keyframes fadein-visible{from{opacity:0}to{opacity:1}}@keyframes fadein-visible{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}", _c7, "@media only screen and (max-width:1024px),only screen and (max-device-width:1024px){.current-image-next[_ngcontent-%COMP%], .current-image-previous[_ngcontent-%COMP%]{display:none}}@media only screen and (min-device-width:1025px){.current-image-next[_ngcontent-%COMP%], .current-image-preview[_ngcontent-%COMP%], .current-image-previous[_ngcontent-%COMP%]{height:auto;cursor:pointer;opacity:.5;-webkit-animation:.8s fadein-semi-visible05;animation:.8s fadein-semi-visible05}.current-image-next[_ngcontent-%COMP%]:hover, .current-image-preview[_ngcontent-%COMP%]:hover, .current-image-previous[_ngcontent-%COMP%]:hover{opacity:1;transition:.5s}.current-image-previous[_ngcontent-%COMP%]{margin-left:10px;margin-right:5px}.current-image-next[_ngcontent-%COMP%]{margin-right:10px;margin-left:5px}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}"], changeDetection: 0 });
/** @nocollapse */
CurrentImageComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
CurrentImageComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    currentImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    currentImageConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    slideConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    keyboardConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    loadImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    changeImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mouseleave',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ks-current-image',
                template: "<main class=\"main-image-container\"\n      ksKeyboardNavigation [isOpen]=\"isOpen\" (keyPress)=\"onKeyPress($event)\"\n      [attr.aria-label]=\"accessibilityConfig.mainContainerAriaLabel\"\n      [title]=\"accessibilityConfig.mainContainerTitle\">\n\n  <div class=\"left-sub-container\">\n    <a class=\"nav-left {{isFirstImage ? 'no-pointer' : ''}}\"\n       [attr.aria-label]=\"accessibilityConfig.mainPrevImageAriaLabel\"\n       [tabindex]=\"isFirstImage ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('left', $event, normalAction, isFirstImage)\" (keyup)=\"onNavigationEvent('left', $event, normalAction, isFirstImage)\">\n      <div class=\"inside {{isFirstImage ? 'empty-arrow-image' : 'left-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"isFirstImage ? '' : accessibilityConfig.mainPrevImageTitle\"></div>\n    </a>\n\n    <ng-container *ngIf=\"configSlide?.sidePreviews?.show\">\n      <ng-container *ngIf=\"getLeftPreviewImage() as leftPreview\">\n        <img *ngIf=\"!isFirstImage; else firstImage\"\n             class=\"inside current-image-previous\"\n             [src]=\"leftPreview.plain?.img ? leftPreview.plain.img : leftPreview.modal.img\"\n             [hidden]=\"loading\"\n             ksSize [sizeConfig]=\"{width: configSlide.sidePreviews?.size.width, height: configSlide.sidePreviews?.size.height}\"\n             [attr.aria-label]=\"leftPreview.modal.ariaLabel\"\n             [title]=\"leftPreview.modal.title ? leftPreview.modal.title : getDescriptionToDisplay(leftPreview)\"\n             alt=\"{{leftPreview.modal.alt ? leftPreview.modal.alt : getAltDescriptionByImage(leftPreview)}}\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"onNavigationEvent('left', $event, clickAction)\" (keyup)=\"onNavigationEvent('left', $event, keyboardAction)\"/>\n        <ng-template #firstImage>\n          <div class=\"current-image-previous hidden\"\n               ksSize [sizeConfig]=\"{width: configSlide.sidePreviews?.size.width, height: configSlide.sidePreviews?.size.height}\"></div>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </div>\n\n\n  <figure id=\"current-figure\" [style.display]=\"loading ? 'none' : ''\">\n    <img id=\"current-image\"\n         class=\"inside\"\n         [ngClass]=\"'rotate' + (currentImage.modal && currentImage.modal.angle ? currentImage.modal.angle : '0')\"\n         [src]=\"currentImage.modal.img\"\n         [attr.aria-label]=\"currentImage.modal.ariaLabel\"\n         [title]=\"currentImage.modal.title ? currentImage.modal.title : getTitleToDisplay()\"\n         alt=\"{{currentImage.modal.alt ? currentImage.modal.alt : getAltDescriptionByImage()}}\"\n         [tabindex]=\"0\" role=\"img\"\n         (load)=\"onImageLoad($event)\"\n         (click)=\"onImageEvent($event, clickAction)\" (keyup)=\"onImageEvent($event, keyboardAction)\"\n         (swipeleft)=\"swipe($event.type)\"\n         (swiperight)=\"swipe($event.type)\"/>\n    <figcaption *ngIf=\"getDescriptionToDisplay() !== ''\"\n                class=\"inside description\"\n                ksDescription [description]=\"configCurrentImage?.description\"\n                [innerHTML]=\"getDescriptionToDisplay()\">\n    </figcaption>\n  </figure>\n\n  <div class=\"right-sub-container\">\n    <ng-container *ngIf=\"slideConfig?.sidePreviews?.show\">\n      <ng-container *ngIf=\"getRightPreviewImage() as rightPreview\">\n        <img *ngIf=\"!isLastImage; else lastImage\"\n             class=\"inside current-image-next\"\n             [src]=\"rightPreview.plain?.img ? rightPreview.plain.img : rightPreview.modal.img\"\n             [hidden]=\"loading\"\n             ksSize [sizeConfig]=\"{width: slideConfig.sidePreviews?.size.width, height: slideConfig.sidePreviews?.size.height}\"\n             [attr.aria-label]=\"rightPreview.modal.ariaLabel\"\n             [title]=\"rightPreview.modal.title ? rightPreview.modal.title : getDescriptionToDisplay(rightPreview)\"\n             alt=\"{{rightPreview.modal.alt ? rightPreview.modal.alt : getAltDescriptionByImage(rightPreview)}}\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"onNavigationEvent('right', $event, clickAction)\" (keyup)=\"onNavigationEvent('right', $event, keyboardAction)\"/>\n        <ng-template #lastImage>\n          <div class=\"current-image-next hidden\"\n               ksSize [sizeConfig]=\"{width: slideConfig.sidePreviews?.size.width, height: slideConfig.sidePreviews?.size.height}\">\n          </div>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && configCurrentImage?.loadingConfig?.enable\">\n      <ks-loading-spinner [loadingConfig]=\"configCurrentImage?.loadingConfig\"\n                          [accessibilityConfig]=\"accessibilityConfig\"></ks-loading-spinner>\n    </ng-container>\n\n    <a class=\"nav-right {{isFirstImage ? 'no-pointer' : ''}}\"\n       [attr.aria-label]=\"accessibilityConfig.mainNextImageAriaLabel\"\n       [tabindex]=\"isLastImage ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('right', $event, normalAction, isLastImage)\" (keyup)=\"onNavigationEvent('right', $event, normalAction, isLastImage)\">\n      <div class=\"inside {{isLastImage ? 'empty-arrow-image' : 'right-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"isLastImage ? '' : accessibilityConfig.mainNextImageTitle\"></div>\n    </a>\n  </div>\n</main>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;flex-direction:column;justify-content:center}.main-image-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.main-image-container .nav,.main-image-container>.left-sub-container>.nav-left,.main-image-container>.right-sub-container>.nav-right{-webkit-animation:1s animatezoom;animation:1s animatezoom;cursor:pointer;transition:.5s}.main-image-container .nav:hover,.main-image-container>.left-sub-container>.nav-left:hover,.main-image-container>.right-sub-container>.nav-right:hover{transform:scale(1.1)}.main-image-container>.left-sub-container{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container>.left-sub-container>.nav-left{margin-right:5px;margin-left:15px}.main-image-container>.left-sub-container>.nav-left.no-pointer{cursor:default!important}.main-image-container>.right-sub-container{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container>.right-sub-container>.nav-right{margin-right:15px;margin-left:5px}.main-image-container>.right-sub-container>.nav-right.no-pointer{cursor:default!important}.main-image-container #current-figure{-webkit-animation:.8s fadein-visible;animation:.8s fadein-visible;text-align:center;margin:0;position:relative}.main-image-container #current-figure>#current-image{max-width:100%;height:auto;display:block}.main-image-container #current-figure figcaption{padding:10px;position:absolute;bottom:0;left:0;right:0}.main-image-container #current-figure figcaption .description{font-weight:700;text-align:center}#current-image{height:auto;max-width:80vw;max-height:60vh;cursor:pointer}@media screen and (min-width:70vw){#current-image{max-width:70vw}}@-webkit-keyframes fadein-visible{from{opacity:0}to{opacity:1}}@keyframes fadein-visible{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}", ".arrow-image,.empty-arrow-image,.left-arrow-image,.right-arrow-image{width:30px;height:30px;background-size:30px}.empty-arrow-image{background:#000;opacity:0}.left-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.left-arrow-image:hover{transform:scale(1.2)}.right-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.right-arrow-image:hover{transform:scale(1.2)}", "@media only screen and (max-width:1024px),only screen and (max-device-width:1024px){.current-image-next,.current-image-previous{display:none}}@media only screen and (min-device-width:1025px){.current-image-next,.current-image-preview,.current-image-previous{height:auto;cursor:pointer;opacity:.5;-webkit-animation:.8s fadein-semi-visible05;animation:.8s fadein-semi-visible05}.current-image-next:hover,.current-image-preview:hover,.current-image-previous:hover{opacity:1;transition:.5s}.current-image-previous{margin-left:10px;margin-right:5px}.current-image-next{margin-right:10px;margin-left:5px}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { loadImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], changeImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * Listener to stop the gallery when the mouse pointer is over the current image.
     * @return {?}
     */
    onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseenter']
        }], 
    /**
     * Listener to play the gallery when the mouse pointer leave the current image.
     * @return {?}
     */
    onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseleave']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], currentImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], currentImageConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], slideConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], keyboardConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class `LineLayout` to configure a linear plain gallery.
 */
class LineLayout {
    /**
     * @param {?} size
     * @param {?} breakConfig
     * @param {?} justify
     */
    constructor(size, breakConfig, justify) {
        this.size = size;
        this.breakConfig = breakConfig;
        this.justify = justify;
    }
}
/**
 * Class `GridLayout` to configure a grid plain gallery.
 */
class GridLayout {
    /**
     * @param {?} size
     * @param {?} breakConfig
     */
    constructor(size, breakConfig) {
        this.size = size;
        this.breakConfig = breakConfig;
    }
}
/**
 * Class `AdvancedLayout` to configure a fully custom plain gallery.
 */
class AdvancedLayout {
    /**
     * @param {?} modalOpenerByIndex
     * @param {?} hideDefaultPlainGallery
     */
    constructor(modalOpenerByIndex, hideDefaultPlainGallery) {
        this.modalOpenerByIndex = modalOpenerByIndex;
        this.hideDefaultPlainGallery = hideDefaultPlainGallery;
    }
}
/** @enum {number} */
const PlainGalleryStrategy = {
    // don't use 0 here
    // the first index is 1 and all of the following members are auto-incremented from that point on
    ROW: 1,
    COLUMN: 2,
    GRID: 3,
    CUSTOM: 4 // full custom strategy
    ,
};
PlainGalleryStrategy[PlainGalleryStrategy.ROW] = 'ROW';
PlainGalleryStrategy[PlainGalleryStrategy.COLUMN] = 'COLUMN';
PlainGalleryStrategy[PlainGalleryStrategy.GRID] = 'GRID';
PlainGalleryStrategy[PlainGalleryStrategy.CUSTOM] = 'CUSTOM';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default accessibility configuration.
 * @type {?}
 */
const KS_DEFAULT_ACCESSIBILITY_CONFIG = {
    backgroundAriaLabel: 'Modal gallery full screen background',
    backgroundTitle: '',
    plainGalleryContentAriaLabel: 'Plain gallery content',
    plainGalleryContentTitle: '',
    modalGalleryContentAriaLabel: 'Modal gallery content',
    modalGalleryContentTitle: '',
    loadingSpinnerAriaLabel: 'The current image is loading. Please be patient.',
    loadingSpinnerTitle: 'The current image is loading. Please be patient.',
    mainContainerAriaLabel: 'Current image and navigation',
    mainContainerTitle: '',
    mainPrevImageAriaLabel: 'Previous image',
    mainPrevImageTitle: 'Previous image',
    mainNextImageAriaLabel: 'Next image',
    mainNextImageTitle: 'Next image',
    dotsContainerAriaLabel: 'Image navigation dots',
    dotsContainerTitle: '',
    dotAriaLabel: 'Navigate to image number',
    previewsContainerAriaLabel: 'Image previews',
    previewsContainerTitle: '',
    previewScrollPrevAriaLabel: 'Scroll previous previews',
    previewScrollPrevTitle: 'Scroll previous previews',
    previewScrollNextAriaLabel: 'Scroll next previews',
    previewScrollNextTitle: 'Scroll next previews',
    carouselContainerAriaLabel: 'Current image and navigation',
    carouselContainerTitle: '',
    carouselPrevImageAriaLabel: 'Previous image',
    carouselPrevImageTitle: 'Previous image',
    carouselNextImageAriaLabel: 'Next image',
    carouselNextImageTitle: 'Next image',
    carouselPreviewsContainerAriaLabel: 'Image previews',
    carouselPreviewsContainerTitle: '',
    carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
    carouselPreviewScrollPrevTitle: 'Scroll previous previews',
    carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
    carouselPreviewScrollNextTitle: 'Scroll next previews'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Service to check if the provided id is unique
 */
class IdValidatorService {
    constructor() {
        this.ids = new Map();
    }
    /**
     * Method to check and reserve an id for the current instance of the library.
     * In this way, no other instances can use the same id.
     * @throws a error with a message if galleryId is neither unique, < 0 or an integer
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?} boolean true if success. false is never returned, instead an exception is thrown
     */
    checkAndAdd(galleryId) {
        if (!Number.isInteger(galleryId) || galleryId < 0) {
            throw new Error('You must provide a valid [id]="unique integer > 0 here" to the gallery/carousel in your template');
        }
        if (this.ids.get(galleryId)) {
            throw new Error(`Cannot create gallery with id=${galleryId} because already used in your application. This must be a unique integer >= 0`);
        }
        this.ids.set(galleryId, galleryId);
        return true;
    }
    /**
     * Method to remove a reserved id. In this way you are able to use the id again for another instance of the library.
     * @throws a error with a message if galleryId is neither integer or < 0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?} boolean true if success. false is never returned, instead an exception is thrown
     */
    remove(galleryId) {
        if (!Number.isInteger(galleryId) || galleryId < 0) {
            throw new Error('You must provide a valid [id]="unique integer > 0 here" to the gallery/carousel in your template');
        }
        // if (this.ids.find(id => id === galleryId)) {
        //   throw new Error(`Cannot create gallery with id=${galleryId} because already used in your application. This must be a unique number >= 0.`);
        // }
        this.ids.delete(galleryId);
        return true;
    }
}
IdValidatorService.ɵfac = function IdValidatorService_Factory(t) { return new (t || IdValidatorService)(); };
IdValidatorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdValidatorService, factory: IdValidatorService.ɵfac, providedIn: 'root' });
/** @nocollapse */ IdValidatorService.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.defineInjectable)({ factory: function IdValidatorService_Factory() { return new IdValidatorService(); }, token: IdValidatorService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdValidatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Main Component of this library with both the plain and modal galleries.
 */
class ModalGalleryComponent {
    /**
     * Constructor with the injection of ´KeyboardService´, an object to support Server-Side Rendering and other useful services.
     * @param {?} keyboardService
     * @param {?} galleryService
     * @param {?} platformId
     * @param {?} changeDetectorRef
     * @param {?} idValidatorService
     */
    constructor(keyboardService, galleryService, platformId, changeDetectorRef, idValidatorService) {
        this.keyboardService = keyboardService;
        this.galleryService = galleryService;
        this.platformId = platformId;
        this.changeDetectorRef = changeDetectorRef;
        this.idValidatorService = idValidatorService;
        /**
         * Boolean to enable modal-gallery close behaviour when clicking
         * on the semi-transparent background. Enabled by default.
         */
        this.enableCloseOutside = true;
        /**
         * Object of type `AccessibilityConfig` to init custom accessibility features.
         * For instance, it contains titles, alt texts, aria-labels and so on.
         */
        this.accessibilityConfig = KS_DEFAULT_ACCESSIBILITY_CONFIG;
        /**
         * Output to emit an event when the modal gallery is closed.
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit an event when an image is changed.
         */
        this.show = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit an event when the current image is the first one.
         */
        this.firstImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit an event when the current image is the last one.
         */
        this.lastImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit an event when the modal gallery is closed.
         */
        this.hasData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit an event when a button is clicked, but before that the action is triggered.
         */
        this.buttonBeforeHook = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit an event when a button is clicked, but after that the action is triggered.
         */
        this.buttonAfterHook = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit an event when someone clicks either an arrow of modal gallery or also in previews.
         */
        this.arrow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Boolean that it is true if the modal gallery is visible. False by default.
         */
        this.opened = false;
        /**
         * Boolean to open the modal gallery. False by default.
         */
        this.showGallery = false;
    }
    /**
     * HostListener to catch browser's back button and destroy the gallery.
     * This prevents weired behaviour about scrolling.
     * Added to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/159
     * @param {?} e
     * @return {?}
     */
    onPopState(e) {
        this.closeGallery();
    }
    /**
     * Method ´ngOnChanges´ to re-init images if input is changed.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called before `ngOnInit()` and whenever one or more data-bound input properties change.
     * @param {?} changes `SimpleChanges` object of current and previous property values provided by Angular.
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const imagesChange = changes.modalImages;
        /** @type {?} */
        const plainGalleryConfigChange = changes.plainGalleryConfig;
        if (imagesChange && !imagesChange.firstChange && imagesChange.previousValue !== imagesChange.currentValue) {
            this.initImages();
        }
        if (plainGalleryConfigChange) {
            // const prevPlainGalleryConfigChange: any = plainGalleryConfigChange.previousValue;
            /** @type {?} */
            const currPlainGalleryConfigChange = plainGalleryConfigChange.currentValue;
            if (currPlainGalleryConfigChange.layout &&
                currPlainGalleryConfigChange.layout instanceof AdvancedLayout &&
                currPlainGalleryConfigChange.layout.modalOpenerByIndex !== -1) {
                // console.log('opening modal gallery from custom plain gallery, index: ', currPlainGalleryConfigChange);
                this.showModalGallery(currPlainGalleryConfigChange.layout.modalOpenerByIndex);
            }
        }
    }
    /**
     * Method ´ngOnInit´ to init images calling `initImages()`.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ngOnInit() {
        this.idValidatorService.checkAndAdd(this.id);
        // id is a mandatory input and must a number > 0
        if ((!this.id && this.id !== 0) || this.id < 0) {
            throw new Error(`'[id]="a number >= 0"' is a mandatory input from 6.0.0 in angular-modal-gallery.` +
                `If you are using multiple instances of this library, please be sure to use different ids`);
        }
        // call initImages to init images and to emit `hasData` event
        this.initImages();
        /** @type {?} */
        const defaultSlideConfig = {
            infinite: false,
            playConfig: (/** @type {?} */ ({ autoPlay: false, interval: 5000, pauseOnHover: true })),
            sidePreviews: (/** @type {?} */ ({ show: true, size: { width: '100px', height: 'auto' } }))
        };
        this.configSlide = Object.assign({}, defaultSlideConfig, this.slideConfig);
        this.galleryServiceNavigateSubscription = this.galleryService.navigate.subscribe((/**
         * @param {?} payload
         * @return {?}
         */
        (payload) => {
            if (!payload) {
                return;
            }
            // if galleryId is not valid OR galleryId is related to another instance and not this one
            if (payload.galleryId === undefined || payload.galleryId < 0 || payload.galleryId !== this.id) {
                return;
            }
            // if image index is not valid
            if (payload.index < 0 || payload.index > this.images.length) {
                return;
            }
            this.showModalGallery(payload.index, true);
        }));
        this.galleryServiceCloseSubscription = this.galleryService.close.subscribe((/**
         * @param {?} galleryId
         * @return {?}
         */
        (galleryId) => {
            if (galleryId < 0 || this.id !== galleryId) {
                return;
            }
            this.closeGallery(Action.NORMAL, true);
        }));
        this.galleryServiceUpdateSubscription = this.galleryService.update.subscribe((/**
         * @param {?} payload
         * @return {?}
         */
        (payload) => {
            if (!payload) {
                return;
            }
            // if galleryId is not valid OR galleryId is related to another instance and not this one
            if (payload.galleryId === undefined || payload.galleryId < 0 || payload.galleryId !== this.id) {
                return;
            }
            // if either image index or image are not valid
            if (payload.index < 0 || payload.index > this.images.length || !payload.image) {
                return;
            }
            /** @type {?} */
            const currentIndex = getIndex(payload.image, this.images);
            this.images = this.images.map((/**
             * @param {?} image
             * @param {?} index
             * @return {?}
             */
            (image, index) => {
                if (image.id === payload.index) {
                    return (/** @type {?} */ (payload.image));
                }
                return image;
            }));
            if (currentIndex === payload.index) {
                this.currentImage = this.images[payload.index];
            }
            this.changeDetectorRef.markForCheck();
        }));
        this.galleryServiceAutoPlaySubscription = this.galleryService.autoPlay.subscribe((/**
         * @param {?} payload
         * @return {?}
         */
        (payload) => {
            // if galleryId is not valid OR galleryId is related to another instance and not this one
            if (payload.galleryId === undefined || payload.galleryId < 0 || payload.galleryId !== this.id) {
                return;
            }
            this.configSlide.playConfig.autoPlay = payload.result;
        }));
    }
    /**
     * Method called by custom upper buttons.
     * @param {?} event
     * @return {?}
     */
    onCustomEmit(event) {
        /** @type {?} */
        const eventToEmit = this.getButtonEventToEmit(event);
        this.buttonBeforeHook.emit(eventToEmit);
        // console.log('on onCustomEmit', eventToEmit);
        this.buttonAfterHook.emit(eventToEmit);
    }
    // TODO implement on refresh
    // /**
    //  * Method called by the refresh upper button.
    //  * STILL NOT IMPLEMENTED, SO DON'T USE IT
    //  * @param ButtonEvent event payload
    //  */
    // onRefresh(event: ButtonEvent) {
    //   const eventToEmit: ButtonEvent = this.getButtonEventToEmit(event);
    //
    //   this.buttonBeforeHook.emit(eventToEmit);
    //   // console.log('TODO implement on refresh inside the library', eventToEmit);
    //
    //   this.currentImage = Object.assign({}, this.currentImage, { previouslyLoaded: false });
    //
    //   // TODO add logic to hide and show the current image
    //
    //   // console.log('onRefresh', this.currentImage);
    //
    //   // const indexNum: number = this.currentImageComponent.getIndex();
    //
    //   // this.images = this.images.map((val: InternalLibImage, index: number) => {
    //   //   if (index !== 2) {
    //   //     return val;
    //   //   } else {
    //   //     const img: InternalLibImage = Object.assign({}, val, {previouslyLoaded: false});
    //   //     return img;
    //   //   }
    //   // });
    //   //
    //   // this.closeGallery();
    //   // this.showModalGallery(2);
    //
    //   this.buttonAfterHook.emit(eventToEmit);
    // }
    // /**
    //  * Method called by the rotate upper button.
    //  * @param ButtonEvent event payload
    //  */
    // onRotate(event: ButtonEvent) {
    //   const eventToEmit: ButtonEvent = this.getButtonEventToEmit(event);
    //   this.buttonBeforeHook.emit(eventToEmit);
    //
    //   // TODO implement rotation logic
    //
    //   this.buttonAfterHook.emit(eventToEmit);
    // }
    /**
     * Method called by the full-screen upper button.
     * @param {?} event
     * @return {?}
     */
    onFullScreen(event) {
        /** @type {?} */
        const eventToEmit = this.getButtonEventToEmit(event);
        this.buttonBeforeHook.emit(eventToEmit);
        /** @type {?} */
        const doc = (/** @type {?} */ (document));
        /** @type {?} */
        const docEl = (/** @type {?} */ (document.documentElement));
        /** @type {?} */
        const fullscreenDisabled = !doc.fullscreenElement && !doc.webkitFullscreenElement && !doc.mozFullScreenElement && !doc.msFullscreenElement;
        if (fullscreenDisabled) {
            if (docEl.requestFullscreen) {
                docEl.requestFullscreen();
            }
            else if (docEl.webkitRequestFullscreen) {
                docEl.webkitRequestFullscreen();
            }
            else if (docEl.mozRequestFullScreen) {
                docEl.mozRequestFullScreen();
            }
            else if (docEl.msRequestFullscreen) {
                docEl.msRequestFullscreen();
            }
        }
        else {
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            }
            else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();
            }
            else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            }
            else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            }
        }
        this.buttonAfterHook.emit(eventToEmit);
    }
    /**
     * Method called by the delete upper button.
     * @param {?} event
     * @return {?}
     */
    onDelete(event) {
        /** @type {?} */
        const eventToEmit = this.getButtonEventToEmit(event);
        this.buttonBeforeHook.emit(eventToEmit);
        if (this.images.length === 1) {
            this.closeGallery();
        }
        /** @type {?} */
        const imageIndexToDelete = this.currentImageComponent.getIndexToDelete(event.image);
        if (imageIndexToDelete === this.images.length - 1) {
            // last image
            this.currentImageComponent.prevImage();
        }
        else {
            this.currentImageComponent.nextImage();
        }
        this.buttonAfterHook.emit(eventToEmit);
    }
    /**
     * Method called by the navigate upper button.
     * @param {?} event
     * @return {?}
     */
    onNavigate(event) {
        /** @type {?} */
        const eventToEmit = this.getButtonEventToEmit(event);
        this.buttonBeforeHook.emit(eventToEmit);
        // To support SSR
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            if (eventToEmit.image && eventToEmit.image.modal.extUrl) {
                // where I should open this link? The current tab or another one?
                if (eventToEmit.button && eventToEmit.button.extUrlInNewTab) {
                    // in this case I should use target _blank to open the url in a new tab, however these is a security issue.
                    // Prevent Reverse Tabnabbing's attacks (https://www.owasp.org/index.php/Reverse_Tabnabbing)
                    // Some resources:
                    // - https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet#Tabnabbing
                    // - https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c
                    // - https://developer.mozilla.org/en-US/docs/Web/API/Window/open
                    /** @type {?} */
                    const newWindow = window.open(eventToEmit.image.modal.extUrl, 'noopener,noreferrer,');
                    newWindow.opener = null; // required to prevent security issues
                }
                else {
                    window.location.href = eventToEmit.image.modal.extUrl;
                }
            }
        }
        this.buttonAfterHook.emit(eventToEmit);
    }
    /**
     * Method called by the download upper button.
     * @param {?} event
     * @return {?}
     */
    onDownload(event) {
        /** @type {?} */
        const eventToEmit = this.getButtonEventToEmit(event);
        this.buttonBeforeHook.emit(eventToEmit);
        this.downloadImage();
        this.buttonAfterHook.emit(eventToEmit);
    }
    /**
     * Method called by the close upper button.
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    onCloseGallery(event, action = Action.NORMAL) {
        /** @type {?} */
        const eventToEmit = this.getButtonEventToEmit(event);
        this.buttonBeforeHook.emit(eventToEmit);
        this.closeGallery(action);
        this.buttonAfterHook.emit(eventToEmit);
    }
    /**
     * Method to close the modal gallery specifying the action.
     * It also reset the `keyboardService` to prevent multiple listeners.
     * @param {?=} action
     * @param {?=} isCalledByService
     * @return {?}
     */
    closeGallery(action = Action.NORMAL, isCalledByService = false) {
        this.close.emit(new ImageModalEvent(action, true));
        this.opened = false;
        this.keyboardService.reset();
        // shows scrollbar
        document.body.style.overflow = 'visible';
        if (isCalledByService) {
            // the following is required, otherwise the view will not be updated
            // this happens only if called by gallery.service
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * Method called when you click on an image of your plain (or inline) gallery.
     * @param {?} index
     * @return {?}
     */
    onShowModalGallery(index) {
        this.showModalGallery(index);
    }
    /**
     * Method to show the modal gallery displaying the image with
     * the index specified as input parameter.
     * It will also register a new `keyboardService` to catch keyboard's events to download the current
     * image with keyboard's shortcuts. This service, will be removed either when modal gallery component
     * will be destroyed or when the gallery is closed invoking the `closeGallery` method.
     * @param {?} index
     * @param {?=} isCalledByService
     * @return {?}
     */
    showModalGallery(index, isCalledByService = false) {
        // hides scrollbar
        document.body.style.overflow = 'hidden';
        this.keyboardService.add((/**
         * @param {?} event
         * @param {?} combo
         * @return {?}
         */
        (event, combo) => {
            if (event.preventDefault) {
                event.preventDefault();
            }
            else {
                // internet explorer
                event.returnValue = false;
            }
            this.downloadImage();
        }));
        this.opened = true;
        this.currentImage = this.images[index];
        // emit a new ImageModalEvent with the index of the current image
        this.show.emit(new ImageModalEvent(Action.LOAD, index + 1));
        if (isCalledByService) {
            // the following is required, otherwise the view will not be updated
            // this happens only if called by gallery.service
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * Method called when the image changes and used to update the `currentImage` object.
     * @param {?} event
     * @return {?}
     */
    onChangeCurrentImage(event) {
        /** @type {?} */
        const newIndex = (/** @type {?} */ (event.result));
        if (newIndex < 0 || newIndex >= this.images.length) {
            return;
        }
        this.currentImage = this.images[newIndex];
        // emit first/last event based on newIndex value
        this.emitBoundaryEvent(event.action, newIndex);
        // emit current visible image index
        this.show.emit(new ImageModalEvent(event.action, newIndex + 1));
    }
    /**
     * @return {?}
     */
    isPlainGalleryVisible() {
        if (this.plainGalleryConfig && this.plainGalleryConfig.layout && this.plainGalleryConfig.layout instanceof AdvancedLayout) {
            return !this.plainGalleryConfig.layout.hideDefaultPlainGallery;
        }
        return true;
    }
    /**
     * Method called when you click 'outside' (i.e. on the semi-transparent background)
     * to close the modal gallery if `enableCloseOutside` is true.
     * @param {?} event
     * @return {?}
     */
    onClickOutside(event) {
        if (event && this.enableCloseOutside) {
            this.closeGallery(Action.CLICK);
        }
    }
    /**
     * Method called when an image is loaded and the loading spinner has gone.
     * It sets the previouslyLoaded flag inside the Image to hide loading spinner when displayed again.
     * @param {?} event
     * @return {?}
     */
    onImageLoad(event) {
        // console.log('modal-image onImageLoad', event);
        // console.log('modal-image onImageLoad images before', this.images);
        // sets as previously loaded the image with index specified by `event.status`
        this.images = this.images.map((/**
         * @param {?} img
         * @return {?}
         */
        (img) => {
            if (img && img.id === event.id) {
                return Object.assign({}, img, { previouslyLoaded: event.status });
            }
            return img;
        }));
        // console.log('modal-image onImageLoad images after', this.images);
    }
    /**
     * Method called when a dot is clicked and used to update the current image.
     * @param {?} index
     * @return {?}
     */
    onClickDot(index) {
        this.currentImage = this.images[index];
    }
    /**
     * Method called when an image preview is clicked and used to update the current image.
     * @param {?} event
     * @return {?}
     */
    onClickPreview(event) {
        this.onChangeCurrentImage(event);
    }
    // onClickArrow(event: InteractionEvent) {
    //   // TODO validate before to emit
    //   this.arrow.emit(event);
    // }
    /**
     * Method to download the current image, only if `downloadable` is true.
     * It contains also a logic to enable downloading features also for IE11.
     * @return {?}
     */
    downloadImage() {
        if (this.currentImageConfig && !this.currentImageConfig.downloadable) {
            return;
        }
        // If IE11 or Microsoft Edge use msSaveBlob(...)
        if (this.isIEorEdge()) {
            // I cannot use fetch API because IE11 doesn't support it,
            // so I have to switch to XMLHttpRequest
            this.downloadImageOnlyIEorEdge();
        }
        else {
            // for all other browsers
            this.downloadImageAllBrowsers();
        }
    }
    /**
     * Method to cleanup resources. In fact, this will reset keyboard's service.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this.keyboardService.reset();
        this.idValidatorService.remove(this.id);
        if (this.galleryServiceNavigateSubscription) {
            this.galleryServiceNavigateSubscription.unsubscribe();
        }
        if (this.galleryServiceCloseSubscription) {
            this.galleryServiceCloseSubscription.unsubscribe();
        }
        if (this.galleryServiceUpdateSubscription) {
            this.galleryServiceUpdateSubscription.unsubscribe();
        }
        if (this.galleryServiceAutoPlaySubscription) {
            this.galleryServiceAutoPlaySubscription.unsubscribe();
        }
    }
    /**
     * Private method to download the current image for all browsers except for IE11.
     * @private
     * @return {?}
     */
    downloadImageAllBrowsers() {
        /** @type {?} */
        const link = document.createElement('a');
        link.href = (/** @type {?} */ (this.currentImage.modal.img));
        link.setAttribute('download', this.getFileName(this.currentImage));
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    /**
     * Private method to download the current image only for IE11 using
     * custom javascript's methods available only on IE.
     * @private
     * @return {?}
     */
    downloadImageOnlyIEorEdge() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            /** @type {?} */
            const req = new XMLHttpRequest();
            req.open('GET', (/** @type {?} */ (this.currentImage.modal.img)), true);
            req.responseType = 'arraybuffer';
            req.onload = (/**
             * @param {?} event
             * @return {?}
             */
            event => {
                /** @type {?} */
                const blob = new Blob([req.response], { type: 'image/png' });
                window.navigator.msSaveBlob(blob, this.getFileName(this.currentImage));
            });
            req.send();
        }
    }
    /**
     * Private method to get the `ButtonEvent` to emit, merging the input `ButtonEvent`
     * with the current image.
     * @private
     * @param {?} event
     * @return {?} ButtonEvent event payload with the current image included
     */
    getButtonEventToEmit(event) {
        return Object.assign(event, { image: this.currentImage });
    }
    /**
     * Private method to get the file name from an input path.
     * This is used either to get the image's name from its path or from the Image itself,
     * if specified as 'downloadFileName' by the user.
     * @private
     * @param {?} image
     * @return {?} string string file name of the input image.
     */
    getFileName(image) {
        if (!image.modal.downloadFileName || image.modal.downloadFileName.length === 0) {
            return ((/** @type {?} */ (this.currentImage.modal.img))).replace(/^.*[\\\/]/, '');
        }
        else {
            return image.modal.downloadFileName;
        }
    }
    /**
     * Private method to initialize `images` as array of `Image`s.
     * Also, it will emit ImageowmodaModalEvent to say that images are loaded.
     * @private
     * @return {?}
     */
    initImages() {
        // I'm not cloning the array, but I'm doing this to cast it to an array of InternalLibImages
        this.images = (/** @type {?} */ (this.modalImages));
        this.hasData.emit(new ImageModalEvent(Action.LOAD, true));
        this.showGallery = this.images.length > 0;
    }
    /**
     * Private method to emit events when either the last or the first image are visible.
     * @private
     * @param {?} action Enum of type Action that represents the source of the event that changed the
     *  current image to the first one or the last one.
     * @param {?} indexToCheck is the index number of the image (the first or the last one).
     * @return {?}
     */
    emitBoundaryEvent(action, indexToCheck) {
        // to emit first/last event
        switch (indexToCheck) {
            case 0:
                this.firstImage.emit(new ImageModalEvent(action, true));
                break;
            case this.images.length - 1:
                this.lastImage.emit(new ImageModalEvent(action, true));
                break;
        }
    }
    /**
     * Private method to check if this library is running on
     * Microsoft browsers or not (i.e. it detects both IE11 and Edge)
     * supporting also Server-Side Rendering.
     * Inspired by https://msdn.microsoft.com/it-it/library/hh779016(v=vs.85).aspx
     * @private
     * @return {?} any the result
     */
    isIEorEdge() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            // if both Blob constructor and msSaveOrOpenBlob are supported by the current browser
            return window.Blob && window.navigator.msSaveOrOpenBlob;
        }
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId)) {
            // server only
            return true;
        }
    }
}
ModalGalleryComponent.ɵfac = function ModalGalleryComponent_Factory(t) { return new (t || ModalGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeyboardService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GalleryService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](IdValidatorService)); };
ModalGalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalGalleryComponent, selectors: [["ks-modal-gallery"]], viewQuery: function ModalGalleryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](CurrentImageComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.currentImageComponent = _t.first);
    } }, hostBindings: function ModalGalleryComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("popstate", function ModalGalleryComponent_popstate_HostBindingHandler($event) { return ctx.onPopState($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { enableCloseOutside: "enableCloseOutside", accessibilityConfig: "accessibilityConfig", id: "id", modalImages: "modalImages", buttonsConfig: "buttonsConfig", currentImageConfig: "currentImageConfig", dotsConfig: "dotsConfig", previewConfig: "previewConfig", slideConfig: "slideConfig", keyboardConfig: "keyboardConfig", plainGalleryConfig: "plainGalleryConfig" }, outputs: { close: "close", show: "show", firstImage: "firstImage", lastImage: "lastImage", hasData: "hasData", buttonBeforeHook: "buttonBeforeHook", buttonAfterHook: "buttonAfterHook", arrow: "arrow" }, exportAs: ["ksModalGallery"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 7, consts: [[3, "images", "showGallery", "plainGalleryConfig", "accessibilityConfig", "show"], [3, "isOpen", "accessibilityConfig"], ["id", "modal-gallery-wrapper", "ksClickOutside", "", 3, "title", "clickOutsideEnable", "clickOutside", 4, "ngIf"], ["id", "modal-gallery-wrapper", "ksClickOutside", "", 3, "title", "clickOutsideEnable", "clickOutside"], ["id", "flex-min-height-ie-fix"], ["id", "modal-gallery-container"], [3, "currentImage", "buttonsConfig", "delete", "navigate", "download", "close", "fullscreen", "customEmit"], [3, "id", "images", "currentImage", "isOpen", "slideConfig", "keyboardConfig", "accessibilityConfig", "currentImageConfig", "loadImage", "changeImage", "close"], [3, "images", "currentImage", "dotsConfig", "accessibilityConfig", "clickDot"], [3, "images", "currentImage", "previewConfig", "accessibilityConfig", "clickPreview"]], template: function ModalGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ks-plain-gallery", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("show", function ModalGalleryComponent_Template_ks_plain_gallery_show_0_listener($event) { return ctx.onShowModalGallery($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ks-background", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalGalleryComponent_div_2_Template, 8, 21, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images)("showGallery", ctx.showGallery && ctx.isPlainGalleryVisible())("plainGalleryConfig", ctx.plainGalleryConfig)("accessibilityConfig", ctx.accessibilityConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx.opened)("accessibilityConfig", ctx.accessibilityConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opened);
    } }, directives: function () { return [PlainGalleryComponent, BackgroundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, ClickOutsideDirective, UpperButtonsComponent, CurrentImageComponent, DotsComponent, PreviewsComponent]; }, styles: ["#modal-gallery-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:10000}#flex-min-height-ie-fix[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}#modal-gallery-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"], changeDetection: 0 });
/** @nocollapse */
ModalGalleryComponent.ctorParameters = () => [
    { type: KeyboardService },
    { type: GalleryService },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: IdValidatorService }
];
ModalGalleryComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    modalImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    buttonsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    enableCloseOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    currentImageConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dotsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    previewConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    slideConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    keyboardConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    plainGalleryConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    firstImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    lastImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    hasData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    buttonBeforeHook: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    buttonAfterHook: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    arrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    currentImageComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [CurrentImageComponent,] }],
    onPopState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['window:popstate', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ks-modal-gallery',
                exportAs: 'ksModalGallery',
                template: "<ks-plain-gallery [images]=\"images\"\n                  [showGallery]=\"showGallery && isPlainGalleryVisible()\"\n                  [plainGalleryConfig]=\"plainGalleryConfig\"\n                  [accessibilityConfig]=\"accessibilityConfig\"\n                  (show)=\"onShowModalGallery($event)\"></ks-plain-gallery>\n\n<ks-background [isOpen]=\"opened\"\n               [accessibilityConfig]=\"accessibilityConfig\"></ks-background>\n\n<div id=\"modal-gallery-wrapper\" *ngIf=\"opened\"\n     [attr.aria-label]=\"accessibilityConfig.modalGalleryContentAriaLabel\"\n     [title]=\"accessibilityConfig.modalGalleryContentTitle\"\n     ksClickOutside [clickOutsideEnable]=\"enableCloseOutside\"\n     (clickOutside)=\"onClickOutside($event)\">\n\n  <div id=\"flex-min-height-ie-fix\">\n    <div id=\"modal-gallery-container\">\n\n      <ks-upper-buttons [currentImage]=\"currentImage\"\n                        [buttonsConfig]=\"buttonsConfig\"\n                        (delete)=\"onDelete($event)\"\n                        (navigate)=\"onNavigate($event)\"\n                        (download)=\"onDownload($event)\"\n                        (close)=\"onCloseGallery($event)\"\n                        (fullscreen)=\"onFullScreen($event)\"\n                        (customEmit)=\"onCustomEmit($event)\"></ks-upper-buttons>\n                        <!--(rotate)=\"onRotate($event)\"-->\n\n      <ks-current-image [id]=\"id\"\n                        [images]=\"images\"\n                        [currentImage]=\"currentImage\"\n                        [isOpen]=\"opened\"\n                        [slideConfig]=\"configSlide\"\n                        [keyboardConfig]=\"keyboardConfig\"\n                        [accessibilityConfig]=\"accessibilityConfig\"\n                        [currentImageConfig]=\"currentImageConfig\"\n                        (loadImage)=\"onImageLoad($event)\"\n                        (changeImage)=\"onChangeCurrentImage($event)\"\n                        (close)=\"onCloseGallery($event)\"></ks-current-image>\n\n      <div>\n        <ks-dots [images]=\"images\"\n                 [currentImage]=\"currentImage\"\n                 [dotsConfig]=\"dotsConfig\"\n                 [accessibilityConfig]=\"accessibilityConfig\"\n                 (clickDot)=\"onClickDot($event)\"></ks-dots>\n\n        <ks-previews [images]=\"images\"\n                     [currentImage]=\"currentImage\"\n                     [previewConfig]=\"previewConfig\"\n                     [accessibilityConfig]=\"accessibilityConfig\"\n                     (clickPreview)=\"onClickPreview($event)\"></ks-previews>\n      </div>\n    </div>\n  </div>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: ["#modal-gallery-wrapper{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:10000}#flex-min-height-ie-fix{display:flex;flex-direction:column;justify-content:center}#modal-gallery-container{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"]
            }]
    }], function () { return [{ type: KeyboardService }, { type: GalleryService }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: IdValidatorService }]; }, { enableCloseOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], firstImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], lastImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], hasData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], buttonBeforeHook: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], buttonAfterHook: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], arrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * HostListener to catch browser's back button and destroy the gallery.
     * This prevents weired behaviour about scrolling.
     * Added to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/159
     * @param {?} e
     * @return {?}
     */
    onPopState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:popstate', ['$event']]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], modalImages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], buttonsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], currentImageConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dotsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], previewConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], slideConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], keyboardConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], plainGalleryConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], currentImageComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [CurrentImageComponent]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with configurable inline/plain carousel.
 */
class CarouselComponent extends AccessibleComponent {
    /**
     * @param {?} _platformId
     * @param {?} _ngZone
     * @param {?} galleryService
     * @param {?} ref
     * @param {?} sanitizer
     */
    constructor(_platformId, _ngZone, galleryService, ref, sanitizer) {
        super();
        this._platformId = _platformId;
        this._ngZone = _ngZone;
        this.galleryService = galleryService;
        this.ref = ref;
        this.sanitizer = sanitizer;
        /**
         * Attribute to set ariaLabel of the host component
         */
        this.ariaLabel = `Carousel`;
        /**
         * Object of type `DotsConfig` to init DotsComponent's features.
         * For instance, it contains a param to show/hide this component.
         */
        this.dotsConfig = { visible: true };
        /**
         * boolean to enable/disable infinite sliding. Enabled by default.
         */
        this.infinite = true;
        /**
         * Object of type `AccessibilityConfig` to init custom accessibility features.
         * For instance, it contains titles, alt texts, aria-labels and so on.
         */
        this.accessibilityConfig = KS_DEFAULT_ACCESSIBILITY_CONFIG;
        /**
         * Output to emit an event when an image is changed.
         */
        this.show = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit an event when the current image is the first one.
         */
        this.firstImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit an event when the current image is the last one.
         */
        this.lastImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Enum of type `Action` that represents a mouse click on a button.
         * Declared here to be used inside the template.
         */
        this.clickAction = Action.CLICK;
        /**
         * Enum of type `Action` that represents a keyboard action.
         * Declared here to be used inside the template.
         */
        this.keyboardAction = Action.KEYBOARD;
        /**
         * Boolean that it's true when you are watching the first image (currently visible).
         * False by default
         */
        this.isFirstImage = false;
        /**
         * Boolean that it's true when you are watching the last image (currently visible).
         * False by default
         */
        this.isLastImage = false;
        /**
         * Object of type `PlainGalleryConfig` to force ks-modal-gallery to hide plain-gallery
         */
        this.plainGalleryHidden = {
            strategy: PlainGalleryStrategy.CUSTOM,
            layout: new AdvancedLayout(-1, true)
        };
        /**
         * Subject to play the carousel.
         */
        this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /**
         * Subject to stop the carousel.
         */
        this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /**
         * Private object without type to define all swipe actions used by hammerjs.
         */
        this.SWIPE_ACTION = {
            LEFT: 'swipeleft',
            RIGHT: 'swiperight',
            UP: 'swipeup',
            DOWN: 'swipedown'
        };
    }
    /**
     * Listener to stop the gallery when the mouse pointer is over the current image.
     * @return {?}
     */
    onMouseEnter() {
        if (!this.configPlay.pauseOnHover) {
            return;
        }
        this.stopCarousel();
    }
    /**
     * Listener to play the gallery when the mouse pointer leave the current image.
     * @return {?}
     */
    onMouseLeave() {
        if (!this.configPlay.pauseOnHover || !this.configPlay.autoPlay) {
            return;
        }
        this.playCarousel();
    }
    /**
     * Listener to navigate carousel images with keyboard (left).
     * @return {?}
     */
    onKeyDownLeft() {
        if (!this.configCarousel.keyboardEnable) {
            return;
        }
        this.prevImage();
    }
    /**
     * Listener to navigate carousel images with keyboard (right).
     * @return {?}
     */
    onKeyDownLRight() {
        if (!this.configCarousel.keyboardEnable) {
            return;
        }
        this.nextImage();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // handle changes of dotsConfig
        /** @type {?} */
        const configDotsChange = changes.dotsConfig;
        if (configDotsChange && configDotsChange.currentValue !== configDotsChange.previousValue) {
            this.configDots = configDotsChange.currentValue;
        }
        // handle changes of carouselConfig
        /** @type {?} */
        const carouselConfigChange = changes.carouselConfig;
        if (carouselConfigChange && carouselConfigChange.currentValue !== carouselConfigChange.previousValue) {
            this.configCarousel = carouselConfigChange.currentValue;
        }
        // handle changes of playConfig starting/stopping the carousel accordingly
        /** @type {?} */
        const playConfigChange = changes.playConfig;
        if (playConfigChange) {
            /** @type {?} */
            const playConfigChangePrev = playConfigChange.previousValue;
            /** @type {?} */
            const playConfigChangeCurr = playConfigChange.currentValue;
            if (playConfigChangePrev !== playConfigChangeCurr) {
                this.configPlay = playConfigChange.currentValue;
                // if autoplay is enabled, and this is not the
                // first change (to prevent multiple starts at the beginning)
                if (playConfigChangeCurr.autoPlay && !playConfigChange.isFirstChange()) {
                    this.start$.next();
                }
                else {
                    this.stopCarousel();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentImage = this.images[0];
        /** @type {?} */
        const defaultDescriptionStyle = {
            bgColor: 'rgba(0, 0, 0, .5)',
            textColor: 'white',
            marginTop: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
            marginRight: '0px'
        };
        /** @type {?} */
        const defaultDescription = {
            strategy: DescriptionStrategy.ALWAYS_HIDDEN,
            imageText: 'Image ',
            numberSeparator: '/',
            beforeTextDescription: ' - ',
            style: defaultDescriptionStyle
        };
        /** @type {?} */
        const defaultCurrentImageConfig = {
            description: defaultDescription,
            invertSwipe: false
        };
        /** @type {?} */
        const defaultCurrentCarouselConfig = {
            maxWidth: '100%',
            maxHeight: '400px',
            showArrows: true,
            objectFit: 'cover',
            keyboardEnable: true,
            modalGalleryEnable: false,
            legacyIE11Mode: false
        };
        /** @type {?} */
        const defaultCurrentCarouselPlay = {
            autoPlay: true,
            interval: 5000,
            pauseOnHover: true
        };
        this.configCurrentImageCarousel = Object.assign({}, defaultCurrentImageConfig, this.carouselImageConfig);
        this.configCurrentImageCarousel.description = Object.assign({}, defaultDescription, this.configCurrentImageCarousel.description);
        /** @type {?} */
        const defaultConfig = { visible: true };
        this.configDots = Object.assign(defaultConfig, this.dotsConfig);
        this.configCarousel = Object.assign({}, defaultCurrentCarouselConfig, this.carouselConfig);
        this.configPlay = Object.assign({}, defaultCurrentCarouselPlay, this.playConfig);
        // check values
        if (this.configPlay.interval <= 0) {
            throw new Error(`Carousel's interval must be a number >= 0`);
        }
        this.manageSlideConfig();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // interval doesn't play well with SSR and protractor,
        // so we should run it in the browser and outside Angular
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this._platformId)) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.start$
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((/**
                 * @return {?}
                 */
                () => this.configPlay.interval)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((/**
                 * @param {?} interval
                 * @return {?}
                 */
                interval => interval > 0)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((/**
                 * @param {?} interval
                 * @return {?}
                 */
                interval => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(interval).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.stop$)))))
                    .subscribe((/**
                 * @return {?}
                 */
                () => this._ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    if (this.configPlay.autoPlay) {
                        this.nextImage();
                    }
                    this.ref.markForCheck();
                }))));
                this.start$.next();
            }));
        }
    }
    /**
     * Method used in template to sanitize an url when you need legacyIE11Mode.
     * In this way you can set an url as background of a div.
     * @param {?} unsafeStyle is a string and represents the url to sanitize.
     * @return {?} a SafeStyle object that can be used in template without problems.
     */
    sanitizeUrlBgStyle(unsafeStyle) {
        // Method used only to sanitize background-image style before add it to background property when legacyIE11Mode is enabled
        return this.sanitizer.bypassSecurityTrustStyle('url(' + unsafeStyle + ')');
    }
    /**
     * Method called when a dot is clicked and used to update the current image.
     * @param {?} index
     * @return {?}
     */
    onClickDot(index) {
        this.changeCurrentImage(this.images[index], Action.NORMAL);
    }
    /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * @param {?} direction
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    onNavigationEvent(direction, event, action = Action.NORMAL) {
        /** @type {?} */
        const result = super.handleNavigationEvent(direction, event);
        if (result === NEXT) {
            this.nextImage(action);
        }
        else if (result === PREV) {
            this.prevImage(action);
        }
    }
    /**
     * Method triggered when you click on the current image.
     * Also, if modalGalleryEnable is true, you can open the modal-gallery.
     * @return {?}
     */
    onClickCurrentImage() {
        if (!this.configCarousel.modalGalleryEnable) {
            return;
        }
        /** @type {?} */
        const index = getIndex(this.currentImage, this.images);
        this.galleryService.openGallery(this.id, index);
    }
    /**
     * Method to get the image description based on input params.
     * If you provide a full description this will be the visible description, otherwise,
     * it will be built using the `Description` object, concatenating its fields.
     * @throws an Error if description isn't available
     * @param {?=} image
     * @return {?} String description of the image (or the current image if not provided)
     */
    getDescriptionToDisplay(image = this.currentImage) {
        if (!this.configCurrentImageCarousel || !this.configCurrentImageCarousel.description) {
            throw new Error('Description input must be a valid object implementing the Description interface');
        }
        /** @type {?} */
        const imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === '';
        switch (this.configCurrentImageCarousel.description.strategy) {
            case DescriptionStrategy.HIDE_IF_EMPTY:
                return imageWithoutDescription ? '' : image.modal.description + '';
            case DescriptionStrategy.ALWAYS_HIDDEN:
                return '';
            default:
                // ----------- DescriptionStrategy.ALWAYS_VISIBLE -----------------
                return this.buildTextDescription(image, imageWithoutDescription);
        }
    }
    /**
     * Method used by Hammerjs to support touch gestures (you can also invert the swipe direction with configCurrentImage.invertSwipe).
     * @param {?=} action String that represent the direction of the swipe action. 'swiperight' by default.
     * @return {?}
     */
    swipe(action = this.SWIPE_ACTION.RIGHT) {
        switch (action) {
            case this.SWIPE_ACTION.RIGHT:
                if (this.configCurrentImageCarousel.invertSwipe) {
                    this.prevImage(Action.SWIPE);
                }
                else {
                    this.nextImage(Action.SWIPE);
                }
                break;
            case this.SWIPE_ACTION.LEFT:
                if (this.configCurrentImageCarousel.invertSwipe) {
                    this.nextImage(Action.SWIPE);
                }
                else {
                    this.prevImage(Action.SWIPE);
                }
                break;
            // case this.SWIPE_ACTION.UP:
            //   break;
            // case this.SWIPE_ACTION.DOWN:
            //   break;
        }
    }
    /**
     * Method to go back to the previous image.
     * @param {?=} action Enum of type `Action` that represents the source
     *  action that moved back to the previous image. `Action.NORMAL` by default.
     * @return {?}
     */
    prevImage(action = Action.NORMAL) {
        // check if prevImage should be blocked
        if (this.isPreventSliding(0)) {
            return;
        }
        this.changeCurrentImage(this.getPrevImage(), action);
        this.manageSlideConfig();
        this.start$.next();
    }
    /**
     * Method to go back to the previous image.
     * @param {?=} action Enum of type `Action` that represents the source
     *  action that moved to the next image. `Action.NORMAL` by default.
     * @return {?}
     */
    nextImage(action = Action.NORMAL) {
        // check if nextImage should be blocked
        if (this.isPreventSliding(this.images.length - 1)) {
            return;
        }
        this.changeCurrentImage(this.getNextImage(), action);
        this.manageSlideConfig();
        this.start$.next();
    }
    /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    trackById(index, item) {
        return item.id;
    }
    /**
     * Method called when an image preview is clicked and used to update the current image.
     * @param {?} event an ImageEvent object with the relative action and the index of the clicked preview.
     * @return {?}
     */
    onClickPreview(event) {
        /** @type {?} */
        const imageFound = this.images[(/** @type {?} */ (event.result))];
        if (!!imageFound) {
            this.manageSlideConfig();
            this.changeCurrentImage((/** @type {?} */ (imageFound)), event.action);
        }
    }
    /**
     * Method to play carousel.
     * @return {?}
     */
    playCarousel() {
        this.start$.next();
    }
    /**
     * Stops the carousel from cycling through items.
     * @return {?}
     */
    stopCarousel() {
        this.stop$.next();
    }
    // TODO remove this because duplicated
    /**
     * Method to get `alt attribute`.
     * `alt` specifies an alternate text for an image, if the image cannot be displayed.
     * @param {?=} image
     * @return {?} String alt description of the image (or the current image if not provided)
     */
    getAltDescriptionByImage(image = this.currentImage) {
        if (!image) {
            return '';
        }
        return image.modal && image.modal.description ? image.modal.description : `Image ${getIndex(image, this.images) + 1}`;
    }
    // TODO remove this because duplicated
    /**
     * Method to get the title attributes based on descriptions.
     * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
     * it prevents an empty string as title.
     * @throws an Error if description isn't available
     * @param {?=} image
     * @return {?} String title of the image based on descriptions
     */
    getTitleToDisplay(image = this.currentImage) {
        if (!this.configCurrentImageCarousel || !this.configCurrentImageCarousel.description) {
            throw new Error('Description input must be a valid object implementing the Description interface');
        }
        /** @type {?} */
        const imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === '';
        /** @type {?} */
        const description = this.buildTextDescription(image, imageWithoutDescription);
        return description;
    }
    /**
       * Method to reset carousel (force image with index 0 to be the current image and re-init also previews)
       */
    // temporary removed because never tested
    // reset() {
    //   if (this.configPlay && this.configPlay.autoPlay) {
    //     this.stopCarousel();
    //   }
    //   this.currentImage = this.images[0];
    //   this.handleBoundaries(0);
    //   if (this.configPlay && this.configPlay.autoPlay) {
    //     this.playCarousel();
    //   }
    //   this.ref.markForCheck();
    // }
    /**
     * Method to cleanup resources. In fact, this will stop the carousel.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this.stopCarousel();
    }
    /**
     * Method to change the current image, receiving the new image as input the relative action.
     * @private
     * @param {?} image an Image object that represents the new image to set as current.
     * @param {?} action Enum of type `Action` that represents the source action that triggered the change.
     * @return {?}
     */
    changeCurrentImage(image, action) {
        this.currentImage = image;
        /** @type {?} */
        const index = getIndex(image, this.images);
        // emit first/last event based on newIndex value
        this.emitBoundaryEvent(action, index);
        // emit current visible image index
        this.show.emit(new ImageModalEvent(action, index + 1));
    }
    /**
     * Private method to get the next index.
     * This is necessary because at the end, when you call next again, you'll go to the first image.
     * That happens because all modal images are shown like in a circle.
     * @private
     * @return {?}
     */
    getNextImage() {
        /** @type {?} */
        const currentIndex = getIndex(this.currentImage, this.images);
        /** @type {?} */
        let newIndex = 0;
        if (currentIndex >= 0 && currentIndex < this.images.length - 1) {
            newIndex = currentIndex + 1;
        }
        else {
            newIndex = 0; // start from the first index
        }
        return this.images[newIndex];
    }
    /**
     * Private method to get the previous index.
     * This is necessary because at index 0, when you call prev again, you'll go to the last image.
     * That happens because all modal images are shown like in a circle.
     * @private
     * @return {?}
     */
    getPrevImage() {
        /** @type {?} */
        const currentIndex = getIndex(this.currentImage, this.images);
        /** @type {?} */
        let newIndex = 0;
        if (currentIndex > 0 && currentIndex <= this.images.length - 1) {
            newIndex = currentIndex - 1;
        }
        else {
            newIndex = this.images.length - 1; // start from the last index
        }
        return this.images[newIndex];
    }
    /**
     * Private method to build a text description.
     * This is used also to create titles.
     * @private
     * @param {?} image
     * @param {?} imageWithoutDescription
     * @return {?} String description built concatenating image fields with a specific logic.
     */
    buildTextDescription(image, imageWithoutDescription) {
        if (!this.configCurrentImageCarousel || !this.configCurrentImageCarousel.description) {
            throw new Error('Description input must be a valid object implementing the Description interface');
        }
        // If customFullDescription use it, otherwise proceed to build a description
        if (this.configCurrentImageCarousel.description.customFullDescription && this.configCurrentImageCarousel.description.customFullDescription !== '') {
            return this.configCurrentImageCarousel.description.customFullDescription;
        }
        /** @type {?} */
        const currentIndex = getIndex(image, this.images);
        // If the current image hasn't a description,
        // prevent to write the ' - ' (or this.description.beforeTextDescription)
        /** @type {?} */
        const prevDescription = this.configCurrentImageCarousel.description.imageText ? this.configCurrentImageCarousel.description.imageText : '';
        /** @type {?} */
        const midSeparator = this.configCurrentImageCarousel.description.numberSeparator
            ? this.configCurrentImageCarousel.description.numberSeparator
            : '';
        /** @type {?} */
        const middleDescription = currentIndex + 1 + midSeparator + this.images.length;
        if (imageWithoutDescription) {
            return prevDescription + middleDescription;
        }
        /** @type {?} */
        const currImgDescription = image.modal && image.modal.description ? image.modal.description : '';
        /** @type {?} */
        const endDescription = this.configCurrentImageCarousel.description.beforeTextDescription + currImgDescription;
        return prevDescription + middleDescription + endDescription;
    }
    /**
     * Private method to update both `isFirstImage` and `isLastImage` based on
     * the index of the current image.
     * @private
     * @param {?} currentIndex
     * @return {?}
     */
    handleBoundaries(currentIndex) {
        if (this.images.length === 1) {
            this.isFirstImage = true;
            this.isLastImage = true;
            return;
        }
        switch (currentIndex) {
            case 0:
                // execute this only if infinite sliding is disabled
                this.isFirstImage = true;
                this.isLastImage = false;
                break;
            case this.images.length - 1:
                // execute this only if infinite sliding is disabled
                this.isFirstImage = false;
                this.isLastImage = true;
                break;
            default:
                this.isFirstImage = false;
                this.isLastImage = false;
                break;
        }
    }
    /**
     * Private method to manage boundary arrows and sliding.
     * This is based on the slideConfig input to enable/disable 'infinite sliding'.
     * @private
     * @return {?}
     */
    manageSlideConfig() {
        /** @type {?} */
        let index;
        try {
            index = getIndex(this.currentImage, this.images);
        }
        catch (err) {
            console.error('Cannot get the current image index in current-image');
            throw err;
        }
        if (this.infinite === true) {
            // enable infinite sliding
            this.isFirstImage = false;
            this.isLastImage = false;
        }
        else {
            this.handleBoundaries(index);
        }
    }
    /**
     * Private method to emit events when either the last or the first image are visible.
     * @private
     * @param {?} action Enum of type Action that represents the source of the event that changed the
     *  current image to the first one or the last one.
     * @param {?} indexToCheck is the index number of the image (the first or the last one).
     * @return {?}
     */
    emitBoundaryEvent(action, indexToCheck) {
        // to emit first/last event
        switch (indexToCheck) {
            case 0:
                this.firstImage.emit(new ImageModalEvent(action, true));
                break;
            case this.images.length - 1:
                this.lastImage.emit(new ImageModalEvent(action, true));
                break;
        }
    }
    /**
     * Private method to check if next/prev actions should be blocked.
     * It checks if slideConfig.infinite === false and if the image index is equals to the input parameter.
     * If yes, it returns true to say that sliding should be blocked, otherwise not.
     * @private
     * @param {?} boundaryIndex
     * @return {?} boolean true if slideConfig.infinite === false and the current index is
     *  either the first or the last one.
     */
    isPreventSliding(boundaryIndex) {
        return !this.infinite && getIndex(this.currentImage, this.images) === boundaryIndex;
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GalleryService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer)); };
CarouselComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["ks-carousel"]], hostVars: 1, hostBindings: function CarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CarouselComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("keydown.arrowLeft", function CarouselComponent_keydown_arrowLeft_HostBindingHandler() { return ctx.onKeyDownLeft(); })("keydown.arrowRight", function CarouselComponent_keydown_arrowRight_HostBindingHandler() { return ctx.onKeyDownLRight(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel);
    } }, inputs: { dotsConfig: "dotsConfig", infinite: "infinite", accessibilityConfig: "accessibilityConfig", id: "id", images: "images", carouselConfig: "carouselConfig", playConfig: "playConfig", carouselImageConfig: "carouselImageConfig", previewConfig: "previewConfig" }, outputs: { show: "show", firstImage: "firstImage", lastImage: "lastImage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c6, decls: 8, vars: 15, consts: [["id", "carousel-container", "ksMaxSize", "", 3, "title", "sizeConfig"], ["content", ""], ["class", "current-figure", "ksSize", "", 3, "sizeConfig", 4, "ngIf", "ngIfElse"], ["legacyMode", ""], [3, "images", "currentImage", "carouselConfig", "previewConfig", "accessibilityConfig", "clickPreview"], [3, "id", "modalImages", "plainGalleryConfig"], ["ksSize", "", 1, "current-figure", 3, "sizeConfig"], ["class", "nav-left", "role", "button", 3, "tabindex", "click", "keyup", 4, "ngIf"], [4, "ngTemplateOutlet"], ["id", "current-image", "ksMaxSize", "", "role", "img", 3, "sizeConfig", "src", "title", "alt", "tabindex", "click", "swipeleft", "swiperight"], ["class", "description", "ksDescription", "", 3, "description", "innerHTML", 4, "ngIf"], ["class", "nav-right", "role", "button", 3, "tabindex", "click", "keyup", 4, "ngIf"], ["id", "dots"], [3, "currentImage", "dotsConfig", "accessibilityConfig", "images", "clickDot"], ["role", "button", 1, "nav-left", 3, "tabindex", "click", "keyup"], ["aria-hidden", "true", 3, "title"], ["ksDescription", "", 1, "description", 3, "description", "innerHTML"], ["role", "button", 1, "nav-right", 3, "tabindex", "click", "keyup"], ["id", "current-image-legacy", "ksSize", "", "ksMaxSize", "", "role", "img", 3, "sizeConfig", "title", "tabindex", "click", "swipeleft", "swiperight"], ["class", "description-ie11", "ksDescription", "", 3, "description", "innerHTML", 4, "ngIf"], ["id", "dots-ie11"], ["ksDescription", "", 1, "description-ie11", 3, "description", "innerHTML"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_figure_3_Template, 8, 22, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_ng_template_4_Template, 8, 32, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ks-carousel-previews", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickPreview", function CarouselComponent_Template_ks_carousel_previews_clickPreview_6_listener($event) { return ctx.onClickPreview($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ks-modal-gallery", 5);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.accessibilityConfig.carouselContainerTitle)("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c5, ctx.configCarousel == null ? null : ctx.configCarousel.maxWidth));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig.carouselContainerAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.configCarousel == null ? null : ctx.configCarousel.legacyIE11Mode) === false)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images)("currentImage", ctx.currentImage)("carouselConfig", ctx.configCarousel)("previewConfig", ctx.previewConfig)("accessibilityConfig", ctx.accessibilityConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("modalImages", ctx.images)("plainGalleryConfig", ctx.plainGalleryHidden);
    } }, directives: function () { return [MaxSizeDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, CarouselPreviewsComponent, ModalGalleryComponent, SizeDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, DotsComponent, DescriptionDirective]; }, styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}#carousel-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%]{-webkit-animation:.8s fadein-visible;animation:.8s fadein-visible;text-align:center;margin:0;position:relative}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%], #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{-webkit-animation:1s animatezoom;animation:1s animatezoom;cursor:pointer;transition:.5s;top:50%;position:absolute}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover, #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover{transform:scale(1.1)}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{left:5px}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{right:5px}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > #current-image[_ngcontent-%COMP%], #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > #current-image-legacy[_ngcontent-%COMP%]{width:100%;height:auto;display:block}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > #current-image-legacy[_ngcontent-%COMP%] > .description-ie11[_ngcontent-%COMP%]{bottom:0;width:100%;position:absolute;padding-top:10px;padding-bottom:10px}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > figcaption[_ngcontent-%COMP%]{padding:10px;position:absolute;bottom:0;left:0;right:0}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > figcaption[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-weight:700;text-align:center}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > #dots[_ngcontent-%COMP%], #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > #dots-ie11[_ngcontent-%COMP%]{position:absolute;bottom:20px;width:100%}", _c7], changeDetection: 0 });
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: GalleryService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer }
];
CarouselComponent.propDecorators = {
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['attr.aria-label',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    carouselConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    playConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    carouselImageConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dotsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    previewConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    firstImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    lastImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mouseleave',] }],
    onKeyDownLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keydown.arrowLeft',] }],
    onKeyDownLRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keydown.arrowRight',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ks-carousel',
                template: "<main id=\"carousel-container\"\n      [attr.aria-label]=\"accessibilityConfig.carouselContainerAriaLabel\"\n      [title]=\"accessibilityConfig.carouselContainerTitle\"\n      ksMaxSize [sizeConfig]=\"{maxWidth: configCarousel?.maxWidth,\n                               maxHeight: ''}\">\n\n\n  <!-- Workaround to support 2 ng-content in the same template in 2 ngIf (https://github.com/angular/angular/issues/22972) -->\n  <ng-template #content><ng-content></ng-content></ng-template>\n\n  <!-- Normal figure used by all browsers except for IE11, because\n    it doesn't support object-fit cover.-->\n  <figure class=\"current-figure\" *ngIf=\"configCarousel?.legacyIE11Mode === false; else legacyMode\"\n          ksSize [sizeConfig]=\"{width: configCarousel?.maxWidth,\n                                height: ''}\">\n\n    <a class=\"nav-left\" *ngIf=\"configCarousel?.showArrows\"\n       [attr.aria-label]=\"accessibilityConfig.carouselPrevImageAriaLabel\"\n       [tabindex]=\"isLastImage && !infinite ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('left', $event, clickAction)\" (keyup)=\"onNavigationEvent('left', $event, keyboardAction)\">\n      <div class=\"inside {{(isFirstImage && !infinite) || !configCarousel.showArrows ? 'empty-arrow-image' : 'left-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig.carouselPrevImageTitle\"></div>\n    </a>\n\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n\n    <img id=\"current-image\"\n         [style.object-fit]=\"configCarousel?.objectFit\"\n         ksMaxSize [sizeConfig]=\"{maxWidth: configCarousel?.maxWidth,\n                                  maxHeight: configCarousel?.maxHeight}\"\n         [src]=\"currentImage.modal.img\"\n         [attr.aria-label]=\"currentImage.modal.ariaLabel\"\n         [title]=\"currentImage.modal.title ? currentImage.modal.title : getTitleToDisplay()\"\n         alt=\"{{currentImage.modal.alt ? currentImage.modal.alt : getAltDescriptionByImage()}}\"\n         [tabindex]=\"0\" role=\"img\"\n         (click)=\"onClickCurrentImage()\"\n         (swipeleft)=\"swipe($event.type)\"\n         (swiperight)=\"swipe($event.type)\"/>\n\n    <figcaption *ngIf=\"getDescriptionToDisplay() !== ''\"\n                class=\"description\"\n                ksDescription [description]=\"configCurrentImageCarousel?.description\"\n                [innerHTML]=\"getDescriptionToDisplay()\"></figcaption>\n\n    <a class=\"nav-right\" *ngIf=\"configCarousel?.showArrows\"\n       [attr.aria-label]=\"accessibilityConfig.carouselNextImageAriaLabel\"\n       [tabindex]=\"isLastImage && !infinite ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('right', $event, clickAction)\" (keyup)=\"onNavigationEvent('right', $event, keyboardAction)\">\n      <div class=\"inside {{(isLastImage && !infinite) || !configCarousel.showArrows ? 'empty-arrow-image' : 'right-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig.carouselNextImageTitle\"></div>\n    </a>\n\n    <div id=\"dots\">\n      <ks-dots [currentImage]=\"currentImage\"\n               [dotsConfig]=\"configDots\"\n               [accessibilityConfig]=\"accessibilityConfig\"\n               [images]=\"images\"\n               (clickDot)=\"onClickDot($event)\"></ks-dots>\n    </div>\n\n  </figure>\n\n  <!-- Legacy mode to support img cover also on IE11,\n    because it doesn't support natively object-fit cover. -->\n  <ng-template #legacyMode>\n    <div class=\"current-figure\"\n         ksSize [sizeConfig]=\"{width: configCarousel?.maxWidth,\n                               height: ''}\">\n\n      <a class=\"nav-left\" *ngIf=\"configCarousel?.showArrows\"\n         [attr.aria-label]=\"accessibilityConfig.carouselPrevImageAriaLabel\"\n         [tabindex]=\"isLastImage && !infinite ? -1 : 0\" role=\"button\"\n         (click)=\"onNavigationEvent('left', $event, clickAction)\" (keyup)=\"onNavigationEvent('left', $event, keyboardAction)\">\n        <div class=\"inside {{(isFirstImage && !infinite) || !configCarousel.showArrows ? 'empty-arrow-image' : 'left-arrow-image'}}\"\n             aria-hidden=\"true\"\n             [title]=\"accessibilityConfig.carouselPrevImageTitle\"></div>\n      </a>\n\n      <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n\n      <div id=\"current-image-legacy\"\n           [style.background-color]=\"'transparent'\"\n           [style.background-image]=\"sanitizeUrlBgStyle(currentImage.modal.img + '')\"\n           [style.background-position]=\"'center center'\"\n           [style.background-size]=\"'cover'\"\n           [style.background-repeat]=\"'no-repeat'\"\n           [style.background-attachment]=\"'scroll'\"\n           ksSize [sizeConfig]=\"{width: '100%',\n                                 height: configCarousel?.maxHeight}\"\n           ksMaxSize [sizeConfig]=\"{maxWidth: configCarousel?.maxWidth}\"\n           [attr.aria-label]=\"currentImage.modal.ariaLabel\"\n           [title]=\"currentImage.modal.title ? currentImage.modal.title : getTitleToDisplay()\"\n           [tabindex]=\"0\" role=\"img\"\n           (click)=\"onClickCurrentImage()\"\n           (swipeleft)=\"swipe($event.type)\"\n           (swiperight)=\"swipe($event.type)\">\n\n        <div *ngIf=\"getDescriptionToDisplay() !== ''\"\n             class=\"description-ie11\"\n             ksDescription [description]=\"configCurrentImageCarousel?.description\"\n             [innerHTML]=\"getDescriptionToDisplay()\"></div>\n      </div>\n\n      <a class=\"nav-right\" *ngIf=\"configCarousel?.showArrows\"\n         [attr.aria-label]=\"accessibilityConfig.carouselNextImageAriaLabel\"\n         [tabindex]=\"isLastImage && !infinite ? -1 : 0\" role=\"button\"\n         (click)=\"onNavigationEvent('right', $event, clickAction)\" (keyup)=\"onNavigationEvent('right', $event, keyboardAction)\">\n        <div class=\"inside {{(isLastImage && !infinite) || !configCarousel.showArrows ? 'empty-arrow-image' : 'right-arrow-image'}}\"\n             aria-hidden=\"true\"\n             [title]=\"accessibilityConfig.carouselNextImageTitle\"></div>\n      </a>\n\n      <div id=\"dots-ie11\">\n        <ks-dots [currentImage]=\"currentImage\"\n                 [dotsConfig]=\"configDots\"\n                 [accessibilityConfig]=\"accessibilityConfig\"\n                 [images]=\"images\"\n                 (clickDot)=\"onClickDot($event)\"></ks-dots>\n      </div>\n\n    </div>\n  </ng-template>\n\n</main>\n\n<ks-carousel-previews [images]=\"images\"\n                      [currentImage]=\"currentImage\"\n                      [carouselConfig]=\"configCarousel\"\n                      [previewConfig]=\"previewConfig\"\n                      [accessibilityConfig]=\"accessibilityConfig\"\n                      (clickPreview)=\"onClickPreview($event)\"></ks-carousel-previews>\n\n<ks-modal-gallery [id]=\"id\" [modalImages]=\"images\" [plainGalleryConfig]=\"plainGalleryHidden\"></ks-modal-gallery>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [":host{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}#carousel-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%}#carousel-container>.current-figure{-webkit-animation:.8s fadein-visible;animation:.8s fadein-visible;text-align:center;margin:0;position:relative}#carousel-container>.current-figure .nav,#carousel-container>.current-figure>.nav-left,#carousel-container>.current-figure>.nav-right{-webkit-animation:1s animatezoom;animation:1s animatezoom;cursor:pointer;transition:.5s;top:50%;position:absolute}#carousel-container>.current-figure .nav:hover,#carousel-container>.current-figure>.nav-left:hover,#carousel-container>.current-figure>.nav-right:hover{transform:scale(1.1)}#carousel-container>.current-figure>.nav-left{left:5px}#carousel-container>.current-figure>.nav-right{right:5px}#carousel-container>.current-figure>#current-image,#carousel-container>.current-figure>#current-image-legacy{width:100%;height:auto;display:block}#carousel-container>.current-figure>#current-image-legacy>.description-ie11{bottom:0;width:100%;position:absolute;padding-top:10px;padding-bottom:10px}#carousel-container>.current-figure>figcaption{padding:10px;position:absolute;bottom:0;left:0;right:0}#carousel-container>.current-figure>figcaption .description{font-weight:700;text-align:center}#carousel-container>.current-figure>#dots,#carousel-container>.current-figure>#dots-ie11{position:absolute;bottom:20px;width:100%}", ".arrow-image,.empty-arrow-image,.left-arrow-image,.right-arrow-image{width:30px;height:30px;background-size:30px}.empty-arrow-image{background:#000;opacity:0}.left-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.left-arrow-image:hover{transform:scale(1.2)}.right-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.right-arrow-image:hover{transform:scale(1.2)}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: GalleryService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer }]; }, { ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['attr.aria-label']
        }], dotsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], infinite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], firstImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], lastImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * Listener to stop the gallery when the mouse pointer is over the current image.
     * @return {?}
     */
    onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseenter']
        }], 
    /**
     * Listener to play the gallery when the mouse pointer leave the current image.
     * @return {?}
     */
    onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseleave']
        }], 
    /**
     * Listener to navigate carousel images with keyboard (left).
     * @return {?}
     */
    onKeyDownLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['keydown.arrowLeft']
        }], 
    /**
     * Listener to navigate carousel images with keyboard (right).
     * @return {?}
     */
    onKeyDownLRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['keydown.arrowRight']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], carouselConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], playConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], carouselImageConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], previewConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with image previews for carousel
 */
class CarouselPreviewsComponent extends AccessibleComponent {
    /**
     * @param {?} ref
     * @param {?} breakpointObserver
     * @param {?} sanitizer
     */
    constructor(ref, breakpointObserver, sanitizer) {
        super();
        this.ref = ref;
        this.breakpointObserver = breakpointObserver;
        this.sanitizer = sanitizer;
        /**
         * Variable to change the max-width of the host component
         */
        this.hostMaxWidth = '100%';
        /**
         * Variable to set aria-label of the host component
         */
        this.ariaLabel = `Carousel previews`;
        /**
         * Output to emit the clicked preview. The payload contains the `InternalLibImage` associated to the clicked preview.
         */
        this.clickPreview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Enum of type `Action` that represents a mouse click on a button.
         * Declared here to be used inside the template.
         */
        this.clickAction = Action.CLICK;
        /**
         * Enum of type `Action` that represents a keyboard action.
         * Declared here to be used inside the template.
         */
        this.keyboardAction = Action.KEYBOARD;
        /**
         * Array of `InternalLibImage` exposed to the template. This field is initialized
         * applying transformations, default values and so on to the input of the same type.
         */
        this.previews = [];
        /**
         * Private property with the default max height of previews.
         */
        this.defaultMaxHeight = '200px';
        // listen for width changes and update preview heights accordingly
        this.breakpointSubscription = breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XLarge])
            .subscribe((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            if (!this.configPreview) {
                return;
            }
            if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XSmall]) {
                this.updateHeight(this.configPreview.breakpoints.xSmall);
            }
            else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Small]) {
                this.updateHeight(this.configPreview.breakpoints.small);
            }
            else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Medium]) {
                this.updateHeight(this.configPreview.breakpoints.medium);
            }
            else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Large]) {
                this.updateHeight(this.configPreview.breakpoints.large);
            }
            else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XLarge]) {
                this.updateHeight(this.configPreview.breakpoints.xLarge);
            }
        }));
    }
    /**
     * Method to update the height of previews, passing the desired height as input.
     * @private
     * @param {?} configBreakpointHeight is a number that represent the desired height to set.
     * @return {?}
     */
    updateHeight(configBreakpointHeight) {
        /** @type {?} */
        const newConfigPreview = Object.assign({}, this.configPreview);
        if (this.previewConfig && this.previewConfig.maxHeight) {
            /** @type {?} */
            const heightNum = +this.previewConfig.maxHeight.replace('px', '').replace('%', '');
            newConfigPreview.maxHeight = Math.min(configBreakpointHeight, heightNum) + 'px';
        }
        else {
            /** @type {?} */
            const heightNum = +this.defaultMaxHeight.replace('px', '').replace('%', '');
            newConfigPreview.maxHeight = Math.min(configBreakpointHeight, heightNum) + 'px';
        }
        this.configPreview = newConfigPreview;
        this.ref.markForCheck();
    }
    /**
     * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
     * init the `previews` array.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const defaultBreakpoints = { xSmall: 100, small: 100, medium: 150, large: 200, xLarge: 200 };
        /** @type {?} */
        const defaultPreviewConfig = {
            visible: true,
            number: 4,
            arrows: true,
            clickable: true,
            width: 100 / 4 + '%',
            maxHeight: this.defaultMaxHeight,
            breakpoints: defaultBreakpoints
        };
        this.configPreview = Object.assign({}, defaultPreviewConfig, this.previewConfig);
        // if number is <= 0 reset to default
        if (this.configPreview && this.configPreview.number <= 0) {
            this.configPreview.number = defaultPreviewConfig.number;
        }
        // Init preview image width based on the number of previews in PreviewConfig
        // Don't move this line above, because I need to be sure that both configPreview.number
        // and configPreview.size are initialized
        this.configPreview.width = 100 / this.configPreview.number + '%';
        // change the max-width of this component if there is a specified width !== 100% in carouselConfig
        if (this.carouselConfig && this.carouselConfig.maxWidth !== '100%') {
            this.hostMaxWidth = this.carouselConfig.maxWidth;
        }
        // init previews based on currentImage and the full array of images
        this.initPreviews(this.currentImage, this.images);
        // apply custom height based on responsive breakpoints
        // This is required, because the breakpointSubscription is not triggered at creation,
        // but only when the width changes
        /** @type {?} */
        const isXsmallScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XSmall);
        /** @type {?} */
        const isSmallScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Small);
        /** @type {?} */
        const isMediumScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Medium);
        /** @type {?} */
        const isLargeScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.Large);
        /** @type {?} */
        const isxLargeScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.Breakpoints.XLarge);
        if (isXsmallScreen) {
            this.updateHeight(this.configPreview.breakpoints.xSmall);
        }
        else if (isSmallScreen) {
            this.updateHeight(this.configPreview.breakpoints.small);
        }
        else if (isMediumScreen) {
            this.updateHeight(this.configPreview.breakpoints.medium);
        }
        else if (isLargeScreen) {
            this.updateHeight(this.configPreview.breakpoints.large);
        }
        else if (isxLargeScreen) {
            this.updateHeight(this.configPreview.breakpoints.xLarge);
        }
    }
    /**
     * Method to check if an image is active (i.e. a preview image).
     * @param {?} preview
     * @return {?} boolean true if is active, false otherwise
     */
    isActive(preview) {
        if (!preview || !this.currentImage) {
            return false;
        }
        return preview.id === this.currentImage.id;
    }
    /**
     * Method ´ngOnChanges´ to update `previews` array.
     * Also, both `start` and `end` local variables will be updated accordingly.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const simpleChange = changes.currentImage;
        if (!simpleChange) {
            return;
        }
        /** @type {?} */
        const prev = simpleChange.previousValue;
        /** @type {?} */
        const current = simpleChange.currentValue;
        if (current && changes.images && changes.images.previousValue && changes.images.currentValue) {
            // I'm in this if statement, if input images are changed (for instance, because I removed one of them with the 'delete button',
            // or because users changed the images array while modal gallery is still open).
            // In this case, I have to re-init previews, because the input array of images is changed.
            this.initPreviews(current, changes.images.currentValue);
        }
        if (prev && current && prev.id !== current.id) {
            // to manage infinite sliding I have to reset both `start` and `end` at the beginning
            // to show again previews from the first image.
            // This happens when you navigate over the last image to return to the first one
            /** @type {?} */
            let prevIndex;
            /** @type {?} */
            let currentIndex;
            try {
                prevIndex = getIndex(prev, this.images);
                currentIndex = getIndex(current, this.images);
            }
            catch (err) {
                console.error('Cannot get previous and current image indexes in previews');
                throw err;
            }
            // apply a formula to get a values to be used to decide if go next, return back or stay without doing anything
            /** @type {?} */
            const calc = Math.floor((this.end - this.start) / 2) + this.start;
            if (prevIndex === this.images.length - 1 && currentIndex === 0) {
                // first image
                this.setBeginningIndexesPreviews();
                this.previews = this.images.filter((/**
                 * @param {?} img
                 * @param {?} i
                 * @return {?}
                 */
                (img, i) => i >= this.start && i < this.end));
                return;
            }
            // the same for the opposite case, when you navigate back from the fist image to go to the last one.
            if (prevIndex === 0 && currentIndex === this.images.length - 1) {
                // last image
                this.setEndIndexesPreviews();
                this.previews = this.images.filter((/**
                 * @param {?} img
                 * @param {?} i
                 * @return {?}
                 */
                (img, i) => i >= this.start && i < this.end));
                return;
            }
            if (this.configPreview.number % 2 === 0) {
                if (calc > currentIndex) {
                    this.previous();
                }
                else {
                    this.next();
                }
            }
            else {
                if (calc > currentIndex) {
                    this.previous();
                }
                if (calc < currentIndex) {
                    this.next();
                }
            }
        }
    }
    /**
     * Method called by events from both keyboard and mouse on a preview.
     * This will trigger the `clickpreview` output with the input preview as its payload.
     * @param {?} preview
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    onImageEvent(preview, event, action = Action.NORMAL) {
        if (!this.configPreview || !this.configPreview.clickable) {
            return;
        }
        /** @type {?} */
        const clickedImageIndex = this.images.indexOf(preview);
        /** @type {?} */
        const result = super.handleImageEvent(event);
        if (result === NEXT) {
            this.clickPreview.emit((/** @type {?} */ ({ action: action, result: clickedImageIndex })));
        }
        else if (result === PREV) {
            this.clickPreview.emit((/** @type {?} */ ({ action: action, result: clickedImageIndex })));
        }
    }
    /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * @param {?} direction
     * @param {?} event
     * @return {?}
     */
    onNavigationEvent(direction, event) {
        /** @type {?} */
        const result = super.handleNavigationEvent(direction, event);
        if (result === NEXT) {
            this.next();
        }
        else if (result === PREV) {
            this.previous();
        }
    }
    /**
     * Method to get aria-label text for a preview image.
     * @param {?} preview
     * @return {?}
     */
    getAriaLabel(preview) {
        if (!preview.plain) {
            return preview.modal.ariaLabel || '';
        }
        return preview.plain.ariaLabel || preview.modal.ariaLabel || '';
    }
    /**
     * Method to get title text for a preview image.
     * @param {?} preview
     * @return {?}
     */
    getTitle(preview) {
        if (!preview.plain) {
            return preview.modal.title || '';
        }
        return preview.plain.title || preview.modal.title || '';
    }
    /**
     * Method to get alt text for a preview image.
     * @param {?} preview
     * @return {?}
     */
    getAlt(preview) {
        if (!preview.plain) {
            return preview.modal.alt || '';
        }
        return preview.plain.alt || preview.modal.alt || '';
    }
    /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    trackById(index, item) {
        return item.id;
    }
    /**
     * Method used in template to sanitize an url when you need legacyIE11Mode.
     * In this way you can set an url as background of a div.
     * @param {?} unsafeStyle is a string and represents the url to sanitize.
     * @return {?} a SafeStyle object that can be used in template without problems.
     */
    sanitizeUrlBgStyle(unsafeStyle) {
        // Method used only to sanitize background-image style before add it to background property when legacyIE11Mode is enabled
        return this.sanitizer.bypassSecurityTrustStyle('url(' + unsafeStyle + ')');
    }
    /**
     * Method to get the background-size value when IE11LegacyMode is enabled.
     * This prevent weired behaviour on IE11 when previews are really small, but original images (.png/.jgp/...) are big.
     * Using 'cover' it's not enough, because it's causing empty background in some cases.
     * After some experiments, I decided to use the double of the height and auto as width.
     * @return {?}
     */
    getIE11LegacyBgSize() {
        if (this.configPreview && this.configPreview.maxHeight) {
            /** @type {?} */
            const bgHeight = +this.configPreview.maxHeight.replace('px', '');
            return '100% ' + bgHeight * 2 + 'px';
        }
        return 'cover';
    }
    /**
     * Method to cleanup resources. In fact, it cleans breakpointSubscription.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        if (this.breakpointSubscription) {
            this.breakpointSubscription.unsubscribe();
        }
    }
    /**
     * Private method to init previews based on the currentImage and the full array of images.
     * The current image in mandatory to show always the current preview (as highlighted).
     * @private
     * @param {?} currentImage
     * @param {?} images
     * @return {?}
     */
    initPreviews(currentImage, images) {
        /** @type {?} */
        let index;
        try {
            index = getIndex(currentImage, images);
        }
        catch (err) {
            throw err;
        }
        switch (index) {
            case 0:
                // first image
                this.setBeginningIndexesPreviews();
                break;
            case images.length - 1:
                // last image
                this.setEndIndexesPreviews();
                break;
            // default:
            //   // other images
            //   // TODO unused because it starts always at image 0
            //   this.setIndexesPreviews();
            //   break;
        }
        this.previews = images.filter((/**
         * @param {?} img
         * @param {?} i
         * @return {?}
         */
        (img, i) => i >= this.start && i < this.end));
    }
    /**
     * Private method to init both `start` and `end` to the beginning.
     * @private
     * @return {?}
     */
    setBeginningIndexesPreviews() {
        this.start = 0;
        this.end = Math.min((/** @type {?} */ (this.configPreview.number)), this.images.length);
    }
    /**
     * Private method to init both `start` and `end` to the end.
     * @private
     * @return {?}
     */
    setEndIndexesPreviews() {
        this.start = this.images.length - 1 - ((/** @type {?} */ (this.configPreview.number)) - 1);
        this.end = this.images.length;
    }
    /**
     * Private method to update the visible previews navigating to the right (next).
     * @private
     * @return {?}
     */
    next() {
        // check if nextImage should be blocked
        if (this.isPreventSliding(this.images.length - 1)) {
            return;
        }
        if (this.end === this.images.length) {
            return;
        }
        this.start++;
        this.end = Math.min(this.end + 1, this.images.length);
        this.previews = this.images.filter((/**
         * @param {?} img
         * @param {?} i
         * @return {?}
         */
        (img, i) => i >= this.start && i < this.end));
    }
    /**
     * Private method to update the visible previews navigating to the left (previous).
     * @private
     * @return {?}
     */
    previous() {
        // check if prevImage should be blocked
        if (this.isPreventSliding(0)) {
            return;
        }
        if (this.start === 0) {
            return;
        }
        this.start = Math.max(this.start - 1, 0);
        this.end = Math.min(this.end - 1, this.images.length);
        this.previews = this.images.filter((/**
         * @param {?} img
         * @param {?} i
         * @return {?}
         */
        (img, i) => i >= this.start && i < this.end));
    }
    /**
     * Private method to block/permit sliding between previews.
     * @private
     * @param {?} boundaryIndex
     * @return {?} boolean if true block sliding, otherwise not
     */
    isPreventSliding(boundaryIndex) {
        return getIndex(this.currentImage, this.images) === boundaryIndex;
    }
}
CarouselPreviewsComponent.ɵfac = function CarouselPreviewsComponent_Factory(t) { return new (t || CarouselPreviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer)); };
CarouselPreviewsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselPreviewsComponent, selectors: [["ks-carousel-previews"]], hostVars: 3, hostBindings: function CarouselPreviewsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", ctx.hostMaxWidth);
    } }, inputs: { carouselConfig: "carouselConfig", currentImage: "currentImage", images: "images", previewConfig: "previewConfig", accessibilityConfig: "accessibilityConfig" }, outputs: { clickPreview: "clickPreview" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "previews-container", 3, "title", 4, "ngIf"], [1, "previews-container", 3, "title"], ["role", "button", 1, "nav-left", 3, "tabindex", "click", "keyup"], ["aria-hidden", "true", 3, "title"], [1, "preview-inner-container"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "button", 1, "nav-right", 3, "tabindex", "click", "keyup"], [4, "ngIf", "ngIfElse"], ["legacyMode", ""], ["ksSize", "", "role", "img", 3, "class", "src", "sizeConfig", "title", "alt", "tabindex", "click", "keyup", 4, "ngIf"], ["ksSize", "", "role", "img", 3, "src", "sizeConfig", "title", "alt", "tabindex", "click", "keyup"], ["ksSize", "", "role", "img", 3, "class", "background-color", "background-image", "background-position", "background-size", "background-repeat", "background-attachment", "sizeConfig", "title", "tabindex", "click", "keyup", 4, "ngIf"], ["ksSize", "", "role", "img", 3, "sizeConfig", "title", "tabindex", "click", "keyup"]], template: function CarouselPreviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselPreviewsComponent_nav_0_Template, 7, 16, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.configPreview == null ? null : ctx.configPreview.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, SizeDirective], styles: ["[_nghost-%COMP%]{position:relative;margin-top:3px;margin-bottom:3px;width:100%}.previews-container[_ngcontent-%COMP%]{align-items:center;-webkit-animation:.8s fadein-semi-visible08;animation:.8s fadein-semi-visible08;display:flex;flex-direction:row;justify-content:center;margin-bottom:0}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:nowrap;width:100%}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]{cursor:pointer;-o-object-fit:cover;object-fit:cover}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%] > .preview-image.unclickable[_ngcontent-%COMP%]{cursor:not-allowed}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%] > .preview-ie11-image[_ngcontent-%COMP%]{cursor:pointer}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%] > .preview-ie11-image.unclickable[_ngcontent-%COMP%]{cursor:not-allowed}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 7px);color:#919191;z-index:1000;cursor:pointer;transition:.5s}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{margin-right:10px;left:10px}.previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%] > .left-arrow-preview-image[_ngcontent-%COMP%]{opacity:1}.previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{margin-left:10px;right:10px}.previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%] > .right-arrow-preview-image[_ngcontent-%COMP%]{opacity:1}", _c10], changeDetection: 0 });
/** @nocollapse */
CarouselPreviewsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.BreakpointObserver },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer }
];
CarouselPreviewsComponent.propDecorators = {
    hostMaxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.max-width',] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['attr.aria-label',] }],
    carouselConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    currentImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    previewConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    clickPreview: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselPreviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ks-carousel-previews',
                template: "<nav *ngIf=\"configPreview?.visible\"\n     class=\"previews-container\"\n     [attr.aria-label]=\"accessibilityConfig?.carouselPreviewsContainerAriaLabel\"\n     [title]=\"accessibilityConfig?.carouselPreviewsContainerTitle\">\n\n  <a class=\"nav-left\"\n     [attr.aria-label]=\"accessibilityConfig?.carouselPreviewScrollPrevAriaLabel\"\n     [tabindex]=\"configPreview.arrows && start > 0 ? 0 : -1\" role=\"button\"\n     (click)=\"onNavigationEvent('left', $event)\" (keyup)=\"onNavigationEvent('left', $event)\">\n    <div class=\"inside {{configPreview.arrows && start > 0 ? 'left-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n         aria-hidden=\"true\"\n         [title]=\"accessibilityConfig?.carouselPreviewScrollPrevTitle\"></div>\n  </a>\n\n  <div class=\"preview-inner-container\">\n    <ng-container *ngFor=\"let preview of previews; trackBy: trackById; let index = index\">\n      <ng-container *ngIf=\"!carouselConfig?.legacyIE11Mode; else legacyMode\">\n        <img *ngIf=\"preview?.modal?.img\"\n             class=\"inside preview-image{{isActive(preview) ? ' active' : ''}}{{!configPreview.clickable ? ' unclickable' : ''}}\"\n             [src]=\"preview.plain?.img ? preview.plain.img : preview.modal.img\"\n             ksSize [sizeConfig]=\"{width: configPreview?.width,\n                                 height: configPreview?.maxHeight}\"\n             [attr.aria-label]=\"getAriaLabel(preview)\"\n             [title]=\"getTitle(preview)\"\n             alt=\"{{getAlt(preview)}}\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"onImageEvent(preview, $event, clickAction)\" (keyup)=\"onImageEvent(preview, $event, keyboardAction)\"/>\n      </ng-container>\n      <ng-template #legacyMode>\n        <div *ngIf=\"preview?.modal?.img\"\n             class=\"inside preview-ie11-image{{isActive(preview) ? ' active' : ''}}{{!configPreview.clickable ? ' unclickable' : ''}}\"\n             [style.background-color]=\"'transparent'\"\n             [style.background-image]=\"sanitizeUrlBgStyle(preview.plain?.img ? preview.plain.img : preview.modal.img)\"\n             [style.background-position]=\"'center center'\"\n             [style.background-size]=\"getIE11LegacyBgSize()\"\n             [style.background-repeat]=\"'no-repeat'\"\n             [style.background-attachment]=\"'scroll'\"\n             ksSize [sizeConfig]=\"{width: configPreview?.width,\n                                 height: configPreview?.maxHeight}\"\n             [attr.aria-label]=\"getAriaLabel(preview)\"\n             [title]=\"getTitle(preview)\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"onImageEvent(preview, $event, clickAction)\" (keyup)=\"onImageEvent(preview, $event, keyboardAction)\"></div>\n      </ng-template>\n    </ng-container>\n  </div>\n\n  <a class=\"nav-right\"\n     [attr.aria-label]=\"accessibilityConfig?.carouselPreviewScrollNextAriaLabel\"\n     [tabindex]=\"configPreview.arrows && end < images.length ? 0 : -1\" role=\"button\"\n     (click)=\"onNavigationEvent('right', $event)\" (keyup)=\"onNavigationEvent('right', $event)\">\n    <div class=\"inside {{configPreview.arrows && end < images.length ? 'right-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n         aria-hidden=\"true\"\n         [title]=\"accessibilityConfig?.carouselPreviewScrollNextTitle\"></div>\n  </a>\n\n</nav>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [":host{position:relative;margin-top:3px;margin-bottom:3px;width:100%}.previews-container{align-items:center;-webkit-animation:.8s fadein-semi-visible08;animation:.8s fadein-semi-visible08;display:flex;flex-direction:row;justify-content:center;margin-bottom:0}.previews-container>.preview-inner-container{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:nowrap;width:100%}.previews-container>.preview-inner-container>.preview-image{cursor:pointer;-o-object-fit:cover;object-fit:cover}.previews-container>.preview-inner-container>.preview-image.unclickable{cursor:not-allowed}.previews-container>.preview-inner-container>.preview-ie11-image{cursor:pointer}.previews-container>.preview-inner-container>.preview-ie11-image.unclickable{cursor:not-allowed}.previews-container .nav,.previews-container>.nav-left,.previews-container>.nav-right{position:absolute;top:calc(50% - 7px);color:#919191;z-index:1000;cursor:pointer;transition:.5s}.previews-container .nav:hover,.previews-container>.nav-left:hover,.previews-container>.nav-right:hover{transform:scale(1.1)}.previews-container>.nav-left{margin-right:10px;left:10px}.previews-container>.nav-left>.left-arrow-preview-image{opacity:1}.previews-container>.nav-right{margin-left:10px;right:10px}.previews-container>.nav-right>.right-arrow-preview-image{opacity:1}", ".arrow-preview-image,.empty-arrow-preview-image,.left-arrow-preview-image,.right-arrow-preview-image{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image{background:#000;opacity:0}.left-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.left-arrow-preview-image:hover{transform:scale(1.2)}.right-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.right-arrow-preview-image:hover{transform:scale(1.2)}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__.BreakpointObserver }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer }]; }, { hostMaxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.max-width']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['attr.aria-label']
        }], clickPreview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], carouselConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], currentImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], previewConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ButtonsStrategy = {
    // don't use 0 here
    // the first index is 1 and all of the following members are auto-incremented from that point on
    DEFAULT: 1,
    SIMPLE: 2,
    ADVANCED: 3,
    FULL: 4,
    CUSTOM: 5,
};
ButtonsStrategy[ButtonsStrategy.DEFAULT] = 'DEFAULT';
ButtonsStrategy[ButtonsStrategy.SIMPLE] = 'SIMPLE';
ButtonsStrategy[ButtonsStrategy.ADVANCED] = 'ADVANCED';
ButtonsStrategy[ButtonsStrategy.FULL] = 'FULL';
ButtonsStrategy[ButtonsStrategy.CUSTOM] = 'CUSTOM';
/** @enum {number} */
const ButtonType = {
    // don't use 0 here
    // the first index is 1 and all of the following members are auto-incremented from that point on
    // REFRESH = 1,
    DELETE: 1,
    EXTURL: 2,
    DOWNLOAD: 3,
    CLOSE: 4,
    CUSTOM: 5,
    FULLSCREEN: 6,
    // ROTATE
};
ButtonType[ButtonType.DELETE] = 'DELETE';
ButtonType[ButtonType.EXTURL] = 'EXTURL';
ButtonType[ButtonType.DOWNLOAD] = 'DOWNLOAD';
ButtonType[ButtonType.CLOSE] = 'CLOSE';
ButtonType[ButtonType.CUSTOM] = 'CUSTOM';
ButtonType[ButtonType.FULLSCREEN] = 'FULLSCREEN';
/**
 * Array of admitted types of buttons.
 * @type {?}
 */
const WHITELIST_BUTTON_TYPES = [
    // ButtonType.REFRESH,
    ButtonType.FULLSCREEN,
    ButtonType.DELETE,
    ButtonType.EXTURL,
    ButtonType.DOWNLOAD,
    ButtonType.CLOSE,
    ButtonType.CUSTOM
    // ButtonType.ROTATE
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default button size object
 * @type {?}
 */
const KS_DEFAULT_SIZE = { height: 'auto', width: '30px' };
/**
 * Default close button object
 * @type {?}
 */
const KS_DEFAULT_BTN_CLOSE = {
    className: 'close-image',
    size: KS_DEFAULT_SIZE,
    type: ButtonType.CLOSE,
    title: 'Close this modal image gallery',
    ariaLabel: 'Close this modal image gallery'
};
/**
 * Default download button object
 * @type {?}
 */
const KS_DEFAULT_BTN_DOWNLOAD = {
    className: 'download-image',
    size: KS_DEFAULT_SIZE,
    type: ButtonType.DOWNLOAD,
    title: 'Download the current image',
    ariaLabel: 'Download the current image'
};
/**
 * Default exturl button object
 * @type {?}
 */
const KS_DEFAULT_BTN_EXTURL = {
    className: 'ext-url-image',
    size: KS_DEFAULT_SIZE,
    type: ButtonType.EXTURL,
    title: 'Navigate the current image',
    ariaLabel: 'Navigate the current image'
};
// /**
//  * Default refresh button object
//  */
// export const KS_DEFAULT_BTN_REFRESH: ButtonConfig = {
//   className: 'refresh-image',
//   size: KS_DEFAULT_SIZE,
//   type: ButtonType.REFRESH,
//   title: 'Refresh all images',
//   ariaLabel: 'Refresh all images'
// };
/**
 * Default delete button object
 * @type {?}
 */
const KS_DEFAULT_BTN_DELETE = {
    className: 'delete-image',
    size: KS_DEFAULT_SIZE,
    type: ButtonType.DELETE,
    title: 'Delete the current image',
    ariaLabel: 'Delete the current image'
};
/**
 * Default full-screen button object
 * @type {?}
 */
const KS_DEFAULT_BTN_FULL_SCREEN = {
    className: 'fullscreen-image',
    size: KS_DEFAULT_SIZE,
    type: ButtonType.FULLSCREEN,
    title: 'Switch to full-screen',
    ariaLabel: 'Switch to full-screen'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with all upper buttons.
 * Also it emits click events as outputs.
 */
class UpperButtonsComponent extends AccessibleComponent {
    constructor() {
        super(...arguments);
        /**
         * Output to emit clicks on refresh button. The payload contains a `ButtonEvent`.
         */
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit clicks on delete button. The payload contains a `ButtonEvent`.
         */
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit clicks on navigate button. The payload contains a `ButtonEvent`.
         */
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit clicks on download button. The payload contains a `ButtonEvent`.
         */
        this.download = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit clicks on close button. The payload contains a `ButtonEvent`.
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Output to emit clicks on full-screen button. The payload contains a `ButtonEvent`.
         */
        this.fullscreen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        // /**
        //  * Output to emit clicks on rotate button. The payload contains a `ButtonEvent`.
        //  */
        // @Output()
        // rotate: EventEmitter<ButtonEvent> = new EventEmitter<ButtonEvent>();
        /**
         * Output to emit clicks on all custom buttons. The payload contains a `ButtonEvent`.
         */
        this.customEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Default buttons array for standard configuration
         */
        this.defaultButtonsDefault = [KS_DEFAULT_BTN_CLOSE];
        /**
         * Default buttons array for simple configuration
         */
        this.simpleButtonsDefault = [KS_DEFAULT_BTN_DOWNLOAD, ...this.defaultButtonsDefault];
        /**
         * Default buttons array for advanced configuration
         */
        this.advancedButtonsDefault = [KS_DEFAULT_BTN_EXTURL, ...this.simpleButtonsDefault];
        /**
         * Default buttons array for full configuration
         */
        this.fullButtonsDefault = [
            /*KS_DEFAULT_BTN_REFRESH, */
            KS_DEFAULT_BTN_FULL_SCREEN,
            KS_DEFAULT_BTN_DELETE,
            ...this.advancedButtonsDefault
        ];
    }
    /**
     * Method ´ngOnInit´ to build `configButtons` applying a default value and also to
     * init the `buttons` array.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const defaultConfig = { visible: true, strategy: ButtonsStrategy.DEFAULT };
        this.configButtons = Object.assign(defaultConfig, this.buttonsConfig);
        switch (this.configButtons.strategy) {
            case ButtonsStrategy.SIMPLE:
                this.buttons = this.addButtonIds(this.simpleButtonsDefault);
                break;
            case ButtonsStrategy.ADVANCED:
                this.buttons = this.addButtonIds(this.advancedButtonsDefault);
                break;
            case ButtonsStrategy.FULL:
                this.buttons = this.addButtonIds(this.fullButtonsDefault);
                break;
            case ButtonsStrategy.CUSTOM:
                this.buttons = this.addButtonIds(this.validateCustomButtons(this.configButtons.buttons));
                break;
            case ButtonsStrategy.DEFAULT:
            default:
                this.buttons = this.addButtonIds(this.defaultButtonsDefault);
                break;
        }
    }
    /**
     * Method called by events from both keyboard and mouse on a button.
     * This will call a private method to trigger an output with the right payload.
     * @throws an error if the button type is unknown
     * @param {?} button
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    onEvent(button, event, action = Action.CLICK) {
        if (!event) {
            return;
        }
        /** @type {?} */
        const dataToEmit = {
            button: button,
            // current image initialized as null
            // (I'll fill this value inside the parent of this component
            image: null,
            action: action
        };
        switch (button.type) {
            // case ButtonType.REFRESH:
            //   this.triggerOnMouseAndKeyboard(this.refresh, event, dataToEmit);
            //   break;
            case ButtonType.DELETE:
                this.triggerOnMouseAndKeyboard(this.delete, event, dataToEmit);
                break;
            case ButtonType.EXTURL:
                if (!this.currentImage || !this.currentImage.modal || !this.currentImage.modal.extUrl) {
                    return;
                }
                this.triggerOnMouseAndKeyboard(this.navigate, event, dataToEmit);
                break;
            case ButtonType.DOWNLOAD:
                this.triggerOnMouseAndKeyboard(this.download, event, dataToEmit);
                break;
            case ButtonType.CLOSE:
                this.triggerOnMouseAndKeyboard(this.close, event, dataToEmit);
                break;
            case ButtonType.CUSTOM:
                this.triggerOnMouseAndKeyboard(this.customEmit, event, dataToEmit);
                break;
            case ButtonType.FULLSCREEN:
                this.triggerOnMouseAndKeyboard(this.fullscreen, event, dataToEmit);
                break;
            // case ButtonType.ROTATE:
            //   this.triggerOnMouseAndKeyboard(this.rotate, event, dataToEmit);
            //   break;
            default:
                throw new Error(`Unknown button's type into ButtonConfig`);
        }
    }
    /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item or undefined if the item is not valid
     */
    trackById(index, item) {
        return item ? item.id : undefined;
    }
    /**
     * Private method to emit an event using the specified output as an `EventEmitter`.
     * @private
     * @param {?} emitter
     * @param {?} event
     * @param {?} dataToEmit
     * @return {?}
     */
    triggerOnMouseAndKeyboard(emitter, event, dataToEmit) {
        if (!emitter) {
            throw new Error(`UpperButtonsComponent unknown emitter in triggerOnMouseAndKeyboard`);
        }
        /** @type {?} */
        const result = super.handleImageEvent(event);
        if (result === NEXT) {
            emitter.emit(dataToEmit);
        }
    }
    /**
     * Private method to add ids to the array of buttons.
     * It adds ids in a reverse way, to be sure that the last button will always have id = 0.
     * This is really useful in unit testing to be sure that close button always have id = 0, download 1 and so on...
     * It's totally transparent to the user.
     * @private
     * @param {?} buttons
     * @return {?} ButtonConfig[] the input array with incremental numeric ids
     */
    addButtonIds(buttons) {
        return buttons.map((/**
         * @param {?} val
         * @param {?} i
         * @return {?}
         */
        (val, i) => Object.assign(val, { id: buttons.length - 1 - i })));
    }
    /**
     * Private method to validate custom buttons received as input.
     * @throws an error is exists a button with an unknown type
     * @private
     * @param {?=} buttons
     * @return {?} ButtonConfig[] the same input buttons config array
     */
    validateCustomButtons(buttons = []) {
        buttons.forEach((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            /** @type {?} */
            const indexOfButtonType = WHITELIST_BUTTON_TYPES.findIndex((/**
             * @param {?} type
             * @return {?}
             */
            (type) => type === val.type));
            if (indexOfButtonType === -1) {
                throw new Error(`Unknown ButtonType. For custom types use ButtonType.CUSTOM`);
            }
        }));
        return buttons;
    }
}
UpperButtonsComponent.ɵfac = /*@__PURE__*/ function () { let ɵUpperButtonsComponent_BaseFactory; return function UpperButtonsComponent_Factory(t) { return (ɵUpperButtonsComponent_BaseFactory || (ɵUpperButtonsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](UpperButtonsComponent)))(t || UpperButtonsComponent); }; }();
UpperButtonsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpperButtonsComponent, selectors: [["ks-upper-buttons"]], inputs: { currentImage: "currentImage", buttonsConfig: "buttonsConfig" }, outputs: { refresh: "refresh", delete: "delete", navigate: "navigate", download: "download", close: "close", fullscreen: "fullscreen", customEmit: "customEmit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[1, "buttons-container"], [4, "ngIf"], ["class", "upper-button", "ksSize", "", "role", "button", 3, "sizeConfig", "ngStyle", "tabindex", "click", "keyup", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ksSize", "", "role", "button", 1, "upper-button", 3, "sizeConfig", "ngStyle", "tabindex", "click", "keyup"], ["aria-hidden", "true", 3, "title"]], template: function UpperButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpperButtonsComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.configButtons || (ctx.configButtons == null ? null : ctx.configButtons.visible));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, SizeDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".buttons-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}.buttons-container[_ngcontent-%COMP%] > .upper-button[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center;margin-right:30px;margin-top:28px;font-size:50px;text-decoration:none;cursor:pointer;-webkit-animation:.6s animatezoom;animation:.6s animatezoom;color:#fff}@-webkit-keyframes animatezoom{from{transform:scale(0)}to{transform:scale(1)}}@keyframes animatezoom{from{transform:scale(0)}to{transform:scale(1)}}.base-btn[_ngcontent-%COMP%], .close-image[_ngcontent-%COMP%], .copy[_ngcontent-%COMP%], .delete-image[_ngcontent-%COMP%], .download-image[_ngcontent-%COMP%], .ext-url-image[_ngcontent-%COMP%], .fullscreen-image[_ngcontent-%COMP%], .refresh-image[_ngcontent-%COMP%], .rotate-image[_ngcontent-%COMP%]{width:30px;height:30px;background-size:30px;opacity:.8;transition:.5s}.base-btn[_ngcontent-%COMP%]:hover, .close-image[_ngcontent-%COMP%]:hover, .copy[_ngcontent-%COMP%]:hover, .delete-image[_ngcontent-%COMP%]:hover, .download-image[_ngcontent-%COMP%]:hover, .ext-url-image[_ngcontent-%COMP%]:hover, .fullscreen-image[_ngcontent-%COMP%]:hover, .refresh-image[_ngcontent-%COMP%]:hover, .rotate-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.rotate-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMzLDJjNy43NDYsMCwxNS4wMjgsMy4wMTcsMjAuNTA1LDguNDk0YzEwLjEzOCwxMC4xMzcsMTEuMzEsMjYuMzk2LDIuNzQsMzcuODQ5TDUyLDUyLjU4OVY0NGgtMnYxMWwxLDFoMTF2LTJoLTguNTgyICAgIGw0LjI5Mi00LjI5M2wwLjA5Mi0wLjEwNmM5LjIxMS0xMi4yNDcsNy45NzItMjkuNjY3LTIuODgzLTQwLjUyMUM0OS4wNjQsMy4yMjUsNDEuMjgsMCwzMywwVjJ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTcuNzU1LDE1LjY1N0wxMiwxMS40MTFWMjBoMlY5bC0xLTFIMnYyaDguNTgyTDYuMjksMTQuMjkzbC0wLjA5MiwwLjEwNkMtMy4wMTMsMjYuNjQ2LTEuNzczLDQ0LjA2Niw5LjA4MSw1NC45MiAgICBDMTQuOTM2LDYwLjc3NSwyMi43Miw2NCwzMSw2NHYtMmMtNy43NDYsMC0xNS4wMjgtMy4wMTctMjAuNTA1LTguNDk0QzAuMzU3LDQzLjM2OS0wLjgxNCwyNy4xMSw3Ljc1NSwxNS42NTd6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.fullscreen-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNNTIuOTIzLDAuNjE4Yy0wLjEwMS0wLjI0NC0wLjI5Ni0wLjQzOS0wLjU0MS0wLjU0MUM1Mi4yNiwwLjAyNyw1Mi4xMywwLDUyLDBINDBjLTAuNTUyLDAtMSwwLjQ0OC0xLDFzMC40NDgsMSwxLDFoOS41ODYgICBMMzMuMjkzLDE4LjI5M2MtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNEMzMy40ODgsMTkuOTAyLDMzLjc0NCwyMCwzNCwyMHMwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M0w1MSwzLjQxNFYxMyAgIGMwLDAuNTUyLDAuNDQ4LDEsMSwxczEtMC40NDgsMS0xVjFDNTMsMC44Nyw1Mi45NzMsMC43NCw1Mi45MjMsMC42MTh6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTE4LjI5MywzMy4yOTNMMiw0OS41ODZWNDBjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSwwLjQ0OC0xLDF2MTJjMCwwLjEzLDAuMDI3LDAuMjYsMC4wNzcsMC4zODIgICBjMC4xMDEsMC4yNDQsMC4yOTYsMC40MzksMC41NDEsMC41NDFDMC43NCw1Mi45NzMsMC44Nyw1MywxLDUzaDEyYzAuNTUyLDAsMS0wLjQ0OCwxLTFzLTAuNDQ4LTEtMS0xSDMuNDE0bDE2LjI5My0xNi4yOTMgICBjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNFMxOC42ODQsMzIuOTAyLDE4LjI5MywzMy4yOTN6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTEsMTRjMC41NTIsMCwxLTAuNDQ4LDEtMVYzLjQxNGwxNi4yOTIsMTYuMjkyYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzICAgYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRMMy40MTQsMkgxM2MwLjU1MiwwLDEtMC40NDgsMS0xcy0wLjQ0OC0xLTEtMUgxQzAuODcsMCwwLjc0LDAuMDI3LDAuNjE4LDAuMDc3ICAgQzAuMzczLDAuMTc5LDAuMTc5LDAuMzczLDAuMDc3LDAuNjE4QzAuMDI3LDAuNzQsMCwwLjg3LDAsMXYxMkMwLDEzLjU1MiwwLjQ0OCwxNCwxLDE0eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik01MiwzOWMtMC41NTIsMC0xLDAuNDQ4LTEsMXY5LjU4NkwzNC43MDcsMzMuMjkyYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0TDQ5LjU4Niw1MUg0MCAgIGMtMC41NTIsMC0xLDAuNDQ4LTEsMXMwLjQ0OCwxLDEsMWgxMmMwLjEzLDAsMC4yNi0wLjAyNywwLjM4Mi0wLjA3N2MwLjI0NC0wLjEwMSwwLjQzOS0wLjI5NiwwLjU0MS0wLjU0MSAgIEM1Mi45NzMsNTIuMjYsNTMsNTIuMTMsNTMsNTJWNDBDNTMsMzkuNDQ4LDUyLjU1MiwzOSw1MiwzOXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.delete-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ni40IDQ4Ni40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODYuNCA0ODYuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ0Niw3MEgzNDQuOFY1My41YzAtMjkuNS0yNC01My41LTUzLjUtNTMuNWgtOTYuMmMtMjkuNSwwLTUzLjUsMjQtNTMuNSw1My41VjcwSDQwLjRjLTcuNSwwLTEzLjUsNi0xMy41LDEzLjUgICAgUzMyLjksOTcsNDAuNCw5N2gyNC40djMxNy4yYzAsMzkuOCwzMi40LDcyLjIsNzIuMiw3Mi4yaDIxMi40YzM5LjgsMCw3Mi4yLTMyLjQsNzIuMi03Mi4yVjk3SDQ0NmM3LjUsMCwxMy41LTYsMTMuNS0xMy41ICAgIFM0NTMuNSw3MCw0NDYsNzB6IE0xNjguNiw1My41YzAtMTQuNiwxMS45LTI2LjUsMjYuNS0yNi41aDk2LjJjMTQuNiwwLDI2LjUsMTEuOSwyNi41LDI2LjVWNzBIMTY4LjZWNTMuNXogTTM5NC42LDQxNC4yICAgIGMwLDI0LjktMjAuMyw0NS4yLTQ1LjIsNDUuMkgxMzdjLTI0LjksMC00NS4yLTIwLjMtNDUuMi00NS4yVjk3aDMwMi45djMxNy4ySDM5NC42eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0yNDMuMiw0MTFjNy41LDAsMTMuNS02LDEzLjUtMTMuNVYxNTguOWMwLTcuNS02LTEzLjUtMTMuNS0xMy41cy0xMy41LDYtMTMuNSwxMy41djIzOC41ICAgIEMyMjkuNyw0MDQuOSwyMzUuNyw0MTEsMjQzLjIsNDExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNTUuMSwzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzE0MS42LDM5MC4xLDE0Ny43LDM5Ni4xLDE1NS4xLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0zMzEuMywzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzMxNy44LDM5MC4xLDMyMy44LDM5Ni4xLDMzMS4zLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.ext-url-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxnPjxnPjxnPjxwYXRoIGQ9Ik00ODAsMjg4djExMmMwLDQ0LjE4My0zNS44MTcsODAtODAsODBIMTEyYy00NC4xODMsMC04MC0zNS44MTctODAtODBWMTEyYzAtNDQuMTgzLDM1LjgxNy04MCw4MC04MGg5NlYwaC05NiAgICAgQzUwLjE0NCwwLDAsNTAuMTQ0LDAsMTEydjI4OGMwLDYxLjg1Niw1MC4xNDQsMTEyLDExMiwxMTJoMjg4YzYxLjg1NiwwLDExMi01MC4xNDQsMTEyLTExMlYyODhINDgweiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNzYsNDE2aDMyVjI4OGMwLTEyNS43NiwxMDcuNTItMTI4LDExMi0xMjhoMTA1LjQ0bC04NC42NCw4NC42NGwyMi41NiwyMi41NmwxMTItMTEyYzYuMjA0LTYuMjQxLDYuMjA0LTE2LjMxOSwwLTIyLjU2ICAgICBsLTExMi0xMTJsLTIyLjcyLDIyLjcybDg0LjgsODQuNjRIMzIwYy0xLjQ0LDAtMTQ0LDEuNzYtMTQ0LDE2MFY0MTZ6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.download-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3MS4yIDQ3MS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzEuMiA0NzEuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ1Ny43LDIzMC4xNWMtNy41LDAtMTMuNSw2LTEzLjUsMTMuNXYxMjIuOGMwLDMzLjQtMjcuMiw2MC41LTYwLjUsNjAuNUg4Ny41Yy0zMy40LDAtNjAuNS0yNy4yLTYwLjUtNjAuNXYtMTI0LjggICAgYzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MTI0LjhjMCw0OC4zLDM5LjMsODcuNSw4Ny41LDg3LjVoMjk2LjJjNDguMywwLDg3LjUtMzkuMyw4Ny41LTg3LjV2LTEyMi44ICAgIEM0NzEuMiwyMzYuMjUsNDY1LjIsMjMwLjE1LDQ1Ny43LDIzMC4xNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMjI2LjEsMzQ2Ljc1YzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNGw4NS44LTg1LjhjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC02Mi43LDYyLjggICAgVjMwLjc1YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjczLjlsLTYyLjgtNjIuOGMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xICAgIEwyMjYuMSwzNDYuNzV6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.close-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3NS4yIDQ3NS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzUuMiA0NzUuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQwNS42LDY5LjZDMzYwLjcsMjQuNywzMDEuMSwwLDIzNy42LDBzLTEyMy4xLDI0LjctMTY4LDY5LjZTMCwxNzQuMSwwLDIzNy42czI0LjcsMTIzLjEsNjkuNiwxNjhzMTA0LjUsNjkuNiwxNjgsNjkuNiAgICBzMTIzLjEtMjQuNywxNjgtNjkuNnM2OS42LTEwNC41LDY5LjYtMTY4UzQ1MC41LDExNC41LDQwNS42LDY5LjZ6IE0zODYuNSwzODYuNWMtMzkuOCwzOS44LTkyLjcsNjEuNy0xNDguOSw2MS43ICAgIHMtMTA5LjEtMjEuOS0xNDguOS02MS43Yy04Mi4xLTgyLjEtODIuMS0yMTUuNywwLTI5Ny44QzEyOC41LDQ4LjksMTgxLjQsMjcsMjM3LjYsMjdzMTA5LjEsMjEuOSwxNDguOSw2MS43ICAgIEM0NjguNiwxNzAuOCw0NjguNiwzMDQuNCwzODYuNSwzODYuNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMzQyLjMsMTMyLjljLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC04NS42LDg1LjZMMTUyLDEzMi45Yy01LjMtNS4zLTEzLjgtNS4zLTE5LjEsMGMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjEgICAgbDg1LjYsODUuNmwtODUuNiw4NS42Yy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRsODUuNi04NS42bDg1LjYsODUuNmMyLjYsMi42LDYuMSw0LDkuNSw0ICAgIGMzLjUsMCw2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xbC04NS40LTg1LjZsODUuNi04NS42QzM0Ny42LDE0Ni43LDM0Ny42LDEzOC4yLDM0Mi4zLDEzMi45eiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.refresh-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OS43MTEgNDg5LjcxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg5LjcxMSA0ODkuNzExOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48Zz48cGF0aCBkPSJNMTEyLjE1Niw5Ny4xMTFjNzIuMy02NS40LDE4MC41LTY2LjQsMjUzLjgtNi43bC01OC4xLDIuMmMtNy41LDAuMy0xMy4zLDYuNS0xMywxNGMwLjMsNy4zLDYuMywxMywxMy41LDEzICAgIGMwLjIsMCwwLjMsMCwwLjUsMGw4OS4yLTMuM2M3LjMtMC4zLDEzLTYuMiwxMy0xMy41di0xYzAtMC4yLDAtMC4zLDAtMC41di0wLjFsMCwwbC0zLjMtODguMmMtMC4zLTcuNS02LjYtMTMuMy0xNC0xMyAgICBjLTcuNSwwLjMtMTMuMyw2LjUtMTMsMTRsMi4xLDU1LjNjLTM2LjMtMjkuNy04MS00Ni45LTEyOC44LTQ5LjNjLTU5LjItMy0xMTYuMSwxNy4zLTE2MCw1Ny4xYy02MC40LDU0LjctODYsMTM3LjktNjYuOCwyMTcuMSAgICBjMS41LDYuMiw3LDEwLjMsMTMuMSwxMC4zYzEuMSwwLDIuMS0wLjEsMy4yLTAuNGM3LjItMS44LDExLjctOS4xLDkuOS0xNi4zQzM2LjY1NiwyMTguMjExLDU5LjA1NiwxNDUuMTExLDExMi4xNTYsOTcuMTExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik00NjIuNDU2LDE5NS41MTFjLTEuOC03LjItOS4xLTExLjctMTYuMy05LjljLTcuMiwxLjgtMTEuNyw5LjEtOS45LDE2LjNjMTYuOSw2OS42LTUuNiwxNDIuNy01OC43LDE5MC43ICAgIGMtMzcuMywzMy43LTg0LjEsNTAuMy0xMzAuNyw1MC4zYy00NC41LDAtODguOS0xNS4xLTEyNC43LTQ0LjlsNTguOC01LjNjNy40LTAuNywxMi45LTcuMiwxMi4yLTE0LjdzLTcuMi0xMi45LTE0LjctMTIuMmwtODguOSw4ICAgIGMtNy40LDAuNy0xMi45LDcuMi0xMi4yLDE0LjdsOCw4OC45YzAuNiw3LDYuNSwxMi4zLDEzLjQsMTIuM2MwLjQsMCwwLjgsMCwxLjItMC4xYzcuNC0wLjcsMTIuOS03LjIsMTIuMi0xNC43bC00LjgtNTQuMSAgICBjMzYuMywyOS40LDgwLjgsNDYuNSwxMjguMyw0OC45YzMuOCwwLjIsNy42LDAuMywxMS4zLDAuM2M1NS4xLDAsMTA3LjUtMjAuMiwxNDguNy01Ny40ICAgIEM0NTYuMDU2LDM1Ny45MTEsNDgxLjY1NiwyNzQuODExLDQ2Mi40NTYsMTk1LjUxMXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==)}.copy[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC4zIDQ4OC4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODguMyA0ODguMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMxNC4yNSw4NS40aC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42djMyNS43YzAsMjEuMywxNy4zLDM4LjYsMzguNiwzOC42aDIyN2MyMS4zLDAsMzguNi0xNy4zLDM4LjYtMzguNlYxMjQgICAgQzM1Mi43NSwxMDIuNywzMzUuNDUsODUuNCwzMTQuMjUsODUuNHogTTMyNS43NSw0NDkuNmMwLDYuNC01LjIsMTEuNi0xMS42LDExLjZoLTIyN2MtNi40LDAtMTEuNi01LjItMTEuNi0xMS42VjEyNCAgICBjMC02LjQsNS4yLTExLjYsMTEuNi0xMS42aDIyN2M2LjQsMCwxMS42LDUuMiwxMS42LDExLjZWNDQ5LjZ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTQwMS4wNSwwaC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42YzAsNy41LDYsMTMuNSwxMy41LDEzLjVzMTMuNS02LDEzLjUtMTMuNWMwLTYuNCw1LjItMTEuNiwxMS42LTExLjZoMjI3ICAgIGM2LjQsMCwxMS42LDUuMiwxMS42LDExLjZ2MzI1LjdjMCw2LjQtNS4yLDExLjYtMTEuNiwxMS42Yy03LjUsMC0xMy41LDYtMTMuNSwxMy41czYsMTMuNSwxMy41LDEzLjVjMjEuMywwLDM4LjYtMTcuMywzOC42LTM4LjYgICAgVjM4LjZDNDM5LjY1LDE3LjMsNDIyLjM1LDAsNDAxLjA1LDB6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}"], changeDetection: 0 });
UpperButtonsComponent.propDecorators = {
    currentImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    buttonsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    delete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    navigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    download: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    customEmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpperButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ks-upper-buttons',
                template: "<header class=\"buttons-container\">\n\n  <ng-container *ngIf=\"!configButtons || configButtons?.visible\">\n    <a *ngFor=\"let btn of buttons; trackBy: trackById; let index = index\"\n       class=\"upper-button\"\n       ksSize [sizeConfig]=\"{width: btn.size?.width, height: btn.size?.height}\"\n       [ngStyle]=\"{'font-size': btn.fontSize}\"\n       [attr.aria-label]=\"btn.ariaLabel\"\n       [tabindex]=\"0\" role=\"button\"\n       (click)=\"onEvent(btn, $event)\" (keyup)=\"onEvent(btn, $event)\">\n      <div class=\"inside {{btn.className}}\" aria-hidden=\"true\" title=\"{{btn.title}}\"></div>\n    </a>\n  </ng-container>\n</header>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".buttons-container{display:flex;flex-direction:row;justify-content:flex-end}.buttons-container>.upper-button{-ms-grid-row-align:center;align-self:center;margin-right:30px;margin-top:28px;font-size:50px;text-decoration:none;cursor:pointer;-webkit-animation:.6s animatezoom;animation:.6s animatezoom;color:#fff}@-webkit-keyframes animatezoom{from{transform:scale(0)}to{transform:scale(1)}}@keyframes animatezoom{from{transform:scale(0)}to{transform:scale(1)}}.base-btn,.close-image,.copy,.delete-image,.download-image,.ext-url-image,.fullscreen-image,.refresh-image,.rotate-image{width:30px;height:30px;background-size:30px;opacity:.8;transition:.5s}.base-btn:hover,.close-image:hover,.copy:hover,.delete-image:hover,.download-image:hover,.ext-url-image:hover,.fullscreen-image:hover,.refresh-image:hover,.rotate-image:hover{transform:scale(1.2)}.rotate-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMzLDJjNy43NDYsMCwxNS4wMjgsMy4wMTcsMjAuNTA1LDguNDk0YzEwLjEzOCwxMC4xMzcsMTEuMzEsMjYuMzk2LDIuNzQsMzcuODQ5TDUyLDUyLjU4OVY0NGgtMnYxMWwxLDFoMTF2LTJoLTguNTgyICAgIGw0LjI5Mi00LjI5M2wwLjA5Mi0wLjEwNmM5LjIxMS0xMi4yNDcsNy45NzItMjkuNjY3LTIuODgzLTQwLjUyMUM0OS4wNjQsMy4yMjUsNDEuMjgsMCwzMywwVjJ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTcuNzU1LDE1LjY1N0wxMiwxMS40MTFWMjBoMlY5bC0xLTFIMnYyaDguNTgyTDYuMjksMTQuMjkzbC0wLjA5MiwwLjEwNkMtMy4wMTMsMjYuNjQ2LTEuNzczLDQ0LjA2Niw5LjA4MSw1NC45MiAgICBDMTQuOTM2LDYwLjc3NSwyMi43Miw2NCwzMSw2NHYtMmMtNy43NDYsMC0xNS4wMjgtMy4wMTctMjAuNTA1LTguNDk0QzAuMzU3LDQzLjM2OS0wLjgxNCwyNy4xMSw3Ljc1NSwxNS42NTd6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.fullscreen-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNNTIuOTIzLDAuNjE4Yy0wLjEwMS0wLjI0NC0wLjI5Ni0wLjQzOS0wLjU0MS0wLjU0MUM1Mi4yNiwwLjAyNyw1Mi4xMywwLDUyLDBINDBjLTAuNTUyLDAtMSwwLjQ0OC0xLDFzMC40NDgsMSwxLDFoOS41ODYgICBMMzMuMjkzLDE4LjI5M2MtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNEMzMy40ODgsMTkuOTAyLDMzLjc0NCwyMCwzNCwyMHMwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M0w1MSwzLjQxNFYxMyAgIGMwLDAuNTUyLDAuNDQ4LDEsMSwxczEtMC40NDgsMS0xVjFDNTMsMC44Nyw1Mi45NzMsMC43NCw1Mi45MjMsMC42MTh6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTE4LjI5MywzMy4yOTNMMiw0OS41ODZWNDBjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSwwLjQ0OC0xLDF2MTJjMCwwLjEzLDAuMDI3LDAuMjYsMC4wNzcsMC4zODIgICBjMC4xMDEsMC4yNDQsMC4yOTYsMC40MzksMC41NDEsMC41NDFDMC43NCw1Mi45NzMsMC44Nyw1MywxLDUzaDEyYzAuNTUyLDAsMS0wLjQ0OCwxLTFzLTAuNDQ4LTEtMS0xSDMuNDE0bDE2LjI5My0xNi4yOTMgICBjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNFMxOC42ODQsMzIuOTAyLDE4LjI5MywzMy4yOTN6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTEsMTRjMC41NTIsMCwxLTAuNDQ4LDEtMVYzLjQxNGwxNi4yOTIsMTYuMjkyYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzICAgYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRMMy40MTQsMkgxM2MwLjU1MiwwLDEtMC40NDgsMS0xcy0wLjQ0OC0xLTEtMUgxQzAuODcsMCwwLjc0LDAuMDI3LDAuNjE4LDAuMDc3ICAgQzAuMzczLDAuMTc5LDAuMTc5LDAuMzczLDAuMDc3LDAuNjE4QzAuMDI3LDAuNzQsMCwwLjg3LDAsMXYxMkMwLDEzLjU1MiwwLjQ0OCwxNCwxLDE0eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik01MiwzOWMtMC41NTIsMC0xLDAuNDQ4LTEsMXY5LjU4NkwzNC43MDcsMzMuMjkyYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0TDQ5LjU4Niw1MUg0MCAgIGMtMC41NTIsMC0xLDAuNDQ4LTEsMXMwLjQ0OCwxLDEsMWgxMmMwLjEzLDAsMC4yNi0wLjAyNywwLjM4Mi0wLjA3N2MwLjI0NC0wLjEwMSwwLjQzOS0wLjI5NiwwLjU0MS0wLjU0MSAgIEM1Mi45NzMsNTIuMjYsNTMsNTIuMTMsNTMsNTJWNDBDNTMsMzkuNDQ4LDUyLjU1MiwzOSw1MiwzOXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.delete-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ni40IDQ4Ni40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODYuNCA0ODYuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ0Niw3MEgzNDQuOFY1My41YzAtMjkuNS0yNC01My41LTUzLjUtNTMuNWgtOTYuMmMtMjkuNSwwLTUzLjUsMjQtNTMuNSw1My41VjcwSDQwLjRjLTcuNSwwLTEzLjUsNi0xMy41LDEzLjUgICAgUzMyLjksOTcsNDAuNCw5N2gyNC40djMxNy4yYzAsMzkuOCwzMi40LDcyLjIsNzIuMiw3Mi4yaDIxMi40YzM5LjgsMCw3Mi4yLTMyLjQsNzIuMi03Mi4yVjk3SDQ0NmM3LjUsMCwxMy41LTYsMTMuNS0xMy41ICAgIFM0NTMuNSw3MCw0NDYsNzB6IE0xNjguNiw1My41YzAtMTQuNiwxMS45LTI2LjUsMjYuNS0yNi41aDk2LjJjMTQuNiwwLDI2LjUsMTEuOSwyNi41LDI2LjVWNzBIMTY4LjZWNTMuNXogTTM5NC42LDQxNC4yICAgIGMwLDI0LjktMjAuMyw0NS4yLTQ1LjIsNDUuMkgxMzdjLTI0LjksMC00NS4yLTIwLjMtNDUuMi00NS4yVjk3aDMwMi45djMxNy4ySDM5NC42eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0yNDMuMiw0MTFjNy41LDAsMTMuNS02LDEzLjUtMTMuNVYxNTguOWMwLTcuNS02LTEzLjUtMTMuNS0xMy41cy0xMy41LDYtMTMuNSwxMy41djIzOC41ICAgIEMyMjkuNyw0MDQuOSwyMzUuNyw0MTEsMjQzLjIsNDExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNTUuMSwzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzE0MS42LDM5MC4xLDE0Ny43LDM5Ni4xLDE1NS4xLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0zMzEuMywzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzMxNy44LDM5MC4xLDMyMy44LDM5Ni4xLDMzMS4zLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.ext-url-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxnPjxnPjxnPjxwYXRoIGQ9Ik00ODAsMjg4djExMmMwLDQ0LjE4My0zNS44MTcsODAtODAsODBIMTEyYy00NC4xODMsMC04MC0zNS44MTctODAtODBWMTEyYzAtNDQuMTgzLDM1LjgxNy04MCw4MC04MGg5NlYwaC05NiAgICAgQzUwLjE0NCwwLDAsNTAuMTQ0LDAsMTEydjI4OGMwLDYxLjg1Niw1MC4xNDQsMTEyLDExMiwxMTJoMjg4YzYxLjg1NiwwLDExMi01MC4xNDQsMTEyLTExMlYyODhINDgweiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNzYsNDE2aDMyVjI4OGMwLTEyNS43NiwxMDcuNTItMTI4LDExMi0xMjhoMTA1LjQ0bC04NC42NCw4NC42NGwyMi41NiwyMi41NmwxMTItMTEyYzYuMjA0LTYuMjQxLDYuMjA0LTE2LjMxOSwwLTIyLjU2ICAgICBsLTExMi0xMTJsLTIyLjcyLDIyLjcybDg0LjgsODQuNjRIMzIwYy0xLjQ0LDAtMTQ0LDEuNzYtMTQ0LDE2MFY0MTZ6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.download-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3MS4yIDQ3MS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzEuMiA0NzEuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ1Ny43LDIzMC4xNWMtNy41LDAtMTMuNSw2LTEzLjUsMTMuNXYxMjIuOGMwLDMzLjQtMjcuMiw2MC41LTYwLjUsNjAuNUg4Ny41Yy0zMy40LDAtNjAuNS0yNy4yLTYwLjUtNjAuNXYtMTI0LjggICAgYzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MTI0LjhjMCw0OC4zLDM5LjMsODcuNSw4Ny41LDg3LjVoMjk2LjJjNDguMywwLDg3LjUtMzkuMyw4Ny41LTg3LjV2LTEyMi44ICAgIEM0NzEuMiwyMzYuMjUsNDY1LjIsMjMwLjE1LDQ1Ny43LDIzMC4xNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMjI2LjEsMzQ2Ljc1YzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNGw4NS44LTg1LjhjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC02Mi43LDYyLjggICAgVjMwLjc1YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjczLjlsLTYyLjgtNjIuOGMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xICAgIEwyMjYuMSwzNDYuNzV6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.close-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3NS4yIDQ3NS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzUuMiA0NzUuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQwNS42LDY5LjZDMzYwLjcsMjQuNywzMDEuMSwwLDIzNy42LDBzLTEyMy4xLDI0LjctMTY4LDY5LjZTMCwxNzQuMSwwLDIzNy42czI0LjcsMTIzLjEsNjkuNiwxNjhzMTA0LjUsNjkuNiwxNjgsNjkuNiAgICBzMTIzLjEtMjQuNywxNjgtNjkuNnM2OS42LTEwNC41LDY5LjYtMTY4UzQ1MC41LDExNC41LDQwNS42LDY5LjZ6IE0zODYuNSwzODYuNWMtMzkuOCwzOS44LTkyLjcsNjEuNy0xNDguOSw2MS43ICAgIHMtMTA5LjEtMjEuOS0xNDguOS02MS43Yy04Mi4xLTgyLjEtODIuMS0yMTUuNywwLTI5Ny44QzEyOC41LDQ4LjksMTgxLjQsMjcsMjM3LjYsMjdzMTA5LjEsMjEuOSwxNDguOSw2MS43ICAgIEM0NjguNiwxNzAuOCw0NjguNiwzMDQuNCwzODYuNSwzODYuNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMzQyLjMsMTMyLjljLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC04NS42LDg1LjZMMTUyLDEzMi45Yy01LjMtNS4zLTEzLjgtNS4zLTE5LjEsMGMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjEgICAgbDg1LjYsODUuNmwtODUuNiw4NS42Yy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRsODUuNi04NS42bDg1LjYsODUuNmMyLjYsMi42LDYuMSw0LDkuNSw0ICAgIGMzLjUsMCw2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xbC04NS40LTg1LjZsODUuNi04NS42QzM0Ny42LDE0Ni43LDM0Ny42LDEzOC4yLDM0Mi4zLDEzMi45eiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.refresh-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OS43MTEgNDg5LjcxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg5LjcxMSA0ODkuNzExOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48Zz48cGF0aCBkPSJNMTEyLjE1Niw5Ny4xMTFjNzIuMy02NS40LDE4MC41LTY2LjQsMjUzLjgtNi43bC01OC4xLDIuMmMtNy41LDAuMy0xMy4zLDYuNS0xMywxNGMwLjMsNy4zLDYuMywxMywxMy41LDEzICAgIGMwLjIsMCwwLjMsMCwwLjUsMGw4OS4yLTMuM2M3LjMtMC4zLDEzLTYuMiwxMy0xMy41di0xYzAtMC4yLDAtMC4zLDAtMC41di0wLjFsMCwwbC0zLjMtODguMmMtMC4zLTcuNS02LjYtMTMuMy0xNC0xMyAgICBjLTcuNSwwLjMtMTMuMyw2LjUtMTMsMTRsMi4xLDU1LjNjLTM2LjMtMjkuNy04MS00Ni45LTEyOC44LTQ5LjNjLTU5LjItMy0xMTYuMSwxNy4zLTE2MCw1Ny4xYy02MC40LDU0LjctODYsMTM3LjktNjYuOCwyMTcuMSAgICBjMS41LDYuMiw3LDEwLjMsMTMuMSwxMC4zYzEuMSwwLDIuMS0wLjEsMy4yLTAuNGM3LjItMS44LDExLjctOS4xLDkuOS0xNi4zQzM2LjY1NiwyMTguMjExLDU5LjA1NiwxNDUuMTExLDExMi4xNTYsOTcuMTExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik00NjIuNDU2LDE5NS41MTFjLTEuOC03LjItOS4xLTExLjctMTYuMy05LjljLTcuMiwxLjgtMTEuNyw5LjEtOS45LDE2LjNjMTYuOSw2OS42LTUuNiwxNDIuNy01OC43LDE5MC43ICAgIGMtMzcuMywzMy43LTg0LjEsNTAuMy0xMzAuNyw1MC4zYy00NC41LDAtODguOS0xNS4xLTEyNC43LTQ0LjlsNTguOC01LjNjNy40LTAuNywxMi45LTcuMiwxMi4yLTE0LjdzLTcuMi0xMi45LTE0LjctMTIuMmwtODguOSw4ICAgIGMtNy40LDAuNy0xMi45LDcuMi0xMi4yLDE0LjdsOCw4OC45YzAuNiw3LDYuNSwxMi4zLDEzLjQsMTIuM2MwLjQsMCwwLjgsMCwxLjItMC4xYzcuNC0wLjcsMTIuOS03LjIsMTIuMi0xNC43bC00LjgtNTQuMSAgICBjMzYuMywyOS40LDgwLjgsNDYuNSwxMjguMyw0OC45YzMuOCwwLjIsNy42LDAuMywxMS4zLDAuM2M1NS4xLDAsMTA3LjUtMjAuMiwxNDguNy01Ny40ICAgIEM0NTYuMDU2LDM1Ny45MTEsNDgxLjY1NiwyNzQuODExLDQ2Mi40NTYsMTk1LjUxMXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==)}.copy{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC4zIDQ4OC4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODguMyA0ODguMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMxNC4yNSw4NS40aC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42djMyNS43YzAsMjEuMywxNy4zLDM4LjYsMzguNiwzOC42aDIyN2MyMS4zLDAsMzguNi0xNy4zLDM4LjYtMzguNlYxMjQgICAgQzM1Mi43NSwxMDIuNywzMzUuNDUsODUuNCwzMTQuMjUsODUuNHogTTMyNS43NSw0NDkuNmMwLDYuNC01LjIsMTEuNi0xMS42LDExLjZoLTIyN2MtNi40LDAtMTEuNi01LjItMTEuNi0xMS42VjEyNCAgICBjMC02LjQsNS4yLTExLjYsMTEuNi0xMS42aDIyN2M2LjQsMCwxMS42LDUuMiwxMS42LDExLjZWNDQ5LjZ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTQwMS4wNSwwaC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42YzAsNy41LDYsMTMuNSwxMy41LDEzLjVzMTMuNS02LDEzLjUtMTMuNWMwLTYuNCw1LjItMTEuNiwxMS42LTExLjZoMjI3ICAgIGM2LjQsMCwxMS42LDUuMiwxMS42LDExLjZ2MzI1LjdjMCw2LjQtNS4yLDExLjYtMTEuNiwxMS42Yy03LjUsMC0xMy41LDYtMTMuNSwxMy41czYsMTMuNSwxMy41LDEzLjVjMjEuMywwLDM4LjYtMTcuMywzOC42LTM4LjYgICAgVjM4LjZDNDM5LjY1LDE3LjMsNDIyLjM1LDAsNDAxLjA1LDB6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}"]
            }]
    }], null, { refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], navigate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], download: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], fullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], customEmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], currentImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], buttonsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with clickable dots (small circles) to navigate between images inside the modal gallery.
 */
class DotsComponent extends AccessibleComponent {
    constructor() {
        super(...arguments);
        /**
         * Object of type `DotsConfig` to init DotsComponent's features.
         * For instance, it contains a param to show/hide this component.
         */
        this.dotsConfig = { visible: true };
        /**
         * Output to emit clicks on dots. The payload contains a number that represent
         * the index of the clicked dot.
         */
        this.clickDot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Method ´ngOnInit´ to build `configDots` applying a default value.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const defaultConfig = { visible: true };
        this.configDots = Object.assign(defaultConfig, this.dotsConfig);
    }
    /**
     * Method ´ngOnChanges´ to change `configDots` if the input dotsConfig is changed.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const dotsConfigChanges = changes.dotsConfig;
        if (dotsConfigChanges && dotsConfigChanges.currentValue !== dotsConfigChanges.previousValue) {
            this.configDots = dotsConfigChanges.currentValue;
        }
    }
    /**
     * Method to check if an image is active (i.e. the current image).
     * It checks currentImage and images to prevent errors.
     * @param {?} index
     * @return {?} boolean true if is active (and input params are valid), false otherwise
     */
    isActive(index) {
        if (!this.currentImage || !this.images || this.images.length === 0) {
            return false;
        }
        /** @type {?} */
        let imageIndex;
        try {
            imageIndex = getIndex(this.currentImage, this.images);
        }
        catch (err) {
            console.error(`Internal error while trying to show the active 'dot'`, err);
            return false;
        }
        return index === imageIndex;
    }
    /**
     * Method called by events from keyboard and mouse.
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    onDotEvent(index, event) {
        /** @type {?} */
        const result = super.handleImageEvent(event);
        if (result === NEXT) {
            this.clickDot.emit(index);
        }
    }
    /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    trackById(index, item) {
        return item.id;
    }
}
DotsComponent.ɵfac = /*@__PURE__*/ function () { let ɵDotsComponent_BaseFactory; return function DotsComponent_Factory(t) { return (ɵDotsComponent_BaseFactory || (ɵDotsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DotsComponent)))(t || DotsComponent); }; }();
DotsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DotsComponent, selectors: [["ks-dots"]], inputs: { dotsConfig: "dotsConfig", currentImage: "currentImage", images: "images", accessibilityConfig: "accessibilityConfig" }, outputs: { clickDot: "clickDot" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 3, consts: [[1, "dots-container", 3, "title"], [4, "ngIf"], ["class", "inside dot", "role", "navigation", 3, "ngClass", "tabindex", "click", "keyup", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "navigation", 1, "inside", "dot", 3, "ngClass", "tabindex", "click", "keyup"]], template: function DotsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DotsComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.dotsContainerTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.dotsContainerAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.configDots || (ctx.configDots == null ? null : ctx.configDots.visible));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".dots-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;margin-bottom:30px}.dots-container[_ngcontent-%COMP%] > .dot[_ngcontent-%COMP%]{background:#fff;border-radius:5px;height:10px;margin-left:4px;margin-right:4px;width:10px;cursor:pointer;opacity:.5}.dots-container[_ngcontent-%COMP%] > .dot[_ngcontent-%COMP%]:hover{opacity:.9;transition:opacity .5s}.dots-container[_ngcontent-%COMP%] > .dot.active[_ngcontent-%COMP%]{cursor:pointer;opacity:.9}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}"], changeDetection: 0 });
DotsComponent.propDecorators = {
    currentImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dotsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    clickDot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DotsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ks-dots',
                template: "<nav class=\"dots-container\" [attr.aria-label]=\"accessibilityConfig?.dotsContainerAriaLabel\"\n     [title]=\"accessibilityConfig?.dotsContainerTitle\">\n  <ng-container *ngIf=\"!configDots || configDots?.visible\">\n    <div class=\"inside dot\"\n         *ngFor=\"let img of images; trackBy: trackById; let index = index\"\n         [ngClass]=\"{'active': isActive(index)}\"\n         [attr.aria-label]=\"accessibilityConfig?.dotAriaLabel + ' ' + (index + 1)\"\n         [tabindex]=\"0\" role=\"navigation\"\n         (click)=\"onDotEvent(index, $event)\" (keyup)=\"onDotEvent(index, $event)\"></div>\n  </ng-container>\n</nav>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".dots-container{display:flex;flex-direction:row;justify-content:center;margin-bottom:30px}.dots-container>.dot{background:#fff;border-radius:5px;height:10px;margin-left:4px;margin-right:4px;width:10px;cursor:pointer;opacity:.5}.dots-container>.dot:hover{opacity:.9;transition:opacity .5s}.dots-container>.dot.active{cursor:pointer;opacity:.9}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}"]
            }]
    }], null, { dotsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], clickDot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], currentImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with image previews
 */
class PreviewsComponent extends AccessibleComponent {
    constructor() {
        super(...arguments);
        /**
         * Output to emit the clicked preview. The payload contains the `ImageEvent` associated to the clicked preview.
         */
        this.clickPreview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        // /**
        //  * Output to emit the clicked arrow. The payload contains which arrow (left or right).
        //  */
        // @Output()
        // clickArrow: EventEmitter<InteractionEvent> = new EventEmitter<InteractionEvent>();
        /**
         * Enum of type `Action` that represents a mouse click on a button.
         * Declared here to be used inside the template.
         */
        this.clickAction = Action.CLICK;
        /**
         * Enum of type `Action` that represents a keyboard action.
         * Declared here to be used inside the template.
         */
        this.keyboardAction = Action.KEYBOARD;
        /**
         * Array of `InternalLibImage` exposed to the template. This field is initialized
         * applying transformations, default values and so on to the input of the same type.
         */
        this.previews = [];
        /**
         * Default preview's size object, also used in the template to apply default sizes to ksSize's directive.
         */
        this.defaultPreviewSize = { height: '50px', width: 'auto' };
        /**
         * Default preview's config object
         */
        this.defaultPreviewConfig = {
            visible: true,
            number: 3,
            arrows: true,
            clickable: true,
            // alwaysCenter: false, // TODO still not implemented
            size: this.defaultPreviewSize
        };
    }
    /**
     * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
     * init the `previews` array.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ngOnInit() {
        this.configPreview = Object.assign({}, this.defaultPreviewConfig, this.previewConfig);
        // if number is <= 0 reset to default
        if (this.configPreview && this.configPreview.number && this.configPreview.number <= 0) {
            this.configPreview.number = this.defaultPreviewConfig.number;
        }
        // init previews based on currentImage and the full array of images
        this.initPreviews(this.currentImage, this.images);
    }
    /**
     * Method to check if an image is active (i.e. a preview image).
     * @param {?} preview
     * @return {?} boolean true if is active, false otherwise
     */
    isActive(preview) {
        if (!preview || !this.currentImage) {
            return false;
        }
        return preview.id === this.currentImage.id;
    }
    // TODO improve this method to simplify the sourcecode + remove duplicated codelines
    /**
     * Method ´ngOnChanges´ to update `previews` array.
     * Also, both `start` and `end` local variables will be updated accordingly.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const images = changes.images;
        /** @type {?} */
        const currentImage = changes.currentImage;
        /** @type {?} */
        let prev;
        /** @type {?} */
        let current;
        if (currentImage) {
            prev = currentImage.previousValue;
            current = currentImage.currentValue;
        }
        else {
            current = this.currentImage;
        }
        if (current && images && images.previousValue && images.currentValue) {
            // I'm in this if statement, if input images are changed (for instance, because I removed one of them with the 'delete button',
            // or because users changed the images array while modal gallery is still open).
            // In this case, I have to re-init previews, because the input array of images is changed.
            this.initPreviews(current, images.currentValue);
        }
        if (prev && current && prev.id !== current.id) {
            this.updatePreviews(prev, current);
        }
    }
    /**
     * Method called by events from both keyboard and mouse on a preview.
     * This will trigger the `clickpreview` output with the input preview as its payload.
     * @param {?} preview
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    onImageEvent(preview, event, action = Action.NORMAL) {
        if (!this.configPreview || !this.configPreview.clickable) {
            return;
        }
        /** @type {?} */
        const result = super.handleImageEvent(event);
        if (result === NEXT || result === PREV) {
            this.clickPreview.emit(new ImageModalEvent(action, getIndex(preview, this.images)));
        }
    }
    /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * It also emits an event to specify which arrow.
     * @param {?} direction
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    onNavigationEvent(direction, event, action = Action.NORMAL) {
        /** @type {?} */
        const result = super.handleNavigationEvent(direction, event);
        if (result === NEXT) {
            // this.clickArrow.emit(<InteractionEvent>{ source: 'modal-previews', payload: DIRECTION_RIGHT, action: action });
            this.next();
        }
        else if (result === PREV) {
            // this.clickArrow.emit(<InteractionEvent>{ source: 'modal-previews', payload: DIRECTION_LEFT, action: action });
            this.previous();
        }
    }
    /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    trackById(index, item) {
        return item.id;
    }
    /**
     * Private method to init previews based on the currentImage and the full array of images.
     * The current image in mandatory to show always the current preview (as highlighted).
     * @private
     * @param {?} currentImage
     * @param {?} images
     * @return {?}
     */
    initPreviews(currentImage, images) {
        /** @type {?} */
        let index;
        try {
            index = getIndex(currentImage, images);
        }
        catch (err) {
            throw err;
        }
        switch (index) {
            case 0:
                // first image
                this.setBeginningIndexesPreviews();
                break;
            case images.length - 1:
                // last image
                this.setEndIndexesPreviews();
                break;
            default:
                // other images
                this.setIndexesPreviews();
                break;
        }
        this.previews = images.filter((/**
         * @param {?} img
         * @param {?} i
         * @return {?}
         */
        (img, i) => i >= this.start && i < this.end));
    }
    /**
     * Private method to init both `start` and `end` to the beginning.
     * @private
     * @return {?}
     */
    setBeginningIndexesPreviews() {
        this.start = 0;
        this.end = Math.min((/** @type {?} */ (this.configPreview.number)), this.images.length);
    }
    /**
     * Private method to init both `start` and `end` to the end.
     * @private
     * @return {?}
     */
    setEndIndexesPreviews() {
        this.start = this.images.length - 1 - ((/** @type {?} */ (this.configPreview.number)) - 1);
        this.end = this.images.length;
    }
    /**
     * Private method to update both `start` and `end` based on the currentImage.
     * @private
     * @return {?}
     */
    setIndexesPreviews() {
        this.start = getIndex(this.currentImage, this.images) - Math.floor((/** @type {?} */ (this.configPreview.number)) / 2);
        this.end = getIndex(this.currentImage, this.images) + Math.floor((/** @type {?} */ (this.configPreview.number)) / 2) + 1;
    }
    /**
     * Private method to update the visible previews navigating to the right (next).
     * @private
     * @return {?}
     */
    next() {
        // check if nextImage should be blocked
        if (this.isPreventSliding(this.images.length - 1)) {
            return;
        }
        if (this.end === this.images.length) {
            return;
        }
        this.start++;
        this.end = Math.min(this.end + 1, this.images.length);
        this.previews = this.images.filter((/**
         * @param {?} img
         * @param {?} i
         * @return {?}
         */
        (img, i) => i >= this.start && i < this.end));
    }
    /**
     * Private method to update the visible previews navigating to the left (previous).
     * @private
     * @return {?}
     */
    previous() {
        // check if prevImage should be blocked
        if (this.isPreventSliding(0)) {
            return;
        }
        if (this.start === 0) {
            return;
        }
        this.start = Math.max(this.start - 1, 0);
        this.end = Math.min(this.end - 1, this.images.length);
        this.previews = this.images.filter((/**
         * @param {?} img
         * @param {?} i
         * @return {?}
         */
        (img, i) => i >= this.start && i < this.end));
    }
    /**
     * Private method to block/permit sliding between previews.
     * @private
     * @param {?} boundaryIndex
     * @return {?} boolean if true block sliding, otherwise not
     */
    isPreventSliding(boundaryIndex) {
        return !!this.slideConfig && this.slideConfig.infinite === false && getIndex(this.currentImage, this.images) === boundaryIndex;
    }
    /**
     * Private method to handle navigation changing the previews array and other variables.
     * @private
     * @param {?} prev
     * @param {?} current
     * @return {?}
     */
    updatePreviews(prev, current) {
        // to manage infinite sliding I have to reset both `start` and `end` at the beginning
        // to show again previews from the first image.
        // This happens when you navigate over the last image to return to the first one
        /** @type {?} */
        let prevIndex;
        /** @type {?} */
        let currentIndex;
        try {
            prevIndex = getIndex(prev, this.images);
            currentIndex = getIndex(current, this.images);
        }
        catch (err) {
            console.error('Cannot get previous and current image indexes in previews');
            throw err;
        }
        if (prevIndex === this.images.length - 1 && currentIndex === 0) {
            // first image
            this.setBeginningIndexesPreviews();
            this.previews = this.images.filter((/**
             * @param {?} img
             * @param {?} i
             * @return {?}
             */
            (img, i) => i >= this.start && i < this.end));
            return;
        }
        // the same for the opposite case, when you navigate back from the fist image to go to the last one.
        if (prevIndex === 0 && currentIndex === this.images.length - 1) {
            // last image
            this.setEndIndexesPreviews();
            this.previews = this.images.filter((/**
             * @param {?} img
             * @param {?} i
             * @return {?}
             */
            (img, i) => i >= this.start && i < this.end));
            return;
        }
        // otherwise manage standard scenarios
        if (prevIndex > currentIndex) {
            this.previous();
        }
        else if (prevIndex < currentIndex) {
            this.next();
        }
    }
}
PreviewsComponent.ɵfac = /*@__PURE__*/ function () { let ɵPreviewsComponent_BaseFactory; return function PreviewsComponent_Factory(t) { return (ɵPreviewsComponent_BaseFactory || (ɵPreviewsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PreviewsComponent)))(t || PreviewsComponent); }; }();
PreviewsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewsComponent, selectors: [["ks-previews"]], inputs: { currentImage: "currentImage", images: "images", slideConfig: "slideConfig", previewConfig: "previewConfig", accessibilityConfig: "accessibilityConfig" }, outputs: { clickPreview: "clickPreview" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 3, consts: [[1, "previews-container", 3, "title"], [4, "ngIf"], ["role", "button", 1, "nav-left", 3, "tabindex", "click", "keyup"], ["aria-hidden", "true", 3, "title"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "button", 1, "nav-right", 3, "tabindex", "click", "keyup"], ["ksSize", "", "role", "img", 3, "class", "src", "sizeConfig", "title", "alt", "tabindex", "click", "keyup", 4, "ngIf"], ["ksSize", "", "role", "img", 3, "src", "sizeConfig", "title", "alt", "tabindex", "click", "keyup"]], template: function PreviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewsComponent_ng_container_1_Template, 6, 14, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.previewsContainerTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.previewsContainerAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.configPreview == null ? null : ctx.configPreview.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, SizeDirective], styles: ["@media only screen and (max-width:767px),only screen and (max-device-width:767px){.previews-container[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]{display:none}}@media only screen and (min-device-width:768px){.previews-container[_ngcontent-%COMP%]{align-items:center;-webkit-animation:.8s fadein-semi-visible08;animation:.8s fadein-semi-visible08;display:flex;flex-direction:row;justify-content:center;margin-bottom:15px}.previews-container[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]{cursor:pointer;margin-left:2px;margin-right:2px;opacity:.7;height:50px}.previews-container[_ngcontent-%COMP%] > .preview-image.active[_ngcontent-%COMP%]{opacity:1}.previews-container[_ngcontent-%COMP%] > .preview-image.unclickable[_ngcontent-%COMP%]{cursor:not-allowed}.previews-container[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]:hover{opacity:1;transition:opacity .5s}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{color:#919191;cursor:pointer;transition:.5s}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{margin-right:10px}.previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{margin-left:10px}}@-webkit-keyframes fadein-visible{from{opacity:0}to{opacity:1}}@keyframes fadein-visible{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}", _c10], changeDetection: 0 });
PreviewsComponent.propDecorators = {
    currentImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    slideConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    previewConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    clickPreview: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ks-previews',
                template: "<nav class=\"previews-container\"\n     [attr.aria-label]=\"accessibilityConfig?.previewsContainerAriaLabel\"\n     [title]=\"accessibilityConfig?.previewsContainerTitle\">\n\n  <ng-container *ngIf=\"configPreview?.visible\">\n    <a class=\"nav-left\"\n       [attr.aria-label]=\"accessibilityConfig?.previewScrollPrevAriaLabel\"\n       [tabindex]=\"configPreview.arrows && start > 0 ? 0 : -1\" role=\"button\"\n       (click)=\"onNavigationEvent('left', $event)\" (keyup)=\"onNavigationEvent('left', $event)\">\n      <div class=\"inside {{configPreview.arrows && start > 0 ? 'left-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig?.previewScrollPrevTitle\"></div>\n    </a>\n\n    <ng-container *ngFor=\"let preview of previews; trackBy: trackById; let index = index\">\n      <img *ngIf=\"preview?.modal?.img\"\n           class=\"inside preview-image {{isActive(preview) ? 'active' : ''}}{{!configPreview.clickable ? ' unclickable' : ''}}\"\n           [src]=\"preview.plain?.img ? preview.plain.img : preview.modal.img\"\n           ksSize [sizeConfig]=\"{width: configPreview.size ? configPreview.size.width : defaultPreviewSize.width,\n                                 height: configPreview.size ? configPreview.size.height : defaultPreviewSize.height}\"\n           [attr.aria-label]=\"preview.modal.ariaLabel ? preview.modal.ariaLabel : ''\"\n           [title]=\"preview.modal.title ? preview.modal.title : ''\"\n           alt=\"{{preview.modal.alt ? preview.modal.alt : ''}}\"\n           [tabindex]=\"0\" role=\"img\"\n           (click)=\"onImageEvent(preview, $event, clickAction)\" (keyup)=\"onImageEvent(preview, $event, keyboardAction)\"/>\n    </ng-container>\n\n\n    <a class=\"nav-right\"\n       [attr.aria-label]=\"accessibilityConfig?.previewScrollNextAriaLabel\"\n       [tabindex]=\"configPreview.arrows && end < images.length ? 0 : -1\" role=\"button\"\n       (click)=\"onNavigationEvent('right', $event)\" (keyup)=\"onNavigationEvent('right', $event)\">\n      <div class=\"inside {{configPreview.arrows && end < images.length ? 'right-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig?.previewScrollNextTitle\"></div>\n    </a>\n  </ng-container>\n\n</nav>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: ["@media only screen and (max-width:767px),only screen and (max-device-width:767px){.previews-container,.previews-container>.nav-left,.previews-container>.nav-right,.previews-container>.preview-image{display:none}}@media only screen and (min-device-width:768px){.previews-container{align-items:center;-webkit-animation:.8s fadein-semi-visible08;animation:.8s fadein-semi-visible08;display:flex;flex-direction:row;justify-content:center;margin-bottom:15px}.previews-container>.preview-image{cursor:pointer;margin-left:2px;margin-right:2px;opacity:.7;height:50px}.previews-container>.preview-image.active{opacity:1}.previews-container>.preview-image.unclickable{cursor:not-allowed}.previews-container>.preview-image:hover{opacity:1;transition:opacity .5s}.previews-container .nav,.previews-container>.nav-left,.previews-container>.nav-right{color:#919191;cursor:pointer;transition:.5s}.previews-container .nav:hover,.previews-container>.nav-left:hover,.previews-container>.nav-right:hover{transform:scale(1.1)}.previews-container>.nav-left{margin-right:10px}.previews-container>.nav-right{margin-left:10px}}@-webkit-keyframes fadein-visible{from{opacity:0}to{opacity:1}}@keyframes fadein-visible{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}", ".arrow-preview-image,.empty-arrow-preview-image,.left-arrow-preview-image,.right-arrow-preview-image{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image{background:#000;opacity:0}.left-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.left-arrow-preview-image:hover{transform:scale(1.2)}.right-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.right-arrow-preview-image:hover{transform:scale(1.2)}"]
            }]
    }], null, { clickPreview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], currentImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], slideConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], previewConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with the loading spinner
 */
class LoadingSpinnerComponent {
    constructor() {
        /**
         * Enum of type `LoadingType` to choose the standard loading spinner.
         * Declared here to be used inside the template.
         */
        this.loadingStandard = LoadingType.STANDARD;
        /**
         * Enum of type `LoadingType` to choose the bars loading spinner.
         * Declared here to be used inside the template.
         */
        this.loadingBars = LoadingType.BARS;
        /**
         * Enum of type `LoadingType` to choose the circular loading spinner.
         * Declared here to be used inside the template.
         */
        this.loadingCircular = LoadingType.CIRCULAR;
        /**
         * Enum of type `LoadingType` to choose the dots loading spinner.
         * Declared here to be used inside the template.
         */
        this.loadingDots = LoadingType.DOTS;
        /**
         * Enum of type `LoadingType` to choose the cube flipping loading spinner.
         * Declared here to be used inside the template.
         */
        this.loadingCubeFlipping = LoadingType.CUBE_FLIPPING;
        /**
         * Enum of type `LoadingType` to choose the circles loading spinner.
         * Declared here to be used inside the template.
         */
        this.loadingCircles = LoadingType.CIRCLES;
        /**
         * Enum of type `LoadingType` to choose the explosing squares loading spinner.
         * Declared here to be used inside the template.
         */
        this.loadingExplosingSquares = LoadingType.EXPLOSING_SQUARES;
    }
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["ks-loading-spinner"]], inputs: { loadingConfig: "loadingConfig", accessibilityConfig: "accessibilityConfig" }, decls: 9, vars: 10, consts: [[3, "title"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "cssload-loader"], [1, "cssload-inner", "cssload-one"], [1, "cssload-inner", "cssload-two"], [1, "cssload-inner", "cssload-three"], [1, "loader-bars"], [1, "loader-circular"], [1, "loader-dots"], [1, "cube-wrapper"], [1, "cube-folding"], [1, "leaf1"], [1, "leaf2"], [1, "leaf3"], [1, "leaf4"], ["id", "preloader"], ["id", "loader"], [1, "loader"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoadingSpinnerComponent_ng_container_2_Template, 5, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoadingSpinnerComponent_ng_container_3_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoadingSpinnerComponent_ng_container_4_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoadingSpinnerComponent_ng_container_5_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoadingSpinnerComponent_ng_container_6_Template, 7, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoadingSpinnerComponent_ng_container_7_Template, 3, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoadingSpinnerComponent_ng_container_8_Template, 6, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.loadingSpinnerTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.loadingSpinnerAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.loadingConfig.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.loadingStandard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.loadingBars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.loadingCircular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.loadingDots);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.loadingCubeFlipping);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.loadingCircles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.loadingExplosingSquares);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase], styles: [".cssload-loader[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:64px;height:64px;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;perspective:800px}.cssload-inner[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;box-sizing:border-box;-o-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%}.cssload-inner.cssload-one[_ngcontent-%COMP%]{left:0;top:0;animation:.6s linear infinite cssload-rotate-one;-o-animation:.6s linear infinite cssload-rotate-one;-ms-animation:cssload-rotate-one .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-one;-moz-animation:.6s linear infinite cssload-rotate-one;border-bottom:3px solid rgba(255,255,255,.99)}.cssload-inner.cssload-two[_ngcontent-%COMP%]{right:0;top:0;animation:.6s linear infinite cssload-rotate-two;-o-animation:.6s linear infinite cssload-rotate-two;-ms-animation:cssload-rotate-two .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-two;-moz-animation:.6s linear infinite cssload-rotate-two;border-right:3px solid #fff}.cssload-inner.cssload-three[_ngcontent-%COMP%]{right:0;bottom:0;animation:.6s linear infinite cssload-rotate-three;-o-animation:.6s linear infinite cssload-rotate-three;-ms-animation:cssload-rotate-three .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-three;-moz-animation:.6s linear infinite cssload-rotate-three;border-top:3px solid #fff}@keyframes cssload-rotate-one{0%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-one{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@keyframes cssload-rotate-two{0%{transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-two{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@keyframes cssload-rotate-three{0%{transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-three{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}", ".loader-dots[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:0;left:0;color:#fefcff;font-size:10px;margin:auto;width:1em;height:1em;border-radius:50%;text-indent:-9999em;-webkit-animation:1.3s linear infinite load4;animation:1.3s linear infinite load4;transform:translateZ(0)}@-webkit-keyframes load4{0%,100%{box-shadow:0 -3em 0 .2em,2em -2em 0 0,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 .2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em 0 0,3em 0 0 .2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 0,2em 2em 0 .2em,0 3em 0 0,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0,0 3em 0 .2em,-2em 2em 0 0,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 .2em,-3em 0 0 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 .2em,-2em -2em 0 0}87.5%{box-shadow:0 -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 0,-2em -2em 0 .2em}}@keyframes load4{0%,100%{box-shadow:0 -3em 0 .2em,2em -2em 0 0,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 .2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em 0 0,3em 0 0 .2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 0,2em 2em 0 .2em,0 3em 0 0,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0,0 3em 0 .2em,-2em 2em 0 0,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 .2em,-3em 0 0 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 .2em,-2em -2em 0 0}87.5%{box-shadow:0 -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 0,-2em -2em 0 .2em}}", ".loader-bars[_ngcontent-%COMP%], .loader-bars[_ngcontent-%COMP%]:after, .loader-bars[_ngcontent-%COMP%]:before{background:#fefcff;-webkit-animation:1s ease-in-out infinite load1;animation:1s ease-in-out infinite load1;width:1em;height:4em}.loader-bars[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:0;left:0;color:#fefcff;text-indent:-9999em;margin:auto;font-size:11px;transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.loader-bars[_ngcontent-%COMP%]:after, .loader-bars[_ngcontent-%COMP%]:before{position:absolute;top:0;content:''}.loader-bars[_ngcontent-%COMP%]:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader-bars[_ngcontent-%COMP%]:after{left:1.5em}@-webkit-keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}", ".loader-circular[_ngcontent-%COMP%], .loader-circular[_ngcontent-%COMP%]:after{border-radius:50%;width:10em;height:10em}.loader-circular[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;font-size:10px;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #fff;transform:translateZ(0);-webkit-animation:1.1s linear infinite load8;animation:1.1s linear infinite load8}@-webkit-keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".cube-folding[_ngcontent-%COMP%]{width:50px;height:50px;display:inline-block;transform:rotate(45deg);font-size:0}.cube-folding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;width:25px;height:25px;transform:scale(1.1);display:inline-block}.cube-folding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before{content:'';background-color:#fff;position:absolute;left:0;top:0;display:block;width:25px;height:25px;transform-origin:100% 100%;-webkit-animation:2.5s linear infinite both folding;animation:2.5s linear infinite both folding}.cube-folding[_ngcontent-%COMP%]   .leaf2[_ngcontent-%COMP%]{transform:rotateZ(90deg) scale(1.1)}.cube-folding[_ngcontent-%COMP%]   .leaf2[_ngcontent-%COMP%]::before{-webkit-animation-delay:.3s;animation-delay:.3s;background-color:#f2f2f2}.cube-folding[_ngcontent-%COMP%]   .leaf3[_ngcontent-%COMP%]{transform:rotateZ(270deg) scale(1.1)}.cube-folding[_ngcontent-%COMP%]   .leaf3[_ngcontent-%COMP%]::before{-webkit-animation-delay:.9s;animation-delay:.9s;background-color:#f2f2f2}.cube-folding[_ngcontent-%COMP%]   .leaf4[_ngcontent-%COMP%]{transform:rotateZ(180deg) scale(1.1)}.cube-folding[_ngcontent-%COMP%]   .leaf4[_ngcontent-%COMP%]::before{-webkit-animation-delay:.6s;animation-delay:.6s;background-color:#e6e6e6}@-webkit-keyframes folding{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes folding{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}.cube-wrapper[_ngcontent-%COMP%]{position:fixed;left:50%;top:50%;margin-top:-50px;margin-left:-50px;width:100px;height:100px;text-align:center}@-webkit-keyframes text{100%{top:35px}}@keyframes text{100%{top:35px}}@-webkit-keyframes shadow{100%{bottom:-18px;width:100px}}@keyframes shadow{100%{bottom:-18px;width:100px}}", "#preloader[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}#loader[_ngcontent-%COMP%]{display:block;position:relative;left:50%;top:50%;width:100px;height:100px;margin:-75px 0 0 -75px;border-radius:50%;border:3px solid transparent;border-top-color:#b4b4b4;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}#loader[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:5px;left:5px;right:5px;bottom:5px;border-radius:50%;border:3px solid transparent;border-top-color:#d9d9d9;-webkit-animation:3s linear infinite spin;animation:3s linear infinite spin}#loader[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:15px;left:15px;right:15px;bottom:15px;border-radius:50%;border:3px solid transparent;border-top-color:#fff;-webkit-animation:1.5s linear infinite spin;animation:1.5s linear infinite spin}@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", "@-webkit-keyframes loader{0%,10%,100%{width:60px;height:60px}65%{width:150px;height:150px}}@keyframes loader{0%,10%,100%{width:60px;height:60px}65%{width:150px;height:150px}}@-webkit-keyframes loaderBlock{0%,30%{transform:rotate(0)}55%{background-color:#b4b4b4}100%{transform:rotate(90deg)}}@keyframes loaderBlock{0%,30%{transform:rotate(0)}55%{background-color:#b4b4b4}100%{transform:rotate(90deg)}}@-webkit-keyframes loaderBlockInverse{0%,20%{transform:rotate(0)}55%{background-color:#d9d9d9}100%{transform:rotate(-90deg)}}@keyframes loaderBlockInverse{0%,20%{transform:rotate(0)}55%{background-color:#d9d9d9}100%{transform:rotate(-90deg)}}.loader[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:60px;height:60px;transform:translate(-50%,-50%) rotate(45deg) translate3d(0,0,0);-webkit-animation:1.2s ease-in-out infinite loader;animation:1.2s ease-in-out infinite loader}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:block;width:40px;height:40px;background-color:#fff;-webkit-animation:1.2s ease-in-out infinite both loaderBlock;animation:1.2s ease-in-out infinite both loaderBlock}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){top:0;left:0}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){top:0;right:0;-webkit-animation:1.2s ease-in-out infinite both loaderBlockInverse;animation:1.2s ease-in-out infinite both loaderBlockInverse}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){bottom:0;left:0;-webkit-animation:1.2s ease-in-out infinite both loaderBlockInverse;animation:1.2s ease-in-out infinite both loaderBlockInverse}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){bottom:0;right:0}"], changeDetection: 0 });
LoadingSpinnerComponent.propDecorators = {
    loadingConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ks-loading-spinner',
                template: "<div [attr.aria-label]=\"accessibilityConfig?.loadingSpinnerAriaLabel\"\n     [title]=\"accessibilityConfig?.loadingSpinnerTitle\">\n\n  <ng-container [ngSwitch]=\"loadingConfig.type\">\n    <ng-container *ngSwitchCase=\"loadingStandard\">\n      <div class=\"cssload-loader\">\n        <div class=\"cssload-inner cssload-one\"></div>\n        <div class=\"cssload-inner cssload-two\"></div>\n        <div class=\"cssload-inner cssload-three\"></div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingBars\">\n      <div class=\"loader-bars\">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingCircular\">\n      <div class=\"loader-circular\">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingDots\">\n      <div class=\"loader-dots\">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingCubeFlipping\">\n      <div class=\"cube-wrapper\">\n        <div class=\"cube-folding\">\n          <span class=\"leaf1\"></span>\n          <span class=\"leaf2\"></span>\n          <span class=\"leaf3\"></span>\n          <span class=\"leaf4\"></span>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingCircles\">\n      <div id=\"preloader\">\n        <div id=\"loader\"></div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingExplosingSquares\">\n      <div class=\"loader\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n    </ng-container>\n    <!--<ng-container *ngSwitchDefault>-->\n    <!---->\n    <!--</ng-container>-->\n  </ng-container>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".cssload-loader{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:64px;height:64px;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;perspective:800px}.cssload-inner{position:absolute;width:100%;height:100%;box-sizing:border-box;-o-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%}.cssload-inner.cssload-one{left:0;top:0;animation:.6s linear infinite cssload-rotate-one;-o-animation:.6s linear infinite cssload-rotate-one;-ms-animation:cssload-rotate-one .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-one;-moz-animation:.6s linear infinite cssload-rotate-one;border-bottom:3px solid rgba(255,255,255,.99)}.cssload-inner.cssload-two{right:0;top:0;animation:.6s linear infinite cssload-rotate-two;-o-animation:.6s linear infinite cssload-rotate-two;-ms-animation:cssload-rotate-two .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-two;-moz-animation:.6s linear infinite cssload-rotate-two;border-right:3px solid #fff}.cssload-inner.cssload-three{right:0;bottom:0;animation:.6s linear infinite cssload-rotate-three;-o-animation:.6s linear infinite cssload-rotate-three;-ms-animation:cssload-rotate-three .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-three;-moz-animation:.6s linear infinite cssload-rotate-three;border-top:3px solid #fff}@keyframes cssload-rotate-one{0%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-one{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@keyframes cssload-rotate-two{0%{transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-two{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@keyframes cssload-rotate-three{0%{transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-three{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}", ".loader-dots{position:absolute;top:0;bottom:0;right:0;left:0;color:#fefcff;font-size:10px;margin:auto;width:1em;height:1em;border-radius:50%;text-indent:-9999em;-webkit-animation:1.3s linear infinite load4;animation:1.3s linear infinite load4;transform:translateZ(0)}@-webkit-keyframes load4{0%,100%{box-shadow:0 -3em 0 .2em,2em -2em 0 0,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 .2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em 0 0,3em 0 0 .2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 0,2em 2em 0 .2em,0 3em 0 0,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0,0 3em 0 .2em,-2em 2em 0 0,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 .2em,-3em 0 0 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 .2em,-2em -2em 0 0}87.5%{box-shadow:0 -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 0,-2em -2em 0 .2em}}@keyframes load4{0%,100%{box-shadow:0 -3em 0 .2em,2em -2em 0 0,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 .2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em 0 0,3em 0 0 .2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 0,2em 2em 0 .2em,0 3em 0 0,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0,0 3em 0 .2em,-2em 2em 0 0,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 .2em,-3em 0 0 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 .2em,-2em -2em 0 0}87.5%{box-shadow:0 -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 0,-2em -2em 0 .2em}}", ".loader-bars,.loader-bars:after,.loader-bars:before{background:#fefcff;-webkit-animation:1s ease-in-out infinite load1;animation:1s ease-in-out infinite load1;width:1em;height:4em}.loader-bars{position:absolute;top:0;bottom:0;right:0;left:0;color:#fefcff;text-indent:-9999em;margin:auto;font-size:11px;transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.loader-bars:after,.loader-bars:before{position:absolute;top:0;content:''}.loader-bars:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader-bars:after{left:1.5em}@-webkit-keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}", ".loader-circular,.loader-circular:after{border-radius:50%;width:10em;height:10em}.loader-circular{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;font-size:10px;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #fff;transform:translateZ(0);-webkit-animation:1.1s linear infinite load8;animation:1.1s linear infinite load8}@-webkit-keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".cube-folding{width:50px;height:50px;display:inline-block;transform:rotate(45deg);font-size:0}.cube-folding span{position:relative;width:25px;height:25px;transform:scale(1.1);display:inline-block}.cube-folding span::before{content:'';background-color:#fff;position:absolute;left:0;top:0;display:block;width:25px;height:25px;transform-origin:100% 100%;-webkit-animation:2.5s linear infinite both folding;animation:2.5s linear infinite both folding}.cube-folding .leaf2{transform:rotateZ(90deg) scale(1.1)}.cube-folding .leaf2::before{-webkit-animation-delay:.3s;animation-delay:.3s;background-color:#f2f2f2}.cube-folding .leaf3{transform:rotateZ(270deg) scale(1.1)}.cube-folding .leaf3::before{-webkit-animation-delay:.9s;animation-delay:.9s;background-color:#f2f2f2}.cube-folding .leaf4{transform:rotateZ(180deg) scale(1.1)}.cube-folding .leaf4::before{-webkit-animation-delay:.6s;animation-delay:.6s;background-color:#e6e6e6}@-webkit-keyframes folding{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes folding{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}.cube-wrapper{position:fixed;left:50%;top:50%;margin-top:-50px;margin-left:-50px;width:100px;height:100px;text-align:center}@-webkit-keyframes text{100%{top:35px}}@keyframes text{100%{top:35px}}@-webkit-keyframes shadow{100%{bottom:-18px;width:100px}}@keyframes shadow{100%{bottom:-18px;width:100px}}", "#preloader{position:fixed;top:0;left:0;width:100%;height:100%}#loader{display:block;position:relative;left:50%;top:50%;width:100px;height:100px;margin:-75px 0 0 -75px;border-radius:50%;border:3px solid transparent;border-top-color:#b4b4b4;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}#loader:before{content:\"\";position:absolute;top:5px;left:5px;right:5px;bottom:5px;border-radius:50%;border:3px solid transparent;border-top-color:#d9d9d9;-webkit-animation:3s linear infinite spin;animation:3s linear infinite spin}#loader:after{content:\"\";position:absolute;top:15px;left:15px;right:15px;bottom:15px;border-radius:50%;border:3px solid transparent;border-top-color:#fff;-webkit-animation:1.5s linear infinite spin;animation:1.5s linear infinite spin}@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", "@-webkit-keyframes loader{0%,10%,100%{width:60px;height:60px}65%{width:150px;height:150px}}@keyframes loader{0%,10%,100%{width:60px;height:60px}65%{width:150px;height:150px}}@-webkit-keyframes loaderBlock{0%,30%{transform:rotate(0)}55%{background-color:#b4b4b4}100%{transform:rotate(90deg)}}@keyframes loaderBlock{0%,30%{transform:rotate(0)}55%{background-color:#b4b4b4}100%{transform:rotate(90deg)}}@-webkit-keyframes loaderBlockInverse{0%,20%{transform:rotate(0)}55%{background-color:#d9d9d9}100%{transform:rotate(-90deg)}}@keyframes loaderBlockInverse{0%,20%{transform:rotate(0)}55%{background-color:#d9d9d9}100%{transform:rotate(-90deg)}}.loader{position:absolute;top:50%;left:50%;width:60px;height:60px;transform:translate(-50%,-50%) rotate(45deg) translate3d(0,0,0);-webkit-animation:1.2s ease-in-out infinite loader;animation:1.2s ease-in-out infinite loader}.loader span{position:absolute;display:block;width:40px;height:40px;background-color:#fff;-webkit-animation:1.2s ease-in-out infinite both loaderBlock;animation:1.2s ease-in-out infinite both loaderBlock}.loader span:nth-child(1){top:0;left:0}.loader span:nth-child(2){top:0;right:0;-webkit-animation:1.2s ease-in-out infinite both loaderBlockInverse;animation:1.2s ease-in-out infinite both loaderBlockInverse}.loader span:nth-child(3){bottom:0;left:0;-webkit-animation:1.2s ease-in-out infinite both loaderBlockInverse;animation:1.2s ease-in-out infinite both loaderBlockInverse}.loader span:nth-child(4){bottom:0;right:0}"]
            }]
    }], function () { return []; }, { loadingConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with the gallery of thumbs.
 * In receives an array of Images, a boolean to show/hide
 * the gallery (feature used by imagePointer) and a config
 * object to customize the behaviour of this component.
 * Also, it emits click events as outputs.
 */
class PlainGalleryComponent {
    constructor() {
        /**
         * Output to emit an event when an image is changed.
         */
        this.show = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Bi-dimensional array of `Image` object to store images to display as plain gallery.
         * [] by default.
         */
        this.imageGrid = [];
        /**
         * Boolean passed as input to `ks-wrap` directive to configure flex-wrap css property.
         * However it's not enough, because you need to limit the width using `widthStyle` public variable.
         * For more info check https://developer.mozilla.org/it/docs/Web/CSS/flex-wrap
         */
        this.wrapStyle = false;
        /**
         * String passed as input to `ks-wrap` directive to set width to be able to force overflow.
         * In this way, `wrapStyle` (flex-wrap css property) will be used as requested.
         */
        this.widthStyle = '';
        /**
         * Default image size object
         */
        this.defaultSize = { width: '50px', height: 'auto' };
        /**
         * Default layout config object
         * Note that length=-1 means infinity
         */
        this.defaultLayout = new LineLayout(this.defaultSize, { length: -1, wrap: false }, 'flex-start');
        /**
         * Default plain gallery config object
         */
        this.defaultPlainConfig = {
            strategy: PlainGalleryStrategy.ROW,
            layout: this.defaultLayout,
            advanced: { aTags: false, additionalBackground: '50% 50%/cover' }
        };
    }
    /**
     * Method ´ngOnChanges´ to update both `imageGrid` and`configPlainGallery`.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const imagesChange = changes.images;
        /** @type {?} */
        const configChange = changes.plainGalleryConfig;
        // I'm using !change.firstChange because the first time will be called both onInit and onChange and I don't
        // want to execute initialization two times.
        if (configChange &&
            !configChange.firstChange &&
            (configChange.previousValue !== configChange.currentValue || (!configChange.previousValue && !configChange.currentValue))) {
            this.configPlainGallery = this.initPlainGalleryConfig();
        }
        if (imagesChange && !imagesChange.firstChange && imagesChange.previousValue !== imagesChange.currentValue) {
            this.initImageGrid();
        }
    }
    /**
     * Method ´ngOnInit´ to init both `configPlainGallery` calling `initPlainGalleryConfig()`
     * and `imageGrid invoking `initImageGrid()`.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ngOnInit() {
        this.configPlainGallery = this.initPlainGalleryConfig();
        this.initImageGrid();
    }
    /**
     * Method called when you click on an image of the plain (or inline) gallery.
     * This will emit the show event with the index number as payload.
     * @param {?} index
     * @return {?}
     */
    showModalGallery(index) {
        this.show.emit(index);
    }
    /**
     * Method called when you click on an image of the plain (or inline) gallery.
     * This will emit the show event with the image as payload.
     * @param {?} img
     * @return {?}
     */
    showModalGalleryByImage(img) {
        /** @type {?} */
        const index = this.images.findIndex((/**
         * @param {?} val
         * @return {?}
         */
        (val) => val && img && val.id === img.id));
        this.showModalGallery(index);
    }
    /**
     * Method to get `alt attribute`.
     * `alt` specifies an alternate text for an image, if the image cannot be displayed.
     * @param {?} image
     * @return {?} string alt description of the image
     */
    getAltPlainDescriptionByImage(image) {
        if (!image) {
            return '';
        }
        return image.plain && image.plain.description ? image.plain.description : `Image ${getIndex(image, this.images) + 1}`;
    }
    /**
     * Method to get the title for an image.
     * @param {?} image
     * @return {?} string the title of the input image
     */
    getTitleDisplay(image) {
        /** @type {?} */
        let description = '';
        if (image.plain && image.plain.description) {
            description = image.plain.description;
        }
        else if (image.modal && image.modal.description) {
            description = image.modal.description;
        }
        /** @type {?} */
        const currentIndex = getIndex(image, this.images);
        /** @type {?} */
        const prevDescription = 'Image ' + (currentIndex + 1) + '/' + this.images.length;
        /** @type {?} */
        let currImgDescription = description ? description : '';
        if (currImgDescription !== '') {
            currImgDescription = ' - ' + currImgDescription;
        }
        return prevDescription + currImgDescription;
    }
    /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    trackById(index, item) {
        return item.id;
    }
    /**
     * Private method to build and return a `PlainGalleryConfig` object, proving also default values.
     * @throws an Error if layout and strategy aren't compatible
     * @private
     * @return {?} PlainGalleryConfig the plain gallery configuration
     */
    initPlainGalleryConfig() {
        /** @type {?} */
        const config = Object.assign({}, this.defaultPlainConfig, this.plainGalleryConfig);
        if (config.layout instanceof LineLayout) {
            if (config.strategy !== PlainGalleryStrategy.ROW && config.strategy !== PlainGalleryStrategy.COLUMN) {
                throw new Error('LineLayout requires either ROW or COLUMN strategy');
            }
            if (!config.layout || !config.layout.breakConfig) {
                throw new Error('Both layout and breakConfig must be valid');
            }
        }
        if (config.layout instanceof GridLayout) {
            if (config.strategy !== PlainGalleryStrategy.GRID) {
                throw new Error('GridLayout requires GRID strategy');
            }
            if (!config.layout || !config.layout.breakConfig) {
                throw new Error('Both layout and breakConfig must be valid');
            }
            // force wrap for grid layout
            config.layout.breakConfig.wrap = true;
        }
        if (config.layout instanceof AdvancedLayout) {
            if (config.strategy !== PlainGalleryStrategy.CUSTOM) {
                throw new Error('AdvancedLayout requires CUSTOM strategy');
            }
        }
        return config;
    }
    /**
     * Private method to init both `imageGrid` and other style variables,
     * based on the layout type.
     * @private
     * @return {?}
     */
    initImageGrid() {
        /** @type {?} */
        const config = this.configPlainGallery;
        // reset the array to prevent issues in case of GridLayout
        this.imageGrid = [];
        if (config.layout instanceof LineLayout) {
            /** @type {?} */
            const layout = config.layout;
            /** @type {?} */
            const row = this.images.filter((/**
             * @param {?} val
             * @param {?} i
             * @return {?}
             */
            (val, i) => i < layout.breakConfig.length || layout.breakConfig.length === -1));
            this.imageGrid = [row];
            this.size = config.layout.size;
            switch (config.strategy) {
                case PlainGalleryStrategy.ROW:
                    this.directionStyle = 'row';
                    break;
                case PlainGalleryStrategy.COLUMN:
                    this.directionStyle = 'column';
                    this.wrapStyle = layout.breakConfig.wrap;
                    break;
            }
            this.justifyStyle = layout.justify;
        }
        if (config.layout instanceof GridLayout) {
            /** @type {?} */
            const layout = config.layout;
            /** @type {?} */
            const count = Math.ceil(this.images.length / layout.breakConfig.length);
            /** @type {?} */
            let start = 0;
            /** @type {?} */
            let end = layout.breakConfig.length - 1;
            for (let j = 0; j < count; j++) {
                /** @type {?} */
                const row = this.images.filter((/**
                 * @param {?} val
                 * @param {?} i
                 * @return {?}
                 */
                (val, i) => i >= start && i <= end));
                this.imageGrid.push(row);
                start = end + 1;
                end = start + layout.breakConfig.length - 1;
            }
            this.size = config.layout.size;
            /** @type {?} */
            const pixels = +layout.size.width.replace('px', '');
            this.widthStyle = pixels * layout.breakConfig.length + pixels / 2 + 'px';
            this.wrapStyle = layout.breakConfig.wrap;
            this.directionStyle = 'row';
        }
        if (config.layout instanceof AdvancedLayout) {
            this.imageGrid = [this.images];
        }
    }
}
PlainGalleryComponent.ɵfac = function PlainGalleryComponent_Factory(t) { return new (t || PlainGalleryComponent)(); };
PlainGalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlainGalleryComponent, selectors: [["ks-plain-gallery"]], inputs: { images: "images", showGallery: "showGallery", plainGalleryConfig: "plainGalleryConfig", accessibilityConfig: "accessibilityConfig" }, outputs: { show: "show" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "plain-container", "ksWrap", "", "ksDirection", "", 3, "wrap", "width", "direction", "justify", "title", 4, "ngIf"], ["ksWrap", "", "ksDirection", "", 1, "plain-container", 3, "wrap", "width", "direction", "justify", "title"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["aTags", ""], ["class", "image", "ksSize", "", "role", "img", 3, "src", "sizeConfig", "title", "alt", "tabindex", "click", "keyup", 4, "ngIf"], ["ksSize", "", "role", "img", 1, "image", 3, "src", "sizeConfig", "title", "alt", "tabindex", "click", "keyup"], ["class", "a-tag-image", "ksATagBgImage", "", "ksSize", "", 3, "image", "style", "sizeConfig", "title", "tabindex", "click", "keyup", 4, "ngIf"], ["ksATagBgImage", "", "ksSize", "", 1, "a-tag-image", 3, "image", "sizeConfig", "title", "tabindex", "click", "keyup"]], template: function PlainGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlainGalleryComponent_div_0_Template, 2, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showGallery);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, WrapDirective, DirectionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, SizeDirective, ATagBgImageDirective], styles: [".plain-container[_ngcontent-%COMP%]{align-items:center;display:flex}.plain-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{cursor:pointer;height:auto;width:50px;margin:2px}.plain-container[_ngcontent-%COMP%]   .a-tag-image[_ngcontent-%COMP%]{cursor:pointer;margin:2px}"], changeDetection: 0 });
PlainGalleryComponent.propDecorators = {
    images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    showGallery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    plainGalleryConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlainGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ks-plain-gallery',
                template: "<div *ngIf=\"showGallery\"\n     class=\"plain-container\"\n     ksWrap [wrap]=\"wrapStyle\" [width]=\"widthStyle\"\n     ksDirection [direction]=\"directionStyle\" [justify]=\"justifyStyle\"\n     [attr.aria-label]=\"accessibilityConfig?.plainGalleryContentAriaLabel\"\n     [title]=\"accessibilityConfig?.plainGalleryContentTitle\">\n\n  <ng-container *ngFor=\"let imgRow of imageGrid; let i = index\">\n    <ng-container *ngFor=\"let imgCol of imgRow; let j = index\">\n\n      <ng-container *ngIf=\"!configPlainGallery.advanced?.aTags; else aTags\">\n        <img *ngIf=\"imgCol?.modal?.img\"\n             [src]=\"imgCol.plain?.img ? imgCol.plain.img : imgCol.modal.img\"\n             class=\"image\"\n             ksSize [sizeConfig]=\"{width: size?.width, height: size?.height}\"\n             [attr.aria-label]=\"imgCol.plain?.ariaLabel\"\n             [title]=\"imgCol.plain?.title ? imgCol.plain.title : getTitleDisplay(imgCol)\"\n             alt=\"{{imgCol.plain?.alt ? imgCol.plain.alt : getAltPlainDescriptionByImage(imgCol)}}\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"showModalGalleryByImage(imgCol)\" (keyup)=\"showModalGalleryByImage(imgCol)\"/>\n      </ng-container>\n\n      <!-- Add directive to set background with the image url as param to pass thumb or img-->\n      <!-- to do something like this <a style=\"background: url('path to image') 50% 50%/cover\">.-->\n      <ng-template #aTags>\n        <a *ngIf=\"imgCol?.modal?.img\"\n           class=\"a-tag-image\"\n           ksATagBgImage [image]=\"imgCol\" [style]=\"configPlainGallery.advanced?.additionalBackground\"\n           ksSize [sizeConfig]=\"{width: size?.width, height: size?.height}\"\n           [attr.aria-label]=\"imgCol.plain?.ariaLabel\"\n           [title]=\"imgCol.plain?.title ? imgCol.plain.title : getTitleDisplay(imgCol)\"\n           [tabindex]=\"0\"\n           (click)=\"showModalGallery(j)\" (keyup)=\"showModalGallery(j)\"></a>\n      </ng-template>\n\n    </ng-container>\n  </ng-container>\n\n</div>\n\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".plain-container{align-items:center;display:flex}.plain-container .image{cursor:pointer;height:auto;width:50px;margin:2px}.plain-container .a-tag-image{cursor:pointer;margin:2px}"]
            }]
    }], function () { return []; }, { show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], showGallery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], plainGalleryConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Array of all components.
 * @type {?}
 */
const COMPONENTS = [
    BackgroundComponent,
    PlainGalleryComponent,
    ModalGalleryComponent,
    CarouselComponent,
    CarouselPreviewsComponent,
    UpperButtonsComponent,
    DotsComponent,
    PreviewsComponent,
    CurrentImageComponent,
    LoadingSpinnerComponent,
    AccessibleComponent
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// to prevent bad scrolling behaviour on mobile phone with carousels.
// From @mohaxspb (https://github.com/Ks89/angular-modal-gallery/pull/187)
class KsHammerGestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.HammerGestureConfig {
    /**
     * @param {?} element
     * @return {?}
     */
    buildHammer(element) {
        return new Hammer(element, {
            touchAction: 'pan-y'
        });
    }
}
KsHammerGestureConfig.ɵfac = /*@__PURE__*/ function () { let ɵKsHammerGestureConfig_BaseFactory; return function KsHammerGestureConfig_Factory(t) { return (ɵKsHammerGestureConfig_BaseFactory || (ɵKsHammerGestureConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](KsHammerGestureConfig)))(t || KsHammerGestureConfig); }; }();
KsHammerGestureConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KsHammerGestureConfig, factory: KsHammerGestureConfig.ɵfac });

/**
 * Module to import it in the root module of your application.
 */
class GalleryModule {
    /**
     * Importing with '.forRoot()' is deprecated. I'll provide a new way to do this in next releases.
     * Will be removed in 8.0.0 or 9.0.0
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: GalleryModule,
            providers: [
                {
                    provide: KEYBOARD_CONFIGURATION,
                    useValue: config ? config : {}
                },
                {
                    provide: KeyboardService,
                    useFactory: setupKeyboardService,
                    deps: [KEYBOARD_CONFIGURATION]
                }
            ]
        };
    }
}
GalleryModule.ɵfac = function GalleryModule_Factory(t) { return new (t || GalleryModule)(); };
GalleryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GalleryModule });
GalleryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.HAMMER_GESTURE_CONFIG,
            useClass: KsHammerGestureConfig
        }
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
                declarations: [COMPONENTS, DIRECTIVES],
                exports: [ModalGalleryComponent, CarouselComponent],
                providers: [
                    {
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.HAMMER_GESTURE_CONFIG,
                        useClass: KsHammerGestureConfig
                    }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleryModule, { declarations: function () { return [BackgroundComponent, PlainGalleryComponent, ModalGalleryComponent, CarouselComponent, CarouselPreviewsComponent, UpperButtonsComponent, DotsComponent, PreviewsComponent, CurrentImageComponent, LoadingSpinnerComponent, AccessibleComponent, ClickOutsideDirective, SizeDirective, KeyboardNavigationDirective, WrapDirective, DirectionDirective, ATagBgImageDirective, DescriptionDirective, MarginDirective, MaxSizeDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]; }, exports: function () { return [ModalGalleryComponent, CarouselComponent]; } }); })();
/**
 * Function to setup the keyboard service inside the `forRoot` method.
 * @param {?} injector
 * @return {?} KeyboardService an instance of the `KeyboardService`
 */
function setupKeyboardService(injector) {
    return new KeyboardService(injector);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





/***/ }),

/***/ 47531:
/*!*********************************************!*\
  !*** ./node_modules/mousetrap/mousetrap.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.5
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
        // not the initial event target in the shadow tree. Note that not all events cross the
        // shadow boundary.
        // For shadow trees with `mode: 'open'`, the initial event target is the first element in
        // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
        // target cannot be obtained.
        if ('composedPath' in e && typeof e.composedPath === 'function') {
            // For open shadow trees, update `element` so that the following check works.
            var initialEventTarget = e.composedPath()[0];
            if (initialEventTarget !== e.target) {
                element = initialEventTarget;
            }
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if ( true && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return Mousetrap;
        }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),

/***/ 59219:
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsComponent": () => (/* binding */ AboutUsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/slider */ 64190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 11630);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 24008);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);





function AboutUsComponent_ng_container_19_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ts_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ts_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ts_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ts_r2.designation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ts_r2.description);
} }
function AboutUsComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AboutUsComponent_ng_container_19_ng_template_1_Template, 11, 4, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function AboutUsComponent_ng_container_28_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tm_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", tm_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tm_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tm_r5.designation);
} }
function AboutUsComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AboutUsComponent_ng_container_28_ng_template_1_Template, 6, 3, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
class AboutUsComponent {
    constructor() {
        this.TeamSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.TeamSlider;
        this.TestimonialSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.TestimonialSlider;
        // Testimonial Carousel
        this.testimonial = [{
                image: 'assets/images/testimonial/1.jpg',
                name: 'Mark jkcno',
                designation: 'Designer',
                description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
            }, {
                image: 'assets/images/testimonial/2.jpg',
                name: 'Adegoke Yusuff',
                designation: 'Content Writer',
                description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
            }, {
                image: 'assets/images/testimonial/1.jpg',
                name: 'John Shipmen',
                designation: 'Lead Developer',
                description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
            }];
        // Team 
        this.team = [{
                image: 'assets/images/team/1.jpg',
                name: 'Mark jkcno',
                designation: 'Designer'
            }, {
                image: 'assets/images/team/2.jpg',
                name: 'Adegoke Yusuff',
                designation: 'Content Writer'
            }, {
                image: 'assets/images/team/3.jpg',
                name: 'John Shipmen',
                designation: 'Lead Developer'
            }, {
                image: 'assets/images/team/4.jpg',
                name: 'Hileri Keol',
                designation: 'CEO & Founder at Company'
            }, {
                image: 'assets/images/team/3.jpg',
                name: 'John Shipmen',
                designation: 'Lead Developer'
            }];
    }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 70, vars: 6, consts: [[3, "title", "breadcrumb"], [1, "about-page", "section-b-space"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "banner-section"], ["src", "assets/images/about-main.jpg", "alt", "about-us", 1, "img-fluid"], [1, "col-sm-12"], [1, "testimonial", "small-section"], [1, "slide-2", "testimonial-slider", "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], ["id", "team", 1, "team", "section-b-space"], [1, "team-4"], [1, "team-4", 3, "options"], [1, "container", "about-cls", "section-b-space"], [1, "service", "border-section", "small-section"], [1, "col-md-4", "service-block"], [1, "media"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -117 679.99892 679"], ["d", "m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0", "fill", "#719FF1"], [1, "media-body"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Capa_1", "x", "0px", "y", "0px", "viewBox", "0 0 480 480", 0, "xml", "space", "preserve", "width", "512px", "height", "512px", 2, "enable-background", "new 0 0 480 480"], ["d", "M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z", "fill", "#719FF1"], ["d", "M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z", "fill", "#719FF1"], ["d", "M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z", "fill", "#719FF1"], ["d", "M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z", "fill", "#719FF1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -14 512.00001 512"], ["d", "m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0", "fill", "#719FF1"], ["d", "m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0", "fill", "#719FF1"], ["d", "m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0", "fill", "#719FF1"], ["d", "m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0", "fill", "#719FF1"], ["d", "m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0", "fill", "#719FF1"], ["d", "m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0", "fill", "#719FF1"], ["carouselSlide", ""], [1, "text-center"], ["alt", "image", 3, "src"], ["alt", "image", 1, "img-fluid", 3, "src"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "owl-carousel-o", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AboutUsComponent_ng_container_19_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "owl-carousel-o", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, AboutUsComponent_ng_container_28_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "free shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "free shipping world wide");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "24 X 7 service");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "online service for new customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "svg", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "festival offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "new online special festival offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "About-us")("breadcrumb", "About-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.TestimonialSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.testimonial);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.TeamSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.team);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 68686:
/*!******************************************************!*\
  !*** ./src/app/pages/account/cart/cart.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 11630);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



const _c0 = function () { return ["/shop/product/left/sidebar/trim-dress"]; };
const _c1 = function () { return ["/shop/collection/left/sidebar"]; };
const _c2 = function () { return ["/shop/checkout"]; };
class CartComponent {
    constructor() { }
    ngOnInit() {
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(); };
CartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 74, vars: 14, consts: [[3, "title", "breadcrumb"], [1, "cart-section", "section-b-space"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "table", "cart-table", "table-responsive-xs"], [1, "table-head"], ["scope", "col"], [3, "routerLink"], ["src", "assets/images/product/fashion/1.jpg", "alt", ""], [1, "mobile-cart-content", "row"], [1, "col-xs-3"], [1, "qty-box"], [1, "input-group"], ["type", "text", "name", "quantity", "value", "1", 1, "form-control", "input-number"], [1, "td-color"], [1, "icon", 3, "routerLink"], [1, "ti-close"], [1, "input-group-prepend"], ["type", "button", "data-type", "minus", 1, "btn", "quantity-left-minus"], [1, "ti-angle-left"], ["type", "text", "name", "quantity", "disabled", "", "value", "1", 1, "form-control", "input-number"], ["type", "button", "data-type", "plus", 1, "btn", "quantity-right-plus"], [1, "ti-angle-right"], [1, "table", "cart-table", "table-responsive-md"], [1, "row", "cart-buttons"], [1, "col-6"], [1, "btn", "btn-solid", 3, "routerLink"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "product name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "cotton shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "$63.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "$63.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "$4539.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "total price :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " $6935.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "continue shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "check out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Cart")("breadcrumb", "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c2));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 66381:
/*!**************************************************************!*\
  !*** ./src/app/pages/account/checkout/checkout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutComponent": () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 11630);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);




const _c0 = function () { return ["shop/checkout"]; };
class CheckoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(); };
CheckoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 172, vars: 4, consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "container", "padding-cls"], [1, "checkout-page"], [1, "checkout-form"], [1, "row"], [1, "col-lg-6", "col-sm-12", "col-xs-12"], [1, "checkout-title"], [1, "form-group", "col-md-6", "col-sm-6", "col-xs-12"], [1, "field-label"], ["type", "text", "name", "field-name", "value", "", "placeholder", ""], [1, "form-group", "col-md-12", "col-sm-12", "col-xs-12"], ["type", "text", "name", "field-name", "value", "", "placeholder", "Street address"], [1, "form-group", "col-md-12", "col-sm-6", "col-xs-12"], [1, "col-12"], [1, "stripe-section"], [1, "content"], [1, "row", "margin-cls"], [1, "checkout-details"], [1, "order-box"], [1, "title-box"], [1, "qty"], [1, "sub-total"], [1, "count"], [1, "shipping"], [1, "shopping-option"], ["type", "checkbox", "name", "free-shipping", "id", "free-shipping"], ["for", "free-shipping"], ["type", "checkbox", "name", "local-pickup", "id", "local-pickup"], ["for", "local-pickup"], [1, "total"], [1, "payment-box"], [1, "upper-box"], [1, "payment-options"], [1, "radio-option"], ["type", "radio", "name", "payment-group", "id", "payment-1", "checked", ""], ["for", "payment-1"], [1, "small-text"], ["type", "radio", "name", "payment-group", "id", "payment-2"], ["for", "payment-2"], [1, "radio-option", "paypal"], ["type", "radio", "name", "payment-group", "id", "payment-3"], ["for", "payment-3"], [1, "image"], ["src", "assets/images/paypal.png", "alt", ""], [1, "text-right"], [1, "btn-solid", "btn", 3, "routerLink"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Billing Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Last Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "South Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "United State");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Australia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Town/City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "State / County");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "stripe js");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "dummy test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "cart number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "4242424242424242");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "mm/yy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "2/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "cvc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "2222");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "paypal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "dummy test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "I set total payment to $0.01 for static demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "cart number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "4152521541244");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "mm/yy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "11/18");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "cvc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "521");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Pink Slim Shirt \u00D7 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "$25.10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "SLim Fit Jeans \u00D7 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "$555.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Subtotal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "$380.10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Shipping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Free Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Local Pickup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "$620.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Check Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Cash On Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "PayPal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Place Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Checkout")("breadcrumb", "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 94429:
/*!************************************************************!*\
  !*** ./src/app/pages/account/contact/contact.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 11630);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);



class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 76, vars: 2, consts: [[3, "title", "breadcrumb"], [1, "contact-page", "section-b-space"], [1, "container"], [1, "row", "section-b-space"], [1, "col-lg-7", "map"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50059.12775918716!2d72.78534673554945!3d21.16564923510817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1533793756956", "allowfullscreen", ""], [1, "col-lg-5"], [1, "contact-right"], [1, "contact-icon"], ["src", "assets/images/icon/phone.png", "alt", "Generic placeholder image"], [1, "media-body"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], ["src", "assets/images/icon/email.png", "alt", "Generic placeholder image"], ["aria-hidden", "true", 1, "fa", "fa-fax"], [1, "row"], [1, "col-sm-12"], [1, "theme-form"], [1, "form-row"], [1, "col-md-6"], ["for", "name"], ["type", "text", "id", "name", "placeholder", "Enter Your name", "required", "", 1, "form-control"], ["for", "email"], ["type", "text", "id", "last-name", "placeholder", "Email", "required", "", 1, "form-control"], ["for", "review"], ["type", "text", "id", "review", "placeholder", "Enter your number", "required", "", 1, "form-control"], ["type", "text", "id", "email", "placeholder", "Email", "required", "", 1, "form-control"], [1, "col-md-12"], ["placeholder", "Write Your Message", "id", "exampleFormControlTextarea1", "rows", "6", 1, "form-control"], ["type", "submit", 1, "btn", "btn-solid"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "+91 123 - 456 - 7890");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "+86 163 - 451 - 7894");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "ABC Complex,Near xyz, New York");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "USA 123456");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Support@Shopcart.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "info@shopcart.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Fax");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Support@Shopcart.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "info@shopcart.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Write Your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Send Your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Contact")("breadcrumb", "Contact");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 58188:
/*!****************************************************************!*\
  !*** ./src/app/pages/account/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 11630);


class DashboardComponent {
    constructor() {
        this.openDashboard = false;
    }
    ngOnInit() {
    }
    ToggleDashboard() {
        this.openDashboard = !this.openDashboard;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 104, vars: 4, consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "account-sidebar", 3, "click"], ["hre", "javascript:void(0)", 1, "popup-btn"], [1, "dashboard-left"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "block-content"], [1, "active"], ["href", "javascript:void(0)"], [1, "last"], [1, "col-lg-9"], [1, "dashboard-right"], [1, "dashboard"], [1, "page-title"], [1, "welcome-msg"], [1, "box-account", "box-info"], [1, "box-head"], [1, "col-sm-6"], [1, "box"], [1, "box-title"], [1, "box-content"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_5_listener() { return ctx.ToggleDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " my account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_9_listener() { return ctx.ToggleDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Account Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Address Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "My Wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "My Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Hello, MARK JECNO !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Account Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Contact Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "MARK JECNO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "MARk-JECNO@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Newsletters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " You are currently not subscribed to any newsletter. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Address Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Manage Addresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Default Billing Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " You have not set a default billing address.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Edit Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Default Shipping Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " You have not set a default shipping address.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Edit Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Dashboard")("breadcrumb", "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.openDashboard);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 28763:
/*!************************************************************!*\
  !*** ./src/app/pages/account/profile/profile.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 11630);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);



class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 72, vars: 2, consts: [[3, "title", "breadcrumb"], [1, "contact-page", "register-page"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "theme-form"], [1, "form-row"], [1, "col-md-6"], ["for", "name"], ["type", "text", "id", "name", "placeholder", "Enter Your name", "required", "", 1, "form-control"], ["for", "email"], ["type", "text", "id", "last-name", "placeholder", "Email", "required", "", 1, "form-control"], ["for", "review"], ["type", "text", "id", "review", "placeholder", "Enter your number", "required", "", 1, "form-control"], ["type", "text", "id", "email", "placeholder", "Email", "required", "", 1, "form-control"], [1, "col-md-12"], ["placeholder", "Write Your Message", "id", "exampleFormControlTextarea1", "rows", "6", 1, "form-control", "mb-0"], [1, "contact-page", "register-page", "section-b-space"], ["type", "text", "id", "home-ploat", "placeholder", "company name", "required", "", 1, "form-control"], ["type", "text", "id", "address-two", "placeholder", "Address", "required", "", 1, "form-control"], ["type", "text", "id", "zip-code", "placeholder", "zip-code", "required", "", 1, "form-control"], [1, "col-md-6", "select_input"], ["size", "1", 1, "form-control"], ["value", "India"], ["value", "UAE"], ["value", "U.K"], ["value", "US"], ["type", "text", "id", "city", "placeholder", "City", "required", "", 1, "form-control"], ["type", "text", "id", "region-state", "placeholder", "Region/state", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-sm", "btn-solid"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "PERSONAL DETAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Write Your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "SHIPPING ADDRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "flat / plot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Address *");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Zip Code *");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Country *");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "UAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "U.K");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "US");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "City *");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Region/State *");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Save setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Profile")("breadcrumb", "Profile");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 87894:
/*!**************************************************************!*\
  !*** ./src/app/pages/account/wishlist/wishlist.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishlistComponent": () => (/* binding */ WishlistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 11630);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



const _c0 = function () { return ["/shop/product/left/sidebar/trim-dress"]; };
const _c1 = function () { return ["/shop/collection/left/sidebar"]; };
const _c2 = function () { return ["/shop/checkout"]; };
class WishlistComponent {
    constructor() { }
    ngOnInit() {
    }
}
WishlistComponent.ɵfac = function WishlistComponent_Factory(t) { return new (t || WishlistComponent)(); };
WishlistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WishlistComponent, selectors: [["app-wishlist"]], decls: 56, vars: 18, consts: [[3, "title", "breadcrumb"], [1, "wishlist-section", "section-b-space"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "table", "cart-table", "table-responsive-xs"], [1, "table-head"], ["scope", "col"], [3, "routerLink"], ["src", "assets/images/product/fashion/1.jpg", "alt", "fashion"], [1, "mobile-cart-content", "row"], [1, "col-xs-3"], [1, "td-color"], [1, "icon", "mr-1", 3, "routerLink"], [1, "ti-close"], [1, "cart", 3, "routerLink"], [1, "ti-shopping-cart"], [1, "icon", "mr-3", 3, "routerLink"], [1, "row", "wishlist-buttons"], [1, "col-12"], [1, "btn", "btn-solid", 3, "routerLink"]], template: function WishlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "product name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "availability");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "cotton shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "in stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "$63.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "$63.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "in stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "continue shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "check out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Register")("breadcrumb", "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c2));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXNobGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 39014:
/*!**********************************************************!*\
  !*** ./src/app/pages/collection/collection.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionComponent": () => (/* binding */ CollectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 11630);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



const _c0 = function () { return ["/home/fashion"]; };
class CollectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
CollectionComponent.ɵfac = function CollectionComponent_Factory(t) { return new (t || CollectionComponent)(); };
CollectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CollectionComponent, selectors: [["app-collection"]], decls: 101, vars: 18, consts: [[3, "title", "breadcrumb"], [1, "collection", "section-b-space"], [1, "container"], [1, "row", "partition-collection"], [1, "col-lg-3", "col-md-6"], [1, "collection-block"], ["src", "assets/images/collection/1.jpg", "alt", "", 1, "img-fluid"], [1, "collection-content"], [1, "btn", "btn-outline", 3, "routerLink"], ["src", "assets/images/collection/2.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/collection/3.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/collection/4.jpg", "alt", "", 1, "img-fluid"], [1, "row", "partition-collection", "section-t-space"], ["src", "assets/images/collection/5.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/collection/6.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/collection/7.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/collection/8.jpg", "alt", "", 1, "img-fluid"]], template: function CollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "(20 products)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Lorem Ipsum is simply dummy text of the printing and typesetting industry....");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "shop now !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "(20 products)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Lorem Ipsum is simply dummy text of the printing and typesetting industry....");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "shop now !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "(20 products)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Lorem Ipsum is simply dummy text of the printing and typesetting industry....");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "shop now !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "(20 products)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Lorem Ipsum is simply dummy text of the printing and typesetting industry....");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "shop now !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "(20 products)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Lorem Ipsum is simply dummy text of the printing and typesetting industry....");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "shop now !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "(20 products)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Lorem Ipsum is simply dummy text of the printing and typesetting industry....");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "shop now !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "(20 products)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Lorem Ipsum is simply dummy text of the printing and typesetting industry....");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "shop now !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "(20 products)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "fashion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Lorem Ipsum is simply dummy text of the printing and typesetting industry....");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "shop now !");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Collection")("breadcrumb", "Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0));
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 75268:
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 11630);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 12, vars: 3, consts: [[3, "title", "breadcrumb"], [1, "p-0"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "error-section"], [1, "btn", "btn-solid", 3, "routerLink"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "back to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "404")("breadcrumb", "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/home/fashion");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 20214:
/*!****************************************************************!*\
  !*** ./src/app/pages/order-success/order-success.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderSuccessComponent": () => (/* binding */ OrderSuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);

class OrderSuccessComponent {
    constructor() { }
    ngOnInit() {
    }
}
OrderSuccessComponent.ɵfac = function OrderSuccessComponent_Factory(t) { return new (t || OrderSuccessComponent)(); };
OrderSuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderSuccessComponent, selectors: [["app-order-success"]], decls: 94, vars: 0, consts: [[1, "section-b-space", "light-layout"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "success-text"], ["aria-hidden", "true", 1, "fa", "fa-check-circle"], [1, "section-b-space"], [1, "col-lg-6"], [1, "product-order"], [1, "row", "product-order-detail"], [1, "col-3"], ["src", "assets/images/product/fashion/1.jpg", "alt", "", 1, "img-fluid"], [1, "col-3", "order_detail"], [1, "total-sec"], [1, "final-total"], [1, "row", "order-success-sec"], [1, "col-sm-6"], [1, "order-detail"], [1, "col-sm-12", "payment-mode"], [1, "delivery-sec"]], template: function OrderSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "thank you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Payment is successfully processsed and your order is on the way");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Transaction ID:267676GHERT105467");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "your order details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "product name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "cotton shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "$555.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "subtotal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "$55.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "shipping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "$12.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "tax(GST) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "$10.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "$77.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "summery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "order ID: 5563853658932");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Order Date: October 22, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Order Total: $907.28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "shipping address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "gerg harvell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "568, suite ave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Austrlia, 235153");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Contact No. 123456789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "payment method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net banking acceptance subject to device availability.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "expected date of delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "october 22, 2030");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1zdWNjZXNzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 64205:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _account_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account/wishlist/wishlist.component */ 87894);
/* harmony import */ var _account_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account/cart/cart.component */ 68686);
/* harmony import */ var _account_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account/dashboard/dashboard.component */ 58188);
/* harmony import */ var _account_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/profile/profile.component */ 28763);
/* harmony import */ var _account_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/contact/contact.component */ 94429);
/* harmony import */ var _account_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/checkout/checkout.component */ 66381);
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us/about-us.component */ 59219);
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typography/typography.component */ 85073);
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./review/review.component */ 37595);
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-success/order-success.component */ 20214);
/* harmony import */ var _collection_collection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collection/collection.component */ 39014);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error/error.component */ 75268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);















const routes = [
    {
        path: 'wishlist',
        component: _account_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_0__.WishlistComponent
    },
    {
        path: 'cart',
        component: _account_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__.CartComponent
    },
    {
        path: 'dashboard',
        component: _account_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent
    },
    {
        path: 'profile',
        component: _account_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent
    },
    {
        path: 'contact',
        component: _account_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent
    },
    {
        path: 'checkout',
        component: _account_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__.CheckoutComponent
    },
    {
        path: 'aboutus',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__.AboutUsComponent
    },
    {
        path: 'typography',
        component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__.TypographyComponent
    },
    {
        path: 'review',
        component: _review_review_component__WEBPACK_IMPORTED_MODULE_8__.ReviewComponent
    },
    {
        path: 'order/success',
        component: _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_9__.OrderSuccessComponent
    },
    {
        path: 'collection',
        component: _collection_collection_component__WEBPACK_IMPORTED_MODULE_10__.CollectionComponent
    },
    {
        path: '404',
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_11__.ErrorComponent
    },
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); };
PagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 22302:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 30318);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 51382);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages-routing.module */ 64205);
/* harmony import */ var _account_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account/wishlist/wishlist.component */ 87894);
/* harmony import */ var _account_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/cart/cart.component */ 68686);
/* harmony import */ var _account_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/dashboard/dashboard.component */ 58188);
/* harmony import */ var _account_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/profile/profile.component */ 28763);
/* harmony import */ var _account_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/contact/contact.component */ 94429);
/* harmony import */ var _account_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account/checkout/checkout.component */ 66381);
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-us/about-us.component */ 59219);
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typography/typography.component */ 85073);
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./review/review.component */ 37595);
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-success/order-success.component */ 20214);
/* harmony import */ var _collection_collection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./collection/collection.component */ 39014);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error/error.component */ 75268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);




// Pages Components














// Blog Components
// Portfolio Components
class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
            _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_16__.GalleryModule.forRoot(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__.PagesRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_account_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_2__.WishlistComponent,
        _account_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__.CartComponent,
        _account_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent,
        _account_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent,
        _account_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent,
        _account_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__.CheckoutComponent,
        _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__.AboutUsComponent,
        _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__.TypographyComponent,
        _review_review_component__WEBPACK_IMPORTED_MODULE_10__.ReviewComponent,
        _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_11__.OrderSuccessComponent,
        _collection_collection_component__WEBPACK_IMPORTED_MODULE_12__.CollectionComponent,
        _error_error_component__WEBPACK_IMPORTED_MODULE_13__.ErrorComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_16__.GalleryModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_1__.PagesRoutingModule] }); })();


/***/ }),

/***/ 37595:
/*!**************************************************!*\
  !*** ./src/app/pages/review/review.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewComponent": () => (/* binding */ ReviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 11630);


class ReviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReviewComponent.ɵfac = function ReviewComponent_Factory(t) { return new (t || ReviewComponent)(); };
ReviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReviewComponent, selectors: [["app-review"]], decls: 111, vars: 2, consts: [[3, "title", "breadcrumb"], [1, "section-b-space", "blog-detail-page", "review-page"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "comment-section"], [1, "media"], ["src", "assets/images/review/1.jpg", "alt", "Generic placeholder image"], [1, "media-body"], [1, "comnt-sec"], ["href", "#"], ["aria-hidden", "true", 1, "fa", "fa-thumbs-o-up"], [1, "unlike"], ["aria-hidden", "true", 1, "fa", "fa-thumbs-o-down"], ["src", "assets/images/review/2.jpg", "alt", "Generic placeholder image"], ["src", "assets/images/review/3.jpg", "alt", "Generic placeholder image"]], template: function ReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Mark Jecno ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "( 12 Jannuary 2018 at 1:30AM )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "(14)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "(2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Mark Jecno ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "( 12 Jannuary 2018 at 1:30AM )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "(14)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "(2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Mark Jecno ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "( 12 Jannuary 2018 at 1:30AM )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "(14)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "(2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Mark Jecno ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "( 12 Jannuary 2018 at 1:30AM )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "(14)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "(2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Mark Jecno ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "( 12 Jannuary 2018 at 1:30AM )");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "(14)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "(2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Review")("breadcrumb", "Review");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 85073:
/*!**********************************************************!*\
  !*** ./src/app/pages/typography/typography.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypographyComponent": () => (/* binding */ TypographyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 11630);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);



class TypographyComponent {
    constructor() { }
    ngOnInit() {
    }
}
TypographyComponent.ɵfac = function TypographyComponent_Factory(t) { return new (t || TypographyComponent)(); };
TypographyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TypographyComponent, selectors: [["app-typography"]], decls: 375, vars: 2, consts: [[3, "title", "breadcrumb"], [1, "section-b-space", "typography_section"], [1, "container"], [1, "row"], [1, "col-lg-6"], [1, "typography-box"], [1, "headings"], [1, "typo-content", "heading_content"], [1, "typo-content"], [1, "text-primary"], [1, "text-secondary"], [1, "text-success"], [1, "text-info"], [1, "text-warning"], [1, "text-danger"], [1, "text-dark"], [1, "text-muted"], [1, "typo-content", "product-pagination"], [1, "pagination", "border-0"], [1, "page-item"], ["href", "#", "aria-label", "Previous", 1, "page-link"], ["aria-hidden", "true"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left"], [1, "sr-only"], [1, "page-item", "active"], ["href", "#", 1, "page-link"], ["href", "#", "aria-label", "Next", 1, "page-link"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right"], [1, "form-row"], [1, "col-12", "mb-3"], ["for", "name"], ["type", "text", "id", "name", "placeholder", "Enter Your name", "required", "", 1, "form-control"], ["for", "email"], ["type", "text", "id", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["placeholder", "Write Your Message", "id", "exampleFormControlTextarea1", "rows", "5", 1, "form-control"], [1, "text-left"], [1, "text-center"], [1, "text-right"], [1, "typo-content", "loader-typo"], [1, "pre-loader"], [1, "typo-content", "typo-buttons"], ["href", "#", 1, "btn", "btn-solid", "mr-3"], ["href", "#", 1, "btn", "btn-outline", "mr-3"], ["href", "#", 1, "btn", "btn-solid", "black-btn", "mr-3"], ["href", "#", 1, "btn", "btn-solid", "btn-sm"], [1, "col-sm-6"], [1, "sub-title"], [1, "fa", "fa-angle-double-right", "mr-2"], [1, "typo-content", "input_button"], ["type", "radio", "name", "gender", "id", "one", "value", "male"], ["for", "one"], ["type", "radio", "name", "gender", "id", "two", "value", "male"], ["for", "two"], ["type", "radio", "name", "gender", "id", "three", "value", "male"], ["for", "three"], ["type", "radio", "name", "gender", "id", "four", "value", "male"], ["for", "four"], ["type", "radio", "name", "gender", "id", "five", "value", "male"], ["for", "five"], ["type", "checkbox", "name", "gender", "id", "six", "value", "male"], ["for", "six"], ["type", "checkbox", "name", "gender", "id", "seven", "value", "male"], ["for", "seven"], ["type", "checkbox", "name", "gender", "id", "eight", "value", "male"], ["for", "eight"], ["type", "checkbox", "name", "gender", "id", "nine", "value", "male"], ["for", "nine"], ["type", "checkbox", "name", "gender", "id", "ten", "value", "male"], ["for", "ten"], [1, "highlighter-rouge"], [1, "blockquote"], [1, "mb-0"], [1, "blockquote-footer"], ["title", "Source Title"], [1, "footer-social"], ["href", "#"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["aria-hidden", "true", 1, "fa", "fa-google-plus"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["aria-hidden", "true", 1, "fa", "fa-rss"]], template: function TypographyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "headings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "All HTML headings, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "<h1>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " through ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "<h6>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ", are available.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "h1 heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "h2 heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "h3 heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "h4 heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "h5 heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "h6 heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Text Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "You can Give text color by using txt-* class");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "This is Primary text You can archive this adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, ".text-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " class");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "This is Secondary text You can archive this adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, ".text-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " class");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "This is Success text You can archive this adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, ".text-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " class");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "This is Info text You can archive this adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, ".text-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "This is Warning text You can archive this adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, ".text-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " class");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "This is Danger text You can archive this adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, ".text-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " class");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "This is Dark text You can archive this adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, ".text-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "This is Primary text You can archive this adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, ".text-muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " class");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Text Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "You can Give text color by using txt-* class");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Text Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "You can Give text color by using txt-* class");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Write Your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "textarea", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Alignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Use text utilities as needed to change the alignment of your blockquote.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "This is a left aligned text .text-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "This is a center aligned text .text-center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "This is a right aligned text .text-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Styling for common inline HTML5 elements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Inline text elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Styling for common inline HTML5 elements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "You can use the mark tag to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "highlight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, " text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "This line of text is meant to be treated as deleted text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "This line of text is meant to be treated as no longer accurate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "ins");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "This line of text is meant to be treated as an addition to the document.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "This line of text will render as underlined");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "This line of text is meant to be treated as fine print.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "This line rendered as bold text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "This line rendered as italicized text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Styling for common inline HTML5 elements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "h6", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Unorder list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "h6", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "order list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "h6", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "order list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "- ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "- ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "- ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "h6", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "order list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](264, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](273, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Styling for common inline HTML5 elements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](292, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "radio button1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "radio button2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](300, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, "radio button3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](304, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "radio button4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](308, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "radio button5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](314, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "checkbox button1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](318, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "checkbox button2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](322, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "checkbox button3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](326, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "checkbox button4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](330, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "checkbox button5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, "Naming a source");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "Add a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "code", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "<footer class=\"blockquote-footer\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, " for identifying the source. Wrap the name of the source work in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "code", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "<cite>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "blockquote", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "footer", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "cite", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "social icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](362, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](365, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](368, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](371, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](374, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Typography")("breadcrumb", "Typography");
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map