"use strict";

window.onload = window.localStorage.clear();
const vegtables = {
    Carrots : {
        img: "assets/carrots.jpeg",
        price: "0.30",
        quantity: 0
    },
    Onions: {
        img: "assets/onions.jpeg",
        price: "0.30",
        quantity: 0
    },
    Lettuce: {
        img: "assets/lettuce.jpeg",
        price: "0.30",
        quantity: 0
    },
    Cucumbers: {
        img: "assets/cucumbers.jpeg",
        price: "0.30",
        quantity: 0
    },
    Peppers: {
        img: "assets/peppers.jpeg",
        price: "0.30",
        quantity: 0
    },
    Raddish: {
        img: "assets/raddish.jpeg",
        price: "0.30",
        quantity: 0
    },
    Mushrooms: {
        img: "assets/mushrooms.jpeg",
        price: "0.30",
        quantity: 0
    },
    Eggplant: {
        img: "assets/eggplant.jpeg",
        price: "0.30",
        quantity: 0
    },
    Potatoes: {
        img: "assets/potatoes.jpeg",
        price: "0.30",
        quantity: 0
    }
};
const fruits = {
    Apples: {
        img: "assets/apples.jpeg",
        price: "0.30",
        quantity: 0
    },
    Oranges: {
        img: "assets/oranges.jpeg",
        price: "0.30",
        quantity: 0

    },
    Bananas: {
        img: "assets/bananas.jpeg",
        price: "0.30",
        quantity: 0

    },
    Mangos: {
        img: "assets/mangos.jpeg",
        price: "0.30",
        quantity: 0

    },
    Grapes: {
        img: "assets/grapes.jpeg",
        price: "0.30",
        quantity: 0

    },
    Blueberries: {
        img: "assets/blueberries.jpeg",
        price: "0.30",
        quantity: 0

    },
    Watermelon: {
        img: "assets/watermelon.jpeg",
        price: "0.30",
        quantity: 0

    },
    Pineapple:{
        img: "assets/pineapple.jpeg",
        price: "0.30",
        quantity: 0

    },
    Pear: {
        img: "./assets/pear.jpeg",
        price: "0.30",
        quantity: 0

    }
};
const seafood = {
    Crab: {
        img: "assets/crab.jpeg",
        price: "0.30",
        quantity: 0
    },
    Lobster: {
        img: "assets/lobster.jpeg",
        price: "0.30",
        quantity: 0
    },
    Oysters: {
        img: "assets/oysters.jpeg",
        price: "0.30",
        quantity: 0
    },
    Salmon: {
        img: "assets/salmon.jpeg",
        price: "0.30",
        quantity: 0
    },
    Shrimp: {
        img: "assets/shrimp.jpeg",
        price: "0.30",
        quantity: 0
    },
    Tuna: {
        img: "assets/tuna.jpeg",
        price: "0.30",
        quantity: 0
    }

};
const dairy = {
    Butter: {
        img: "assets/butter.jpeg",
        price: "0.30",
        quantity: 0
    },
    Cheese: {
        img: "assets/Cheese.jpeg",
        price: "0.30",
        quantity: 0
    },
    Eggs: {
        img: "assets/eggs.jpeg",
        price: "0.30",
        quantity: 0
    },
    Milk: {
        img: "assets/milk.jpeg",
        price: "0.30",
        quantity: 0
    },
    Yogurt: {
        img: "assets/yogurt.jpeg",
        price: "0.30",
        quantity: 0
    },

}
const vegtable_container = document.querySelector(".vegtables");
const frutis_container = document.querySelector(".fruits");
const seafood_container = document.querySelector(".seafood");
const dairy_container = document.querySelector(".dairy");
populate(vegtables, "vegtables");
populate(fruits, "fruits");
populate(seafood, "seafood");
populate(dairy, "dairy")
const handleClickPlus = (element) => {
    if(element.parentNode.classList.contains("vegtables")){
        vegtables[element.id].quantity++
        element.childNodes[0].textContent = `In cart: ${vegtables[element.id].quantity}`
        localStorage.setItem(element.id, vegtables[element.id].quantity)
    }
    else if(element.parentNode.classList.contains("fruits")){
        fruits[element.id].quantity++
        element.childNodes[0].textContent = `In cart: ${fruits[element.id].quantity}`
        localStorage.setItem(element.id, fruits[element.id].quantity)

    }
    else if(element.parentNode.classList.contains("seafood")){
        seafood[element.id].quantity++
        element.childNodes[0].textContent = `In cart: ${seafood[element.id].quantity}`
        localStorage.setItem(element.id, seafood[element.id].quantity)

    }
    else if(element.parentNode.classList.contains("dairy")){
        dairy[element.id].quantity++
        element.childNodes[0].textContent = `In cart: ${dairy[element.id].quantity}`
        localStorage.setItem(element.id, dairy[element.id].quantity)

    }
}
const handleClickMinus = (element) => {
    if(element.parentNode.classList.contains("vegtables") && (vegtables[element.id].quantity > 0)){
        vegtables[element.id].quantity--
        element.childNodes[0].textContent = `In cart: ${vegtables[element.id].quantity}`
        localStorage.setItem(element.id, vegtables[element.id].quantity)
    }
    else if(element.parentNode.classList.contains("fruits") && (vegtables[element.id].quantity > 0)){
        fruits[element.id].quantity--
        element.childNodes[0].textContent = `In cart: ${fruits[element.id].quantity}`
        localStorage.setItem(element.id, fruits[element.id].quantity)

    }
    else if(element.parentNode.classList.contains("seafood") && (vegtables[element.id].quantity > 0)){
        seafood[element.id].quantity--
        element.childNodes[0].textContent = `In cart: ${seafood[element.id].quantity}`
        localStorage.setItem(element.id, seafood[element.id].quantity)

    }
    else if(element.parentNode.classList.contains("dairy") && (vegtables[element.id].quantity > 0)){
        dairy[element.id].quantity--
        element.childNodes[0].textContent = `In cart: ${dairy[element.id].quantity}`
        localStorage.setItem(element.id, dairy[element.id].quantity)

    }
}
function populate(product, type){
    for (var key in product) {    
        var element = document.createElement('div');
        element.classList.add("card");
        element.setAttribute("id", key);
        if(type === "vegtables"){
            vegtable_container.append(element);
        }else if(type == "fruits"){
            frutis_container.append(element);
        }else if(type == "seafood"){
            seafood_container.append(element);
        }else if(type == "dairy"){
            dairy_container.append(element);
        }
        const amount = document.createElement('div');
        amount.classList.add("num")
        amount.textContent = "In cart: 0" 
        element.append(amount)
        var obj = product[key];
        for (var prop in obj) {
            console.log(prop);
            if (prop === "img"){
                var img = document.createElement("img");
                img.setAttribute("src", obj[prop]);
                img.style.width = "75%"
                element.append(img);
                var header = document.createElement('h3');
                header.textContent = key;
                element.append(header);
            }
            else if(prop === "price"){
                var plus = document.createElement("button");
                plus.textContent = "+";
                element.append(plus);
                var price = document.createElement("p");
                element.append(price);
                price.textContent = `$${obj[prop]}`; 
                price.style.display = "inline";
                var minus = document.createElement("button");
                minus.textContent = "-"
                element.append(minus);
                (function (element){
                    plus.addEventListener('click', function () {handleClickPlus(element)},false);
                    minus.addEventListener('click', function() {handleClickMinus(element)}, false);
                }(element));
            }
        }
    }
}
document.querySelector(".checkoutbtn").onclick = function () {
    location.href = "cart.html";
};