	
<?php foreach($wines as $row): ?>	
<div id="wine_<?=$row->wine_id?>" class="popupBack">
<div class="popup">
	<div class="boxPadding">
	<div class="closePopup"></div>
	<div class="wineTitle"><h2><?=$row->product_name?></h2></div>
	<div style="float:left; width:200px; padding-left:100px; margin-bottom:20px;"><img height="445px;" src="<?=base_url()?>images/wines/<?=$row->product_image?>"/></div>
	<?php
	$wineLength = 275;
	$description = substr(trim($row->description),0, $wineLength);
	if(strlen($row->description) > $wineLength) {
		$readmore = "...<br/>Read More";
	} else {
		$readmore = "";
	}
	
	
	?>
	<div class="wineDescription" style="float:left; width:550px; margin-bottom:20px;"><em><?=$description?><?=$readmore?></em></div>
	
	<div class="starRating" id="star_<?=$row->product_ref?>">
		<h4>Rate this wine by tapping the stars below</h4>
	
	<div class="star  oneStar">
		
	</div>	
	<div class="star  twoStar">
		
	</div>	
	<div class="star  threeStar">
		
	</div>	
	<div class="star  fourStar">
		
	</div>	
	<div class="star  fiveStar">
		
	</div>	
	
	<input type="hidden" id="starValueInput" name="starvalue"/>
	
	<div style="width:230px; float:right; " class="buttonContainer">
	
<div id="submitReview" class="buttonBevel submitReview">

		Submit
</div>
</div>
	</div>	
	
	
	</div>
</div>
</div>
<?php endforeach;?>