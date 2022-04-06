let res = fetch("https://restcountries.com/v2/all");
res.then((data) => data.json())
    .then(function (countrydata) {

        // Element tag create function
        function foo(ele, cname) {
            let div = document.createElement(ele);
            div.className = cname;
            return div;
        }
        // container 
        let container = foo("div", "container");
        document.body.append(container);

        // row
        let row = foo("div", "row m-3");
        container.append(row);

        // Cards display 
        countrydata.forEach(function (country) {
            let col = foo("div", "col-lg-3 col-sm-12 col-md-6")
            col.innerHTML = `<div class="card m-3 zoom shadow-lg  p-1 bg-body rounded" style="width: 18rem;">
       <img height="200" src="${country.flags.png}" class="card-img-top" alt="...">
       <div class="card-body text-center">
         <h6 class="card-title fw-bold">Country: ${country.name}<br><br>
           Capital: ${country.capital} <br><br>
           Region: ${country.region} <br>
         </h6>
       </div>
     </div>`
            row.append(col)
        })
    })
    .catch((error) => console.log(error));

