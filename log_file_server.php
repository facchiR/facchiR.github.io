<?PHP
//Clean GET params
reset($_GET);
while (list($value, $parameter) = each($_GET)) { 
	if (!is_array($parameter)) {
    	${$value} = clean_parameters($parameter,$value);
  }
	if (is_array($parameter)) { 
    	${$value} = clean_string_array($parameter);
	}
}

//Clean POST params
reset($_POST);
while (list($value, $parameter) = each($_POST)) { 
  if (!is_array($parameter)) {
      ${$value} = clean_parameters($parameter,$value);
  }
  if (is_array($parameter)) { 
      ${$value} = clean_string_array($parameter);
  }
}

$id = 0;
if(!isset($_COOKIE["unique_id"])) 
{
//Get a unique id
	$id = uniqid();
//Store it in cookies	
	setcookie("unique_id", $id, time() + (86400 * 90), "/");
}
else
	$id = $_COOKIE["unique_id"];

//Get logs
$log = $_GET['log'] ?:'';

//If no logs ignore it
if ($log !== '')
{
	//Try to save logs in server file
	$size = file_put_contents ( "debugLog.txt" , "id: ".$id." log: ".$log."\n", FILE_APPEND );
	
	//Save on our server
	$curlSES=curl_init(); 	
	curl_setopt($curlSES,CURLOPT_URL,"https://data.perpetuum-media.com/StoreChecker/Php/log_file.php?log=FromServerLogger%20"."id: ".$id." log: ".$log);	
	curl_setopt($ch, CURLOPT_HEADER, false);
	$result=curl_exec($curlSES);
	
	header('Content-Type: image/jpeg');
    header("Access-Control-Allow-Origin: *");
	
	curl_close($curlSES);	
	flush(); 
}

function clean_parameters($parameter,$type='') {
    
  $parameter = str_replace("<script>", "", $parameter);
  $parameter = str_replace("</script>", "", $parameter);
  $parameter = str_replace("%3C", "", $parameter);
  $parameter = str_replace("%3E", "", $parameter);
  $parameter = str_replace("%20", "", $parameter);
  $parameter = str_replace("%27", "", $parameter);
  $parameter = str_replace("&quot;", "", $parameter);
  $parameter = str_replace("&lt;", "", $parameter);
  $parameter = str_replace("&gt;", "", $parameter);
  $parameter = str_replace("<", "", $parameter);
  $parameter = str_replace(">", "", $parameter);
  $parameter = str_replace("'", "", $parameter);
  $parameter = str_replace("%", "", $parameter);
  $parameter = str_replace("|", "", $parameter);
  $parameter = str_replace(";", "", $parameter);
  $parameter = str_replace("..", ".", $parameter);
  $parameter = preg_replace('/([\x00-\x08][\x0b-\x0c][\x0e-\x20])/', '', $parameter); 
  return $parameter;
}


function clean_string_array($array) {
    
  if (is_array($array))  {
    foreach ($array as $key => $value) {
      // don't wrap the session value, otherwise session_start() crashes! heh
      if (is_string($value)) {
        $array[$key] =  clean_url($value,$key);
      } else if (is_array($value)) {
        $array[$key] = clean_string_array($value,$key);
      }
    }
  }
  
  return $array;
}

?>