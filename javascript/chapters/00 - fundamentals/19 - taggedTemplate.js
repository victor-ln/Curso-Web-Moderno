
function realTag(parts, ...values) {
    const result = []
    const convertCurrency = val => isNaN(val) ? val : `R$${val.toFixed(2)}`
    const joinPartsAndValues = part => {
        result.push(part, convertCurrency(values.shift()))
    }

    parts.forEach(joinPartsAndValues)
    return result.join('')
}

const price = 29.9
const installments = 11

console.log(realTag `Preço à vista: ${price} ou 3x de ${installments}`)
