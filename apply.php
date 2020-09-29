<?php

ini_set( 'display_errors', 1 );

include_once( 'php-option\Option.php' );
include_once( 'php-option\LazyOption.php' );
include_once( 'php-option\None.php' );
include_once( 'php-option\Some.php' );

include_once( 'result-type\Result.php' );
include_once( 'result-type\Error.php' );
include_once( 'result-type\Success.php' );

include_once( 'dotenv\Exception\ExceptionInterface.php' );
include_once( 'dotenv\Exception\InvalidEncodingException.php' );
include_once( 'dotenv\Exception\InvalidFileException.php' );
include_once( 'dotenv\Exception\InvalidPathException.php' );
include_once( 'dotenv\Exception\ValidationException.php' );
include_once( 'dotenv\Loader\LoaderInterface.php' );
include_once( 'dotenv\Loader\Loader.php' );
include_once( 'dotenv\Loader\Resolver.php' );
include_once( 'dotenv\Parser\ParserInterface.php' );
include_once( 'dotenv\Parser\Entry.php' );
include_once( 'dotenv\Parser\EntryParser.php' );
include_once( 'dotenv\Parser\Lexer.php' );
include_once( 'dotenv\Parser\Lines.php' );
include_once( 'dotenv\Parser\Parser.php' );
include_once( 'dotenv\Parser\Value.php' );
include_once( 'dotenv\Repository\RepositoryInterface.php' );
include_once( 'dotenv\Repository\AdapterRepository.php' );
include_once( 'dotenv\Repository\RepositoryBuilder.php' );
include_once( 'dotenv\Repository\Adapter\ReaderInterface.php' );
include_once( 'dotenv\Repository\Adapter\WriterInterface.php' );
include_once( 'dotenv\Repository\Adapter\AdapterInterface.php' );
include_once( 'dotenv\Repository\Adapter\ApacheAdapter.php' );
include_once( 'dotenv\Repository\Adapter\ArrayAdapter.php' );
include_once( 'dotenv\Repository\Adapter\EnvConstAdapter.php' );
include_once( 'dotenv\Repository\Adapter\GuardedWriter.php' );
include_once( 'dotenv\Repository\Adapter\ImmutableWriter.php' );
include_once( 'dotenv\Repository\Adapter\MultiReader.php' );
include_once( 'dotenv\Repository\Adapter\MultiWriter.php' );
include_once( 'dotenv\Repository\Adapter\PutenvAdapter.php' );
include_once( 'dotenv\Repository\Adapter\ReplacingWriter.php' );
include_once( 'dotenv\Repository\Adapter\ServerConstAdapter.php' );
include_once( 'dotenv\Store\StoreInterface.php' );
include_once( 'dotenv\Store\FileStore.php' );
include_once( 'dotenv\Store\StoreBuilder.php' );
include_once( 'dotenv\Store\StringStore.php' );
include_once( 'dotenv\Store\File\Paths.php' );
include_once( 'dotenv\Store\File\Reader.php' );
include_once( 'dotenv\Util\Regex.php' );
include_once( 'dotenv\Util\Str.php' );
include_once( 'dotenv\Dotenv.php' );
include_once( 'dotenv\Validator.php' );


include_once( 'couchdb\Adapter\CouchHttpAdapterInterface.php' );
include_once( 'couchdb\Adapter\AbstractCouchHttpAdapter.php' );
include_once( 'couchdb\Adapter\CouchHttpAdapterCurl.php' );
include_once( 'couchdb\Adapter\CouchHttpAdapterSocket.php' );
include_once( 'couchdb\Exceptions\CouchException.php' );
include_once( 'couchdb\Exceptions\CouchConflictException.php' );
include_once( 'couchdb\Exceptions\CouchExpectationException.php' );
include_once( 'couchdb\Exceptions\CouchForbiddenException.php' );
include_once( 'couchdb\Exceptions\CouchNoResponseException.php' );
include_once( 'couchdb\Exceptions\CouchNotFoundException.php' );
include_once( 'couchdb\Exceptions\CouchUnauthorizedException.php' );
include_once( 'couchdb\Config.php' );
include_once( 'couchdb\Couch.php' );
include_once( 'couchdb\CouchAdmin.php' );
include_once( 'couchdb\CouchClient.php' );
include_once( 'couchdb\CouchDocument.php' );
include_once( 'couchdb\CouchReplicator.php' );
include_once( 'couchdb\ObjectUtils.php' );

require( 'fpdf.php' );

//include_once('couchdb\Couch.php');
//include_once('couchdb\CouchClient.php');
//include_once('couchdb\CouchDocument.php');
//use  PHPOnCouch\CouchClient; //The CouchDB client object
//use  PHPOnCouch\CouchDocument; //The CouchDocument object

//Entry point for the rest api
$possible_get_actions = array( "viewList", "viewApplication", "viewResume" );
$possible_post_actions = array( "apply", "deleteApplication" );
if ( $_SERVER[ "REQUEST_METHOD" ] == "GET" && isset( $_GET[ "action" ] ) && in_array( $_GET[ "action" ], $possible_get_actions ) ) {
  switch ( $_GET[ "action" ] ) {
    case "viewList":
      //The list of applications to view
      $application_list = array();

      // Set a new connector to the CouchDB server
      $client = new PHPOnCouch\ CouchClient( 'http://admin:Pu758KazLT@localhost:5984', 'employment' );

      //Get all resumes from the database
      //_id,application-date, client-last-name,client-first-name,job-name
      $selector = [ '_id' => [ '$gt' => NULL ] ];
      $result = $client->fields( [ '_id', 'application-date', 'client-last-name', 'client-first-name', 'job-name' ] )->find( $selector );

      //Set the header return type
      header( 'Content-Type: application/json' );

      //Returh the results
      echo json_encode( $result );

      break;
    case "viewResume":
      // Set a new connector to the CouchDB server
      $client = new PHPOnCouch\ CouchClient( 'http://admin:Pu758KazLT@localhost:5984', 'employment' );

      //Get the document
      $doc = $client->asCouchDocuments()->getDoc( $_GET[ "id" ] );

      //Get the attachment uri
      $attachmentUri = $doc->getAttachmentUri( "resume.pdf" );

      //Check to make sure uri is valid
      if ( $doc->_attachments ) {
        //Get the file from the uri
        $resume = file_get_contents( $attachmentUri );

        //Set the correct content type
        header( "content-type:application/pdf" );

        //Send back the resume
        echo $resume;
      } else {
        echo "";
      }

      break;
    case "viewApplication":

      // Set a new connector to the CouchDB server
      $client = new PHPOnCouch\ CouchClient( 'http://admin:Pu758KazLT@localhost:5984', 'employment' );

      //Get the document
      $doc = $client->asCouchDocuments()->getDoc( $_GET[ "id" ] );
      $pdf = new FPDF();
      $pdf->AddPage();
		  
	  //Create the contact info section
	  create_contact_info_section($pdf, $doc);
		  
	  //Create the address info section
      create_address_info_section($pdf, $doc);
		  
	  //Create the job/shift info section
	  create_job_shift_info_section($pdf, $doc);
		  
	  //Create education info section
	  create_education_info_section($pdf, $doc);
		  
	  //Create employer section
	  create_employer_info_section($pdf, $doc);

      //Create references section
      create_references_info_section($pdf, $doc);
		  
	  //Create legal info section
	  create_legal_info_section($pdf, $doc);
		  
      //Create name info section
	  create_name_info_section($pdf, $doc);
		  
      //Create job info section
      create_job_info_section($pdf, $doc);
		  
	  //SWC info section
	  create_swc_info_section($pdf, $doc);
     
      $pdf->Output();
      break;
  }
} else if ( $_SERVER[ "REQUEST_METHOD" ] == "POST" && isset( $_GET[ "action" ] ) && in_array( $_GET[ "action" ], $possible_post_actions ) ) {
  switch ( $_GET[ "action" ] ) {
    case "apply":
      save_application();
      break;
    case "deleteApplication":
      echo delete_application();
      break;
  }
}

function create_contact_info_section( $pdf, $doc ) {
  $pdf->SetFont( 'Arial', 'B', 12 );

  //Create the name, address, email & phone
  if ( $doc->{'client-name-suffix'} != '' )
    $pdf->Cell( 0, 6, $doc->{'client-first-name'} . ' ' . $doc->{'client-last-name'} . ' ' . $doc->{'client-name-suffix'}, 0, 1 );
  else
    $pdf->Cell( 0, 6, $doc->{'client-first-name'} . ' ' . $doc->{'client-last-name'}, 0, 1 );
  $pdf->Cell( 0, 6, $doc->{'client-address'}, 0, 1 );
  if ( $doc->{'client-address2Help'} != '' )
    $pdf->Cell( 0, 6, $doc->{'client-address2'}, 0, 1 );
  $pdf->Cell( 0, 6, $doc->{'client-city'} . ', ' . $doc->{'client-state'} . '  ' . $doc->{'client-zip'}, 0, 1 );

  if ( $doc->{'client-email'} != '' )
    $pdf->Cell( 0, 6, $doc->{'client-email'}, 0, 1 );
  if ( $doc->{'client-phone'} != '' )
    $pdf->Cell( 0, 6, $doc->{'client-phone'}, 0, 1 );

  //Footer
  $pdf->SetFont( 'Arial', 'BU', 12 );
  $pdf->Cell( 0, 6, "                                                                                                                        ", 0, 1 );
  $pdf->SetFont( 'Arial', '', 12 );
  $pdf->Ln();
}

function create_address_info_section( $pdf, $doc)
{
	//Header
	$pdf->SetFont( 'Arial', 'BI', 16 );
    $pdf->Cell( 0, 6, "Current Address Information", 0, 1 );
    $pdf->SetFont( 'Arial', '', 12 );
	$pdf->Ln();
	
	//Address-Length
	$pdf->SetFont( 'Arial', 'BU', 12 );
    $pdf->Cell( 0, 6, "Time at current address", 0, 1 );
	$pdf->SetFont( 'Arial', '', 12 );
	$pdf->Cell( 0, 6, "How long have you been at your current address (Years & Months)? " . $doc->{'address-length'}, 0, 1 );
    $pdf->Ln();

	//3 pervious addresses
    $pdf->SetFont( 'Arial', 'BU', 12 );
    $pdf->Cell( 0, 6, "3 Previous Addresses", 0, 1 );
    $pdf->SetFont( 'Arial', '', 12 );
    $pdf->MultiCell( 0, 6, $doc->{'three-addresses'}, 0, 1 );
    $pdf->Ln();
	
	//Footer
	$pdf->SetFont( 'Arial', 'BU', 12 );
  	$pdf->Cell( 0, 6, "                                                                                                                        ", 0, 1 );
  	$pdf->SetFont( 'Arial', '', 12 );
  	$pdf->Ln();
}

function create_job_shift_info_section($pdf, $doc)
{
	//Header
	$pdf->SetFont( 'Arial', 'BI', 16 );
    $pdf->Cell( 0, 6, "Job Information", 0, 1 );
    $pdf->SetFont( 'Arial', '', 12 );
	$pdf->Ln();
	
	//Job name
	$pdf->SetFont( 'Arial', 'BU', 12 );
    $pdf->Cell( 0, 6, "Job Name", 0, 1 );
	$pdf->SetFont( 'Arial', '', 12 );
	$pdf->Cell( 0, 6, $doc->{'job-name'}, 0, 1 );
    $pdf->Ln();
	
	//Employment Type
	$pdf->SetFont( 'Arial', 'BU', 12 );
    $pdf->Cell( 0, 6, "Employment Type", 0, 1 );
	$pdf->SetFont( 'Arial', '', 12 );
	$pdf->Cell( 0, 6, $doc->{'job-time'}, 0, 1 );
    $pdf->Ln();
	
	//Shifts Interested In
	$pdf->SetFont( 'Arial', 'BU', 12 );
    $pdf->Cell( 0, 6, "Shifts Available", 0, 1 );
	$pdf->SetFont( 'Arial', '', 12 );
	if($doc->{'shift-day'} == "Day")
		$pdf->Cell( 0, 6, "Day ", 0, 1 );
	if($doc->{'shift-evening'} == "Evening")
		$pdf->Cell( 0, 6, "Evening", 0, 1 );
	if($doc->{'shift-night'} == "Night")
		$pdf->Cell( 0, 6, "Night", 0, 1 );
	if($doc->{'shift-weekends'} == "Weekends")
		$pdf->Cell( 0, 6, "Weekends", 0, 1 );
    $pdf->Ln();
	
	//Footer
	$pdf->SetFont( 'Arial', 'BU', 12 );
  	$pdf->Cell( 0, 6, "                                                                                                                        ", 0, 1 );
  	$pdf->SetFont( 'Arial', '', 12 );
  	$pdf->Ln();
}

function create_education_info_section($pdf, $doc)
{
	//Header
	$pdf->SetFont( 'Arial', 'BI', 16 );
    $pdf->Cell( 0, 6, "Education Information", 0, 1 );
    $pdf->SetFont( 'Arial', '', 12 );
	$pdf->Ln();
	
	//High school years completed
	$pdf->SetFont( 'Arial', 'BU', 12 );
    $pdf->Cell( 0, 6, "High School", 0, 1 );
	$pdf->SetFont( 'Arial', '', 12 );
	$pdf->Cell( 0, 6, "years completed: " . $doc->{'high-school'}, 0, 1 );
    $pdf->Ln();
	
	//College years completed
	$pdf->SetFont( 'Arial', 'BU', 12 );
    $pdf->Cell( 0, 6, "College", 0, 1 );
	$pdf->SetFont( 'Arial', '', 12 );
	$pdf->Cell( 0, 6, "Name: " . $doc->{'college-name'}, 0, 1);
	$pdf->Cell( 0, 6, "Degree: " . $doc->{'college-degree'}, 0, 1);
	$pdf->Cell( 0, 6, "years completed  : " . $doc->{'college-completed'}, 0, 1 );
	$pdf->Cell( 0, 6, "Graduate degree  : " . $doc->{'graduate-degree'}, 0, 1 );
	$pdf->Cell( 0, 6, "Other degree     : " . $doc->{'other-degree'}, 0, 1 ); 
	$pdf->Cell( 0, 6, "Other education  : " . $doc->{'other-education'}, 0, 1 );
	$pdf->MultiCell( 0, 6, "Course of Study  : " . $doc->{'course-study'}, 0, 1 );
	$pdf->Ln();
	$pdf->Cell( 0, 6, "Training/Skills  : " . $doc->{'experience-info'}, 0, 1 );
    $pdf->Ln();
	
	//Footer
	$pdf->SetFont( 'Arial', 'BU', 12 );
  	$pdf->Cell( 0, 6, "                                                                                                                        ", 0, 1 );
  	$pdf->SetFont( 'Arial', '', 12 );
  	$pdf->Ln();
}

function create_employer_info_section($pdf, $doc)
{
	//Header
	$pdf->SetFont( 'Arial', 'BI', 16 );
    $pdf->Cell( 0, 6, "Employment History", 0, 1 );
    $pdf->SetFont( 'Arial', '', 12 );
	$pdf->Ln();
	
	 for ( $x = 1; $x < 4; $x++ ) {
        $pdf->SetFont( 'Arial', 'BU', 12 );
        $pdf->Cell( 0, 6, "Previous Employer " . $x, 0, 1 );
        $pdf->SetFont( 'Arial', '', 12 );
        $pdf->Cell( 0, 6, $doc->{'employer-' . $x . '-name'}, 0, 1 );
        $pdf->Cell( 0, 6, $doc->{'employer-' . $x . '-job'}, 0, 1 );
        $pdf->Cell( 0, 6, 'From ' . $doc->{'employer-' . $x . '-from-date'} . ' to ' . $doc->{'employer-' . $x . '-to-date'}, 0, 1 );
        $pdf->Cell( 0, 6, $doc->{'employer-' . $x . '-address'}, 0, 1 );
        $pdf->Cell( 0, 6, $doc->{'employer-' . $x . '-city'} . ', ' . $doc->{'employer-' . $x . '-state'} . '  ' . $doc->{'employer-' . $x . '-zip'}, 0, 1 );
        $pdf->Cell( 0, 6, $doc->{'employer-' . $x . '-phone'}, 0, 1 );
        $pdf->Cell( 0, 6, $doc->{'employer-' . $x . '-supervisor'}, 0, 1 );
        $pdf->Cell( 0, 6, 'Reason for leaving: ' . $doc->{'employer-' . $x . '-reason-leaving'}, 0, 1 );
        $pdf->Cell( 0, 6, 'Contact Employer? ' . $doc->{'employer-' . $x . '-contact'}, 0, 1 );
		$pdf->MultiCell( 0, 6, "Work performed  : " . $doc->{'employer-' . $x . '-work'}, 0, 1 );
        $pdf->Ln();
        $pdf->Ln();
      }
	
	//Suspended License
	$pdf->Cell( 0, 6, "Suspended License: " . $doc->{'license-suspened'}, 0, 1 );
    $pdf->Ln();
	
	//Suspended Reason
	$pdf->MultiCell( 0, 6, "Reason license was suspened  : " . $doc->{'license-suspended-reason'}, 0, 1 );
    $pdf->Ln();
	
	//Fired
	$pdf->Cell( 0, 6, "Fired from job: " . $doc->{'fired'}, 0, 1 );
    $pdf->Ln();
	
	//Fired Reason
	$pdf->MultiCell( 0, 6, "Reason fired from job  : " . $doc->{'fired-reason'}, 0, 1 );
    $pdf->Ln();
	
	//Certifications
	$pdf->MultiCell( 0, 6, "Certifications  : " . $doc->{'list-certifications'}, 0, 1 );
    $pdf->Ln();
	
	//Employment Gaps
	$pdf->MultiCell( 0, 6, "Employment Gaps  : " . $doc->{'employment-gaps'}, 0, 1 );
    $pdf->Ln();
	
	//Contact current employer
	$pdf->Cell( 0, 6, "Contact current employer  : " . $doc->{'contact-current-employer'}, 0, 1 );
    $pdf->Ln();
	
	//Footer
	$pdf->SetFont( 'Arial', 'BU', 12 );
  	$pdf->Cell( 0, 6, "                                                                                                                        ", 0, 1 );
  	$pdf->SetFont( 'Arial', '', 12 );
  	$pdf->Ln();
}

function create_references_info_section($pdf, $doc)
{
	//Header
	$pdf->SetFont( 'Arial', 'BI', 16 );
    $pdf->Cell( 0, 6, "References", 0, 1 );
    $pdf->SetFont( 'Arial', '', 12 );
	$pdf->Ln();
	
	for ( $x = 1; $x < 4; $x++ ) {
        $pdf->SetFont( 'Arial', 'BU', 16 );
        $pdf->Cell( 0, 6, "Reference " . $x, 0, 1 );
        $pdf->SetFont( 'Arial', '', 12 );
        $pdf->Cell( 0, 6, $doc->{'reference-' . $x . '-name'}, 0, 1 );
        $pdf->Cell( 0, 6, $doc->{'reference-' . $x . '-address'}, 0, 1 );
        $pdf->Cell( 0, 6, $doc->{'reference-' . $x . '-city'} . ', ' . $doc->{'reference-' . $x . '-state'} . '  ' . $doc->{'reference-' . $x . '-zip'}, 0, 1 );
        $pdf->Cell( 0, 6, $doc->{'reference-' . $x . '-phone'}, 0, 1 );
        $pdf->Cell( 0, 6, $doc->{'reference-' . $x . '-occupation'}, 0, 1 );
        $pdf->Cell( 0, 6, 'How long? ' . $doc->{'reference-' . $x . '-time'}, 0, 1 );
        $pdf->Ln();
        $pdf->Ln();
      }
	
	//Footer
	$pdf->SetFont( 'Arial', 'BU', 12 );
  	$pdf->Cell( 0, 6, "                                                                                                                        ", 0, 1 );
  	$pdf->SetFont( 'Arial', '', 12 );
  	$pdf->Ln();
}

function create_legal_info_section($pdf, $doc)
{
	//Header
	$pdf->SetFont( 'Arial', 'BI', 16 );
    $pdf->Cell( 0, 6, "Legal Information", 0, 1 );
    $pdf->SetFont( 'Arial', '', 12 );
	$pdf->Ln();
	
    $pdf->Cell( 0, 6, "Felony: " . $doc->{'felony'}, 0, 1 );
    $pdf->Ln();
    $pdf->Cell( 0, 6, "Arrested: " . $doc->{'arrested'}, 0, 1 );
    $pdf->Ln();
    $pdf->Cell( 0, 6, "DUI: " . $doc->{'dui'}, 0, 1 );
    $pdf->Ln();
	$pdf->Cell( 0, 6, "DUI Date: " . $doc->{'dui-date'}, 0, 1 );
	$pdf->Ln();
    $pdf->Cell( 0, 6, "Child Abuse: " . $doc->{'child-abuse'}, 0, 1 );
    $pdf->Ln();

	//Footer
	$pdf->SetFont( 'Arial', 'BU', 12 );
  	$pdf->Cell( 0, 6, "                                                                                                                        ", 0, 1 );
  	$pdf->SetFont( 'Arial', '', 12 );
  	$pdf->Ln();
}

function create_name_info_section($pdf, $doc)
{
	//Header
	$pdf->SetFont( 'Arial', 'BI', 16 );
    $pdf->Cell( 0, 6, "Name Information", 0, 1 );
    $pdf->SetFont( 'Arial', '', 12 );
	$pdf->Ln();
	
	$pdf->Cell( 0, 6, "Alternate Name: " . $doc->{'other-name'}, 0, 1);
	$pdf->Ln();
	$pdf->Cell( 0, 6, "Alternate Name (Relevant): " . $doc->{'change-name'}, 0, 1);
	$pdf->Ln();
	$pdf->MultiCell(0, 6, "Change Name Reason: " . $doc->{'change-name-reason'}, 0, 1);
	$pdf->Ln();
	
	//Footer
	$pdf->SetFont( 'Arial', 'BU', 12 );
  	$pdf->Cell( 0, 6, "                                                                                                                        ", 0, 1 );
  	$pdf->SetFont( 'Arial', '', 12 );
  	$pdf->Ln();
}

function create_job_info_section($pdf, $doc)
{
	//Header
	$pdf->SetFont( 'Arial', 'BI', 16 );
    $pdf->Cell( 0, 6, "Job Duty Information", 0, 1 );
    $pdf->SetFont( 'Arial', '', 12 );
	$pdf->Ln();
	
	$pdf->Cell(0, 6, "Over 21: " . $doc->{'over-21'}, 0, 1);
	$pdf->Ln();
	$pdf->Cell(0, 6, "Perform Job Duties: " . $doc->{'performing-jobs'}, 0 , 1);
	$pdf->Ln();
	$pdf->Cell(0, 6, "Transportation: " . $doc->{'transportation'}, 0, 1);
	$pdf->Ln();
	
	
	//Footer
	$pdf->SetFont( 'Arial', 'BU', 12 );
  	$pdf->Cell( 0, 6, "                                                                                                                        ", 0, 1 );
  	$pdf->SetFont( 'Arial', '', 12 );
  	$pdf->Ln();
}

function create_swc_info_section($pdf, $doc)
{
	//Header
	$pdf->SetFont( 'Arial', 'BI', 16 );
    $pdf->Cell( 0, 6, "SCS Information", 0, 1 );
    $pdf->SetFont( 'Arial', '', 12 );
	$pdf->Ln();
	
	$pdf->Cell(0,6, "Past SCS Employee: " . $doc->{'employed-swc'}, 0, 1);
	$pdf->Ln();
	$pdf->Cell(0,6, "Employed on Date: " . $doc->{'employed-swc-dates'}, 0, 1);
	$pdf->Ln();
	$pdf->Cell(0,6, "Relative Employed: " . $doc->{'relative-swc'}, 0, 1);
	$pdf->Ln();
	$pdf->Cell(0,6, "Relative Name: " . $doc->{'relative-swc-name'}, 0, 1);
	$pdf->Ln();
	
	//Footer
	$pdf->SetFont( 'Arial', 'BU', 12 );
  	$pdf->Cell( 0, 6, "                                                                                                                        ", 0, 1 );
  	$pdf->SetFont( 'Arial', '', 12 );
  	$pdf->Ln();
}

function delete_application() {
  //Set a new connector to the CouchDB server
  $client = new PHPOnCouch\ CouchClient( 'http://admin:Pu758KazLT@localhost:5984', 'employment' );

  //Get the document
  $doc = $client->asCouchDocuments()->getDoc( $_GET[ "id" ] );

  try {
    $client->deleteDoc( $doc );
    return "ok";
  } catch ( exception $e ) {
    return "error";
  }
}

function save_application() {
  //Set a new connector to the CouchDB server
  $client = new PHPOnCouch\ CouchClient( 'http://admin:Pu758KazLT@localhost:5984', 'employment' );

  //Create the document
  $doc = new PHPOnCouch\ CouchDocument( $client );

  //Save the fields
  foreach ( $_POST as $key => $value ) {
    $doc->{$key} = $value;
  }
  $doc->{'application-date'} = date( 'Y/m/d' );

  //Save the resume if it exists
  if ( $_FILES[ 'resume-upload' ][ 'tmp_name' ] != '' ) {

    $resume = file_get_contents( $_FILES[ 'resume-upload' ][ 'tmp_name' ] );
    $result = $client->storeAsAttachment( $doc, $resume, 'resume.pdf', 'application/pdf' );
  }
	
  //Redirect
   header('Location: employment-successful.html');
}

//function get_application_list()
//{
//	return "";
//}


?>
