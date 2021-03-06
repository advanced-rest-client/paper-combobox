/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-combobox.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../polymer/types/lib/utils/render-status.d.ts" />
/// <reference path="../iron-form-element-behavior/iron-form-element-behavior.d.ts" />
/// <reference path="../iron-input/iron-input.d.ts" />
/// <reference path="../paper-input/paper-input-behavior.d.ts" />
/// <reference path="../paper-input/paper-input-container.d.ts" />
/// <reference path="../paper-input/paper-input-error.d.ts" />
/// <reference path="../paper-input/paper-input-char-counter.d.ts" />
/// <reference path="../paper-icon-button/paper-icon-button.d.ts" />
/// <reference path="../arc-icons/arc-icons.d.ts" />
/// <reference path="../paper-autocomplete/paper-autocomplete.d.ts" />

declare namespace UiElements {

  /**
   * An input element with a dropdown list of suggestions
   *
   * ### Example
   * ```
   * <paper-combobox source="['Apple', 'Orange', ...]"></paper-combobox>
   * ```
   *
   * ### Styling
   *
   * `<paper-combobox>` provides the following custom properties and mixins for styling:
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--paper-combobox` | Mixin applied to the element | `{}`
   * `--paper-combobox-autocomplete-top` | Top position of the autocomplete elemement. | `54px`
   * `--paper-combobox-autocomplete-top-no-float` | Top posiotn of the autocomplete
   * element when label not floating. | `36px`
   * `--paper-combobox-icon-button-size` | Size of the trigger icon | `24px`
   * `--paper-combobox-icon-button` | Mixin applied to trigger icon button | `{}`
   *
   * This element also supports all styling defined for `paper-input`.
   */
  class PaperCombobox extends
    Polymer.IronFormElementBehavior(
    Polymer.PaperInputBehavior(
    Polymer.Element)) {

    /**
     * Returns a reference to the input element.
     */
    readonly inputElement: HTMLElement;

    /**
     * True to open the suggestions box.
     */
    opened: boolean|null|undefined;

    /**
     * List of suggestions to display.
     * If the array items are strings they will be used for display a suggestions and
     * to insert a value.
     * If the list is an object the each object must contain `value` and `display`
     * properties.
     * The `display` property will be used in the suggestions list and the
     * `value` property will be used to insert the value to the referenced text field.
     */
    source: any[]|null|undefined;
    noLabelFloat: boolean|null|undefined;
    _focusInputElement: object|null|undefined;

    /**
     * The tabindex of the element.
     */
    tabindex: number|null|undefined;
    ready(): void;

    /**
     * Opens the suggestions box
     */
    open(): void;
    _onSelected(e: any): void;
    _generateInputId(): void;
  }
}

interface HTMLElementTagNameMap {
  "paper-combobox": UiElements.PaperCombobox;
}
