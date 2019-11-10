function validar() {
    var pass = document.getElementById('idpass').value;
    var repass = document.getElementById('idrepass').value;
    var nome = document.getElementById('idnome').value;
    var email = document.getElementById('idemail').value;

    if(nome ==""){
    alert('Preencha o campo com seu nome');
    idnome.focus();
    return false;    
    }
    if(email ==""){
        alert('Preencha o campo com seu email');
        idemail.focus();
        return false;       
    }
    if(pass ==""){
        alert('Preencha o campo com sua senha');
        idpass.focus(); 
        return false;      
    }
    if(repass==""){
        alert('Preencha o campo com sua senha novamente');
        idrepass.focus(); 
        return false;   
    }
    else{
        entrar();
    }

}

function entrar(){
    var pass = document.getElementById('idpass').value;
    var repass = document.getElementById('idrepass').value;
    var nome = document.getElementById('idnome').value;
    var div = document.getElementById('textomodal');

    
    if (pass != "" && repass != "" && pass === repass)
    {
        
        document.getElementById("IDmodal").style.display='flex';
        document.getElementById("boxlogin").style.display='none';
        document.getElementById("nochecked").style.display='none';
        div.innerHTML = "<p>Olá <b>"+nome+"</b>!, "+ "essa página tem propósitos acadêmicos, não possui forma de cadastro com banco de dados porém possui verificação de senha.</p>"+"<h3>Suas senhas conferem!!!</h3>"
        

        
    }
    else
    {
        document.getElementById("IDmodal").style.display='flex';
        document.getElementById("boxlogin").style.display='none';
        document.getElementById("checked").style.display='none';
        document.getElementById("idprosseguir").style.display='none';
        div.innerHTML = "<p>Olá <b>"+nome+"</b>!, "+ "essa página tem propósitos acadêmicos, não possui forma de cadastro com banco de dados porém possui verificação de senha.</p>"+"<h3>Suas senhas não conferem!!!</h3>"

    }
}

function voltar(){
    window.location.reload();
}

function prosseguir(){
    window.location.assign("index.html");
}

