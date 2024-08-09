// script.js
document.addEventListener('DOMContentLoaded', function () {
    const ratings = document.querySelectorAll('.rating');

    ratings.forEach(rating => {
        const stars = rating.querySelectorAll('.star');

        stars.forEach(star => {
            star.addEventListener('click', function () {
                const value = this.dataset.value;
                const productId = rating.dataset.productId;

                // Handle the rating logic for the specific product
                console.log(`Product ID: ${productId}, Rating: ${value}`);

                // Update the UI based on rating (optional)
                stars.forEach(s => {
                    s.style.color = s.dataset.value <= value ? '#f5c518' : '#ccc';
                });
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.sidebar ul li');

    listItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove the 'selected' class from all items
            listItems.forEach(li => li.classList.remove('selected'));

            // Add the 'selected' class to the clicked item
            this.classList.add('selected');
        });
    });
});
