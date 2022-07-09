<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# dsemwd

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the [standard error of the mean][standard-error] of a double-precision floating-point strided array using Welford's algorithm.

<section class="intro">

The [standard error of the mean][standard-error] of a finite size sample of size `n` is given by

<!-- <equation class="equation" label="eq:standard_error_of_the_mean" align="center" raw="\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}" alt="Equation for the standard error of the mean."> -->

<div class="equation" align="center" data-raw-text="\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}" data-equation="eq:standard_error_of_the_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@480295a815ede8e73acc470b7d4228fa0db9ab94/lib/node_modules/@stdlib/stats/base/dsemwd/docs/img/equation_standard_error_of_the_mean.svg" alt="Equation for the standard error of the mean.">
    <br>
</div>

<!-- </equation> -->

where `σ` is the population [standard deviation][standard-deviation].

Often in the analysis of data, the true population [standard deviation][standard-deviation] is not known _a priori_ and must be estimated from a sample drawn from the population distribution. In this scenario, one must use a sample [standard deviation][standard-deviation] to compute an estimate for the [standard error of the mean][standard-error]

<!-- <equation class="equation" label="eq:standard_error_of_the_mean_estimate" align="center" raw="\sigma_{\bar{x}} \approx \frac{s}{\sqrt{n}}" alt="Equation for estimating the standard error of the mean."> -->

<div class="equation" align="center" data-raw-text="\sigma_{\bar{x}} \approx \frac{s}{\sqrt{n}}" data-equation="eq:standard_error_of_the_mean_estimate">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@480295a815ede8e73acc470b7d4228fa0db9ab94/lib/node_modules/@stdlib/stats/base/dsemwd/docs/img/equation_standard_error_of_the_mean_estimate.svg" alt="Equation for estimating the standard error of the mean.">
    <br>
</div>

<!-- </equation> -->

where `s` is the sample [standard deviation][standard-deviation].

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
dsemwd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dsemwd@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var dsemwd = require( 'path/to/vendor/umd/stats-base-dsemwd/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dsemwd@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.dsemwd;
})();
</script>
```

#### dsemwd( N, correction, x, stride )

Computes the [standard error of the mean][standard-error] of a double-precision floating-point strided array `x` using Welford's algorithm.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var N = x.length;

var v = dsemwd( N, 1, x, 1 );
// returns ~1.20185
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **correction**: degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [standard deviation][standard-deviation] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the [standard deviation][standard-deviation] of a population, setting this parameter to `0` is the standard choice (i.e., the provided array contains data constituting an entire population). When computing the corrected sample [standard deviation][standard-deviation], setting this parameter to `1` is the standard choice (i.e., the provided array contains data sampled from a larger population; this is commonly referred to as Bessel's correction).
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the [standard error of the mean][standard-error] of every other element in `x`,

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var N = floor( x.length / 2 );

var v = dsemwd( N, 1, x, 2 );
// returns 1.25
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = dsemwd( N, 1, x1, 2 );
// returns 1.25
```

#### dsemwd.ndarray( N, correction, x, stride, offset )

Computes the [standard error of the mean][standard-error] of a double-precision floating-point strided array using Welford's algorithm and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var N = x.length;

var v = dsemwd.ndarray( N, 1, x, 1, 0 );
// returns ~1.20185
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the [standard error of the mean][standard-error] for every other value in `x` starting from the second value

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var N = floor( x.length / 2 );

var v = dsemwd.ndarray( N, 1, x, 2, 1 );
// returns 1.25
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   If `N - c` is less than or equal to `0` (where `c` corresponds to the provided degrees of freedom adjustment), both functions return `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dsemwd@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( (randu()*100.0) - 50.0 );
}
console.log( x );

var v = dsemwd( x.length, 1, x, 1 );
console.log( v );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Welford, B. P. 1962. "Note on a Method for Calculating Corrected Sums of Squares and Products." _Technometrics_ 4 (3). Taylor & Francis: 419–20. doi:[10.1080/00401706.1962.10490022][@welford:1962a].
-   van Reeken, A. J. 1968. "Letters to the Editor: Dealing with Neely's Algorithms." _Communications of the ACM_ 11 (3): 149–50. doi:[10.1145/362929.362961][@vanreeken:1968a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/base/dsem`][@stdlib/stats/base/dsem]</span><span class="delimiter">: </span><span class="description">calculate the standard error of the mean for a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/dstdevwd`][@stdlib/stats/base/dstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of a double-precision floating-point strided array using Welford's algorithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dsemwd.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dsemwd

[test-image]: https://github.com/stdlib-js/stats-base-dsemwd/actions/workflows/test.yml/badge.svg?branch=v0.0.9
[test-url]: https://github.com/stdlib-js/stats-base-dsemwd/actions/workflows/test.yml?query=branch:v0.0.9

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dsemwd/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dsemwd?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dsemwd.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dsemwd/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dsemwd/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dsemwd/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dsemwd/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dsemwd/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dsemwd/main/LICENSE

[standard-error]: https://en.wikipedia.org/wiki/Standard_error

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/umd

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@welford:1962a]: https://doi.org/10.1080/00401706.1962.10490022

[@vanreeken:1968a]: https://doi.org/10.1145/362929.362961

<!-- <related-links> -->

[@stdlib/stats/base/dsem]: https://github.com/stdlib-js/stats-base-dsem/tree/umd

[@stdlib/stats/base/dstdevwd]: https://github.com/stdlib-js/stats-base-dstdevwd/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
