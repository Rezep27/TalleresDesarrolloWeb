function addRow(){
    let tableBody = document.getElementById("tableBody");

    let row = document.createElement("tr");
    rowCounter += 1;

    const th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.textContent = rowCounter;

    let correo = document.getElementById("inputEmail4").value.trim();

    let pass = document.getElementById("inputPassword4").value.trim();

    let dir = document.getElementById("inputAddress").value.trim();

    let dir2 = document.getElementById("inputAddress2").value.trim();

    let estado = document.getElementById("inputState").value.trim();

    let ciudad = document.getElementById("inputCity").value.trim();

    let zip = document.getElementById("inputZip").value.trim();

    let colCorreo = document.createElement("td");
    colCorreo.innerHTML = correo;
    let colPass = document.createElement("td");
    colPass.innerHTML = pass;
    let colDir = document.createElement("td");
    colDir.innerHTML = dir;
    let colDir2 = document.createElement("td");
    colDir2.innerHTML = dir2;
    let colCiudad = document.createElement("td");
    colCiudad.innerHTML = ciudad;
    let colEstado = document.createElement("td");
    colEstado.innerHTML = estado;
    let colZip = document.createElement("td");
    colZip.innerHTML = zip;

    row.appendChild(th);
    row.appendChild(colCorreo);
    row.appendChild(colPass);
    row.appendChild(colDir);
    row.appendChild(colDir2);
    row.appendChild(colCiudad);
    row.appendChild(colEstado);
    row.appendChild(colZip);

    tableBody.append(row);

}

var rowCounter = 0;






