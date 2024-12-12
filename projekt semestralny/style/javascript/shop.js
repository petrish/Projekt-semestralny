const addToCartButtons = document.querySelectorAll('.add-to-cart');
const buyButton = document.getElementById(buy-button)

addToCartButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const productId = product.dataset.id;
        const productName = product.querySelector('h2').textContent;
        const productPrice = product.querySelector('.price').textContent;

        alert(`Added to cart: ${productName} (${productPrice})`);

        
    });
    
});

buyButton.addEventListener("click", () => {
    console.log("Pieniondze zostaly zabrane z konta mamy")
})
