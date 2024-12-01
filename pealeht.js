// Valib kõik elemendid, millel on klass "allPaths", ja lisab neile sündmuste kuulajad
document.querySelectorAll(".allPaths").forEach(e => {

    // Lisab elemendile täiendava klassi, mis põhineb tema id-l
    e.setAttribute('class', `allPaths ${e.id}`);

    // Lisab hiirele liikumise sündmuse kuulaja
    e.addEventListener("mouseover", function () {

        // Uuendab tööriista (tooltip) positsiooni hiire liikumisel
        window.onmousemove = function (j) {
            x = j.clientX; // Hiire X-koordinaat
            y = j.clientY; // Hiire Y-koordinaat
            document.getElementById('Linnaosa').style.top = y - 60 + 'px'; // Tööriista paigutamine hiire kohale
            document.getElementById('Linnaosa').style.left = x + 10 + 'px'; // Tööriista paigutamine veidi paremale
        };

        // Leiab kõik elemendid, millel on samad klassid kui praegusel elemendil
        const classes = e.className.baseVal.replace(/ /g, '.');

        // Muudab sobivate elementide täitevärvi mustaks
        document.querySelectorAll(`.${classes}`).forEach(country => {
            country.style.fill = "black";
        });

        // Muudab tööriista nähtavaks
        document.getElementById("Linnaosa").style.opacity = 1;

        // Uuendab tööriista sisu praeguse elemendi id-ga
        document.getElementById("name").innerText = e.id;
    });

    // Lisab hiirelt lahkumise sündmuse kuulaja
    e.addEventListener("mouseleave", function () {
        // Leiab kõik elemendid, millel on samad klassid kui praegusel elemendil
        const classes = e.className.baseVal.replace(/ /g, '.');

        // Taastab sobivate elementide algse värvi
        document.querySelectorAll(`.${classes}`).forEach(country => {
            country.style.fill = "#ececec";
        });

        // Muudab tööriista nähtamatuks
        document.getElementById("Linnaosa").style.opacity = 0;
    });

    // Lisab klikisündmuse kuulaja
    e.addEventListener("click", function () {
        getUser(e.id); // Kutsutakse välja funktsioon, mis kasutab elemendi id-d
    });
});

// Lisab kõigile <path> elementidele hiire liikumise ja eemaldamise sündmuste kuulajad
document.querySelectorAll('path').forEach(path => {
    // Hiire liikumisel suurendab elementi
    path.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.1)'; // Suurendamine
        this.style.transformOrigin = '50% 50%'; // Suurendamise keskpunkt
        this.style.transition = 'transform 0.3s ease'; // Sujuv üleminek
        this.style.fill = '#f7b3b3'; // Muudab täitevärvi
    });

    // Hiire eemaldamisel taastab algse suuruse ja värvi
    path.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)'; // Algne suurus
        this.style.fill = '#d3d3f7'; // Algne täitevärv
    });
});

// Kood kirjutatud ChatGPT abiga
