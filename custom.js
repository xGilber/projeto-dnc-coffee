const BUTTON_CARD = document.querySelectorAll('.btn-buy')
const CARD =  document.querySelectorAll('.custom-article')
const BNT = document.createElement('button')
const MODAL = document.querySelector('#modal')



CARD.forEach( (element, index)=> {
    element.addEventListener('mouseenter', () =>{
      BNT.innerHTML = 'COMPRAR AGORA'
      BUTTON_CARD[index].appendChild(BNT)
      CARD[index].style.transform = "scale(1.05)"
    })
    element.addEventListener('mouseleave', () => {
      BUTTON_CARD[index].removeChild(BNT)
      CARD[index].style.transform = "scale(1)"

    })

})

function showModal() {
MODAL.removeAttribute('hidden')

MODAL.innerHTML = `
<section id="modal-element">
<div id="close">
  <img src="./assets/images/close.svg" alt="Close Page" onclick="closeModal()">
</div>
<div id="m_title">
  <h1>Atendimento</h1>
</div>
<div id="m_content">
  Rua José de Alencar, 111, Centro<br>
  CEP: 12209-000 | +55 (11) 3333-8000
</div>
<div id="m_button">
  <button>ENTRAR EM CONTATO</button>
</div>
</section>
`
}



function closeModal(){
    MODAL.setAttribute('hidden','')
 
}