import React from 'react';
import soccerIcon from '../../assets/soccer.png';
import volleyballIcon from '../../assets/volleyball.png';
import unknownIcon from '../../assets/unknown.png';
import calendarIcon from '../../assets/calendar.png';
import * as Styled from './index.styles';
const ics = require('ics');

const Game = ({ sport, kid, date, location, even }) => {
  const [calLink, setCalLink] = React.useState('')
  const [sportIcon, setSportIcon] = React.useState()
  const theDate = React.useMemo(() => new Date(date), [date])
  const isiPhoneChrome = window.navigator.userAgent.indexOf('CriOS') > -1

  React.useEffect(() => {
    const event = {
      start: [theDate.getFullYear(), theDate.getMonth()+1, theDate.getDate(), theDate.getHours(), theDate.getMinutes()],
      duration: { hours: 1, minutes: 30 },
      title: `${kid}'s ${sport}`,
      description: 'Actual time may vary and could be cancelled without notification.\n\nText if needed: David 978.305.5040, Heather: 508.982.4777',
      location: location
    }

    ics.createEvent(event, (err, val) => {
      if (err) {
        console.error(err)
        return
      }
      const contentToDownload = `data:text/calendar;charset=utf-8,${encodeURIComponent(val)}`;
      setCalLink(contentToDownload);
    })
    switch (sport) {
      case 'Soccer':
        setSportIcon(soccerIcon)
        break
      case 'Volleyball':
        setSportIcon(volleyballIcon)
        break
      default:
        setSportIcon(unknownIcon)
        break
    }
  }, [sport, kid, location, theDate])
  
  return <Styled.Wrapper even={even}>
    <Styled.Icon kid={kid}>
      <Styled.Image src={sportIcon} />
    </Styled.Icon>
    {calLink && !isiPhoneChrome && <Styled.Save href={calLink} download={kid}><Styled.Calendar src={calendarIcon} /></Styled.Save>}
    <Styled.TextWrapper>
      <Styled.Date>{theDate.toDateString()} at {theDate.toLocaleTimeString().replace(':00 ',' ')}</Styled.Date>
      <Styled.Desc>{kid} is playing {sport} at {location}</Styled.Desc>
    </Styled.TextWrapper>
  </Styled.Wrapper>
}

export default Game