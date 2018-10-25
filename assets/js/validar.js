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
    console.log(". ="+index);
    console.log("lenght:"+mail)
    if(doc.length == 0  || Nom1.length==0 ||Nom2.length==0 || App.length==0 || Mail.length==0|| rol.value=="" || mail2.length==0)
    {
        if(cont==true)
        {
            // $("#error").show('900');
            document.getElementById("error").innerHTML='<div id="error"><b>Por favor, verifique si tiene campos vacíos.</b></div>';
            document.getElementById("error").style.border="3px inset black";
            document.getElementById("error").style.transition="0.5s";
            cont=false;
        }else
        {
            document.getElementById("error").innerHTML = '<div id="error"><b>Por favor, verifique si tiene campos vacíos.</b></div>';
            document.getElementById("error").style.border="8px inset red";
            cont=true;
        }
        return false;
    }
    if(doc.length <5 )
    {
        if (f==true) 
        {
            var nose = document.getElementById("Mail");
            nose.addEventListener('blur', function(){
                if(Mail == "1@a.algo"){
                    alert("AAAA")
                }else{
                    alert("EEEEE")
                }
            });
            
            document.getElementById("error").innerHTML = '<div class="borde1" id="error"><b>El número de documento no puede tener menos de cinco digitos</b></div>';
            document.getElementById("doc").focus();
            f=false;
        }else
        {
            document.getElementById("error").innerHTML = '<div class="borde" id="error"><b>El número de documento no puede tener menos de cinco digitos</b></div>';
            document.getElementById("doc").focus();
            f=true;
        }
        return false;
    }
    if (index != "-1") 
    {
        if(mail2.indexOf('.') == 0){
            document.getElementById("error").innerHTML = '<div class="borde" id="error"><b>el "." debe tener algo antes y despues de él</b></div>';
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
        document.getElementById("error").innerHTML = '<div class="borde" id="error"><b>Por favor, verifique su email, ya que debe tener un punto después del "@"</b></div>';
        document.getElementById("Mail2").focus();
        console.log("NO HAY UN PUNTO")
        return false;
    }
}
