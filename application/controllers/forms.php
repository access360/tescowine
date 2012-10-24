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
		$sessionID = $this->input->post('sessionID');
		$output = $starValue." ".$wineID." ".$sessionID;
		
		$this->forms_model->add_rating($starValue, $wineID, $sessionID);
		echo $output;
		
		
	}
	function addEntry() {
		$name = $this->input->post('name');
		$email = $this->input->post('email');
		$phone = $this->input->post('phone');
		$sessionID = $this->input->post('sessionID');
		
		$output  = "name:".$name." email:".$email." phone:".$phone." session:".$sessionID;
		$this->forms_model->add_entry($name, $email, $phone, $sessionID);
		
		echo $output;
	}

}
