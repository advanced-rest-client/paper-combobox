[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/paper-combobox.svg)](https://www.npmjs.com/package/@advanced-rest-client/paper-combobox)

[![Build Status](https://travis-ci.org/advanced-rest-client/api-url-data-model.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/paper-combobox)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/paper-combobox)


# paper-combobox

An input element with a dropdown list of suggestions.

### Example

```html
<paper-combobox label="Fruit name"></paper-combobox>
```

## Usage

### Installation

```
npm install --save @advanced-rest-client/paper-combobox
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@advanced-rest-client/advanced-rest-client/paper-combobox.js';
    </script>
  </head>
  <body>
    <paper-combobox></paper-combobox>
  </body>
</html>
```

### In a Polymer 3 element

```js
import {PolymerElement, html} from '@polymer/polymer';
import '@advanced-rest-client/advanced-rest-client/paper-combobox.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <paper-combobox label="Fruit name" id="fruits" source="[[suggestions]]" on-query="_queryCalled"></paper-combobox>
    `;
  }

  static get properties() {
    return {
      suggestions: {
        type: Array,
        value: function() {
          return ['Apple', 'Apricot', 'Avocado',
          'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
          'Boysenberry', 'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya',
          'Cloudberry', 'Coconut', 'Cranberry', 'Damson', 'Date', 'Dragonfruit',
          'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Goji berry', 'Gooseberry',
          'Grape', 'Grapefruit', 'Guava', 'Huckleberry', 'Jabuticaba', 'Jackfruit',
          'Jambul', 'Jujube', 'Juniper berry', 'Kiwi fruit', 'Kumquat', 'Lemon',
          'Lime', 'Loquat', 'Lychee', 'Mango', 'Marion berry', 'Melon', 'Miracle fruit',
          'Mulberry', 'Nectarine', 'Olive', 'Orange']
        }
      }
    };
  }

  _queryCalled(e) {
    console.log(e.detail.value);
  }
}
customElements.define('sample-element', SampleElement);
```

### Installation

```sh
git clone https://github.com/advanced-rest-client/paper-combobox
cd api-url-editor
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```

## Required dependencies

The `CryptoJS` and `RSAKey` libraries are not included into the element sources.
If your project do not use this libraries already include it into your project.

```sh
npm i cryptojslib jsrsasign
```

```html
<script src="../../../cryptojslib/components/core.js"></script>
<script src="../../../cryptojslib/rollups/sha1.js"></script>
<script src="../../../cryptojslib/components/enc-base64-min.js"></script>
<script src="../../../cryptojslib/rollups/md5.js"></script>
<script src="../../../cryptojslib/rollups/hmac-sha1.js"></script>
<script src="../../../jsrsasign/lib/jsrsasign-rsa-min.js"></script>
```
