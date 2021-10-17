/*
 * IntersectionObserver API
 * Callback params
 * Options: root, rootMargin, threshold
 *
 * https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
 */

const boxRef = document.querySelector('.js-box');

const onEntry = (entries, observer) => {
    entries.forEach(entrie => {
        // console.log(entrie);
        if (entrie.isIntersecting) {
            console.log(`Box ${entrie.target.textContent} cross ROOT!!!`);

            observer.disconnect();
        }
    });
}

const options = {
    rootMargin: '100px',
    threshold: [0, 0.25, 0.5, 0.75, 1]
}

const io = new IntersectionObserver(onEntry, options);

io.observe(boxRef);
