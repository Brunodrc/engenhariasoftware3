import { InvalidSalary } from "./exceptions"

class Pessoa {
    private _nome: string
    private _sobrenome: string
    

    constructor(nome: string, sobrenome: string){
        this._nome = nome
        this._sobrenome = sobrenome
    }

    get nome():string{
        return this._nome
    }
    get sobrenome():string{
        return this._sobrenome
    }
    nomecompleto(){
        return this.nome +' '+ this.sobrenome
    }

}

class Funcionario extends Pessoa{
    private _matricula: string
    private _salario: number

    constructor(nome: string, sobrenome: string, matricula: string, salario: number){
        super(nome, sobrenome)
        this._matricula = matricula
        if(this._salario < 0){
            throw new InvalidSalary("Salário inválido")
        }else{    
            this._salario = salario
        }
    }

    get matricula():string{
        return this._matricula
    }

    get salario(): number{
        return this._salario
    }
    get calcSalarioPrimeiraParc(): number{
        return this.salario * 0.4
    }
    get calcSalarioSegundaParc(): number{
        return this.salario * 0.6
    }
}

class Professor extends Funcionario {
    private _titulacao: string

    constructor(nome: string, sobrenome: string, 
        matricula: string, salario: number, titulacao:string){
            super(nome, sobrenome,matricula, salario)
            this._titulacao = titulacao
    }
    get titulacao(): string{
        return this._titulacao
    }
    get calcSalarioPrimeiraParc(): number{
        return this.salario
    }
    get calcSalarioSegundaParc(): number{
        return 0
    }
}

export {Pessoa, Funcionario, Professor}