import { styled } from 'styled-components';
import { InputBox } from '../../../common/InputBox';

export const TagForm = styled.form`
  display: inline-block;
  width: max-content;
  overflow: hidden;
  padding: 1.3rem 2rem;
  border-radius: 2.5rem;
  position: relative;
  background-color: var(--brand-100);

  font-size: 2rem;
`;

export const TagInput = styled(InputBox).attrs({
  bgcolor: 'transparent',
  fontsize: '2rem',
  placeholdersize: '1.6rem',
})`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  padding: inherit;
  font-size: inherit;
  text-align: center;
`;

export const TagSpan = styled.span`
  white-space: pre;
  display: inline-block;
  position: relative;
  opacity: 0;
  min-width: 6rem;
`;
