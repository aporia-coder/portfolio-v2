import styled from 'styled-components'

export const PrimaryCursor = styled.div`
  z-index: 1000;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  position: fixed;
  border: 1px solid black;
  pointer-events: none;
  transform: translate3d(0, 0, 0);
`

export const SecondaryCursor = styled.div`
  z-index: 1000;
  width: 3rem;
  height: 3rem;
  background-color: #000;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
`
