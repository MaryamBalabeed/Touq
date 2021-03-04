$(document).ready(function(){
    AOS.init();
    function handleFirstPlay(event) {
        let vid = event.target;
      
        vid.onplay = null;
      
        // Start whatever you need to do after playback has started
      }
});