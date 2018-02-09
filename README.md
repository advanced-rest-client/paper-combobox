[![Build Status](https://travis-ci.org/advanced-rest-client/paper-combobox.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/paper-combobox)  

# paper-combobox

`<paper-combobox>` An input element with a dropdown list of suggestions

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

This element also supports all styling associated with `paper-input`.



### Events
| Name | Description | Params |
| --- | --- | --- |
| query | Fired when user entered some text into the input. It is a time to query external datastore for suggestions and update "source" property. Source should be updated event if the backend result with empty values and should set the list to empty array.  Nore that setting up source in response to this event after the user has closed the dropdown it will have no effect at the moment. | value **String** - An entered phrase in text field. |
