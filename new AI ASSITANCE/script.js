let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")


function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishme(){
    let day=new Date()
    let hours=day.getHours()
    console.log(hours)
    if(hours>=0 && hours<12){
        speek("good morning sir")
    }

    else if(hours>=12 && hours<16){
        speek ("good after noon sir")
    }
    else{
        speak("good evening sir")
    }
}

// window.addEventListener('load',()=>{
//    wishme()
// })
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition 
let Recognition= new speechRecognition()
Recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
Recognition.start()
btn.Style.display="none"
voice.style.display="block"
})

function takeCommand(message){
    
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }

    else if(message.includes("who are you")){
        speak("i am vertual assitance ,created by raj ")
    }
    else if (message.includes("open youtube")){
        speak("opening youtube..")
        window.open("https://www.youtube.com")
    }
    else if (message.includes("open facebook")){
        speak("opening facebook..")
        window.open("https://www.facebook.com")
    }
    else if (message.includes("open google")){
        speak("opening google..")
        window.open("https://www.google.com")
    }
    else if (message.includes("open instagram")){
        speak("opening instagram..")
        window.open("https://www.instagram.com")
    }
    else if (message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})

        speak("time")
        
    }
    else{speak(`this is what i found on internet regarding ${message.replace("sai","")}`)
    window.open(`https://www.google.com/search?q=${message.replace("sai","")}`)
}
}
