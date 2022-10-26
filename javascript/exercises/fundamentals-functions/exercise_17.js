function chooseVehicle(model) {
    switch (model.toLowerCase()) {
        case 'hatch':
            return 'Purchase made successfully';
        case 'sedan':
        case 'pickup truck':
        case 'motorcycles':
            return 'Are you sure you dont prefer this model?';
        default:
            return 'We dont work with this type of car here';
    }
}

console.log(chooseVehicle('hatch'));
console.log(chooseVehicle('sedan'));
console.log(chooseVehicle('truck'));
