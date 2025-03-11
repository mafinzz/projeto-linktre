function toggleMode(){
   const html = document.documentElement
   html.classList.toggle('light')


   //pegar a tag img
   const img = document.querySelector("#profile img")
   
   
   //substituir a img
   if(html.classList.contains('light')){
        //se tiver light mode, add a mig light
        img.setAttribute('src', './assets/mobile/avatar.png')
    }else{
        //se tiver sem light mode, manter a img normal
        img.setAttribute('src', './assets/mobile/avatar2.png')

    }    



   
   //2 forma de fazer

   // if(html.classList.contains('light')){
   //    html.classList.remove('light')
   // } else{
   //   html.classList.add('light')
  //  }


//html.classList.toggle('light')



}

