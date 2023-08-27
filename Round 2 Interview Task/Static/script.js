// Cloning 

const Cloning = () => {
  let item = document.querySelector('.imgbox2')
  let template = document.querySelector('#cardClone')
  let template2 = document.querySelector('#cardClone2')
  let template3 = document.querySelector('#cardClone3')
  let allBlog = document.querySelector('.allBlog')
  let dropDown = document.querySelector('.dropDown')
  let dropclone = document.querySelector('#dropclone')
  let imgbox = document.querySelectorAll('.imgbox')


  for (let i = 0; i < 9; i++) {
    const cardclone = template.content.cloneNode(true);
    const cardClone2 = template2.content.cloneNode(true);
    item.appendChild(cardclone)
    allBlog.appendChild(cardClone2)
  }

  imgbox.forEach((img) => {
    for (let k = 0; k < 9; k++) {
      const cardClone3 = template3.content.cloneNode(true);
      img.appendChild(cardClone3)
    }
  })


  for (let j = 0; j < 4; j++) {
    const drop = dropclone.content.cloneNode(true)
    dropDown.appendChild(drop)
  }
}
Cloning();

// Drop Down

const dropDown = () => {
  let catagories = document.querySelector('.catagories')
  let drop = document.querySelector('.dropDown')

  catagories.addEventListener('click', () => {
    drop.classList.toggle('none')
  })
}

dropDown();
const sideMenu = () => {
  let hamburger = document.querySelector('.hamburger')
  let navSide = document.querySelector('.navSide')
  let close = document.querySelector('.close')

  hamburger.addEventListener('click', () => {
    navSide.classList.toggle('none2')

  })
  close.addEventListener('click', () => {
    navSide.classList.toggle('none2')

  })
}

sideMenu()




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



// Nav 2 

const nav2 = () => {
  let navAll = document.querySelectorAll('.nav2 li')
  let allContent = document.querySelectorAll('.cat1')

  navAll.forEach((navigation, index) => {
    navigation.addEventListener('click', () => {
      navAll.forEach(navigation => { navigation.classList.remove('blue') });
      navigation.classList.add('blue')
      allContent.forEach(content => { content.classList.remove('blue') })
      allContent[index].classList.add('blue')
    })
  })
}
nav2()
