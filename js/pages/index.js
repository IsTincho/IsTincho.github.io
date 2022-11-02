const miCarta = document.getElementById('card')

const mostrarDatos= async () => {
    try {
        let miciudad = document.getElementById("Ciudades").value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${miciudad}&appid=${apiKey}&units=metric&lang=es`;
        const res = await fetch(url);
        if (res.ok) {
            const datos = await res.json();
            console.log(datos);
            miCarta.innerHTML = `
            <h2><b>${datos.name} - ${datos.sys.country}</b></h2>
            <h3><img src="http://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png"</h3>
            <p><b>Temperatura:</b> ${datos.main.temp}ºC</p>
            <p><b>Sensación Térmica:</b> ${datos.main.feels_like}ºC</p>
            <p><b>Temperatura Max:</b> ${datos.main.temp_max}ºC</p>
            <p><b>Temperatura Min:</b> ${datos.main.temp_min}ºC</p>
            <p><b>Humedad:</b> ${datos.main.humidity}%</p>
            <p><b>Velocidad del Viento:</b> ${datos.wind.speed}km/h</p>
            <p><b>Presión:</b> ${datos.main.pressure}P</p>
            `
            document.getElementById('card').style.display = "block";
        } else {
            console.log(res.status); // 404            
        }
    } catch (err) {
        console.log(err);
    }


};

function cargarCiudades(){
    var x = document.getElementById("Ciudades");
    var a = JSON.parse(localStorage.getItem('CITIES'));
    var b = a.length;
    var i;
    for (i=0; i<b; i++) {
        x.options.add(new Option (a[i], a[i]));
    }
}
