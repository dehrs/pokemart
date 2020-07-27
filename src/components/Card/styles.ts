import styled from 'styled-components';
import { shade } from 'polished';

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 5px 5px 5px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: auto;

  img {
    padding: 10px;
    width: 110px;
    height: 100px;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 20px;

    p {
      font-size: 14px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 40px;
      padding: 10px;
      font-size: 14px;
      font-weight: 500;
      border: 0;
      background: #629378;
      color: #f1faee;
      margin: 10px 10px 10px 0;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#629378')};
      }
    }
  }
`;
