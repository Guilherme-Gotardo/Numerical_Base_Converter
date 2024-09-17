// Decimal para binario

function converterBinario() {

    var entradaDecimal = Number(entrada_decimal.value)
    let binario = entradaDecimal.toString(2);
    resultado.innerHTML = `${binario}`

}

function converterOctadecimal () {
    
    var entradaDecimal = Number(entrada_decimal.value)
    var octaDecimal = entradaDecimal.toString(8);
    resultado.innerHTML = `${octaDecimal}`

}

function converterHexadecimal() {

    var entradaDecimal = Number(entrada_decimal.value)
    let hexaDecimal = entradaDecimal.toString(16);
    resultado.innerHTML = `${hexaDecimal}`

}

// Convertendo os valores em binário
function binarioParaDecimal () {

    var entradaBinario = Number(entrada_binario.value)
    let binarioNumero = parseInt(entradaBinario, 2)
    let binarioDecimal = binarioNumero.toString(10)
    resultado.innerHTML = `${binarioDecimal}`

}

function binarioParaOctadecimal () {

    var entradaBinario = Number(entrada_binario.value)
    let binarioNumero = parseInt(entradaBinario, 2)
    let binarioOctadecimal = binarioNumero.toString(8)
    resultado.innerHTML = `${binarioOctadecimal}`

}

function binarioParaHexadecimal () {

    var entradaBinario = Number(entrada_binario.value)
    let binarioNumero = parseInt(entradaBinario, 2)
    let binarioHexadecimal = binarioNumero.toString(16)
    resultado.innerHTML = `${binarioHexadecimal}`
    
}

// Convertendo valores em octadecimal 

function octadecimalParaDecimal () {

    var entradaOcta = Number(entrada_octadecimal.value)
    let octaNumero = parseInt(entradaOcta, 8)
    let octaDecimal = octaNumero.toString(10)
    resultado.innerHTML = `${octaDecimal}`

}

function octadecimalParaBinario () {

    var entradaOcta = Number(entrada_octadecimal.value)
    let octaNumero = parseInt(entradaOcta, 8)
    let octaBinario = octaNumero.toString(2)
    resultado.innerHTML = `${octaBinario}`


}

function octadecimalParaHexadecimal () {

    var entradaOcta = Number(entrada_octadecimal.value)
    let octaNumero = parseInt(entradaOcta, 8)
    let octaHexa = octaNumero.toString(16)
    resultado.innerHTML = `${octaHexa}`

}

// Convertendo valores em Hexadecimal 

function hexadecimalParaDecimal () {

    var entradaHexa = entrada_hexadecimal.value
    let hexaNumero = parseInt(entradaHexa, 16)
    let hexaDecimal = hexaNumero.toString(10)
    resultado.innerHTML = `${hexaDecimal}`

}

function hexadecimalParaBinario () {

    var entradaHexa = entrada_hexadecimal.value
    let hexaNumero = parseInt(entradaHexa, 16)
    let hexaBinario = hexaNumero.toString(2)
    resultado.innerHTML = `${hexaBinario}`

}

function hexadecimalParaOctadecimal () {

    var entradaHexa = entrada_hexadecimal.value
    let hexaNumero = parseInt(entradaHexa, 16)
    let hexaOcta = hexaNumero.toString(8)
    resultado.innerHTML = `${hexaOcta}`

}

// Calculadora para hexadecimal

function somar() {

    var numero1 = numero_1.value
    var numero2 = numero_2.value

    let hexaNumero1 = parseInt(numero1, 16)
    let hexaDecimal1 = hexaNumero1.toString(10)

    let hexaNumero2 = parseInt(numero2, 16)
    let hexaDecimal2 = hexaNumero2.toString(10)

    let somaDec = parseInt(hexaDecimal1, 10) + parseInt(hexaDecimal2, 10)
    let somaHexa = somaDec.toString(16)
    resultado_calculadora.innerHTML = `${somaHexa}`

}

function subtrair() {

    var numero1 = numero_1.value
    var numero2 = numero_2.value

    let hexaNumero1 = parseInt(numero1, 16)
    let hexaDecimal1 = hexaNumero1.toString(10)

    let hexaNumero2 = parseInt(numero2, 16)
    let hexaDecimal2 = hexaNumero2.toString(10)

    let subDec = parseInt(hexaDecimal1, 10) - parseInt(hexaDecimal2, 10)
    let subHexa = subDec.toString(16)
    resultado_calculadora.innerHTML = `${subHexa}`

}

// Calculadora para binario

function somarBinario() {

    var numero1 = numBin_1.value
    var numero2 = numBin_2.value

    let binNumero1 = parseInt(numero1, 2)
    let binDecimal1 = binNumero1.toString(10)

    let binNumero2 = parseInt(numero2, 2)
    let binDecimal2 = binNumero2.toString(10)

    let somaDec = parseInt(binDecimal1, 10) + parseInt(binDecimal2, 10)
    let somaBin = somaDec.toString(2)
    resultado_calculadora.innerHTML = `${somaBin}`

}

function subtrairBinario() {

    var numero1 = numero_1.value
    var numero2 = numero_2.value

    let binNumero1 = parseInt(numero1, 2)
    let binDecimal1 = binNumero1.toString(10)

    let binNumero2 = parseInt(numero2, 2)
    let binDecimal2 = binNumero2.toString(10)

    let somaDec = parseInt(binDecimal1, 10) + parseInt(binDecimal2, 10)
    let somaBin = somaDec.toString(2)
    resultado_calculadora.innerHTML = `${somaBin}`

}

// Calculadora para octadecimal

function somarOcta() {

    var numero1 = numOcta_1.value
    var numero2 = numOcta_2.value

    let octaNumero1 = parseInt(numero1, 8)
    let octaDec1 = octaNumero1.toString(10)

    let octaNumero2 = parseInt(numero2, 8)
    let octaDec2 = octaNumero2.toString(10)

    let somaDec = parseInt(octaDec1, 10) + parseInt(octaDec2, 10)
    let somaOcta = somaDec.toString(8)
    resultado_calculadora.innerHTML = `${somaOcta}`

}

function subtrairOcta() {

    var numero1 = numOcta_1.value
    var numero2 = numOcta_2.value

    let octaNumero1 = parseInt(numero1, 8)
    let octaDec1 = octaNumero1.toString(10)

    let octaNumero2 = parseInt(numero2, 8)
    let octaDec2 = octaNumero2.toString(10)

    let somaDec = parseInt(octaDec1, 10) - parseInt(octaDec2, 10)
    let subOcta = somaDec.toString(8)
    resultado_calculadora.innerHTML = `${subOcta}`

}