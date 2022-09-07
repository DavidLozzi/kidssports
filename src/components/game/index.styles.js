import styled, { css } from 'styled-components';

export const Wrapper = styled(({ even, ...rest}) => <div {...rest} />)`
  display: flex;
  width: calc(100% - 40px);
  padding: 20px;
  justify-content: space-between;

  @media (max-width: 500px) {
    padding: 20px;
    flex-direction: column;
  }

  ${({ theme, even }) => even && css`
    background-color: ${ theme.colors.grey };
  `}
`

export const Icon = styled(({ sport, ...rest }) => <div {...rest} />)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme, sport }) => theme.sports[sport.toLowerCase()]};
  color: ${({ theme }) => theme.colors.white};
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  font-family: ${({ theme }) => theme.fonts.title};
`

export const TextWrapper = styled.div`
  width: 70%;
  @media (max-width: 500px) {
    width: 100%;
  }
`

export const Date = styled.div`
  font-size: 36px;
  color:  ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.title};
  margin-bottom: 10px;
  @media (max-width: 500px) {
    font-size: 24px;
    margin: 10px 0px;
  }
`

export const Desc = styled.div`
  font-size: 24px;
  color:  ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.text};
  @media (max-width: 500px) {
    font-size: 18px;
  }
`

export const Save = styled(Desc)`
  font-size: 20px;
  cursor:pointer;

  @media (max-width: 500px) {
    font-size: 18px;
    text-align: right;
  }
`