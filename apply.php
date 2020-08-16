<?php

ini_set('display_errors', 1);
include_once('couchdb\Couch.php');
include_once('couchdb\CouchClient.php');
include_once('couchdb\CouchDocument.php');
use  PHPOnCouch\CouchClient; //The CouchDB client object
use  PHPOnCouch\CouchDocument; //The CouchDocument object

// Set a new connector to the CouchDB server
$client = new CouchClient('http://admin:Pu758KazLT@localhost:5984', 'employment');

// Show all URL parameters (and
// all form data submitted via the 
// 'get' method)
$doc = new CouchDocument($client);
//foreach($_POST as $key=>$value){
//	doc->{$key} = $value;
    //echo $key, ' => ', $value, "<br/>n";
}

?> 