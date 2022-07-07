programarMenuInicial();


const mainContainer = document.getElementById("appContainer");

function programarMenuInicial() {


      cargarPosts();
   
}

function cargarPosts() {
   fetch('http://127.0.0.1:5500/js/data/profesores.json')
      .then((response) => response.json())
      .then((json) => mostrarDatos(json))
      .catch(() => alert("intente de nuevo"))
}

function mostrarDatos(data) {
  const div = document.getElementById("appContainer");
   div.innerText = "";
   data.forEach(blogPost => {
 
      const { img, nombre, id } = blogPost

      const divPost = document.createElement("div");
      divPost.innerHTML = ` <div>
                            <img src='${img}'/>
                            </div>
                          <p>
                           ${nombre}
                          </p>
                          
      `
      const btn = document.createElement("button")
      btn.innerText = "Infrmacion personal"
      btn.addEventListener("click", () =>

         cargarPost(id)

      );
      divPost.appendChild(btn);
      div.appendChild(divPost)

   })
}

function programarBotonAdmin() {

   const btn = document.getElementById("admin")
   btn.addEventListener("click", () => {

      agregarPost();
   })

}

function agregarPost() {
   let title = prompt("Ingrese el titulo")
   let contenido = prompt("Ingrese el contenido")

   fetch('http://127.0.0.1:5500/js/data/profesores.json', {
      method: 'POST',
      body: JSON.stringify({
         title: title,
         body: contenido,
         userId: 1,
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
   })
      .then((response) => response.json())
      .then(() => alert("POST INSERTADO CORRECTAMENTE"));


}

function cargarPost(id) {
        fetch(`http://127.0.0.1:5500/js/data/profesores/${id}.json`)
        .then((response) => response.json())
        .then((json) => mostrarDato(json))
   
 
    /*
       fetch(`http://127.0.0.1:5500/js/data/profesores/${id}.json`)
       .then((response) => response.json())
       .then((json) => mostrarPost(json))
    */
 
 }
 
 
 function mostrarDato(data) {
    const div = document.getElementById("appContainer");
     div.innerText = "";
     data.forEach(blogPost => {
   
        const { img, nombre, edad, disciplina } = blogPost
  
        const divPost = document.createElement("div");
        divPost.innerHTML = ` <div>
                              <img src='${img}'/>
                              </div>
                            <p>
                            "Nombre:" ${nombre}
                            </p>
                            <p>
                            "Edad:"${edad}
                           </p>
                           <p>
                           "Disciplina:"${disciplina}
                          </p>
                          
        `
        const btn = document.createElement("button")
        btn.innerText = "Informacion Personal"
        btn.addEventListener("click", () =>
  
        programarMenuInicial()
  
        );
        divPost.appendChild(btn);
        div.appendChild(divPost)
  
     })
  }
 
  const btn = document.getElementById('boton');

btn.addEventListener('click', () => {
    window.location="index.html"
})




