import UserList from './components/UserList'
import { useState } from 'react'
import { UserInterface } from './models/UserInterface'
import styled from '@emotion/styled'
import UserProfile from './components/UserProfile'
import ChatList from './components/ChatList'
import { useUsers } from './hooks/useUser'
import { useProfile } from './hooks/useProfile'
import Header from './components/Header'

const App = () => {
  const [currentUser, setCurrentUser] = useState<UserInterface>()
  const [searchUser, setCurrentSearchUser] = useState('')
  const { users, loading: usersLoading } = useUsers()
  const { profile, loading: profileLoading } = useProfile()

  if (profileLoading || usersLoading || !profile) {
    return <div>Loading...</div>
  }

  const handleUserClick = (user: UserInterface) => {
    setCurrentUser(user)
  }

  const handleChangeSearchUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSearchUser(event.target.value.toLowerCase())
  }

  return (
    <AppContainer>
      <Header avatar={currentUser?.avatar} name={currentUser?.name} onChange={handleChangeSearchUser} />
      <Page>
        <ListContainer>
          <UserList users={users.filter((user) => user.name.toLowerCase().includes(searchUser))} onClick={handleUserClick} />
          <ProfileContainer>
            <UserProfile avatar={profile.avatar} name={profile.name} />
          </ProfileContainer>
        </ListContainer>
        <ChatContainer>
          {currentUser && <ChatList user={currentUser} profile={profile} />}
        </ChatContainer>
      </Page>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Page = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: 93.5vh;
`

const ListContainer = styled.div`
  width: 16rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: var(--secondary);
`

const ProfileContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 16rem;
`

const ChatContainer = styled.div`
  flex: 1;
`

export default App
