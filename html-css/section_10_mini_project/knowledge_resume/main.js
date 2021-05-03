// Get list elements
const items = document.querySelectorAll('#timeline li');

// Check if an element's box is in viewport
// window.inner<Height|Width> and document.documentElement.client<Height|Width> gets the height of the viewport
// Some browsers don't support window.inner<Height|Width>, so you gotta check the documentElement
const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Add CSS class 'show' if element in view
const run = () =>
    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
