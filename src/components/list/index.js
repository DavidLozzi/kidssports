import Game from '../game';
import * as Styled from './index.styles';

const List = ({ data }) => {
  return <Styled.Wrapper>
    {data.map(d => <Game {...d} key={`${d.date}-${d.kid}`} />)}
  </Styled.Wrapper>
}

export default List;