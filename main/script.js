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