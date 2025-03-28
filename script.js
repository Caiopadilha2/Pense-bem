const options = document.querySelectorAll('.options')
const reset = document.querySelector('#reset-button')
const count = document.querySelector('.count')
const screen = document.querySelector('.screen')
const enter = document.querySelector('#enter-button')
const imagem = document.querySelector('.imagem')
const teclado = document.querySelector('.number')

const gabarito1 = [null,'C', 'A', 'A', 'D', 'B', 'C', 'D', 'A', 'A', 'D', 'B', 'C', 'C', 'B', 'D', 'D', 'A', 'C', 'A', 'C', 'D', 'A', 'B', 'A', 'B', 'B', 'C', 'D', 'D', 'D']
const gabarito2 = [null,'C', 'D', 'A', 'C', 'A', 'C', 'D', 'C', 'B', 'A', 'D', 'B', 'C', 'D', 'D', 'B', 'D', 'C', 'C', 'C', 'B', 'D', 'B', 'D', 'D', 'D', 'A', 'B', 'A', 'A']
const gabarito3 = [null,'C', 'A', 'A', 'C', 'B', 'D', 'A', 'C','A','B','D','D','A','A','B','C','A','D','A','D','D','D','B','A','B','A','C','A','A','B']
const gabarito4 = [null,'C', 'A', 'B', 'A', 'D', 'C', 'A', 'B','C','A','D','C','D','A','D','B','D','D','A','A','B','D','C','C','A','D','C','C','D','A']

const images1 = [
  null,
  './assets/Question-01.png',
  './assets/Question-02.png',
  './assets/Question-03.png',
  './assets/Question-04.png',
  './assets/Question-05.png',
  './assets/Question-06.png',
  './assets/Question-07.png',
  './assets/Question-08.png',
  './assets/Question-09.png',
  './assets/Question-10.png',
  './assets/Question-11.png',
  './assets/Question-12.png',
  './assets/Question-13.png',
  './assets/Question-14.png',
  './assets/Question-15.png',
  './assets/Question-16.png',
  './assets/Question-17.png',
  './assets/Question-18.png',
  './assets/Question-19.png',
  './assets/Question-20.png',
  './assets/Question-21.png',
  './assets/Question-22.png',
  './assets/Question-23.png',
  './assets/Question-24.png',
  './assets/Question-25.png',
  './assets/Question-26.png',
  './assets/Question-27.png',
  './assets/Question-28.png',
  './assets/Question-29.png',
  './assets/Question-30.png'
]
const images2 = [null,'./assets/question-31.png', './assets/question-32.png', './assets/question-33.png', './assets/question34.png', './assets/question35.png', './assets/question36.png', './assets/question37.png', './assets/question38.png', './assets/question39.png', './assets/question40.png', './assets/question41.png', './assets/question42.png', './assets/question43.png', './assets/question44.png', './assets/question45.png', './assets/question46.png', './assets/question47.png', './assets/question48.png', './assets/question49.png', './assets/question50.png', './assets/question51.png', './assets/question52.png', './assets/question53.png', './assets/question54.png', './assets/question55.png', './assets/question56.png', './assets/question57.png', './assets/question58.png', './assets/question59.png', './assets/question60.png']
const images3 = [null, './assets/question91.png', './assets/question92.png', './assets/question93.png', './assets/question94.png', './assets/question95.png', './assets/question96.png', './assets/question97.png', './assets/question98.png', './assets/question99.png', './assets/question100.png', './assets/question101.png', './assets/question102.png', './assets/question103.png', './assets/question104.png', './assets/question105.png', './assets/question106.png', './assets/question107.png', './assets/question108.png', './assets/question109.png', './assets/question110.png', './assets/question111.png', './assets/question112.png', './assets/question113.png', './assets/question114.png', './assets/question115.png', './assets/question116.png', './assets/question117.png', './assets/question118.png', './assets/question119.png', './assets/question120.png']
const images4 = [null, './assets/question121.png', './assets/question122.png', './assets/question123.png', './assets/question124.png', './assets/question125.png', './assets/question126.png', './assets/question127.png', './assets/question128.png', './assets/question129.png', './assets/question130.png', './assets/question131.png', './assets/question132.png', './assets/question133.png', './assets/question134.png', './assets/question135.png', './assets/question136.png', './assets/question137.png', './assets/question138.png', './assets/question139.png', './assets/question140.png', './assets/question141.png', './assets/question142.png', './assets/question143.png', './assets/question144.png', './assets/question145.png', './assets/question146.png', './assets/question147.png', './assets/question148.png', './assets/question149.png', './assets/question150.png']

let gabarito
let imagensGabarito
let screeControl = 0;
let number;
let index = 0
let tentativas = 0
let pontuacao = 0

teclado.addEventListener('click',handler_button)

enter.addEventListener('click', () => {
    
    let codScreen

    codScreen = screen.textContent
  

  switch (codScreen){
    case '181':
      index = 1
      gabarito = gabarito1
      imagensGabarito = images1      
      // imagem.src = imagensGabarito[index]
      imagem.style.backgroundImage = `url('${imagensGabarito[index]}')`
      console.log(codScreen)      
      enter_button.play()
      alert('Jogo iniciado!')      
      screen.innerText = `-> ${index}`
      count.innerText = `${tentativas + 1} de 3`
      // pontos.innerText = pontuacao
      break
    case '182':
      index = 1
      gabarito = gabarito2
      imagensGabarito = images2
    //   imagem.src = imagensGabarito[0]
      imagem.style.backgroundImage = `url('${imagensGabarito[index]}')`
      enter_button.play()
      alert('Jogo iniciado!')      
      screen.innerText = `-> ${index}`
      count.innerText = `${tentativas + 1} de 3`
      // pontos.innerText = pontuacao
      break
    case '184':
      index = 1
      gabarito = gabarito3
      imagensGabarito = images3
    //   imagem.src = imagensGabarito[0]
      imagem.style.backgroundImage = `url('${imagensGabarito[index]}')`
      enter_button.play()
      alert('Jogo iniciado!')      
      screen.innerText = `-> ${index}`
      count.innerText = `${tentativas + 1} de 3`
      // pontos.innerText = pontuacao
      break
    case '185':
      index = 1
      gabarito = gabarito4
      imagensGabarito = images4
    //   imagem.src = imagensGabarito[0]
      imagem.style.backgroundImage = `url('${imagensGabarito[index]}')`
      enter_button.play()
      alert('Jogo iniciado!')      
      screen.innerText = `-> ${index}`
      count.innerText = `${tentativas + 1} de 3`
      // pontos.innerText = pontuacao
      break
    default :
        alert('Código inválido!')
        // console.log(codScreen)  
        error.play()
        screen.textContent = '000'
        teclado.addEventListener('click',handler_button)
  }
})

// count.innerText = `${tentativas + 1} de 3`
// pontos.innerText = pontuacao

options.forEach(option => {

  option.addEventListener('click', event => {
    if (index !== 0) {


      if (gabarito[index] === event.currentTarget.innerText) {
        console.log(`Acertou na tentativa ${tentativas + 1}!`)
        acerto.play()



        switch (tentativas) {
          case 0:
            pontuacao += 3
            break
          case 1:
            pontuacao += 2
            break
          case 2:
            pontuacao += 1
            break
        }
        // pontos.innerText = pontuacao
        tentativas = 0
        index += 1
      } else {
        console.log(`Errou! tentativa: ${tentativas + 1}!`)
        tentativas += 1
        error.play()

        if (tentativas === 3) {
          tentativas = 0
          error.play()

          index += 1
        }
      }

      if (index > gabarito.filter(item => item !== null ).length) {
        alert(`Sua pontuação foi ${pontuacao}`)
        return
      }

      console.log(index + 'index')

      count.innerText = `${tentativas + 1} de 3`

      // imagem.src = imagensGabarito[0]

      if (index <= gabarito.filter(item => item !== null ).length) {
        imagem.style.backgroundImage = `url('${imagensGabarito[index]}')`
      }

      if (index <= gabarito.filter(item => item !== null ).length) {
        screen.innerText = `-> ${index}`
      }


      console.log(`Pontuação: ${pontuacao}`)
    }
  })

})


reset.addEventListener('click', () => {
  index = 0
  tentativas = 0
  pontuacao = 0
  count.innerText = ''
  // pontos.innerText = pontuacao
  imagem.style.backgroundImage = `url('logo.png')`
  alert('Quiz reiniciado!')
  resetar.play()
  screen.textContent = '000'
  teclado.addEventListener('click',handler_button)
})