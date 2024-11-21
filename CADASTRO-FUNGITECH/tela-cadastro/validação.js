function valida_campo(){
    const nomeUsuario = nome.value;
    const idadeUsuario = idade.value;
    const cidadeUsuario = cidade.value;
    const telefoneUsuario = telefone.value;
    const emailUsuario = email.value;
    const senhaUsuario = senha.value;

    if (nomeUsuario.value == '') {
        window.alert('Campo nome, inválido');
         document.getElementById('nome').style.border = '1px solid red';
    }

    if (idadeUsuario.value == '') {
        window.alert('Campo idade, inválido');
        document.getElementById('idade').style.border = '1px solid red';
    }
        
    if (cidadeUsuario.value == '') {
        window.alert('Campo cidade, inválido');
        document.getElementById('cidade').style.border = 'px solid red';
    }

    if (telefoneUsuario.value == '') {
        window.alert('Campo telefone, inválido');
        document.getElementById('telefone').style.border = '1px solid  red';
    }

    if (emailUsuario.value == '') {
        window.alert('Campo email, inválido');
        document.getElementById('email').style.border = '1px solid red';

    }

    if (emailUsuario.indexOf('@').value == '' || emailUsuario.indexOf('.').value == '') {
        window.alert('Este endereço de email não é válido');
        document.getElementById('email').style.border = '1px solid  red'

    }
        
    if (senhaUsuario.value == '') {
        window.alert('Campo senha, inválido');
        document.getElementById('senha').border = '1px solid red';
    }

    if (senhaUsuario.length < 6) {
        window.alert('Sua senha precisa ter, pelo menos, 6 caracteres');
        document.getElementById('senha').style.border = 'px solid red'
        
    } else {
        document.querySelectorAll('input').style.border = 'green';

    }
   
}
