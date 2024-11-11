

document.querySelectorAll(".allPaths").forEach(e => {
e.setAttribute('class', `allPaths ${e.id}`);
e.addEventListener("mouseover", function () {
    window.onmousemove=function (j) {
        x = j.clientX
        y = j.clientY
        document.getElementById('Linnaosa').style.top = y-60  + 'px'
        document.getElementById('Linnaosa').style.left = x +10 + 'px'
    }
    const classes=e.className.baseVal.replace(/ /g, '.')         
    document.querySelectorAll(`.${classes}`).forEach(country =>{
        country.style.fill = "black"
    })
    document.getElementById("Linnaosa").style.opacity = 1
    
    document.getElementById("name").innerText = e.id
})
e.addEventListener("mouseleave", function () {
    const classes=e.className.baseVal.replace(/ /g, '.')
    document.querySelectorAll(`.${classes}`).forEach(country =>{
        country.style.fill = "#ececec"
    })
    document.getElementById("Linnaosa").style.opacity = 0
})

e.addEventListener("click",function(){
    getUser(e.id)
})

})
document.querySelectorAll('path').forEach(path => {
    path.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.1)';
        this.style.transformOrigin = '50% 50%';
        this.style.transition = 'transform 0.3s ease';
        this.style.fill = '#f7b3b3';
    });

    path.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
        this.style.fill = '#d3d3f7';
    });
});
