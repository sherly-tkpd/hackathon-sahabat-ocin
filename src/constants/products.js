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
    images: ['images/products/1/asset_1.png', 'images/products/1/asset_2.png', 'images/products/1/asset_3.png'],
  },
  {
    id: 2,
    slug: 'television',
    title:'Samsung QLED TV',
    description: 'Ambang Batas Kedalaman Sempurna SAMSUNG QLED TV mengoptimalkan resolusi superior untuk kedalaman gambar yang luar biasa dan kemampuan untuk menampilkan detail yang rumit dengan sempurna, menghadirkan bingkai 4K yang benar-benar hidup bagi Anda.',
    price:21500000,
    objectModel: true,
    faceModel: false,
    facePart: '',
    shades: [],
    objectURL: '',
    images: ['images/products/2/asset_1.jpg', 'images/products/2/asset_2.jpg', 'images/products/2/asset_3.jpg'],
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
    shades: [{ // andy ganti
        name: 'Persia',
        rgba: '255,0,0,0.3'
      },{
        name:'Navy', 
        rgba:'0,255,0,0.3'
      },{
        name:'Blush', 
        rgba:'50,0,0,0.3'
      },{
        name:'Bronze', 
        rgba:'50,0,50,0.3'
    }],
    objectURL: '',
    images: ['images/products/3/asset_1_persia.jpg','images/products/3/asset_2_navy.jpg','images/products/3/asset_3_blush.jpg','images/products/3/asset_4_bronze.jpg'],
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
    shades: [{ // andy ganti
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
    images: ['images/products/4/asset_1.jpg','images/products/4/asset_2.jpg','images/products/4/asset_3.jpg'],
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
    shades: [{ // andy ganti
        name: 'Light Ivory',
        rgba: ''
      },{
        name:'Nordstorm', 
        rgba:''
      }],
    objectURL: '',
    images: ['images/products/5/asset_1.jpeg','images/products/5/asset_2.jpeg',],
  },
];

export default products;
