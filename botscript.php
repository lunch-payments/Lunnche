<?
$user_agent = "timecommand (by Maciej & Adrian)";
$command = $_POST['command'];
$token = $_POST['token'];

if($token != VM5kuHyNZ7yHqGXq3UxVSCpN){
	$msg = "B³¹d! Z³y token";
	die($msg);
	echo $msg;
}
$workEndTime = strtotime("today 4:00pm");
$tillEnd = $workEndTime - time();
$reply = "Pozosta³o" + date("G:i", $tillEnd) + "do koñca pracy :thumbsup:";
echo $reply;
?>