let progress = 0;
const bar = document.getElementById("bar");
const percentText = document.getElementById("percent");

const timer = setInterval( () => {
   
    if(progress <= 100) {
        progress = (progress == 0 ? 1 : progress *= 2);
        if (progress > 100) progress = 100; // clamp
        bar.style.width = `{progress}%`;
        percentText.textContent = progress + "%";
    }
    else {
        clearInterval(timer);
        percentText.textContent = "Download Complete";
        return;
    }

}, 1000); // every 1s