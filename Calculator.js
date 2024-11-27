class Calculator{

    constructor(a, b) {

        this.a = a;
        this.b = b;
       
        }

       
    

    add(){
        
        console.log(`Wynik ${this.a} + ${this.b} = ${this.a+this.b}`)
    }

    substruct(){
        console.log(`Wynik ${this.a} - ${this.b} = ${this.a-this.b}`)
    }

    multipy(){
        console.log(`Wynik ${this.a} * ${this.b} = ${this.a*this.b}`)
    }

    divide(){
        console.log(`Wynik ${this.a} / ${this.b} = ${this.a/this.b}`)
    }
}

const wynik = new Calculator(10,20)
wynik.add()
wynik.substruct()
wynik.multipy()
wynik.divide()