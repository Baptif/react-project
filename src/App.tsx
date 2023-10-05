import UserList from './components/UserList'
import { useState, useEffect } from 'react'
import { createUser, getUsers } from './services/api'
import { UserInterface } from './models/UserInterface'
import styled from '@emotion/styled'
import UserProfile from './components/UserProfile'
import Chat from './components/Chat'


const App = () => {
  const [profile, setProfile] = useState<UserInterface>()
  const [currentUser, setCurrentUser] = useState<UserInterface>()
  const [users, setUsers] = useState<UserInterface[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers().then((data) => {
      const nextProfile = createUser(111)

      setUsers(data)
      setProfile(nextProfile)
      setLoading(false)
      console.log(profile)
    })
  }, [])

  if(loading || !profile){
    return <div>Loading...</div>
  }

  const handleUserClick = (user: UserInterface) => {
    setCurrentUser(user);
  }

  return (
    <AppContainer>
      <ListContainer>
        <UserList users={users} onClick={handleUserClick} />
        <ProfileContainer>
          <UserProfile avatar={profile.avatar} name={profile.name} />
        </ProfileContainer>
      </ListContainer>
      <ChatContainer>
        <Chat user={currentUser}/>
      </ChatContainer>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
`

const ListContainer = styled.div`
  width: 16rem;
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ProfileContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width:16rem;
`

const ChatContainer = styled.div`
  flex: 1;
`

export default App
