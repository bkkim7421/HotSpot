import { Row, Col, Header3, Description, Detail } from '../../atomic';
import Person from '../../../assets/Person.svg?react';
import { GroupItemContainer, GroupListContainer } from './style';

function GroupItem({ title, represent, peopleNum, peopleLimit, description }) {
  return (
    <GroupItemContainer>
      <Col>
        <Header3>{title}</Header3>
        <Row>
          <Person width={'2rem'} height={'2rem'} />
          <Detail>
            {represent} 외 {peopleNum}명 / {peopleLimit}명
          </Detail>
        </Row>
      </Col>
      <Description>{description}</Description>
    </GroupItemContainer>
  );
}

export function GroupList({ groupListData, colNum }) {
  const rowNum = Math.ceil(groupListData.length / colNum);
  return (
    <GroupListContainer>
      {[...Array(rowNum)].map((_, i) => (
        <Row key={i}>
          {[...Array(colNum)].map((_, j) => {
            if (colNum * i + j >= groupListData.length) return null;
            const groupData = groupListData[colNum * i + j];
            return (
              <GroupItem
                key={j}
                title={groupData.title}
                represent={groupData.represent}
                peopleNum={groupData.peopleNum}
                peopleLimit={groupData.peopleLimit}
                description={groupData.description}
              ></GroupItem>
            );
          })}
        </Row>
      ))}
    </GroupListContainer>
  );
}
