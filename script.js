function record() {
    var recognition = new webkitSpeechRecognition()
    recognition.lang = "en-US"
    recognition.onresult = function(e) {
        console.log(e)
        document.getElementById("speechToText").value = e.results[0][0].transcript
    }
    recognition.start()
}