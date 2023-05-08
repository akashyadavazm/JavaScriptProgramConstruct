let delhiWeather = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve ("35 deg");
    }, 1000);
});

let bangloreWeather = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve("18 deg");
    }, 1000);
});

async function weather(delhiWeather, bangloreWeather) {

    let delhiW = await delhiWeather;
    let bangloreW = await bangloreWeather;
    console.log(delhiW, bangloreW);
    return [delhiW, bangloreW];
}

const detail = weather(delhiWeather, bangloreWeather);
console.log(detail);