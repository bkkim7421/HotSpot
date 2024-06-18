import { styled } from 'styled-components';
import { Col, Title, Header1, Header3, Description } from '../../atomic';

export function Home() {
  return (
    <HomeContainer>
      <Title>HotSpot</Title>
      <Col>
        <Header1>구현된 부분</Header1>
        <Col>
          <Header3>- 그룹 검색</Header3>
          <Description>그룹 이름 검색 입력창</Description>
          <Description>분야 버튼 클릭 구현</Description>
          <Description>새 그룹 버튼 클릭시 다른 페이지로 이동</Description>
        </Col>
        <Col>
          <Header3>- 그룹 검색 -&gt; 새 그룹 만들기</Header3>
          <Description>input태그를 사용해 입력창 구현</Description>
          <Description>span에 contenteditable 속성을 줘서 입력창 구현</Description>
          <Description>input의 type을 number로 지정해 숫자입력창 구현</Description>
          <Description>button의 :hover 선택자를 사용해 마우스 올려져있을 때 색상 변화</Description>
        </Col>
        <Col>
          <Header3>- 내 정보</Header3>
          <Description>flex box를 사용해 레이아웃 구성</Description>
          <Description>음수 margin 값을 사용해 사진과 원모양 겹치게 구현</Description>
          <Description>.jpg, .svg 이미지를 사용</Description>
        </Col>
        <Col>
          <Header3>- 로그인 화면</Header3>
          <Description>a태그를 통해 회원가입 페이지로 이동 구현</Description>
        </Col>
        <Col>
          <Header3>- 회원가입 화면</Header3>
          <Description>::placeholder 가상요소를 사용해 placeholder에 style 적용</Description>
        </Col>
      </Col>
    </HomeContainer>
  );
}

const HomeContainer = styled(Col)`
  width: 100%;
  gap: 7rem;
  padding: 15rem 40rem 30rem;
  overflow-y: auto;
  height: 100vh;

  & > div {
    gap: 5rem;
    & > div {
      gap: 3rem;
      & > div {
        text-indent: 3rem;
        &:first-child {
          text-indent: 0;
        }
      }
    }
  }
`;
