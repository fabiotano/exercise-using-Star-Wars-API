const fetch = require("node-fetch");

async function fetchApi(url, endpoint) {
  // Marca la función como asíncrona para poder usar await
  try {
    let page = 1;
    let allData = [];
    const RESULT_PER_PAGE = 10;

    const response = await fetch(`${url}${endpoint}?page=${page}`); //llamo la primera pagina y otengo informacion
    const data = await response.json();
    allData.push(...data.results);

    const total = data.count; //82
    const totalPage = Math.ceil(total / RESULT_PER_PAGE);

    for (page += 1; page < totalPage; page++) {
      const response = await fetch(`${url}${endpoint}?page=${page}`);
      const data = await response.json();
      allData.push(...data.results);
      //console.log(allData);
    }
    return allData;
  } catch (error) {
    throw new Error("Error al obtener los datos de la API");
  }
}

module.exports = fetchApi;
