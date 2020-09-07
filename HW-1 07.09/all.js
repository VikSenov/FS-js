let soup = {
    calorieContent: 134,
    carbohydrates: 11.2,
    dietary_meal: true,
    dish: 'Soup',
    fats: 8,
    price: 70,
    proteins: 4.8
};

let beans = {
    calorieContent: 125,
    carbohydrates: 21.48,
    dietary_meal: true,
    dish: 'Beans',
    fats: 0.57,
    price: 30,
    proteins: 8.27
};

let steak = {
    calorieContent: 271,
    carbohydrates: 0,
    dietary_meal: false,
    dish: 'Steak',
    fats: 19,
    price: 100,
    proteins: 25
};

let greekSalad = {
    calorieContent: 122,
    carbohydrates: 4.04,
    dietary_meal: true,
    dish: 'Greek Salad',
    fats: 9.89,
    price: 100,
    proteins: 3.73
}

let latte = {
    calorieContent: 135,
    carbohydrates: 12.36,
    dietary_meal: false,
    dish: 'Latte',
    fats: 5.51,
    price: 60,
    proteins: 8.81
}

let milkChocolate = {
    calorieContent: 548,
    carbohydrates: 57,
    dietary_meal: false,
    dish: 'Milk Chocolate',
    fats: 33,
    price: 50,
    proteins: 5.4
}

let cheesecake = {
    calorieContent: 345,
    carbohydrates: 26.19,
    dietary_meal: false,
    dish: 'Cheesecake',
    fats: 21.55,
    price: 70,
    proteins: 6.52
}

let cognac = {
    calorieContent: 240,
    carbohydrates: 1.5,
    dietary_meal: true,
    dish: 'Cognac',
    fats: 0,
    price: 80,
    proteins: 0
};

console.log('You have selected all of the items for lunch. ' +
    'Your order is ' +
    soup.dish.toLowerCase() +
    ', ' +
    beans.dish.toLowerCase() +
    ', ' +
    steak.dish.toLowerCase() +
    ', ' +
    greekSalad.dish.toLowerCase() +
    ', ' +
    latte.dish.toLowerCase() +
    ', ' +
    milkChocolate.dish.toLowerCase() +
    ', ' +
    cheesecake.dish.toLowerCase() +
    ', ' +
    cognac.dish.toLowerCase() + ' 200 ml' +
    '. ' + 'Your total price is ' +
    (soup.price +
        beans.price +
        steak.price +
        greekSalad.price +
        latte.price +
        milkChocolate.price +
        cheesecake.price +
        cognac.price * 2) + ' UAH.' +
    ' The total calories of your lunch is ' +
    (soup.calorieContent +
        beans.calorieContent +
        steak.calorieContent +
        greekSalad.calorieContent +
        latte.calorieContent +
        milkChocolate.calorieContent +
        cheesecake.calorieContent +
        cognac.calorieContent * 2) +
    ' kcal. ' +
    'The total fat in your order is ' +
    (beans.fats +
    steak.fats +
    greekSalad.fats +
    latte.fats +
    milkChocolate.fats +
    cheesecake.fats +
    cognac.fats*2).toFixed() +
    ' g.'  +
    ' The total carbohydrate in your order is ' +
    (beans.carbohydrates +
            steak.carbohydrates +
            greekSalad.carbohydrates +
            latte.carbohydrates +
            milkChocolate.carbohydrates +
            cheesecake.carbohydrates +
            cognac.carbohydrates*2).toFixed() +
    ' g. ' + 'The total protein in your order is ' +
    (beans.proteins +
    steak.proteins +
    greekSalad.proteins +
    latte.proteins +
    milkChocolate.proteins +
    cheesecake.proteins +
    cognac.proteins*2).toFixed() +
    ' g. ' +
    'Your lunch is' +
    (steak || cheesecake || milkChocolate ? ' non-dietary. ' : 'diet lunch. ')

);




