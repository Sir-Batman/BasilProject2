//Load the data from the json file, and append it to the table element in the webpage
$.getJSON('./indirect.json', function(data) {         
    //console.log(data);
	for (var i in data){
		$("#information").append(
			"<tr>"+"
				"<td><a href="+data[i].link+">"+data[i].link+"</a></td>"+
				"<td>"+data[i].description+"</td>"+
				"<td>"+data[i].phone+"</td>"+
			"</tr>"
		);
	}
});
