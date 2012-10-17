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
	
		
	<h2><?=$row->stand_location?> <?=$row->stand_name?></h2>

	
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
	<img  src="<?=base_url()?>images/wines/<?=$row->product_image?>"/><br/>
	
	<?=$row->description?>
	
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
	</div>	
	</div>
</div>
</div>
<?php endforeach;?>