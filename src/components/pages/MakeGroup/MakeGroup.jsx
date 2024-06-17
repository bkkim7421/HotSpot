import { MakeGroupContainer, TextInput, IntroduceInput, PeopleNumInput } from './style';
import { Col, Header1, Header2 } from '../../atomic';
import { FieldContainer } from './FieldContainer';

function FormContainer({ title, children }) {
  return (
    <Col gap={'3rem'}>
      <Header1>{title}</Header1>
      {children}
    </Col>
  );
}

export function MakeGroup() {
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
            최소 인원 <input type='number' /> 명
          </Header2>
          <Header2>
            최대 인원 <input type='number' /> 명
          </Header2>
        </PeopleNumInput>
      </FormContainer>
    </MakeGroupContainer>
  );
}
