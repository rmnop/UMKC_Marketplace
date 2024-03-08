//............................................................... Script ...................................................................
document.addEventListener("DOMContentLoaded", () => {
    // Data for the sections
    let h1Texts = ["Buy", "Sell", "Trade"]; // h1 texts here
    let logoColors = [
      "var(--umkc-blue)",
      "var(--umkc-yellow)",
      "var(--black-color)"
    ]; // logo colors 
    let keyframes = ["wave-blue-effect", "wave-yellow-effect", "wave-black-effect"]; // keyframes 
    // Normal GSAP animation.
    gsap.from(".all-image ", { y: "-100vh", delay: 0.5 });
    gsap.to(".all-image img", {
      x: "random(-20, 20)",
      y: "random(-20, 20)",
      zIndex: 22,
      duration: 2,
      ease: "none",
      yoyo: true,
      repeat: -1
    });
    
    // get the elements
    const waveEffect = document.querySelector(".wave");
    const sections = document.querySelectorAll(".section");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const caneLabels = document.querySelector(".change-image");
    const sectionContainer = document.querySelector(".section-container");
    // Set index and current position
    let index = 0;
    let currentIndex = 0;
    let currentPosition = 0;
    
    // Add event listeners to the buttons
    nextButton.addEventListener("click", () => {
      // Decrease the current position by 100% (to the left)
      if (currentPosition > -200) {
        currentPosition -= 100;
        // Update the left position of the cane-labels
        caneLabels.style.left = `${currentPosition}%`;
        sectionContainer.style.left = `${currentPosition}%`;
      }
      // Increment index and currentIndex
      currentIndex++;
      // Update the h1 text if currentIndex is less than the length of h1Texts
      if (currentIndex < h1Texts.length) {
        document.querySelector(".h1").innerHTML = h1Texts[currentIndex];
      }
      // Gasp animation for next section components
      gsap.to(".navbar-brand", {
        opacity: 1,
        duration: 1,
        color: logoColors[currentIndex - 1]
      });
      gsap.from(".h1", { y: "20%", opacity: 0, duration: 0.5 });
      gsap.from(".all-image ", { y: "-100vh", delay: 0.4, duration: 0.4 });

      // Disable the nextButton if the last section is active
      if (currentIndex === h1Texts.length - 1) {
        nextButton.style.display = "none";
      }
      // Enable the prevButton if it's not the first section
      if (currentIndex > 0) {
        prevButton.style.display = "block";
      }
      // Button colors and animations
      nextButton.style.color = logoColors[currentIndex + 1];
      prevButton.style.color = logoColors[currentIndex - 1];
      nextButton.style.animationName = keyframes[currentIndex + 1];
      prevButton.style.animationName = keyframes[currentIndex - 1];
    });
    // Add event listeners to the buttons
    prevButton.addEventListener("click", () => {
      if (currentPosition < 0) {
        currentPosition += 100;
        // Update the left position of the cane-labels
        caneLabels.style.left = `${currentPosition}%`;
        sectionContainer.style.left = `${currentPosition}%`;
        sectionContainer.style.transition = `all 0.5s ease-in-out`;
      }
      // Decrement index and currentIndex
      currentIndex--;
      if (currentIndex >= 0) {
        document.querySelector(".h1").innerHTML = h1Texts[currentIndex];
      }
      // Gasp animation for previous section components
      gsap.to(".navbar-brand", { color: logoColors[currentIndex + 1], duration: 1 });
      gsap.from(".h1", { y: "20%", opacity: 0, duration: 0.5 });
      gsap.from(".all-image ", { y: "100vh", delay: 0.5 });
      // Enable the nextButton if it was disabled
      nextButton.style.display = "block";
      // Disable the prevButton if it's the first section
      if (currentIndex === 0) {
        prevButton.style.display = "none";
      }
      // Button colors and animations
      nextButton.style.color = logoColors[currentIndex + 1];
      prevButton.style.color = logoColors[currentIndex - 1];
      nextButton.style.animationName = keyframes[currentIndex + 1];
      prevButton.style.animationName = keyframes[currentIndex - 1];
    });
    })
    