function saveToDb(data) {
    let internetSpeech = Math.ceil(Math.random()*10);
    if (internetSpeech > 4) {
        console.log("your data was saved : ", data);
    } else {
        console.log("weak connection. data not saved");
    }
}

saveToDb("apna college");