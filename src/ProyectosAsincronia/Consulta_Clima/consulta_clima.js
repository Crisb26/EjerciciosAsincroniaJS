import fetch from 'node-fetch';

// URLs de las APIs (no requieren API key)
const urls = [
  'https://api.open-meteo.com/v1/forecast?latitude=6.25184&longitude=-75.56359&current_weather=true',
  'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=6.25184&lon=75.56359'
];

// Funciones para adaptar los resultados de cada API
async function obtenerClimaDesdeOpenMeteo() {
  const res = await fetch(urls[0]);
  const data = await res.json();
  return {
    fuente: 'Open-Meteo',
    temperatura: data.current_weather.temperature,
    viento: data.current_weather.windspeed,
    unidad: '°C',
  };
}

async function obtenerClimaDesdeMetNO() {
  const res = await fetch(urls[1], {
    headers: {
      'User-Agent': 'clima-app/1.0'
    }
  });
  const data = await res.json();
  const weather = data.properties.timeseries[0].data.instant.details;
  return {
    fuente: 'Met.no',
    temperatura: weather.air_temperature,
    viento: weather.wind_speed,
    unidad: '°C',
  };
}

// Ejecutar ambas consultas y mostrar la más rápida
async function mostrarClima() {
  try {
    const resultado = await Promise.race([
      obtenerClimaDesdeOpenMeteo(),
      obtenerClimaDesdeMetNO()
    ]);

    console.log(`☁️ Clima actual en Medellín (fuente: ${resultado.fuente})`);
    console.log(`🌡️ Temperatura: ${resultado.temperatura}${resultado.unidad}`);
    console.log(`💨 Viento: ${resultado.viento} m/s`);
  } catch (error) {
    console.error('Error al obtener el clima:', error);
  }
}

mostrarClima();
