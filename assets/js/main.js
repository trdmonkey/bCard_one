/* ======================== SHOW SOCIAL NETWORKS ========================= */ 
const showSocial = (toggleCard, socialCard) =>{
    const toggle = document.getElementById(toggleCard),
          social = document.getElementById(socialCard)

    toggle.addEventListener('click', () =>{
        // Si la animacion existe, entonces vamos a agregar la CLASS down-animation
        if(social.classList.contains('animation')){
            social.classList.add('down-animation')

            // Ahora podemos remover el CLASS down-animation
            setTimeout(() =>{
                social.classList.remove('down-animation')
            }, 1000)
        }
        
        // Vamos a agregar la animación del div a traves del CLASS llamado card__social
        social.classList.toggle('animation')
    })
}
showSocial('card-toggle', 'card-social')