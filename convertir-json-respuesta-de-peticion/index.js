// https://thronesapi.com/api/v2/Characters
const select = document.getElementById('character-list');

fetch('https://thronesapi.com/api/v2/Characters')
  .then(response => response.json())
  .then(options => {
    options.forEach(option => {
      const nuevaOption = document.createElement('option');
      nuevaOption.value = option.id;
      nuevaOption.text = option.fullName;
      select.add(nuevaOption);
    });
  })
  .catch(error => console.error('Error:', error));


  // Add event listener to the select element
  select.addEventListener('change', function() {
    var valorSeleccionado = this.value;
    fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(data => {
      var imagenUrl = data[valorSeleccionado].imageUrl; // suponiendo que la API devuelve un objeto con una propiedad "imagen"
      document.getElementsByClassName('character-image')[0].src = imagenUrl;
    });
  });

 
