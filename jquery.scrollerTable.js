(function($) {

  $.fn.scrollerTable = function() {
    $(this).each(function() {
      var scroller = $(this),
          thead = scroller.find('thead'),
          th = scroller.find('th:first-child'),
          td = scroller.find('td:first-child').add(th),
          w, h;

      scroller.find('td:first-child, th').each(function() {
        w = $(this).width();
        h = $(this).height();
        $(this).css({ width: w, minWidth: w, height: h, minHeight: h });
      });

      scroller.css({ position: 'relative', paddingTop: thead.height() });
      thead.css({ position: 'absolute', top: '0px' });
      td.css({ position: 'absolute', left: '0px', zIndex: 1 });
      th.css({ position: 'relative', zIndex: 2 });

      scroller.scroll(function() {
        thead.css({ top: scroller.scrollTop() });
        td.css({ left: scroller.scrollLeft() });
      });

    });
  };

}(jQuery));
