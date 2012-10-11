<?php 

	
	foreach($xmlo->channel->item as $row):
		
		echo '<p><h3>'.$row->Product_name.'</h3>'.$row->description."</p><br/>";
		
	endforeach;
	
	?>