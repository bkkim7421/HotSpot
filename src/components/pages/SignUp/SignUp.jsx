import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Title, Btn, Description } from '../../atomic';
import { SignUpContainer, SignUpForm, UserInfoInput } from './style';
import { Link } from 'react-router-dom';

export function SignUp() {
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
    navigate('/signin');
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  return (
    <SignUpContainer>
      <Col>
        <Title>HotSpot</Title>
        <SignUpForm onSubmit={(event) => handleSubmit(event)}>
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
            회원가입
          </Btn>
          <Description>
            계정이 이미 있나요? <Link to='/signin'>로그인</Link>
          </Description>
        </SignUpForm>
      </Col>
    </SignUpContainer>
  );
}
