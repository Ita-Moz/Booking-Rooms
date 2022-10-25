const $1 = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//SLIDER ROOMS
let currentRooms = 1
const listImageRooms = $$(".rooms li")
const listTitleRooms = $$(".rooms__list-title li")
function showImagesRooms() {
    listTitleRooms.forEach(function (element, index) {
        element.addEventListener("click", function () {
            listTitleRooms.forEach(function (element) {
                element.classList.remove("li_before")
            })
            element.classList.add("li_before")
        })
        element.addEventListener("click", function () {
            listImageRooms.forEach(function (el, i) {
                if (i === index) {
                    el.classList.remove("hidden")
                } else {
                    el.classList.add("hidden")
                }
            })
        })
    })
}
showImagesRooms()

// SLIDER GALLERY
let currentGallery = 1
const sliderElement = $1(".slider")
const totalSlides = sliderElement.childElementCount
const sliderTitleElement = $1(".slider__title")
$1(".counter-total").innerHTML = totalSlides

function prev() {
    if (currentGallery > 1) {
        currentGallery--
        showGallery()
        showSlideTitle()
    }
}
function next() {
    if (totalSlides > currentGallery) {
        currentGallery++
        showGallery()
        showSlideTitle()
    }
}
// change color Arrow when clicking to end or beginning
function changeArrow() {
    if (currentGallery == totalSlides) {
        $1("#next").style.color = "#e1e5e4"
    } else {
        $1("#next").style.color = "#455D58"
    }
    if (currentGallery == 1) {
        $1("#prev").style.color = "#e1e5e4"
    } else {
        $1("#prev").style.color = "#455D58"
    }
}
function changeCounter() {
    $1(".counter-active").innerHTML = currentGallery
}
// move image gallery when click next and prev
function showGallery() {
    slides = sliderElement.getElementsByTagName("li")
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index]
        if (currentGallery === index + 1) {
            element.classList.remove("hidden")
        } else {
            element.classList.add("hidden")
        }
    }
    changeArrow()
}
// change title slide when click next prev
function showSlideTitle() {
    let slides = sliderTitleElement.getElementsByTagName("li")
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index]
        if (currentGallery === index + 1) {
            element.classList.remove("hidden")
        } else {
            element.classList.add("hidden")
        }
    }
    changeCounter()
}

//MOBILE SLIDER GALLERY
const sliderElementMobile = $1(".modal__slider")
const totalSlidesMobile = sliderElementMobile.childElementCount
const showModalGalleryMobileElement = $1(".show__gallery-mobile")
const closeModalGalleryMobileElement = $1("#modal-close")
let currentGalleryMobile = 1

showModalGalleryMobileElement.addEventListener("click", function () {
    $1("#modal__gallery-mobile").classList.remove("hidden")
})

closeModalGalleryMobileElement.addEventListener("click", function () {
    $1("#modal__gallery-mobile").classList.add("hidden")
})

function modalPrev() {
    if (currentGalleryMobile > 1) {
        currentGalleryMobile--
        showGalleryMobile()
        changeCounter()
    }
}

function modalNext() {
    if (totalSlidesMobile > currentGalleryMobile) {
        currentGalleryMobile++
        showGalleryMobile()
    }
}

function changeArrowMobile() {
    if (currentGalleryMobile == totalSlidesMobile) {
        $1("#modal-next").style.color = "#7a7a7a"
    } else {
        $1("#modal-next").style.color = "#e1e5e4"
    }
    if (currentGalleryMobile == 1) {
        $1("#modal-prev").style.color = "#7a7a7a"
    } else {
        $1("#modal-prev").style.color = "#e1e5e4"
    }
}

function showGalleryMobile() {
    let slides = sliderElementMobile.getElementsByTagName("li")
    console.log(slides)
    for (let index = 0; index < totalSlidesMobile; index++) {
        const element = slides[index]
        if (currentGalleryMobile === index + 1) {
            element.classList.remove("hidden")
        } else {
            element.classList.add("hidden")
        }
    }
    changeArrowMobile()
    $1(".modal__counter-active").innerHTML = currentGalleryMobile
}

// SHOW MENU SUB NAV khi Scroll
window.addEventListener("scroll", function (e) {
    if (window.scrollY > 150) {
        $1("#sub__nav").classList.add("sub__nav--show")
    } else {
        $1("#sub__nav").classList.remove("sub__nav--show")
    }
})

// SHOW SEND-FORM KHI CLICK VAO SIGNUP-FORM
$1("#signup-form").addEventListener("click", function () {
    $1("#send-form").classList.remove("hidden")
    $1("#signup-form").classList.add("hidden")
})

// HIDE SEND-FORM KHI CLICK VAO CLOSE-FORM
$1("#close-form").addEventListener("click", function () {
    $1("#send-form").classList.add("hidden")
    $1("#signup-form").classList.remove("hidden")
})

// CLICK VAO MENU 
$$(".nav-menu").forEach(element => {
    element.addEventListener("click", function () {
        $1('#menu').classList.remove('hidden')
        $1('#menu').classList.add('right-to-left')
    })
}); 
// CLOSE MENU 
$1("#close-menu").addEventListener("click", function () {
    $1('#menu').classList.add('hidden')
})