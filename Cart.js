class Cart{
    constructor(koszyk){
        this.koszyk = koszyk
    }

    addProduct(a){
        this.koszyk = [...this.koszyk,a]
    }

    removeProduct(isThere){
        let index = this.koszyk.findIndex(produkt => produkt.nazwa === isThere)
        this.koszyk.splice(index,1)
        
        
    }

    showCart(){
        console.log("=======================================")
        this.koszyk.forEach((product,index,array) => {
            console.log(`nazwa: ${product.nazwa}, cena: ${product.cena}, ilośc: ${product.ilosc}`)
        })
    }
}

var koszyk1 = new Cart([{nazwa:"Kurtka",cena:250,ilosc:1},{nazwa:"Kocyk",cena:30,ilosc:5}])


koszyk1.addProduct({nazwa:"Lampa",cena: 50, ilosc:10})
koszyk1.showCart()
koszyk1.removeProduct("Kocyk")
koszyk1.showCart()