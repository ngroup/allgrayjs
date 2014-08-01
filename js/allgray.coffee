(($, window, document) ->
  Allgray = (elem, options) ->
    @elem = elem
    @options = $.extend({}, @options, options)
    @init()
    return


  Allgray::init = ->
    $(@elem).addClass("Allgray")
    return


  Allgray::colorize = ->
    $(@elem).removeClass("Allgray")
    ($ @elem).removeData('Allgray')
    return


  $.fn.Allgray = (options) ->
    return this.each ->
      plugin = ($ this).data('Allgray')
      if plugin == undefined
        plugin = new Allgray this, options
        ($ this).data 'Allgray', plugin
      else
        plugin.colorize()

) jQuery, window, document
