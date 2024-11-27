class Student{
    constructor(imie, nazwisko,oceny) {

        this.imie = imie;
        this.nazwisko = nazwisko;
        this.oceny = oceny
        }

    

    addGrade(a){
        this.oceny = [...this.oceny,a] 
    }

    getAverage(){
        let suma = 0
        for(let i = 0; i< this.oceny.length; i++){
            suma = suma + this.oceny[i]
            
        }
        let n = this.oceny.length
        let avarage = suma / n
        console.log(`Średnia ocen: ${avarage}`)
    }
}

const Piotr = new Student("Piotr","Cośtam",[1,1])
Piotr.addGrade(6)
Piotr.getAverage()