
class Empregado {
    // tipoEmprego?: string
    private _salario: number

    constructor( salario: number){
        // this.tipoEmprego = tipoEmprego;
        this._salario = salario
    }

    get salario():number{
        return this._salario
    }

    calcularSalario():number{
        return this.salario
    }
}

class Diarista extends Empregado{
    constructor(salario: number){
        super(salario)
    }

    calcularSalario(): number {
        return this.salario / 30
    }
}
class Horista extends Diarista{
    constructor(salario: number){
        super(salario)
    }

    calcularSalario(): number {
        return this.salario / 24
    }
}
export {Empregado, Diarista, Horista}


