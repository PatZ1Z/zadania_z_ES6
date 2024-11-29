class Analysis{
    constructor(wyniki){
        this.wyniki = wyniki
    }

    avarage(){
        let n = 0
        let suma = 0
        this.wyniki.forEach(wynik => {
            n++
            suma = suma + wynik.ocena
        })
        console.log(`Średnia ocen: ${suma/n}`)
    }

    min(){
        
        
        let oceny = []
        this.wyniki.forEach(w => {
            oceny = [...oceny,w.ocena]
        })
        let min = Math.min(...oceny)
        
        let najmniejszy = this.wyniki.filter(wynik =>wynik.ocena === min)
        console.log(`Najmniejszy wynik: `)
        najmniejszy.forEach(wynik => {
            console.log(`Imię: ${wynik.imie}, nazwisko: ${wynik.nazwisko}, ocena: ${wynik.ocena}`)
        })
    }

    max(){
        let oceny = []
        this.wyniki.forEach(w => {
            oceny = [...oceny,w.ocena]
        })
        let max = Math.max(...oceny)
        
        let najwiekszy = this.wyniki.filter(wynik =>wynik.ocena === max)
        console.log(`Największy wynik: `)
        najwiekszy.forEach(wynik => {
            console.log(`Imię: ${wynik.imie}, nazwisko: ${wynik.nazwisko}, ocena: ${wynik.ocena}`)
        })
    }


}

const mat = new Analysis([
    {imie:"Karol", nazwisko:"Piechota",ocena:6},
    {imie:"Paweł", nazwisko:"Ktoś",ocena:2},
    {imie:"Monika", nazwisko:"Przykładowa", ocena:4},
    {imie:"Mariusz", nazwisko:"Chłop", ocena:1},
    {imie:"Amelia", nazwisko:"Dobrzyńska", ocena:3},
    {imie:"Maksymilian", nazwisko:"Kłos", ocena:4},
    {imie:"Karol", nazwisko:"Konar", ocena:5},
    {imie:"Szymon", nazwisko:"Kociński", ocena:1},
])

mat.avarage()
mat.min()
mat.max()

