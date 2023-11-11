const w = document.querySelector('.w')
const a = document.querySelector('.a')
const s = document.querySelector('.s')
const d = document.querySelector('.d')
const j = document.querySelector('.j')
const k = document.querySelector('.j')
const l = document.querySelector('.l')
const drum = document.querySelectorAll('.drum')


const sounds = ['sounds/tom-1.mp3', 'sounds/tom-2.mp3', 'sounds/tom-3.mp3', 'sounds/tom-4.mp3', 'sounds/snare.mp3', 'sounds/crash.mp3', 'sounds/kick-bass.mp3']


function playSound(key) {
    switch (key) {
        case 'w':
            const tom1 = new Audio(sounds[0])
            tom1.play()
            break;
        
        case 'a':
            const tom2 = new Audio(sounds[1])
            tom2.play()
            break;
        
        case 's':
            const tom3 = new Audio(sounds[2])
            tom3.play()
            break;
        case 'd':
            const tom4 = new Audio(sounds[3])
            tom4.play()
            break;
        
        case 'j':
            const snare = new Audio(sounds[4])
            snare.play()
        break;
    
        case 'k':
            const crash = new Audio(sounds[5])
            crash.play()
        break;
    
        case 'l':
            const kick = new Audio(sounds[6])
            kick.play()
        break;

        default:
            break;
    }
}

drum.forEach(element => {
    element.addEventListener('click', () => {
        playSound(element.innerHTML)
    })
})


document.addEventListener('keypress', (e) => {
    playSound(e.key)
})
