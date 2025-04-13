const formulario = document.getElementById('miFormulario')
const contenedor = document.getElementById('contenedor')

formulario.addEventListener('submit', function(e) {
  e.preventDefault()

  const datos = new FormData(formulario)
  const nombre = datos.get('nombre')
  const apellido = datos.get('apellido')

  const persona = { nombre, apellido }
  
  // Guardar en localStorage (como string)
  localStorage.setItem('persona', JSON.stringify(persona))

  const nuevoDiv = document.createElement('div')
  nuevoDiv.textContent = `Nombre: ${nombre} - Apellido: ${apellido}`

  contenedor.appendChild(nuevoDiv)
})

