let faker = require('faker');
let sv_women = require('faker/lib/locales/sv/name/first_name_women.js');
let sv_men = require('faker/lib/locales/sv/name/first_name_men.js');

//The chance that an item will have variants (.7 is 70%)
const variantChance = 1;

//How many to generate (inclusive)
const generateRangeCarouselImages = [6, 9];
const generateRangeVariants = [4, 6];
const generateRangeBreadcrumbs = [3, 5];

let generateFakes = (n) => {
  let items = [];

  for (let i = 0; i < n; i++) {
    items.push(makeFake());
  }

  return items;
}

let makeFake = () => {
  item = {};

  //Swedish
  item.name = faker.random.arrayElement(sv_women); // String,
  
  //English
  item.itemID = faker.random.hexaDecimal(25); // Number(int)
  item.category = faker.commerce.product(); // String
  item.reviews = faker.random.number(250); // Number
  item.averageRating = averageRating(); // Number
  item.carouselImages = carouselImages(300, 400); // Array of objects {strings(url), and strings(url) for thumbnails}
  item.liked = faker.random.boolean(); // boolean
  item.price = faker.commerce.price(1999); // number
  item.shortName = faker.commerce.productAdjective() + ' ' + item.category; // String
  item.longDescription = item.shortName + '. ' + faker.commerce.productDescription() + '. ' + faker.lorem.paragraph(); // String
  item.breadcrumbs = generateCrumbs(item.category, (item.name + ' ' + item.shortName));
  item.thumbImageURL = 'https://source.unsplash.com/collection/1163637/100x100', // String
  item.articleNumber = (
      faker.random.number(999) + '.' +
      faker.random.number(999) + '.' +
      faker.random.number(999)
      ); // String
  
  //Not every product will have variants. Uses variantChance to determine chance of having variants.
  if (Math.random() < variantChance) {
    item.variantProduct = true;
    item.variants = variants();
    item.variantType = faker.random.arrayElement(item.variants.map( type => type.name));
    item.variantCategory = faker.commerce.productMaterial();
  } else {
    item.variantProduct = false;
  }

      
  return item;
};

let variants = () => {
  let [min, max] = generateRangeVariants;
  let length = Math.floor(Math.random() * (max - min + 1) + min);
  let variants = [];
  for (let i = 0; i < length; i++) {
    let imgSize = 54 + i;
    variants.push({
      name: (faker.random.arrayElement(sv_men) + ' ' +
             faker.commerce.productAdjective() + ' ' +
             faker.commerce.productMaterial()),
      imageUrl: `https://source.unsplash.com/collection/1163637/${imgSize}x${imgSize}`,
      linkUrl: faker.internet.url()
    });
  }

  return variants;
}

let carouselImages = (sizemin, sizemax) => {
  let [min, max] = generateRangeCarouselImages;
  let length = Math.floor(Math.random() * (max - min + 1) + min);
  let images = [];
  for (let i = 0; i < length; i++) {
    //Generate a size string between minxmin and maxxmax
    let size = (Math.floor(Math.random() * (sizemax - sizemin + 1)) + sizemin) + 'x' +
               (Math.floor(Math.random() * (sizemax - sizemin + 1)) + sizemin);

    images.push({
      imageUrl: 'https://source.unsplash.com/collection/1163637/' + size,
    });
  }

  return images;
}

let averageRating = () => (Math.floor((Math.random() * 5) + 1));

let generateCrumbs = (category, itemName) => {
  let [min, max] = generateRangeBreadcrumbs;
  let breadcrumbs = [];
  let n = Math.floor(Math.random() * (max - min + 1)) + min;
  
  //Generates n + 1 breadcrumbs.
  //The last breadcrumb will be the item itself
  //The second to last breadcrumb will be the item's category  
  for (let i = 0; i < n - 1; i++) {
    breadcrumbs.push({
      name: faker.commerce.department(), // String
      url: faker.internet.url() //String
    });
  }

  //Add a breadcrumb using the item's category
  breadcrumbs.push({
    name: category, // String
    url: faker.internet.url() //String
  });

  //Add a breadcrumb reference to the item itself
  breadcrumbs.push({
    name: itemName, // String
    url: faker.internet.url() //String
  });

  return breadcrumbs;
}

module.exports = generateFakes;