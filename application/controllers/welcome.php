<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	 
	 
	public function index()
	{
		$this->load->view('welcome_message');
	}
	
	function displayxml() 
	{
		 $this->load->model('stand_model');
	$xml = file_get_contents(base_url().'xml/TescoWineFeed.xml');
	
	 
	 $xml = str_replace(".\xe2\x80\xa9<as:eol/>",".\n\n<as:eol/>",$xml);
	
	 $data['xmlo'] = simplexml_load_string($xml); 
	 
	 foreach($data['xmlo']->channel->item as $row):
		 
		 
		 
		$productID = $row->TPNB;
		
		$productname = $row->Product_name;
		
		$description = $row->description;
		
		$image = basename($row->Product_Image);
		
		if($this->stand_model->check_wineID_exists($productID)) {
					//it exists so update it
					echo $productID." its there<br/>";
					
					//update it
					$this->stand_model->update_wine($productID, $productname, $description, $image);
					
				} else {
					//it doesn't exist so create it
					echo $productID." NO<br/>";
				}
		
	endforeach;
	 
	 
		 $data['mainContent'] = "content/xmldisplay";
		  $this->load->vars($data);
		 $this->load->view('templates/base');
	}
	
	function displaycsv() 
	{
		 $this->load->library('Getcsv');
		 $this->load->model('stand_model');
		 $data = array('CompanyName', 'WineNameVintage', 'StandName', 'Lond', 'product_ref');
		   $data['csv_array']  = $this->getcsv->get_csv_assoc_array(base_url().'xml/master.csv', $data);
		   
		 	foreach($data['csv_array'] as $row):
				$name = $row['StandName'];
				$location = $row['Lond'];
				$wine_id = $row['product_ref'];
				
				if($this->stand_model->check_stand_exists($name, $location)) {
					//it exists so do nothing
				} else {
					//it doesn't exist so create it
					echo "creating...";
					$this->stand_model->create_stand($name, $location);
				}
				
				if($this->stand_model->check_wine_exists($wine_id, $location)) {
					//it exists so do nothing
				} else {
					//it doesn't exist so create it
					echo "creating wine...";
					$this->stand_model->create_wine($wine_id, $location);
				}
				
				
	

			endforeach;
		   
		   
		   
		   
		    $data['mainContent'] = "content/csvdisplay";
		  $this->load->vars($data);
		 $this->load->view('templates/base');

	}
	
	
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */