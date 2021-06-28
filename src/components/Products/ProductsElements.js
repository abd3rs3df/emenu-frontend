import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 1.5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin: 0 auto;
  margin-right: 20px;

`;

export const ProductCard = styled.div`
  margin: 0 1rem;
  line-height: 2;
  width: 300px;
  text-align:center;
  word-break: break-all;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  
  font-size: 1.5rem;

;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: rem;
  
`;
export const ProductDescDiv = styled.div`
width: 300px;
`
export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  

`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  text-align: center;
  align-items: center;
  margin-left:100px ;
  margin-top :20px;
  

  &:hover {    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export const InputField = styled.input.attrs({
  placeholder : 'count'
  ,
  type:'number'
})`
  outline: none;
  padding: 16px 22px;
  border: 1px solid #dadce0;
  width: 200px;
  height: 30px;
  font-size: 18px;
  border-radius: 5px;
  margin-bottom: 10px;

  &:focus
  {
    border: 2px solid royalblue;
  }



 
`;





