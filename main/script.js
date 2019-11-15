function pressPlay(t) {
    var bool = 'false';
    if (t.getAttribute('data-state')=='false') {
        bool = 'true';
    }
    t.setAttribute('data-state', bool);
    switch (bool) {
        case 'true':
            t.children[0].src = 'icons/Stop.png';
            break;
        case 'false':
            t.children[0].src = 'icons/Play.png';
    }
}
function metroPress(t) {
    var bool2 = 'false';
    if (t.getAttribute('data-state')=='false') {
        bool2 = 'true';
    }
    t.setAttribute('data-state', bool2);
    switch (bool2) {
        case 'true':
            t.children[0].src = 'icons/Metronome.png';
            break;
        case 'false':
            t.children[0].src = 'icons/Metronome_off.png';
    }
}