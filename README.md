:phone: [@iterable-iterator/mapping](https://iterable-iterator.github.io/mapping)
==

Mapping library for JavaScript.
See [docs](https://iterable-iterator.github.io/mapping).
Parent is [js-library](https://github.com/make-github-pseudonymous-again/js-library).

```js
> import { fromKeys , reflect } from '@iterable-iterator/mapping' ;
> import {enumerate} from '@iterable-iterator/zip';
> fromKeys( 'ab' , 1 )
[['a', 1], ['b', 1]]
> reflect(enumerate('ab'))
[['a', 0], ['b', 1]]
> Object.fromEntries(reflect(enumerate('ab')))
{ 'a': 0, 'b': 1 }
```

[![License](https://img.shields.io/github/license/iterable-iterator/mapping.svg)](https://raw.githubusercontent.com/iterable-iterator/mapping/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@iterable-iterator/mapping.svg)](https://www.npmjs.org/package/@iterable-iterator/mapping)
[![Tests](https://img.shields.io/github/workflow/status/iterable-iterator/mapping/ci:test?event=push&label=tests)](https://github.com/iterable-iterator/mapping/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/iterable-iterator/mapping.svg)](https://david-dm.org/iterable-iterator/mapping)
[![Dev dependencies](https://img.shields.io/david/dev/iterable-iterator/mapping.svg)](https://david-dm.org/iterable-iterator/mapping?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/iterable-iterator/mapping.svg)](https://github.com/iterable-iterator/mapping/issues)
[![Downloads](https://img.shields.io/npm/dm/@iterable-iterator/mapping.svg)](https://www.npmjs.org/package/@iterable-iterator/mapping)

[![Code issues](https://img.shields.io/codeclimate/issues/iterable-iterator/mapping.svg)](https://codeclimate.com/github/iterable-iterator/mapping/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/iterable-iterator/mapping.svg)](https://codeclimate.com/github/iterable-iterator/mapping/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/iterable-iterator/mapping/main.svg)](https://codecov.io/gh/iterable-iterator/mapping)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/iterable-iterator/mapping.svg)](https://codeclimate.com/github/iterable-iterator/mapping/trends/technical_debt)
[![Documentation](https://iterable-iterator.github.io/mapping/badge.svg)](https://iterable-iterator.github.io/mapping/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@iterable-iterator/mapping)](https://bundlephobia.com/result?p=@iterable-iterator/mapping)
