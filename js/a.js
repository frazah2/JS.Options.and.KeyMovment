function chCarImg() {
    let value = document.getElementById('select_car_name').value

    document.getElementById('tanks').src = `img/${value}`
}
var top_side = 20
var left_side = 20
var demo = document.getElementById('tanks')



onkeydown = (e) => {
        
    if (e.key == "ArrowDown") {
        demo.style.top = top_side+"px"
        top_side += 20
    }


    if (e.key == "ArrowUp") {
        demo.style.top = top_side+"px"
        top_side -= 20
    }
    
    if (e.key == "ArrowLeft") {
        demo.style.left = left_side+"px"
        left_side -= 20
    }

    if (e.key == "ArrowRight") {
        demo.style.left = left_side+"px"
        left_side += 20
    }
}