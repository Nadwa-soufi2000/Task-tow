
let parentCards = document.getElementById('parentcards')

 axios.get("https://fakestoreapi.com/products")
    .then((response) => {
        console.log(response.data)
         for(let i=0 ; i< response.data.length ; i++)
          {
              parentCards.innerHTML +=
                 `<div class="cards">
                      <img src="${response.data[i].image}" alt=''/>
                      <h2>${response.data[i].title.slice(0 , 12)}</h2>
                      <div class='ineer'>
                          <p>${response.data[i].price}$</p>
                          <p>o</p>
                     </div>
                 </div>` 
          }
     })
     .catch(err => {
        console.log(err)
    })





