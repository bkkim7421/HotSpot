import { useState } from 'react';
import { MakeGroupContainer, GroupNameInput } from './style';
import { Col, Wrap, Header1, Btn, Description } from '../../atomic';
import { InputBox } from '../../common/InputBox';

function FormContainer({ title, children }) {
  return (
    <Col gap={'3rem'}>
      <Header1>{title}</Header1>
      {children}
    </Col>
  );
}

function FieldContainer() {
  const [fieldList, setFieldList] = useState(['대회 / 공모전']);
  const [fieldName, setFieldName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (fieldName.trim() !== '') {
      setFieldList([...fieldList, fieldName]);
      setFieldName('');
    }
  };

  return (
    <Wrap gap='1rem'>
      {fieldList.map((item, i) => (
        <Btn key={i} bgcolor='var(--brand-100)' size='small'>
          <Description>{item}</Description>
        </Btn>
      ))}
      <InputBox bgcolor='var(--brand-100)' /> {/* todo 스타일드 컴포넌트로 바꿔야 됨*/}
    </Wrap>
  );
}

export function MakeGroup() {
  return (
    <MakeGroupContainer>
      <FormContainer title='그룹 이름'>
        <GroupNameInput placeholder='그룹 이름 입력' />
      </FormContainer>
      <FormContainer title='관련 분야'>
        <FieldContainer></FieldContainer>
      </FormContainer>
      <FormContainer title='그룹 소개'>
        <GroupNameInput placeholder='그룹 이름 입력' />
      </FormContainer>
      <FormContainer title='모임 장소'>
        <GroupNameInput placeholder='그룹 이름 입력' />
      </FormContainer>
      <FormContainer title='모집 인원'>
        <GroupNameInput placeholder='그룹 이름 입력' />
      </FormContainer>
    </MakeGroupContainer>
  );
}
