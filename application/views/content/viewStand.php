<?php $imageCount = count($wines); 
	
	if($imageCount < 7) {
		$imageWidth = "304px";
		$imageHeight = "550px";
		$wineHeight = "450px";
	}
	if($imageCount > 6 && $imageCount < 13) {
	$imageWidth = "227px";
		$imageHeight = "385px";
		$wineHeight = "300px";
	}
	if($imageCount > 12) {
		$imageWidth = "227px";
		$imageHeight = "385px";
		$wineHeight = "300px";
	}


?>
<style type="text/css">


.wineRack {
		text-align:center;
		border:0px solid #000;
		float:left;
		width: <?=$imageWidth?> ;
		height:<?=$imageHeight?>;
	}
	.wineRack img {
		height:<?=$wineHeight?>;
	}
	

</style>

<div id="standHeading">
<?php foreach($stand as $row): ?>
	
		
	<h3><?=$row->stand_location?> <?=$row->stand_name?></h3>

	
	<?php endforeach;?>	</div>
	
	<div id="wineHeading">
		<a href="<?=base_url()?>welcome/stand_menu">BACK</a>
	</div>
	
<div id="wineContainer">
<?php foreach($wines as $row): ?>
	
	<div class="wineRack" id="<?=$row->wine_id?>">
		<img   src="<?=base_url()?>images/wines/<?=$row->product_image?>"/><br/>
	<?=$row->product_name?>
	</div>
	
	<?php endforeach;?>
	</div>
	
	
<?php foreach($wines as $row): ?>	
<div id="wine_<?=$row->wine_id?>" class="popupBack">
<div class="popup">
	<div class="boxPadding">
	<div class="closePopup"></div>
	<h1><?=$row->product_name?></h1><br/>
	<div style="float:left; width:200px; padding-left:100px;"><img height="445px;" src="<?=base_url()?>images/wines/<?=$row->product_image?>"/></div>
	
	<div style="float:left; width:520px;"><?=$row->description?></div>
	
	<div class="starRating" id="star_<?=$row->product_ref?>">
	
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
	
	<input id="starValueInput" name="starvalue"/>
	<div class="submitReview">
		SUBMIT
	</div>
	</div>	
	
	
	</div>
</div>
</div>
<?php endforeach;?>

<div
<div id="detailsForm" class="popupBack">
	<div class="popup">
	<div class="boxPadding">
		<div class="closePopup"></div>
		<h1>Thanks for your rating</h1>
		<h2>
			Enter the prize draw to
win a case of this wine
		</h2>
		<p>Name<br/><input  name="name"/></p>
		
		<p>Email<br/><input  name="email"/></p>
		
		<p>Phone<br/><input  name="phone"/></p>
		
		<div class="loadTerms">Terms</div>
	</div>
	</div>
	
</div>
<div id="terms" class="popupBack">
	<div class="popup">
	<div class="boxPadding">
		<div class="closePopup"></div>
		terms to go here
	</div>
	</div>
	
</div>

