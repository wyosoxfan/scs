<?php

ini_set('display_errors', 1);
include_once('couchdb\Autoload.php');
//include_once('couchdb\Couch.php');
//include_once('couchdb\CouchClient.php');
//include_once('couchdb\CouchDocument.php');
//use  PHPOnCouch\CouchClient; //The CouchDB client object
//use  PHPOnCouch\CouchDocument; //The CouchDocument object
use  PHPOnCouch\Autoload;

if ( ! function_exists('glob_recursive'))
{
    // Does not support flag GLOB_BRACE      
   function glob_recursive($pattern, $flags = 0)
   {
     $files = glob($pattern, $flags);
     foreach (glob(dirname($pattern).'/*', GLOB_ONLYDIR|GLOB_NOSORT) as $dir)
     {
       $files = array_merge($files, glob_recursive($dir.'/'.basename($pattern), $flags));
     }
     return $files;
   }
}

$files = glob_recursive("couchdb\*.php");
foreach($files as $file)
{
	if($file != 'couchdb\Autoload.php')
		Autoload::autoload($file);
}

 
//Entry point for the rest api



$possible_get_actions = array("list");
$possible_post_actions = array("apply");
if(isset($_GET["action"]) && in_array($_GET["action"], $possible_get_actions))
{
	switch($_GET["action"])
	{
		case "list":
			$application_list = array();
			
			// Set a new connector to the CouchDB server
			$client = new PHPOnCouch\CouchClient('http://admin:Pu758KazLT@localhost:5984', 'employment');
			
			$selector =  ['client_first_name' =>  'A'];
			//$result = $client->find(NULL);
			
			
			echo $client->getIndexes();
			
			//$application1 = (object)[];
			//$application1->name = 'Neil Christensen';
			//$application1->job = "Job #1";
			
			//array_push($application_list, $application1);
			
			//echo json_encode($application_list);
			break;
			//return $application_list;
			
			//return "blah";
	}
}
//else if(isset($_POST["action"]) && in_array($POST["action"], $possible_post_actions))
//{
	//switch($_POST["action"])
	//{
		//case "apply":
//			save_application($_POST);
	//		break;
	//}
//}

//function save_application($post)
//{
	// Set a new connector to the CouchDB server
	//$client = new CouchClient('http://admin:Pu758KazLT@localhost:5984', 'employment');

	//Create the document
	//$doc = new CouchDocument($client);
	
	//Save the fields
	//foreach($_POST as $key=>$value){
		//doc->{$key} = $value;
	//}
//}

//function get_application_list()
//{
//	return "";
//}



?> 