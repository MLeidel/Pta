var whnd;
function render(sid) {
	if ( !(whnd == null) && !(whnd.closed) ) whnd.document.close();
	whnd = open('', 'blank', 'toolbar=no,location=no,status=no,menubar=no, \
		scrollbars=yes,resizable=yes,width=320,height=480,screenX=100,screenY=100'); 
	whnd.document.write(document.getElementById(sid).value);
}
window.onbeforeunload = confirmExit;
function confirmExit()
{
	return "You have attempted to leave this page.";
}
