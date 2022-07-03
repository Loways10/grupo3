// FOCAR NA HOME
function foco(){
    document.getElementById('principal-art').focus()
}

// FUNÇÃO PARA TEMA CLARO E ESCURO
var theme = document.getElementById('theme')
theme.addEventListener('change', function(){
    
    if(theme.value == 1){
        document.body.style.setProperty('--color5', '')
        document.body.style.setProperty('--color1', '')
        document.body.style.setProperty('--color0', '')
    }else{
        document.body.style.setProperty('--color5', '#6D6875')
        document.body.style.setProperty('--color1', '#B5838D')
        document.body.style.setProperty('--color0', '#FFCDB2')
    }
})

// FUNÇÃO PARA DISPLAY BLOCK E NONE
function pratoPrincipal(){
    document.getElementById('pratoPrincipal').style.display = "block"
    document.getElementById('doces').style.display = "none"
    document.getElementById('salgados').style.display = "none"
    document.getElementById('principal-art').style.display = "none"
}
function doces(){
    document.getElementById('doces').style.display = "block"
    document.getElementById('pratoPrincipal').style.display = "none"
    document.getElementById('salgados').style.display = "none"
    document.getElementById('principal-art').style.display = "none"
}
function salgados(){
    document.getElementById('salgados').style.display = "block"
    document.getElementById('pratoPrincipal').style.display = "none"
    document.getElementById('doces').style.display = "none"
    document.getElementById('principal-art').style.display = "none"
}

