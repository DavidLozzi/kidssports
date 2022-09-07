import * as Styled from './index.styles';
const ics = require('ics');

const Game = ({ sport, kid, date, location, even }) => {
  const theDate = new Date(date);
  const saveCalendar = () => {
    console.log(theDate.getFullYear(), theDate.getMonth() + 1, theDate.getHours(), theDate.getMinutes());
    const event = {
      start: [theDate.getFullYear(), theDate.getMonth()+1, theDate.getDate(), theDate.getHours(), theDate.getMinutes()],
      duration: { hours: 1, minutes: 30 },
      title: `${kid}'s ${sport}`,
      description: 'Cctual time may vary and could be cancelled without notification.\n\nText if needed: David 978.305.5040, Heather: 508.982.4777',
      location: location
    }

    ics.createEvent(event, (err, val) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(val);
      const contentToDownload = `data:text/calendar;charset=utf-8,${encodeURIComponent(val)}`;
      window.open(contentToDownload, 'event.ics');
    })
  }
  return <Styled.Wrapper even={even}>
    <Styled.Icon sport={sport}>{kid.substring(0,1)}</Styled.Icon>
    <Styled.TextWrapper>
      <Styled.Date>{theDate.toDateString()} at {theDate.toLocaleTimeString()}</Styled.Date>
      <Styled.Desc>{kid} is playing {sport} at {location}</Styled.Desc>
    </Styled.TextWrapper>
    <Styled.Save onClick={saveCalendar}>Save to Cal</Styled.Save>
  </Styled.Wrapper>
}

export default Game