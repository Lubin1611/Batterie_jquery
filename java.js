var playlist = document.querySelectorAll("audio");


$(document).on('keydown', touche);

function touche(e) {


    if (e.keyCode == 65) {

        playlist[0].play();

        $('[data-key = 65]').addClass("playing");
        setTimeout(function () {
            $('[data-key = 65]').removeClass('playing');
        }, 100);

    }
    if (e.keyCode == 83) {

        playlist[1].play();

        $('[data-key = 83]').addClass("playing");
        setTimeout(function () {
            $('[data-key = 83]').removeClass('playing');
        }, 100);

    }
    if (e.keyCode == 68) {

        playlist[2].play();

        $('[data-key = 68]').addClass("playing");
        setTimeout(function () {
            $('[data-key = 68]').removeClass('playing');
        }, 100);

    }
    if (e.keyCode == 70) {

        playlist[3].play();

        $('[data-key = 70]').addClass("playing");
        setTimeout(function () {
            $('[data-key = 70]').removeClass('playing');
        }, 100);


    }
    if (e.keyCode == 71) {

        playlist[4].play();

        $('[data-key = 71]').addClass("playing");
        setTimeout(function () {
            $('[data-key = 71]').removeClass('playing');
        }, 100);

    }
    if (e.keyCode == 72) {

        playlist[5].play();

        $('[data-key = 72]').addClass("playing");
        setTimeout(function () {
            $('[data-key = 72]').removeClass('playing');
        }, 100);

    }
    if (e.keyCode == 74) {

        playlist[6].play();

        $('[data-key = 74]').addClass("playing");
        setTimeout(function () {
            $('[data-key = 74]').removeClass('playing');
        }, 100);
    }
    if (e.keyCode == 75) {

        playlist[7].play();

        $('[data-key = 75]').addClass("playing");
        setTimeout(function () {
            $('[data-key = 75]').removeClass('playing');
        }, 100);

    }
    if (e.keyCode == 76) {

        playlist[8].play();

        $('[data-key = 76]').addClass("playing");
        setTimeout(function () {
            $('[data-key = 76]').removeClass('playing');
        }, 100);

    }
}

