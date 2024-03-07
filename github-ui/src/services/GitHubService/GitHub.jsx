import {FetchService} from '../FetchService.jsx'


export class GitHub {
    
    constructor(){
        this.fetch = new FetchService('https://api.github.com');
        this.usersEndPoint = '/search/users';
        this.followersEndPoint = '/followers'
        this.query = '?q=';    
    }

    async getUsers(user = 'YOUR_NAME') {
        try {
            const data = await this.fetch.get(this.usersEndPoint + this.query + user);
            console.log(data);
            return data;
        } catch (error) {
            console.error(error);
        }
    }
    async getFollowers(user) {
        try {
            const data = await this.fetch.get(this.usersEndPoint + this.query + user + this.followersEndPoint);
            console.log(data);
            return data;
        } catch (error) {
            console.error(error);
        }
    }

}