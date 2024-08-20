const prev_elem = document.querySelector('.prev')
const prev_icon_elem = document.querySelector('.prev_icon')
const next_icon_elem = document.querySelector('.next_icon')
const next_elem = document.querySelector('.next')

prev_elem.addEventListener('mouseover', () =>{
    prev_icon_elem.src = 'Yoga_assets/prev_replace.svg'
})
prev_elem.addEventListener('mouseout', () =>{
    prev_icon_elem.src = 'Yoga_assets/prev.svg'
})

next_elem.addEventListener('mouseover', () =>{
    next_icon_elem.src = 'Yoga_assets/next_replace.svg'
})
next_elem.addEventListener('mouseout', () =>{
    next_icon_elem.src = 'Yoga_assets/next.svg'
})

const poster_elem = document.querySelector('.main_poster')
const image_text = document.querySelector('.large_text')
const poster_array = ['Yoga_assets/asset 54.webp', 'Yoga_assets/asset 55.webp', 'Yoga_assets/asset 53.webp']
const total_posters = poster_array.length

let currentIndex = 0;

function showSlide(index){
    poster_array.forEach((element, i ) =>{
        let url = poster_array[i]
        poster_elem.style.backgroundImage = i === index ? `url('${url}')` : 'Yoga_assets/asset 54.webp'
        if(index === 0){
             image_text.textContent = 'Yoga In Daily Routine To Stay Fit'
        }   
        if(index === 1){
             image_text.textContent = '3 Weeks Unlimited Yoga For Only Free'
        }   
        if(index === 2){
             image_text.textContent = 'Unlimited Yoga For All Levels'
        }   
    
    })
}

function prevSlide(){
    currentIndex = (currentIndex === 0) ? total_posters - 1 : currentIndex - 1;
    showSlide(currentIndex)
}
function nextSlide(){
    currentIndex = (currentIndex === total_posters - 1 ) ? 0 : currentIndex + 1;
    showSlide(currentIndex)
}

prev_icon_elem.addEventListener('click', () =>{
    prevSlide()
    
})
next_icon_elem.addEventListener('click', () =>{
    nextSlide()

})