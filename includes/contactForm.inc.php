<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $carModel = $_POST['carModel'];
    $mailFrom = $_POST['mail'];
    $typeOfWork = $_POST['typeOfWork'];

    $mailTo = 'deteylingvirus@gmail.com';
    $headers = 'From: ' . $mailFrom;
    $txt = 'You received an email from ' . $name . ".\n\n" . $typeOfWork;

    mail($mailTo, $phone, $carModel, $txt, $headers);
    header('Location: ../index.html?MailSent');
}
