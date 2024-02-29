
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

/* following code allows the button with the class "nav-toggle" to make changes to the webpage when it is clicked, and reverse changes when clocked again*/
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})  

/* following code makes nav menu disappear when link is clicked */
navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    })
})