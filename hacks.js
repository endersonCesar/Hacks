
/**REMOVENDO VALORES DUPLICADOS */
const numeros = [1,2,3,4,5,6,7,8,9,1,2,1]
let numeroUnicos = [...new Set(numeros)]
console.log(numeroUnicos)

/**CONVERTENDO ARRAY EM NÚMERO */
let arr = ['1','2',[[4]],null,"6.6"]
arr = arr.map(Number)
console.log('Convertendo array em numero',arr) 

/**REMOVENDO ITENS FALSY DE UMA ARRAY */
let array = [1,2,3,4,false]
const resultado = array.filter(Boolean);
console.log('REMOVENDO ITENS FALSY',resultado)

/**FLAT(INFINITY) PARA ACHATAR ARRAYS */
let array2 = [100,[20,20,[100,300,400]],[2000,855]]
console.log('ACHATANDO ARRAY',array2.flat(Infinity))


/**PARAMETROS INFINITOS */
function soma(...props){
    let total = 0
    for(let numero of props){
        total+=numero
    }
    return total
}
console.log('retorno soma',soma(1,2,3,4,5,6,4,5,6))


/**OPERADOR IN */
const key = 'idade'
const pessoa = {nome:'Bruno',idade:26}
console.log('nome' in pessoa)
console.log('sobrenome' in pessoa)
console.log(key in pessoa)