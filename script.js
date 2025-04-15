const tabs = document.querySelectorAll('[data-tab-bind]');
const tabContents = document.querySelectorAll('.tab-contents');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabBind);
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        target.classList.add('active');
    })
})

document.querySelector('.accordion-header').addEventListener('click', function () {
  const content = document.querySelector('.accordion-content');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
});
