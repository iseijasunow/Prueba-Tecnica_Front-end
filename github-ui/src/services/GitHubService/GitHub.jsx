import {FetchService} from '../FetchService.jsx'


export class GitHub {
    
    constructor(){
        this.fetch = new FetchService('https://api.github.com')
        this.searshUsersEndPoint = '/search/users'
        this.usersEndPoint = '/users'
        this.followersEndPoint = '/followers'
        this.followingEndPoint = '/following'
        this.reposEndPoint = '/repos'
        this.query = '?q='
        this.perPage = 'per_page=10'
    }

    async getUsers() {
        try {
            const response = await this.fetch.get(this.usersEndPoint + '?' + this.perPage)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }
    
    async findUsers(searchValue = 'YOUR_NAME') {
        try {
            const response = await this.fetch.get(this.searshUsersEndPoint + this.query + searchValue + '&' + this.perPage)
            return response.json()
        } catch (error) {
            console.error('error de github service', error)
            throw error
        }
    }
    
    async findAUser(user) {
        try {
            const response = await this.fetch.get(this.usersEndPoint + '/' + user)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }
    async getFollowers(user, page) {
        try {
            const response = await this.fetch.get(this.usersEndPoint + '/' + user + this.followersEndPoint + '?per_page=100&page=' + page)
            return response
        } catch (error) {
            console.error(error)
            throw error
        }
    }
    async getFollowing(user, page) {
        try {
            const response = await this.fetch.get(this.usersEndPoint + '/' + user + this.followingEndPoint + '?per_page=100&page=' + page)
            return response
        } catch (error) {
            console.error(error);
            throw error
        }
    }
    async numberOfFollowers(user) {
        try {
            const firstRequest = await this.getFollowers(user, 1)
            let lastRequest = []
            let totalFollowers = 0


            const headerLinks = firstRequest.headers.get('link')?.split(',')
            if(headerLinks === null || headerLinks === undefined){
                totalFollowers = await firstRequest.json()
                totalFollowers = totalFollowers.length
            } else {
                const lastLink = headerLinks.find(item => item.includes('rel="last"'))
                const lastPageNumber = parseInt(lastLink.match(/&page=(\d+)/)[1])
                if(lastPageNumber > 1){
                    lastRequest = await this.getFollowers(user, lastPageNumber)
                    lastRequest = await lastRequest.json()
                    totalFollowers = lastRequest.length + (100 * (lastPageNumber - 1)) + 3000
                } else {
                    totalFollowers = await firstRequest.json()
                    totalFollowers = totalFollowers.length
                }
            }
            return totalFollowers
        } catch (error) {
            console.error(error)
            throw error
        }
    }
    async numberOfFollowing(user) {
        try {
            const firstRequest = await this.getFollowing(user, 1)
            let lastRequest = []
            let totalFollowing = 0

            const headerLinks = firstRequest.headers.get('link')?.split(',')
            if(headerLinks === null || headerLinks === undefined){
                totalFollowing = await firstRequest.json()
                totalFollowing = totalFollowing.length
            } else {
                const lastLink = headerLinks.find(item => item.includes('rel="last"'))
                const lastPageNumber = parseInt(lastLink.match(/&page=(\d+)/)[1])
                if(lastPageNumber > 1){
                    lastRequest = await this.getFollowing(user, lastPageNumber)
                    lastRequest = await lastRequest.json()
                    totalFollowing = lastRequest.length + (100 * (lastPageNumber - 1)) + 3000
                } else {
                    totalFollowing = await firstRequest.json()
                    totalFollowing = totalFollowing.length
                }
            }
            return totalFollowing
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getRepositories(user) {
        try {
            let login = user
            const response = await this.fetch.get(this.usersEndPoint + '/' + login + this.reposEndPoint + '?per_page=100')
            return response.json()
        } catch (error) {
            console.error(error);
            throw error
        }
    }
}