﻿function $bindMethod(object,method){return function(){return method.apply(object,arguments);};}
function $window_addLoad(handler){if(window.addEventListener){window.addEventListener('load',handler,false);}
else if(document.addEventListener){document.addEventListener('load',handler,false);}
else if(window.attachEvent){window.attachEvent('onload',handler);}
else{if(typeof window.onload=='function'){var oldload=window.onload;window.onload=function(){oldload();handler();}}
else{window.onload=init;}}}
function $getElement(id,handler){var el=document.getElementById(id);return el;}
var Keys={Enter:13}
function $handleSearchEnterKey(id,handler){var el=$getElement(id);if(el){var delKeypress=function(e){var keyCode;if(e&&e.which){keyCode=e.which;}
else if(typeof(event)!='undefined'){keyCode=event.keyCode;}
if(keyCode==Keys.Enter){if(typeof(Page_ClientValidate)!='undefined'){if(Page_ClientValidate()==false){return;}}
handler();return false;}}
el.onkeypress=delKeypress;}}
