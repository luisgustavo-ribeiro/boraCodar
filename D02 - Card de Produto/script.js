const productCode = 42404;
const productName = 'Sofá Margot II - Rosé';
const productPrice = '4.000';

const productImage = document.querySelector("#productImage");
const btn360Icon = document.querySelector("#view360Icon");

function ChangeImage() {
    productImage.src.indexOf('sofa_boraCodar.png') != -1 ? productImage.src = "./assets/img/sofa_boraCodar.gif" : productImage.src = "./assets/img/sofa_boraCodar.png";
    btn360Icon.src.indexOf('view360.svg') != -1 ? btn360Icon.src = "./assets/icons/cancel_360.svg" : btn360Icon.src = "./assets/icons/view360.svg";

    console.log(this);
}

function AddProductToCart() {
    alert(`${productName} foi adicinado ao carrinho!`);
};

document.querySelector('#productCode').textContent = `código: ${productCode}`;
document.querySelector('#productName').textContent = productName;
document.querySelector('#productPrice').textContent = `R$ ${productPrice}`;
