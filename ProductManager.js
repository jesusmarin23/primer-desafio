class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
        throw new Error('Todos los campos son obligatorios.');
      }
  
      const isCodeUnique = this.products.every((product) => product.code !== code);
      if (!isCodeUnique) {
        throw new Error('El código del producto ya está en uso.');
      }
  
      const newProduct = {
        id: this.nextId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(newProduct);
      this.nextId++;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        console.error('Not Found');
      }
      return product;
    }
  }
  
  const productManager = new ProductManager();
  
  try {
    productManager.addProduct('Producto 1', 'Descripción del Producto 1', 100, 'imagen1.jpg', 'P123', 50);
    productManager.addProduct('Producto 2', 'Descripción del Producto 2', 150, 'imagen2.jpg', 'P124', 30);
    productManager.addProduct('Producto 3', 'Descripción del Producto 3', 200, 'imagen3.jpg', 'P123', 20); // Generará un error de código repetido
  } catch (error) {
    console.error(error.message);
  }
  
  const allProducts = productManager.getProducts();
  console.log('Todos los productos:', allProducts);
  
  const productById = productManager.getProductById(2);
  if (productById) {
    console.log('Producto encontrado por ID:', productById);
  }
  