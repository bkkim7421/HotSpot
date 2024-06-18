import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Title, Btn, Description } from '../../atomic';
import { SignInContainer, SignInForm, UserInfoInput } from './style';
import { Link } from 'react-router-dom';

export function SignIn() {
  const [userId, setUserId] = useState('');
  const [userPswd, setUserPswd] = useState('');
  const navigate = useNavigate();

  const handleIdChange = (event) => {
    setUserId(event.target.value);
  };
  const handlePswdChange = (event) => {
    setUserPswd(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userId.trim() === '' || userPswd.trim() === '') return;
    localStorage.setItem('userId', userId);
    localStorage.setItem('userPswd', userPswd);
    navigate('/');
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  return (
    <SignInContainer>
      <Col>
        <Title>HotSpot</Title>
        <SignInForm onSubmit={(event) => handleSubmit(event)}>
          <Col>
            <UserInfoInput placeholder='아이디' value={userId} onChange={handleIdChange} required />
            <UserInfoInput
              placeholder='비밀번호'
              value={userPswd}
              onChange={handlePswdChange}
              onKeyDown={handleEnter}
              required
            />
          </Col>
          <Btn
            size='large'
            bgcolor='var(--brand-500)'
            color='var(--gray-000)'
            onClick={() => {
              handleSubmit(new Event('submit', { cancelable: true, bubbles: true }));
            }}
          >
            로그인
          </Btn>
          <Description>
            계정이 없나요? <Link to='/signup'>회원가입</Link>
          </Description>
        </SignInForm>
      </Col>
    </SignInContainer>
  );
}
