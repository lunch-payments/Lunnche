<?php
$user_agent = "timecommand (by Maciej & Adrian)";
$command = $_POST['command'];
$token = $_POST['token'];

if($token != "VM5kuHyNZ7yHqGXq3UxVSCpN"){
	$msg = "Blad! Zly token";
	die($msg);
	echo $msg;
}
$workEndTime = strtotime("today 4:00pm");
$tillEnd = $workEndTime - time();
if($tillEnd < 28800 && $tillEnd > 0)
{
	$reply = "Pozostalo" . date("G:i", $tillEnd) . "do konca pracy :thumbsup:";
}
else if($tillEnd < 0 && $tillEnd > -3600)
{
	$reply = "Fajrant, panowie!";
}
else
{
	$reply = "Po co uzyles tej komendy? Powinno cie nie byc w pracy o_O";
}
echo $reply;
?>