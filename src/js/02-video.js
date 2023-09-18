const Player = require('@vimeo/player');
const lodash = require('lodash.throttle'); 

const iframe = document.querySelector('iframe');
const player = new Player.default(iframe);


function SaveTime(time) {
    localStorage.setItem('videoplayer-current-time', time);
}


function GetTime() {
    return parseFloat(localStorage.getItem('videoplayer-current-time')) ;
}


player.on('timeupdate', lodash(function(event) {
    const ActualTime = event.seconds;
    SaveTime(ActualTime);
}, 1000)); 




const Time = GetTime();
player.setCurrentTime(Time).then(function() {
    console.log('Reanudando la reproducción desde', Time, 'segundos.');
});


player.on('play', function() {
    console.log('El video se ha reproducido!');
});

player.getVideoTitle().then(function(title) {
    console.log('Título del video:', title);
});