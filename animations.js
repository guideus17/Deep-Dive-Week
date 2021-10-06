const scrollElements = document.querySelectorAll("#jaquelinphoto");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("jaquelinphotoScrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("jaquelinphotoScrolled");
};



const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.10)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});



