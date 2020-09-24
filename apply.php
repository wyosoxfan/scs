<?php

ini_set('display_errors', 1);

include_once('php-option\Option.php');
include_once('php-option\LazyOption.php');
include_once('php-option\None.php');
include_once('php-option\Some.php');

include_once('result-type\Result.php');
include_once('result-type\Error.php');
include_once('result-type\Success.php');

include_once('dotenv\Exception\ExceptionInterface.php');
include_once('dotenv\Exception\InvalidEncodingException.php');
include_once('dotenv\Exception\InvalidFileException.php');
include_once('dotenv\Exception\InvalidPathException.php');
include_once('dotenv\Exception\ValidationException.php');
include_once('dotenv\Loader\LoaderInterface.php');
include_once('dotenv\Loader\Loader.php');
include_once('dotenv\Loader\Resolver.php');
include_once('dotenv\Parser\ParserInterface.php');
include_once('dotenv\Parser\Entry.php');
include_once('dotenv\Parser\EntryParser.php');
include_once('dotenv\Parser\Lexer.php');
include_once('dotenv\Parser\Lines.php');
include_once('dotenv\Parser\Parser.php');
include_once('dotenv\Parser\Value.php');
include_once('dotenv\Repository\RepositoryInterface.php');
include_once('dotenv\Repository\AdapterRepository.php');
include_once('dotenv\Repository\RepositoryBuilder.php');
include_once('dotenv\Repository\Adapter\ReaderInterface.php');
include_once('dotenv\Repository\Adapter\WriterInterface.php');
include_once('dotenv\Repository\Adapter\AdapterInterface.php');
include_once('dotenv\Repository\Adapter\ApacheAdapter.php');
include_once('dotenv\Repository\Adapter\ArrayAdapter.php');
include_once('dotenv\Repository\Adapter\EnvConstAdapter.php');
include_once('dotenv\Repository\Adapter\GuardedWriter.php');
include_once('dotenv\Repository\Adapter\ImmutableWriter.php');
include_once('dotenv\Repository\Adapter\MultiReader.php');
include_once('dotenv\Repository\Adapter\MultiWriter.php');
include_once('dotenv\Repository\Adapter\PutenvAdapter.php');
include_once('dotenv\Repository\Adapter\ReplacingWriter.php');
include_once('dotenv\Repository\Adapter\ServerConstAdapter.php');
include_once('dotenv\Store\StoreInterface.php');
include_once('dotenv\Store\FileStore.php');
include_once('dotenv\Store\StoreBuilder.php');
include_once('dotenv\Store\StringStore.php');
include_once('dotenv\Store\File\Paths.php');
include_once('dotenv\Store\File\Reader.php');
include_once('dotenv\Util\Regex.php');
include_once('dotenv\Util\Str.php');
include_once('dotenv\Dotenv.php');
include_once('dotenv\Validator.php');


include_once('couchdb\Adapter\CouchHttpAdapterInterface.php');
include_once('couchdb\Adapter\AbstractCouchHttpAdapter.php');
include_once('couchdb\Adapter\CouchHttpAdapterCurl.php');
include_once('couchdb\Adapter\CouchHttpAdapterSocket.php');
include_once('couchdb\Exceptions\CouchException.php');
include_once('couchdb\Exceptions\CouchConflictException.php');
include_once('couchdb\Exceptions\CouchExpectationException.php');
include_once('couchdb\Exceptions\CouchForbiddenException.php');
include_once('couchdb\Exceptions\CouchNoResponseException.php');
include_once('couchdb\Exceptions\CouchNotFoundException.php');
include_once('couchdb\Exceptions\CouchUnauthorizedException.php');
include_once('couchdb\Config.php');
include_once('couchdb\Couch.php');
include_once('couchdb\CouchAdmin.php');
include_once('couchdb\CouchClient.php');
include_once('couchdb\CouchDocument.php');
include_once('couchdb\CouchReplicator.php');
include_once('couchdb\ObjectUtils.php');

require('fpdf.php');

//include_once('couchdb\Couch.php');
//include_once('couchdb\CouchClient.php');
//include_once('couchdb\CouchDocument.php');
//use  PHPOnCouch\CouchClient; //The CouchDB client object
//use  PHPOnCouch\CouchDocument; //The CouchDocument object

//Entry point for the rest api
$possible_get_actions = array("viewList","viewApplication","viewResume");
$possible_post_actions = array("apply", "deleteApplication");
if($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["action"]) && in_array($_GET["action"], $possible_get_actions))
{
	switch($_GET["action"])
	{
		case "viewList":
			//The list of applications to view
			$application_list = array();
			
			// Set a new connector to the CouchDB server
			$client = new PHPOnCouch\CouchClient('http://admin:Pu758KazLT@localhost:5984', 'employment');
			
			//Get all resumes from the database
			//_id,application-date, client-last-name,client-first-name,job-name
			$selector =  ['_id' => ['$gt' => NULL]];
			$result = $client->fields(['_id', 'application-date', 'client-last-name', 'client-first-name', 'job-name'])->find($selector);
			
			//Set the header return type
			header('Content-Type: application/json');
			
			//Returh the results
			echo json_encode($result);
			
			break;
		case "viewResume":
			// Set a new connector to the CouchDB server
			$client = new PHPOnCouch\CouchClient('http://admin:Pu758KazLT@localhost:5984', 'employment');
			
			//Get the document
			$doc = $client->asCouchDocuments()->getDoc($_GET["id"]);
			
			//Get the attachment uri
			$attachmentUri = $doc->getAttachmentUri("resume.pdf");
			
			//Check to make sure uri is valid
			if($doc->_attachments)
			{
				//Get the file from the uri
				$resume = file_get_contents($attachmentUri);
			
				//Set the correct content type
				header("content-type:application/pdf");
			
				//Send back the resume
				echo $resume;
			}
			else
			{
				echo "";
			}
			
			break;
		case "viewApplication":
			
			// Set a new connector to the CouchDB server
			$client = new PHPOnCouch\CouchClient('http://admin:Pu758KazLT@localhost:5984', 'employment');

			//Get the document
			$doc = $client->asCouchDocuments()->getDoc($_GET["id"]);
			
			
			$pdf = new FPDF();
			$pdf->AddPage();
			$pdf->SetFont('Arial','B',12);
			
			//Create the name, address, email & phone
			if($doc->{'client-name-suffix'} != '')
				$pdf->Cell(0,6,$doc->{'client-first-name'} . ' ' . $doc->{'client-last-name'} . ' ' . $doc->{'client-name-suffix'},0,1);
			else
				$pdf->Cell(0,6,$doc->{'client-first-name'} . ' ' . $doc->{'client-last-name'},0,1);
			$pdf->Cell(0,6,$doc->{'client-address'},0,1);
			if($doc->{'client-address2Help'} != '')
				$pdf->Cell(0,6,$doc->{'client-address2Help'},0,1);
			$pdf->Cell(0,6,$doc->{'client-city'} . ', ' . $doc->{'client-state'} . '  ' . $doc->{'client-zip'},0,1);
			
			if($doc->{'client-email'} != '')
				$pdf->Cell(0,6,$doc->{'client-email'},0,1);
			if($doc->{'client-phone'} != '')
				$pdf->Cell(0,6,$doc->{'client-phone'},0,1);
			
			
			$pdf->SetFont('Arial','BU',12);
			$pdf->Cell(0,6,"                                                                                                                        ",0,1);
			$pdf->SetFont('Arial','',12);	
			
			$pdf->Ln();
			
			$pdf->Cell(0,6,"How long have you been at your current address (Years & Months)? " .$doc->{'address-length'},0,1);
			
			$pdf->Ln();
			
			$pdf->SetFont('Arial','BU',16);	
			$pdf->Cell(0,6,"Previous Addresses",0,1);
			$pdf->SetFont('Arial','',12);	
			$pdf->MultiCell(0,6,$doc->{'three-addresses'},0,1);
			$pdf->Ln();
			
			
			
			for($x=1; $x < 4; $x++)
			{
				$pdf->SetFont('Arial','BU',16);
				$pdf->Cell(0,6,"Previous Employer " . $x,0,1);
				$pdf->SetFont('Arial','',12);	
				$pdf->Cell(0,6,$doc->{'employer-' . $x . '-name'},0,1);
				$pdf->Cell(0,6,$doc->{'employer-' . $x . '-job'},0,1);
				$pdf->Cell(0,6,'From ' . $doc->{'employer-' . $x . '-from-date'} . ' to ' . $doc->{'employer-' . $x . '-to-date'},0,1);
				$pdf->Cell(0,6,$doc->{'employer-' . $x . '-address'},0,1);
				$pdf->Cell(0,6,$doc->{'employer-' . $x . '-city'} . ', ' . $doc->{'employer-' . $x . '-state'} . '  ' . $doc->{'employer-' . $x . '-zip'},0,1);
				$pdf->Cell(0,6,$doc->{'employer-' . $x . '-phone'},0,1);
				$pdf->Cell(0,6,$doc->{'employer-' . $x . '-supervisor'},0,1);
				$pdf->Cell(0,6,'Reason for leaving: ' . $doc->{'employer-' . $x . '-reason-leaving'},0,1);
				$pdf->Cell(0,6,'Contact Employer? ' . $doc->{'employer-' . $x . '-contact'},0,1);
				$pdf->Ln();
				$pdf->Ln();
			}
			
			$pdf->Ln();
			$pdf->Ln();
			
			for($x=1; $x < 4; $x++)
			{
				$pdf->SetFont('Arial','BU',16);
				$pdf->Cell(0,6,"Reference " . $x,0,1);
				$pdf->SetFont('Arial','',12);	
				$pdf->Cell(0,6,$doc->{'reference-' . $x . '-name'},0,1);
				$pdf->Cell(0,6,$doc->{'reference-' . $x . '-address'},0,1);
				$pdf->Cell(0,6,$doc->{'reference-' . $x . '-city'} . ', ' . $doc->{'reference-' . $x . '-state'} . '  ' . $doc->{'reference-' . $x . '-zip'},0,1);
				$pdf->Cell(0,6,$doc->{'reference-' . $x . '-phone'},0,1);
				$pdf->Cell(0,6,$doc->{'reference-' . $x . '-occupation'},0,1);
				$pdf->Cell(0,6,'How long? ' . $doc->{'reference-' . $x . '-time'},0,1);
				$pdf->Ln();
				$pdf->Ln();
			}

			$pdf->SetFont('Arial','BU',12);
			$pdf->Cell(0,6,"                                                                                                                        ",0,1);
			$pdf->SetFont('Arial','',12);	
			
			$pdf->Ln();
			
			$pdf->Cell(0,6,"Have you ever plead guilty, or no contest to, or been convicted of a felony? " . $doc->{'felony'},0,1);
			
			$pdf->Ln();	
			
			$pdf->MultiCell(0,6,"Have you been arrested for any matters for which you are out on bail or on your own recognizance pending trial? " . $doc->{'arrested'},0,1);
			
			$pdf->Ln();
			
			$pdf->Cell(0,6,"Have you ever been convicted of a DUI? " . $doc->{'dui'},0,1);
			
			$pdf->Ln();
				
			$pdf->Cell(0,6,"Have you ever been charged with child abuse of neglect? " . $doc->{'child-abuse'},0,1);
			
			$pdf->Ln();
			
			//$pdf->Cell(40,10,'Hello World!');
			$pdf->Output();
			break;
	}
}
else if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_GET["action"]) && in_array($_GET["action"], $possible_post_actions))
{
	switch($_GET["action"])
	{
		case "apply":
			save_application();
			break;
		case "deleteApplication":
			echo delete_application();
			break;
	}
}

function delete_application()
{
	//Set a new connector to the CouchDB server
	$client = new PHPOnCouch\CouchClient('http://admin:Pu758KazLT@localhost:5984', 'employment');

	//Get the document
	$doc = $client->asCouchDocuments()->getDoc($_GET["id"]);
	
	try
	{
		$client->deleteDoc($doc);
		return "ok";
	}
	catch(exception $e)
	{
		return "error";
	}
}

function save_application()
{
	//Set a new connector to the CouchDB server
	$client = new PHPOnCouch\CouchClient('http://admin:Pu758KazLT@localhost:5984', 'employment');

	//Create the document
	$doc = new PHPOnCouch\CouchDocument($client);

	//Save the fields
	foreach($_POST as $key=>$value){
		$doc->{$key} = $value;
	}
	$doc->{'application-date'} = date('Y/m/d');
	
	//Save the resume if it exists
	if($_FILES['resume-upload']['tmp_name'] != '')
	{
		
		$resume = file_get_contents($_FILES['resume-upload']['tmp_name']);
		$result = $client->storeAsAttachment($doc, $resume, 'resume.pdf','application/pdf');
	}
}

//function get_application_list()
//{
//	return "";
//}



?> 