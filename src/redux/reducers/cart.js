import * as types from "../constants/actionType";
var initialState = [
  {
    product: {
      id: 1,
      name: "iphone 11s",
      img:
        "https://www.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/iphone-6s-plus/thumbs/(600x600)_crop_iphone-6s-gold-xtmobile.jpg",
      description: "day la san pham cua apple",
      price: 500,
      inventory: 10,
      rating: 4,
    },
    quantity: 2,
  },
  {
    product: {
      id: 1,
      name: "iphone 8s",
      img:
        "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1115679429.jpeg",
      description: "day la san pham cua vn",
      price: 300,
      inventory: 11,
      rating: 1,
    },
    quantity: 3,
  },
];

const product = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log(action);
      return [...state];
    default:
      return [...state];
  }
};

export default product;
