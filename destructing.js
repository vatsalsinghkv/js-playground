'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto']
}

// const [first, second, ...others] = restaurant.categories;
// [a, b] = [b, a]
// const [f, s, ...rems] = [...restaurant.categories];

// console.log(first, second, others);
// console.log(f, s, rems);

const {name, categories, location} = restaurant;
const {name: restaurantName = '', categories: restaurantCategories = [], location: restaurantLocation = ''} = restaurant;
console.log(name, location, categories);
console.log(restaurantName, restaurantLocation, restaurantCategories);