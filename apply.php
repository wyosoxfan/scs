<?php

ini_set('display_errors', 1);
include_once('couchdb\Couch.php');
include_once('couchdb\CouchClient.php');
include_once('couchdb\CouchDocument.php');
use  PHPOnCouch\CouchClient; //The CouchDB client object
use  PHPOnCouch\CouchDocument; //The CouchDocument object


//Entry point for the rest api
$possible_get_actions = array("list");
$possible_post_actions = array("apply");
if(isset($_GET["action"]) && in_array($_GET["action"], $possible_get_actions))
{
	switch($_GET["action"])
	{
		case "list":
			$application_list = array();
			
			$application1->name = 'Neil Christensen';
			$application1->job = "Job #1";
			
			array_push($application_list, $application1);
			
			return $application_list;
	}
}
else if(isset($_POST["action"]) && in_array($POST["action"], $possible_post_actions))
{
	switch($_POST["action"])
	{
		case "apply":
			save_application($_POST);
			break;
	}
}

function save_application($post)
{
	// Set a new connector to the CouchDB server
	$client = new CouchClient('http://admin:Pu758KazLT@localhost:5984', 'employment');

	//Create the document
	$doc = new CouchDocument($client);
	
	//Save the fields
	foreach($_POST as $key=>$value){
		doc->{$key} = $value;
	}
}

function get_application_list()
{
	
}



?> 