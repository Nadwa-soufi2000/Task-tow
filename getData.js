
let parentCards = document.getElementById('parentcards')

//getDataButton.onclick = () =>
//{
    //axios.get("https://fakestoreapi.com/products")
    //.then(response => {
       // console.log(response.data)
    //})
    //.catch(err => {
        //console.log(err)
    //})
//}

  let ArrayOfData = []

 window.onload = () =>{  axios.get("https://fakestoreapi.com/products")
    .then((response) => {
        console.log(response.data)
        ArrayOfData.push(response.data)
        console.log(ArrayOfData)
         for(let i=0 ; i< response.data.length ; i++)
          {
              parentCards.innerHTML +=
                 `<div class="cards">
                      <img src=${response.data[i].image}/>
                      <h2>${response.data[i].title.slice(0 , 12)}</h2>
                      <div class='ineer'>
                          <p>${response.data[i].price}</p>
                          <p>o</p>
                     </div>
                 </div>` 
          }
     })
     .catch(err => {
        console.log(err)
    })

}




