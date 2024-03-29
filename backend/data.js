import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'thuyavan',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'john',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Air Jordans',
      slug: 'nike-air-jordans',
      category: 'Shoes',
      image: '/images/p1.jpg',
      price: 300,
      countInStock: 0,
      brand: 'Nike',
      rating: 5,
      numReviews: 15,
      description: 'shoes',
    },
    {
      //_id: '2',
      name: 'Converse High Tops',
      slug: 'converse-high-tops',
      category: 'Shoes',
      image: '/images/p2.jpg',
      price: 300,
      countInStock: 20,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 15,
      description: 'shoes',
    },
    {
      //_id: '3',
      name: 'Adidas Stan Smiths',
      slug: 'adidas-stan-smiths',
      category: 'Shoes',
      image: '/images/p3.jpg',
      price: 300,
      countInStock: 20,
      brand: 'Nike',
      rating: 2,
      numReviews: 15,
      description: 'shoes',
    },
    {
      //_id: '4',
      name: 'New Balance 550s',
      slug: 'new-balance-550',
      category: 'Shoes',
      image: '/images/p4.jpg',
      price: 300,
      countInStock: 20,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      description: 'shoes',
    },
  ],
};

export default data;
