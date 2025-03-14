function colorirFundo(){
    document.body.bgColor = "#ffffff";
    document.body.style.color = "#000000";
    let txtCor = document.getElementById("txtCor");
    let corFundo = txtCor.value.toLowerCase();

    switch (corFundo) { // vai detectar a cor e se a cor existir ele irá fazer a troca 
        case "azul" :
            document.body.bgColor = "aqua";
            //document.body.style.color = "black";
            break;
        case "preto" :
            document.body.bgColor = "black";
            document.body.style.color = "white"
            break;
        case "roxo" :
            document.body.bgColor = "purple";
            //document.body.style.color = "black";
            break;
        case "vermelho" :
            document.body.bgColor = "red";
            //document.body.style.color = "black";
            break;
        case "amarelo" :
            document.body.bgColor = "yellow";
            //document.body.style.color = "black";
            break;
        case "verde" :
            document.body.bgColor = "green";
            //document.body.style.color = "black";
            break;
        case "rosa" :
            document.body.bgColor = "pink";
            //document.body.style.color = "black";
            break;
        case "cinza" :
            document.body.bgColor = "gray";
            document.body.style.color = "white";
            break;
        case "roxa" :
            document.body.bgColor = "purple";
            //document.body.style.color = "black";
            break;
        case "preta" :
            document.body.bgColor = "black";
            document.body.style.color = "white"
            break;
        case "amarela" :
            document.body.bgColor = "yellow";
            //document.body.style.color = "black";
            break;
        case "vermelha" :
            document.body.bgColor = "red";
            //document.body.style.color = "black";
            break;
        case "rosa choque" :
            document.body.bgColor = "#FF69B4";
            //document.body.style.color = "black";
            break;
        case "laranja" :
            document.body.bgColor = "orange";
            //document.body.style.color = "black";
            break;
        default:
            document.body.bgColor = "white";
            //document.body.style.color = "black";
            break;
        
    }
}
document.getElementById("txtCor").addEventListener('keyup', function(){
    colorirFundo();
});
function colorirTexto(){
    let corTexto = document.getElementById("txtCorTexto").value.toLowerCase();
    
    switch (corTexto) { // vai detectar a cor e se a cor existir ele irá fazer a troca 
        case "azul" :
            document.body.style.color ="aqua";
            //document.body.style.color = "black";
            break;
        case "preto" :
            document.body.style.color ="black";
            break;
        case "roxo" :
            document.body.style.color = "purple";
            //document.body.style.color = "black";
            break;
        case "vermelho" :
            document.body.style.color = "red";
            //document.body.style.color = "black";
            break;
        case "amarelo" :
            document.body.style.color = "yellow";
            //document.body.style.color = "black";
            break;
        case "verde" :
            document.body.style.color = "green";
            //document.body.style.color = "black";
            break;
        case "rosa" :
            document.body.style.color = "pink";
            //document.body.style.color = "black";
            break;
        case "cinza" :
            document.body.style.color = "gray";
            break;
        case "roxa" :
            document.body.style.color = "purple";
            //document.body.style.color = "black";
            break;
        case "preta" :
            document.body.style.color = "black";
            break;
        case "amarela" :
            document.body.style.color = "yellow";
            //document.body.style.color = "black";
            break;
        case "vermelha" :
            document.body.style.color = "red";
            //document.body.style.color = "black";
            break;
        case "rosa choque" :
            document.body.style.color = "#FF69B4";
            //document.body.style.color = "black";
            break;
        case "laranja" :
            document.body.style.color = "orange";
            //document.body.style.color = "black";
            break;
        default:
            document.body.style.color = "white";
            //document.body.style.color = "black";
            break;
    }
}
document.getElementById("txtCorTexto").addEventListener('keyup', function(){
    colorirTexto();
});