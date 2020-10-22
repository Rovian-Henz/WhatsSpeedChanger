const interval = setInterval(() => {
    let header = document.querySelector("._1QUKR");
    if (!header)
        header = document.querySelector("#side > header");

    if (header) {
        clearInterval(interval);
        createButton(header);
    }

}, 1000);

function Audios2x(active) {
    let conversaPai = document.querySelector("._2xoTX");
    if (!conversaPai)
        conversaPai = document.querySelector("#pane-side > div > div > div");

    if (conversaPai) {
        let conversas = conversaPai.querySelectorAll("._210SC")
        if (!conversas)
            conversas = conversaPai.querySelectorAll("#pane-side > div > div > div > div")

        conversas.forEach(item => {
            item.addEventListener("click", () => {
                let audios = document.querySelectorAll("audio");
                audios.forEach(audio => {
                    if (active)
                        audio.playbackRate = 2;
                    else
                        audio.playbackRate = 1;
                })
            })
        })
    }
}

function createButton(header) {
    const button = document.createElement("button");
    button.innerHTML = "2x";
    button.classList.add("twoTimesButton");
    button.addEventListener("click", () => {
        button.classList.toggle("active");
        Audios2x(button.classList.contains("active"));
    })

    header.appendChild(button);
}