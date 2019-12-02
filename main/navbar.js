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
            break;
        //Hvis bool er 'false' ændres billedet til play.
        case 'false':
            t.children[0].src = 'icons/Play.png';
            break;
    }
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
            break;
        case 'false':
            t.children[0].src = 'icons/Live_off.png';
            break;
    }
    focusPad.setAttribute('data-live', bool);
}
function changeBPM(t) {
    console.log(t.value);
    if (isNaN(t.value)) {
        t.value = 0;
    }
    if (t.value.length>3) {
        t.value
    }
    if (t.value.split('').includes('-')) {
        t.value = 0;
    }
}