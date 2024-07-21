document.addEventListener('DOMContentLoaded', () => {
    const projects = [
      {
        title: "Project 1: To-do List",
        description: " A simple tool for managing tasks where users can add, edit, remove, and mark tasks as completed.",
        image: "static/images/todotodo1.jpeg",
        link: "#"
      },
      {
        title: "Project 2: Blood Bank Management System ",
        description: "A Blood Bank Management System (BBMS) is a software application designed to efficiently manage the operations of a blood bank.",
        image: "static/images/blood2.jpeg",
        link: "#"
      }
    ];
  
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('col-md-6', 'project');
      projectDiv.innerHTML = `
        <div class="card mb-4 shadow-sm">
          <img src="${project.image}" class="card-img-top" alt="${project.title}">
          <div class="card-body">
            <h3 class="card-title">${project.title}</h3>
            <p class="card-text">${project.description}</p>
            
          </div>
        </div>
      `;
      projectList.appendChild(projectDiv);
    });
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      console.log('Form submitted:', { name, email, message });
      // Implement form submission logic here
    });
  
    
  });