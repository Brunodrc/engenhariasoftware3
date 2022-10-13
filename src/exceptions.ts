class InvalidSalary extends Error {
    constructor(mensagem: string){
        super(mensagem)
    }
}

export {InvalidSalary}