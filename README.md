:phone: [@aureooms/js-mapping](https://aureooms.github.io/js-mapping)
==

Mapping library for JavaScript.
See [docs](https://aureooms.github.io/js-mapping).
Parent is [@aureooms/js-library](https://github.com/aureooms/js-library).

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

[![License](https://img.shields.io/github/license/aureooms/js-mapping.svg)](https://raw.githubusercontent.com/aureooms/js-mapping/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-mapping.svg)](https://www.npmjs.org/package/@aureooms/js-mapping)
[![Build](https://img.shields.io/travis/aureooms/js-mapping/master.svg)](https://travis-ci.com/aureooms/js-mapping/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-mapping.svg)](https://david-dm.org/aureooms/js-mapping)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-mapping.svg)](https://david-dm.org/aureooms/js-mapping?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-mapping.svg)](https://github.com/aureooms/js-mapping/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-mapping.svg)](https://www.npmjs.org/package/@aureooms/js-mapping)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-mapping.svg)](https://codeclimate.com/github/aureooms/js-mapping/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-mapping.svg)](https://codeclimate.com/github/aureooms/js-mapping/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-mapping/master.svg)](https://codecov.io/gh/aureooms/js-mapping)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-mapping.svg)](https://codeclimate.com/github/aureooms/js-mapping/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-mapping/badge.svg)](https://aureooms.github.io/js-mapping/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-mapping)](https://bundlephobia.com/result?p=@aureooms/js-mapping)
