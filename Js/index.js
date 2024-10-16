const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const content = document.getElementById('content');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden'); 
    content.classList.toggle('expanded'); 
});
