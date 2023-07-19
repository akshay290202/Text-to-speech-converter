let speech = new SpeechSynthesisUtterance();

let Voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    Voices = window.speechSynthesis.getVoices();
    speech.voice = Voices[0];

    Voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)));
}

voiceSelect.addEventListener("change" , () => {
    speech.voice = Voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", function () {
        speech.text = document.querySelector("textarea").value;
        window.speechSynthesis.speak(speech);
    });