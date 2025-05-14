const fetch = (...args) => import('node-fetch').then(mod => mod.default(...args));

// API 1: Open-Meteo (sin clave)
const openMeteo = new Promise(async (resolve, reject) => {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=6.2442&longitude=-75.5812&current_weather=true`;
    const res = await fetch(url);
    const data = await res.json();
    resolve(`🌤️ Open-Meteo: ${data.current_weather.temperature}°C`);
  } catch (error) {
    reject("❌ Open-Meteo falló");
  }
});

// API 2: WeatherAPI (requiere clave gratuita)
const weatherAPI = new Promise(async (resolve, reject) => {
  try {
    const API_KEY = 'TU_API_KEY_AQUI'; // Reemplaza con tu clave
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Medellin&aqi=no`;
    const res = await fetch(url);
    const data = await res.json();
    resolve(`☁️ WeatherAPI: ${data.current.temp_c}°C`);
  } catch (error) {
    reject("❌ WeatherAPI falló");
  }
});

// Usa Promise.race para obtener la respuesta más rápida
Promise.race([openMeteo, weatherAPI])
  .then(resultado => {
    console.log('✅ Clima más rápido recibido:');
    console.log(resultado);
  })
  .catch(error => {
    console.error('❌ Ninguna API respondió a tiempo:', error);
  });
