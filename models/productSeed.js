module.exports = [{
    name: 'Blueberries',
    description: 'The Bluest of berries',
    img: 'https://i.imgur.com/Jte0enG.jpg',
    price: 5,
    qty: 100
    },
    {
    name: 'Mangoes',
    description: 'Overly Ripe Mangoes',
    img: 'https://i.imgur.com/7HUu5sx.jpg',
    price: 10,
    qty: 0
    }, 
    {
    name: 'Kiwis',
    description: "We make keys for our kiwis",
    img: 'https://i.imgur.com/XNwT8mh.jpg',
    price: 7,
    qty: 30
    }, 
    {
    name: 'Pomegranate',
    description: 'Not to be confused with Pomegranite',
    img: 'https://i.imgur.com/tc2NoxT.jpg',
    price: 8,
    qty: 20
    },
],
(error, data) => {
    res.redirect('/store/');
}