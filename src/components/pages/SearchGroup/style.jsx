import { styled } from 'styled-components';
import { Row, Col, Wrap } from '../../atomic';
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

export const SearchBarInput = styled.input`
  background-color: var(--gray-100);
  border: 0;
  outline: none;
  flex-grow: 1;
  font-size: 2rem;
  &::placeholder {
    color: var(--gray-400);
    font-size: 2rem;
    font-family: 'SUIT', sans-serif;
  }
`;

export const NewGroupBtnLink = styled(Link)`
  align-self: end;
  transition: background-color 0.3s;
  text-decoration: none;

  & > div {
    gap: 1rem;
    &:hover {
      background-color: var(--brand-400);
    }
  }
`;

export const TagContainer = styled(Wrap)`
  gap: 0.5rem 1rem;
`;
