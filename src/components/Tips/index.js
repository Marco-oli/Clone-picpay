import React from 'react';

// Styles and Images
import * as S from './styles';
import img8 from '../../assets/images/08.png';
import img9 from '../../assets/images/09.png';
import img10 from '../../assets/images/10.png';
import img11 from '../../assets/images/11.png';
import img12 from '../../assets/images/12.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#172c4a',
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#6a0159',
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#4139c8',
  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#00ab4b',
  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#ba2f76',
  },
];

const Tips = () => {
  return (
    <S.Container>
      {items.map((item) => (
        <S.Option key={item.key} bgColor={item.bgColor}>
          <S.Title>{item.title}</S.Title>

          <S.Img source={item.img} />
        </S.Option>
      ))}
    </S.Container>
  );
};

export default Tips;
