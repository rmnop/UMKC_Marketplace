//............................................................... Script ...................................................................
document.addEventListener("DOMContentLoaded", () => {
    var backgrounds = document.querySelectorAll('.background');

    const slider = document.querySelector('.slider-images');
    const images = Array.from(slider.children);
    
    //set image index at 0
    let imageIndex = 0;

    //update slider function
    function updateSlider() {
      //reset all images
      images.forEach(image => {
        image.classList.remove('active', 'previous', 'next', 'inactive');
      });

      //Add the 'active' class to the current image
      images[imageIndex].classList.add('active');

      //classList - read-only property that returns a live DOMTokenList collection of the class attributes of the element. 
      if(imageIndex - 1 >= 0) {
        images[imageIndex - 1].classList.add('previous');
      } else {
        images[images.length - 1].classList.add('previous');
      }

      //add 'next' class after current image 
      if(imageIndex + 1 < images.length) {
        images[imageIndex + 1].classList.add('next');
      } else {
        images[0].classList.add('next');
      }

      //add 'inactive' class 
      // Add the 'inactive' class to the other images
      images.forEach((image, index) => {
      if (index !== imageIndex && index !== (imageIndex - 1 + images.length) % images.length && index !== (imageIndex + 1) % images.length) {
          image.classList.add('inactive');
      }
  });

  // Set the opacity of all the background divs to 0
    backgrounds.forEach((background) => {
        background.style.opacity = 0;
    });
    // If the current image is active, set the opacity of the corresponding background div to 1
    if (images[imageIndex].classList.contains('active')) {
        backgrounds[imageIndex].style.opacity = 1;
    }

      //update image 
      imageIndex = (imageIndex + 1) % images.length;
    }

    updateSlider();
    setInterval(updateSlider, 3000);

    images[1].classList.add('next');
    images[2].classList.add('previous');
    images[3].classList.add('active');
   
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById(".navbar-expand-lg").style.padding = "30px 10px";
      document.getElementById("umkc_logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar-expand-lg").style.padding = "80px 10px";
      document.getElementById("umkc_logo").style.fontSize = "35px";
    }
}

    })

    