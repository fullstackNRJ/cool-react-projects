import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: linear-gradient(120deg,#333, #d38558);
  border-radius: 10px;
  border: 2px solid #d38558;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1rem;
  }
  color:#c7894c;

  .animate-card {
    position: relative;
    -webkit-animation: animatebottom 1s;
    animation-name: animatebottom 1s;
  }
  
  @-webkit-keyframes animatebottom {
    from { bottom:-100px; opacity:0 } 
    to { bottom:0px; opacity:1 }
  }
  
  @keyframes animatebottom { 
    from{ bottom:-100px; opacity:0 } 
    to{ bottom:0; opacity:1 }
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #03823e, #59BC86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #a10303, #C16868)'
        : 'linear-gradient(90deg, #555, #333)'};
    border: 3px solid #d38558;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #f0a051;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }

  
`;