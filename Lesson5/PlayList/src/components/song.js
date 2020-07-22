// function Song(title, duration, artist) {
//     this.title = title;
//     this.duration= duration;
//     this.artist= artist;
//     this.isPlaying= false;
// }
// Song.prototype.play = function() {
// this.isPlaying = true;
// }
// Song.prototype.stop = function() {
// this.isPlaying = false;
// }

// Song.prototype.toHtml = function(){ 
//     return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
//         <div class="col-sm-9">${this.title} - ${this.artist}</div>
//            <div class="col-sm-3">${this.duration}</div> 
//            </div>`
//         }
// export default Song;


class Song {
    constructor(title, duration, artist){
        this.title = title;
        this.duration= duration;
        this.artist= artist;
        this.isPlaying= false;
    }
play() {this.isPlaying = true}
stop() {this.isPlaying = false}
toHtml() {
    return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
<div class="col-sm-9">${this.title} - ${this.artist}</div>
   <div class="col-sm-3">${this.duration}</div> 
   </div>`}
}

export default Song;
// class SongPlus extends Song {
//     constructor() {
//         super();
//         this.play = function() {isPlaying = true}
//         this.stop = function() {isPlaying = false}
//         this.toHtml = function() {
//             return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
//         <div class="col-sm-9">${this.title} - ${this.artist}</div>
//            <div class="col-sm-3">${this.duration}</div> 
//            </div>`
//         }
//     }
// }
// Song.play = function() {this.isPlaying = true}
// Song.stop = function() {this.isPlaying = false}
// Song.toHtml = function() {
//     return `<div class="row py-3 ${this.isPlaying ? 'current': ''}">
// <div class="col-sm-9">${this.title} - ${this.artist}</div>
//    <div class="col-sm-3">${this.duration}</div> 
//    </div>`}

