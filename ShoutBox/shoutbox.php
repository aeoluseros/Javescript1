<?php include 'database.php' ?>

<?php
    if(isset($_POST['title']) && isset($_POST['memo'])){
        $title = ms_escape_string($_POST['title']);     //helps to prevent sql injection
        $memo = ms_escape_string($_POST['memo']);
        $date = ms_escape_string($_POST['date']);

        //Set Timezone
        date_default_timezone_set('America/New_York');
        $date=date('h:i:s a',time());

        $query = "INSERT INTO dbo.shouts (name, comment, date) VALUES ('$title', '$memo', '$date')";

        if(!sqlsrv_query($conn, $query)){
            echo 'Error: '.sqlsrv_errors($conn);
        }else{
            echo '<li><strong>'.$title.'</strong> : '.$memo.' ['.$date.'] </li>';
        }
    }

function ms_escape_string($data) {
    if ( !isset($data) or empty($data) ) return '';
    if ( is_numeric($data) ) return $data;

    $non_displayables = array(
        '/%0[0-8bcef]/',            // url encoded 00-08, 11, 12, 14, 15
        '/%1[0-9a-f]/',             // url encoded 16-31
        '/[\x00-\x08]/',            // 00-08
        '/\x0b/',                   // 11
        '/\x0c/',                   // 12
        '/[\x0e-\x1f]/'             // 14-31
    );
    foreach ( $non_displayables as $regex )
        $data = preg_replace( $regex, '', $data );
    $data = str_replace("'", "''", $data );
    return $data;
}

?>





