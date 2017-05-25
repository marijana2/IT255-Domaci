<?php
function korisnici(){
 $konekcija = mysqli_connect("localhost","root","","angular") or die("Error " . mysqli_error($konekcija));
    $sql = "SELECT * FROM dz10";
    $rez = mysqli_query($konekcija, $sql) or die
    ("Error".mysqli_error($konekcija));
    $niz = array();
    while($red = mysqli_fetch_assoc($rez)){
           $niz[] = $red; 
    }
    return json_encode($niz);
}
?>