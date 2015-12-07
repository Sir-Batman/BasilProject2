<?php
	$jsobase = '/var/www/basil/htdocs/therapist/therapist.json';
	$newtherapist = array(
		"name" => $_POST['name'],
		"url" => $_POST['url'],
		"phone" => $_POST['phone'],
	);
    $data = json_decode(file_get_contents($jsobase));
    $data[] = $newtherapist;
	file_put_contents($jsobase, json_encode($data));
?>
