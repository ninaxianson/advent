let container = document.getElementById("container");

 const getData = () =>  [
        {
            id: 1,
            date: 1,
            image: "giantSanta.jpg-min.jpg",
            message: "Hope you guys enjoy this advent calendar. Come back each day to countdown Christmas with us!(PS. 'Facts' are from the internet so take them with a grain of salt. And sorry in advance for the terrible jokes!",
            open: false
        },
        {
            "id": 2,
            "date": 2,
            "image": "ryanBigSmile.jpg",
            "message": "May this season be full of light and laughter!",
            "open": false
        },
        {
            "id": 3,
            "date": 3,
            "image": "coconutChristmas.jpg",
            "message": "What is a Christmas tree's favorite candy?  Orna-mints!",
            "open": false
        },
        {
            "id": 4,
            "date": 4,
            "image": "nicoleGirlspool.jpg",
            "message": "Why do we kiss under the mistletoe? According to legend Fregg, the Norse goddess of love, promised to kiss anyone who passed under the berry-laden plant after it saved her son's life. It wasn't until the 18th century; however, that this became a popular Christmas custom in England",
            "open": false
        },
        {
            "id": 5,
            "date": 5,
            "image": "grandpaGrandma.jpg",
            "message": "Though we're apart, you're in my heart-this Christmas and always.",
            "open": false
        },
        {
            "id": 6,
            "date": 6,
            "image": "christiansonPitiBeach.jpg",
            "message": "'Jingle Bells' was the first song played in space on December 16, 1965!",
            "open": false
        },
        {
            "id": 7,
            "date": 7,
            "image": "natRyan.jpg",
            "message": "Fun fact- people in Iceland will often exchange books on Christmas Eve, then spend the rest of the night reading and eating chocolate! Sign me up!",
            "open": false
        },
        {
            "id": 8,
            "date": 8,
            "image": "northPole.jpg",
            "message": "Why is it always cold on Christmas? Because it's Decembrrrr!",
            "open": false
        },
        {
            "id": 9,
            "date": 9,
            "image": "grandpaTay.jpg",
            "message": "On Christmas Day, tradition allows Lebanese children to go up to any adult and say, 'Editi 'aleik!' (You have a gift for me). If the adult has a present to spare, the kid adds this to their traditional Christmas morning haul!",
            "open": false
        },
        {
            "id": 10,
            "date": 10,
            "image": "bellaTakeDiner.jpg",
            "message": "The tradition of tinsel, which was invented in Germany in 1610, is based on a legend about spiders whose web turned into silver when they were spun in a Christmas tree.",
            "open": false
        },
        {
            "id": 11,
            "date": 11,
            "image": "jusNinMt.jpg",
            "message": "What are your favorite Christmas movies? Share in the group chat so we can all try to watch. I'll start...We're No Angels (the Humphry Bogart, Aldo Ray and Peter Ustinov 1955 version)! I highly recommend you watch it(I do every Christmas season)",
            "open": false
        },
        {
            "id": 12,
            "date": 12,
            "image": "ryanMoto.jpg",
            "message": "What kind of cars do elves drive? Toy-otas!",
            "open": false
        },
        {
            "id": 13,
            "date": 13,
            "image": "braunFam.jpg",
            "message": "Here's to Christmas! A time of remembering, loving, giving, believing, gratitude, magic and peace!",
            "open": false
        },
        {
            "id": 14,
            "date": 14,
            "image": "christiansonWaterfall.jpg",
            "message": "What did the Gingerbread Man put on his bed? A cookie sheet!",
            "open": false
        },
        {
            "id": 15,
            "date": 15,
            "image": "zoo.jpg",
            "message": "The best Christmas gift is to realize how much you already have.",
            "open": false
        },
        {
            "id": 16,
            "date": 16,
            "image": "ryanTakeBellHawaiian.jpg",
            "message": "A season of wonder, joy 'n delight...May all your days be merry and bright!",
            "open": false
        },
        {
            "id": 17,
            "date": 17,
            "image": "stareDown.jpg",
            "message": "Why was the snowman looking through the carrots?  He was picking his nose!",
            "open": false
        },
        {
            "id": 18,
            "date": 18,
            "image": "granpaRyan.jpg",
            "message": "Remember that Christmas is about more than presents. There are also cookies:)",
            "open": false
        },
        {
            "id": 19,
            "date": 19,
            "image": "jusTayCarGuam.jpg",
            "message": "I think as you grow older your Christmas list gets shorter, because the things you want can't be bought.",
            "open": false
        },
        {
            "id": 20,
            "date": 20,
            "image": "bellTakRyan.jpg",
            "message": "Where would you find a snowman dancing? At a snow ball!",
            "open": false
        },
        {
            "id": 21,
            "date": 21,
            "image": "bellowsBeach.jpg",
            "message": "I don't want much for Christmas. I just want the person reading this to be healthy, happy and loved!",
            "open": false
        },
        {
            "id": 22,
            "date": 22,
            "image": "ryanHat.jpg",
            "message": "Why do Donner and Blitzen get to take so many coffee breaks? Because they are Santa's star bucks!",
            "open": false
        },
        {
            "id": 23,
            "date": 23,
            "image": "takeyahBellaStocks.jpg",
            "message": "What is your favorite Christmas memory or what is your favorite Christmas tradition? Share this in the group chat.",
            "open": false
        },
        {
            "id": 24,
            "date": 24,
            "image": "christiansonFamily.jpg",
            "message": "Play Frank Sinatra's 'Have Yourself a Merry Little Christmas' or 'I'll be Home for Christmas' These are my favorite Christmas songs and I play them a bazillion times each season...Someday soon we all will be together if the fates allow. Until then, we'll have to muddle through somehow. So have yourself a merry little Christmas now.",
            "open": false
        },
        {
            "id": 25,
            "date": 25,
            "image": "frontPorchpic.jpg",
            "message": "Wishing you the Merriest of Christmases yet! I wish we were there to celebrate together. Sending you all a big hug and kiss!",
            "open": false
        }
    ]

//Randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}; 

//Card Generator Function
const cardGenerator = () => {
    const cardData = randomize();
//Generate the content(html)

cardData.forEach(item => {
const frontCard = document.createElement('button');
const modal = document.createElement('div');
const modalContent = document.createElement('div');
const closeBtn = document.createElement('span');
const image = document.createElement('img');
const message = document.createElement('p');

//card details
frontCard.textContent = item.date;
frontCard.classList = "advent-day";
frontCard.id = "modalBtn";
modal.classList = "modal";
modal.id = 'simpleModal';
modalContent.classList = "modal-content";
closeBtn.innerHTML = '&times;';
closeBtn.classList = 'closeBtn';
image.setAttribute('src', `./images/${item.image}`);
image.classList = 'images';
message.classList = 'message';
message.innerText = item.message;

//attach children
container.appendChild(modal);
modal.appendChild(modalContent);
modalContent.appendChild(closeBtn);
modalContent.appendChild(image);
modalContent.appendChild(message);
container.appendChild(frontCard);

frontCard.addEventListener('click', (e) => {
    modal.style.display = 'block';         
});

closeBtn.addEventListener('click', (e) => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target == modal) {
       modal.style.display = 'none';
      }
  });

})
};
cardGenerator();








 