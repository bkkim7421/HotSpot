import { useState } from 'react';
import { Wrap, Btn, Description } from '../../../atomic';
import { TagForm, TagInput, TagSpan } from './style';

export function FieldContainer() {
  const [fieldList, setFieldList] = useState([]);
  const [fieldName, setFieldName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (fieldName.trim() !== '') {
      setFieldList([...fieldList, fieldName]);
    }
    setFieldName('');
  };

  const handleChange = (event) => {
    setFieldName(event.target.value);
  };

  const handleDelete = (index) => {
    const newList = [...fieldList];
    newList.splice(index, 1);
    setFieldList(newList);
  };

  return (
    <Wrap gap='1rem'>
      {fieldList.map((item, i) => (
        <Btn key={i} bgcolor='var(--brand-100)' size='small' onClick={() => handleDelete(i)}>
          <Description>{item}</Description>
        </Btn>
      ))}
      <TagForm onSubmit={handleSubmit}>
        <TagSpan>{fieldName}</TagSpan>
        <TagInput onChange={handleChange} value={fieldName} placeholder='분야 입력' />
      </TagForm>
    </Wrap>
  );
}
