// Seu código Javascript vem aqui
var numeros = '1234567890'
var lmin = 'abcdefghijklmnopqrstuvwxyz'
var lmai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var simb = '.,;><?/()`'
var tudo = []
var senhaGerada = ""

addEventListener("DOMContentLoaded", () =>{

    var btnGerarSenha = document.getElementById("generate")
    btnGerarSenha.addEventListener("click", () => {
        senhaGerada = ""
        var qnt = document.getElementById("length").value
        if(qnt > 30){
            qnt = 30
        }
        else if(qnt < 4){
            qnt = 4
        }
        tudo = []

        var chlmin = document.getElementById("lowercase")
        if (chlmin.checked){
            tudo += lmin
        }
        
        var chlmai = document.getElementById("uppercase")
        if (chlmai.checked){
            tudo += lmai
        }
        
        var chnum = document.getElementById("numbers")
        if (chnum.checked){
            tudo += numeros
        }
        
        var chsym = document.getElementById("symbols")
        if (chsym.checked){
            tudo += simb  
        }

        if(tudo == ""){
            alert("Por favor, selecionar uma ou mais checkboxes")
            document.querySelector("#output").innerHTML = ""
        }
        else{
            for(var i = 0; i < qnt; i++){
                senhaGerada += tudo[Math.floor(Math.random() * tudo.length)]
            }
            
            document.querySelector("#output").innerHTML = senhaGerada ?? ""
        }
        document.querySelector("#forca").innerHTML = gerarForcaSenha()
    })
      
    function gerarForcaSenha() {
        var totalForca = 0
        if (document.getElementById("lowercase").checked){
            totalForca += 1
        }
        if (document.getElementById("uppercase").checked){
            totalForca += 1
        }
        if (document.getElementById("numbers").checked){
            totalForca += 1
        }
        if (document.getElementById("symbols").checked){
            totalForca += 1
        }

        if(totalForca == 4 || totalForca == 3) {
            return "Senha forte"
        }
        else if(totalForca == 2){
            return "Senha mediana"
        }
        else{
            return "Senha fraca"
        }
        
    }

    var btnCopiarSenha = document.getElementById("copy")
    btnCopiarSenha.addEventListener("click", () => {
            if (tudo.length){
            
                // Copy the text inside the text field
                navigator.clipboard.writeText(senhaGerada);
                
                // Alert the copied text
                alert("Texto copiado: " + senhaGerada);
            
            }
            else{
                alert("Não foi possível realizar essa ação")
            }
        document.querySelector("#copy").addEventListener("click", copy); 
    })   
})

