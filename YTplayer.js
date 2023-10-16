youtube = function() {
    var tag = document.createElement('script');
  
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video1', {
      width: '1920',
      height: '1080',
      videoId: 'LGXuxzBgL9I',
      events: {
        'onReady': onPlayerReady
      },
      playerVars: {
        'autoplay': 1,
        'controls': 0,
        'disablekb': 1,
        'fs': 0,
        'loop': 1,
        'modestbranding': 1,
        'rel': 0,
        'showinfo': 0,
        'mute': 1,
        'autohide': 1,
        'iv_load_policy': 3,
        'start': 120,
        'end': 180 

  
      }
    });
  }
  
  function onPlayerReady() {
    console.log("start")
  }
  
  youtube();




/*

var tag = document.createElement('script');
          tag.src = "https://www.youtube.com/player_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          var player;
          function onYouTubePlayerAPIReady() {
            player = new YT.Player('ytplayer', {
              width: '1280',
              height: '720',
        
                  // 1. Video_Id
                  videoId: 'LGXuxzBgL9I',

              playerVars: { 
                  autoplay: 1,
                  controls: 0,
                  disablekb: 1,
                  fs: 0,
                  loop: 1,
                  modestbranding: 1,
                  rel: 0,
                  showinfo: 0,
                  mute: 1,
                  autohide: 1
        
              },
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
          }
          function onPlayerReady(event) {
            event.target.setVolume(0);
            event.target.playVideo();
         //  player.mute();
          }
          function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.ENDED) {
              player.seekTo(0);
              player.playVideo();
            }
          }
          function stopVideo() {
            player.stopVideo();
          }

*/