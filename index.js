window.onscroll = () => {
    const position = window.scrollY
    const scrollPosition = document.getElementById("scrollPosition").offsetTop
    const section = document.querySelector("#root > section")

    if (position > scrollPosition - 500) {
        section.style.top = "90%"
        section.style.transform = "scale(2)"
    }
}