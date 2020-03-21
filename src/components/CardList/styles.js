import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 100px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  -webkit-box-align: start;
  -webkit-align-items: start;
  -ms-flex-align: start;
  align-items: start;
  justify-items: center;
  grid-gap: 4rem 3rem;
`;

export const Card = styled.div`
  position: relative;
  background: #272727;
  width: 100%;
  height: 300px;
  padding: 8px;
  border-radius: 2px;
`;

export const CardBody = styled.div`
`;

export const CardTitle = styled.h3`
  color: #fff;
`;