const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;


// =========================
// BUKA UCAPAN
// =========================

function openBirthday() {

    // Sembunyikan halaman pembuka
    opening.classList.add("hide");

    // Tampilkan halaman utama
    setTimeout(() => {

        opening.style.display = "none";

        mainContent.classList.add("show");

        // Jalankan musik
        music.play()
            .then(() => {
                musicPlaying = true;
                musicButton.innerHTML = "🔊";
            })
            .catch((error) => {
                console.log("Musik belum bisa diputar:", error);
            });

        // Jalankan confetti
        showConfetti();

    }, 800);
}


// =========================
// TOMBOL MUSIK
// =========================

function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicButton.innerHTML = "🔇";

    } else {

        music.play()
            .then(() => {

                musicPlaying = true;

                musicButton.innerHTML = "🔊";

            })
            .catch((error) => {

                console.log("Musik gagal diputar:", error);

            });
    }
}


// =========================
// CONFETTI
// =========================

function showConfetti() {

    const container =
        document.getElementById("confetti-container");

    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");
        const colors = [
    "#ff6fae",
    "#ffd166",
    "#06d6a0",
    "#4cc9f0",
    "#a66cff"
];

confetti.style.background =
    colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        const size =
            Math.random() * 8 + 5;

        confetti.style.width = size + "px";
        confetti.style.height = size * 1.5 + "px";

        container.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);
    }
}