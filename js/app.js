let txt = document.getElementById("txt1")
let btn = document.getElementById("btn1")
let txt2 = document.getElementById("txt2")

const txtChange = () => {
    document.body.style.backgroundColor = "grey"
    document.body.style.height = "150vh"
    txt.style.color = "white"
    txt.style.fontFamily = "Impact,Charcoal,sans-serif"
    txt.style.letterSpacing = "3px"
    txt.style.fontWeight = "lighter"
    txt.style.userSelect = "none"
    txt.style.textAlign = "center"
    txt.style.fontSize = "35px"
    txt2.style.userSelect = "none"
}

const btnChange = () => {
    btn.style.backgroundColor = "black"
    btn.style.color = "white"
    btn.style.border = "none"
    btn.style.padding = "15px"
    btn.style.marginRight = "80px"
    btn.style.position = "fixed"
    btn.style.right = "2%"
    btn.style.bottom = "10%"
    btn.style.cursor = "pointer"
    btn.style.display = "none"
}

txtChange()
btnChange()


window.onscroll = function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
}


btn.addEventListener("click", () => {
    let scrollStep = -window.scrollY / 60;    
    let scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 10);
    let array = ["red", "green", "blue", "purple", "pink", "yellow", "black"]
    let randomIndex = Math.floor(Math.random() * array.length)
    let randomColor = array[randomIndex];
    if (randomColor == "yellow") {
        txt.style.color = "black"
        txt2.style.color = "black"
    } else {
        txt.style.color = "white"
        txt2.style.color = "white"
    }
    if (randomColor == "black") {
        txt.style.color = "white"
        txt2.style.color = "white"
        btn.style.backgroundColor = "white"
        btn.style.color = "black"
    } else {
        btn.style.backgroundColor = "black"
        btn.style.color = "white"
    }
    document.body.style.backgroundColor = randomColor
})
