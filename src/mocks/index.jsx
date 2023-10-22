
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';

export const fetchProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (categoryId) {
          const filteredProducts = productsData.filter((product) => product.categoryId === categoryId);
          resolve(filteredProducts);
        } else {
          resolve(productsData);
        }
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};

export const fetchCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(categoriesData);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};
