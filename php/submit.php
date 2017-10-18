<?php

if (!empty($_POST['name']) AND !empty($_POST['phone']) AND !empty($_POST['email']) AND !empty($_POST['message'])){

  $theme = 'New message';

  $letter ='Full message:\r\n';
  $letter .= '.Name:'$_POST['name'].'\r\n';
  $letter .= '.Phone:'$_POST['phone'].'\r\n';
  $letter .= '.Email:'$_POST['email'].'\r\n';
  $letter .= '.Message:'$_POST['message'].'\r\n';

  if (mail('mewarky@gmail.com', $theme, $letter)){
    header('Location:/index.html');
  } else {
    header('Location:/error.html');
 }
} else {
  header('Location:/error.html');
}
