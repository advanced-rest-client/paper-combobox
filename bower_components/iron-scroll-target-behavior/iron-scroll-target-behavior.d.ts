/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-scroll-target-behavior.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />

declare namespace Polymer {

  /**
   * `Polymer.IronScrollTargetBehavior` allows an element to respond to scroll events from a
   * designated scroll target.
   *
   * Elements that consume this behavior can override the `_scrollHandler`
   * method to add logic on the scroll event.
   */
  interface IronScrollTargetBehavior {

    /**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an element,
     * but there are a few more posibilities:
     *
     * ### Elements id
     *
     * ```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     * ```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     * ```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     * ```
     *
     * ### Elements reference
     *
     * ```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     * ```
     */
    scrollTarget: HTMLElement|null;

    /**
     * True if the event listener should be installed.
     *      
     */
    _shouldHaveListener: boolean;

    /**
     * The default scroll target. Consumers of this behavior may want to customize
     * the default scroll target.
     */
    readonly _defaultScrollTarget: any;

    /**
     * Shortcut for the document element
     */
    readonly _doc: any;

    /**
     * Gets the number of pixels that the content of an element is scrolled upward.
     */
    _scrollTop: any;

    /**
     * Gets the number of pixels that the content of an element is scrolled to the left.
     */
    _scrollLeft: any;

    /**
     * Gets the width of the scroll target.
     */
    readonly _scrollTargetWidth: any;

    /**
     * Gets the height of the scroll target.
     */
    readonly _scrollTargetHeight: any;
    _scrollTargetChanged(scrollTarget: any, isAttached: any): void;

    /**
     * Runs on every scroll event. Consumer of this behavior may override this method.
     */
    _scrollHandler(): void;

    /**
     * Scrolls the content to a particular place.
     *
     * @param left The left position
     * @param top The top position
     */
    scroll(left: number, top: number): void;

    /**
     * Returns true if the scroll target is a valid HTMLElement.
     */
    _isValidScrollTarget(): boolean;
    _toggleScrollListener(yes: any, scrollTarget: any): void;

    /**
     * Enables or disables the scroll event listener.
     *
     * @param yes True to add the event, False to remove it.
     */
    toggleScrollListener(yes: boolean): void;
  }

  const IronScrollTargetBehavior: object;
}
