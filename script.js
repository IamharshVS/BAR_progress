let progress = 0;

function increaseProgress() {
    if (progress < 100) {
        progress += 10;
        const progressBar = document.getElementById("progressBar");
        progressBar.style.width = progress + "%";
        progressBar.innerText = progress + "%";
    }
}
