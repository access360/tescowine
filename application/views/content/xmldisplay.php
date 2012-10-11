<?php 

echo base_url().'xml/TescoWineFeed.xml';
	$xml = file_get_contents(base_url().'xml/TescoWineFeed.xml');
	
	 
	 $xml = str_replace(".\xe2\x80\xa9<as:eol/>",".\n\n<as:eol/>",$xml);
	
	 $xmlo = simplexml_load_string($xml); 
	foreach($xmlo->channel->item as $row):
		
		echo '<p><h3>'.$row->Product_name.'</h3>'.$row->description."</p><br/>";
		
	endforeach;
	
	?>