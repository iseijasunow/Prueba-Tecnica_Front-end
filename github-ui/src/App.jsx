import {UserBarChart} from './UserBarChart.jsx'
import {UserList} from './UserList.jsx'
import {GitHub} from './services/GitHubService/GitHub.jsx'


export function App() {
  const github = new GitHub()
  const users = github.getUsers()['items']


  return (
    <>
      <UserList users={users} />
      <UserBarChart />
    </>

  )
}