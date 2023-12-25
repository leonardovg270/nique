function maisInfo(idDoItem) {
    // Construir a URL da página de destino
    var urlDestino = idDoItem + '.html'
    // Redirecionar para a página de destino
    window.location.href = urlDestino
}

function comprar(nomeProduto, valor) {
    localStorage.setItem('produtoNome', nomeProduto)
    localStorage.setItem('produtoValor', valor)
    window.location.href = 'teladepagamento.html'
}

var produtoNome = localStorage.getItem('produtoNome')
var produtoValor = localStorage.getItem('produtoValor')

document.getElementById('produtoNome').innerText = produtoNome
document.getElementById('produtoValor').innerText = produtoValor

parcela2 = produtoValor / 2
parcela3 = produtoValor / 3
parcela4 = produtoValor / 4
parcela5 = produtoValor / 5
parcela6 = produtoValor / 6
parcela7 = produtoValor / 7
parcela8 = produtoValor / 8

var parcelas = [parcela2, parcela3, parcela4, parcela5, parcela6, parcela7, parcela8]
var selectParcelas = document.getElementById("parcelas")

for (var i = 0; i < parcelas.length; i++) {
    var option = document.createElement("option")
    option.value = parcelas[i]
    option.text = (i + 2) + "x de   R$ " + parcelas[i].toFixed(2)
    selectParcelas.add(option)
}

function concluirCompra() {
    var elemento = document.getElementById('fim')
    elemento.style.display = 'block'

    setTimeout(function() {
        window.location.href = 'index.html'
      }, 4000)
}

