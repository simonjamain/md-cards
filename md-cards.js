(function() {
  $('.material_card-thumbnail.video').each(function() {
    var $this = $(this)

    var youtubeId = $this.data('youtubeid');
    var backgroundUrl = 'http://img.youtube.com/vi/' + youtubeId + '/hqdefault.jpg';

    $this.css({
      'background-image':"url('" + backgroundUrl + "')",
      'background-size':'cover',
      'background-repeat':'no-repeat'
      });

    //replace placeholder image by play icon
    var frame = $(this);
    $('<div class="material_card-play-icon material-icons">&#xE039;</div>').appendTo($(this)).one('click',function() {
      // we assume youtube API is ready
      var player = $('<iframe scrolling="no" class="player" src="https://www.youtube.com/embed/'+youtubeId+'?rel=0&autoplay=1&controls=0" frameborder="0" allowfullscreen id="yes"></iframe>').prependTo(frame);
      $(this).remove();
      });
  });
})();
