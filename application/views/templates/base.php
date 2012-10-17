<!doctype html>
<html>
<head>
<meta charset="utf-8">
<!-- TemplateBeginEditable name="doctitle" -->
<title>Tesco Wine</title>
<!-- TemplateEndEditable -->
<!-- TemplateBeginEditable name="head" -->
<!-- TemplateEndEditable -->
<link href="<?=base_url()?>css/base.css" rel="stylesheet" type="text/css">
<link href="<?=base_url()?>css/map.css" rel="stylesheet" type="text/css">
</head>

<body>
<input type="hidden" id="baseurl" value="<?= base_url() ?>"/>
<div class="container">
  <div class="content">
    
    <?php if(isset($mainContent)) { $this->load->view($mainContent); } ?>
    
    
    
     <!-- end .content --></div>
  <!-- end .container --></div>
  
   <script src="<?=base_url()?>js/jquery.js"></script>
    <script src="<?=base_url()?>js/scripts.js"></script>
</body>
</html>
