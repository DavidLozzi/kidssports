import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  @media (max-width: 500px) {
    padding: 0px 10px;
  }
`

export const Image = styled.img`
  width: 200px;
  position: sticky;
  top: 20px;
  margin-bottom: 20px;
`

export const Intro = styled.div`
  font-family: ${({ theme }) => theme.fonts.text};
  margin: 20px 0px 50px 0px;
  text-align: center;
  font-size: 24px;
`

export const Input = styled.input`
  font-size: 24px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  padding: 5px;
  border-radius: 7px;
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.title};
`

export const Button = styled.button`
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 5px 20px;
  border-radius: 7px;
  font-family: ${({ theme }) => theme.fonts.title};
  cursor: pointer;
`

export const Invalid = styled(Intro)`
  color: ${({ theme }) => theme.colors.orange};
`