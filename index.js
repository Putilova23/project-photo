const reviewArrowPrevSlide = document.querySelector("#review_prev_slide")
const reviewArrowNextSlide = document.querySelector("#review_next_slide")

const swiperReview = new Swiper(".reviews_swiper", {
    wrapperClass: "reviews_wrapper",
    slidesPerView: 1,
    slideClass: "review_item",
    spaceBetween: 20
})

reviewArrowPrevSlide.addEventListener('click', () => {
    swiperReview.slidePrev()
})

reviewArrowNextSlide.addEventListener('click', () => {
    swiperReview.slideNext()
})

const allButtons = document.querySelectorAll("*[transition]")

allButtons.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault()

        const attrValue = item.getAttribute("transition")
        const transitionId = document.querySelector(`#${attrValue}`);

        if(!transitionId) return
        transitionId.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

    })
})

