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
function gradient(color1, color2) {
    return 'linear-gradient(135deg, '+color1+' 0%, '+color2+' 100%)';
}
var padData = [
    {
        color1: 'hsl(0, 100%, 50%)',
        color2: 'hsl(0, 100%, 30%)'
    },
    {
        color1: 'hsl(20, 100%, 50%)',
        color2: 'hsl(20, 100%, 30%)'
    },
    {
        color1: 'hsl(40, 100%, 50%)',
        color2: 'hsl(40, 100%, 30%)'
    },
    {
        color1: 'hsl(60, 100%, 50%)',
        color2: 'hsl(60, 100%, 30%)'
    },
    {
        color1: 'hsl(80, 100%, 50%)',
        color2: 'hsl(80, 100%, 30%)'
    },
    {
        color1: 'hsl(100, 100%, 50%)',
        color2: 'hsl(100, 100%, 30%)'
    },
    {
        color1: 'hsl(120, 100%, 50%)',
        color2: 'hsl(120, 100%, 30%)'
    },
    {
        color1: 'hsl(140, 100%, 50%)',
        color2: 'hsl(140, 100%, 30%)'
    },
    {
        color1: 'hsl(160, 100%, 50%)',
        color2: 'hsl(160, 100%, 30%)'
    },
    {
        color1: 'hsl(180, 100%, 50%)',
        color2: 'hsl(180, 100%, 30%)'
    },
    {
        color1: 'hsl(200, 100%, 50%)',
        color2: 'hsl(200, 100%, 30%)'
    },
    {
        color1: 'hsl(220, 100%, 50%)',
        color2: 'hsl(220, 100%, 30%)'
    },
    {
        color1: 'hsl(240, 100%, 50%)',
        color2: 'hsl(240, 100%, 30%)'
    },
    {
        color1: 'hsl(260, 100%, 50%)',
        color2: 'hsl(260, 100%, 30%)'
    },
    {
        color1: 'hsl(280, 100%, 50%)',
        color2: 'hsl(280, 100%, 30%)'
    },
    {
        color1: 'hsl(300, 100%, 50%)',
        color2: 'hsl(300, 100%, 30%)'
    },
];
function loadPads() {
    console.log(classes.pads[0].offsetHeight);
    for (var i = 0; i<classes.outerPad.length; i++) {
        classes.outerPad[i].style.height = classes.pads[0].offsetHeight/4.8+'px';
        classes.outerPad[i].style.width = classes.pads[0].offsetHeight/4.8+'px';
        classes.outerPad[i].style.background = gradient(padData[i].color1, padData[i].color2);
        console.log(gradient(padData[0].color1, gradient(padData[i].color2)));
    }
}
