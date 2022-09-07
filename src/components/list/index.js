import React from 'react';
import Game from '../game';
import scheduleTxt from '../../schedule.txt';
import { unobfs } from '../../utils';
import * as Styled from './index.styles';

const List = ({ salt }) => {
  const [theSchedule, setTheSchedule] = React.useState([]);

  React.useEffect(() => {
    const doIt = async () => {
      if (salt) {
        const doUnobfs = unobfs(salt)
        const resp = await fetch(scheduleTxt)
        const txt = await resp.text()
        const schedule = JSON.parse(doUnobfs(txt))
        setTheSchedule(schedule
          .filter(s => new Date(s.date) > new Date().setHours(new Date().getHours() - 12))
          .sort((a, b) => new Date(a.date) > new Date(b.date) ? 1 : -1)
        );
      }
    }
    doIt()
  }, [salt])

  return <Styled.Wrapper>
    {theSchedule.map((d, i) => <Game {...d} key={`${d.date}-${d.kid}`} even={i % 2} />)}
  </Styled.Wrapper>
}

export default List;