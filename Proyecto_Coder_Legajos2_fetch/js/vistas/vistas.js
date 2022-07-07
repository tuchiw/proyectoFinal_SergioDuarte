function inicializarAplicacion() {
    crearTitulo();
    crearMenu();
}

function crearTitulo() {
    const tituloH1 = document.createElement("h2");
    tituloH1.innerHTML = "LEGAJO DE ALUMNOS";
    document.body.appendChild(tituloH1);
}

function crearMenu() {
    let opciones = [
        "Listar Alumnos",
        "Agregar Alumno",
        "Editar Alumno",
        "Eliminar Alumno",
        "Disciplina",
        "Profesores",
    ];
    opciones.forEach((opcion) => {
        const boton = document.createElement("button");
        boton.innerHTML = opcion;

        if (opcion === "Listar Alumnos") {
            boton.addEventListener("click", () => {
                listarUsuarios(usuarios);
            });
        } else if (opcion === "Agregar Alumno") {
            boton.addEventListener("click", () => {
                agregarUsuario();
                listarUsuarios(usuarios);
            });
        } else if (opcion === "Eliminar Alumno") {
            boton.addEventListener("click", () => {
                eliminarUsuario();
                listarUsuarios(usuarios);
            });
        } else if (opcion === "Editar Alumno") {
            boton.addEventListener("click", () => {
                modificarUsuario();
                listarUsuarios(usuarios);
            });
        } else if (opcion === "Disciplina") {
            boton.addEventListener("click", () => {
                let filtrados = buscarDisciplina();
                listarUsuarios(filtrados);
            });
        } else if (opcion === "Profesores") {
            boton.addEventListener("click", () => {
                window.location = "profesores.html";
            });
        }
        document.body.appendChild(boton);
    });
}

function listarUsuarios(listaUsuarios) {
    let miLista = document.querySelector("#listaUsuarios");
    if (!miLista) {
        miLista = document.createElement("table");
        miLista.setAttribute("id", "listaUsuarios");
    }
    miLista.innerHTML = "";

    const encabezado = document.createElement("tr");

    const tdId = document.createElement("th");
    tdId.innerHTML = "Orden";
    encabezado.appendChild(tdId);

    const tdNomnre = document.createElement("th");
    tdNomnre.innerHTML = "Apellido";
    encabezado.appendChild(tdNomnre);

    const tdDni = document.createElement("th");
    tdDni.innerHTML = "DNI:";
    encabezado.appendChild(tdDni);

    const tdEdad = document.createElement("th");
    tdEdad.innerHTML = "Edad";
    encabezado.appendChild(tdEdad);

    const tdTel = document.createElement("th");
    tdTel.innerHTML = "Telefono";
    encabezado.appendChild(tdTel);

    const tdDisciplina = document.createElement("th");
    tdDisciplina.innerHTML = "Disciplina";
    encabezado.appendChild(tdDisciplina);

    miLista.appendChild(encabezado);

    listaUsuarios.forEach((usuario) => {
        const nodotr = document.createElement("tr");
        let nodotd = document.createElement("td");
        nodotd.innerHTML = `${usuario.id}`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${usuario.nombre}`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${usuario.dni}`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${usuario.edad}`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${usuario.tel}`;
        nodotr.appendChild(nodotd);

        nodotd = document.createElement("td");
        nodotd.innerHTML = `${usuario.disciplina}`;
        nodotr.appendChild(nodotd);

        miLista.appendChild(nodotr);
    });

    document.body.appendChild(miLista);
}

function buscarDisciplina() {
    let disciplina = prompt("Ingresa la disciplina que desea Filtrar");

    let encontrados = usuarios.filter(
        (usuario) => usuario.disciplina == disciplina
    );

    console.table(encontrados);

    return encontrados;
}

function agregarUsuario() {
    let id = 1;
    if (usuarios.length > 0) {
        id = usuarios[usuarios.length - 1].id + 1;
    }

    let nombre = prompt("ingrese un nombre");
    let dni = prompt("ingrese un dni");
    let edad = prompt("ingrese un edad");
    let tel = prompt("ingrese un telefono");
    let disciplina = prompt("ingrese un disciplina");
    let usuario = new Usuario(id, nombre, dni, edad, tel, disciplina);

    usuarios.push(usuario);
    console.log("ALMACENADO");
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    Swal.fire({
        title: "Nuevo Alumno Agregado",
        icon: "success",
        confirmButtonText: "OK",
    });
}

function eliminarUsuario() {
    let id = Number(prompt("Ingrese el id del usuario que quiere eliminar"));

    let encontrado = usuarios.find((usuario) => usuario.id === id);

    if (!encontrado) {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        Swal.fire({
            title: "Alumno no encontrado",
            icon: "success",
            confirmButtonText: "OK",
        });
    } else {
        let index = usuarios.indexOf(encontrado);

        usuarios.splice(index, 1);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        Swal.fire({
            title: "Datos de Alumno Eliminados",
            icon: "success",
            confirmButtonText: "OK",
        });
    }
}

function modificarUsuario() {
    let id = Number(prompt("Ingrese el id del usuario que quiere modificar"));

    let existe = usuarios.some((usuario) => usuario.id === id);

    if (existe) {
        let encontrado = usuarios.find((usuario) => usuario.id === id);
        let nuevoNombre = prompt("ingrese un nombre");
        let nuevoDni = prompt("ingrese un dni");
        let nuevoEdad = prompt("ingrese un edad");
        let nuevoTel = prompt("ingrese un telefono");
        let nuevoDisciplina = prompt("ingrese un disciplina");

        encontrado.nombre = nuevoNombre;
        encontrado.dni = nuevoDni;
        encontrado.edad = nuevoEdad;
        encontrado.tel = nuevoTel;
        encontrado.disciplina = nuevoDisciplina;

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        Swal.fire({
            title: "Datos de Alumno Modificados",
            icon: "success",
            confirmButtonText: "OK",
        });
    } else {
        Swal.fire({
            title: "Alumno no encontrado",
            icon: "success",
            confirmButtonText: "OK",
        });
    }
}