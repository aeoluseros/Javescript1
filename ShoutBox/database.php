<?php

//dl('php_pdo_sqlsrv_7_nts.dll');

//connect to SQL Server
$serverName = "AEOLUSEROS\AEOMSSQLFIN01";
$connectionInfo = array( "Database"=>"Sandbox", "UID"=>"sandbox", "PWD"=>"Hyde015815");
$conn = sqlsrv_connect( $serverName, $connectionInfo);


if( $conn ) {
    //echo "Connection to Sandbox datbase established.<br />";
}else{
    echo "Connection to Sandbox datbase could not be established.<br />";
    die( print_r( sqlsrv_errors(), true));
}

?>  <!--  the closing tag is not necessary if all php-->


