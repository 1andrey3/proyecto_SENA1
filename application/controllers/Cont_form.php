<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    class Cont_form extends CI_Controller{
        function __construct(){
            parent::__construct();
            $this->load->model('Modelos');
        }

        public function index(){
            $this->load->view('formulario/vista_form');
        }
        
        public function subir_datos(){
            // print_r($this->input->post()); para mostrar qué hay en los arreglos
            // var_dump($this->input->post()); lo mismo de arriba
            $datos= array(
                'No_documento' =>$this->input->post("nodocu"),
                'Nombres' =>$this->input->post("nombres"),
                'Apellidos'=>$this->input-> post("apellidos"),
                'Email' =>$this->input->post("correo"),
                'Rol' =>$this->input->post("rol")
            );
            // comentario
            $this->Modelos->guardar($datos);
            // $this->vista_tabla();
            header('location: http://localhost/proyecto_SENA1/Cont_form/vista_tabla');
        }

        public function vista_tabla()
        {   
            $datas['users'] = $this->Modelos->get_usuarios();
            $this->load->view('formulario/Vista_form', $datas);
            // $this->load->view('formulario/TablaBootstrap/Bootstrap4/vista_form', $datas);
        }
    }
?>