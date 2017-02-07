<?php 
  $servername = "localhost";
  $username = "excelarf";
  $password = "**T0y*6z8e0c";
   $dbname = "excelarf_kajal";

  $conn = mysqli_connect($servername,$username,  $password, $dbname );
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    }
  $result = $conn->query("SELECT * FROM Info ORDER BY name,email,dates  LIMIT 5");
  $data = array();
  while ( $row = mysqli_fetch_row($result) )
   {
    $data[] = $row;
   }
  echo json_encode( $data );
?>