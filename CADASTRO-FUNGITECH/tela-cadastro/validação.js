var nome_usuario = nome.value;
var idade_usuario = idade.value;
var cidade_usuario = cidade.value;
var telefone_usuario = telefone,value;
var email_usuario = email.value;

function valida_campo(){
    if (nome_usuario == null) {
        nome_usuario.style.borderColor = 'red';

    }if (idade_usuario == null) {
        idade_usuario.style.borderColor = 'red';

    }if (cidade_usuario == null) {
        cidade_usuario.style.borderColor = 'red';

    }if (telefone_usuario == null) {
        telefone_usuario.style.borderColor = 'red';

    }if (email_usuario == null) {
        email_usuario.style.borderColor = 'red';

    }if (email_usuario.indexOf('@') == -1 || email_usuario.indexOf('.') == -1) {
        email.usuario.style.borderColor = 'red';
        
    }
}

