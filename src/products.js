import imageProduct1 from './assets/images/1.png';
import imageProduct2 from './assets/images/2.png';
// import imageProduct3 from './assets/images/3.png';
// import imageProduct4 from './assets/images/4.png';
// import imageProduct5 from './assets/images/5.png';
// import imageProduct6 from './assets/images/6.png';
// import imageProduct7 from './assets/images/7.png';
// import imageProduct8 from './assets/images/8.png';
import imageSofa1 from './images/sofa.jpeg';
import imageSofa2 from './images/sofa2.jpg';
import imageSofa3 from './images/sofa3.jpg';
import imageSofa4 from './images/sofa4.jpg';
import imageSofa5 from './images/sofa5.jpg';
import imageSofa6 from './images/sofa6.jpg';
import imageSofa7 from './images/sofa7.jpeg';
import imageSofa8 from './images/sofa8.jpeg';
import red from './images/red.jpeg';
import blue from './images/blue.jpeg';
import grey from './images/grey.jpeg';
import black from './images/black.jpeg';
import cornerblue from './images/cornerblue.png';
import cornerblack from './images/cornerblack.png';
import cornerdarkgrey from './images/cornerdarkgrey.png';
import sofabedgrey from './images/sofabedgrey.png';
import darkred from './images/darkred.png';
import beige from './images/beige.png';
import grey1 from './images/grey1.png';


export const products = [
  {
    id: 1,
    name: 'Hertfoid Upholstered Chair',
    price: 101,
    image: imageProduct1,
    description:
      'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris.',
    slug: 'hertfoid-upholstered-chair',
    category: 'Chair',
    colors: [
      { name: 'red', image: '/images/red-chair.png' },
      { name: 'black', image: './images/black-chair.png' },
      { name: 'grey', image: './images/grey-chair.png' },
      { name: 'blue', image: './images/blue-chair.png' },
    ],
  },
  {
    id: 2,
    name: 'Abingdon Upholstered Chair Swivel',
    price: 151,
    image: imageProduct2,
    description:
      'Mollit anim consectetur adipisicing aute pariatur ad mollit ad. Officia amet aliqua non laborum dolore sint sit eu sit sunt laboris.',
    slug: 'bingdon-pholstered-chair-swivel',
    category: 'Chair',
    colors: [
      { name: 'white', image: './images/white-chair.png' },
      { name: 'brown', image: './images/brown-chair.png' },
    ],
  },
  {
    id: 9,
    name: '3 - Seat Sofa',
    price: 20990,
    image: imageSofa1,
    description:
      'A stylish velvet sofa that adds luxury to any living room with its plush cushions and modern design.',
    slug: 'modern-velvet-sofa',
    category: 'Sofa',
    colors: [
      { name: 'red', image: red},
      { name: 'black', image: black },
      { name: 'grey', image: grey },
      { name: 'blue', image: blue },
    ],
  },
  {
    id: 10,
    name: 'Corner Sofa-bed with Storage',
    price: 54990,
    image: imageSofa2,
    description:
      'A spacious sectional sofa perfect for family gatherings, offering maximum comfort and contemporary appeal.',
    slug: 'contemporary-sectional-sofa',
    category: 'Sofa',
    colors: [
      { name: 'blue', image: cornerblue },
      { name: 'darkgrey', image: cornerdarkgrey },
      {name:'black',image:cornerblack},
      {name:'grey',image:imageSofa2},
    ],
  },
  {
    id: 11,
    name: 'Sofa - bed',
    price: 19990,
    image: imageSofa3,
    description:
      'Made with premium leather, this sofa provides a sophisticated and comfortable seating experience.',
    slug: 'cozy-leather-sofa',
    category: 'Sofa',
    colors: [
      { name: 'grey', image: sofabedgrey },
      { name: 'yellow', image: imageSofa3},
    ],
  },
  {
    id: 12,
    name: '3 - Seat Sofa',
    price: 27990,
    image: imageSofa4,
    description:
      'A sleek, modern sofa with clean lines, ideal for those who appreciate minimalist design and comfort.',
    slug: 'sleek-modern-sofa',
    category: 'Sofa',
    colors: [
      { name: 'darkred', image: darkred },
      { name: 'grey', image: grey1 },
      { name: 'beige', image: beige },
      { name: 'blue', image: imageSofa4 },
    ],
  },
  {
    id: 13,
    name: '3 - Seat Sofa',
    price: 27990,
    image: imageSofa5,
    description:
      'A sleek, modern sofa with clean lines, ideal for those who appreciate minimalist design and comfort.',
    slug: 'sleek-modern-sofa',
    category: 'Sofa',
    colors: [
      { name: 'white', image: './images/white-sofa.png' },
      { name: 'blue', image: './images/blue-sofa.png' },
    ],
  },
  {
    id: 14,
    name: '2 - Seat Sofa',
    price: 58990,
    image: imageSofa6,
    description:
      'A sleek, modern sofa with clean lines, ideal for those who appreciate minimalist design and comfort.',
    slug: 'sleek-modern-sofa',
    category: 'Sofa',
    colors: [
      { name: 'brown', image: './images/brown-sofa.png' },
      { name: 'black', image: './images/black-sofa.png' },
    ],
  },
  {
    id: 15,
    name: '2-seat modular sofa with side table',
    price: 45970,
    image: imageSofa7,
    description:
      'A sleek, modern sofa with clean lines, ideal for those who appreciate minimalist design and comfort.',
    slug: 'sleek-modern-sofa',
    category: 'Sofa',
    colors: [
      { name: 'grey', image: './images/grey-sofa.png' },
      { name: 'blue', image: './images/blue-sofa.png' },
    ],
  },
  {
    id: 16,
    name: 'Corner sofa, 6-seat, Tonerud red',
    price: 104880,
    image: imageSofa8,
    description:
      'A sleek, modern sofa with clean lines, ideal for those who appreciate minimalist design and comfort.',
    slug: 'sleek-modern-sofa',
    category: 'Sofa',
    colors: [
      { name: 'red', image: './images/red-sofa.png' },
      { name: 'black', image: './images/black-sofa.png' },
    ],
  },
];
