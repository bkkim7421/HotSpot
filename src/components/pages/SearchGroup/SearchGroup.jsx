import { useState } from 'react';
import { Description, Btn } from '../../atomic';
import Plus from '../../../assets/Plus.svg?react';
import Search from '../../../assets/Search.svg?react';
import { SearchGroupContainer, SearchBar, SearchBarInput, NewGroupBtnLink, TagContainer } from './style';
import { sampleGroupListData } from './sampleGroupListData';
import { sampleTagListData } from './sampleTagListData';
import { GroupList } from '../../common/GroupList';

export function SearchGroup() {
  const [selectedTag, setSelectedTag] = useState(sampleTagListData[0]);
  const [isHovering, setIsHovering] = useState();

  const handleClick = (event) => {
    setSelectedTag(event.target.textContent);
  };

  const handleMouseOver = (event) => {
    setIsHovering(event.target.textContent);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <SearchGroupContainer>
      <SearchBar>
        <SearchBarInput placeholder='그룹 이름 검색' />
        <Search />
      </SearchBar>
      <TagContainer>
        {sampleTagListData.map((tag, i) => (
          <Btn
            key={i}
            size={'small'}
            backgroundcolor={
              selectedTag === sampleTagListData[i]
                ? 'var(--brand-300)'
                : isHovering === sampleTagListData[i]
                ? 'var(--brand-200)'
                : 'var(--brand-100)'
            }
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Description>{tag}</Description>
          </Btn>
        ))}
      </TagContainer>
      <NewGroupBtnLink to='/makegroup'>
        <Btn size={'small'} backgroundcolor={'var(--brand-500)'} color={'white'}>
          <Plus />
          <Description>새 그룹</Description>
        </Btn>
      </NewGroupBtnLink>
      <GroupList groupListData={sampleGroupListData} colNum={3} />
    </SearchGroupContainer>
  );
}
