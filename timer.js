function startdecompte(duree, affichage) {
    var decompte = duree, minutes, seconds;
    var rebours = setInterval(function () {
        minutes = parseInt(decompte / 60, 10);
        seconds = parseInt(decompte % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        affichage.textContent = minutes + ":" + seconds;

        if (--decompte < 0) {
            clearInterval(rebours);
        }
    }, 1000);
}

window.onload = function () {
    var duree = 5,
        affichage = document.querySelector('#time');
    startdecompte(duree, affichage);
};