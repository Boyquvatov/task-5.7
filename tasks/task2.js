const  create = (e) => {
    e.preventDefault();
    let result = document.getElementById("result")
    let width = document.getElementById("width").value
    let hight = document.getElementById("hight").value
    let bg_color = document.getElementById("b-radius").value
    let b_radius = document.getElementById("color").value
    result.style.width = `${width}px`
    result.style.height = `${hight}`
    result.style.backgroundColor = bg_color
    result.style.borderRadius = `${b_radius}px`
}