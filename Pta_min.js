var Pta=Pta||{};
Pta.listeners={initialize:function(a){a=document.getElementById(a);Pta.listeners.setKeys(a);Pta.listeners.setTabs(a);a.style.tabSize=4;Pta.listeners.setIndent(a);Pta.listeners.setJoinLines(a);Pta.listeners.setMatching(a);Pta.listeners.setDupChr(a);Pta.listeners.setZen(a);Pta.listeners.setLineNbr(a)},setKeys:function(a){function b(b){var d=a.value,g=a.selectionStart,c=d.slice(0,g),d=d.slice(g);a.value=c+b+d;a.selectionEnd=g+b.length;a.focus()}a.addEventListener("keydown",function(a){13===a.keyCode&&
a.altKey?(a.preventDefault(),b("<br>")):32===a.keyCode&&a.ctrlKey?(a.preventDefault(),b("&nbsp;")):"c"===String.fromCharCode(a.which).toLowerCase()&&a.altKey&&(a.preventDefault(),b("\x3c!--\t--\x3e"))})},setTabs:function(a){a.addEventListener("keydown",function(b){if(9===b.keyCode&&!b.shiftKey){b.preventDefault();var e,d,g=a.selectionStart,c=a.selectionEnd;d=a.value;if(g===c)a.value=d.slice(0,g)+"\t"+d.slice(c),a.selectionStart=g+1,a.selectionEnd=g+1;else{b=d.slice(g,c);var f;e=b;var h=0;for(f=0;f<
e.length;f+=1)"\n"===e.charAt(f)&&(h+=1);f=h;if(10!==d.charCodeAt(c-1))for(e=b.length;;){f=a.selectionEnd;g=d.indexOf(b,f);c=g+e;if(0<=g)a.selectionStart=g,a.selectionEnd=c;else if(0<f){a.selectionStart=0;a.selectionEnd=0;continue}return}b=b.replace(/\s+$/g,"");b=b.replace(RegExp("\n","g"),"\n\t");e=d.slice(0,g);d=d.slice(c);a.value=e+"\t"+b+"\n"+d;a.selectionStart=g;a.selectionEnd=c+f}}});a.addEventListener("keydown",function(b){if(9===b.keyCode&&b.shiftKey){b.preventDefault();var e,d;b=a.selectionStart;
var g=a.selectionEnd;d=a.value;if(b===g)e=d.slice(0,b-1),d=d.slice(b),a.value=e+d,a.selectionStart=b-1,a.selectionEnd=b-1;else{var c=d.slice(b,g),f;e=c;var h=0;for(f=0;f<e.length;f+=1)"\n"===e.charAt(f)&&(h+=1);f=h;32<c.charCodeAt(0)||(c=c.replace(RegExp("\n\t","g"),"\n"),e=d.slice(0,b),d=d.slice(g),a.value=e+c.slice(1)+d,a.selectionStart=b,a.selectionEnd=g-f)}}})},setJoinLines:function(a){a.addEventListener("keydown",function(b){if("j"===String.fromCharCode(b.which).toLowerCase()&&b.altKey){b.preventDefault();
var e,d=a.selectionStart;e=a.selectionEnd;var g=a.value,c=g.slice(d,e);""===c?alert("No Lines Selected to Join"):(b=g.slice(0,d),e=g.slice(e),c=c.replace(/\n/g,""),a.value=b+c+e,a.selectionEnd=d)}})},setIndent:function(a){a.addEventListener("keydown",function(b){if(13===b.keyCode&&!b.ctrlKey){b.preventDefault();var e,d,g=a.value,c=a.selectionStart,f=a.selectionEnd;for(b=c-1;0<b&&10!==g.charCodeAt(b);--b);e=String.fromCharCode(10);0<b&&(b+=1);for(d=g.charCodeAt(b);32===d||9===d;)e+=String.fromCharCode(d),
b+=1,d=g.charCodeAt(b);a.value=g.slice(0,c)+e+g.slice(f);a.selectionStart=c+e.length;a.selectionEnd=c+e.length}})},setMatching:function(a){function b(d,g,c){var b,e=0,k=a.value;for(--c;0<=c;--c)if(b=k.charAt(c),b===g)if(0===e){a.selectionStart=c;break}else--e;else b===d&&(e+=1);0>c&&alert("Match not found")}function e(d,b,c){var f,e,k=0,l=a.value;e=l.length;for(c+=1;c<e;c+=1)if(f=l.charAt(c),f===b)if(0===k){a.selectionEnd=c+1;break}else--k;else f===d&&(k+=1);c>=e&&alert("Match not found")}a.addEventListener("keydown",
function(d){if("q"===String.fromCharCode(d.which).toLowerCase()&&d.altKey)a:{d.preventDefault(),d=a.value;var g=a.selectionStart,c=d.charAt(g);if(0>"{(".indexOf(c)&&(--g,c=d.charAt(g),0>"})".indexOf(c)))break a;"}"===c?b("}","{",g):"{"===c?e("{","}",g):")"===c?b(")","(",g):"("===c&&e("(",")",g)}})},setDupChr:function(a){a.addEventListener("keydown",function(b){if("d"===String.fromCharCode(b.which).toLowerCase()&&b.altKey){b.preventDefault();var e;b=a.value;var d=a.selectionStart,g=a.selectionEnd,
c=0;for(e=d-1;0<e&&(c+=1,10!==b.charCodeAt(e));--e);for(;0<e&&(--e,10!==b.charCodeAt(e)););10!==b.charCodeAt(e)&&--c;e=b.charAt(e+c);a.value=b.slice(0,d)+e+b.slice(g);a.selectionStart=d+1;a.selectionEnd=d+1}})},setZen:function(a){function b(d){var b,c,f;f=a.selectionStart;var h=a.selectionEnd,k=a.value,l=k.slice(f,h);b=k.slice(0,f);c=k.slice(h);f===h?alert("nothing selected"):(0===d?e=f=prompt("Enter tag abbreviation"):f=e,null!==f&&""!==f&&("/*"===f?(d="/* ",f=" */"):"<!"===f?(d="\x3c!-- ",f=" --\x3e"):
(d="<"+f+">",f="</"+f+">"),k=b+d+l+f+c,a.value=k,a.selectionEnd=k.length-c.length,a.selectionStart=k.length-c.length))}var e="";a.addEventListener("keydown",function(d){if("z"===String.fromCharCode(d.which).toLowerCase()&&d.altKey){a:{var b,c,e,h=a.selectionStart;e=a.selectionEnd;b=a.value;var k=b.slice(h,e);c=0;if(""===k){for(;e<b.length&&!(65>b.charCodeAt(e));)e+=1;for(;0<h;)if(--h,65>b.charCodeAt(h)){h+=1;break}k=b.slice(h,e)}if(""===k)alert("No Key Word to Match");else{c=b.slice(0,h);e=b.slice(e);
for(b=0;b<atags.length;b+=1)if(k===atags[b].tag){b=c+atags[b].tagx+e;c=b.indexOf("^",h);-1===c?(a.value=b,a.selectionEnd=b.length-e.length,a.selectionStart=b.length-e.length):(a.value=b.replace(/\^/,""),a.selectionEnd=c,a.selectionStart=c);break a}b=c+"<"+k+"></"+k+">"+e;c=b.indexOf("><",h);c+=1;a.value=b;a.selectionEnd=c;a.selectionStart=c}}d.preventDefault()}});a.addEventListener("keydown",function(a){"a"===String.fromCharCode(a.which).toLowerCase()&&a.altKey&&(b(0),a.preventDefault())});a.addEventListener("keydown",
function(a){"w"===String.fromCharCode(a.which).toLowerCase()&&a.altKey&&(b(1),a.preventDefault())})},setLineNbr:function(a){var b="",e;a.addEventListener("keydown",function(d){if("l"===String.fromCharCode(d.which).toLowerCase()&&d.altKey){d.preventDefault();if(""===b){e="1\t\t";d=2;var g,c,f,h=a.value;b=h;for(g=0;g<h.length-1;g+=1)if(c=h.charAt(g),"\n"===c){for(f=d.toString();4>f.length;)f+=" ";e+=c+f+"\t\t";d+=1}else e+=c}else e=b,b="";a.value=e}})}};
Pta.findr={findText:function(a,b){if(2!==arguments.length)alert("missing arguments for findText");else{var e=document.getElementById(a),d=document.getElementById(b),g;g=d.value.length;var c=e.selectionEnd,d=e.value.indexOf(d.value,c);g=d+g;0<=d?(e.selectionStart=d,e.selectionEnd=g):0<c&&(e.selectionStart=0,e.selectionEnd=0,Pta.findr.findText(a,b))}},replaceOne:function(a,b,e){if(3!==arguments.length)alert("missing arguments for findText");else{var d=document.getElementById(a),g=document.getElementById(e);
Pta.findr.findText(a,b);var c,f,h=d.value;c=d.selectionStart;f=d.selectionEnd;c===f?alert("No More to replace"):(c=h.slice(0,c),f=h.slice(f),h=c+g.value+f,d.value=h,d.selectionStart=h.length-f.length,d.selectionEnd=h.length-f.length,d.focus())}},replaceAll:function(a,b,e){if(3!==arguments.length)alert("missing arguments for findText");else{var d=document.getElementById(a),g=document.getElementById(b),c=document.getElementById(e),f=d.value,f=f.replace(new RegExp(g.value,"g"),c.value);d.value=f;d.focus()}}};