import { styled } from 'styled-components';
import { Row, Col, Wrap, Btn } from '../../atomic';
import { InputBox } from '../../common/InputBox';
import { Link } from 'react-router-dom';

export const SearchGroupContainer = styled(Col)`
  height: 100vh;
  overflow-y: auto;
  flex-grow: 1;
  gap: 2rem;
  align-items: center;
  padding: 10rem 30rem 20rem;
`;

export const SearchBar = styled(Row)`
  background-color: var(--gray-100);
  align-self: stretch;
  gap: 1rem;
  padding: 1rem 3rem;
  border-radius: 3rem;
`;

export const SearchBarInput = styled(InputBox).attrs({
  placeholder: '그룹 이름 검색',
  bgcolor: 'var(--gray-100)',
  fontsize: '2rem',
})`
  flex-grow: 1;
`;

export const NewGroupBtnLink = styled(Link).attrs({ to: '/makegroup' })`
  align-self: end;
  transition: background-color 0.3s;
  text-decoration: none;
`;

export const NewGroupBtn = styled(Btn).attrs({
  size: 'small',
  bgcolor: 'var(--brand-500)',
  color: 'var(--gray-000)',
})`
  gap: 1rem;
  &:hover {
    background-color: var(--brand-400);
  }
`;

export const TagContainer = styled(Wrap)`
  gap: 0.5rem 1rem;
`;
