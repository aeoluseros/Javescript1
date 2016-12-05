<?php //phpinfo(); ?>
<?php include 'database.php'; ?>
<?php
    $query = "SELECT * FROM shouts ORDER BY sid DESC";
    $shouts = sqlsrv_query($conn, $query);
    if( $shouts === false) {
        die( print_r( sqlsrv_errors(), true) );
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Shoutbox</title>
        <link rel="stylesheet" href="Contents/style.css">

        <script src="Scripts/jquery-2.2.4.js"></script>
        <script src="Scripts/script.js"></script>
    </head>
    <body>
        <div id="container">
            <header>
                <h1>JS Shoutbox</h1>
            </header>
            <div id="shouts">
                <ul>
                    <?php while($row=sqlsrv_fetch_array($shouts, SQLSRV_FETCH_ASSOC)):?>
                        <li><strong><?php echo $row['name']; ?></strong> : <?php echo $row['comment']; ?> [<?php echo $row['date']?>]</li>
                    <?php endwhile; ?>
                </ul>
            </div>
            <footer>
                <form>
                    <label>Title: </label>
                    <input type="text" id="title">
                    <label>Memo: </label>
                    <input type="text" id="memo">
                    <input type="submit" id="submit" value="SHOUT!">
                </form>
            </footer>
        </div>
    </body>
</html>






