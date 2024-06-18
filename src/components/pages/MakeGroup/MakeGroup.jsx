import { useState } from 'react';
import { MakeGroupContainer, TextInput, IntroduceInput, PeopleNumInput, BtnContainer } from './style';
import { Col, Header1, Header2, Btn } from '../../atomic';
import { FieldContainer } from './FieldContainer';
import { Link } from 'react-router-dom';

function FormContainer({ title, children }) {
  return (
    <Col gap={'3rem'}>
      <Header1>{title}</Header1>
      {children}
    </Col>
  );
}

export function MakeGroup() {
  const [minPeople, setMinPeople] = useState(0);
  const [maxPeople, setMaxPeople] = useState(5);

  const handleMinChange = (event) => {
    const newValue = Number(event.target.value);
    setMinPeople(newValue);
    if (newValue > maxPeople) {
      setMaxPeople(newValue);
    }
  };
  const handleMaxChange = (event) => {
    const newValue = Number(event.target.value);
    setMaxPeople(newValue);
    if (newValue < minPeople) {
      setMinPeople(newValue);
    }
  };

  return (
    <MakeGroupContainer>
      <FormContainer title='그룹 이름'>
        <TextInput placeholder='그룹 이름 입력' />
      </FormContainer>
      <FormContainer title='관련 분야'>
        <FieldContainer />
      </FormContainer>
      <FormContainer title='그룹 소개'>
        <IntroduceInput placeholder='그룹 이름 입력' />
      </FormContainer>
      <FormContainer title='모임 장소'>
        <TextInput placeholder='주소 입력' />
      </FormContainer>
      <FormContainer title='모집 인원'>
        <PeopleNumInput>
          <Header2>
            최소 인원 <input type='number' value={Number(minPeople).toString()} onChange={handleMinChange} /> 명
          </Header2>
          <Header2>
            최대 인원 <input type='number' value={Number(maxPeople).toString()} onChange={handleMaxChange} /> 명
          </Header2>
        </PeopleNumInput>
      </FormContainer>
      <BtnContainer>
        <Link to='/searchgroup'>
          <Btn bgcolor='var(--gray-200)' size='medium'>
            취소
          </Btn>
        </Link>
        <Link to='/searchgroup'>
          <Btn bgcolor='var(--brand-500)' size='medium'>
            완료
          </Btn>
        </Link>
      </BtnContainer>
    </MakeGroupContainer>
  );
}
