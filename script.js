let currentPage = 0;

const pages = document.querySelectorAll('.carousel-page');

const totalPages = pages.length;

function showPage(index) {

    pages.forEach((page, i) => {

        page.style.display = i === index ? 'flex' : 'none';

    });

}

document.querySelector('.next').addEventListener('click', () => {

    currentPage = (currentPage + 1) % totalPages;

    showPage(currentPage);

});

document.querySelector('.prev').addEventListener('click', () => {

    currentPage = (currentPage - 1 + totalPages) % totalPages;

    showPage(currentPage);

});

// Mostrar la primera página al cargar

showPage(currentPage);

// Ejemplo de producto 
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.onclick = () => {
        const productName = button.getAttribute('data-product');
        const productPrice = parseFloat(button.getAttribute('data-price'));
        addToCart(productName, productPrice);
    };
});

function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = { name, price };
    cart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} ha sido agregado al carrito.`);
}