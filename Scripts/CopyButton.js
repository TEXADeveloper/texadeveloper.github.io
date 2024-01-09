function copyMail() {
    navigator.clipboard.writeText("intifernandez2004@gmail.com").then(() => {
        let changeText = document.querySelector("#copyButton");
        changeText.innerHTML = 'COPIED';
        setTimeout(() => {  changeText.innerHTML = 'COPY'; }, 1500);
    });
}
