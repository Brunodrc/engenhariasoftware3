import { Empregado, Diarista, Horista } from './empregado'
import { Funcionario, Pessoa, Professor } from './person'


let empregado1: Empregado = new Empregado(2200)

let diaria1: Diarista = new Diarista(1200)

let horista1: Diarista = new Horista(600)

console.log(empregado1.calcularSalario());
console.log(diaria1.calcularSalario());
console.log(horista1.calcularSalario());


const pessoat: Pessoa = new Pessoa('Teresa', 'Cristina')

console.log(pessoat.nomecompleto())


const funcionario1: Funcionario = new Funcionario('Ivo', 'Sousa', '2356', 1200)

console.log(funcionario1);
console.log(funcionario1.nomecompleto());
console.log(funcionario1.calcSalarioPrimeiraParc);
console.log(funcionario1.calcSalarioSegundaParc);


const professor1: Professor = new Professor('Mario', 'Silva', '1221', 2200, 'graduado')

console.log(professor1);
console.log(professor1.nomecompleto());
console.log(professor1.calcSalarioPrimeiraParc);
console.log(professor1.calcSalarioSegundaParc);