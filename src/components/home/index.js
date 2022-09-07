import React from 'react';
import List from '../list';
import logo from '../../assets/logo192.png';
import * as Styled from './index.styles'
import { obfs, unobfs } from '../../utils';

const Home = () => {
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('loggedIn'))
  const [password, setPassword] = React.useState('')
  const [invalid, setInvalid] = React.useState()

  const logMeIn = () => {
    const doObfs = obfs(password.toLowerCase())
    if (doObfs(password.toLowerCase()) === '141f1d1305') {
      setLoggedIn(true)
      localStorage.setItem('loggedIn', true)
    } else {
      setInvalid('Invalid password.')
      localStorage.setItem('loggedIn', false)
    }
  }

  return <Styled.Wrapper>
    <Styled.Container>
      <Styled.Image src={logo} alt="Lozzi Family Sports Logo" />
      {loggedIn && <>
        <Styled.Intro>
          Below is a list of the Lozzi family sports schedule! We can't wait to see you there!
        </Styled.Intro>
        <List />
      </>
      }
      {!loggedIn && <>
        <Styled.Intro>Please log in to view the schedule. If you do not know the password, contact David or Heather.}</Styled.Intro>
        <Styled.Input type="password" onChange={(e) => setPassword(e.target.value)} />
        <Styled.Button onClick={logMeIn}>Log In</Styled.Button>
        {invalid && <Styled.Invalid>{invalid}</Styled.Invalid>}
      </>
      }
    </Styled.Container>
  </Styled.Wrapper>
}

export default Home;