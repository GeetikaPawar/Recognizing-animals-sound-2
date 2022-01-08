function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IUF64k5IJ/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}