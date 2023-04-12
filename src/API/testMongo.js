const axios = require('axios')

const getFromMongo = async (barcode) => {
    let response
    try {
      response = await axios.get(
        
        `https://products-scanner-server.onrender.com/api/v1/products-scanner/products/${barcode}345345`,
      );
      console.log(response)
      const data = await response.data;
      return data;
    } catch (error) {
        console.log(error)
      if (response.status === 404) {
        console.log(`Product not found in ${constants.APP_NAME} API.`);
      } else {
        console.error(`Error while fetching from MongoDB error: ${error}`);
      }
    }
  };
  getFromMongo(7290110110635)