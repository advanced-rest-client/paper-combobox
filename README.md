[![Build Status](https://travis-ci.org/advanced-rest-client/paper-combobox.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/paper-combobox)

## UiElements.PaperCombobox component
Tag: `<paper-combobox>`

### Installation
Using bower:
```
bower install --save advanced-rest-client/paper-combobox
```

An input element with a dropdown list of suggestions

### Example
```
<paper-combobox source="['Apple', 'Orange', ...]"></paper-combobox>
```

### Styling

`<paper-combobox>` provides the following custom properties and mixins for styling:
Custom property | Description | Default
----------------|-------------|----------
`--paper-combobox` | Mixin applied to the element | `{}`
`--paper-combobox-autocomplete-top` | Top position of the autocomplete elemement. Default value assumes label to be loating. | `54px`
`--paper-combobox-autocomplete-top-no-float` | Top posiiotn of the autocomplete element when label will not float. | `36px`
`--paper-combobox-icon-button-size` | Size of the trigger icon | `24px`
`--paper-combobox-icon-button` | Mixin applied to trigger icon button | `{}`

This element also supports all styling defined for `paper-input`.

## API
### Component properties (attributes)

#### noLabelFloat
- Type: `boolean`


#### opened
- Type: `boolean`
True to open the suggestions box.

#### source
- Type: `Array`
List of suggestions to display.
If the array items are strings they will be used for display a suggestions and
to insert a value.
If the list is an object the each object must contain `value` and `display`
properties.
The `display` property will be used in the suggestions list and the
`value` property will be used to insert the value to the referenced text field.

#### inputElement
- Type: `Object`
- Read only property


#### tabindex
- Type: `number`
The tabindex of the element.


### Component methods

#### open
- Return type: `undefined`
Opens the suggestions box

