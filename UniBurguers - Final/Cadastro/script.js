   // Array para armazenar informações de usuários
   var usuarios = [];

   function cadastrarUsuario() {
       var nome = document.getElementById('nome').value;
       var email = document.getElementById('emailCadastro').value;
       var senha = document.getElementById('senhaCadastro').value;
       var telefone = document.getElementById('telefone').value;
       var dataNascimento = document.getElementById('data_nascimento').value;
       var cidade = document.getElementById('cidade').value;
       var endereco = document.getElementById('endereco').value;

       var novoUsuario = {
        'Nome Completo': nome,
        'E-mail': email,
        'Senha': senha,
        'Telefone': telefone,
        'Data de Nascimento': dataNascimento,
        'Cidade': cidade,
        'Endereco': endereco
    };

    usuarios.push(novoUsuario);

    alert("Usuário cadastrado com sucesso!");
    console.log(usuarios);

    // Salvar usuários no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}


   function validarLogin() {
      
    var email = document.getElementById('emailLogin').value;
    var senha = document.getElementById('senhaLogin').value;

    // Obter usuários do localStorage
    var usuariosArmazenados = JSON.parse(localStorage.getItem('usuarios')) || [];

    var usuarioEncontrado = usuariosArmazenados.find(function(usuario) {
        return usuario['E-mail'] === email && usuario['Senha'] === senha;
    });

    if (usuarioEncontrado) {
        alert("Login bem-sucedido!");
        window.location.href = '../index.html';
    } else {
        alert("E-mail ou senha incorretos.");
    }
}