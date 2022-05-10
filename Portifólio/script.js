
const dataAtual = new Date();

const dia = String(dataAtual.getDate()).padStart(2, '0')
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0')
const ano = dataAtual.getFullYear()

const data = `${dia}/${mes}/${ano}`
const time = document.getElementById('time')

time.innerHTML = `<time>Ao dia ${data}</time>`
















