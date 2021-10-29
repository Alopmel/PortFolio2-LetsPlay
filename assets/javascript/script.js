const menu = document.getElementById('menu');
const indicator = document.getElementById('indicator');
const sections = document.querySelectorAll('.section');

let indicatorZise = menu.querySelector('a').offsetWidth;
indicator.style.width = indicatorZise + 'px';

let sectionIndex; 
//Observer
const observer = new IntersectionObserver((entrys, observer) =>{
    entrys.forEach(entry => {
        if(entry.isIntersecting){
            //we obtain the section that enters the screen
            //console.log(`The entry :${entrys.target.id} is the entrance is intersecting)
            
            // we create an array with the sections and obtain the index of the section on the screen
            sectionIndex = [...sections].indexOf(entry.target);
            console.log(sectionIndex);
            indicator.style.transform = `translateX(${indicatorZise * sectionIndex}px)`
        } else if (entry.isIntersecting == -1){
            indicator.style.transform = 'translateX(-500px)';
        }
    } )
}, {
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.2
})
// add an observer for header
observer.observe(document.getElementById('menu'));

//assign an observer for each section
sections.forEach(section => observer.observe(section));

const onResize = () => {
    //calculate the new size of the indicator
    indicatorZise = menu.querySelector('a').offsetWidth;

    indicator.style.width = `${indicatorZise}px`;
    indicator.style.transform = `translateX(${indicatorZise * sectionIndex}px)`
    
}

window.addEventListener('resize', onResize)