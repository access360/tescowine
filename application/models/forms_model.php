<?php

class Forms_model extends CI_Model {

	 function __construct()
    {
        parent::__construct();
      
    }
	
	
	function add_rating($starValue, $wineID, $sessionID) {
		$form_data = array(
            'rating' =>$starValue,
            'session_id' => $sessionID,
            'wine_ref' => $wineID
            
        );
        $insert = $this->db->insert('ratings', $form_data);
        return $insert;
	}
	
	function add_entry($name, $email, $phone, $sessionID) {
		$form_data = array(
            'name' =>$name,
            'session_id' => $sessionID,
            'email' => $email,
            'phone' => $phone
            
        );
        $insert = $this->db->insert('entries', $form_data);
        return $insert;
	}
}