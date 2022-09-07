import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
`

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.orange};
`

export const TextWrapper = styled.div`
  width: 70%;
`

export const Date = styled.div`
  font-size: 36px;
  color:  ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.title};
`

export const Desc = styled.div`
  font-size: 24px;
  color:  ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.text};
`

export const Save = styled(Desc)`

`