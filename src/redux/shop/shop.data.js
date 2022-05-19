const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Leafy',
    routeName: 'leafy',
    items: [
      {
        id: 1,
        name: 'Spinach',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/spinach.jpg?alt=media&token=9f5f48f6-6c31-495b-8b78-6d6703a1a99b',
        price: 25
      },
      {
        id: 2,
        name: 'Cilantro',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/cilantro.jpg?alt=media&token=a05aa3cd-444b-4e4e-b7c1-5b39d1657241',
        price: 18
      },
      {
        id: 3,
        name: 'asparagus',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/asparagus.jpg?alt=media&token=09a0b3be-ee66-4f8f-8cc9-41057914447f',
        price: 35
      },
      {
        id: 4,
        name: 'Lettuce',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/lettuce.jpg?alt=media&token=d3a7abd5-c2f7-429e-b2fa-aaf7a3a026b4',
        price: 25
      },
      
    ]
  },
  sneakers: {
    id: 2,
    title: 'microgreens',
    routeName: 'microgreens',
    items: [
      {
        id: 10,
        name: 'kale',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/sunflower-micro.jpg?alt=media&token=002b8b38-4159-4528-8a90-a6ef9182eaff',
        price: 220
      },
      {
        id: 11,
        name: 'Radish',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/radish-micro.jpg?alt=media&token=c981121f-3f2c-406a-9382-2f375c6bb35a',
        price: 280
      },
      {
        id: 12,
        name: 'Sun Flower',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/arugula-micro.jpg?alt=media&token=f89ea1f9-0ee3-40de-9e00-d559f19bcd55',
        price: 110
      },
      {
        id: 13,
        name: 'Arugula',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/kale-micro.jpg?alt=media&token=02640494-d278-4dab-921a-6c5d18d70861',
        price: 160
      },
      
    ]
  },
  jackets:{
    id: 3,
    title: 'fruits/vegetables',
    routeName: 'fruits/vegetables',
    items: [
      {
        id: 18,
        name: 'Strawberry',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/strawberry.jpg?alt=media&token=f2804a72-684a-45f6-8182-fcd989ef60a7',

       // imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125
      },
      {
        id: 19,
        name: 'Brinjal',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/bringal.jpg?alt=media&token=ffc234e2-4834-418a-a37e-f3cc6bee455c',
        price: 90
      },
      {
        id: 20,
        name: 'Tomato',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/tomatoes.jpg?alt=media&token=09ff1dbe-aa64-452d-85df-b42d6634f141',

       // imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90
      },
      {
        id: 21,
        name: 'Banana',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/banana.jpg?alt=media&token=bd12a4f6-65bb-4c78-a9d4-6790fa17c71d',

        //imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165
      },
      
    ]
  },
  womens: {
    id: 4,
    title: 'supplies',
    routeName: 'supplies',
    items: [
      {
        id: 23,
        name: 'Growneer',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/Growneer.jpg?alt=media&token=7ac63d35-e2c1-465a-aa01-2aef142e3ec7',
        price: 25
      },
      {
        id: 24,
        name: 'NFT kit',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/NFT%20kit.jpg?alt=media&token=75a0763d-99df-4fc6-bb66-b961579b494b',
        price: 20
      },
      {
        id: 25,
        name: 'HTG supply',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/HTG%20supply.jpg?alt=media&token=dce622b1-5bc1-4dbf-b37e-637f3afae085',
        price: 80
      },
      {
        id: 26,
        name: 'Growing tray',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/Growing%20tray.jpg?alt=media&token=2b1c2fd8-949b-433c-b776-e3a11cb14a4c',
        price: 80
      },
      
    ]
  },
  mens: {
    id: 5,
    title: 'growing kits',
    routeName: 'growing kits',
    items: [
      {
        id: 30,
        name: 'Microgreens kit',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/Microgreens-kit.jpg?alt=media&token=6ef0fd21-6f75-47d6-acb7-df5aa873c33f',
        price: 325
      },
      {
        id: 31,
        name: 'Self Watering kit',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/selfWatering-kit.jpg?alt=media&token=c90aadf3-bc86-4e29-9e9c-6f70d4cca9ba',
        price: 20
      },
      {
        id: 32,
        name: 'Premium Jar kit',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/premium-jar%20-sprouting-kit.jpg?alt=media&token=474e443b-56ad-40ec-bc7b-f7d0a2723dfb',
        price: 25
      },
      {
        id: 33,
        name: 'Sprouting kit',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/Sprouting-kit.jpg?alt=media&token=b07d0259-8895-47e2-9ccb-14522651e3b6',
        price: 25
      },
      
    ]
  }
};

export default SHOP_DATA;
