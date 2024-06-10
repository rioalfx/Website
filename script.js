document.addEventListener('DOMContentLoaded', () => {
    const comics = document.querySelectorAll('.comic');
    const modal = document.getElementById('comicModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = document.querySelector('.close');

    comics.forEach(comic => {
        comic.addEventListener('click', () => {
            const id = comic.getAttribute('data-id');
            // Fetch comic details based on the id
            const comicDetails = getComicDetails(id);
            modalImage.src = comicDetails.image;
            modalTitle.textContent = comicDetails.title;
            modalDescription.textContent = comicDetails.description;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    function getComicDetails(id) {
        // This is just an example. Replace it with actual data fetching logic.
        const details = {
            1: {
                image: 'comic1.jpg',
                title: 'Comic Title 1',
                description: 'This is the description for Comic 1.'
            },
            2: {
                image: 'comic2.jpg',
                title: 'Comic Title 2',
                description: 'This is the description for Comic 2.'
            }
        };
        return details[id];
    }
});
