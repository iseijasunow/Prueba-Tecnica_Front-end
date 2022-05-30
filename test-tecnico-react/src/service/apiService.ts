import { IResjsonInterface } from "../interfaces/resjsonInterface";
import { IUser } from "../interfaces/userInterface";

const baseURL: string = "https://api.github.com/";
console.log(process.env.REACT_APP_TOKEN_GIT_HUB2);
const headers ={
    "Authorization": `Basic Token ${process.env.REACT_APP_TOKEN_GIT_HUB2}`
}
const requestInfo ={
        "method":"GET",
        "headers": headers
}
const getTenUsers = async (usersName: string) => {
    let followersArray:Array<any> =[];
    const res = await fetch(`${baseURL}search/users?q=${usersName}&per_page=10`,requestInfo);
    const resJson: IResjsonInterface = await res.json();
    await Promise.all(resJson.items.map(async(user) => {
        try {
            const res = await fetch(`${baseURL}users/${user.login}`,requestInfo);
            const userInfo:IUser =  await res.json();
            followersArray.push({
                username:userInfo.login,
                followers:userInfo.followers
            })
        } catch (error) {
            console.log(error);
        }
      }))

    return {
        resJson,
        followersArray
    }

}
const getUser = async (userName: string): Promise<IUser> => {
    const res = await fetch(`${baseURL}users/${userName}`,requestInfo);
    const user: IUser = await res.json();
    return user;
}

export { getTenUsers, getUser }