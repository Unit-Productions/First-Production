var allTags = document.body.getElementsByTagName('*');
var classNames = {};
for (var tg = 0; tg< allTags.length; tg++) {
    var tag = allTags[tg];
    if (tag.className) {
      var clsses = tag.className.split(" ");
	for (var cn = 0; cn < clsses.length; cn++){
	  var cName = clsses[cn];
	  if (! classNames[cName]) {
	    classNames[cName] = true;
	  }
	}
    }   
}
var classList = [];
for (var name in classNames) classList.push(name);

classes = {};
for (var clss of classList) {
    classes[clss] = document.getElementsByClassName(clss);
}
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
    var bool = 'false';
    if (t.getAttribute('data-state')=='false') {
        bool = 'true';
    }
    t.setAttribute('data-state', bool);
    switch (bool) {
        case 'true':
            t.children[0].src = 'icons/Metronome.png';
            break;
        case 'false':
            t.children[0].src = 'icons/Metronome_off.png';
    }
}
function livePress(t) {
    var bool = 'false';
    if (t.getAttribute('data-state')=='false') {
        bool = 'true';
    }
    t.setAttribute('data-state', bool);
    switch (bool) {
        case 'true':
            t.children[0].src = 'icons/Live.png';
            break;
        case 'false':
            t.children[0].src = 'icons/Live_off.png';
    }
}
function gradient(color1, color2) {
    return 'linear-gradient(135deg, '+color1+' 0%, '+color2+' 100%)';
}
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
function toHSL(h, l) {
    if (l==undefined) {
        return 'hsl('+h+', 100%, 50%)';
    }
    return 'hsl('+h+', 100%, '+l+'%)';
}
function pitchToVal(str) {
    return pitches.indexOf(str)*12.5;
}
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
function loadPads() {
    console.log(classes.pads[0].offsetHeight);
    for (var i = 0; i<classes.outerPad.length; i++) {
        classes.outerPad[i].style.height = classes.pads[0].offsetHeight/4.8+'px';
        classes.outerPad[i].style.width = classes.pads[0].offsetHeight/4.8+'px';
        classes.outerPad[i].style.background = gradient(toHSL(padData[i].pitch), toHSL(padData[i].pitch, padData[i].attack));
        classes.outerPad[i].setAttribute('data-focus', 'false');
        classes.outerPad[i].setAttribute('data-live', 'true');
        classes.outerPad[i].setAttribute('onclick', 'padFocus(this)');
        classes.outerPad[i].setAttribute('data-index', i);
    }
    classes.outerPad[0].setAttribute('data-focus', 'true');
    classes.navbar[0].style.background = gradient(toHSL(padData[0].pitch), toHSL(padData[0].pitch, padData[0].attack));
    switch(classes.outerPad[0].getAttribute('data-live')) {
        case 'false':
            classes.liveButton[0].children[0].src = 'icons/Live_off.png';
            break;
        case 'true':
            classes.liveButton[0].children[0].src = 'icons/Live.png';
            break;
    }
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
            break;
        case 'true':
            classes.liveButton[0].children[0].src = 'icons/Live.png';
            break;
    }
    classes.navbar[0].style.background = gradient(toHSL(padData[t.getAttribute('data-index')].pitch), toHSL(padData[t.getAttribute('data-index')].pitch, padData[t.getAttribute('data-index')].attack));

}
