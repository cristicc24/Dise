let listaElementos = document.querySelectorAll(".div__lista__item--click");

listaElementos.forEach(listaElemento => {
   listaElemento.addEventListener('click', ()=>{
      
      listaElemento.classList.toggle('arrow');

      let height = 0;;
      let menu = listaElemento.nextElementSibling;

      if(menu.clientHeight == "0"){
         height = menu.scrollHeight;
      }

      menu.style.height = height + "px";
   
   })
});