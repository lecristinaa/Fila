// 1º a entrar é 1º a sair

const alunos = [
    "Mario",
    "Isabelle",
    "Caua",
    "Vitor",
    "Beatriz",
]


// Criar fila --> criarFila(tamanho = int):any[] --> retorna qualquer coisa
export function criarFila(tamanho = 5){
    console.log("Fila criada")
    return [... new Array(tamanho)]
}   
criarFila()


// Inserir na fila --> inserirFila(fila:any[], item):void --> passa dois parâmetros:
// fila que é uma array de qualquer coisa; e retorna vazio
export function inserirNaFila(fila, item){ 
    const posicao = fila.indexOf(undefined)
        if (posicao === -1) { // Se não tiver espaço na fila
            console.log("Não tem espaço")
            return
        }
    fila[posicao] = item 
    return
}
inserirNaFila()

// Retirar da fila --> remover(fila:any[]):any[] --> passa um parâmetro:
// fila que é uma array de qualquer coisa; e retorna qualquer coisa
export function removerDaFila(fila){ 
    if(fila[0] === undefined){
        console.log("Fila Vazia")
        return
    }
    fila.pop([0])
}
removerDaFila()
