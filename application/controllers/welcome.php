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
	
		 $data['mainContent'] = "content/xmldisplay";
		  $this->load->vars($data);
		 $this->load->view('templates/base');
	}
	
	function displaycsv() 
	{
		 $this->load->library('Getcsv');
		 $data = array('CompanyName', 'WineNameVintage', 'StandName', 'Lond', 'product_ref');
		   $data['csv_array']  = $this->getcsv->get_csv_assoc_array(base_url().'xml/master.csv', $data);
		    $data['mainContent'] = "content/csvdisplay";
		  $this->load->vars($data);
		 $this->load->view('templates/base');

	}
	
	
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */