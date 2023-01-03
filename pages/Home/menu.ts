const menuButton = document.querySelector('.MenuColapsado')
const navBar = document.querySelector('nav')

menuButton?.addEventListener('click', () => {
    if(navBar!.style!.display! === 'flex'){
        navBar!.style!.display! = 'none'
    }else{
        navBar!.style!.display! = 'flex'
    }
})