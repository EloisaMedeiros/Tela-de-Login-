// função para validar os campos de email e senha
    function validateFields(){
        const emailValid = isEmailValid();
        document.getElementById("recover-password-button").disabled = !emailValid;

        
        const passwordValid = isPasswordValid();
        document.getElementById('login-button').disabled= !emailValid || !passwordValid;

       // const email = document.getElementById("email").value;
       // if (!email){
        //    document.getElementById("recover-password-button").disabled = true;
       // } else if (validateEmail(email)){
       //     document.getElementById("recover-password-button").disabled = false;
      //  } else {
       //     document.getElementById("recover-password-button").disabled = true;

    
        // pegar o valor do campo de email
        // verificar se o campo de email não é vazio e se o email é válido
        // se verdadeiro, então habilitar o botão de recuperar senha
        // se falto, então desabilitar o botão de recuperar senha
    }
    function validateEmail(email){
        return /\S+@\S+\.\S+/.test(email);
    }

    function isEmailValid(){
        const email = document.getElementById("email").value;
        if (!email){
            return false;
        }
        return validateEmail(email);
    }

    function isPasswordValid(){
        const password = document.getElementById("password").value;
        if (!password){
            return false;
        }
        return true;
    }

