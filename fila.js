// 1º a entrar é 1º a sair

const alunos = [
    "Isabelle",
    "Caua",
    "Vitor",
    "Mario",
]


// Criar fila --> criarFila(tamanho = int):any[] --> retorna qualquer coisa
export function criarFila(tamanho = 5){
    return [... new Array(tamanho)]
}   
let minhaFila = criarFila()
console.log(minhaFila)

// Inserir na fila --> inserirFila(fila:any[], item):void --> passa dois parâmetros:
// fila que é uma array de qualquer coisa; e retorna vazio
export function inserirNaFila(fila, item){
    const posicao = fila.indexOf(undefined) // Confirma se a pilha já não está cheia
    if(posicao === -1){
        console.log("Não tem espaço")
        return
    }
    fila[posicao] = item // Caso não esteja, insere na pilha
    return
}
inserirNaFila(minhaFila, "Alessandra")
console.log(minhaFila)

// Retirar da fila --> remover(fila:any[]):any[] --> passa um parâmetro:
// fila que é uma array de qualquer coisa; e retorna qualquer coisa
export function removerDaFila(fila){ 
    let primeiro = fila[0]
    if(primeiro === undefined){
        for (let i = 0; i < fila.length; i++) {
            fila[i] = fila[i+1]
            primeiro = fila[i]
        }
    }
    console.log(primeiro)
}
removerDaFila(minhaFila)
