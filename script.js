// Array of quotes to display
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Stay close to anything that makes you glad you are alive."
  ];
  
  // Function to generate a new random quote
  function generateQuote() {
    // Get a random quote from the array
    const randomIndex = getIndex();
    document.getElementById("quote").textContent = quotes[randomIndex];
  
    // Move the image to a random location on the edge of the window
    moveImage();
  }
  
  // Predefined edges where the image will be placed
  const edges = ['top', 'left', 'bottom', 'right'];
  let currentEdgeIndex = 0;  // Start from the first edge (top)
  
  // Function to cycle through edges and move the image accordingly
  function moveImage() {
    const image = document.getElementById("wise-man");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    // Get the dimensions of the image
    const imageWidth = image.width;
    const imageHeight = image.height;
  
    // Define a 55px buffer to keep the image 55px away from the screen edges
    const buffer = 55;
  
    // Adjust the position based on the current edge
    if (edges[currentEdgeIndex] === 'top') {
      // Calculate position for top edge
      const topPosition = buffer;
      image.style.top = `${topPosition}px`;
      image.style.left = `${windowWidth / 2 - imageWidth / 2}px`; // Horizontally centered at top
    } else if (edges[currentEdgeIndex] === 'left') {
      // Calculate position for left edge
      const leftPosition = buffer;
      image.style.top = `${windowHeight / 2 - imageHeight / 2}px`; // Vertically centered on the left
      image.style.left = `${leftPosition}px`; // Place 55px away from the left
    } else if (edges[currentEdgeIndex] === 'bottom') {
      // Calculate position for bottom edge
      const bottomPosition = windowHeight - imageHeight - buffer;
      image.style.top = `${bottomPosition}px`; // Place 55px away from the bottom
      image.style.left = `${windowWidth / 2 - imageWidth / 2}px`; // Horizontally centered at bottom
    } else if (edges[currentEdgeIndex] === 'right') {
      // Calculate position for right edge
      const rightPosition = windowWidth - imageWidth - buffer;
      image.style.top = `${windowHeight / 2 - imageHeight / 2}px`; // Vertically centered on the right
      image.style.left = `${rightPosition}px`; // Place 55px away from the right
    }
  
    // Move to the next edge for the next cycle
    currentEdgeIndex++;
    if (currentEdgeIndex >= edges.length) {
      currentEdgeIndex = 0;  // Reset to the first edge when we have cycled through all edges
    }
  }
  

  
  // Helper function to get the index for the random quote
  function getIndex() {
    let index = currentEdgeIndex;  // Use the currentEdgeIndex as the index
    return index;
  }
  