class Product {
  constructor(title = '', image = '', desc = '', price = 0) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput = `<h2>Total: \$${0}</h2>`;
  }
  render() {
    const cartElem = document.createElement('section');
    cartElem.className = 'cart';
    cartElem.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Place Order</button>
    `;
    this.totalOutput = cartElem.querySelector('h2');
    return cartElem;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart = () => {
    console.log('Adding product to cart: ', this.product);
  };

  render() {
    const prodElem = document.createElement('li');
    prodElem.className = 'product-item';
    prodElem.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" >
        <div class="product-ite1m__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const btn = prodElem.querySelector('button');
    btn.onclick = this.addToCart;
    return prodElem;
  }
}

class ProductList {
  constructor(...products) {
    this.products = products;
  }

  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    this.products.forEach((prod) => {
      const prodItem = new ProductItem(prod);
      prodList.append(prodItem.render());
    });
    return prodList;
  }
}

class App {
  render() {
    const renderHook = document.getElementById('app');
    const cart = new ShoppingCart();
    const cartElem = cart.render();
    const productLists = new ProductList(
      new Product('A Pillow', 'pillow.jpg', 'A Soft Pillow', 19.99),
      new Product('A Carpet', 'carpet.jpg', 'A carpet you might life', 89.99)
    );
    const prodList = productLists.render();
    renderHook.append(cartElem);
    renderHook.append(prodList);
  }
}

new App().render();
// const productList = {
//   products: [
//     new Product('A Pillow', 'pillow.jpg', 'A Soft Pillow', 19.99),
//     // {
//     //   title: 'A Pillow',
//     //   imageUrl: 'something something.jpg',
//     //   price: 19.99,
//     //   description: 'A Soft Pillow',
//     // },
//     new Product('A Carpet', 'carpet.jpg', 'A carpet you might life', 89.99),
//     // {
//     //   title: 'A Carpet',
//     //   imageUrl: 'something else.jpg',
//     //   price: 89.99,
//     //   description: 'A carpet which you might like',
//     // },
//   ],
//   // render() {
//   //   const renderHook = document.getElementById('app');
//   //   const prodList = document.createElement('ul');
//   //   prodList.className = 'product-list';
//   //   this.products.forEach((prod) => {
//   //     const prodElem = document.createElement('li');
//   //     prodElem.className = 'product-item';
//   //     prodElem.innerHTML = `
//   //       <div>
//   //         <img src="${prod.imageUrl}" alt="${prod.title}" >
//   //         <div class="product-ite1m__content">
//   //           <h2>${prod.title}</h2>
//   //           <h3>\$${prod.price}</h3>
//   //           <p>${prod.description}</p>
//   //           <button>Add to Cart</button>
//   //         </div>
//   //       </div>
//   //     `;
//   //     prodList.append(prodElem);
//   //   });
//   //   renderHook.append(prodList);
//   // },
// };

// productList.render();
