/*
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGasdoDePercorso(distanciaKg,valor){
        return (distanciaKg * this.gastoMedioPorKm)*valor;
    }

}

const carro1 = new Carro('Fiat','Vermelho',1/12);
const carro2 = new Carro('Corolla','Azul',1/5);

const final = carro1.calcularGasdoDePercorso(70,5);
const final2 = carro2.calcularGasdoDePercorso(70,5);
console.log(final);
console.log(final2)
*/


class Pessoa{
    nome;
    peso;
    altura;
    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }
    classifiqueImc(){
        const imc = this.calcularImc();
        if (imc < 18){
            return 'Abaixo do peso'
        }else if(imc >= 18.5 && imc < 25){
            return 'Peso normal'
        }else if(imc >= 25 && imc < 30){
            return 'Acima do peso'
        }else if(imc>= 30 && imc < 40){
            return 'Obeso'
        }else{
            return 'Obsidade Grave'
        }
    }
}

const pessoaUm = new Pessoa('Teles',67,1.79);
console.log(pessoaUm.calcularImc());
console.log(pessoaUm.classifiqueImc());










