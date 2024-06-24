document.querySelector('.menu-icon').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');

    var bigOne = document.querySelector('.big-one');
    bigOne.classList.toggle('show-big-one');

    var headingWithCTA = document.querySelector('.heading-with-cta');
    headingWithCTA.classList.toggle('collapsed-heading');

    var taskTitle = document.querySelector('.task-title');
    taskTitle.classList.toggle('collapsed-heading');

    var ctaButton = document.querySelector('.cta-button');
    ctaButton.classList.toggle('collapsed-cta');
});
