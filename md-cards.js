(function() {
  $('.material_card-thumbnail.video').each(function() {

    var youtubeId = $(this).data('youtubeid');
    var backgroundUrl = 'http://img.youtube.com/vi/' + youtubeId + '/hqdefault.jpg';

    $(this).css({
      'background-image':"url('" + backgroundUrl + "')",
      'background-size':'cover',
      'background-repeat':'no-repeat'
      });

    //check for auto adjust
    var autoAdjustHeight = $(this).attr('auto-height');
    if (typeof autoAdjustHeight !== typeof undefined && autoAdjustHeight !== false) {
        //TODO
    }

    //replace placeholder image by play icon
    var frame = $(this);
    $('<div class="material_card-play-icon material-icons">&#xE039;</div>').appendTo($(this)).one('click',function() {
      // we assume youtube API is ready
      var player = $('<iframe scrolling="no" class="player" width="100%" height="100%" src="https://www.youtube.com/embed/'+youtubeId+'?rel=0&autoplay=1&controls=0" frameborder="0" allowfullscreen id="yes"></iframe>').appendTo(frame);

      var hoveringTitle = frame.find('.material_card-title').first().clone().appendTo(frame).addClass('hovering-video');

      });
  });
})();
