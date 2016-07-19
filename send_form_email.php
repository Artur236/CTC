<?php

if(isset($_POST['email'])) {


  $email_to = "dovgalv88@gmail.com";

  $email_subject = "CTC feedback form";





  function died($error) {

    echo "We are very sorry, but there were error(s) found with the form you submitted. ";

    echo "These errors appear below.<br /><br />";

    echo $error."<br /><br />";

    echo "Please go back and fix these errors.<br /><br />";

    die();

  }



    // validation expected data exists

  if(!isset($_POST['name']) ||

    !isset($_POST['mail']) ||

    !isset($_POST['title']) ||

    !isset($_POST['comment'])) {

    died('We are sorry, but there appears to be a problem with the form you submitted.');       

}



    $name = $_POST['name']; // required

    $email = $_POST['mail']; // required

    $title = $_POST['title']; // not required

    $comments = $_POST['comment']; // required





    function clean_string($string) {

      $bad = array("content-type","bcc:","to:","cc:","href");

      return str_replace($bad,"",$string);

    }



    $email_message .= "First Name: ".clean_string($name)."\n";

    $email_message .= "Email: ".clean_string($mail)."\n";

    $email_message .= "Title: ".clean_string($title)."\n";

    $email_message .= "Comment: ".clean_string($comment)."\n";





// create email headers

    $headers = 'From: '.$email_from."\r\n".

    'Reply-To: '.$email_from."\r\n" .

    'X-Mailer: PHP/' . phpversion();

    @mail($email_to, $email_subject, $email_message, $headers);  

    ?>



    <!-- include your own success html here -->



    Thank you for contacting us. We will be in touch with you very soon.



    <?php

  }

  ?>