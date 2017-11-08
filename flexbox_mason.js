'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  // Classname reference
  var CLASSES = {
    MASONRY: 'masonry',
    PANEL: 'masonry-panel',
    PAD: 'masonry-pad'
  };

  var Masonry = function () {
    function Masonry(el, options) {
      _classCallCheck(this, Masonry);

			this.panelClass = options.panelClass || CLASSES.PANEL;
			this.padClass = options.padClass || CLASSES.PAD;
      this.container = el;
      this.visEle = options.visEle || null;
      this.panels = el.querySelectorAll('.' + this.panelClass);
      this.state = {
        heights: []
      };
      this.layout();
    }
    /**
      * Reset the layout by removing padding elements, resetting heights
      * reference and removing the container inline style
    */

    Masonry.prototype.__reset = function __reset() {
      var container = this.container;

      this.state.heights = [];
      var fillers = container.querySelectorAll('.' + this.padClass);
      if (fillers.length) {
        for (var f = 0; f < fillers.length; f++) {
          fillers[f].parentNode.removeChild(fillers[f]);
        }
      }
      container.removeAttribute('style');
    };
    /**
      * Iterate through panels and work out the height of the layout
    */
    Masonry.prototype.__populateHeights = function __populateHeights() {
      var panels = this.panels;
      var state = this.state;
      var heights = state.heights;
      var _ccs = getComputedStyle(this.container);
      var cw = parseFloat(_ccs.width);

      var mw = null;
      var mph = null;
      var pp = [];
      for (var p = 0; p < panels.length; p++) {
        var panel = panels[p];

        var _getComputedStyle = getComputedStyle(panel);

        var cssOrder = _getComputedStyle.order;
        var msFlexOrder = _getComputedStyle.msFlexOrder;
        var height = Math.ceil(parseFloat(_getComputedStyle.height));
        height += parseFloat(_getComputedStyle.marginBottom);
        height += parseFloat(_getComputedStyle.marginTop);

        var width = parseFloat(_getComputedStyle.width);
        mw = Math.min(mw || width, width);
        mph = Math.min(mph || height, height);
        pp.push( {
          index: p,
          panel: panel,
          height: height,
          width: width
        });
      }

      var colCount = Math.floor(cw / mw);
      for (var j = 0; j < colCount; j++) {
        heights[j] = 0; 
      }
      // prefer leftermore column unless there is a somewhat significant gap between images
      var mph2 = Math.floor(mph / 2);
      for (var p = 0; p < pp.length; p++) {
        var mi = null; var mh = null;
        for (var j = 0; j < colCount; j++) {
          if (mh == null || mh-mph2 > heights[j]) {
            mi = j;
            mh = heights[j];
          }
        }
        heights[mi] += pp[p].height;
        pp[p].panel.style.order = mi + 1;
        pp[p].panel.style.msFlexOrder = mi + 1;
      }
    };
    /**
      * Set the layout height based on referencing the content cumulative height
      * This probably doesn't need its own function but felt right to be nice
      * and neat
    */

    Masonry.prototype.__setLayout = function __setLayout() {
      var _Math;

      var container = this.container;
      var state = this.state;
      var heights = state.heights;

      this.state.maxHeight = (_Math = Math).max.apply(_Math, heights);
      container.style.height = Math.ceil(this.state.maxHeight) + 'px';
    };
    // /**
    //   * JavaScript method for setting order of each panel based on panels.length and desired number of columns
    // */
    // __setOrders() {
    //   const {
    //     panels,
    //   } = this
    //   const cols = 3 // There needs to be an internal reference here that checks how many cols for viewport size
    //   panels.forEach((panel, idx) => {
    //     panel.style.order = ((idx + 1) % cols === 0) ? cols : (idx + 1) % cols
    //   })
    // }
    /**
      * Pad out layout "columns" with padding elements that make heights equal
    */

    Masonry.prototype.__pad = function __pad() {
      var container = this.container;
      var _state = this.state;
      var heights = _state.heights;
      var maxHeight = _state.maxHeight;
			var padClass = this.padClass;

      heights.map(function (height, idx) {
        if (height < maxHeight && height > 0) {
          var pad = document.createElement('div');
          pad.className = padClass;
          pad.style.height = maxHeight - height + 'px';
          pad.style.order = idx + 1;
          pad.style.msFlexOrder = idx + 1;
          container.appendChild(pad);
        }
      });
    };
    /**
      * Resets and lays out elements
    */

    Masonry.prototype.layout = debounce(function layout() {
      var vis = this.visEle || this.container;
      var rect = vis.getBoundingClientRect();
      /* dont do anything while container is hidden... */
      if (rect.width == 0 || rect.height == 0) { return; }

      this.__reset();
      // this.__setOrders()
      this.__populateHeights();
      this.__setLayout();
      this.__pad();
    }, 250);

		Masonry.prototype.listenResize = function () {
			var _self = this;
			window.addEventListener('resize', function () {
				return _self.layout();
			});
		};
		Masonry.prototype.listenHashChange = function () {
			var _self = this;
			window.addEventListener('hashchange', function () {
				return _self.layout();
			});
		};

		Masonry.prototype.listenNewImageLoad = function () {
			if (!MutationObserver) { throw 'MutationObserver polyfill required'; }
			var _self = this;

			var obs = new MutationObserver(function (mutation) {
            var imgs = _self.container.querySelectorAll('img');
            var doLayout = false;
						for (var i = 0; i < imgs.length; i++) {
							var ele = imgs[i];

              if (ele.hasMasonryListener) { continue; }
              ele.hasMasonryListener = true;
              if (!ele.complete && !ele.naturalWidth && !ele.naturalHeight) {
                ele.addEventListener('load', function() {
                  _self.layout();
                });
              } else {
                doLayout = true;
              }
            }
            if (doLayout) { _self.layout(); }
        });
        obs.observe(this.container, { subtree: true, childList: true });
		};

    return Masonry;
  }();
	window.Masonry = Masonry;
})();
