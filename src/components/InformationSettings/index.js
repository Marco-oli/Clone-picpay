import React from 'react';

// Styles and Icons
import * as S from './styles';

const items = [
  {
    key: String(Math.random()),
    title: 'Meu PicPay',
    label: '@robson.duarte',
  },
  {
    key: String(Math.random()),
    title: 'Meu número',
    label: '(**) *****-3496',
  },
  {
    key: String(Math.random()),
    title: 'Meu E-mail',
    label: 'r**************@g***l.com',
  },
  {
    key: String(Math.random()),
    title: 'Dados Pessoais',
    label: 'Nome, CPF e data de nascimento',
  },
  {
    key: String(Math.random()),
    title: 'Conta Bancária',
  },
  {
    key: String(Math.random()),
    title: 'Taxas e limites',
  },
  {
    key: String(Math.random()),
    title: 'Meus endereços',
  },
];

const InformationSettings = () => {
  return (
    <>
      {items.map((item) => (
        <S.Container key={item.key}>
          <S.Title>{item.title}</S.Title>
          <S.Description>{item.label}</S.Description>
        </S.Container>
      ))}
    </>
  );
};

export default InformationSettings;
