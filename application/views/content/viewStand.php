<?php $imageCount = count($wines); 
	
	if($imageCount < 7) {
		$imageWidth = "294px";
		$imageHeight = "550px";
		$wineHeight = "450px";
	}
	if($imageCount > 6 && $imageCount < 13) {
	$imageWidth = "217px";
		$imageHeight = "395px";
		$wineHeight = "300px";
	}
	if($imageCount > 12) {
		$imageWidth = "217px";
		$imageHeight = "395px";
		$wineHeight = "300px";
	}


?>
<style type="text/css">


.wineRack {
		text-align:center;
		border:0px solid #000;
		float:left;
		padding-left:5px;
		padding-right:5px;
		width: <?=$imageWidth?> ;
		height:<?=$imageHeight?>;
	}
	.wineRack img {
		height:<?=$wineHeight?>;
	}
	

</style>

<div id="standHeading">
	
<?php foreach($stand as $row): ?>
	<?php // echo count($stand);?>
		<div class="centerheading" <?php if(strlen($row->stand_name) > 42 ) { ?> style="top:20%;" <?php  } ?>  <?php if(count($stand) > 1 ) { ?> style="top:10%;" <?php  } ?>>
	<h3><?=$row->stand_location?> <?=$row->stand_name?></h3>

	</div>
	<?php endforeach;?>	</div>
	
	<div id="wineHeading">
		<div style="width:720px; float:left; ">
		<h3 style="text-align:left;">Touch a bottle of wine
to enter your rating</h3>
</div>
<div style="width:180px; float:right; margin-top:30px; " class="buttonContainer">
	
<div id="startButton" class="buttonBevel">
<a href="<?=base_url()?>welcome/stand_menu">Back</a>
</div></div>

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
	<div class="wineTitle"><h2><?=$row->product_name?></h2></div>
	<div style="float:left; width:200px; padding-left:100px; margin-bottom:20px;"><img height="445px;" src="<?=base_url()?>images/wines/<?=$row->product_image?>"/></div>
	
	<div class="wineDescription" style="float:left; width:550px; margin-bottom:20px;"><em><?=$row->description?></em></div>
	
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

<div
<div id="detailsForm" class="popupBack">
	<div class="popup">
	<div class="boxPadding">
		<div class="closePopup"></div>
		<h1>Thanks<br/> for your rating</h1>
		<h2>
			Enter the prize draw to
win a case of this wine
		</h2>
		<div class="registerBox">
		<p>Name:*<br/><input  name="name"/></p>
		
		<p>Email:*<br/><input  name="email"/></p>
		
		<p>Phone:*<br/><input  name="phone"/></p>
		<p>I have read the terms:*</p><div class="formCheckbox"></div>
			<div style="width:230px; float:right; " class="buttonContainer">
	
<div id="submitEntry" class="buttonBevel ">

		Submit
</div>
</div>
		* Required field<br/>
		<div class="loadTerms">View Terms and Conditions</div>
		</div>
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
