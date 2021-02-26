const progress = document.querySelectorAll('.progress-done');
for (let i = 0; i < progress.length; i++) {
    progress[i].style.width = progress[i].getAttribute('data-done') + '%';
    progress[i].style.opacity = 1;
}

