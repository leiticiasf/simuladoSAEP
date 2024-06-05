function redirecionar(){
    if (document.getElementById('estudante').checked){
        window.location.href = "pagina_estudante.html";
    }else if(document.getElementById('bibliotecaria').checked){
        window.location.href = "pagina_bibliotecaria.html";
    }else{
        alert("Por favor, selecione uma opção.")
    }
}

function voltarBibliotecaria(){
    window.location.href = "pagina_bibliotecaria.html";
}

function voltarEstudante(){
    window.location.href = "pagina_estudante.html";
}