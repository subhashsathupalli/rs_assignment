class Car
{
    constructor(name,model,year)
    {
        this.name= name;
        this.model=model;
        this.year= year;
    }
        start()
        {
            console.log(`${this.name} is started and ready to go`);
        }
    
}
class Bike extends Car
{
    power()
    {
        console.log(`${this.name} can give more mileage than car and truck`)
    }
   
}
class Truck extends Bike
{
    load()
    {
        console.log(`${this.name} is used for transporation`);
    }
    
}
// let car1= new Car("honda","test",2000);
// console.log(car1);
// car1.start();

// let bike1= new Bike("suzuki","act",2009);
// console.log(bike1);
// bike1.start();
// bike1.power();

let truck1= new Truck("tata","big",2005);
console.log(truck1);
truck1.start();
truck1.load();