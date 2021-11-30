const root = document.getElementById("root");

const token = "153e824c387406f12bff4270919a1aae26164bbaa2768c07eda5700517099a29";

const url = `https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF60653,SF43718,SP68257,SF43707,SF61745,SF60648,SF60633,SP30577/datos/oportuno?token=${token}`;

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const getSeries = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const { series } = data.bmx;

  const testDate = series[0].datos[0].fecha;
  const isoDate = new Date(testDate);
  console.log(testDate);
  console.log(isoDate);

  for (const serie of series) {
      
    const date = serie.datos[0].fecha;
    const dato = serie.datos[0].dato
    // dato = parseInt(dato)

    root.innerHTML += `
      <div class="card">     
        <p class="text-xxl text-center">${dato}</p>
        <p class="text-lg text-center grayed-out">${serie.titulo}</p>
        <p class="text-md text-center">Actualizado el: ${date}</p>
        
      </div>`;
  }
};

getSeries();
