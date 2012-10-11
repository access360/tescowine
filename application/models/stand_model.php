<?php

class Stand_model extends CI_Model {

	 function __construct()
    {
        parent::__construct();
      
    }
	function check_stand_exists($name, $location)
	{
			$this->db->where('stand_name', $name);
			$this->db->where('stand_location', $location);
        $query = $this->db->get('stands');
        if ($query->num_rows > 0) {
            return $query->result();
        }
		
		
	}
	
	function check_wine_exists($product_ref, $location)
	{
			$this->db->where('product_ref', $product_ref);
			$this->db->where('stand_id', $location);
        $query = $this->db->get('wines');
        if ($query->num_rows > 0) {
            return $query->result();
        } else {
        	return false;
        }
		
		
	}
	function check_wineID_exists($product_ref)
	{
			$this->db->where('product_ref', $product_ref);
		
        $query = $this->db->get('wines');
        if ($query->num_rows > 0) {
            return $query->result();
        } else {
        	return false;
        }
		
		
	}
	
	function create_stand($name, $location)
	{
		$form_data = array(
            'stand_location' =>$location,
            'stand_name' => $name
            
        );
        $insert = $this->db->insert('stands', $form_data);
        return $insert;
	}
	
	
	function create_wine($wine_id, $location)
	{
		$form_data = array(
            'stand_id' =>$location,
            'product_ref' => $wine_id
            
        );
        $insert = $this->db->insert('wines', $form_data);
        return $insert;
	}
	
	function update_wine($productID, $productname, $description, $image)
	{
		$form_data = array(
            
            'product_name' => "$productname",
             'description' => "$description",
              'product_image' => "$image"
            
        );
		$this->db->where('product_ref', $productID);
		$update = $this->db->update('wines', $form_data);
        return $update;
	}
	
	
}