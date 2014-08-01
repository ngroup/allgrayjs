(function($, window, document) {
  var Allgray;
  Allgray = function(elem, options) {
    this.elem = elem;
    this.options = $.extend({}, this.options, options);
    this.init();
  };
  Allgray.prototype.init = function() {
    $(this.elem).addClass("Allgray");
  };
  Allgray.prototype.colorize = function() {
    $(this.elem).removeClass("Allgray");
    ($(this.elem)).removeData('Allgray');
  };
  return $.fn.Allgray = function(options) {
    return this.each(function() {
      var plugin;
      plugin = ($(this)).data('Allgray');
      if (plugin === void 0) {
        plugin = new Allgray(this, options);
        return ($(this)).data('Allgray', plugin);
      } else {
        return plugin.colorize();
      }
    });
  };
})(jQuery, window, document);
