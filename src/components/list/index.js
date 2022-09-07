import React from 'react';
import Game from '../game';
import schedule from '../../schedule';
import * as Styled from './index.styles';
import { useEffect } from 'react';

const List = () => {
  const [theSchedule, setTheSchedule] = React.useState([]);

  useEffect(() => {
    setTheSchedule(schedule
      .filter(s => new Date(s.date) > new Date().setHours(new Date().getHours() - 12))
      .sort((a, b) => new Date(a.date) > new Date(b.date) ? 1 : -1)
    );
  }, [])

  return <Styled.Wrapper>
    {theSchedule.map((d, i) => <Game {...d} key={`${d.date}-${d.kid}`} even={i % 2} />)}
  </Styled.Wrapper>
}

export default List;