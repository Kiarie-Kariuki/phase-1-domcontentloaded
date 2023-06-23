function updateTextContent() {
    const paragraph = document.querySelector('p');
    paragraph.textContent = "This is really cool!";
  }
  
  document.addEventListener('DOMContentLoaded', updateTextContent);
  