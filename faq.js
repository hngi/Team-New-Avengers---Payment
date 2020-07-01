// <!-- Initialize desktop Swiper -->
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerGroup:1,
    centeredSlides:true,
    grabCursor:true,
    loop:true,
    spaceBetween: 150,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //     },
    });

    swiper.on('slideChange', function(){
        currentItem++;
        if(currentItem > reviews.length-1){
            currentItem = 0;
        }
        showPerson(currentItem);
    });


    const reviews = [
        {
            id: 1,
            name: 'Jonanab web',
            job: "Designer",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad, officiis  dicta molestias ducimus fugit earum sit adipisci distinction pariatur facere."
        },
        {
            id: 2,
            name: 'Sky swizer',
            job: "Programmer",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad, officiis  dicta molestias ducimus fugit earum sit adipisci distinction pariatur facere."
        },
        {
            id: 3,
            name: 'Jane daniel',
            job: "Distributor",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad exercitationem sunt facere laboriosam molestias alias corrupti asperiores, voluptas voluptatibus?" 
        },
        {
            id: 4,
            name: 'Chin leokha',
            job: "Marketer",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad, officiis  dicta molestias ducimus fugit earum sit adipisci distinction pariatur facere." 
        },
        {
            id: 5,
            name: 'Ismail Ibrahim',
            job: "User",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus expedita et minima! Iusto adipisci accusantium neque, dicta numquam minima saepe?" 
        },
        {
            id: 6,
            name: 'Funke gold',
            job: "Enterprenuer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quia dicta praesentium sint quasi quidem beatae at optio rerum voluptates?" 
        },
    ];

    // select items
    const author = document.querySelector('.name');
    const job = document.querySelector('.stack');
    const info = document.querySelector('.text-content');

    let currentItem = 0;

    function showPerson(person){
        const item = reviews[person];
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
    }