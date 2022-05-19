
function Login() {
    var usuario = document.getElementById("inputUsuario").value
    var senha = document.getElementById("inputSenha").value

    if (usuario == "admin" && senha == 123456) {
        alert('ADMIN LOGADO - Bem vindo ao sistema')
    }

    else if (usuario == "professor" && senha == prof123) {
        alert('PROFESSOR LOGADO - Bem vindo ao sistema')
    }

    else if (usuario == "aluno" && senha == aluno123) {
        alert('ALUNO LOGADO - Bem vindo ao sistema')
    }

    else {
        alert('Credenciais inválidas')
    }
}