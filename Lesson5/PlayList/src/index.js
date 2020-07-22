console.log("Hello from Play List");
import Song from "./components/song";
import PlayList from "./components/playlist";
const playList = new PlayList();
const s1 = new Song('TEST', 'Tom', '03:12')
const s2 = new Song('TEST 1', 'Bill', '05:22')
playList.add(s1)
playList.add(s2)
const list = document.getElementById('list')
playList.render(list)
const play = document.getElementById('btn-play')
const stop = document.getElementById('btn-stop')
const next = document.getElementById('btn-next')

play.onclick = function(){
    playList.play();
    playList.render(list)
}
stop.onclick = function(){
    playList.stop();
    playList.render(list)
}
next.onclick = function(){
    playList.next();
    playList.render(list)
}


