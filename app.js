console.log('hi')

// toggle icon navbar

let menuIcon = document.querySelector('#Menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
};
// scroll section acive link
 

let sections =document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header nav  a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >=offset && top < offset + height)
    {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector("header nav a[href*=" + id + "]").classList.add('active');
      });
    };
  });
  let header = document.querySelector('header');
  header.classList.toggle('sticky',window.screenY > 100);

  // remove toggle icon and navbar when click navbar link(scroll ) 
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};


