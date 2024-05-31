
// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

document.querySelector('.cover').addEventListener('click', function(){
           menu_btn.classList.toggle('close-menu')
          document.querySelector('.navbar').classList.remove('slideout')
          document.querySelector('.cover').classList.remove('show-cover')
           
})

// target your menu btn
const menu_btn = document.querySelector('.menu-btn')


menu_btn.addEventListener('click', function(){
     
        menu_btn.classList.toggle('close-menu')
        document.querySelector('.navbar').classList.toggle('slideout')
        document.querySelector('.cover').classList.toggle('show-cover')
        
        

        
})






