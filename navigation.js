document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prevTopic');
    const nextButton = document.getElementById('nextTopic');
    const topics = document.querySelectorAll('.topic');

    let currentTopicIndex = 0;

    function updateNavigation() {
        prevButton.style.display = currentTopicIndex > 0 ? 'block' : 'none';
        nextButton.style.display = currentTopicIndex < topics.length - 1 ? 'block' : 'none';
    }

    function scrollToTopic(index) {
        topics[index].scrollIntoView({ behavior: 'smooth' });
    }

    prevButton.addEventListener('click', function() {
        if (currentTopicIndex > 0) {
            currentTopicIndex--;
            scrollToTopic(currentTopicIndex);
            updateNavigation();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentTopicIndex < topics.length - 1) {
            currentTopicIndex++;
            scrollToTopic(currentTopicIndex);
            updateNavigation();
        }
    });

    updateNavigation();
});