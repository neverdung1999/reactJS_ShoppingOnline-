var initalState = [
  {
    id: 1,
    name: "iphone 6s",
    img:
      "https://www.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/iphone-6s-plus/thumbs/(600x600)_crop_iphone-6s-gold-xtmobile.jpg",
    description: "day la san pham cua apple",
    price: 500,
    inventory: 10,
    rating: 4,
  },
  {
    id: 2,
    name: "iphone 7s",
    img:
      "https://cdn.tgdd.vn/Products/Images/42/87837/iphone-7-den-new-600x600-200x200.jpg",
    description: "day la san pham cua china",
    price: 400,
    inventory: 5,
    rating: 3,
  },
  {
    id: 3,
    name: "iphone 8s",
    img:
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1115679429.jpeg",
    description: "day la san pham cua vn",
    price: 300,
    inventory: 11,
    rating: 1,
  },
  {
    id: 4,
    name: "iphone xs",
    img:
      "https://product.hstatic.net/1000329106/product/iphone_x_black_bb614886188d44aaa7feda122848666e_master.jpg",
    description: "day la san pham cua apple",
    price: 1000,
    inventory: 20,
    rating: 5,
  },
];

const product = (state = initalState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default product;
