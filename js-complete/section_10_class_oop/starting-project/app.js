class Product {
  /**
   *
   * @param {string} title
   * @param {string} image
   * @param {string} desc
   * @param {number} price
   */
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value == attrValue;
  }
}

class Component {
  /**
   *
   * @param {string} renderHookId
   * @param {{}} [props]
   */
  constructor(renderHookId, props) {
    this.hookId = renderHookId;

    if (props) {
      for (const [key, val] of Object.entries(props)) {
        this[key] = val;
      }
    }

    this.render();
  }

  render() {}

  /**
   *
   * @param {string} tag
   * @param {string} [cssClasses='']
   * @param {ElementAttribute[]} [attributes]
   */
  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      attributes.forEach((attr) => rootElement.setAttribute(attr.name, attr.value));
    }

    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ProductItem extends Component {
  /**
   *
   * @param {string} renderHookId
   * @param {Product} product
   */
  constructor(renderHookId, product) {
    super(renderHookId, { product });
  }

  render() {
    const prodElem = this.createRootElement('li', 'product-item');
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
    btn.onclick = () => {
      App.addProductToCart(this.product);
    };
  }
}

class ProductList extends Component {
  /**
   *
   * @param {string} renderHookId
   * @param  {...Product} products
   */
  constructor(renderHookId, ...products) {
    super(renderHookId, { products });
  }

  render() {
    const attrs = [new ElementAttribute('id', 'product-list')];
    const prodList = this.createRootElement('ul', 'product-list', attrs);
    if (this.products) {
      this.products.forEach((prod) => {
        new ProductItem(prodList.id, prod);
      });
    }
  }
}

class ShoppingCart extends Component {
  /**
   *
   * @param {string} renderHookId
   */
  constructor(renderHookId) {
    super(renderHookId);
    this.items = [];
  }

  get totalAmount() {
    const totalPrice = this.items.reduce((prev, curr) => prev + curr.price, 0).toFixed(2);
    return totalPrice;
  }

  /**
   * this a stupid example of a setter
   * @param {Product[]} values
   */
  set cartItems(values) {
    this.items = values;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount}</h2>`;
  }

  /**
   * Takes in a product, adds it the to items array and updates the price.
   * @param {Product} product
   */
  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartElem = this.createRootElement('section', 'cart');
    cartElem.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartElem.querySelector('button').onclick = () => {
      if (this.items && this.items.length) {
        console.log('Ordering...');
        console.log(this.items);
      }
    };

    this.totalOutput = cartElem.querySelector('h2');
  }
}

class Shop extends Component {
  constructor(renderHookId) {
    super(renderHookId);
  }

  render() {
    this.cart = new ShoppingCart(this.hookId);
    this.prodList = new ProductList(
      this.hookId,
      new Product('A Pillow', 'pillow.jpg', 'A Soft Pillow', 19.99),
      new Product('A Carpet', 'carpet.jpg', 'A carpet you might life', 89.99)
    );
  }
}

class App {
  static cart;

  static init() {
    this.cart = new Shop('app').cart;
  }

  /**
   *
   * @param {Product} product
   */
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();

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
