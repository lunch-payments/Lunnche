<?
$user_agent = "timecommand (by Maciej & Adrian)";
$command = $_POST['command'];
$token = $_POST['token'];

if($token != VM5kuHyNZ7yHqGXq3UxVSCpN){
	$msg = "B��d! Z�y token";
	die($msg);
	echo $msg;
}
$workEndTime = strtotime("today 4:00pm");
$tillEnd = $workEndTime - time();
$reply = "Pozosta�o" + date("G:i", $tillEnd) + "do ko�ca pracy :thumbsup:";
echo $reply;
?>