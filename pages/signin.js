import React from 'react';
import twined from 'twined-components';
import styled from 'styled-components';
import 'tailwindcss/dist/tailwind.css';

const Background = twined.div`
  relative w-full h-full
  flex items-center justify-center
  bg-gradient-to-b from-green-400 to-blue-500
`;

const LoginContainer = twined.div`
  w-11/12 max-w-xs p-7 rounded-lg shadow-xl
  bg-white bg-opacity-25
  border border-white border-opacity-50
  z-10
`.css({
  backdropFilter: 'blur(5px)',
});

const LoginContainerShadow = twined.div`
  absolute w-full h-full top-0 left-0
`.css({
  boxShadow: 'inset 0 0 30px 0 rgba(255, 255, 255, 0.25)',
});

const Title = twined.h1`
  text-white text-3xl text-center
  mb-5
`.css`
  font-family: 'Pacifico';
  text-shadow: 0 0 4px #F0F, 0 0 10px #F0F, 0 0 20px #F0F, 0 0 40px #F0F;
`;

const BorderlessButton = twined.button`
  border-0 px-6 py-2 rounded-lg
`;

// close button
const Close = twined(BorderlessButton)`
  hidden absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black text-white rounded-full
  items-center justify-center
  fas fa-times
`;

const ModalBackground = twined.div`
  fixed w-full h-full flex items-center justify-center bg-black bg-opacity-25 box-border p-10
`;

// Close is styled-components, so you can use the classname of Close.
const Modal = twined.div`
  relative flex items-center justify-center w-full h-full p-4 bg-white shadow text-2xl rounded-lg
`.css`
  :hover ${Close} {
    display: flex;
  }
`;

// Twined-components returns styled-components and can be expanded. It also optionally supports writing CSS as a JavaScript object instead of CSS code.
const Button = twined(BorderlessButton)`
  block ml-5
`.css({
  color: ({ primary }) => primary && 'white',
  background: ({ primary }) => primary && 'salmon',
  fontWeight: ({ primary }) => primary && 'bold',
});

const Icon = styled.i`
  position: absolute;
  top: 50%;
  left: 12px;
  font-size: 20px;
  color: #333;
  opacity: 0.5;
  transform: translateY(-50%);
`;
const UserIcon = twined(Icon)`
  fas fa-user 
`;
const LockIcon = twined(Icon)`
  fas fa-lock
`;

const Input = twined.input`
  relative w-full
  bg-white bg-opacity-25
  box-border pl-10 pr-4 py-2 rounded-lg
  border border-white border-opacity-25
  focus:outline-none
  focus:border-pink-500
`.css`
  &:focus + ${Icon} {
    opacity: unset;
    color: #e749ff;
  }
`;

const InputWrapper = twined.div`
  relative mt-5
`;

const LoginButton = twined.button`
  relative
  w-full
  box-border py-2 rounded-lg
  text-white font-bold
  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
  shadow-lg
  cursor-pointer
  focus:outline-none
  mt-5
`;

const Logo = twined.img`
  fixed bottom-5 right-5
  w-20
  cursor-pointer
  z-20
`;

const Signin = () => (
  <Background>
    <LoginContainer>
      <LoginContainerShadow />
      <Title>Welcome</Title>
      <InputWrapper>
        <Input placeholder="Username" />
        <UserIcon />
      </InputWrapper>
      <InputWrapper>
        <Input type="password" placeholder="Password" />
        <LockIcon />
      </InputWrapper>
      <LoginButton>Login</LoginButton>
      <>
        <ModalBackground>
          <Modal>
            Hello World, this is my first twined component!
            <Button primary>Ok</Button>
            <Close />
          </Modal>
        </ModalBackground>
        ;
      </>
    </LoginContainer>
    <Logo
      src="https://raw.githubusercontent.com/lowfront/vscode-twined-components/master/logo.png"
      onClick={($) =>
        window.open('https://github.com/lowfront/twined-components/', '_blank')
      }
    />
  </Background>
);

export default Signin;
