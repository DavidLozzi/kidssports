import { ThemeProvider } from 'styled-components';
import List from './index';
import theme from '../../theme'

export default {
  title: 'List',
  component: List,
  parameters: {
    layout: 'fullscreen'
  }
}

const Template = (args) => <ThemeProvider theme={theme}><List {...args} /></ThemeProvider>

export const ListStory = Template.bind({})
ListStory.args = {
  data: [
    {
      sport: 'Soccer',
      kid: 'Penny',
      date: '9/10/22 1:00 PM',
      location: 'Shawsheen Field'
    },
    {
      sport: 'Soccer',
      kid: 'Calvin',
      date: '9/10/22 2:00 PM',
      location: 'North'
    },
    {
      sport: 'Volleyball',
      kid: 'Annabelle',
      date: '9/9/22 6:00 PM',
      location: 'Wilmington High School'
    },
  ]
}