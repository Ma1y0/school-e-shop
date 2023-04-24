let cart = []

const products = {
    0: "Mower",
    1: "Laptop",
    2: "Gaming Console",
    3: "Mower II",
    4: "Laptop II",
    5: "Gaming Console II"
}

function onAddToCart(id) {
    cart.push(products[id])
    console.log(cart)
}