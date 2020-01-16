
var synth = new Tone.Synth().toMaster();
Tone.Transport.bpm.value = 120;
var focusPad;
synth.oscillator.partialCount = 30;
synth.oscillator.sourceType = 'fm';
synth.oscillator.baseType = 'sine';
synth.envelope.attack = 0;
synth.envelope.release = 0.1;
//Gennemgår DOM for at finde alle classes brugt.
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
//Indsætter i et object, der kan bruges til hurtigt at finde alle classes.
//Eksempel på brug: classes.navbar[0];
var classes = {};
for (var name in classNames) {
    classes[name] = document.getElementsByClassName(name);
}
function setupClasses() {
    //Gennemgår DOM for at finde alle classes brugt.
    allTags = document.body.getElementsByTagName('*');
    classNames = {};
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
    //Indsætter i et object, der kan bruges til hurtigt at finde alle classes.
    //Eksempel på brug: classes.navbar[0];
    classes = {};
    for (var name in classNames) {
        classes[name] = document.getElementsByClassName(name);
    }
}
setupClasses();
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
var baseTypes = [
    'Sine',
    'Square',
    'Triangle',
    'Sawtooth'
];
var sourceTypes = [
    'FM',
    'AM',
    'Fat'
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
function valToLength(val) {
    return 60/classes.bpm[0].value*val/4;
}
function lenToVal(val) {
    return (val-1)*(100/15);
}
//Dette er et array med objekter i.
//Hvert eneste objekt indeholder data om en sequencer pad, lige nu pitch og attack.
//Array'et er i rækkefølge.
//Eksempel på brug: padData[5].pitch >>> pitchToVal('A3') >>> 112.5
var padData = [
    {
        pitch: 'C3',
        len: 1,
        time: '0:0:0',
        live: true
    },
    {
        pitch: 'D3',
        len: 1,
        time: '0:0:1',
        live: true
    },
    {
        pitch: 'E3',
        len: 1,
        time: '0:0:2',
        live: true
    },
    {
        pitch: 'F3',
        len: 1,
        time: '0:0:3',
        live: true
    },
    {
        pitch: 'G3',
        len: 1,
        time: '0:0:4',
        live: true
    },
    {
        pitch: 'A3',
        len: 1,
        time: '0:0:5',
        live: true
    },
    {
        pitch: 'B3',
        len: 1,
        time: '0:0:6',
        live: true
    },
    {
        pitch: 'C4',
        len: 1,
        time: '0:0:7',
        live: true
    },
    {
        pitch: 'D4',
        len: 1,
        time: '0:0:8',
        live: true
    },
    {
        pitch: 'E4',
        len: 1,
        time: '0:0:9',
        live: true
    },
    {
        pitch: 'F4',
        len: 1,
        time: '0:0:10',
        live: true
    },
    {
        pitch: 'G4',
        len: 1,
        time: '0:0:11',
        live: true
    },
    {
        pitch: 'A4',
        len: 1,
        time: '0:0:12',
        live: true
    },
    {
        pitch: 'B4',
        len: 1,
        time: '0:0:13',
        live: true
    },
    {
        pitch: 'A4',
        len: 1,
        time: '0:0:14',
        live: true
    },
    {
        pitch: 'G4',
        len: 1,
        time: '0:0:15',
        live: true
    },
];
var funcPadData = [
    function(time) {
        if (padData[0].live) {
            synth.triggerAttackRelease(padData[0].pitch, valToLength(padData[0].len), time);
        }
        runFocus(0);
        metroChange();
        console.log(valToLength(padData[0].len));
        console.log(padData[0].pitch)
    },
    function(time) {
        if (padData[1].live) {
            synth.triggerAttackRelease(padData[1].pitch, valToLength(padData[1].len), time);
        }
        runFocus(1);
        console.log(padData[1].pitch)
    },
    function(time) {
        if (padData[2].live) {
            synth.triggerAttackRelease(padData[2].pitch, valToLength(padData[2].len), time);
        }
        runFocus(2);
        console.log(padData[2].pitch)
    },
    function(time) {
        if (padData[3].live) {
            synth.triggerAttackRelease(padData[3].pitch, valToLength(padData[3].len), time);
        }
        runFocus(3);
        console.log(padData[3].pitch)
    },
    function(time) {
        if (padData[4].live) {
            synth.triggerAttackRelease(padData[4].pitch, valToLength(padData[4].len), time);
        }
        runFocus(4);
        metroChange();
        console.log(padData[4].pitch)
    },
    function(time) {
        if (padData[5].live) {
            synth.triggerAttackRelease(padData[5].pitch, valToLength(padData[5].len), time);
        }
        runFocus(5);
        console.log(padData[5].pitch)
    },
    function(time) {
        if (padData[6].live) {
            synth.triggerAttackRelease(padData[6].pitch, valToLength(padData[6].len), time);
        }
        runFocus(6);
        console.log(padData[6].pitch)
    },
    function(time) {
        if (padData[7].live) {
            synth.triggerAttackRelease(padData[7].pitch, valToLength(padData[7].len), time);
        }
        runFocus(7);
        console.log(padData[7].pitch)
    },
    function(time) {
        if (padData[8].live) {
            synth.triggerAttackRelease(padData[8].pitch, valToLength(padData[8].len), time);
        }
        runFocus(8);
        metroChange();
        console.log(padData[8].pitch)
    },
    function(time) {
        if (padData[9].live) {
            synth.triggerAttackRelease(padData[9].pitch, valToLength(padData[9].len), time);
        }
        runFocus(9);
        console.log(padData[9].pitch)
    },
    function(time) {
        if (padData[10].live) {
            synth.triggerAttackRelease(padData[10].pitch, valToLength(padData[10].len), time);
        }
        runFocus(10);
        console.log(padData[10].pitch)
    },
    function(time) {
        if (padData[11].live) {
            synth.triggerAttackRelease(padData[11].pitch, valToLength(padData[11].len), time);
        }
        runFocus(11);
        console.log(padData[11].pitch)
    },
    function(time) {
        if (padData[12].live) {
            synth.triggerAttackRelease(padData[12].pitch, valToLength(padData[12].len), time);
        }
        runFocus(12);
        metroChange();
        console.log(padData[12].pitch)
    },
    function(time) {
        if (padData[13].live) {
            synth.triggerAttackRelease(padData[13].pitch, valToLength(padData[13].len), time);
        }
        runFocus(13);
        console.log(padData[13].pitch)
    },
    function(time) {
        if (padData[14].live) {
            synth.triggerAttackRelease(padData[14].pitch, valToLength(padData[14].len), time);
        }
        runFocus(14);
        console.log(padData[14].pitch)
    },
    function(time) {
        if (padData[15].live) {
            synth.triggerAttackRelease(padData[15].pitch, valToLength(padData[15].len), time);
        }
        runFocus(15);
        console.log(padData[15].pitch)
    },
];
function mainInput(e) {
    if (e.code == 'Space') {
        pressPlay(classes.playButton[0]);
    }
    if (e.code == 'KeyL') {
        livePress(classes.liveButton[0]);
    }
}
function runFocus(index) {
    for (var elem of classes.outerPad) {
        elem.classList.remove('run');
        elem.setAttribute('data-focus', 'false');
    }
    //classes.whitePad[index].classList.add('run');
    //classes.outerPad[index].setAttribute('data-focus', 'true');
    padFocus(classes.outerPad[index]);
}
function pitchChange(t) {
    classes.pitchIndic[0].innerHTML = pitches[t.value];
    padData[focusPad.getAttribute('data-index')].pitch = pitches[t.value];
    reloadPads();
    padFocus(focusPad);
    synth.triggerAttackRelease(pitches[t.value], 0.1);
}
function lengthChange(t) {
    classes.lengthIndic[0].innerHTML = t.value;
    padData[focusPad.getAttribute('data-index')].len = t.value;
    reloadPads();
    padFocus(focusPad);
}
function freqChange(t) {
    synth.oscillator.partialCount = t.value;
    classes.freqIndic[0].innerHTML = t.value;
    console.log(synth.volume);
}
function baseTypeChange(t) {
    synth.oscillator.baseType = baseTypes[t.value];
    synth.triggerAttackRelease(pitches[focusPad.getAttribute('data-index')], 0.1);
}
function triggerStart() {
    synth.triggerAttack(pitches[focusPad.getAttribute('data-index')]);
}
function triggerEnd() {
    synth.triggerRelease();
}
function sourceDown() {
    if (sourceTypes[Number(classes.source[0].getAttribute('data-value'))-1]) {
        classes.source[0].setAttribute('data-value', Number(classes.source[0].getAttribute('data-value'))-1);
        classes.source[0].innerHTML = sourceTypes[Number(classes.source[0].getAttribute('data-value'))];
        synth.oscillator.sourceType = sourceTypes[Number(classes.source[0].getAttribute('data-value'))].toLowerCase();
        console.log(synth.oscillator.sourceType);
    }
    
}
function sourceUp() {
    if (sourceTypes[Number(classes.source[0].getAttribute('data-value'))+1]) {
        classes.source[0].setAttribute('data-value', Number(classes.source[0].getAttribute('data-value'))+1);
        classes.source[0].innerHTML = sourceTypes[Number(classes.source[0].getAttribute('data-value'))];
        synth.oscillator.sourceType = sourceTypes[Number(classes.source[0].getAttribute('data-value'))].toLowerCase();
        console.log(synth.oscillator.sourceType);
    }
}
function baseDown() {
    if (baseTypes[Number(classes.base[0].getAttribute('data-value'))-1]) {
        classes.base[0].setAttribute('data-value', Number(classes.base[0].getAttribute('data-value'))-1);
        classes.base[0].innerHTML = baseTypes[Number(classes.base[0].getAttribute('data-value'))];
        synth.oscillator.baseType = baseTypes[Number(classes.base[0].getAttribute('data-value'))].toLowerCase();
    }
    
}
function baseUp() {
    if (baseTypes[Number(classes.base[0].getAttribute('data-value'))+1]) {
        classes.base[0].setAttribute('data-value', Number(classes.base[0].getAttribute('data-value'))+1);
        classes.base[0].innerHTML = baseTypes[Number(classes.base[0].getAttribute('data-value'))];
        synth.oscillator.baseType = baseTypes[Number(classes.base[0].getAttribute('data-value'))].toLowerCase();
    }
}
function attackChange(t) {
    synth.envelope.attack = t.value;
    classes.attackIndic[0].innerHTML = t.value;
    synth.triggerAttackRelease(pitches[focusPad.getAttribute('data-index')], 0.1);
}
function releaseChange(t) {
    synth.envelope.release = t.value;
    classes.releaseIndic[0].innerHTML = t.value;
    synth.triggerAttackRelease(pitches[focusPad.getAttribute('data-index')], 0.1);
}