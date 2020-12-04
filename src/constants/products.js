const products = [
  {
    id: 1,
    slug: 'vas',
    title:'Vas Tanaman Medium',
    description: 'Vas tanah liat dengan tanaman hijau asli yang dapat menyejukkan suasana rumah. Ukuran 40x40x100 cm. Dikirim dengan menggunakkan kargo dan media tanam kering.',
    price:350000,
    objectModel: true,
    faceModel: false,
    facePart: '',
    shades: [],
    objectURL: ['/model/vase/indoor_plant.obj', '/model/vase/indoor_plant.mtl', 0.1, [0, 0]],
    images: ['/images/products/1/asset_1.png', '/images/products/1/asset_2.png', '/images/products/1/asset_3.png'],
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
    objectURL: ['/model/television/samsung_tv.obj', '/model/television/samsung_tv.mtl', 0.01, [4.712, 0]],
    images: ['/images/products/2/asset_1.jpg', '/images/products/2/asset_2.jpg', '/images/products/2/asset_3.jpg'],
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
      name: 'Blue Shadow',
      rgba: 'rgb(221, 84, 52, 1)',
      trueTone: 'rgb(221, 84, 52)'
    },{
      name: 'Tosca Mania',
      rgba: 'rgba(4, 140, 87, 0.9)',
      trueTone: 'rgb(35, 204, 138)'
    },{
      name: 'Elegant Purple',
      rgba: 'rgba(191, 0, 255, 0.8)',
      trueTone: 'rgb(169, 48, 209)'
      }
    ],
    objectURL: '',
    images: ['/images/products/3/asset_1_persia.jpg','/images/products/3/asset_2_navy.jpg','/images/products/3/asset_3_blush.jpg','/images/products/3/asset_4_bronze.jpg'],
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
        name: 'Coral',
        rgba: 'rgba(202, 77, 47, 0.4)',
        trueTone: 'rgba(202, 77, 47, 0.8)'
      },{
        name:'Rouge d\'Or', 
        rgba:'rgba(205, 50, 50, 0.4)',
        trueTone: 'rgba(205, 50, 50, 0.8)'
      },{
        name:'Cuivre', 
        rgba:'rgba(168, 0, 0, 0.4)',
        trueTone: 'rgb(212, 49, 49, 0.8)'
      },{
        name:'Rose', 
        rgba:'rgba(255,20,147, 0.2)',
        trueTone: 'rgb(255,20,147, 0.6)'
      }],
    objectURL: '',
    images: ['/images/products/4/asset_1.jpg','/images/products/4/asset_2.jpg','/images/products/4/asset_3.jpg'],
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
        name: 'Smoothie White',
        rgba: 'rgba(229,194,152, 0.07)',
        trueTone: 'rgb(229,194,152)'
      },{
        name: 'Warm Beauty',
        rgba: 'rgba(204,132,67, 0.07)',
        trueTone: 'rgb(204,132,67)'
      }],
    objectURL: '',
    images: ['/images/products/5/asset_1.jpeg','/images/products/5/asset_2.jpeg'],
  },
];

export default products;
