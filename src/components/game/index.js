import * as Styled from './index.styles';

const Game = ({ sport, kid, date, location }) => {
  
  return <Styled.Wrapper>
    <Styled.Icon />
    <Styled.TextWrapper>
      <Styled.Date>{date}</Styled.Date>
      <Styled.Desc>{kid} is playing {sport} at {location}</Styled.Desc>
    </Styled.TextWrapper>
    <Styled.Save>Save to Cal</Styled.Save>
  </Styled.Wrapper>
}

export default Game