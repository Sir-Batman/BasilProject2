<pre>
<?php
	$jsobase = '/var/www/basil/htdocs/therapist/therapist.json';
	$newtherapist = array(
		"name" => $_POST['name'],
		"url" => $_POST['url'],
		"phone" => $_POST['phone'],
	);
	//file_put_contents(
	print_r(
		$jsobase, json_encode(
			json_decode(file_get_contents($jsobase))[] = $newtherapist
		)
	);
?>
<pre>
