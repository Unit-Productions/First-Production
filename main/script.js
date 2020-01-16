

//Denne funktion kører når siden loader, og ændrer på blandt andet pads'enes størrelse ud fra sidens højde.
function loadPads() {
    console.log(classes.pads[0].offsetHeight);
    //Gennemgår alle outerPads
    for (var i = 0; i<classes.outerPad.length; i++) {
        //Ændrer størrelse
        classes.outerPad[i].style.height = classes.pads[0].offsetHeight/4.8+'px';
        classes.outerPad[i].style.width = classes.pads[0].offsetHeight/4.8+'px';
        //Ændrer farven ud fra pitchToVal(padData
        classes.outerPad[i].style.background = gradient(toHSL(pitchToVal(padData[i].pitch)), toHSL(pitchToVal(padData[i].pitch), lenToVal(padData[i].len)));
        //Ændrer data-focus til 'false'
        classes.outerPad[i].setAttribute('data-focus', 'false');
        //Ændrer data-live til 'true'
        classes.outerPad[i].setAttribute('data-live', 'true');
        //Sætter onclick til funktionen padFocus(this)
        classes.outerPad[i].setAttribute('onclick', 'padFocus(this)');
        //Indexerer alle pads
        classes.outerPad[i].setAttribute('data-index', i);
    }
    padFocus(classes.outerPad[0]);
}
function reloadPads() {
    for (var i = 0; i<classes.outerPad.length; i++) {
        classes.outerPad[i].style.height = classes.pads[0].offsetHeight/4.8+'px';
        classes.outerPad[i].style.width = classes.pads[0].offsetHeight/4.8+'px';
        classes.outerPad[i].style.background = gradient(toHSL(pitchToVal(padData[i].pitch)), toHSL(pitchToVal(padData[i].pitch), lenToVal(padData[i].len)));
    }
}
function padFocus(t) {
    for (var i = 0; i<classes.outerPad.length; i++) {
        classes.outerPad[i].setAttribute('data-focus', 'false');
    }
    if (t.getAttribute('data-focus')=='false') {
        t.setAttribute('data-focus', 'true');
    }
    switch(t.getAttribute('data-live')) {
        case 'false':
            classes.liveButton[0].children[0].src = 'icons/Live_off.png';
            classes.liveButton[0].setAttribute('data-state', 'false');
            break;
        case 'true':
            classes.liveButton[0].children[0].src = 'icons/Live.png';
            classes.liveButton[0].setAttribute('data-state', 'true');
            break;
    }
    focusPad = t;
    classes.navbar[0].style.background = gradient(toHSL(pitchToVal(padData[t.getAttribute('data-index')].pitch)), toHSL(pitchToVal(padData[t.getAttribute('data-index')].pitch), lenToVal(padData[t.getAttribute('data-index')].len)));
    classes.lengthSlider[0].style.background = '-webkit-linear-gradient(left, black 0%, '+toHSL(pitchToVal(padData[t.getAttribute('data-index')].pitch))+'50%, white 100%)';
    classes.pitchIndic[0].innerHTML = padData[focusPad.getAttribute('data-index')].pitch;
    classes.pitchSlider[0].value = pitches.indexOf(padData[focusPad.getAttribute('data-index')].pitch);
    classes.lengthIndic[0].innerHTML = padData[focusPad.getAttribute('data-index')].len;
    classes.lengthSlider[0].value = padData[focusPad.getAttribute('data-index')].len;
}
function setCurrent(t) {
    for (var elem of classes.outerPad) {
        elem.classList.remove('current');
    }
    t.classList.add('current');
}