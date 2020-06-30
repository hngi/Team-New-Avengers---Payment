//Using Selector inside the element
//traversing the dom

const questions = document.querySelectorAll('.question');
const demo = document.querySelectorAll('.demo')
questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text')
            }
        });

        question.classList.toggle('show-text');
    })
})

// local reviews data
const reviews = [
    {
        id: 1,
        name: 'Jonanab web',
        job: "Designer",
        img: "/imgs/review-1.png",
        text: "Successful people don’t become that way overnight. What most people see at a glance—happiness, wealth, a great career, purpose—is the result of hard work and hustle over time."
    },
    {
        id: 2,
        name: 'Sky swizer',
        job: "Programmer",
        img: "/imgs/review-2.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad, officiis  dicta molestias ducimus fugit earum sit adipisci distinction pariatur facere."
    },
    {
        id: 3,
        name: 'Jane daniel',
        job: "Distributor",
        img: "/imgs/review-3.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad, officiis  dicta molestias ducimus fugit earum sit adipisci distinction pariatur facere." 
    },
    {
        id: 4,
        name: 'Chin leokha',
        job: "Marketer",
        img: "imgs/review-4.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad, officiis  dicta molestias ducimus fugit earum sit adipisci distinction pariatur facere." 
    },
    {
        id: 5,
        name: 'Ismail Ibrahim',
        job: "User",
        img: "/imgs/review-5.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad, officiis  dicta molestias ducimus fugit earum sit adipisci distinction pariatur facere." 
    },
    {
        id: 6,
        name: 'Funke gold',
        job: "Enterprenuer",
        img: "/imgs/review-6.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad, officiis  dicta molestias ducimus fugit earum sit adipisci distinction pariatur facere." 
    },

    {
        id: 7,
        name: 'John boe',
        job: "Devops",
        img: "/imgs/review-7.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad, officiis  dicta molestias ducimus fugit earum sit adipisci distinction pariatur facere." 
    },
];

// select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//Set starting items
let currentItem = 0;

//Load intial items

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});

//Show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem = 0;
    }
   showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    showPerson(currentItem);
});

// show randow person.

randomBtn.addEventListener('click', function(){
   currentItem = (Math.floor(Math.random()*reviews.length));
   showPerson(currentItem);
});

