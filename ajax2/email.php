<?php 
  $servername = "localhost";
  $username = "excelarf";
  $password = "**T0y*6z8e0c";
   $dbname = "excelarf_kajal";
   $var   =$_GET['value'];
  
   if($var=='true')
  {
    $conn = mysqli_connect($servername,$username,  $password, $dbname );
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    }
  $result = $conn->query("SELECT * FROM Info ORDER BY email desc LIMIT 5");
  $data = array();
  while ( $row = mysqli_fetch_row($result) )
   {
    $data[] = $row;
   }
  echo json_encode( $data );
  }

   if($var=='false')
   {
  $conn = mysqli_connect($servername,$username,  $password, $dbname );
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    }
  $result = $conn->query("SELECT * FROM Info ORDER BY email   LIMIT 5");
  $data = array();
  while ( $row = mysqli_fetch_row($result) )
   {
    $data[] = $row;
   }
  echo json_encode( $data );
}
  


  