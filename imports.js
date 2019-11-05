(function() {
  var _imported = {};
  var _import = function(src) {
    if (src in _imported) { return; }
    _imported[src] = src;
    document.write('<script src="' + src + '"></script>');
  }
  var _csses = {};
  var _css = function(src) {
    if (src in _csses) { return; }
    _csses[src] = src;
    document.write('<link rel="stylesheet" href="' + src + '"/>'); }

  _css('fonts.css');
  _css('pure-min.css');
  _css('keyframes.css');
  _css('content.css');
  _css('menu.css');
  _css('demandjs.css');
  _css('photogrid.css');
  _css('photoviewer.css');

  // TODO: decide on way to skip this import when es5 supported...?
  _import('polyfill/es5-shim.min.js');

  if (!String.prototype.includes) {
    _import('polyfill/string_includes.js');
  }
  if (!Array.prototype.forEach) {
    _import('polyfill/array_foreach.js');
  }
  if (!Array.from) {
    _import('polyfill/array.from.js');
  }
	const sfTst = document.createElement('div');
	if ( !(
        ['', '-webkit-', '-moz-', '-ms-'].some(prefix => {
            try {
                sfTst.style.position = prefix + 'sticky';
            }
            catch(e) {}

            return sfTst.style.position != '';
        }))
    ) {
  		_import('polyfill/stickyfill.min.js');
		}

  if (!window.WeakMap) {
    _import('polyfill/weakmap-polyfill.min.js');
  }

	if (!(typeof setImmediate === 'function')) {
		_import('polyfill/setAsap.min.js');
		window.setImmediate = window.setAsap;
	}

	if (!window.Promise) {
  	_import('polyfill/promise.min.js');
	}

	if (!('IntersectionObserver' in window) || 
			!('IntersectionObserverEntry' in window) ||
			!('intersectionRatio' in window.IntersectionObserverEntry.prototype) || 
			!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
			_import('polyfill/intersection-observer.js');
	}

	if (!window.fetch) { _import('polyfill/fetch.js'); }

	if (!window.MutationObserver) { _import('polyfill/mutationobserver.min.js'); }

  _import('javascript-debounce.min.js');
  _import('polyfill/getRandomInt.js');

  _import('https://cdn.rawgit.com/showdownjs/showdown/1.8.4/dist/showdown.min.js');
  _import('masonflex.min.js');
  _import('demandjs.min.js');
})();
