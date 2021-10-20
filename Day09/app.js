const buttons = document.querySelector('.buttons')
const stop = document.querySelector('.stop')
const songs= ['Meant to be', 'Cheap Thrills', 'Deadpool', 'IGDAF', 'Worth It']


songs.forEach((song, idx) => {
    const btn = document.createElement('button');
    buttons.classList.add('btn')

    btn.innerText = song;
    
   
    btn.addEventListener('click', () => {
        stopSong()
       
        document.getElementById(idx).play()

    })
    buttons.appendChild(btn)
})
function stopSong(){
    songs.forEach(( whatever ,idx) => {
        console.log(whatever)
        const song= document.getElementById(idx)
        song.pause()
    })
} 


stop.addEventListener('click', () => {
    stopSong()})