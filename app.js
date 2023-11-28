const app ={
    cars: [],

        add(car) {
            this.cars.push(car);
        },
        edit(index, car) {
            this.cars[index] = car;
        },
        detele(index) {
            this.cars.splice(index, 1);
        }

    
}

