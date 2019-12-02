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
