Wires Namespace
===============

Micro-library for namespacing objects.

[![Travis Status](http://img.shields.io/travis/marionette-wires/wires-namespace/master.svg?style=flat&amp;label=travis)](https://travis-ci.org/marionette-wires/wires-namespace) [![Code Climate Score](http://img.shields.io/codeclimate/github/marionette-wires/wires-namespace.svg?style=flat)](https://codeclimate.com/github/marionette-wires/wires-namespace) [![Coverage](http://img.shields.io/codeclimate/coverage/github/marionette-wires/wires-namespace.svg?style=flat)](https://codeclimate.com/github/marionette-wires/wires-namespace) [![Dependency Status](http://img.shields.io/david/marionette-wires/wires-namespace.svg?style=flat)](https://david-dm.org/marionette-wires/wires-namespace)

## Usage

### Namespace

Namespaces are objects that you may add **definitions** by **keypath**.

```js
import Namespace from 'wires-namespace';

let namespace = new Namespace();

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
import Namespace from 'wires-namespace';

let locations = new Namespace();

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
import Namespace from 'wires-namespace';

let people = new Namespace();

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
git clone git@github.com:marionette-wires/wires-namespace.git && cd wires-namespace
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
