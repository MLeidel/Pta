var Pta=Pta||{};
Pta.listeners={initialize:function(a){a=document.getElementById(a);Pta.listeners.setTabs(a);a.style.tabSize=4;Pta.listeners.setIndent(a);Pta.listeners.setJoinLines(a);Pta.listeners.setMatching(a);Pta.listeners.setDupChr(a);Pta.listeners.setZen(a);Pta.listeners.setLineNbr(a)},setTabs:function(a){a.addEventListener("keydown",function(b){if(9===b.keyCode&&!b.shiftKey){b.preventDefault();var e,f,d,g;d=a.selectionStart;g=a.selectionEnd;f=a.value;if(d===g)a.value=f.slice(0,d)+"\t"+f.slice(g),a.selectionStart=
d+1,a.selectionEnd=d+1;else{b=f.slice(d,g);var c;e=b;var h=0;for(c=0;c<e.length;c+=1)"\n"===e.charAt(c)&&(h+=1);c=h;if(10!==f.charCodeAt(g-1))for(e=b.length;;){c=a.selectionEnd;d=f.indexOf(b,c);g=d+e;if(0<=d)a.selectionStart=d,a.selectionEnd=g;else if(0<c){a.selectionStart=0;a.selectionEnd=0;continue}return}b=b.replace(/\s+$/g,"");b=b.replace(RegExp("\n","g"),"\n\t");e=f.slice(0,d);f=f.slice(g);a.value=e+"\t"+b+"\n"+f;a.selectionStart=d;a.selectionEnd=g+c}}});a.addEventListener("keydown",function(b){if(9===
b.keyCode&&b.shiftKey){b.preventDefault();var e,f,d;b=a.selectionStart;d=a.selectionEnd;f=a.value;if(b===d)e=f.slice(0,b-1),f=f.slice(b),a.value=e+f,a.selectionStart=b-1,a.selectionEnd=b-1;else{var g=f.slice(b,d),c;e=g;var h=0;for(c=0;c<e.length;c+=1)"\n"===e.charAt(c)&&(h+=1);c=h;32<g.charCodeAt(0)||(g=g.replace(RegExp("\n\t","g"),"\n"),e=f.slice(0,b),f=f.slice(d),a.value=e+g.slice(1)+f,a.selectionStart=b,a.selectionEnd=d-c)}}})},setJoinLines:function(a){a.addEventListener("keydown",function(b){if("j"===
String.fromCharCode(b.which).toLowerCase()&&b.altKey){b.preventDefault();var e,f,d,g;f=a.selectionStart;e=a.selectionEnd;d=a.value;g=d.slice(f,e);""===g?alert("No Lines Selected to Join"):(b=d.slice(0,f),e=d.slice(e),g=g.replace(/\n/g,""),a.value=b+g+e,a.selectionEnd=f)}})},setIndent:function(a){a.addEventListener("keydown",function(b){if(13===b.keyCode&&!b.ctrlKey){b.preventDefault();var e,f,d=a.value,g=a.selectionStart,c=a.selectionEnd;for(b=g-1;0<b&&10!==d.charCodeAt(b);--b);e=String.fromCharCode(10);
0<b&&(b+=1);for(f=d.charCodeAt(b);32===f||9===f;)e+=String.fromCharCode(f),b+=1,f=d.charCodeAt(b);a.value=d.slice(0,g)+e+d.slice(c);a.selectionStart=g+e.length;a.selectionEnd=g+e.length}})},setMatching:function(a){function b(){var d=a.value,b=a.selectionStart,c=d.charAt(b);if(0>"{(".indexOf(c)&&(--b,c=d.charAt(b),0>"})".indexOf(c)))return;"}"===c?e("}","{",b):"{"===c?f("{","}",b):")"===c?e(")","(",b):"("===c&&f("(",")",b)}function e(d,f,c){var b,e=0,l=a.value;for(--c;0<=c;--c)if(b=l.charAt(c),b===
f)if(0===e){a.selectionStart=c;break}else--e;else b===d&&(e+=1);0>c&&alert("Match not found")}function f(d,f,c){var b,e,l=0,m=a.value;e=m.length;for(c+=1;c<e;c+=1)if(b=m.charAt(c),b===f)if(0===l){a.selectionEnd=c+1;break}else--l;else b===d&&(l+=1);c>=e&&alert("Match not found")}a.addEventListener("keydown",function(a){"q"===String.fromCharCode(a.which).toLowerCase()&&a.altKey&&(a.preventDefault(),b())});a.addEventListener("click",function(a){a.ctrlKey&&(a.preventDefault(),b())})},setDupChr:function(a){a.addEventListener("keydown",
function(b){if("d"===String.fromCharCode(b.which).toLowerCase()&&b.altKey){b.preventDefault();var e;b=a.value;var f=a.selectionStart,d=a.selectionEnd,g=0;for(e=f-1;0<e&&(g+=1,10!==b.charCodeAt(e));--e);for(;0<e&&(--e,10!==b.charCodeAt(e)););10!==b.charCodeAt(e)&&--g;e=b.charAt(e+g);a.value=b.slice(0,f)+e+b.slice(d);a.selectionStart=f+1;a.selectionEnd=f+1}})},setZen:function(a){function b(f){var b,g,c,h,k,l;c=a.selectionStart;h=a.selectionEnd;k=a.value;l=k.slice(c,h);b=k.slice(0,c);g=k.slice(h);c===
h?alert("nothing selected"):(0===f?e=c=prompt("Enter tag abbreviation"):c=e,null!==c&&""!==c&&("/*"===c?(f="/* ",c=" */"):"<!"===c?(f="\x3c!-- ",c=" --\x3e"):(f="<"+c+">",c="</"+c+">"),k=b+f+l+c+g,a.value=k,a.selectionEnd=k.length-g.length,a.selectionStart=k.length-g.length))}var e="";a.addEventListener("keydown",function(b){if("z"===String.fromCharCode(b.which).toLowerCase()&&b.altKey){a:{var d,e,c,h,k;h=a.selectionStart;c=a.selectionEnd;d=a.value;k=d.slice(h,c);if(""===k){for(;c<d.length&&!(49>
d.charCodeAt(c));)c+=1;for(;0<h;)if(--h,49>d.charCodeAt(h)){h+=1;break}k=d.slice(h,c)}if(""===k)alert("No Key Word to Match");else{e=d.slice(0,h);c=d.slice(c);for(d=0;d<atags.length;d+=1)if(k===atags[d].tag){d=e+atags[d].tagx+c;h=d.indexOf("^",h);-1===h?(a.value=d,a.selectionEnd=d.length-c.length,a.selectionStart=d.length-c.length):(e=d.slice(0,h),c=d.slice(h+1),d=e+c,a.value=d,a.selectionEnd=h,a.selectionStart=h);break a}d=e+"<"+k+"></"+k+">"+c;h=d.indexOf("><",h);h+=1;a.value=d;a.selectionEnd=h;
a.selectionStart=h}}b.preventDefault()}});a.addEventListener("keydown",function(a){"a"===String.fromCharCode(a.which).toLowerCase()&&a.altKey&&(b(0),a.preventDefault())});a.addEventListener("keydown",function(a){"w"===String.fromCharCode(a.which).toLowerCase()&&a.altKey&&(b(1),a.preventDefault())})},setLineNbr:function(a){var b="",e;a.addEventListener("keydown",function(f){if("l"===String.fromCharCode(f.which).toLowerCase()&&f.altKey)if(f.preventDefault(),""===b){e="1\t\t";f=2;var d,g,c,h=a.value;
b=h;for(d=0;d<h.length-1;d+=1)if(g=h.charAt(d),"\n"===g){for(c=f.toString();4>c.length;)c+=" ";e+=g+c+"\t\t";f+=1}else e+=g;a.value=e;a.readOnly=!0}else a.readOnly=!1,a.value=b,b=""})}};
Pta.findr={findText:function(a,b){if(2!==arguments.length)alert("missing arguments for findText");else{var e=document.getElementById(a),f=document.getElementById(b),d;d=f.value.length;var g=e.selectionEnd,f=e.value.indexOf(f.value,g);d=f+d;0<=f?(e.selectionStart=f,e.selectionEnd=d):0<g&&(e.selectionStart=0,e.selectionEnd=0,Pta.findr.findText(a,b))}},replaceOne:function(a,b,e){if(3!==arguments.length)alert("missing arguments for findText");else{var f=document.getElementById(a),d=document.getElementById(e);
Pta.findr.findText(a,b);var g,c,h;h=f.value;g=f.selectionStart;c=f.selectionEnd;g===c?alert("No More to replace"):(g=h.slice(0,g),c=h.slice(c),h=g+d.value+c,f.value=h,f.selectionStart=h.length-c.length,f.selectionEnd=h.length-c.length,f.focus())}},replaceAll:function(a,b,e){if(3!==arguments.length)alert("missing arguments for findText");else{var f=document.getElementById(a),d=document.getElementById(b),g=document.getElementById(e),c=f.value,c=c.replace(new RegExp(d.value,"g"),g.value);f.value=c;f.focus()}}};
Pta.insClip=function(a,b){var e=document.getElementById(a),f=e.value,d=e.selectionStart,g=f.slice(0,d),f=f.slice(d);e.value=g+b+f;e.selectionEnd=d+b.length;e.focus()};
