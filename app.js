const form=document.querySelector('#form')
const city=document.querySelector('#city')
const card=document.querySelector('#card')


form.addEventListener('submit',(event)=>{
event.preventDefault();

    axios(
        `http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`
      )
        .then((res) => {
           
console.log(res.data);
card.innerHTML += `
          <div class='border    ring-opacity-50 w-50 mx-auto mt-5 rounded-lg p-4 mb-5  text-center flex-wrap '>
                <h1 class='text-white text-2xl'>${res.data.location.name}</h1>
                <p class='text-white   text-gray-500'>${res.data.location.localtime},${res.data.location.country} </p>
                <div class='mt-5  justify-content-between align-items-center mx-5 pb-4'>
                    <h1 class='text-white text-4xl md:text-7xl lg:text-8xl'>${res.data.current.temp_c}°C</h1>
                    <img width="160px" src=${res.data.current.condition.icon} alt='weatherImg' />
                </div>
                <h4 class='text-white'>${res.data.current.condition.text}</h4>
            </div>
          `;
                })
      
      .catch((err) => {
          console.log("error===>", err);
        });

      });
    

    


    





// `http://api.weatherapi.com/v1/current.json?key=4048f2b056d8494784d53850241506&q=${city.value}&aqi=no


