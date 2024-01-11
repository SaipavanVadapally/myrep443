// Product class
class Product {
  constructor(productImage, productName, productRating) {
    this.productImage = productImage;
    this.productName = productName;
    this.productRating = productRating;
  }

  addToCart() {
    console.log(`Added ${this.productName} to the cart.`);
  }

  addToWishList() {
    console.log(`Added ${this.productName} to the wish list.`);
  }
}

// SaleProduct class extending Product
class SaleProduct extends Product {
  constructor(productImage, productName, productRating, discount) {
    super(productImage, productName, productRating);
    this.discount = discount;
  }
}

// Create instances of Product
const product1 = new Product('image1.jpg', 'Laptop', 4.5);
const product2 = new Product('image2.jpg', 'Smartphone', 3.8);
const product3 = new Product('image3.jpg', 'Headphones', 4.0);
const product4 = new Product('image4.jpg', 'Backpack', 4.2);
const product5 = new Product('image5.jpg', 'Camera', 3.7);
const product6 = new Product('image6.jpg', 'Coffee Maker', 4.8);
const product7 = new Product('image7.jpg', 'Fitness Tracker', 4.1);
const product8 = new Product('image8.jpg', 'Bookshelf', 4.5);
const product9 = new Product('image9.jpg', 'Sunglasses', 3.9);
const product10 = new Product('image10.jpg', 'Desk Chair', 4.6);

// Create instances of SaleProduct
const saleProduct1 = new SaleProduct('image11.jpg', 'Smart TV', 4.7, 0.15);
const saleProduct2 = new SaleProduct('image12.jpg', 'Bluetooth Speaker', 4.2, 0.1);
const saleProduct3 = new SaleProduct('image13.jpg', 'Gaming Mouse', 4.5, 0.2);
const saleProduct4 = new SaleProduct('image14.jpg', 'Running Shoes', 4.3, 0.18);
const saleProduct5 = new SaleProduct('image15.jpg', 'Table Lamp', 4.0, 0.12);

// Test the methods
product1.addToCart();
product2.addToWishList();
saleProduct1.addToCart();
saleProduct2.addToWishList();
