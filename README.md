:phone: [@aureooms/js-mapping](https://make-github-pseudonymous-again.github.io/js-mapping)
==

Mapping library for JavaScript.
See [docs](https://make-github-pseudonymous-again.github.io/js-mapping).
Parent is [@aureooms/js-library](https://github.com/make-github-pseudonymous-again/js-library).

```js
> import { fromKeys , reflect } from '@aureooms/js-mapping' ;
> import { enumerate } from '@aureooms/js-itertools' ;
> fromKeys( 'ab' , 1 )
[['a', 1], ['b', 1]]
> reflect(enumerate('ab'))
[['a', 0], ['b', 1]]
> Object.fromEntries(reflect(enumerate('ab')))
{ 'a': 0, 'b': 1 }
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-mapping.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-mapping/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-mapping.svg)](https://www.npmjs.org/package/@aureooms/js-mapping)
[![Tests](https://img.shields.io/github/workflow/status/make-github-pseudonymous-again/js-mapping/ci:test?event=push&label=tests)](https://github.com/make-github-pseudonymous-again/js-mapping/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/make-github-pseudonymous-again/js-mapping.svg)](https://david-dm.org/make-github-pseudonymous-again/js-mapping)
[![Dev dependencies](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-mapping.svg)](https://david-dm.org/make-github-pseudonymous-again/js-mapping?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-mapping.svg)](https://github.com/make-github-pseudonymous-again/js-mapping/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-mapping.svg)](https://www.npmjs.org/package/@aureooms/js-mapping)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-mapping.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-mapping/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-mapping.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-mapping/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-mapping/main.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-mapping)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-mapping.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-mapping/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-mapping/badge.svg)](https://make-github-pseudonymous-again.github.io/js-mapping/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-mapping)](https://bundlephobia.com/result?p=@aureooms/js-mapping)
