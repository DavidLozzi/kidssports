import { ThemeProvider } from 'styled-components';
import Game from './index';
import theme from '../../theme'

export default {
  title: 'Game',
  component: Game,
  parameters: {
    layout: 'fullscreen'
  }
}

const Template = (args) => <ThemeProvider theme={theme}><Game {...args} /></ThemeProvider>

export const Soccer = Template.bind({})
Soccer.args = {
  sport: 'Soccer',
  kid: 'Penny',
  date: '9/10/22 1:00 PM',
  location: 'Shawsheen'
}

export const Volleyball = Template.bind({})
Volleyball.args = {
  sport: 'Volleyball',
  kid: 'Annabelle',
  date: '9/8/22 6:00 PM',
  location: 'Wilmington High School'
}