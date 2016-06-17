# Angular Style Guide

## Dir Structure

project-root
--+ src
--+--+ app
--+--+--+ \__config__
--+--+--+--+ bootstrap.js
--+--+--+--+ Config.js
--+--+--+ \__spec__
--+--+--+ subModule
--+--+--+--+ \__spec__
--+--+--+--+--+ MyController.spec.js
--+--+--+--+ index.js
--+--+--+--+ MyController.js
--+--+--+ index.js
.eslintrc
.gitignore
package.json
README.md


## Bootstrapping

Bootstrapping is done manually . . .

*ES6*

```javascript
import angular  from 'angular';
import app      from 'app';

angular
    .bootstrap(window.document, ['app']);
```

*CommonJS*

```javascript
'use strict';

require('app');

// Bootstrap Angular module to document
require('angular')
    .bootstrap(window.document, ['app']);
```

*RequireJS*

```javascript
define([
    'angular',
    'app'
    
], function(angular) {
    
    'use strict';
    
    angular
        .bootstrap(window.document, ['app']);
    
});
```

## Angular Boilerplate

Angular boilerplate is placed in a single file . . . 

This is named `index.js`, allowing for shorter require / import paths.

*ES6*

```javascript
import angular      from 'angular';

// Library dependencies
import ui.router    from 'angular-ui-router';

// Module dependencies
import subModule    from './subModule';

// Application construction functions
import Config       from '__config__/Config';
import MyController from 'MyController';
import MyService    from 'MyService';

// Angular module boilerplate
angular
    .module('app', [
        'ui.router',
        'subModule'
    ])
    .config(Config)
    .controller(MyController)
    .service(MyService);

```

*CommonJS*

```javascript
'use strict';

// Library dependencies
require('angular-ui-router');

// Module dependencies
require('./subModule');

// Angular module boilerplate
require('angular')
    .module('app', [
        'ui.router',
        'subModule'
    ])
    .config(require('__config__/Config'))
    .controller(require('MyController'))
    .service(require('MyService'));
```

*RequireJS*

```javascript
define([
    'angular',
    
    // Application constructor functions
    './__config__/Config',
    './MyController',
    './MyService',
    
    // Library dependencies
    'ui.router',
    
    // Module dependencies
    './subModule'
    
], function(angular, Config, MyController, MyService) {

    'use strict';
    
    // Angular module boilerplate
    angular
        .module('app', [
            'ui.router',
            'subModule'
        ])
        .config(Config)
        .controller(MyController)
        .service(MyService);
    
})
```


## Constructors

> NAMING CONVENTION: MyController

*ES6*

```javascript
function MyController($scope) {
    this.thing = 'my string';
}

MyController.$inject = [
    '$scope'
];

export default MyController
```

*CommonJS*

```javascript
'use strict';

function MyController($scope) {
    this.thing = 'my string';
}

MyController.$inject = [
    '$scope'
];

module.exports = MyController;
```

*RequireJS*

```javascript
define([], function() {

    function MyController($scope) {
        this.thing = 'my string';
    }
    
    MyController.$inject = [
        '$scope'
    ];
    
});
```

### Controllers

`this`, in conjunction with `controller as` syntax, should be used to namespace functionality and values to the controller, rather than poluting `$scope`. This makes it particuarly easy to see where functionality is located.

```html
<div ng-controller="MyController as MyCtrl">
    <span ng-bind="MyCtrl.thing"></span>
</div>
```

## Testing

> NAMING CONVENTION: MyController.spec.js

As the Angular constructor functions have been striped of the Angular boilerplate and are *just functions*, they can simply been required / imported into the necessary spec file.

*ES6*

```javascript
import MyController from './MyController'

describe('MyController', function() {
  let MyCtrl;

  beforeEach(function() {
    MyCtrl = new MyController();
  });

  it('Should do something or other"', function() {
    expect(MyCtrl.thing).toEqual('my string');
  });
});
```

*CommonJS*

```javascript
var MyController = require('./MyController');

describe('MyController', function() {
  var MyCtrl;

  beforeEach(function() {
    MyCtrl = new MyController();
  });

  it('Should do something or other"', function() {
    expect(MyCtrl.thing).toEqual('my string');
  });
});
```

*RequireJS*

```javascript
define([
    './MyController'
    
], function(MyController) {

    describe('MyController', function() {
      var MyCtrl;
    
      beforeEach(function() {
        MyCtrl = new MyController();
      });
    
      it('Should do something or other"', function() {
        expect(MyCtrl.thing).toEqual('my string');
      });
    });
});
```