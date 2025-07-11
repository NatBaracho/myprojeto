/**
 * Função para alternar entre modo claro e escuro
 * Esta função é chamada quando o usuário clica no switch
 */
function toggleMode(){
    // Obtém a referência ao elemento HTML (tag <html>)
    const html = document.documentElement
    
    // Alterna a classe "light" no elemento HTML
    // Se a classe existir, ela será removida; se não existir, será adicionada
    html.classList.toggle("light") // Isto faz a mesma função que está no codigo acima.
    
    // Seleciona o elemento de imagem dentro do perfil
    // Usa querySelector para encontrar a img dentro do elemento com id "profile"
    const img = document.querySelector("#profile img")
    
    // Lógica para trocar a imagem do avatar baseada no tema atual
    // Verifica se o elemento HTML contém a classe "light"
    if(html.classList.contains("light")){
        // MODO CLARO: Se estiver no modo claro, usa a imagem específica para o tema claro
        img.setAttribute("src", "./assets/avatar-light.png")
    }else{
        // MODO ESCURO: Se estiver no modo escuro, usa a imagem padrão
        // (remove o tema claro e volta para o tema escuro)
        img.setAttribute("src", "./assets/avatar.png")
    }
}
/*
    if(html.classList.contains("light")){
        html.classList.remove("light")
    } else {
        html.classList.add("light")
    }
*/
