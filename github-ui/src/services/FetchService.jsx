export class FetchService {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    async get(endpoint) {
      const url = this.baseURL + endpoint;
      try {
        const response = await fetch(url,{
          method: "GET",
          //credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }
  }
  

  