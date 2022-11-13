//Active header element
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
  
  
    document.querySelectorAll('.section').forEach((el, i)=>{
      if (el.offsetTop - document.querySelector('.header__nav').clientHeight <= scrollDistance){
        document.querySelectorAll('.header__nav a').forEach((el) => {
          if (el.classList.contains('active')){
            el.classList.remove('active');
          }
        });
  
        // console.log(i)
  
        document.querySelectorAll('.header__nav li')[i].querySelector('a').classList.add('active');
      }
    });
  });

//Intro Read More Button
const readMoreBtn = document.querySelector('.intro__btn');
const moreText = document.querySelector('.intro__readMore');
let showAllText = false;
readMoreBtn.addEventListener("click", toggleMoreText);

function toggleMoreText (){
    if(!showAllText){
        readMoreBtn.innerHTML = 'Show less';
        moreText.style.overflow = 'visible';
        moreText.style.opacity = '1';
        moreText.style.maxHeight = '100%';
        showAllText = true;
    } else{
        readMoreBtn.innerHTML = 'Read More';
        moreText.style.overflow = 'hidden';
        moreText.style.opacity = '0';
        moreText.style.maxHeight = '0';
        showAllText = false;
    }
}

  //About section
const servicesBtns = document.querySelectorAll('.btn');
const servicesText = document.querySelectorAll('.services__textItem');

servicesBtns.forEach(item => item.addEventListener('click', toggleServices));

function toggleServices(e) {
    servicesBtns.forEach(element => element.classList.remove('active'));
    e.target.classList.add('active');
    servicesText.forEach(element => {
        element.classList.add('hidden');
        if(element.dataset.id === e.target.dataset.id){
            element.classList.add('visible');
            element.classList.toggle('hidden');
        }
    })
}

function setDataId(arr){
    for(let i = 0; i < arr.length; i++){
        let id = i + 1;
        arr[i].dataset.id = id.toString();
    }
}

setDataId(servicesText);
setDataId(servicesBtns);

// Contact section
document.querySelector("#contactForm").addEventListener("click", openForm);
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}