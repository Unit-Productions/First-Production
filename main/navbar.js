//Denne funktion kører, når "Play"-knappen aktiveres eller deaktiveres. Den skifter billedet og påbegynder run-through.
//t er en parameter. t står for this, som er selve knappen.
function pressPlay(t) {
    var bool = 'false';
    //data-state er et attribute som "Play"-knappen har. Hvis det er 'false', når den trykkes på, bliver bool ændret til 'true'.
    if (t.getAttribute('data-state')=='false') {
        bool = 'true';
    }
    //data-state får ny værdi: bool.
    t.setAttribute('data-state', bool);
    
    
    switch (bool) {
        //Hvis bool er 'true' ændres billedet til stop.
        case 'true':
            t.children[0].src = 'icons/Stop.png';
            for (var i = 0; i < classes.sliderDiv.length; i++) {
                for (var elem of classes.sliderDiv[i].children) {
                    elem.disabled = true;
                    console.log(elem);
                }
                
            }
            runThrough();
            break;
        //Hvis bool er 'false' ændres billedet til play.
        case 'false':
            t.children[0].src = 'icons/Play.png';
            Tone.Transport.cancel();
            if (classes.metronome[0].getAttribute('data-state') == 'true') {
                classes.metronome[0].children[0].src = 'icons/Metronome.png';
                leftorright = 'left';
            }
            //padFocus(classes.outerPad[formerFocus]);
            //console.log(classes.outerPad[formerFocus[0]]);
            //console.log(formerFocus[0]);
            setupClasses();
            padFocus(classes.current[0]);
            console.log(classes.current[0]);
            for (var i = 0; i < classes.sliderDiv.length; i++) {
                for (var elem of classes.sliderDiv[i].children) {
                    elem.disabled = false;
                    console.log(elem);
                }
                
            }
            break;
    }
    Tone.Transport.toggle();
}



function runThrough() {
    setCurrent(focusPad);
    //formerFocus = undefined;
    //formerFocus = Object.assign({}, focusPad.getAttribute('data-index'));
    //console.log(formerFocus);
    for (var i = 0; i < funcPadData.length; i++) {
        Tone.Transport.schedule(funcPadData[i], padData[i].time);
    }
    Tone.Transport.loopEnd = '1m';
    Tone.Transport.loop = true;
    
}
//Denne funktion kører, når metronomen-knappen bliver trykket.
//Den skifter billedet og aktiverer eller deaktiverer metronomen
//t er en parameter. t står for this, som er selve knappen. For mere information om koden, se pressPlay().
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
var leftorright = 'left';
function metroChange() {
    if (classes.metronome[0].getAttribute('data-state') == 'true') {
        switch (leftorright) {
            case 'left':
                classes.metronome[0].children[0].src = 'icons/Metronome_left.png';
                leftorright = 'right';
                break;
            case 'right':
                classes.metronome[0].children[0].src = 'icons/Metronome_right.png';
                leftorright = 'left';
                break;
        }
    }
    console.log(leftorright);
}
//Denne funktion kører, når "live"-knappen bliver trykket.
//Den skifter billedet og ændrer data-live for den valgte sequencer pad.
//t er en parameter. t står for this, som er selve knappen. For mere information om koden, se pressPlay().
function livePress(t) {
    var bool = 'false';
    if (t.getAttribute('data-state')=='false') {
        bool = 'true';
    }
    console.log(bool);
    t.setAttribute('data-state', bool);
    switch (bool) {
        case 'true':
            t.children[0].src = 'icons/Live.png';
            padData[focusPad.getAttribute('data-index')].live = true;
            break;
        case 'false':
            t.children[0].src = 'icons/Live_off.png';
            padData[focusPad.getAttribute('data-index')].live = false;
            break;
    }
    focusPad.setAttribute('data-live', bool);
}
function changeBPM(t) {
    console.log(t.value);
    if (isNaN(t.value)) {
        t.value = String(t.value).substring(0, String(t.value).length - 1);
    }
    if (t.value.length>3) {
        t.value = String(t.value).substring(0, String(t.value).length - 1);
    }
    if (t.value>999) {
        t.value = 999;
    }
    Tone.Transport.bpm.value = t.value;
}