# primes

> AngularJs application used to show step by step performance improvement

Read [Improving Angular web app performance example][1] - step by step profiling
and optimizication for this application's example. 
Start by cloning this repo, checkout out tag step-0 and following the tutorial.

    git clone git@github.com:bahmutov/primes.git
    cd primes
    git checkout step-0
    open index.html

![primes](images/primes.png)

You probably need to install a couple of 3rd party libraries before running

    bower install angular-bindonce jquery angular-vs-repeat --force

Various checkpoints are tagged (step-0, step-1, etc).

* [step-0](https://github.com/bahmutov/primes/releases/tag/step-0) initial application
* [step-1](https://github.com/bahmutov/primes/releases/tag/step-1) removed try-catch
* [step-2](https://github.com/bahmutov/primes/releases/tag/step-2) reusing found primes
* [step-3](https://github.com/bahmutov/primes/releases/tag/step-3) checking fewer numbers per prime
* [step-4](https://github.com/bahmutov/primes/releases/tag/step-4) profiling idle digest
* [step-5](https://github.com/bahmutov/primes/releases/tag/step-5) removed unnecessary filters
* [step-6](https://github.com/bahmutov/primes/releases/tag/step-6) one way binding using bind-once
* [step-7](https://github.com/bahmutov/primes/releases/tag/step-7) generating HTML in code
* [step-8](https://github.com/bahmutov/primes/releases/tag/step-8) 2 batch generation
* [step-9](https://github.com/bahmutov/primes/releases/tag/step-9) small batches
* [step-10](https://github.com/bahmutov/primes/releases/tag/step-10) appending each table body
* [step-11](https://github.com/bahmutov/primes/releases/tag/step-11) web workers
* [step-12](https://github.com/bahmutov/primes/releases/tag/step-12) memory profiling
* [step-13](https://github.com/bahmutov/primes/releases/tag/step-13) on-demand computation using infinite scroll
* [step-14](https://github.com/bahmutov/primes/releases/tag/step-14) expensive copy in deep watch
* [step-15](https://github.com/bahmutov/primes/releases/tag/step-15) limit work to visible elements
* [step-16](https://github.com/bahmutov/primes/releases/tag/step-16) AngularJS v1.3.13
* [step-17](https://github.com/bahmutov/primes/releases/tag/step-17) `ng-class` vs built-in form validation

If you need angular-free primes app for profiling, use 
[bahmutov/vanilla-primes](https://github.com/bahmutov/vanilla-primes).

### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/primes/issues?state=open) on Github

[1]: http://glebbahmutov.com/blog/improving-angular-web-app-performance-example/
