Namespace.js
============

Micro-library for namespacing objects.

## Usage

### Namespace

Namespaces are objects that you may add **definitions** by **keypath**.

```js
var namespace = new Namespace();

namespace.add('greeting', function() {
  return 'Hello World';
});

namespace.get('greeting')();
// >> 'Hello World'

namespace.greeting();
// >> 'Hello World'
```

#### `add`

Add a definition to a namespace, maintaining any existing definitions.

```js
var locations = new Namespace();

locations.add('california.sanFrancisco.soma', {
  type: 'neighborhood',
  location: 'california.sanFrancisco'
});

locations.add('california.sanFrancisco', {
  type: 'city',
  location: 'california'
});

locations.california.sanFrancisco;
// >> { type: 'neighborhood', location: 'california.sanFrancisco', soma: {...} }

locations.california.sanFrancisco.soma;
// >> { type: 'city', location: 'california' }
```

#### `get`

Safely retrieve a definition by keypath, returning `undefined` if definition does not exist.

```js
var people = new Namespace();

people.add('jamesKyle', {
  name: 'James Kyle',
  type: 'Programmer'
});

people.get('jamesKyle.type');
// >> 'Programmer'

people.get('johnDoe.type');
// >> undefined
```

## Contibuting

### Getting Started

[Fork](https://help.github.com/articles/fork-a-repo/) and
[clone](http://git-scm.com/docs/git-clone) this repo.

```
git clone git@github.com:thejameskyle/namespace.js.git && cd namespace.js
```

Make sure [Node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/) are
[installed](http://nodejs.org/download/).

```
npm install
```

### Running Tests

```
npm test
```

===

© 2014 James Kyle. Distributed under ISC license.
