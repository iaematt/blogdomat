import styled from 'styled-components'

export const Container = styled.article`
  width: 920px;
  margin: 70px auto 10px;
  /* display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 15px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  animation: fadeInPost 380ms ease-in-out;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 880px) {
    width: 95%;
    display: flex;
    flex-direction: column-reverse;
  }

  @keyframes fadeInPost {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

export const Article = styled.article`
  width: 65%;

  img {
    max-width: 100%;
    border-bottom: 2px solid #333;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 1px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    margin-top: 35px;
  }

  @media screen and (max-width: 880px) {
    width: 100%;
  }
`

export const Image = styled.div`
  width: 34%;
  padding-top: 47px;

  @media screen and (max-width: 880px) {
    padding-top: 0;
    width: 100%;
    margin-bottom: 40px;

    img {
      position: static !important;
    }
  }

  img {
    max-width: 100%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    position: sticky;
    position: --webkit-sticky;
    top: 20px;
    filter: brightness(0.9);
  }
`
