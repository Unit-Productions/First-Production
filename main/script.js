
//Denne funktion tager to farver, color1 og color2, og returnerer en string.
//Denne string er en linear-gradient ud fra de to farver.
function gradient(color1, color2) {
    return 'linear-gradient(135deg, '+color1+' 0%, '+color2+' 100%)';
}
//Dette er et array, der indeholder alle semitoner, der kan bruges i pitch.
//De er i rigtig rækkefølge.
var pitches = [
    'C3',
    'C#3',
    'D3',
    'D#3',
    'E3',
    'F3',
    'F#3',
    'G3',
    'G#3',
    'A3',
    'A#3',
    'B3',
    'C4',
    'C#4',
    'D4',
    'D#4',
    'E4',
    'F4',
    'F#4',
    'G4',
    'G#4',
    'A4',
    'A#4',
    'B4',
];
//Denne funktion tager hue og light og returnerer en string.
//Denne string indeholder hsl-kode ud fra hue og light.
//Hvis light ikke er defineret, bliver light 50%.
function toHSL(h, l) {
    if (l==undefined) {
        l = 50;
    }
    return 'hsl('+h+', 100%, '+l+'%)';
}
//Denne funktion tager en semitone og returnerer den passende light-værdi.
//Eksempel på brug: pitchToVal('D4') >>> 175
function pitchToVal(str) {
    return pitches.indexOf(str)*12.5;
}
//Dette er et array med objekter i.
//Hvert eneste array indeholder data om en sequencer pad, lige nu pitch og attack.
//Array'et er i rækkefølge.
//Eksempel på brug: padData[5].pitch >>> pitchToVal('A3') >>> 112.5
var padData = [
    {
        pitch: pitchToVal('C3'),
        attack: '30'
    },
    {
        pitch: pitchToVal('D3'),
        attack: '30'
    },
    {
        pitch: pitchToVal('E3'),
        attack: '30'
    },
    {
        pitch: pitchToVal('F3'),
        attack: '30'
    },
    {
        pitch: pitchToVal('G3'),
        attack: '30'
    },
    {
        pitch: pitchToVal('A3'),
        attack: '30'
    },
    {
        pitch: pitchToVal('B3'),
        attack: '30'
    },
    {
        pitch: pitchToVal('C4'),
        attack: '30'
    },
    {
        pitch: pitchToVal('D4'),
        attack: '30'
    },
    {
        pitch: pitchToVal('E4'),
        attack: '30'
    },
    {
        pitch: pitchToVal('F4'),
        attack: '30'
    },
    {
        pitch: pitchToVal('G4'),
        attack: '30'
    },
    {
        pitch: pitchToVal('A4'),
        attack: '30'
    },
    {
        pitch: pitchToVal('B4'),
        attack: '30'
    },
    {
        pitch: pitchToVal('A4'),
        attack: '30'
    },
    {
        pitch: pitchToVal('G4'),
        attack: '30'
    },
];
//Denne funktion kører når siden loader, og ændrer på blandt andet pads'enes størrelse ud fra sidens højde.
function loadPads() {
    console.log(classes.pads[0].offsetHeight);
    //Gennemgår alle outerPads
    for (var i = 0; i<classes.outerPad.length; i++) {
        //Ændrer størrelse
        classes.outerPad[i].style.height = classes.pads[0].offsetHeight/4.8+'px';
        classes.outerPad[i].style.width = classes.pads[0].offsetHeight/4.8+'px';
        //Ændrer farven ud fra padData
        classes.outerPad[i].style.background = gradient(toHSL(padData[i].pitch), toHSL(padData[i].pitch, padData[i].attack));
        //Ændrer data-focus til 'false'
        classes.outerPad[i].setAttribute('data-focus', 'false');
        //Ændrer data-live til 'true'
        classes.outerPad[i].setAttribute('data-live', 'true');
        //Sætter onclick til funktionen padFocus(this)
        classes.outerPad[i].setAttribute('onclick', 'padFocus(this)');
        //Indexerer alle pads
        classes.outerPad[i].setAttribute('data-index', i);
    }
    //Sætter fokus på den første pad
    classes.outerPad[0].setAttribute('data-focus', 'true');
    //Ændrer navbar's baggrund ud fra den første pad
    classes.navbar[0].style.background = gradient(toHSL(padData[0].pitch), toHSL(padData[0].pitch, padData[0].attack));
    //Live-button retter sig efter første pad
    switch(classes.outerPad[0].getAttribute('data-live')) {
        case 'false':
            classes.liveButton[0].children[0].src = 'icons/Live_off.png';
            classes.liveButton[0].setAttribute('data-state', 'false');
            break;
        case 'true':
            classes.liveButton[0].children[0].src = 'icons/Live.png';
            classes.liveButton[0].setAttribute('data-state', 'true');
            break;
    }
    //Første pad bliver focusPad
    focusPad = classes.outerPad[0];
}
function reloadPads() {
    for (var i = 0; i<classes.outerPad.length; i++) {
        classes.outerPad[i].style.height = classes.pads[0].offsetHeight/4.8+'px';
        classes.outerPad[i].style.width = classes.pads[0].offsetHeight/4.8+'px';
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
    classes.navbar[0].style.background = gradient(toHSL(padData[t.getAttribute('data-index')].pitch), toHSL(padData[t.getAttribute('data-index')].pitch, padData[t.getAttribute('data-index')].attack));
    
}
