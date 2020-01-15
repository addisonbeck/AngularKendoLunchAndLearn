(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-kendo-testing-kendo-testing-module"],{

/***/ "./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js ***!
  \*****************************************************************************/
/*! exports provided: KendoButtonService, FocusService, FocusableDirective, ButtonItemTemplateDirective, ListButton, ListComponent, ListModule, TemplateContextDirective, NAVIGATION_CONFIG, NavigationService, ButtonDirective, Button, ButtonGroupComponent, ButtonGroup, ButtonGroupModule, ButtonModule, ButtonsModule, SplitButtonComponent, SplitButton, SplitButtonModule, DropDownButtonComponent, DropDownButton, DropDownButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KendoButtonService", function() { return KendoButtonService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusService", function() { return FocusService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusableDirective", function() { return FocusableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonItemTemplateDirective", function() { return ButtonItemTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListButton", function() { return ListButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateContextDirective", function() { return TemplateContextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_CONFIG", function() { return NAVIGATION_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDirective", function() { return ButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return ButtonDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupComponent", function() { return ButtonGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupModule", function() { return ButtonGroupModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonComponent", function() { return SplitButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButton", function() { return SplitButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButtonModule", function() { return SplitButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownButtonComponent", function() { return DropDownButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownButton", function() { return DropDownButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownButtonModule", function() { return DropDownButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-common */ "./node_modules/@progress/kendo-angular-common/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-l10n */ "./node_modules/@progress/kendo-angular-l10n/dist/fesm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-popup */ "./node_modules/@progress/kendo-angular-popup/dist/fesm2015/index.js");
/**-----------------------------------------------------------------------------------------
* Copyright © 2019 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/








/**
 * @hidden
 */
class KendoButtonService {
    constructor() {
        this.buttonLookChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default');
        this.buttonClicked = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.buttonClicked$ = this.buttonClicked.asObservable();
    }
    click(button) {
        this.buttonClicked.next(button);
    }
    setButtonLook(look) {
        this.buttonLookChange.next(look);
    }
}
KendoButtonService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];

const SPAN_TAG_NAME = 'SPAN';
/**
 * Represents the Kendo UI Button component for Angular.
 */
class ButtonDirective {
    constructor(element, renderer, service, localization, ngZone) {
        this.service = service;
        this.ngZone = ngZone;
        /**
         * Provides visual styling that indicates if the Button is active.
         * By default, `toggleable` is set to `false`.
         */
        this.toggleable = false;
        /**
         * Adds visual weight to the Button and makes it primary.
         */
        this.primary = false;
        /**
         * Changes the visual appearance by using alternative styling options
         * ([more information and examples]({% slug appearance_button %})).
         *
         * The available values are:
         * * `flat`
         * * `outline`
         */
        this.look = 'default';
        /**
         * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
         */
        this.tabIndex = 0;
        /**
         * @hidden
         */
        this.role = 'button';
        /**
         * Fires each time the selected state of a toggleable button is changed.
         *
         * The event argument is the new selected state (boolean).
         */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires each time the user clicks the button.
         */
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDisabled = false;
        this.isIcon = false;
        this.isIconClass = false;
        this._focused = false;
        this.domEvents = [];
        this.direction = localization.rtl ? 'rtl' : 'ltr';
        this.localizationChangeSubscription = localization.changes
            .subscribe(({ rtl }) => this.direction = rtl ? 'rtl' : 'ltr');
        this.element = element.nativeElement;
        this.renderer = renderer;
    }
    /**
     * Backwards-compatible alias
     *
     * @hidden
     */
    get togglable() {
        return this.toggleable;
    }
    /**
     * @hidden
     */
    set togglable(value) {
        this.toggleable = value;
    }
    /**
     * Sets the selected state of the Button.
     */
    get selected() {
        return this._selected || false;
    }
    set selected(value) {
        this._selected = value;
    }
    /**
     * Defines the name for an existing icon in a Kendo UI theme.
     * The icon is rendered inside the Button by a `span.k-icon` element.
     */
    set icon(icon) {
        if (icon) {
            this.iconSetter(icon, () => {
                this.isIcon = true;
                const classes = 'k-icon k-i-' + icon;
                this.addIcon(classes);
            });
        }
        else {
            this.isIcon = false;
            this.updateIconNode();
        }
    }
    /**
     * Defines a CSS class&mdash;or multiple classes separated by spaces&mdash;
     * which are applied to a `span` element inside the Button. Allows the usage of custom icons.
     */
    set iconClass(iconClassName) {
        if (iconClassName) {
            this.iconSetter(iconClassName, () => {
                this.isIconClass = true;
                this.addIcon(iconClassName);
            });
        }
        else {
            this.isIconClass = false;
            this.updateIconNode();
        }
    }
    /**
     * Defines a URL which is used for an `img` element inside the Button.
     * The URL can be relative or absolute. If relative, it is evaluated with relation to the web page URL.
     */
    set imageUrl(imageUrl) {
        if (imageUrl) {
            this.iconSetter(imageUrl, this.addImgIcon.bind(this));
        }
        else {
            this.removeImageNode();
        }
    }
    /**
     * If set to `true`, it disables the Button.
     */
    set disabled(disabled) {
        this.isDisabled = disabled;
        this.renderer.setProperty(this.element, 'disabled', disabled);
    }
    get disabled() {
        return this.isDisabled;
    }
    set isFocused(isFocused) {
        this.toggleClass('k-state-focused', isFocused);
        this._focused = isFocused;
    }
    get isFocused() {
        return this._focused;
    }
    get classButton() {
        return true;
    }
    get classDisabled() {
        return this.isDisabled;
    }
    get classPrimary() {
        return this.primary;
    }
    get isFlat() {
        return this.look === 'flat';
    }
    get isBare() {
        return this.look === 'bare';
    }
    get isOutline() {
        return this.look === 'outline';
    }
    get classActive() {
        return this.selected;
    }
    get getDirection() {
        return this.direction;
    }
    /**
     * @hidden
     */
    onFocus() {
        this.isFocused = true;
    }
    /**
     * @hidden
     */
    onBlur() {
        this.isFocused = false;
    }
    ngOnInit() {
        const isSpan = this.element.tagName === SPAN_TAG_NAME;
        if (this.service) {
            this.buttonLookChangeSubscription = this.service.buttonLookChange
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((look) => look !== 'default'))
                .subscribe((look) => this.look = look);
        }
        if (!this.element.hasAttribute('role') && this.togglable) {
            this.toggleAriaCheckbox(this.toggleable);
        }
        if (this.role) {
            this.setAttribute('role', this.role);
        }
        this.ngZone.runOutsideAngular(() => {
            this.domEvents.push(this.renderer.listen(this.element, 'click', this._onButtonClick.bind(this)));
            this.domEvents.push(this.renderer.listen(this.element, 'keydown', (event) => {
                if (isSpan && (event.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["Keys"].Space || event.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["Keys"].Enter)) {
                    this.click.emit(event);
                    this._onButtonClick();
                }
            }));
        });
    }
    ngOnChanges(change) {
        if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isChanged"])('togglable', change) || Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isChanged"])('toggleable', change)) {
            this.toggleAriaCheckbox(this.toggleable);
        }
    }
    ngAfterViewChecked() {
        this.setIconTextClasses();
    }
    ngOnDestroy() {
        this.imageNode = null;
        this.iconNode = null;
        this.renderer = null;
        this.localizationChangeSubscription.unsubscribe();
        if (this.service && this.buttonLookChangeSubscription) {
            this.buttonLookChangeSubscription.unsubscribe();
        }
        clearTimeout(this.deferTimeout);
        this.domEvents.forEach(unbindHandler => unbindHandler());
    }
    /**
     * Focuses the Button component.
     */
    focus() {
        if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            this.element.focus();
            this.isFocused = true;
        }
    }
    /**
     * Blurs the Button component.
     */
    blur() {
        if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            this.element.blur();
            this.isFocused = false;
        }
    }
    /**
     * @hidden
     */
    setAttribute(attribute, value) {
        this.renderer.setAttribute(this.element, attribute, value);
    }
    /**
     * @hidden
     */
    removeAttribute(attribute) {
        this.renderer.removeAttribute(this.element, attribute);
    }
    /**
     * @hidden
     *
     * Internal setter that triggers selectedChange
     */
    setSelected(value) {
        const changed = this.selected !== value;
        this.selected = value;
        this.setAttribute('aria-checked', this.selected.toString());
        this.toggleClass('k-state-active', this.selected);
        if (changed && Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["hasObservers"])(this.selectedChange)) {
            this.ngZone.run(() => {
                this.selectedChange.emit(value);
            });
        }
    }
    toggleAriaCheckbox(shouldSet) {
        if (!Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            return;
        }
        if (shouldSet) {
            this.role = 'checkbox';
            this.setAttribute('role', this.role);
            this.setAttribute('aria-checked', this.selected.toString());
        }
        else {
            this.role = 'button';
            this.setAttribute('role', this.role);
            this.removeAttribute('aria-checked');
        }
    }
    hasText() {
        if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            return String(this.element.textContent).trim().length > 0;
        }
        else {
            return false;
        }
    }
    addImgIcon(imageUrl) {
        let renderer = this.renderer;
        if (this.imageNode) {
            renderer.setProperty(this.imageNode, 'src', imageUrl);
        }
        else if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            this.imageNode = renderer.createElement('img');
            renderer.setProperty(this.imageNode, 'src', imageUrl);
            renderer.setProperty(this.imageNode, 'className', 'k-image');
            renderer.setAttribute(this.imageNode, 'role', 'presentation');
            this.prependChild(this.imageNode);
        }
    }
    addIcon(classNames) {
        let renderer = this.renderer;
        if (this.iconNode) {
            renderer.setProperty(this.iconNode, 'className', classNames);
        }
        else if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            this.iconNode = renderer.createElement('span');
            renderer.setProperty(this.iconNode, 'className', classNames);
            renderer.setAttribute(this.iconNode, 'role', 'presentation');
            this.prependChild(this.iconNode);
        }
    }
    prependChild(node) {
        this.defer(() => {
            if (this.renderer && node !== this.element.firstChild) {
                this.renderer.insertBefore(this.element, node, this.element.firstChild);
            }
        });
    }
    defer(callback) {
        this.ngZone.runOutsideAngular(() => {
            this.deferTimeout = setTimeout(callback, 0);
        });
    }
    iconSetter(icon, insertIcon) {
        if (icon) {
            insertIcon(icon);
        }
        this.setIconTextClasses();
    }
    removeImageNode() {
        if (this.imageNode && this.renderer.parentNode(this.imageNode)) {
            this.renderer.removeChild(this.element, this.imageNode);
            this.imageNode = null;
        }
    }
    removeIconNode() {
        if (this.iconNode && this.renderer.parentNode(this.iconNode)) {
            this.renderer.removeChild(this.element, this.iconNode);
            this.iconNode = null;
        }
    }
    updateIconNode() {
        if (!this.isIcon && !this.isIconClass) {
            this.removeIconNode();
        }
    }
    setIconTextClasses() {
        const hasIcon = this.isIcon || this.isIconClass || this.imageNode;
        const hasText = this.hasText();
        this.toggleClass('k-button-icon', hasIcon && !hasText);
        this.toggleClass('k-button-icontext', hasIcon && hasText);
    }
    toggleClass(className, add) {
        if (add) {
            this.renderer.addClass(this.element, className);
        }
        else {
            this.renderer.removeClass(this.element, className);
        }
    }
    _onButtonClick() {
        if (!this.disabled && this.service) {
            this.ngZone.run(() => {
                this.service.click(this);
            });
        }
        if (this.togglable && !this.service) {
            this.setSelected(!this.selected);
        }
    }
}
ButtonDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                exportAs: 'kendoButton',
                providers: [
                    _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"],
                    {
                        provide: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_3__["L10N_PREFIX"],
                        useValue: 'kendo.button'
                    }
                ],
                selector: 'button[kendoButton], span[kendoButton]' // tslint:disable-line
            },] },
];
/** @nocollapse */
ButtonDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: KendoButtonService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
ButtonDirective.propDecorators = {
    toggleable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    togglable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    primary: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    look: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    iconClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    classButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-button',] }],
    classDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-state-disabled',] }],
    classPrimary: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-primary',] }],
    isFlat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-flat',] }],
    isBare: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-bare',] }],
    isOutline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-outline',] }],
    classActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.ariaPressed',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-state-active',] }],
    getDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.dir',] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] }]
};

/* tslint:disable:no-null-keyword */
/* tslint:disable:no-bitwise */
const resolvedPromise = Promise.resolve(null);
/**
 * @hidden
 */
const isPresent = (value) => value !== null && value !== undefined;
/**
 * @hidden
 */
const tick = (f) => (resolvedPromise.then(f));

/**
 * @hidden
 */
class PreventableEvent {
    constructor() {
        this.prevented = false;
    }
    /**
     * Prevents the default action for a specified event.
     * In this way, the source component suppresses the built-in behavior that follows the event.
     */
    preventDefault() {
        this.prevented = true;
    }
    /**
     * If the event is prevented by any of its subscribers, returns `true`.
     *
     * @returns `true` if the default action was prevented. Otherwise, returns `false`.
     */
    isDefaultPrevented() {
        return this.prevented;
    }
}

/**
 * @hidden
 */
const ariaChecked = 'aria-checked';
/**
 * @hidden
 */
const tabindex = 'tabindex';
/**
 * Represents the Kendo UI ButtonGroup component for Angular.
 */
class ButtonGroupComponent {
    constructor(service, localization, element) {
        this.service = service;
        this.element = element;
        /**
         * By default, the selection mode of the ButtonGroup is set to `multiple`.
         */
        this.selection = 'multiple';
        /**
         * Changes the visual appearance by using alternative styling options
         * ([more information and examples]({% slug styling_buttongroup %})).
         * The `look` property of the ButtonGroup takes precedence over the `look` property
         * of the individual buttons that are part of the group.
         *
         * The available values are:
         * * `flat`
         * * `outline`
         */
        this.look = 'default';
        /**
         * Fires every time keyboard navigation occurs.
         */
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._tabIndex = 0;
        this.currentTabIndex = 0;
        this.localizationChangeSubscription = localization.changes.subscribe(({ rtl }) => this.direction = rtl ? 'rtl' : 'ltr');
    }
    /**
     * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
     */
    set tabIndex(value) {
        this._tabIndex = value;
        this.currentTabIndex = value;
    }
    get tabIndex() {
        return this._tabIndex;
    }
    get wrapperClass() {
        return true;
    }
    get disabledClass() {
        return this.disabled;
    }
    get stretchedClass() {
        return !!this.width;
    }
    get isFlat() {
        return this.look === 'flat';
    }
    get isBare() {
        return this.look === 'bare';
    }
    get isOutline() {
        return this.look === 'outline';
    }
    get getRole() {
        return this.isSelectionSingle() ? 'radiogroup' : 'group';
    }
    get dir() {
        return this.direction;
    }
    get ariaDisabled() {
        return this.disabled;
    }
    get wrapperWidth() {
        return this.width;
    }
    get wrapperTabIndex() {
        return this.disabled ? undefined : this.currentTabIndex;
    }
    /**
     * @hidden
     */
    keydown(event) {
        if (!this.disabled) {
            this.navigateFocus(event);
        }
    }
    /**
     * @hidden
     */
    onFocus() {
        this.currentTabIndex = -1;
        const focusedIndex = this.buttons.toArray().findIndex(current => current.element.tabIndex !== -1);
        const index = focusedIndex === -1 ? 0 : focusedIndex;
        this.focus(this.buttons.filter((_current, i) => {
            return i === index;
        }));
    }
    /**
     * @hidden
     */
    focusout(event) {
        if (event.relatedTarget && event.relatedTarget.parentNode !== this.element.nativeElement) {
            this.defocus(this.buttons.toArray());
            this.currentTabIndex = this.tabIndex;
        }
    }
    ngOnInit() {
        this.service.setButtonLook(this.look);
        this.subscription = this.service.buttonClicked$.subscribe((button) => {
            let newSelectionValue;
            if (this.isSelectionSingle()) {
                newSelectionValue = true;
                this.deactivate(this.buttons.filter(current => current !== button));
            }
            else {
                this.defocus(this.buttons.toArray());
                newSelectionValue = !button.selected;
            }
            if (button.togglable) {
                button.setSelected(newSelectionValue);
                button.setAttribute(ariaChecked, newSelectionValue.toString());
            }
            button.setAttribute(tabindex, "0");
        });
    }
    ngOnChanges(change) {
        if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isChanged"])('disabled', change)) {
            this.buttons.forEach((button) => {
                if (isPresent(this.disabled)) {
                    button.disabled = this.disabled;
                }
            });
        }
    }
    ngAfterContentInit() {
        const isRadioGroup = this.isSelectionSingle();
        const buttonsRole = isRadioGroup ? 'radio' : 'checkbox';
        this.buttons.forEach((button) => {
            if (button.togglable) {
                button.setAttribute(ariaChecked, button.selected.toString());
                button.setAttribute('role', buttonsRole);
            }
            if (button.selected) {
                button.setAttribute(tabindex, "0");
            }
            else {
                button.setAttribute(tabindex, "-1");
            }
        });
    }
    ngAfterViewChecked() {
        if (this.buttons.length) {
            this.buttons.first.renderer.addClass(this.buttons.first.element, 'k-group-start');
            this.buttons.last.renderer.addClass(this.buttons.last.element, 'k-group-end');
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.localizationChangeSubscription.unsubscribe();
    }
    ngAfterContentChecked() {
        this.verifySettings();
    }
    navigateFocus(event) {
        let focusedIndex = this.buttons.toArray().findIndex(current => current.element.tabIndex !== -1);
        const firstIndex = 0;
        const lastIndex = this.buttons.length - 1;
        const eventArgs = new PreventableEvent();
        if (event.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["Keys"].ArrowRight && focusedIndex < lastIndex) {
            this.navigate.emit(eventArgs);
            if (!eventArgs.isDefaultPrevented()) {
                this.defocus(this.buttons.toArray());
                this.focus(this.buttons.filter((_current, index) => {
                    return index === focusedIndex + 1;
                }));
            }
        }
        if (event.keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["Keys"].ArrowLeft && focusedIndex > firstIndex) {
            this.navigate.emit(eventArgs);
            if (!eventArgs.isDefaultPrevented()) {
                this.defocus(this.buttons.toArray());
                this.focus(this.buttons.filter((_current, index) => {
                    return index === focusedIndex - 1;
                }));
            }
        }
    }
    deactivate(buttons) {
        buttons.forEach((button) => {
            button.setSelected(false);
            button.setAttribute(ariaChecked, button.selected.toString());
            button.setAttribute(tabindex, "-1");
        });
    }
    activate(buttons) {
        buttons.forEach((button) => {
            button.setSelected(true);
            button.setAttribute(ariaChecked, button.selected.toString());
            button.setAttribute(tabindex, "0");
            button.focus();
        });
    }
    defocus(buttons) {
        buttons.forEach((button) => {
            button.setAttribute(tabindex, "-1");
        });
    }
    focus(buttons) {
        buttons.forEach((button) => {
            button.setAttribute(tabindex, "0");
            button.focus();
        });
    }
    verifySettings() {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            if (this.isSelectionSingle() && this.buttons.filter(button => button.selected).length > 1) {
                throw new Error('Having multiple selected buttons with single selection mode is not supported');
            }
        }
    }
    isSelectionSingle() {
        return this.selection === 'single';
    }
}
ButtonGroupComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                exportAs: 'kendoButtonGroup',
                providers: [
                    KendoButtonService,
                    _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"],
                    {
                        provide: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_3__["L10N_PREFIX"],
                        useValue: 'kendo.buttongroup'
                    }
                ],
                selector: 'kendo-buttongroup',
                template: `
        <ng-content select="[kendoButton]"></ng-content>
    `
            },] },
];
/** @nocollapse */
ButtonGroupComponent.ctorParameters = () => [
    { type: KendoButtonService },
    { type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
ButtonGroupComponent.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
    selection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['selection',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['width',] }],
    look: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    navigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    buttons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [ButtonDirective,] }],
    wrapperClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-button-group',] }],
    disabledClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-state-disabled',] }],
    stretchedClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-button-group-stretched',] }],
    isFlat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-button-group-flat',] }],
    isBare: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-button-group-bare',] }],
    isOutline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-button-group-outline',] }],
    getRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.role',] }],
    dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.dir',] }],
    ariaDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-disalbed',] }],
    wrapperWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
    wrapperTabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.tabindex',] }],
    keydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }],
    focusout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focusout', ['$event'],] }]
};

/**
 * Represents the [NgModule]({{ site.data.urls.angular['ngmodules'] }})
 * definition for the Button directive.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Buttons module
 * import { ButtonModule } from '@progress/kendo-angular-buttons';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, ButtonModule], // import Button module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
class ButtonModule {
}
ButtonModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [ButtonDirective],
                exports: [ButtonDirective]
            },] },
];

/**
 * @hidden
 *
 * The exported package module.
 *
 * The package exports:
 * - `ButtonGroupComponent`&mdash;The ButtonGroupComponent component class.
 */
class ButtonGroupModule {
}
ButtonGroupModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [ButtonGroupComponent],
                exports: [ButtonGroupComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], ButtonModule]
            },] },
];

/* tslint:disable:directive-selector-name */
/**
 * Used for rendering the list item content.
 *
 * To define the item template, nest a `<ng-template>` tag with the `kendo<ComponentName>ItemTemplate` directive inside the component tag.
 *
 * For the DropDownButton, use the `kendoDropDownButtonItemTemplate` directive.
 * For the SplitButton, use the `kendoSplitButtonItemTemplate` directive.
 *
 * The template context is set to the current component. To get a reference to the current data item, use the `let-dataItem` directive.
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-splitbutton [data]="listItems">
 *    <ng-template kendoSplitButtonItemTemplate let-dataItem>
 *      <span>{{dataItem}} option</span>
 *    </ng-template>
 *  </kendo-splitbutton>
 *  <kendo-dropdownbutton [data]="listItems">
 *    <ng-template kendoDropDownButtonItemTemplate let-dataItem>
 *      <span>{{dataItem}} option</span>
 *    </ng-template>
 *  </kendo-dropdownbutton>
 * `
 * })
 * class AppComponent {
 *   public listItems: Array<any> = [{
 *      text: 'item1',
 *      icon: 'refresh',
 *      disabled: false,
 *      click: (dataItem: any) => {
 *          //action
 *      }
 *  }, {
 *      text: 'item2',
 *      icon: 'refresh',
 *      disabled: false,
 *      click: (dataItem: any) => {
 *          //action
 *      }
 *  }]
 * }
 * ```
 *
 * For more examples, refer to the article on the [DropDownList templates]({% slug overview_ddl %}#templates).
 */
class ButtonItemTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
ButtonItemTemplateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[kendoDropDownButtonItemTemplate],[kendoSplitButtonItemTemplate]'
            },] },
];
/** @nocollapse */
ButtonItemTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

/**
 * @hidden
 */
class ListComponent {
    constructor() {
        this.onItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    getText(dataItem) {
        if (dataItem) {
            return this.textField ? dataItem[this.textField] : dataItem.text || dataItem;
        }
        return undefined;
    }
    getIconClasses(dataItem) {
        const icon = dataItem.icon ? 'k-icon k-i-' + dataItem.icon : undefined;
        const classes = {};
        classes[icon || dataItem.iconClass] = true;
        return classes;
    }
    onClick(index) {
        this.onItemClick.emit(index);
    }
    onBlur() {
        this.onItemBlur.emit();
    }
}
ListComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'kendo-button-list',
                template: `
        <ul class="k-list k-reset" unselectable="on">
            <li role="menuItem" unselectable="on" tabindex="-1"
                kendoButtonFocusable
                *ngFor="let dataItem of data; let index = index;"
                [index]="index"
                [ngClass]="{'k-item': true, 'k-state-disabled': dataItem.disabled}"
                (click)="onClick(index)"
                (blur)="onBlur()"
                [attr.aria-disabled]="dataItem.disabled ? true : false">
                <ng-template *ngIf="itemTemplate?.templateRef"
                    [templateContext]="{
                        templateRef: itemTemplate?.templateRef,
                        $implicit: dataItem
                    }">
                </ng-template>
                <ng-template [ngIf]="!itemTemplate?.templateRef">
                    <span
                        *ngIf="dataItem.icon || dataItem.iconClass"
                        [ngClass]="getIconClasses(dataItem)"
                    ></span>
                    <img
                        *ngIf="dataItem.imageUrl"
                        class="k-image"
                        [src]="dataItem.imageUrl"
                        alt=""
                    >
                    {{ getText(dataItem) }}
                </ng-template>
            </li>
        </ul>
      `
            },] },
];
ListComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    textField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onItemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onItemBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @hidden
 */
class FocusService {
    constructor() {
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    isFocused(index) {
        return index === this.focused;
    }
    focus(index) {
        if (this.isFocused(index)) {
            return;
        }
        this.focused = index;
        this.onFocus.emit(index);
    }
    resetFocus() {
        this.focused = -1;
    }
    get focused() {
        return this.focusedIndex;
    }
    set focused(index) {
        this.focusedIndex = index;
        this.onFocus.emit(index);
    }
}
FocusService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];

/**
 * @hidden
 */
class FocusableDirective {
    constructor(focusService, elementRef) {
        this.focusService = focusService;
        this.element = elementRef.nativeElement;
        this.subscribeEvents();
    }
    get focusedClassName() {
        return this.focusService.isFocused(this.index);
    }
    /**
     * @hidden
     */
    ngOnDestroy() {
        this.unsubscribeEvents();
    }
    subscribeEvents() {
        if (!Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            return;
        }
        this.focusSubscription = this.focusService.onFocus.subscribe((index) => {
            if (this.index === index) {
                this.element.focus();
            }
        });
    }
    unsubscribeEvents() {
        if (!Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            return;
        }
        if (this.focusSubscription) {
            this.focusSubscription.unsubscribe();
        }
    }
}
FocusableDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[kendoButtonFocusable]'
            },] },
];
/** @nocollapse */
FocusableDirective.ctorParameters = () => [
    { type: FocusService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
FocusableDirective.propDecorators = {
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    focusedClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-state-focused',] }]
};

/**
 * @hidden
 */
class TemplateContextDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    set templateContext(context) {
        if (this.insertedViewRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.insertedViewRef));
            this.insertedViewRef = undefined;
        }
        if (context.templateRef) {
            this.insertedViewRef = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
        }
    }
}
TemplateContextDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[templateContext]' // tslint:disable-line:directive-selector
            },] },
];
/** @nocollapse */
TemplateContextDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
];
TemplateContextDirective.propDecorators = {
    templateContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

const EXPORTED_DIRECTIVES = [
    ListComponent,
    FocusableDirective,
    ButtonItemTemplateDirective,
    TemplateContextDirective
];
/**
 * @hidden
 */
class ListModule {
}
ListModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [EXPORTED_DIRECTIVES],
                exports: [EXPORTED_DIRECTIVES],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]
            },] },
];

/**
 * @hidden
 */
var KeyEvents;
(function (KeyEvents) {
    KeyEvents[KeyEvents["keydown"] = 0] = "keydown";
    KeyEvents[KeyEvents["keypress"] = 1] = "keypress";
    KeyEvents[KeyEvents["keyup"] = 2] = "keyup";
})(KeyEvents || (KeyEvents = {}));

/**
 * @hidden
 */
var NavigationAction;
(function (NavigationAction) {
    NavigationAction[NavigationAction["Undefined"] = 0] = "Undefined";
    NavigationAction[NavigationAction["Open"] = 1] = "Open";
    NavigationAction[NavigationAction["Close"] = 2] = "Close";
    NavigationAction[NavigationAction["Enter"] = 3] = "Enter";
    NavigationAction[NavigationAction["EnterPress"] = 4] = "EnterPress";
    NavigationAction[NavigationAction["EnterUp"] = 5] = "EnterUp";
    NavigationAction[NavigationAction["Tab"] = 6] = "Tab";
    NavigationAction[NavigationAction["Esc"] = 7] = "Esc";
    NavigationAction[NavigationAction["Navigate"] = 8] = "Navigate";
})(NavigationAction || (NavigationAction = {}));

/* tslint:disable:deprecation */
/**
 * @hidden
 */
class ListButton {
    constructor(focusService, navigationService, wrapperRef, _zone, localization) {
        this.focusService = focusService;
        this.navigationService = navigationService;
        this.wrapperRef = wrapperRef;
        this._zone = _zone;
        this._open = false;
        this._disabled = false;
        this._active = false;
        this._popupSettings = { animate: true, popupClass: '' };
        this.listId = Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["guid"])();
        this._isFocused = false;
        this.wrapperBlurred = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focusService = focusService;
        this.navigationService = navigationService;
        this.wrapper = wrapperRef.nativeElement;
        this.localizationChangeSubscription = localization.changes.subscribe(({ rtl }) => this.direction = rtl ? 'rtl' : 'ltr');
        this.subscribeEvents();
    }
    get popupClasses() {
        var popupClasses = [
            'k-list-container',
            'k-reset',
            'k-group'
        ];
        if (this._popupSettings.popupClass) {
            popupClasses.push(this._popupSettings.popupClass);
        }
        return popupClasses.join(' ');
    }
    get openState() {
        return this._open;
    }
    set openState(open) {
        this._open = open;
    }
    /**
     * @hidden
     */
    togglePopupVisibility() {
        if (this._disabled) {
            return;
        }
        this.openState = !this.openState;
        if (!this.openState) {
            this.focusService.focus(-1);
        }
    }
    /**
     * @hidden
     */
    onItemClick(index) {
        this.emitItemClickHandler(index);
        setTimeout(() => { this.focusWrapper(); }, 1);
    }
    ngOnDestroy() {
        this.openState = false;
        this.unsubscribeEvents();
        clearTimeout(this.focusFirstTimeout);
        clearTimeout(this.blurTimeout);
        if (this.localizationChangeSubscription) {
            this.localizationChangeSubscription.unsubscribe();
        }
    }
    subscribeEvents() {
        if (!Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            return;
        }
        this.subscribeListItemFocusEvent();
        this.subscribeComponentBlurredEvent();
        this.subscribeNavigationEvents();
    }
    subscribeListItemFocusEvent() {
        this.focusSubscription = this.focusService.onFocus.subscribe(() => {
            this._isFocused = true;
        });
    }
    subscribeComponentBlurredEvent() {
        this._zone.runOutsideAngular(() => {
            this.documentClick = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((event) => {
                return !this.wrapperContains(event.target);
            }));
            this.tabSubscription = this.navigationService.tab.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(() => this._isFocused)).subscribe(this.handleTab.bind(this));
            this.componentBlurredSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.documentClick, this.wrapperBlurred).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(() => this._isFocused)).subscribe(() => this._zone.run(() => this.blurWrapper()));
        });
    }
    subscribeNavigationEvents() {
        this.navigationSubscription = this.navigationService.navigate
            .subscribe(this.focusService.focus.bind(this.focusService));
        this.enterPressSubscription = this.navigationService.enterpress.subscribe(() => {
            if (!this._disabled && !this._open) {
                this._active = true;
            }
        });
        this.enterUpSubscription = this.navigationService.enterup.subscribe(() => {
            if (!this._open) {
                this._active = false;
            }
            this.enterHandler();
            this.focusWrapper();
        });
        this.openSubscription = this.navigationService.open.subscribe(() => {
            if (!this._open) {
                this.togglePopupVisibility();
                this.focusFirstItem();
            }
            else {
                this.focusWrapper();
            }
        });
        this.closeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.navigationService.close, this.navigationService.esc).subscribe(() => this.focusWrapper());
    }
    enterHandler() { } // tslint:disable-line
    unsubscribeEvents() {
        if (!Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            return;
        }
        this.unsubscribe(this.componentBlurredSubscription);
        this.unsubscribe(this.focusSubscription);
        this.unsubscribe(this.navigationSubscription);
        this.unsubscribe(this.enterPressSubscription);
        this.unsubscribe(this.enterUpSubscription);
        this.unsubscribe(this.openSubscription);
        this.unsubscribe(this.closeSubscription);
        this.unsubscribe(this.tabSubscription);
    }
    unsubscribe(subscription) {
        if (subscription) {
            subscription.unsubscribe();
        }
    }
    /**
     * @hidden
     */
    keyDownHandler(event) {
        this.keyHandler(event);
    }
    /**
     * @hidden
     */
    keyPressHandler(event) {
        this.keyHandler(event, KeyEvents.keypress);
    }
    /**
     * @hidden
     */
    keyUpHandler(event) {
        this.keyHandler(event, KeyEvents.keyup);
    }
    /**
     * @hidden
     */
    keyHandler(event, keyEvent) {
        if (this._disabled) {
            return;
        }
        let focused = this.focusService.focused || 0;
        const eventData = event;
        const action = this.navigationService.process({
            altKey: eventData.altKey,
            current: focused,
            keyCode: eventData.keyCode,
            keyEvent: keyEvent,
            max: this._data ? this._data.length - 1 : 0,
            min: 0
        });
        if (action !== NavigationAction.Undefined &&
            action !== NavigationAction.Tab &&
            (action !== NavigationAction.Enter || (action === NavigationAction.Enter && this._open))) {
            eventData.preventDefault();
        }
    }
    emitItemClickHandler(index) {
        const dataItem = this._data[index];
        if (this._itemClick) {
            this._itemClick.emit(dataItem);
        }
        if (dataItem && dataItem.click && !dataItem.disabled) {
            dataItem.click(dataItem);
        }
    }
    focusFirstItem() {
        if (this._data && isPresent(this._data[0])) {
            this.focusFirstTimeout = setTimeout(() => { this.focusService.focus(0); }, 1);
        }
    }
    focusWrapper() {
        if (this._open) {
            this.togglePopupVisibility();
            this.focusButton();
        }
    }
    /**
     * @hidden
     */
    blurHandler() {
        if (!Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            return;
        }
        this.blurTimeout = setTimeout(() => {
            if (!this.wrapperContains(document.activeElement)) {
                this.blurWrapper();
            }
        });
    }
    wrapperContains(element) {
        return this.wrapper === element || this.wrapper.contains(element);
    }
    blurWrapper() {
        if (this._open) {
            this.togglePopupVisibility();
        }
        this._isFocused = false;
        this._blur.emit();
    }
    focusButton() {
        if (this.button) {
            this.button.nativeElement.focus();
        }
    }
    handleTab() {
        this.focusButton();
        this.blurWrapper();
    }
}

/**
 * @hidden
 */
const NAVIGATION_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('navigation.config');

/**
 * @hidden
 */
class NavigationService {
    constructor(config) {
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enterpress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enterup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.esc = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.useLeftRightArrows = config.useLeftRightArrows;
    }
    process(args) {
        const keyCode = args.keyCode;
        const keyEvent = args.keyEvent;
        let index;
        let action = NavigationAction.Undefined;
        if (keyEvent === KeyEvents.keypress) {
            if (this.isEnter(keyCode)) {
                action = NavigationAction.EnterPress;
            }
        }
        else if (keyEvent === KeyEvents.keyup) {
            if (this.isEnter(keyCode)) {
                action = NavigationAction.EnterUp;
            }
        }
        else {
            if (args.altKey && keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["Keys"].ArrowDown) {
                action = NavigationAction.Open;
            }
            else if (args.altKey && keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["Keys"].ArrowUp) {
                action = NavigationAction.Close;
            }
            else if (this.isEnter(keyCode)) {
                action = NavigationAction.Enter;
            }
            else if (keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["Keys"].Escape) {
                action = NavigationAction.Esc;
            }
            else if (keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["Keys"].Tab) {
                action = NavigationAction.Tab;
            }
            else if (keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["Keys"].ArrowUp || (this.useLeftRightArrows && keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["Keys"].ArrowLeft)) {
                index = this.next({
                    current: args.current,
                    start: args.max,
                    end: args.min,
                    step: -1
                });
                action = NavigationAction.Navigate;
            }
            else if (keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["Keys"].ArrowDown || (this.useLeftRightArrows && keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["Keys"].ArrowRight)) {
                index = this.next({
                    current: args.current,
                    start: args.min,
                    end: args.max,
                    step: 1
                });
                action = NavigationAction.Navigate;
            }
        }
        if (action !== NavigationAction.Undefined) {
            this[NavigationAction[action].toLowerCase()].emit(index);
        }
        return action;
    }
    isEnter(keyCode) {
        return keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["Keys"].Enter || keyCode === _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["Keys"].Space;
    }
    next(args) {
        if (!isPresent(args.current)) {
            return args.start;
        }
        else {
            return args.current !== args.end ? args.current + args.step : args.end;
        }
    }
}
NavigationService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
NavigationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NAVIGATION_CONFIG,] }] }
];

/* tslint:disable:no-access-missing-member */
const NAVIGATION_SETTINGS = {
    useLeftRightArrows: true
};
const ɵ0 = NAVIGATION_SETTINGS;
const NAVIGATION_SETTINGS_PROVIDER = {
    provide: NAVIGATION_CONFIG,
    useValue: ɵ0
};
/**
 * Represents the Kendo UI SplitButton component for Angular.
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-splitbutton [data]="data" [icon]="'paste'"
 *      (itemClick)="onSplitButtonItemClick($event)"
 *      (buttonClick)="onSplitButtonClick()">Paste</kendo-splitbutton>
 * `
 * })
 *
 * class AppComponent {
 *   public data: Array<any> = [{
 *       text: 'Keep Text Only',
 *       icon: 'paste-plain-text',
 *       click: () => { console.log('Keep Text Only click handler'); }
 *   }, {
 *       text: 'Paste as HTML',
 *       icon: 'paste-as-html'
 *   }, {
 *       text: 'Paste Markdown',
 *       icon: 'paste-markdown'
 *   }, {
 *       text: 'Set Default Paste'
 *   }];
 *
 *   public onSplitButtonClick(dataItem: any): void {
 *       console.log('Paste');
 *   }
 *
 *   public onSplitButtonItemClick(dataItem: any): void {
 *       if (dataItem) {
 *           console.log(dataItem.text);
 *       }
 *   }
 * }
 * ```
 */
class SplitButtonComponent extends ListButton {
    constructor(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization) {
        super(focusService, navigationService, wrapperRef, zone, localization);
        this.popupService = popupService;
        this.elRef = elRef;
        /**
         * Sets the text of the SplitButton.
         */
        this.text = '';
        /**
         * Defines an icon to be rendered next to the button text
         * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
         */
        this.icon = '';
        /**
         * Defines an icon with a custom CSS class to be rendered next to the button text
         * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
         */
        this.iconClass = '';
        /**
         * Defines the location of an image to be displayed next to the button text
         * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
         */
        this.imageUrl = '';
        /**
         * Changes the visual appearance by using alternative styling options.
         *
         * The available values are:
         * * `flat`
         * * `outline`
         */
        this.look = 'default';
        /**
         * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
         */
        this.tabIndex = 0;
        /**
         * Specifies the name of the [font icon]({% slug icons %}#toc-list-of-font-icons) that will
         * be rendered for the button which opens the popup.
         */
        this.arrowButtonIcon = 'arrow-s';
        /**
         * Fires each time the user clicks the main button.
         *
         * @example
         * ```ts
         * _@Component({
         *    selector: 'my-app',
         *    template: `
         *        <kendo-splitbutton (buttonClick)="onSplitButtonClick()" [data]="data">
         *            Reply
         *        </kendo-splitbutton>
         *    `
         * })
         * class AppComponent {
         *    public data: Array<any> = ['Reply All', 'Forward', 'Reply & Delete'];
         *
         *    public onSplitButtonClick(): void {
         *      console.log('SplitButton click');
         *    }
         * }
         * ```
         *
         */
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires each time the user clicks on the drop-down list. The event data contains the data item bound to the clicked list item.
         *
         * @example
         * ```ts
         * _@Component({
         *     selector: 'my-app',
         *    template: `
         *        <kendo-splitbutton (itemClick)="onSplitButtonItemClick($event)" [data]="data">
         *          Reply
         *      </kendo-splitbutton>
         *    `
         * })
         * class AppComponent {
         *    public data: Array<any> = ['Reply All', 'Forward', 'Reply & Delete'];
         *
         *   public onSplitButtonItemClick(dataItem?: string): void {
         *        if (dataItem) {
         *            console.log(dataItem);
         *       }
         *    }
         * }
         * ```
         *
         */
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires each time the SplitButton gets focused.
         */
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //tslint:disable-line:no-output-rename
        /**
         * Fires each time the SplitButton gets blurred.
         */
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //tslint:disable-line:no-output-rename
        /**
         * Fires each time the popup is about to open.
         * This event is preventable. If you cancel the event, the popup will remain closed.
         */
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires each time the popup is about to close.
         * This event is preventable. If you cancel the event, the popup will remain open.
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listId = Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["guid"])();
        this.buttonText = '';
        this._itemClick = this.itemClick;
        this._blur = this.onBlur;
    }
    /**
     * When set to `true`, disables a SplitButton item
     * ([see example]({% slug databinding_splitbutton %}#toc-arrays-of-complex-data)).
     */
    set disabled(value) {
        this._disabled = value;
    }
    get disabled() {
        return this._disabled;
    }
    /**
     * Configures the popup of the SplitButton.
     *
     * The available options are:
     * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
     * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
     * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
     * - `align: "left" | "center" | "right"`&mdash;Specifies the alignment of the popup.
     */
    set popupSettings(settings) {
        this._popupSettings = Object.assign({ animate: true, popupClass: '' }, settings);
    }
    get popupSettings() {
        return this._popupSettings;
    }
    /**
     * Sets the data of the SplitButton.
     *
     * > The data has to be provided in an array-like list.
     */
    set data(data) {
        this._data = data || [];
    }
    get data() {
        if (!this._data) {
            this.data = [];
        }
        return this._data;
    }
    /**
     * @hidden
     */
    set openState(open) {
        if (this.disabled) {
            return;
        }
        const eventArgs = new PreventableEvent();
        if (open) {
            this.open.emit(eventArgs);
        }
        else {
            this.close.emit(eventArgs);
        }
        if (eventArgs.isDefaultPrevented()) {
            return;
        }
        this._toggle(open);
    }
    /**
     * @hidden
     */
    get openState() {
        return this._open;
    }
    /**
     * @hidden
     */
    get active() {
        return this._active;
    }
    /**
     * @hidden
     */
    get componentTabIndex() {
        return this.disabled ? (-1) : this.tabIndex;
    }
    set isFocused(value) {
        this._isFocused = value;
    }
    get isFocused() {
        return this._isFocused && !this._disabled;
    }
    get widgetClasses() {
        return true;
    }
    get dir() {
        return this.direction;
    }
    /**
     * @hidden
     */
    get ariaLabel() {
        return `${this.buttonText} splitbutton`;
    }
    /**
     * @hidden
     */
    onButtonFocus() {
        if (!this.isFocused) {
            this._isFocused = true;
            this.onFocus.emit();
        }
    }
    /**
     * @hidden
     */
    onButtonClick() {
        this.buttonClick.emit();
    }
    /**
     * @hidden
     */
    keydown(event) {
        this.keyDownHandler(event);
    }
    /**
     * @hidden
     */
    keypress(event) {
        this.keyPressHandler(event);
    }
    /**
     * @hidden
     */
    keyup(event) {
        this.keyUpHandler(event);
    }
    /**
     * @hidden
     */
    ngAfterViewInit() {
        this.updateButtonText();
    }
    /**
     * @hidden
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('text')) {
            this.updateButtonText();
        }
    }
    /**
     * @hidden
     */
    togglePopupVisibility() {
        super.togglePopupVisibility();
        if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            this.button.nativeElement.focus();
        }
    }
    /**
     * @hidden
     */
    wrapperContains(element) {
        return this.wrapper === element
            || this.wrapper.contains(element)
            || (this.popupRef && this.popupRef.popupElement.contains(element));
    }
    /**
     * @hidden
     */
    get anchorAlign() {
        let align = { horizontal: this.popupSettings.align || 'left', vertical: 'bottom' };
        if (this.direction === 'rtl' && !isPresent(this.popupSettings.align)) {
            align.horizontal = 'right';
        }
        return align;
    }
    /**
     * @hidden
     */
    get popupAlign() {
        let align = { horizontal: this.popupSettings.align || 'left', vertical: 'top' };
        if (this.direction === 'rtl' && !isPresent(this.popupSettings.align)) {
            align.horizontal = 'right';
        }
        return align;
    }
    /**
     * Focuses the SplitButton component.
     */
    focus() {
        if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            this.button.nativeElement.focus();
        }
    }
    /**
     * Blurs the SplitButton component.
     */
    blur() {
        if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            this.button.nativeElement.blur();
            this.blurWrapper();
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.destroyPopup();
    }
    /**
     * Toggles the visibility of the popup.
     * If the `toggle` method is used to open or close the popup, the `open` and `close` events will not be fired.
     *
     * @param open - The state of the popup.
     */
    toggle(open) {
        if (this.disabled) {
            return;
        }
        tick(() => (this._toggle((open === undefined) ? !this._open : open)));
    }
    /**
     * Returns the current open state of the popup.
     */
    get isOpen() {
        return this.openState;
    }
    enterHandler() {
        if (this.disabled) {
            return;
        }
        if (this.openState) {
            let focused = this.focusService.focused;
            if (isPresent(focused) && focused !== -1) {
                this.emitItemClickHandler(focused);
            }
        }
        else {
            this.buttonClick.emit();
        }
    }
    updateButtonText() {
        if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            let innerText = this.wrapper.innerText.split('\n').join('').trim();
            //setTimout is needed because of `Expression has changed after it was checked.` error;
            setTimeout(() => { this.buttonText = innerText; }, 0);
        }
    }
    get appendTo() {
        const { appendTo } = this.popupSettings;
        if (!appendTo || appendTo === 'root') {
            return undefined;
        }
        return appendTo === 'component' ? this.containerRef : appendTo;
    }
    _toggle(open) {
        this._open = open;
        this.destroyPopup();
        if (this._open) {
            this.createPopup();
        }
    }
    createPopup() {
        this.popupRef = this.popupService.open({
            anchor: this.elRef,
            anchorAlign: this.anchorAlign,
            animate: this.popupSettings.animate,
            appendTo: this.appendTo,
            content: this.popupTemplate,
            popupAlign: this.popupAlign,
            popupClass: this.popupClasses
        });
        this.popupRef.popupAnchorViewportLeave.subscribe(() => this.openState = false);
        this.popupRef.popupOpen.subscribe(this.focusFirstItem.bind(this));
    }
    destroyPopup() {
        if (this.popupRef) {
            this.popupRef.close();
            this.popupRef = null;
        }
    }
}
SplitButtonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                exportAs: 'kendoSplitButton',
                providers: [
                    FocusService,
                    NavigationService,
                    NAVIGATION_SETTINGS_PROVIDER,
                    _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"],
                    {
                        provide: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_3__["L10N_PREFIX"],
                        useValue: 'kendo.splitbutton'
                    }
                ],
                selector: 'kendo-splitbutton',
                template: `
        <button kendoButton
            #button
            role="listbox"
            type="button"
            [look]="look"
            [tabindex]="componentTabIndex"
            [disabled]="disabled"
            [icon]="icon"
            [class.k-state-active]="active"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            (focus)="onButtonFocus()"
            (click)="onButtonClick()"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="openState"
            [attr.aria-haspopup]="true"
            [attr.aria-owns]="listId"
            [attr.aria-label]="ariaLabel"
            >
            {{text}}<ng-content></ng-content>
        </button>
        <button kendoButton
            type="button"
            [disabled]="disabled"
            [icon]="arrowButtonIcon"
            [look]="look"
            [tabindex]="-1"
            [ngClass]="arrowButtonClass"
            (click)="togglePopupVisibility()">
        </button>
        <ng-template #popupTemplate>
            <kendo-button-list
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemBlur)="blurHandler()"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keypress)="keyPressHandler($event)"
                (keyup)="keyUpHandler($event)"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `
            },] },
];
/** @nocollapse */
SplitButtonComponent.ctorParameters = () => [
    { type: FocusService },
    { type: NavigationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_6__["PopupService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"] }
];
SplitButtonComponent.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    iconClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    look: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    popupSettings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    textField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    buttonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    arrowButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    arrowButtonIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    buttonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['focus',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['blur',] }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [ButtonItemTemplateDirective,] }],
    button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['button',] }],
    popupTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['popupTemplate',] }],
    containerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] }],
    isFocused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-state-focused',] }],
    widgetClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-widget',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-split-button',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-button-group',] }],
    dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.dir',] }],
    keydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }],
    keypress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keypress', ['$event'],] }],
    keyup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] }]
};

/**
 * @hidden
 *
 * The exported package module.
 *
 * The package exports:
 * - `SplitButtonComponent`&mdash;The SplitButtonComponent component class.
 */
class SplitButtonModule {
}
SplitButtonModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [SplitButtonComponent],
                exports: [SplitButtonComponent, ListModule],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_6__["PopupModule"], ButtonModule, ListModule]
            },] },
];

/* tslint:disable:no-access-missing-member */
const NAVIGATION_SETTINGS$1 = {
    useLeftRightArrows: true
};
const ɵ0$1 = NAVIGATION_SETTINGS$1;
const NAVIGATION_SETTINGS_PROVIDER$1 = {
    provide: NAVIGATION_CONFIG,
    useValue: ɵ0$1
};
/**
 * Represents the Kendo UI DropDownButton component for Angular.
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-dropdownbutton [data]="data">
 *    User Settings
 *  </kendo-dropdownbutton>
 * `
 * })
 * class AppComponent {
 *   public data: Array<any> = [{
 *       text: 'My Profile'
 *   }, {
 *       text: 'Friend Requests'
 *   }, {
 *       text: 'Account Settings'
 *   }, {
 *       text: 'Support'
 *   }, {
 *       text: 'Log Out'
 *   }];
 * }
 * ```
 */
class DropDownButtonComponent extends ListButton {
    constructor(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization) {
        super(focusService, navigationService, wrapperRef, zone, localization);
        this.popupService = popupService;
        this.elRef = elRef;
        /**
         * Defines the name of an existing icon in a Kendo UI theme.
         */
        this.icon = '';
        /**
         * Defines the list of CSS classes which are used for styling the Button with custom icons.
         */
        this.iconClass = '';
        /**
         * Defines a URL for styling the button with a custom image.
         */
        this.imageUrl = '';
        /**
         * Adds visual weight to the default button and makes it primary.
         */
        this.primary = false;
        /**
         * Changes the visual appearance by using alternative styling options.
         *
         * The available values are:
         * * `flat`
         * * `outline`
         */
        this.look = 'default';
        /**
         * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
         */
        this.tabIndex = 0;
        /**
         * Fires each time the user clicks on a drop-down list item. The event data contains the data item bound to the clicked list item.
         */
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires each time the popup is about to open.
         * This event is preventable. If you cancel the event, the popup will remain closed.
         */
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires each time the popup is about to close.
         * This event is preventable. If you cancel the event, the popup will remain open.
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires each time the DropDownButton gets focused.
         */
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //tslint:disable-line:no-output-rename
        /**
         * Fires each time the DropDownButton gets blurred.
         */
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //tslint:disable-line:no-output-rename
        this.listId = Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["guid"])();
        this._itemClick = this.itemClick;
        this._blur = this.onBlur;
    }
    /**
     * Configures the popup of the DropDownButton.
     *
     * The available options are:
     * - `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
     * - `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
     * - `appendTo: "root" | "component" | ViewContainerRef`&mdash;Specifies the component to which the popup will be appended.
     * - `align: "left" | "center" | "right"`&mdash;Specifies the alignment of the popup.
     */
    set popupSettings(settings) {
        this._popupSettings = Object.assign({ animate: true, popupClass: '' }, settings);
    }
    get popupSettings() {
        return this._popupSettings;
    }
    /**
     * Sets the disabled state of the DropDownButton.
     */
    set disabled(value) {
        if (value && this.openState) {
            this.openState = false;
        }
        this._disabled = value;
    }
    get disabled() {
        return this._disabled;
    }
    /**
     * Sets or gets the data of the DropDownButton.
     *
     * > The data has to be provided in an array-like list.
     */
    set data(data) {
        this._data = data || [];
    }
    get data() {
        return this._data;
    }
    /**
     * @hidden
     */
    set openState(open) {
        if (this.disabled) {
            return;
        }
        const eventArgs = new PreventableEvent();
        if (open) {
            this.open.emit(eventArgs);
        }
        else {
            this.close.emit(eventArgs);
        }
        if (eventArgs.isDefaultPrevented()) {
            return;
        }
        this._toggle(open);
    }
    /**
     * @hidden
     */
    get openState() {
        return this._open;
    }
    /**
     * @hidden
     */
    get componentTabIndex() {
        return this.disabled ? (-1) : this.tabIndex;
    }
    get appendTo() {
        const { appendTo } = this.popupSettings;
        if (!appendTo || appendTo === 'root') {
            return undefined;
        }
        return appendTo === 'component' ? this.container : appendTo;
    }
    get focused() {
        return this._isFocused && !this._disabled;
    }
    get widgetClasses() {
        return true;
    }
    get dir() {
        return this.direction;
    }
    /**
     * @hidden
     */
    get active() {
        return this._active;
    }
    /**
     * @hidden
     */
    keydown(event) {
        this.keyDownHandler(event);
    }
    /**
     * @hidden
     */
    keypress(event) {
        this.keyPressHandler(event);
    }
    /**
     * @hidden
     */
    keyup(event) {
        this.keyUpHandler(event);
    }
    /**
     * @hidden
     */
    mousedown(event) {
        if (this._disabled) {
            event.preventDefault();
        }
    }
    /**
     * @hidden
     */
    openPopup() {
        this.togglePopupVisibility();
    }
    /**
     * @hidden
     */
    get anchorAlign() {
        let align = { horizontal: this.popupSettings.align || 'left', vertical: 'bottom' };
        if (this.direction === 'rtl' && !isPresent(this.popupSettings.align)) {
            align.horizontal = 'right';
        }
        return align;
    }
    /**
     * @hidden
     */
    get popupAlign() {
        let align = { horizontal: this.popupSettings.align || 'left', vertical: 'top' };
        if (this.direction === 'rtl' && !isPresent(this.popupSettings.align)) {
            align.horizontal = 'right';
        }
        return align;
    }
    /**
     * Focuses the DropDownButton component.
     */
    focus() {
        if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            this.button.nativeElement.focus();
        }
    }
    /**
     * Blurs the DropDownButton component.
     */
    blur() {
        if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            this.button.nativeElement.blur();
            this.blurWrapper();
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.destroyPopup();
    }
    /**
     * Toggles the visibility of the popup.
     * If the `toggle` method is used to open or close the popup, the `open` and `close` events will not be fired.
     *
     * @param open - The state of the popup.
     */
    toggle(open) {
        if (this.disabled) {
            return;
        }
        tick(() => (this._toggle((open === undefined) ? !this._open : open)));
    }
    /**
     * Returns the current open state of the popup.
     */
    get isOpen() {
        return this.openState;
    }
    /**
     * @hidden
     */
    handleFocus() {
        if (!this._disabled && !this._isFocused) {
            this._isFocused = true;
            this.onFocus.emit();
        }
    }
    /**
     * @hidden
     */
    wrapperContains(element) {
        return this.wrapper === element
            || this.wrapper.contains(element)
            || (this.popupRef && this.popupRef.popupElement.contains(element));
    }
    subscribeNavigationEvents() {
        this.navigationSubscription = this.navigationService.navigate
            .subscribe(this.onArrowKeyNavigate.bind(this));
        this.enterPressSubscription = this.navigationService.enterpress.subscribe(this.onNavigationEnterPress.bind(this));
        this.enterUpSubscription = this.navigationService.enterup.subscribe(this.onNavigationEnterUp.bind(this));
        this.openSubscription = this.navigationService.open.subscribe(this.onNavigationOpen.bind(this));
        this.closeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.navigationService.close, this.navigationService.esc).subscribe(this.onNavigationClose.bind(this));
    }
    onNavigationEnterPress() {
        if (!this._disabled && !this.openState) {
            this._active = true;
        }
    }
    onNavigationEnterUp() {
        if (!this._disabled && !this.openState) {
            this._active = false;
        }
        if (this.openState) {
            let focused = this.focusService.focused;
            if (isPresent(focused) && focused !== -1) {
                this.emitItemClickHandler(focused);
            }
        }
        this.togglePopupVisibility();
        if (!this.openState && Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            this.button.nativeElement.focus();
        }
    }
    onNavigationOpen() {
        if (!this._disabled && !this.openState) {
            this.togglePopupVisibility();
        }
    }
    onNavigationClose() {
        if (this.openState) {
            this.togglePopupVisibility();
            if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
                this.button.nativeElement.focus();
            }
        }
    }
    onArrowKeyNavigate(index) {
        this.focusService.focus(index);
    }
    _toggle(open) {
        if (this._open === open) {
            return;
        }
        this._open = open;
        this.destroyPopup();
        if (this._open) {
            this.createPopup();
        }
    }
    createPopup() {
        this.popupRef = this.popupService.open({
            anchor: this.elRef,
            anchorAlign: this.anchorAlign,
            animate: this.popupSettings.animate,
            appendTo: this.appendTo,
            content: this.popupTemplate,
            popupAlign: this.popupAlign,
            popupClass: this.popupClasses
        });
        this.popupRef.popupAnchorViewportLeave.subscribe(() => this.openState = false);
        this.popupRef.popupOpen.subscribe(this.focusFirstItem.bind(this));
    }
    destroyPopup() {
        if (this.popupRef) {
            this.popupRef.close();
            this.popupRef = null;
        }
    }
}
DropDownButtonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                exportAs: 'kendoDropDownButton',
                providers: [
                    FocusService,
                    NavigationService,
                    NAVIGATION_SETTINGS_PROVIDER$1,
                    _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"],
                    {
                        provide: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_3__["L10N_PREFIX"],
                        useValue: 'kendo.dropdownbutton'
                    }
                ],
                selector: 'kendo-dropdownbutton',
                template: `
        <button kendoButton #button
            role="menu"
            type="button"
            [tabindex]="componentTabIndex"
            [class.k-state-active]="active"
            [disabled]="disabled"
            [icon]="icon"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            (click)="openPopup()"
            (focus)="handleFocus()"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="openState"
            [attr.aria-haspopup]="true"
            [attr.aria-owns]="listId"
            [look]="look"
            [primary]="primary"
            >
            <ng-content></ng-content>
        </button>
        <ng-template #popupTemplate>
            <kendo-button-list
                #buttonList
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keypress)="keyPressHandler($event)"
                (keyup)="keyUpHandler($event)"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `
            },] },
];
/** @nocollapse */
DropDownButtonComponent.ctorParameters = () => [
    { type: FocusService },
    { type: NavigationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_6__["PopupService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"] }
];
DropDownButtonComponent.propDecorators = {
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    iconClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    imageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    popupSettings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    textField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    primary: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    look: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    buttonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['focus',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['blur',] }],
    focused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-state-focused',] }],
    widgetClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-widget',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.k-dropdown-button',] }],
    dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.dir',] }],
    itemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [ButtonItemTemplateDirective,] }],
    button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['button',] }],
    buttonList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['buttonList',] }],
    popupTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['popupTemplate',] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] }],
    keydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }],
    keypress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keypress', ['$event'],] }],
    keyup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] }],
    mousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
};

/**
 * @hidden
 *
 * The exported package module.
 *
 * The package exports:
 * - `DropDownButtonComponent`&mdash;The DropDownButtonComponent component class.
 */
class DropDownButtonModule {
}
DropDownButtonModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [DropDownButtonComponent],
                exports: [DropDownButtonComponent, ListModule],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_6__["PopupModule"], ListModule, ButtonModule]
            },] },
];

/**
 * Represents the [NgModule]({{ site.data.urls.angular['ngmodules'] }})
 * definition for the Buttons components.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Buttons module
 * import { ButtonsModule } from '@progress/kendo-angular-buttons';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, ButtonsModule], // import Buttons module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
class ButtonsModule {
}
ButtonsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                exports: [ButtonGroupModule, ButtonModule, SplitButtonModule, DropDownButtonModule]
            },] },
];

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/@progress/kendo-angular-popup/dist/fesm2015/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@progress/kendo-angular-popup/dist/fesm2015/index.js ***!
  \***************************************************************************/
/*! exports provided: AlignService, AnimationService, DOMService, PositionService, ResizeService, ScrollableService, PopupService, POPUP_CONTAINER, PopupComponent, PopupModule, SCALE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignService", function() { return AlignService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationService", function() { return AnimationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMService", function() { return DOMService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeService", function() { return ResizeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableService", function() { return ScrollableService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPUP_CONTAINER", function() { return POPUP_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupModule", function() { return PopupModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCALE", function() { return SCALE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _progress_kendo_popup_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-popup-common */ "./node_modules/@progress/kendo-popup-common/dist/es2015/main.js");
/* harmony import */ var _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-common */ "./node_modules/@progress/kendo-angular-common/dist/fesm2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**-----------------------------------------------------------------------------------------
* Copyright © 2019 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/








/**
 * @hidden
 */
const eitherRect = (rect, offset$$1) => {
    if (!rect) {
        return { height: 0, left: offset$$1.left, top: offset$$1.top, width: 0 };
    }
    return rect;
};
/**
 * @hidden
 */

/**
 * @hidden
 */
const removeStackingOffset = (rect, stackingOffset) => {
    if (!stackingOffset) {
        return rect;
    }
    const result = {
        height: rect.height,
        left: rect.left - stackingOffset.left,
        top: rect.top - stackingOffset.top,
        width: rect.width
    };
    return result;
};
/**
 * @hidden
 */
const isDifferentOffset = (oldOffset, newOffset) => {
    const { left: oldLeft, top: oldTop } = oldOffset;
    const { left: newLeft, top: newTop } = newOffset;
    return Math.abs(oldLeft - newLeft) >= 1 || Math.abs(oldTop - newTop) >= 1;
};
/**
 * @hidden
 */
const isWindowAvailable = () => {
    return typeof window !== 'undefined';
};
/**
 * @hidden
 */

/**
 * @hidden
 */
const OVERFLOW_REGEXP = /auto|scroll/;
const overflowElementStyle = (element) => {
    return `${element.style.overflow}${element.style.overflowX}${element.style.overflowY}`;
};
const overflowComputedStyle = (element) => {
    const styles = window.getComputedStyle(element);
    return `${styles.overflow}${styles.overflowX}${styles.overflowY}`;
};
const overflowStyle = (element) => {
    return overflowElementStyle(element) || overflowComputedStyle(element);
};
/**
 * @hidden
 */
const scrollableParents = (element) => {
    const parentElements = [];
    if (!Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])() || !isWindowAvailable()) {
        return parentElements;
    }
    let parent = element.parentElement;
    while (parent) {
        if (OVERFLOW_REGEXP.test(overflowStyle(parent)) || parent.hasAttribute('data-scrollable')) {
            parentElements.push(parent);
        }
        parent = parent.parentElement;
    }
    parentElements.push(window);
    return parentElements;
};
/**
 * @hidden
 */
const FRAME_DURATION = 1000 / 60; //1000ms divided by 60fps
function memoize(fun) {
    let result;
    let called = false;
    return (...args) => {
        if (called) {
            return result;
        }
        result = fun(...args);
        called = true;
        return result;
    };
}
/**
 * @hidden
 */
const hasRelativeStackingContext = memoize(() => {
    if (!Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])() && document.body !== null) {
        return false;
    }
    const top = 10;
    const parent = document.createElement("div");
    parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
    parent.innerHTML = `<div style="position: fixed; top: ${top}px;">child</div>`;
    document.body.appendChild(parent);
    const isDifferent = parent.children[0].getBoundingClientRect().top !== top;
    document.body.removeChild(parent);
    return isDifferent;
});
/**
 * @hidden
 */
const zIndex = (anchor, container) => {
    if (!anchor || !Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])() || !isWindowAvailable()) {
        return null;
    }
    const sibling = Object(_progress_kendo_popup_common__WEBPACK_IMPORTED_MODULE_1__["siblingContainer"])(anchor, container);
    if (!sibling) {
        return null;
    }
    const result = [anchor].concat(Object(_progress_kendo_popup_common__WEBPACK_IMPORTED_MODULE_1__["parents"])(anchor, sibling)).reduce((index, p) => {
        const zIndexStyle = p.style.zIndex || window.getComputedStyle(p).zIndex;
        const current = parseInt(zIndexStyle, 10);
        return current > index ? current : index;
    }, 0);
    return result ? (result + 1) : null;
};
/**
 * @hidden
 */
const scaleRect = (rect, scale) => {
    if (!rect || scale === 1) {
        return rect;
    }
    return {
        height: rect.height / scale,
        left: rect.left / scale,
        top: rect.top / scale,
        width: rect.width / scale
    };
};

const STYLES = [
    'font-size',
    'font-family',
    'font-stretch',
    'font-style',
    'font-weight',
    'line-height'
];
/**
 * @hidden
 */
class DOMService {
    addOffset(current, addition) {
        return {
            left: current.left + addition.left,
            top: current.top + addition.top
        };
    }
    addScroll(rect, scroll) {
        return Object(_progress_kendo_popup_common__WEBPACK_IMPORTED_MODULE_1__["addScroll"])(rect, scroll);
    }
    align(settings) {
        return Object(_progress_kendo_popup_common__WEBPACK_IMPORTED_MODULE_1__["align"])(settings);
    }
    boundingOffset(el) {
        return Object(_progress_kendo_popup_common__WEBPACK_IMPORTED_MODULE_1__["boundingOffset"])(this.nativeElement(el));
    }
    getFontStyles(el) {
        const window = this.getWindow();
        if (!window || !el) {
            return [];
        }
        const computedStyles = window.getComputedStyle(this.nativeElement(el));
        return STYLES.map(font => ({ key: font, value: computedStyles[font] }));
    }
    getWindow() {
        return isWindowAvailable() ? window : null;
    }
    hasOffsetParent(el) {
        if (!el) {
            return false;
        }
        return !!this.nativeElement(el).offsetParent;
    }
    offset(el) {
        if (!el) {
            return null;
        }
        return Object(_progress_kendo_popup_common__WEBPACK_IMPORTED_MODULE_1__["offset"])(this.nativeElement(el));
    }
    offsetAtPoint(el, currentLocation) {
        if (!el) {
            return null;
        }
        const element = this.nativeElement(el);
        const { left, top, transition } = element.style;
        element.style.transition = 'none';
        element.style.left = `${currentLocation.left}px`;
        element.style.top = `${currentLocation.top}px`;
        const currentOffset = Object(_progress_kendo_popup_common__WEBPACK_IMPORTED_MODULE_1__["offset"])(element);
        element.style.left = left;
        element.style.top = top;
        // prevents elements with transition to be animated because of the change
        // tslint:disable-next-line:no-unused-expression
        element.offsetHeight;
        element.style.transition = transition;
        return currentOffset;
    }
    nativeElement(el) {
        if (!el) {
            return null;
        }
        return el.nativeElement || el;
    }
    position(element, popup, scale = 1) {
        if (!element || !popup) {
            return null;
        }
        return Object(_progress_kendo_popup_common__WEBPACK_IMPORTED_MODULE_1__["positionWithScroll"])(this.nativeElement(element), this.nativeElement(popup), scale);
    }
    removeScroll(rect, scroll) {
        return Object(_progress_kendo_popup_common__WEBPACK_IMPORTED_MODULE_1__["removeScroll"])(rect, scroll);
    }
    restrictToView(settings) {
        return Object(_progress_kendo_popup_common__WEBPACK_IMPORTED_MODULE_1__["restrictToView"])(settings);
    }
    scrollPosition(el) {
        return Object(_progress_kendo_popup_common__WEBPACK_IMPORTED_MODULE_1__["scrollPosition"])(this.nativeElement(el));
    }
    scrollableParents(el) {
        return scrollableParents(this.nativeElement(el));
    }
    stackingElementOffset(el) {
        const relativeContextElement = this.getRelativeContextElement(el);
        if (!relativeContextElement) {
            return null;
        }
        return Object(_progress_kendo_popup_common__WEBPACK_IMPORTED_MODULE_1__["offset"])(relativeContextElement);
    }
    stackingElementScroll(el) {
        const relativeContextElement = this.getRelativeContextElement(el);
        if (!relativeContextElement) {
            return { x: 0, y: 0 };
        }
        return {
            x: relativeContextElement.scrollLeft,
            y: relativeContextElement.scrollTop
        };
    }
    getRelativeContextElement(el) {
        if (!el || !hasRelativeStackingContext()) {
            return null;
        }
        let parent = this.nativeElement(el).parentElement;
        while (parent) {
            if (window.getComputedStyle(parent).transform !== 'none') {
                return parent;
            }
            parent = parent.parentElement;
        }
        return null;
    }
    useRelativePosition(el) {
        return !!this.getRelativeContextElement(el);
    }
    windowViewPort(el) {
        return Object(_progress_kendo_popup_common__WEBPACK_IMPORTED_MODULE_1__["getWindowViewPort"])(this.nativeElement(el));
    }
    zIndex(anchor, container) {
        return zIndex(this.nativeElement(anchor), this.nativeElement(container));
    }
    zoomLevel() {
        if (!Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])() || !isWindowAvailable()) {
            return 1;
        }
        return parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
    }
    isZoomed() {
        return this.zoomLevel() > 1;
    }
}
DOMService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];

/**
 * Used to set the document scale when using a [scale transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale).
 *
 * The document or container scale is required to compute the popup position correctly. Detecting the scale is not reliable and must be set by providing a value for SCALE. See [Support for Document Scale]({% slug documentscale_popup %}).
 *
 * > Using this token is not necessary for user-applied browser zoom.
 *
 * {% meta height:300 %}
 * {% embed_file scale/app.component.ts preview %}
 * {% embed_file scale/app.module.ts %}
 * {% embed_file scale/main.ts %}
 * {% endmeta %}
 *
 *
 */
const SCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Popup Document Scale');

/**
 * @hidden
 */
class AlignService {
    constructor(_dom, scale = 1) {
        this._dom = _dom;
        this.scale = scale;
    }
    alignElement(settings) {
        const { anchor, element, anchorAlign, elementAlign, margin, offset: offset$$1, positionMode } = settings;
        const scale = this.scale || 1;
        const fixedMode = positionMode === 'fixed' || !this._dom.hasOffsetParent(element);
        const anchorRect = fixedMode ? this.absoluteRect(anchor, element, offset$$1, scale) : this.relativeRect(anchor, element, offset$$1, scale);
        const elementRect = scaleRect(this._dom.offset(element), scale);
        const result = this._dom.align({
            anchorAlign: anchorAlign,
            anchorRect: anchorRect,
            elementAlign: elementAlign,
            elementRect: elementRect,
            margin
        });
        return result;
    }
    absoluteRect(anchor, element, offset$$1, scale) {
        const scrollPos = this.elementScrollPosition(anchor, element);
        const rect = eitherRect(this._dom.offset(anchor), offset$$1);
        const stackScale = 2 * scale;
        const stackScroll = this._dom.stackingElementScroll(element);
        if (scale !== 1 && stackScroll) {
            stackScroll.x /= stackScale;
            stackScroll.y /= stackScale;
        }
        const stackOffset = this._dom.stackingElementOffset(element);
        if (scale !== 1 && stackOffset) {
            stackOffset.left /= stackScale;
            stackOffset.top /= stackScale;
        }
        return this._dom.removeScroll(this._dom.addScroll(removeStackingOffset(scaleRect(rect, scale), stackOffset), stackScroll), scrollPos);
    }
    elementScrollPosition(anchor, element) {
        return anchor ? { x: 0, y: 0 } : this._dom.scrollPosition(element);
    }
    relativeRect(anchor, element, offset$$1, scale) {
        const rect = eitherRect(this._dom.position(anchor, element, scale), offset$$1);
        return scaleRect(rect, scale);
    }
}
AlignService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
AlignService.ctorParameters = () => [
    { type: DOMService },
    { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SCALE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];

/**
 * @hidden
 */
class PositionService {
    constructor(_dom, scale = 1) {
        this._dom = _dom;
        this.scale = scale;
    }
    positionElement(settings) {
        const { anchor, currentLocation, element, anchorAlign, elementAlign, collisions, margin } = settings;
        const dom = this._dom;
        const scale = this.scale || 1;
        const elementOffset = dom.offsetAtPoint(element, currentLocation);
        const elementRect = scaleRect(elementOffset, scale);
        const anchorOffset = scaleRect(dom.offset(anchor), scale);
        const anchorRect = eitherRect(anchorOffset, currentLocation);
        const viewPort = settings.viewPort || dom.windowViewPort(element);
        viewPort.width = viewPort.width / scale;
        viewPort.height = viewPort.height / scale;
        const result = dom.restrictToView({
            anchorAlign,
            anchorRect,
            collisions,
            elementAlign,
            elementRect,
            margin,
            viewPort
        });
        const offset$$1 = dom.addOffset(currentLocation, result.offset);
        return {
            flip: result.flip,
            flipped: result.flipped,
            offset: offset$$1
        };
    }
}
PositionService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
PositionService.ctorParameters = () => [
    { type: DOMService },
    { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SCALE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];

/**
 * @hidden
 */
class ResizeService {
    constructor(_dom, _zone) {
        this._dom = _dom;
        this._zone = _zone;
    }
    subscribe(callback) {
        if (!Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            return;
        }
        this._zone.runOutsideAngular(() => {
            this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._dom.getWindow(), "resize")
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(FRAME_DURATION))
                .subscribe(() => callback());
        });
    }
    unsubscribe() {
        if (!this.subscription) {
            return;
        }
        this.subscription.unsubscribe();
    }
    isUnsubscribed() {
        return this.subscription && this.subscription.closed;
    }
}
ResizeService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
ResizeService.ctorParameters = () => [
    { type: DOMService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];

/**
 * @hidden
 */
const THRESHOLD_DIFF = 1;
/**
 * @hidden
 */
class ScrollableService {
    constructor(_dom, _zone) {
        this._dom = _dom;
        this._zone = _zone;
    }
    forElement(element) {
        this.unsubscribe();
        this.element = element;
        return this;
    }
    subscribe(callback) {
        if (!callback || !Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])() || !this.element) {
            return;
        }
        const nativeElement = this._dom.nativeElement(this.element);
        const parents$$1 = this._dom.scrollableParents(this.element);
        this._zone.runOutsideAngular(() => {
            const observables = parents$$1.map(p => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(p, "scroll").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(FRAME_DURATION)));
            const subscriber = (e) => {
                const target = e.target;
                const isParent = parents$$1.filter(p => p === target).length > 0;
                const isDocument = target === document;
                const isWindow = target === window;
                if (isParent || isDocument || isWindow) {
                    callback(this.isVisible(nativeElement, target));
                }
            };
            this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(...observables).subscribe(subscriber);
        });
    }
    unsubscribe() {
        if (!this.subscription) {
            return;
        }
        this.subscription.unsubscribe();
    }
    isVisible(elem, container) {
        const elemRect = this._dom.boundingOffset(elem);
        const containerRect = this._dom.boundingOffset(container);
        if (THRESHOLD_DIFF < (containerRect.top - elemRect.bottom)) {
            return false;
        }
        if (THRESHOLD_DIFF < (elemRect.top - containerRect.bottom)) {
            return false;
        }
        if (THRESHOLD_DIFF < (elemRect.left - containerRect.right)) {
            return false;
        }
        if (THRESHOLD_DIFF < (containerRect.left - elemRect.right)) {
            return false;
        }
        return true;
    }
}
ScrollableService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
ScrollableService.ctorParameters = () => [
    { type: DOMService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];

const LEFT = 'left';
const RIGHT = 'right';
const DOWN = 'down';
const UP = 'up';
const DEFAULT_TYPE = 'slide';
const DEFAULT_DURATION = 100;
const animationTypes = {};
/* tslint:disable:object-literal-sort-keys */
animationTypes.expand = (direction) => {
    const scale = direction === UP || direction === DOWN ? 'scaleY' : 'scaleX';
    const startScale = 0;
    const endScale = 1;
    let origin;
    if (direction === DOWN) {
        origin = 'top';
    }
    else if (direction === LEFT) {
        origin = RIGHT;
    }
    else if (direction === RIGHT) {
        origin = LEFT;
    }
    else {
        origin = 'bottom';
    }
    return {
        start: { transform: `${scale}(${startScale})`, transformOrigin: origin },
        end: { transform: `${scale}(${endScale})` }
    };
};
animationTypes.slide = (direction) => {
    const translate = direction === LEFT || direction === RIGHT ? 'translateX' : 'translateY';
    const start = direction === RIGHT || direction === DOWN ? -100 : 100;
    const end = 0;
    return {
        start: { transform: `${translate}(${start}%)` },
        end: { transform: `${translate}(${end}%)` }
    };
};
animationTypes.fade = () => {
    return {
        start: { opacity: 0 },
        end: { opacity: 1 }
    };
};
animationTypes.zoom = () => {
    const start = 0;
    const end = 1;
    return {
        start: { transform: `scale(${start})` },
        end: { transform: `scale(${end})` }
    };
};
/**
 * @hidden
 */
class AnimationService {
    constructor(animationBuilder) {
        this.animationBuilder = animationBuilder;
        this.start = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.end = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    play(element, options, flip) {
        if (!this.flip || this.flip.horizontal !== flip.horizontal ||
            this.flip.vertical !== flip.vertical) {
            this.flip = flip;
            const type = options.type || DEFAULT_TYPE;
            const statesFn = animationTypes[type];
            if (statesFn) {
                const direction = this.getDirection(flip, options);
                const states = statesFn(direction);
                this.playStates(element, states, options);
            }
            else if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
                throw new Error(`Unsupported animation type: "${type}". The supported types are slide, expand, fade and zoom.`);
            }
        }
    }
    ngOnDestroy() {
        this.stopPlayer();
    }
    playStates(element, states, options) {
        this.stopPlayer();
        const duration = options.duration || DEFAULT_DURATION;
        const factory = this.animationBuilder.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])(states.start),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(`${duration}ms ease-in`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])(states.end))
        ]);
        const player = this.player = factory.create(element);
        player.onDone(() => {
            this.end.emit();
            this.stopPlayer();
        });
        this.start.emit();
        player.play();
    }
    getDirection(flip, options) {
        let direction = options.direction || DOWN;
        if (flip.horizontal) {
            if (direction === LEFT) {
                direction = RIGHT;
            }
            else if (direction === RIGHT) {
                direction = LEFT;
            }
        }
        if (flip.vertical) {
            if (direction === DOWN) {
                direction = UP;
            }
            else if (direction === UP) {
                direction = DOWN;
            }
        }
        return direction;
    }
    stopPlayer() {
        if (this.player) {
            this.player.destroy();
            this.player = null;
        }
    }
}
AnimationService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
AnimationService.ctorParameters = () => [
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_5__["AnimationBuilder"] }
];

const DEFAULT_OFFSET = { left: -10000, top: 0 };
const ANIMATION_CONTAINER = 'k-animation-container';
const ANIMATION_CONTAINER_FIXED = 'k-animation-container-fixed';
/**
 * Represents the [Kendo UI Popup component for Angular]({% slug overview_popup %}).
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * template: `
 *  <button #anchor (click)="show=!show">Toggle</button>
 *  <kendo-popup *ngIf="show" [anchor]="anchor">
 *      <strong>Popup content!</strong>
 *  </kendo-popup>
 * `
 * })
 * class AppComponent {
 *   public show: boolean = false;
 * }
 * ```
 */
class PopupComponent {
    constructor(container, _alignService, domService, _positionService, _resizeService, _scrollableService, animationService, _renderer, _zone) {
        this.container = container;
        this._alignService = _alignService;
        this.domService = domService;
        this._positionService = _positionService;
        this._resizeService = _resizeService;
        this._scrollableService = _scrollableService;
        this.animationService = animationService;
        this._renderer = _renderer;
        this._zone = _zone;
        /**
         * Controls the Popup animation. By default, the opening and closing animations
         * are enabled ([see example]({% slug animations_popup %})).
         */
        this.animate = true;
        /**
         * Specifies the anchor pivot point
         * ([see example]({% slug alignmentpositioning_popup %}#toc-positioning)).
         */
        this.anchorAlign = { horizontal: 'left', vertical: 'bottom' };
        /**
         * Configures the collision behavior of the Popup
         * ([see example]({% slug viewportboundarydetection_popup %})).
         */
        this.collision = { horizontal: 'fit', vertical: 'flip' };
        /**
         * Specifies the pivot point of the Popup
         * ([see example]({% slug alignmentpositioning_popup %}#toc-positioning)).
         */
        this.popupAlign = { horizontal: 'left', vertical: 'top' };
        /**
         * Controls whether the component will copy the `anchor` font styles.
         */
        this.copyAnchorStyles = false;
        /**
         * Specifies the position mode of the component. By default, the Popup uses fixed positioning.
         * To make the Popup acquire absolute positioning, set this option to `absolute`.
         *
         * > If you need to support mobile browsers with the zoom option,
         * use the `absolute` positioning of the Popup.
         *
         * @example
         * ```html
         * <style>
         *  .parent-content {
         *     position: relative;
         *     width: 200px;
         *     height: 200px;
         *     overflow: auto;
         *     margin: 200px auto;
         *     border: 1px solid red;
         *  }
         *  .content {
         *     position: relative;
         *     width: 100px;
         *     height: 100px;
         *     overflow: auto;
         *     margin: 300px;
         *     border: 1px solid blue;
         *  }
         *  .anchor {
         *     position: absolute;
         *     top: 200px;
         *     left: 200px;
         *  }
         * </style>
         * ```
         * ```ts
         * _@Component({
         * selector: 'my-app',
         * template: `
         *   <div class="example-config">
         *      Position mode:
         *      <label><input type="radio" value="fixed" [(ngModel)]="mode" /> Fixed</label>
         *      <label><input type="radio" value="absolute" [(ngModel)]="mode" /> Absolute</label>
         *   </div>
         *   <div class="example-config">
         *       Append to
         *       <label>
         *           <input type="radio" name="place" [value]="1" [(ngModel)]="checked" />
         *           Root component
         *       </label>
         *       <label>
         *           <input type="radio" name="place" [value]="2" [(ngModel)]="checked" />
         *           <span style="color: red">Red Container</span>
         *       </label>
         *       <label>
         *           <input type="radio" name="place" [value]="3" [(ngModel)]="checked" />
         *           <span style="color: blue">Blue Container</span>
         *       </label>
         *   </div>
         *   <div class="example">
         *     <div class="parent-content" [scrollLeft]="250" [scrollTop]="230">
         *         <div class="content" [scrollLeft]="170" [scrollTop]="165">
         *           <button #anchor class="anchor" (click)="show = !show">Toggle</button>
         *           <kendo-popup [positionMode]="mode" [anchor]="anchor" (anchorViewportLeave)="show=false" *ngIf="show && checked === 3">
         *             <ul>
         *                 <li>Item1</li>
         *                 <li>Item2</li>
         *                 <li>Item3</li>
         *             </ul>
         *           </kendo-popup>
         *           <span style="position: absolute; top: 400px; left: 400px">Bottom/Right</span>
         *         </div>
         *         <kendo-popup [positionMode]="mode" [anchor]="anchor" (anchorViewportLeave)="show=false" *ngIf="show && checked === 2">
         *           <ul>
         *               <li>Item1</li>
         *               <li>Item2</li>
         *               <li>Item3</li>
         *           </ul>
         *         </kendo-popup>
         *         <span style="position: absolute; top: 600px; left: 600px">Bottom/Right</span>
         *     </div>
         *     <kendo-popup [positionMode]="mode" [anchor]="anchor" (anchorViewportLeave)="show=false" *ngIf="show && checked === 1">
         *       <ul>
         *           <li>Item1</li>
         *           <li>Item2</li>
         *           <li>Item3</li>
         *       </ul>
         *     </kendo-popup>
         *   </div>
         * `
         * })
         * class AppComponent {
         *   public checked: number = 3;
         *   public mode: string = 'absolute';
         *   public show: boolean = true;
         * }
         * ```
         */
        this.positionMode = 'fixed';
        /**
         * Specifies the absolute position of the element
         * ([see example]({% slug alignmentpositioning_popup %}#toc-aligning-to-absolute-points)).
         * The Popup opens next to that point. The Popup pivot point is defined by the `popupAlign` configuration option.
         * The boundary detection is applied by using the window viewport.
         */
        this.offset = DEFAULT_OFFSET;
        /**
         * Fires when the anchor is scrolled outside the screen boundaries.
         * ([see example]({% slug closing_popup %}#toc-after-leaving-the-viewport)).
         */
        this.anchorViewportLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires after the component is closed.
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires after the component is opened and the opening animation ends.
         */
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires after the component is opened and the Popup is positioned.
         */
        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resolvedPromise = Promise.resolve(null);
        this.initialCheck = true;
        this._renderer.addClass(container.nativeElement, ANIMATION_CONTAINER);
        this.updateFixedClass();
    }
    ngOnInit() {
        this.reposition = this.reposition.bind(this);
        this._resizeService.subscribe(this.reposition);
        this.animationSubscriptions = this.animationService.start.subscribe(this.onAnimationStart.bind(this));
        this.animationSubscriptions.add(this.animationService.end.subscribe(this.onAnimationEnd.bind(this)));
        this._scrollableService.forElement(this.anchor || this.container).subscribe(this.onScroll.bind(this));
        this.currentOffset = DEFAULT_OFFSET;
        this.setZIndex();
        this.copyFontStyles();
        this.updateFixedClass();
    }
    ngOnChanges(changes) {
        if (changes.copyAnchorStyles) {
            this.copyFontStyles();
        }
        if (changes.positionMode) {
            this.updateFixedClass();
        }
    }
    ngAfterViewInit() {
        this.reposition();
        if (!this.animate) {
            this.resolvedPromise.then(() => {
                this.onAnimationEnd();
            });
        }
    }
    ngAfterViewChecked() {
        if (this.initialCheck) {
            this.initialCheck = false;
            return;
        }
        this._zone.runOutsideAngular(() => {
            // workarounds https://github.com/angular/angular/issues/19094
            // uses promise because it is executed synchronously after the content is updated
            // does not use onStable in case the current zone is not the angular one.
            this.unsubscribeReposition();
            this.repositionSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.resolvedPromise)
                .subscribe(this.reposition);
        });
    }
    ngOnDestroy() {
        this.anchorViewportLeave.complete();
        this.positionChange.complete();
        this.close.emit();
        this.close.complete();
        this._resizeService.unsubscribe();
        this._scrollableService.unsubscribe();
        this.animationSubscriptions.unsubscribe();
        this.unsubscribeReposition();
    }
    /**
     * @hidden
     */
    onResize() {
        this.reposition();
    }
    onAnimationStart() {
        this._renderer.removeClass(this.container.nativeElement, 'k-animation-container-shown');
    }
    onAnimationEnd() {
        this._renderer.addClass(this.container.nativeElement, 'k-animation-container-shown');
        this.open.emit();
        this.open.complete();
    }
    get currentOffset() {
        return this._currentOffset;
    }
    set currentOffset(offset$$1) {
        this.setContainerStyle('left', `${offset$$1.left}px`);
        this.setContainerStyle('top', `${offset$$1.top}px`);
        this._currentOffset = offset$$1;
    }
    setZIndex() {
        if (this.anchor) {
            this.setContainerStyle('z-index', String(this.domService.zIndex(this.anchor, this.container)));
        }
    }
    reposition() {
        if (!Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["isDocumentAvailable"])()) {
            return;
        }
        const { flip, offset: offset$$1 } = this.position();
        if (!this.currentOffset || isDifferentOffset(this.currentOffset, offset$$1)) {
            this.currentOffset = offset$$1;
            if (Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["hasObservers"])(this.positionChange)) {
                this._zone.run(() => this.positionChange.emit({ offset: offset$$1, flip }));
            }
        }
        if (this.animate) {
            this.animationService.play(this.contentContainer.nativeElement, this.animate, flip);
        }
        this.resizeSensor.acceptSize();
    }
    position() {
        const alignedOffset = this._alignService.alignElement({
            anchor: this.anchor,
            anchorAlign: this.anchorAlign,
            element: this.container,
            elementAlign: this.popupAlign,
            margin: this.margin,
            offset: this.offset,
            positionMode: this.positionMode
        });
        return this._positionService.positionElement({
            anchor: this.anchor,
            anchorAlign: this.anchorAlign,
            collisions: this.collision,
            currentLocation: alignedOffset,
            element: this.container,
            elementAlign: this.popupAlign,
            margin: this.margin
        });
    }
    onScroll(isInViewPort) {
        const hasLeaveObservers = Object(_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["hasObservers"])(this.anchorViewportLeave);
        if (isInViewPort || !hasLeaveObservers) {
            this.reposition();
        }
        else if (hasLeaveObservers) {
            this._zone.run(() => {
                this.anchorViewportLeave.emit();
            });
        }
    }
    copyFontStyles() {
        if (!this.anchor || !this.copyAnchorStyles) {
            return;
        }
        this.domService.getFontStyles(this.anchor)
            .forEach(s => this.setContainerStyle(s.key, s.value));
    }
    updateFixedClass() {
        const action = this.positionMode === 'fixed' ? 'addClass' : 'removeClass';
        this._renderer[action](this.container.nativeElement, ANIMATION_CONTAINER_FIXED);
    }
    setContainerStyle(name, value) {
        this._renderer.setStyle(this.container.nativeElement, name, value);
    }
    unsubscribeReposition() {
        if (this.repositionSubscription) {
            this.repositionSubscription.unsubscribe();
        }
    }
}
PopupComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                exportAs: 'kendo-popup',
                providers: [AlignService, AnimationService, DOMService, PositionService, ResizeService, ScrollableService],
                selector: 'kendo-popup',
                template: `
        <div class="k-popup" [ngClass]="popupClass" #container>
            <ng-content></ng-content>
            <ng-template [ngTemplateOutlet]="content" [ngIf]="content"></ng-template>
            <kendo-resize-sensor [rateLimit]="100" (resize)="onResize()">
            </kendo-resize-sensor>
        </div>
     `
            },] },
];
/** @nocollapse */
PopupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: AlignService },
    { type: DOMService },
    { type: PositionService },
    { type: ResizeService },
    { type: ScrollableService },
    { type: AnimationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
PopupComponent.propDecorators = {
    animate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    anchor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    anchorAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    collision: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    popupAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    copyAnchorStyles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    popupClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    positionMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    margin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    anchorViewportLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    positionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    contentContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container',] }],
    resizeSensor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["ResizeSensorComponent"],] }]
};

const removeElement = (element) => {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
};
/**
 * Used to inject the Popup container. If not provided, the first root component of
 * the application is used.
 *
 * > The `POPUP_CONTAINER` can be used only with the [`PopupService`]({% slug service_popup %}) class.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Popup module
 * import { PopupModule, POPUP_CONTAINER } from '@progress/kendo-angular-popup';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { ElementRef, NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, PopupModule], // import Popup module
 *     bootstrap:    [AppComponent],
 *     providers: [{
 *       provide: POPUP_CONTAINER,
 *       useFactory: () => {
 *          //return the container ElementRef, where the popup will be injected
 *          return { nativeElement: document.body } as ElementRef;
 *       }
 *     }]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 * ```
 */
const POPUP_CONTAINER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Popup Container');
/**
 * A service for opening Popup components dynamically
 * ([see example]({% slug service_popup %})).
 *
 * @export
 * @class PopupService
 */
class PopupService {
    constructor(applicationRef, componentFactoryResolver, injector, container) {
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.container = container;
    }
    /**
     * Gets the root view container into which the component will be injected.
     *
     * @returns {ComponentRef<any>}
     */
    get rootViewContainer() {
        // https://github.com/angular/angular/blob/4.0.x/packages/core/src/application_ref.ts#L571
        const rootComponents = this.applicationRef.components || [];
        if (rootComponents[0]) {
            return rootComponents[0];
        }
        throw new Error(`
            View Container not found! Inject the POPUP_CONTAINER or define a specific ViewContainerRef via the appendTo option.
            See http://www.telerik.com/kendo-angular-ui/components/popup/api/POPUP_CONTAINER/ for more details.
        `);
    }
    /**
     * Sets or gets the HTML element of the root component container.
     *
     * @returns {HTMLElement}
     */
    get rootViewContainerNode() {
        return this.container ? this.container.nativeElement : this.getComponentRootNode(this.rootViewContainer);
    }
    /**
     * Opens a Popup component. Created Popups are mounted
     * in the DOM directly in the root application component.
     *
     * @param {PopupSettings} options - The options which define the Popup.
     * @returns {ComponentRef<PopupComponent>} - A reference to the Popup object.
     *
     * @example
     *
     * ```ts-no-run
     * _@Component({
     *   selector: 'my-app',
     *   template: `
     *     <ng-template #template>
     *      Popup content
     *     </ng-template>
     *     <button #anchor kendoButton (click)="open(anchor, template)">Open</button>
     *   `
     * })
     * export class AppComponent {
     *     public popupRef: PopupRef;
     *
     *     constructor( private popupService: PopupService ) {}
     *
     *     public open(anchor: ElementRef, template: TemplateRef<any>): void {
     *         if (this.popupRef) {
     *              this.popupRef.close();
     *              this.popupRef = null;
     *              return;
     *         }
     *
     *         this.popupRef = this.popupService.open({
     *           anchor: anchor,
     *           content: template
     *         });
     *     }
     * }
     * ```
     */
    open(options = {}) {
        const { component, nodes } = this.contentFrom(options.content);
        const popupComponentRef = this.appendPopup(nodes, options.appendTo);
        const popupInstance = popupComponentRef.instance;
        this.projectComponentInputs(popupComponentRef, options);
        popupComponentRef.changeDetectorRef.detectChanges();
        if (component) {
            component.changeDetectorRef.detectChanges();
        }
        const popupElement = this.getComponentRootNode(popupComponentRef);
        return {
            close: () => {
                if (component) {
                    component.destroy();
                }
                popupComponentRef.destroy();
                // Angular will not remove the element unless the change detection is triggered
                removeElement(popupElement);
            },
            content: component,
            popup: popupComponentRef,
            popupAnchorViewportLeave: popupInstance.anchorViewportLeave,
            popupClose: popupInstance.close,
            popupElement: popupElement,
            popupOpen: popupInstance.open,
            popupPositionChange: popupInstance.positionChange
        };
    }
    appendPopup(nodes, container) {
        const popupComponentRef = this.createComponent(PopupComponent, nodes, container);
        if (!container) {
            this.rootViewContainerNode.appendChild(this.getComponentRootNode(popupComponentRef));
        }
        return popupComponentRef;
    }
    /**
     * Gets the HTML element for a component reference.
     *
     * @param {ComponentRef<any>} componentRef
     * @returns {HTMLElement}
     */
    getComponentRootNode(componentRef) {
        return componentRef.location.nativeElement;
    }
    /**
     * Gets the `ComponentFactory` instance by its type.
     *
     * @param {*} componentClass
     * @param {*} nodes
     * @returns {ComponentRef<any>}
     */
    getComponentFactory(componentClass) {
        return this.componentFactoryResolver.resolveComponentFactory(componentClass);
    }
    /**
     * Creates a component reference from a `Component` type class.
     *
     * @param {*} componentClass
     * @param {*} nodes
     * @returns {ComponentRef<any>}
     */
    createComponent(componentClass, nodes, container) {
        const factory = this.getComponentFactory(componentClass);
        if (container) {
            return container.createComponent(factory, undefined, this.injector, nodes);
        }
        else {
            const component = factory.create(this.injector, nodes);
            this.applicationRef.attachView(component.hostView);
            return component;
        }
    }
    /**
     * Projects the inputs on the component.
     *
     * @param {ComponentRef<any>} component
     * @param {*} options
     * @returns {ComponentRef<any>}
     */
    projectComponentInputs(component, options) {
        Object.getOwnPropertyNames(options)
            .filter(prop => prop !== 'content' || options.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
            .map((prop) => {
            component.instance[prop] = options[prop];
        });
        return component;
    }
    /**
     * Gets the component and the nodes to append from the `content` option.
     *
     * @param {*} content
     * @returns {any}
     */
    contentFrom(content) {
        if (!content || content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            return { component: null, nodes: [[]] };
        }
        const component = this.createComponent(content);
        const nodes = component ? [component.location.nativeElement] : [];
        return {
            component: component,
            nodes: [
                nodes // <ng-content>
            ]
        };
    }
}
PopupService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
PopupService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [POPUP_CONTAINER,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];

const POPUP_DIRECTIVES = [PopupComponent];
/**
 * Represents the [NgModule]({{ site.data.urls.angular['ngmoduleapi'] }})
 * definition for the Popup component.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Popup module
 * import { PopupModule } from '@progress/kendo-angular-popup';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, PopupModule], // import Popup module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
class PopupModule {
}
PopupModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [POPUP_DIRECTIVES],
                entryComponents: [POPUP_DIRECTIVES],
                exports: [POPUP_DIRECTIVES],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _progress_kendo_angular_common__WEBPACK_IMPORTED_MODULE_2__["ResizeSensorModule"]],
                providers: [PopupService]
            },] },
];

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/add-scroll.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/add-scroll.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addScroll; });
function addScroll(rect, scroll) {
    return {
        top: rect.top + scroll.y,
        left: rect.left + scroll.x,
        height: rect.height,
        width: rect.width
    };
}


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/align-point.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/align-point.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "bottom": "bottom",
    "center": "center",
    "middle": "middle",
    "left": "left",
    "right": "right",
    "top": "top"
});


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/align.js":
/*!************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/align.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _align_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./align-point */ "./node_modules/@progress/kendo-popup-common/dist/es2015/align-point.js");


const align = (options) => {
    const { anchorRect, anchorAlign, elementRect, elementAlign, margin = {} } = options;
    const anchorHorizontal = anchorAlign.horizontal;
    const anchorVertical = anchorAlign.vertical;
    const elementHorizontal = elementAlign.horizontal;
    const elementVertical = elementAlign.vertical;

    let horizontalMargin = margin.horizontal || 0;
    let verticalMargin = margin.vertical || 0;

    let top = anchorRect.top;
    let left = anchorRect.left;

    if (anchorVertical === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].bottom) {
        top += anchorRect.height;
    }

    if (anchorVertical === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].center || anchorVertical === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].middle) {
        top += Math.round(anchorRect.height / 2);
    }

    if (elementVertical === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].bottom) {
        top -= elementRect.height;
        verticalMargin *= -1;
    }

    if (elementVertical === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].center || elementVertical === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].middle) {
        top -= Math.round(elementRect.height / 2);
        verticalMargin *= -1;
    }

    if (anchorHorizontal === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].right) {
        left += anchorRect.width;
    }

    if (anchorHorizontal === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].center || anchorHorizontal === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].middle) {
        left += Math.round(anchorRect.width / 2);
    }

    if (elementHorizontal === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].right) {
        left -= elementRect.width;
        horizontalMargin *= -1;
    }

    if (elementHorizontal === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].center || elementHorizontal === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].middle) {
        left -= Math.round(elementRect.width / 2);
        horizontalMargin *= -1;
    }

    return {
        top: top + verticalMargin,
        left: left + horizontalMargin
    };
};

/* harmony default export */ __webpack_exports__["default"] = (align);


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/apply-location-offset.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/apply-location-offset.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyLocationOffset; });
function applyLocationOffset(rect, location, isOffsetBody) {
    let { top, left } = rect;

    if (isOffsetBody) {
        left = 0;
        top = 0;
    }

    return {
        top: top + location.top,
        left: left + location.left,
        height: rect.height,
        width: rect.width
    };
}


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/bounding-offset.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/bounding-offset.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _window_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window-viewport */ "./node_modules/@progress/kendo-popup-common/dist/es2015/window-viewport.js");


const boundingOffset = (element) => {
    if (!element.getBoundingClientRect) {
        const viewport = Object(_window_viewport__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
        return {
            bottom: viewport.height,
            left: 0,
            right: viewport.width,
            top: 0
        };
    }

    const { bottom, left, right, top } = element.getBoundingClientRect();

    return {
        bottom,
        left,
        right,
        top
    };
};

/* harmony default export */ __webpack_exports__["default"] = (boundingOffset);


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/collision.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/collision.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "fit": "fit",
    "flip": "flip"
});


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/document.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/document.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _owner_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner-document */ "./node_modules/@progress/kendo-popup-common/dist/es2015/owner-document.js");


const getDocument = (element) => Object(_owner_document__WEBPACK_IMPORTED_MODULE_0__["default"])(element).documentElement;

/* harmony default export */ __webpack_exports__["default"] = (getDocument);


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/element-scroll-position.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/element-scroll-position.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-position */ "./node_modules/@progress/kendo-popup-common/dist/es2015/scroll-position.js");


/* harmony default export */ __webpack_exports__["default"] = ((element) => {
    if (element === (element.ownerDocument || {}).body) {
        return Object(_scroll_position__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
    }

    return {
        x: element.scrollLeft,
        y: element.scrollTop
    };
});


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/is-body-offset.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/is-body-offset.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offset_parent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offset-parent */ "./node_modules/@progress/kendo-popup-common/dist/es2015/offset-parent.js");


const isBodyOffset = (element) => (Object(_offset_parent__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === element.ownerDocument.body);

/* harmony default export */ __webpack_exports__["default"] = (isBodyOffset);


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/main.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/main.js ***!
  \***********************************************************************/
/*! exports provided: align, addScroll, applyLocationOffset, boundingOffset, isBodyOffset, offsetParent, offset, parents, parentScrollPosition, position, positionWithScroll, removeScroll, restrictToView, scrollPosition, siblingContainer, siblings, getDocumentElement, getWindow, getWindowViewPort, AlignPoint, Collision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _align__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./align */ "./node_modules/@progress/kendo-popup-common/dist/es2015/align.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "align", function() { return _align__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _add_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-scroll */ "./node_modules/@progress/kendo-popup-common/dist/es2015/add-scroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addScroll", function() { return _add_scroll__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _apply_location_offset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apply-location-offset */ "./node_modules/@progress/kendo-popup-common/dist/es2015/apply-location-offset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyLocationOffset", function() { return _apply_location_offset__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _bounding_offset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bounding-offset */ "./node_modules/@progress/kendo-popup-common/dist/es2015/bounding-offset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boundingOffset", function() { return _bounding_offset__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _is_body_offset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-body-offset */ "./node_modules/@progress/kendo-popup-common/dist/es2015/is-body-offset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBodyOffset", function() { return _is_body_offset__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _offset_parent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offset-parent */ "./node_modules/@progress/kendo-popup-common/dist/es2015/offset-parent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offsetParent", function() { return _offset_parent__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset */ "./node_modules/@progress/kendo-popup-common/dist/es2015/offset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return _offset__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _parents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parents */ "./node_modules/@progress/kendo-popup-common/dist/es2015/parents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return _parents__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _parent_scroll_position__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parent-scroll-position */ "./node_modules/@progress/kendo-popup-common/dist/es2015/parent-scroll-position.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parentScrollPosition", function() { return _parent_scroll_position__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./position */ "./node_modules/@progress/kendo-popup-common/dist/es2015/position.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "position", function() { return _position__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _position_with_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./position-with-scroll */ "./node_modules/@progress/kendo-popup-common/dist/es2015/position-with-scroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionWithScroll", function() { return _position_with_scroll__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _remove_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./remove-scroll */ "./node_modules/@progress/kendo-popup-common/dist/es2015/remove-scroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeScroll", function() { return _remove_scroll__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _restrict_to_view__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./restrict-to-view */ "./node_modules/@progress/kendo-popup-common/dist/es2015/restrict-to-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restrictToView", function() { return _restrict_to_view__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _scroll_position__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scroll-position */ "./node_modules/@progress/kendo-popup-common/dist/es2015/scroll-position.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollPosition", function() { return _scroll_position__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _sibling_container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sibling-container */ "./node_modules/@progress/kendo-popup-common/dist/es2015/sibling-container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "siblingContainer", function() { return _sibling_container__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _siblings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./siblings */ "./node_modules/@progress/kendo-popup-common/dist/es2015/siblings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return _siblings__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./document */ "./node_modules/@progress/kendo-popup-common/dist/es2015/document.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocumentElement", function() { return _document__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./window */ "./node_modules/@progress/kendo-popup-common/dist/es2015/window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return _window__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _window_viewport__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./window-viewport */ "./node_modules/@progress/kendo-popup-common/dist/es2015/window-viewport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindowViewPort", function() { return _window_viewport__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _align_point__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./align-point */ "./node_modules/@progress/kendo-popup-common/dist/es2015/align-point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlignPoint", function() { return _align_point__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./collision */ "./node_modules/@progress/kendo-popup-common/dist/es2015/collision.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collision", function() { return _collision__WEBPACK_IMPORTED_MODULE_20__["default"]; });


























/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/offset-parent-scroll-position.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/offset-parent-scroll-position.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _element_scroll_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-scroll-position */ "./node_modules/@progress/kendo-popup-common/dist/es2015/element-scroll-position.js");
/* harmony import */ var _parent_scroll_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent-scroll-position */ "./node_modules/@progress/kendo-popup-common/dist/es2015/parent-scroll-position.js");



/* harmony default export */ __webpack_exports__["default"] = ((offsetParentElement, element) => ( // eslint-disable-line no-arrow-condition
    offsetParentElement ? Object(_element_scroll_position__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParentElement) : Object(_parent_scroll_position__WEBPACK_IMPORTED_MODULE_1__["default"])(element)
));


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/offset-parent.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/offset-parent.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document */ "./node_modules/@progress/kendo-popup-common/dist/es2015/document.js");


const offsetParent = (element) => {
    let offsetParent = element.offsetParent;

    while (offsetParent && offsetParent.style.position === "static") {
        offsetParent = offsetParent.offsetParent;
    }

    return offsetParent || Object(_document__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
};

/* harmony default export */ __webpack_exports__["default"] = (offsetParent);


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/offset.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/offset.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const rectOfHiddenElement = (element) => {
    const { display, left, position } = element.style;

    element.style.display = '';
    element.style.left = '-10000px';
    element.style.position = 'absolute';

    const rect = element.getBoundingClientRect();

    element.style.display = display;
    element.style.left = left;
    element.style.position = position;

    return rect;
};

const offset = (element) => {
    let rect = element.getBoundingClientRect();
    let { left, top } = rect;

    if (!rect.height && !rect.width) {
        rect = rectOfHiddenElement(element);
    }

    return {
        top: top,
        left: left,
        height: rect.height,
        width: rect.width
    };
};

/* harmony default export */ __webpack_exports__["default"] = (offset);


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/owner-document.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/owner-document.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ownerDocument; });
function ownerDocument(element) {
    return element.ownerDocument || element.document || element;
}


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/parent-scroll-position.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/parent-scroll-position.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parentScrollPosition; });
/* harmony import */ var _offset_parent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offset-parent */ "./node_modules/@progress/kendo-popup-common/dist/es2015/offset-parent.js");
/* harmony import */ var _element_scroll_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-scroll-position */ "./node_modules/@progress/kendo-popup-common/dist/es2015/element-scroll-position.js");



function parentScrollPosition(element) {
    const parent = Object(_offset_parent__WEBPACK_IMPORTED_MODULE_0__["default"])(element);

    return parent ? Object(_element_scroll_position__WEBPACK_IMPORTED_MODULE_1__["default"])(parent) : { x: 0, y: 0 };
}


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/parents.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/parents.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((element, until) => {
    const result = [];
    let next = element.parentNode;

    while (next) {
        result.push(next);

        if (next === until) { break; }

        next = next.parentNode;
    }

    return result;
});


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/position-with-scroll.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/position-with-scroll.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offset_parent_scroll_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offset-parent-scroll-position */ "./node_modules/@progress/kendo-popup-common/dist/es2015/offset-parent-scroll-position.js");
/* harmony import */ var _offset_parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offset-parent */ "./node_modules/@progress/kendo-popup-common/dist/es2015/offset-parent.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./position */ "./node_modules/@progress/kendo-popup-common/dist/es2015/position.js");




/* harmony default export */ __webpack_exports__["default"] = ((element, parent, scale = 1) => {
    const offsetParentElement = parent ? Object(_offset_parent__WEBPACK_IMPORTED_MODULE_1__["default"])(parent) : null;
    const { top, left, height, width } = Object(_position__WEBPACK_IMPORTED_MODULE_2__["default"])(element, offsetParentElement);
    const { x, y } = Object(_offset_parent_scroll_position__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParentElement, element);
    const ownerDocument = element.ownerDocument;
    const positionScale = offsetParentElement === ownerDocument.body || offsetParentElement === ownerDocument.documentElement ? 1 : scale;

    return {
        top: top + y * positionScale,
        left: left + x * positionScale,
        height: height,
        width: width
    };
});


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/position.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/position.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offset_parent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offset-parent */ "./node_modules/@progress/kendo-popup-common/dist/es2015/offset-parent.js");
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offset */ "./node_modules/@progress/kendo-popup-common/dist/es2015/offset.js");
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window */ "./node_modules/@progress/kendo-popup-common/dist/es2015/window.js");




const position = (element, parent) => {
    const win = Object(_window__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
    const elementStyles = win.getComputedStyle(element);
    const offset = Object(_offset__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
    const parentElement = parent || Object(_offset_parent__WEBPACK_IMPORTED_MODULE_0__["default"])(element);

    const ownerDocument = element.ownerDocument;
    const useRelative = parentElement !== ownerDocument.body && parentElement !== ownerDocument.documentElement;

    let parentOffset = { top: 0, left: 0 };

    if (elementStyles.position !== "fixed" && useRelative) {
        const parentStyles = win.getComputedStyle(parentElement);

        parentOffset = Object(_offset__WEBPACK_IMPORTED_MODULE_1__["default"])(parentElement);
        parentOffset.top += parseInt(parentStyles.borderTopWidth, 10);
        parentOffset.left += parseInt(parentStyles.borderLeftWidth, 10);
    }

    return {
        top: offset.top - parentOffset.top,
        left: offset.left - parentOffset.left,
        height: offset.height,
        width: offset.width
    };
};

/* harmony default export */ __webpack_exports__["default"] = (position);


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/remove-scroll.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/remove-scroll.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeScroll; });
function removeScroll(rect, scroll) {
    return {
        top: rect.top - scroll.y,
        left: rect.left - scroll.x,
        height: rect.height,
        width: rect.width
    };
}


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/restrict-to-view.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/restrict-to-view.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _align_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./align-point */ "./node_modules/@progress/kendo-popup-common/dist/es2015/align-point.js");
/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collision */ "./node_modules/@progress/kendo-popup-common/dist/es2015/collision.js");



const fit = function(position, size, viewPortSize) {
    let output = 0;

    if (position + size > viewPortSize) {
        output = viewPortSize - (position + size);
    }

    if (position < 0) {
        output = -position;
    }

    return output;
};

const flip = function({ offset, size, anchorSize, viewPortSize, anchorAlignPoint, elementAlignPoint, margin }) {
    let output = 0;

    const isPositionCentered = elementAlignPoint === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].center || elementAlignPoint === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].middle;
    const isOriginCentered = anchorAlignPoint === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].center || anchorAlignPoint === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].middle;
    const marginToAdd = 2 * margin; //2x to keep margin after flip

    if (elementAlignPoint !== anchorAlignPoint && !isPositionCentered && !isOriginCentered) {
        const isBeforeAnchor = anchorAlignPoint === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].top || anchorAlignPoint === _align_point__WEBPACK_IMPORTED_MODULE_0__["default"].left;
        if (offset < 0 && isBeforeAnchor) {
            output = size + anchorSize + marginToAdd;
            if (offset + output + size > viewPortSize) {
                output = 0; //skip flip
            }
        } else if (offset >= 0 && !isBeforeAnchor) {
            if (offset + size > viewPortSize) {
                output += -(anchorSize + size + marginToAdd);
            }

            if (offset + output < 0) {
                output = 0; //skip flip
            }
        }
    }

    return output;
};

const restrictToView = (options) => {
    const { anchorRect, anchorAlign, elementRect, elementAlign, collisions, viewPort, margin = {} } = options;
    const { top: elementTop, left: elementLeft, height: elementHeight, width: elementWidth } = elementRect;
    const { height: viewPortHeight, width: viewPortWidth } = viewPort;
    const horizontalMargin = margin.horizontal || 0;
    const verticalMargin = margin.vertical || 0;

    let left = 0;
    let top = 0;

    const isHorizontalFlip = collisions.horizontal === _collision__WEBPACK_IMPORTED_MODULE_1__["default"].flip;
    const isVerticalFlip = collisions.vertical === _collision__WEBPACK_IMPORTED_MODULE_1__["default"].flip;

    if (collisions.vertical === _collision__WEBPACK_IMPORTED_MODULE_1__["default"].fit) {
        top += fit(elementTop, elementHeight, viewPortHeight);
    }

    if (collisions.horizontal === _collision__WEBPACK_IMPORTED_MODULE_1__["default"].fit) {
        left += fit(elementLeft, elementWidth, viewPortWidth);
    }

    if (isVerticalFlip) {
        top += flip({
            margin: verticalMargin,
            offset: elementTop,
            size: elementHeight,
            anchorSize: anchorRect.height,
            viewPortSize: viewPortHeight,
            anchorAlignPoint: anchorAlign.vertical,
            elementAlignPoint: elementAlign.vertical
        });
    }

    if (isHorizontalFlip) {
        left += flip({
            margin: horizontalMargin,
            offset: elementLeft,
            size: elementWidth,
            anchorSize: anchorRect.width,
            viewPortSize: viewPortWidth,
            anchorAlignPoint: anchorAlign.horizontal,
            elementAlignPoint: elementAlign.horizontal
        });
    }
    const flippedHorizontal = isHorizontalFlip && left !== 0;
    const flippedVertical = isVerticalFlip && top !== 0;

    return {
        flipped: flippedHorizontal || flippedVertical,
        flip: {
            horizontal: flippedHorizontal,
            vertical: flippedVertical
        },
        offset: {
            left: left,
            top: top
        }
    };
};

/* harmony default export */ __webpack_exports__["default"] = (restrictToView);


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/scroll-position.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/scroll-position.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollPosition; });
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document */ "./node_modules/@progress/kendo-popup-common/dist/es2015/document.js");
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./window */ "./node_modules/@progress/kendo-popup-common/dist/es2015/window.js");



function scrollPosition(element) {
    const documentElement = Object(_document__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
    const win = Object(_window__WEBPACK_IMPORTED_MODULE_1__["default"])(element);

    return {
        x: win.pageXOffset || documentElement.scrollLeft || 0,
        y: win.pageYOffset || documentElement.scrollTop || 0
    };
}


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/scrollbar-width.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/scrollbar-width.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollbarWidth; });
let cachedWidth = 0;

function scrollbarWidth() {
    if (!cachedWidth && typeof document !== 'undefined') {
        const div = document.createElement("div");

        div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
        div.innerHTML = "&nbsp;";
        document.body.appendChild(div);

        cachedWidth = div.offsetWidth - div.scrollWidth;

        document.body.removeChild(div);
    }

    return cachedWidth;
}


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/sibling-container.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/sibling-container.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parents */ "./node_modules/@progress/kendo-popup-common/dist/es2015/parents.js");
/* harmony import */ var _siblings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./siblings */ "./node_modules/@progress/kendo-popup-common/dist/es2015/siblings.js");
/* eslint-disable no-loop-func */




/* harmony default export */ __webpack_exports__["default"] = ((anchor, container) => {
    const parentElements = Object(_parents__WEBPACK_IMPORTED_MODULE_0__["default"])(anchor);
    let containerElement = container;
    let siblingElements;
    let result;

    while (containerElement) {
        siblingElements = Object(_siblings__WEBPACK_IMPORTED_MODULE_1__["default"])(containerElement);

        result = parentElements.reduce(
            (list, p) => list.concat(siblingElements.filter(s => s === p)),
            []
        )[0];

        if (result) { break; }

        containerElement = containerElement.parentElement;
    }

    return result;
});



/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/siblings.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/siblings.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((element) => {
    const result = [];

    let sibling = element.parentNode.firstElementChild;

    while (sibling) {
        if (sibling !== element) {
            result.push(sibling);
        }

        sibling = sibling.nextElementSibling;
    }
    return result;
});


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/window-viewport.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/window-viewport.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return windowViewport; });
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window */ "./node_modules/@progress/kendo-popup-common/dist/es2015/window.js");
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document */ "./node_modules/@progress/kendo-popup-common/dist/es2015/document.js");
/* harmony import */ var _scrollbar_width__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollbar-width */ "./node_modules/@progress/kendo-popup-common/dist/es2015/scrollbar-width.js");




function windowViewport(element) {
    const win = Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
    const document = Object(_document__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
    const result = {
        height: win.innerHeight,
        width: win.innerWidth
    };

    if (document.scrollHeight - document.clientHeight > 0) {
        result.width -= Object(_scrollbar_width__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }

    return result;
}


/***/ }),

/***/ "./node_modules/@progress/kendo-popup-common/dist/es2015/window.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@progress/kendo-popup-common/dist/es2015/window.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _owner_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner-document */ "./node_modules/@progress/kendo-popup-common/dist/es2015/owner-document.js");


const getWindow = (element) => Object(_owner_document__WEBPACK_IMPORTED_MODULE_0__["default"])(element).defaultView;

/* harmony default export */ __webpack_exports__["default"] = (getWindow);


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/kendo-testing/kendo-testing.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/kendo-testing/kendo-testing.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{ title }}</p>\n<button kendoButton (click)=\"onButtonClick()\" [primary]=\"true\">My Kendo UI Button</button>\n");

/***/ }),

/***/ "./src/app/features/kendo-testing/kendo-testing-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/kendo-testing/kendo-testing-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: KendoTestingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KendoTestingRoutingModule", function() { return KendoTestingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _kendo_testing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kendo-testing.component */ "./src/app/features/kendo-testing/kendo-testing.component.ts");




const routes = [{ path: '', component: _kendo_testing_component__WEBPACK_IMPORTED_MODULE_3__["KendoTestingComponent"] }];
let KendoTestingRoutingModule = class KendoTestingRoutingModule {
};
KendoTestingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KendoTestingRoutingModule);



/***/ }),

/***/ "./src/app/features/kendo-testing/kendo-testing.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/features/kendo-testing/kendo-testing.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2tlbmRvLXRlc3Rpbmcva2VuZG8tdGVzdGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/features/kendo-testing/kendo-testing.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/kendo-testing/kendo-testing.component.ts ***!
  \*******************************************************************/
/*! exports provided: KendoTestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KendoTestingComponent", function() { return KendoTestingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KendoTestingComponent = class KendoTestingComponent {
    constructor() {
        this.title = 'Hello from the Kendo Testing Component!';
    }
    onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }
};
KendoTestingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kendo-testing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kendo-testing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/kendo-testing/kendo-testing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kendo-testing.component.scss */ "./src/app/features/kendo-testing/kendo-testing.component.scss")).default]
    })
], KendoTestingComponent);



/***/ }),

/***/ "./src/app/features/kendo-testing/kendo-testing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/kendo-testing/kendo-testing.module.ts ***!
  \****************************************************************/
/*! exports provided: KendoTestingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KendoTestingModule", function() { return KendoTestingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kendo_testing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kendo-testing-routing.module */ "./src/app/features/kendo-testing/kendo-testing-routing.module.ts");
/* harmony import */ var _kendo_testing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kendo-testing.component */ "./src/app/features/kendo-testing/kendo-testing.component.ts");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js");






let KendoTestingModule = class KendoTestingModule {
};
KendoTestingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_kendo_testing_component__WEBPACK_IMPORTED_MODULE_4__["KendoTestingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
            _kendo_testing_routing_module__WEBPACK_IMPORTED_MODULE_3__["KendoTestingRoutingModule"]
        ]
    })
], KendoTestingModule);



/***/ })

}]);
//# sourceMappingURL=features-kendo-testing-kendo-testing-module.js.map