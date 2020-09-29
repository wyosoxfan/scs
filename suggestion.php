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

//Entry point for the rest api
$possible_get_actions = array();
$possible_post_actions = array( "employee" );
if ( $_SERVER[ "REQUEST_METHOD" ] == "GET" && isset( $_GET[ "action" ] ) && in_array( $_GET[ "action" ], $possible_get_actions ) ) {
  switch ( $_GET[ "action" ] ) {
    
  }
} else if ( $_SERVER[ "REQUEST_METHOD" ] == "POST" && isset( $_GET[ "action" ] ) && in_array( $_GET[ "action" ], $possible_post_actions ) ) {
  switch ( $_GET[ "action" ] ) {
    case "employee":
      save_suggestion();
      break;
  }
}

function save_suggestion() {
  //Set a new connector to the CouchDB server
  $client = new PHPOnCouch\ CouchClient( 'http://admin:Pu758KazLT@localhost:5984', 'employee' );

  //Create the document
  $doc = new PHPOnCouch\ CouchDocument( $client );

  //Save the fields
  foreach ( $_POST as $key => $value ) {
    $doc->{$key} = $value;
  }
	
  //Redirect
   header('Location: employee-center.html');
}

//function get_application_list()
//{
//	return "";
//}


?>
