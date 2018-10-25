function numeros(e)
{
    // console.log(e)
    // console.log(document.all)
    tecla = (document.all) ? e.keyCode : e.which;
    // if (document.all)
    // {
    //     tecla = e.keyCode;
    // }else
    // {
    //     tecla = e.which;
    // }
    if (tecla==8) return true; // 3{}
    patron =/[\d]/;
    te = String.fromCharCode(tecla); // 5
    return patron.test(te);
}
var cont=true;
var f= true;
var genero=false;
var validar = function()
{
    
    var doc = document.getElementById("doc").value;
    var Nom1 = document.getElementById("Nom1").value;
    var Nom2 = document.getElementById("Nom2").value;
    var App= document.getElementById("App").value;
    var Mail= document.getElementById("Mail").value;
    var rol= document.getElementById("rol");
    var mail2= document.getElementById("Mail2").value;
    var index= mail2.indexOf(".");
    var mail= Mail.length;
    var tel = document.getElementById("telef").value;
    var tell = tel.length;
    console.log(". ="+index);
    console.log("lenght:"+mail)
    var MAN= document.getElementById("Hombre").checked;
    var WOMAN= document.getElementById("Mujer").checked;
    var aa = document.getElementsByName("sexo").length;
    console.log("index___"+aa)
    for(var a=0; a<=aa;a++){
        if(MAN==true || WOMAN==true){
            genero=true;
        }
    }
    console.log("men:"+MAN)
    console.log("woman:"+WOMAN)
    if(doc.length== 0  || Nom1.length==0 ||Nom2.length==0 || App.length==0 || Mail.length==0|| rol.value=="" || mail2.length==0 || genero==false)
    {
        if(cont==true)
        {
            // $("#error").show('900');
            document.getElementById("error").innerHTML='<div id="error"><b style="font-size:20px;">Por favor, verifique si tiene campos vacíos.</b></div>';
            document.getElementById("error").style.border="5px inset gray";
            document.getElementById("error").style.transition="0.5s";
            cont=false;
        }else
        {
            document.getElementById("error").innerHTML = '<div id="error"><b style="font-size:20px;">Por favor, verifique si tiene campos vacíos.</b></div>';
            document.getElementById("error").style.border="8px outset red";
            cont=true;
        }
        return false;
    }
    if(doc.length <5 )
    {
        if (f==true) 
        {
            document.getElementById("error").innerHTML = '<div class="borde1" id="error"><b style="font-size:20px;">El número de documento no puede tener menos de cinco digitos</b></div>';
            document.getElementById("error").style.border="5px inset gray";
            document.getElementById("error").style.transition="0.5s";
            document.getElementById("doc").focus();
            f=false;
        }else
        {
            document.getElementById("error").innerHTML = '<div class="borde" id="error"><b style="font-size:20px;">El número de documento no puede tener menos de cinco digitos</b></div>';
            document.getElementById("error").style.border="8px outset red";
            document.getElementById("doc").focus();
            f=true;
        }
        return false;
    }
    if (index != "-1") 
    {
        if(mail2.indexOf('.') == 0){
            document.getElementById("error").innerHTML = '<div class="borde1" id="error"><b style="font-size:20px;">Debe haber algo antes del "."</b></div>';
            document.getElementById("error").style.border="5px inset gray";
            document.getElementById("error").style.transition="0.5s";
            document.getElementById("Mail2").focus();
            return false;
        }else{
            console.log("Sí HAY PUNTO")
            var final_mail = Mail+"@"+mail2;
            alert(final_mail)
            document.getElementById("Mail").innerHTML='<input class="form-control  col-6 offset-1" type="text" name="correo" id="Mail" value="'+final_mail+'">';
        }
    }else
    {
        document.getElementById("error").innerHTML = '<div class="borde" id="error"><b style="font-size:20px;">Por favor, verifique su email, ya que debe tener un punto después del "@"</b></div>';
        document.getElementById("Mail2").focus();
        console.log("NO HAY UN PUNTO")
        return false;
    }   
    if (tell==10 || tell ==7  ) {
        switch(tell){
            case 10:{
                alert("su número es móvil");
                return false;
            }
            case 7:{
                var fijo = '031 '+tel;
                document.getElementById("telef").innerHTML='<input type="text" id="telef" value="'+fijo+'">';
                alert("su número"+tel+"se le añadirá el 031, quedando \n"+fijo);
                return false;
            }
        }
    }else{
        alert("no es ni 10 ni 7")
        return false;
    }
}