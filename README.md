:phone: [@iterable-iterator/mapping](https://iterable-iterator.github.io/mapping)
==

Mapping library for JavaScript.
See [docs](https://iterable-iterator.github.io/mapping).
Parent is [js-library](https://github.com/make-github-pseudonymous-again/js-library).

```js
import {constant} from '@iterable-iterator/mapping' ;
constant('ab', 1); // ['a', 1] ['b', 1]

import {inverse} from '@iterable-iterator/mapping' ;
import {enumerate} from '@iterable-iterator/zip';
inverse(enumerate('ab')); // ['a', 0] ['b', 1]

// You can convert to and from Object and Map
import {toObject, fromObject, toMap, fromMap} from '@iterable-iterator/mapping' ;
toObject(mapping) -> Object
fromObject(Object) -> mapping
toMap(mapping) -> Map
fromMap(Map) -> mapping
```

[![License](https://img.shields.io/github/license/iterable-iterator/mapping.svg)](https://raw.githubusercontent.com/iterable-iterator/mapping/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@iterable-iterator/mapping.svg)](https://www.npmjs.org/package/@iterable-iterator/mapping)
[![Tests](https://img.shields.io/github/actions/workflow/status/iterable-iterator/mapping/ci.yml?branch=main&event=push&label=tests)](https://github.com/iterable-iterator/mapping/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/iterable-iterator/mapping.svg)](https://github.com/iterable-iterator/mapping/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/iterable-iterator/mapping.svg)](https://github.com/iterable-iterator/mapping/issues)
[![Downloads](https://img.shields.io/npm/dm/@iterable-iterator/mapping.svg)](https://www.npmjs.org/package/@iterable-iterator/mapping)

[![Code issues](https://img.shields.io/codeclimate/issues/iterable-iterator/mapping.svg)](https://codeclimate.com/github/iterable-iterator/mapping/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/iterable-iterator/mapping.svg)](https://codeclimate.com/github/iterable-iterator/mapping/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/iterable-iterator/mapping/main.svg)](https://codecov.io/gh/iterable-iterator/mapping)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/iterable-iterator/mapping.svg)](https://codeclimate.com/github/iterable-iterator/mapping/trends/technical_debt)
[![Documentation](https://iterable-iterator.github.io/mapping/badge.svg)](https://iterable-iterator.github.io/mapping/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@iterable-iterator/mapping)](https://bundlephobia.com/result?p=@iterable-iterator/mapping)
