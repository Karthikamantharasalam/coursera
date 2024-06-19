// Add JavaScript code here for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Example of adding an event listener
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            alert(`You clicked on ${this.querySelector('h3').textContent}`);
        });
    });
});
