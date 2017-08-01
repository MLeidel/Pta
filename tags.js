var atags = [{
	"tag": "ajson",
	"tagx": "var ajson = [\n	{\"\":\"\"},\n	{\"\":\"\"}\n	];\n"
}, {
	"tag": "a",
	"tagx": "<a href=\"\" id=\"\" target=\"_blank\">^</a>"
}, {
	"tag": "button",
	"tagx": "<input type=\"button\" id=\"\" value=\"^\">"
}, {
	"tag": "dbinc",
	"tagx": "require \"$_SERVER[DOCUMENT_ROOT]/inc_isites_db.php\";"
}, {
	"tag": "db",
	"tagx": "$db = new SQLite3('database');\n"
}, {
	"tag": "dbq",
	"tagx": "$results = $db->query($sql);\nwhile ($row = $results->fetchArray()) {\n\n}"
}, {
	"tag": "dbx",
	"tagx": "$db->exec($sql) or die('Insert/Update Failed<br>' . $sql);"
}, {
	"tag": "echo",
	"tagx": "<?php echo '^' ?>"
}, {
	"tag": "header",
	"tagx": "header(\"Location: ^\");"
}, {
	"tag": "html",
	"tagx": "<!DOCTYPE HTML>\n<html lang=\"en-US\">\n<head>\n	<meta charset=\"UTF-8\">\n	\<title>^</title>\n</head>\n<body>\n\n</body>\n</html>\n"
}, {
	"tag": "id",
	"tagx": "document.getElementById('^')"
}, {
	"tag": "input",
	"tagx": "<input type=\"search\" id=\"^\" value=\"\">"
}, {
	"tag": "jq",
	"tagx": "<script type=\"text/javascript\" src=\"http://mlsites.net/dev/jQmin.js\"></script>"
}, {
	"tag": "lbl",
	"tagx": "<label for=\"id\">^</label>"
}, {
	"tag": "link",
	"tagx": "<link rel=\"stylesheet\" href=\"^\" type=\"text/css\">"
}, {
	"tag": "php",
	"tagx": "<?php ^?>"
}, {
	"tag": "query",
	"tagx": '$res = mysqli_query($mysqli, $sql) or die("DIE:<br>".$sql);\n$row = mysqli_fetch_assoc($res);\nif (mysqli_num_rows($res) > 0) {\n	extract($row);\n}\n'
}, {
	"tag": "script2",
	"tagx": "<script type=\"text/javascript\" src=\"^\"><\/script>"
}, {
	"tag": "script",
	"tagx": "<script type=\"text/javascript\">^<\/script>"
}, {
	"tag": "style",
	"tagx": "<style	type=\"text/css\">^<\/style>"
}, {
	"tag": "table",
	"tagx": "<style type=\"text/css\">\ntable, th, td \{\n	border: 1px solid black;\n	margin: auto; /* center */\n}\n\</style>\n\n<table>\n	<tr>\n		<td>^ </td>\n		<td> </td>\n	</tr>\n	<tr>\n		\<td> </td>\n		<td> </td>\n	</tr>\n</table>\n"
}, {
	"tag": "ta",
	"tagx": "<textarea id=\"^\" rows=\"\" cols=\"\" wrap=\"off\"></textarea>"
}, {
	"tag": "tr",
	"tagx": "<tr>\n	<td>^</td>\n	<td></td>\n</tr>"
}, {
	"tag": "ul",
	"tagx": "<ul>\n <li></li>\n <li></li>\n <li></li>\n <li></li>\n</ul>\n"
}, {
	"tag": "xxxxx",
	"tagx": "xxxxx"
}, {
	"tag": "xxxxx",
	"tagx": "xxxxx"
}];