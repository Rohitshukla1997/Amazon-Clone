console.log("hello");

const handelOpenSidebar = () => {
    document.getElementById("sidebar").style.display = "block";
}

const handelCloseSidebar = () => {
    document.getElementById("sidebar").style.display = "none";
}


$.ajax({
    url: 'https://dummyjson.com/products',
    type: 'get',
    dataType: 'json',
    success: function (data) {

        for (let i = 0; i < data.products.length; i++) {


            let childProducts = `  <div class="oneProducts">
    
            <p> ${data.products[i].category}</p>
            <img
             src="${data.products[i].images[0]}"
             alt="${data.products[i].images[0]}"
              />
    
    
            <div class="brandTitle">
                <h4>${data.products[i].title}</h4>
                <h3>${data.products[i].brand}</h3>
            </div>
    
    
            <h5>  ${data.products[i].description}</h5>
    
            <div class="productprice">
    
                <h4>Price: ${data.products[i].price}</h4>
                <h3>Discount : ${data.products[i].discountPercentage}</h3>
            </div>
            <h3> Rating : ${data.products[i].rating}</h3>
    
        </div>
    `

            $("#products").append(childProducts)

        }
    },
    error: function (error) {
        console.log(error);
    },
    always: function () {

    }
})


