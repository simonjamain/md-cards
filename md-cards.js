(function() {
  $('.material_card-thumbnail.video').each(function() {

    var youtubeId = $(this).data('youtubeid');
    var backgroundUrl = 'http://img.youtube.com/vi/' + youtubeId + '/hqdefault.jpg';
    //replace placeholder image by play icon
    $(this).css({
      'background-image':"url('http://placehold.it/100x100'),url('" + backgroundUrl + "')",
      'background-size':'auto,cover',
      'background-repeat':'no-repeat,no-repeat'
      });

    //check for auto adjust
    var autoAdjustHeight = $(this).attr('auto-height');
    if (typeof autoAdjustHeight !== typeof undefined && autoAdjustHeight !== false) {

    }

    $(this).one('click',function() {
      // we assume youtube API is ready
      var player = $('<iframe scrolling="no" class="player" width="100%" height="100%" src="https://www.youtube.com/embed/'+youtubeId+'?rel=0&autoplay=1&controls=0" frameborder="0" allowfullscreen id="yes"></iframe>').appendTo($(this));

      var hoveringTitle = $(this).find('.material_card-title').first().clone().appendTo($(this)).addClass('hovering-video');

      });
  });
})();
