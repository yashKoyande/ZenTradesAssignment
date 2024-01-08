// Fetch the JSON data from the API
      fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
       .then(response => response.json())
       .then(data => {
           // Convert the products object to an array
           let productsArray = Object.values(data.products);

           // Sort the data based on popularity
           productsArray.sort((a, b) => b.popularity - a.popularity);

           // Display the data
           const productsContainer = document.getElementById('productsContainer');
           for (let product of productsArray) {
               let productElement = document.createElement('div');
               productElement.innerHTML = `<h2>${product.title}</h2><p>Price: ${product.price}</p>`;
               productsContainer.appendChild(productElement);
           }
       });