// file retreving all images from firebase

const INITIAL_STATE = {
  sections: [
    {
      title: "leafy",
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/leafy.webp?alt=media&token=96cf1437-dbc7-4dff-b20a-6c3b94460d81',
      // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      //imageUrl: "images/hats.png", // local file in public/images/
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "fruits/vegetables",
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/istockphoto-693971874-612x612.jpg?alt=media&token=b372e2b4-5243-4c2f-9e66-c369470c2572',
      // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      //imageUrl: "images/jackets.png", // local file in public/images/
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "microgreens",
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/microgreens.jpg?alt=media&token=22bd6348-ed7c-42c2-af62-4dd800ae8e2d',
      // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      //imageUrl: "images/sneakers.png", // local file in public/images/
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "Equipment",
      // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/equipment.jpg?alt=media&token=e1d23ee3-92a5-4940-9c27-45927bb4b1b0',
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "Growing kits",
      // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      //imageUrl: "images/men.png", // local file in public/images/
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/growponics-52b82.appspot.com/o/selfWatering-kit.jpg?alt=media&token=c90aadf3-bc86-4e29-9e9c-6f70d4cca9ba',
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ]
};

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;
