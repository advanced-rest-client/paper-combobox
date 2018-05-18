/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-doc-viewer.html
 */

/// <reference path="../iron-location/iron-location.d.ts" />
/// <reference path="../marked-element/marked-element.d.ts" />
/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../prism-element/prism-highlighter.d.ts" />
/// <reference path="../prism-element/prism-theme-default.d.ts" />
/// <reference path="iron-doc-behavior.d.ts" />
/// <reference path="iron-doc-class.d.ts" />
/// <reference path="iron-doc-demo.d.ts" />
/// <reference path="iron-doc-element.d.ts" />
/// <reference path="iron-doc-mixin.d.ts" />
/// <reference path="iron-doc-namespace.d.ts" />

/**
 * `iron-doc-viewer` renders documentation about elements, mixins, classes, and
 * more from a JSON descriptor output by
 * [Polymer Analyzer](https://github.com/Polymer/polymer-analyzer).
 *
 * Provide the descriptor JSON as a data binding to `descriptor`:
 *
 *     <iron-doc-viewer descriptor="[[descriptor]]"></iron-doc-viewer>
 *
 * `iron-doc-viewer` will initially display all items contained in the given
 * descriptor (e.g. elements, mixins, classes). `path` is used to display detail
 * about specific items within the descriptor (e.g. "/elements/my-component"), and
 * by default is bound to the current `window.location` path.
 *
 * ### Styling
 *
 * Most users should include the default theme alongside this element:
 *
 *     <link rel="import" href="bower_components/iron-doc-viewer/default.html">
 *
 *     <custom-style>
 *       <style is="custom-style" include="iron-doc-default-theme"></style>
 *     </custom-style>
 *
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--iron-doc-font-code` | Mixin applied to code snippets. | `{}`
 * `--iron-doc-font-body` | Mixin applied to non-code text. | `{}`
 */
interface IronDocViewerElement extends Polymer.Element {

  /**
   * The [Polymer
   * Analyzer](https://github.com/Polymer/polymer-analyzer)-generated element
   * descriptor to display details for.
   */
  descriptor: object|null|undefined;

  /**
   * By default all routing is performed using the URL fragment
   * (e.g. `docs.html#/elements/my-element`).
   *
   * If your server supports it and you would like to use the real URL
   * path instead (e.g. `/api/docs/elements/my-element`), set this to
   * the base path where the page is mounted, omitting the trailing
   * slash (e.g. `/api/docs` or *empty string* for the root path).
   */
  baseHref: string|null|undefined;

  /**
   * URL prefix for demo iframes.
   */
  demoSrcPrefix: string|null|undefined;

  /**
   * Path to the item in the descriptor to display.
   *
   * Examples:
   *   - `/` for the root namespace
   *   - `/elements/paper-button`
   *   - `/mixins/paper-button-behavior`
   *
   * Defaults to the current `window.location` path.
   *
   * If `baseHref` is set, it will be trimmed from the prefix of this
   * `path`.
   */
  path: string|null|undefined;

  /**
   * Instead of displaying items relative to the top level of
   * `descriptor`, start from this namespace.
   */
  rootNamespace: string|null|undefined;

  /**
   * Display title for the currently selected item.
   */
  title: string;

  /**
   * True if the viewer is currently displaying a demo.
   */
  readonly demo: boolean|null|undefined;
  _descriptorType: string|null|undefined;
  _urlPath: string|null|undefined;
  _urlHash: string|null|undefined;
  _currentDescriptor: object|null|undefined;
  _fragmentPrefix: string|null|undefined;
  _scrollTo: string|null|undefined;
  _demo: object|null|undefined;
  _equal(a: any, b: any): any;
  _computeDemo(demo: any): any;
  _routingChanged(baseHref: any, urlPath: any, urlHash: any): void;
  _dataChanged(descriptor: any, path: any, scrollAnchor: any): void;
}

interface HTMLElementTagNameMap {
  "iron-doc-viewer": IronDocViewerElement;
}
