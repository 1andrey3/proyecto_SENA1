<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Controlador_nuevo extends CI_Controller {

    function __construct(){
        parent::__construct();
    }
    


    
    function index(){
        $suma = 1+1;



        $resta= $suma- 1;
        $arreglos['nueva_var'] ="Mi nombre(envíado desde un arreglo del controlador)".$suma."<br> ".$resta;
        $this->load->view('nueva_vista/nose',$arreglos);
    }


}

?>