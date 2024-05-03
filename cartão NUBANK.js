document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.conteiner');
  
    container.addEventListener("mousemove", containerEffect);
    container.addEventListener("mouseleave", containerBack);
    container.addEventListener("mouseenter", containerEnter);
  
    function containerEffect(event) {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const centerX = container.offsetLeft + containerWidth / 2;
      const centerY = container.offsetTop + containerHeight / 2;
      const positionX = event.clientX - centerX;
      const positionY = event.clientY - centerY;
  
      const rotateX = ((+1) * 25 * positionY / (containerHeight / 2)).toFixed(2);
      const rotateY = ((-1) * 25 * positionX / (containerWidth / 2)).toFixed(2);
  
      container.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  
    function containerBack(event) {
      container.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
      cardTransition();
    }
  
    function containerEnter(event) {
      
    }
  
    function cardTransition() {
      
    }
  });