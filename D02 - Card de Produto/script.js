const productCode = 42404;
const productName = 'Sofá Margot II - Rosé';
const productPrice = '4.000';

function ChangeImage() {
    document.querySelector("#productImage").src.indexOf('sofa_boraCodar.png') != -1 ? document.querySelector("#productImage").src = "./assets/img/sofa_boraCodar.gif" : document.querySelector("#productImage").src = "./assets/img/sofa_boraCodar.png";
}

function AddProductToCart() {
    alert(`${productName} foi adicinado ao carrinho!`);
};

document.querySelector('#productCode').textContent = `código: ${productCode}`;
document.querySelector('#productName').textContent = productName;
document.querySelector('#productPrice').textContent = `R$ ${productPrice}`;
