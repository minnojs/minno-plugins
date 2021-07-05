# minno-plugins

This is a set of useful plugins for use with [MinnoJS](https://minnojs.github.io/).

### Count API
[countAPI](https://countapi.xyz/) is a free service for keeping track of count information.
This plugin returns a manager task that adds a `$countAPI` property to `global`.
It is a way to keep track of your number of users, as well as allowing to devide them by conditions.

In order to use it, you need to define it as follows in your manager file (make sure to change the namespace and key to fit your needs):
You can see a working example [here](countAPI/example.js).

```javascript
define(['managerAPI','https://cdn.jsdelivr.net/gh/minnojs/minno-plugins@1.0/countAPI/count.js'], function(Manager, count){

	var API = new Manager();

    API.addSequence([
        count({namespace: 'myNamespace', key: 'myKey'})
    ]);

    return API.script;
});
```

Argument        | Description
--------------- | -----------------------
namespace       | countAPI names space (this should be unique to your user).
key             | countAPI key.
globalKey       | The `global` property holding the countAPI value (defaults to `$countAPI`).
