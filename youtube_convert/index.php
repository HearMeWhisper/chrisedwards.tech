<?php
//str_replace(' ', '_', $name);
$URL = $_POST["url"];
$DIR = str_replace(' ', '_', $_POST["dir"]);
$TYPE = $_POST["type"];
 //system(`/var/www/html/youtube.sh'. $URL. $DIR.' > /ftp/youtube/log`, $out);
 exec("sh /var/www/chrisedwards.tech/youtube_convert/youtube.sh $URL $DIR $TYPE; echo $URL+$DIR+$TYPE > /home/chrisserver/youtube_log");
$dir = "/var/www/chrisedwards.tech/youtube/";
$DIR = "";
$TYPE = "null";
echo '
<!DOCTYPE html>
<html>
<head>
  <meta name="theme-color" content="#bb0000">
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="stylesheet" type="text/css" href="/menu/menu.css" />
<title>YouTube Music</title>
<style>
body {background-color:#8f98a8; color:white; height: 100%}
</style>
</head>
<body onload="">
<div id="navContainer">
</div>
<script defer src="/menu/menu.js"></script> 
<script defer data-domain="chrisedwards.tech" src="https://metric1.chrisedwards.tech/js/plausible.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
<script language="javascript">

function reload(){

  console.log("reload run");

    document.getElementById("ftp_page").contentWindow.location = "../youtube/";

}


</script>
<div style="text-align: center; width:47%; margin:auto;">
<br />
<h2 style="margin:auto; text-align:center; font-size: 85%">
Take a youtube URL and convert it into an mp3 or mp4 video, in its highest quality. <br/>
Files will be erased every hour from when they are created
</h2>
<button style="box-shadow: 7px 5px 2.5px #5F5F5F;" onclick="reload()">Refresh Download Box</button>
</div>
<div style="margin:auto; width:47%;">
<form  style="margin:auto; text-align:center;  " method="post" action="index.php
';
//$OUTPUT = system(`/var/www/html/hearmewhisper.ddns.net/youtube.sh'. $URL.' > /ftp/youtube/log`, $out);
//shell_exec("/var/www/html/hearmewhisper.ddns.net/youtube.sh  $DIR $URL");
echo ' "><h4>URL of Video: </h4><input required="" style="box-shadow: 7px 5px 2.5px #5F5F5F;" autocomplete="off" type="text" size="13" name="url">  <span style="white-space: nowrap">
<br /><input type="checkbox" name="type" value="--extract-audio" checked> Audio Only</span><br>
  <h4>Folder: </h4><input type="text" required="" size="13" style="box-shadow: 7px 5px 2.5px #5F5F5F;" autocomplete="off" name="dir" id="dir" value="">

  <button name="submit" style="box-shadow: 7px 5px 2.5px #5F5F5F;">Submit</button>
</form>
</div>


<div style="width:75%; margin:auto; height:100%">

<iframe sandbox="allow-same-origin allow-scripts" height="275px" width="100%" style="background-color:#eeccff; border-radius:12px; box-shadow: 7px 5px 2.5px #5F5F5F;
 margin-top:50px" id="ftp_page" src="../youtube/">
  <p>Your browser does not support iframes.</p>
</iframe>
<br /><br />
<!--<form>
<input type="hidden" value="$DIR">
<button style="box-shadow: 7px 5px 2.5px #5F5F5F;" action="delete.php">Delete folder and music</button>
</form>-->
</div>

</body>
</html>';

?>
