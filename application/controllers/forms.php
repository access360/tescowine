<?php
if (!defined('BASEPATH'))
	exit('No direct script access allowed');

class Forms extends CI_Controller {

	/**
	 *
	 */

	public function index() {
		$this -> session -> unset_userdata('sessionID');
		$data['mainContent'] = "content/frontpage";
		$this -> load -> vars($data);
		$this -> load -> view('templates/base');
	}
	
	function rateWine() {
		
		$starValue = $this->input->post('starvalue');
		$wineID = $this->input->post('windeID');
	}

}
