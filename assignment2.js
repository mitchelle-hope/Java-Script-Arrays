class KioskCalc {
    
    constructor(fruit,quantity) {
        this.fruit = fruit;
        this.quantity = quantity;
        this.fruitsPriceList = {
            'orange' : 30,
            'mango'  : 15,
            'avocado' : 40,

        };
        
        this.getTotalcost = () => {
            return `${this.quantity} ${this.fruit} for KES ${parseFloat(this.fruitsPriceList.orange *this.quantity)}`

        }
    }


    }



var kioskCalc = new KioskCalc('oranges',5)
var kioskCalc1 = new KioskCalc('mango',5)
var kioskCalc2 = new KioskCalc('avocado',5)