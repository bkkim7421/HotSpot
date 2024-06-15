import { styled } from 'styled-components';

const TypoRef = styled.div`
  color: ${(p) => (p.color ? `var(${p.color})` : `var(--gray-1000)`)};
  word-break: keep-all;
`;

export const Title = styled(TypoRef)`
  font-size: 6.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Header1 = styled(TypoRef)`
  font-size: 4.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Header2 = styled(TypoRef)`
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Header3 = styled(TypoRef)`
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Description = styled(TypoRef)`
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Detail = styled(TypoRef)`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
