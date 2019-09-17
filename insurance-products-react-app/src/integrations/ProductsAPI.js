const iPhoneProducts = [{
  id: 1,
  name: 'Robbery and Theft for iPhones'
}]

const CommonProducts = [
  {
    id: 3,
    name: 'Extended Guarantee'
  },
  {
    id: 5,
    name: 'Robbery and Theft with damage'
  }
]

const AndroidProducts = [{
  id: 2,
  name: 'Robbery and Theft for Android'
}]

const PremiumProducts = [{
  id: 4,
  name: 'Extended Guarantee for Premium devices'
}]

const CONSTANT_SKUs = {
  iphone: 'NF130LL/A',
  samsung: 'SG94353-/1',
  motorola: 'M16541'
}

class ProductsAPI {

  static fetchProducts = SKUs =>
    new Promise(resolve => {

      let products = [...CommonProducts];

      if(SKUs.includes(CONSTANT_SKUs.iphone)) {
        products = [...products, ...iPhoneProducts, ...PremiumProducts];
      }

      if(SKUs.includes(CONSTANT_SKUs.samsung)) {
        products = [...products, ...AndroidProducts, ...PremiumProducts];
      }

      if(SKUs.includes(CONSTANT_SKUs.motorola)) {
        products = [...products, ...AndroidProducts];
      }

      setTimeout(
        () => resolve([...new Set(products)]),
        1000
      )
    })

}

export default ProductsAPI;
