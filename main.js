prediction = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});


Webcam.attach("#camera")

function cap_picture() {
    Webcam.snap(function(picture){
        document.getElementById("snapshot").innerHTML = "<img id='captureimg' src ='" +picture+"'>"
    })
}
console.log("ml5 version:", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jI7fSGvx5/model.json", modelLoaded)

function modelLoaded() {
    console.log("Model Loaded")
}



function speaking() {
    var synth = window.speechSynthesis
    data ="the prediction is -"
    var final = new SpeechSynthesisUtterance
    synth.speak(final)
}

function pre_image() {
    var img1 = document.getElementById("captureimg")
    classifier.classify(img1, gotresults)
}

function gotresults(error, results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log (results)

        document.getElementById("emotion_name").innerHTML = results[0].label

        prediction = results[0].label


        speaking()

        if (results[0].label == "Perfect") {
            document.getElementById("emoji_name").innerHTML = "&#128076;"
        }
        if (results[0].label == "Stop") {
            document.getElementById("emoji_name").innerHTML = "&#9996;"
        }
        if (results[0].label == "Peace") {
            document.getElementById("emoji_name").innerHTML = "&#128406;"
        }
        if (results[0].label == "Horns") {
            document.getElementById("emoji_name").innerHTML = "&#128557;"
        }
        if (results[0].label == "Crossed-Fingers") {
            document.getElementById("emoji_name").innerHTML = "&#129310;"
        }
        if (results[0].label == "Vulcan-Salute") {
            document.getElementById("emoji_name").innerHTML = "&#128406;"
        }
        if (results[0].label == "Thumbs-up") {
            document.getElementById("emoji_name").innerHTML = "&#128077;"
        }
    }
}