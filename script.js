//HEADER
const header = document.getElementById('header-container');
const main = document.querySelector('main');
let previousPagePosition = document.documentElement.scrollTop; //start. Med -1 vil den være currentPagePosition > previousPagePosition, når man scroller ned, og currentPagePosition = previousPagePosition, når man scroller op.
const headerHeight = 50;
let headerCollapsed = false;

window.addEventListener('scroll', function(){
    let currentPagePosition = document.documentElement.scrollTop; //når man scroller tager den en ny værdi der er positiv i nedadgående retning
    let scrollDirection = currentPagePosition - previousPagePosition; //positiv hvis man scroller ned. negativ hvis op.
    
    switch(true){
        case scrollDirection>0 && currentPagePosition>headerHeight: //scroller ned og skjuler header 
            header.classList.remove('header-show');    
            header.classList.add('header-collapse');
            headerCollapsed = true;
            break;
        case scrollDirection<0 && headerCollapsed === true: //scroller op og viser header //&& headerCollapsed === true
            header.classList.remove('header-collapse');
            header.classList.add('header-show');
            //header.style.backgroundColor = 'orange';
            headerCollapsed = false;
            break;
    }

    previousPagePosition = document.documentElement.scrollTop; //update til ny position
})



