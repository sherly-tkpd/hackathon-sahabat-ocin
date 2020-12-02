const products = [
  {
    id: 1,
    slug: 'vas',
    title:'Vas Tanaman Medium',
    description: 'Vas tanah liat dengan tanaman hijau asli yang dapat menyejukkan suasana rumah. Ukuran 40x40x100 cm. Dikirim dengan menggunakkan karbo dan media tanam kering.',
    price:350000,
    objectModel: true,
    faceModel: false,
    facePart: '',
    shades: [],
    objectURL: '',
    images: ['src/assets/product_images/1/asset_1.png', 'src/assets/product_images/1/asset_2.png', 'src/assets/product_images/1/asset_3.png'],
  },
  {
    id: 2,
    slug: 'xxx',
    title:'',
    description: '',
    price:0,
    objectModel: true,
    faceModel: false,
    facePart: '',
    shades: [],
    objectURL: '',
    images: [],
  },
  {
    id: 3,
    slug: 'eyeshadow',
    title:'NARS Single Eyeshadow - Extreme Effects',
    description: 'Pigmented eyeshadow with vibrant colors to brighten your look. Gives a velvety non shiny color for eyes. Free of smudge and long last. Available in 3 colors. 2g.',
    price:550000,
    objectModel: false,
    faceModel: true,
    facePart: 'eye',
    shades: [{
        name: 'Persia',
        rgba: ''
      },{
        name:'Navy', 
        rgba:''
      },{
        name:'Blush', 
        rgba:''
      },{
        name:'Bronze', 
        rgba:''
    }],
    objectURL: '',
    images: ['src/assets/product_images/3/asset_1_persia.jpg','src/assets/product_images/3/asset_2_navy.jpg','src/assets/product_images/3/asset_3_blush.jpg','src/assets/product_images/3/asset_4_bronze.jpg'],
  },
  {
    id: 4,
    slug: 'lipstick',
    title:'Chanel Rouge Allure Lipstick',
    description: 'Pigmented eyeshadow with vibrant colors to brighten your look. Free of smudge and long last. Available in 3 colors. 2g.',
    price: 600000,
    objectModel: false,
    faceModel: true,
    facePart: 'lip',
    shades: [{
        name: 'Rouge d\'Or',
        rgba: ''
      },{
        name:'Cuivre', 
        rgba:''
      },{
        name:'Or Beige', 
        rgba:''
      }],
    objectURL: '',
    images: ['src/assets/product_images/4/asset_1.jpg','src/assets/product_images/4/asset_2.jpg','src/assets/product_images/4/asset_3.jpg'],
  },
  {
    id: 5,
    slug: 'foundation',
    title:'Cle de Peau Radiant Powder Foundation',
    description: 'A layer of light. A whisper of translucence. A revolution in foundation. 3g.',
    price: 1000000,
    objectModel: false,
    faceModel: true,
    facePart: 'face',
    shades: [{
        name: 'Light Ivory',
        rgba: ''
      },{
        name:'Nordstorm', 
        rgba:''
      }],
    objectURL: '',
    images: ['src/assets/product_images/5/asset_1.jpg','src/assets/product_images/5/asset_2.jpg',],
  },
];

export default products;
