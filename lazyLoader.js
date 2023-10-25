// LAZY LOAD JS 

// const imgRef = document.querySelectorAll('.book__card img[data-src]')
const imgRef = document.querySelectorAll('img[data-src]')

const lazyImg = (entries) => {

    entries.forEach((entry) => {

        // console.log(entry, 'entry');
        if (!entry.isIntersecting) return;

        const targetImg = entry.target;
        targetImg.src = targetImg.dataset.src;

    })

}

const imageObserver = new IntersectionObserver(lazyImg, {
    root: null,
    threshold: 0,
})

imgRef.forEach((ele) => {
    imageObserver.observe(ele);
})
