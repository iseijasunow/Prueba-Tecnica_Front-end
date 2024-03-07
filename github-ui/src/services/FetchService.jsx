export class FetchService {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    async get(endpoint) {
      const url = this.baseURL + endpoint;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }
  }
  

  