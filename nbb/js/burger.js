document.querySelector('.burger__btn').addEventListener('click', function() {
    let line = document.querySelector('.burger__line')
    let arrow = document.querySelector('.burger__arrow')
    let nav = document.querySelector('.burger__nav')
    
    if (line.classList.contains("burger__hidden")) {
        line.classList.remove("burger__hidden")
        arrow.classList.add("burger__hidden")
        nav.style.left = '-300px'
    } else {
        line.classList.add("burger__hidden")
        arrow.classList.remove("burger__hidden")
        nav.style.left = '0'
    }
  })