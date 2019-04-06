import React, { Component, useState } from 'react';
import { Form, Switch, Button, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const Buttons = styled.div`
  & > * {
    min-width: 12rem;
    margin: 0.5rem;
  }
`;

export const RouteWizardQuestionStep = ({
  question,
  onPick,
}: {
  question: string;
  onPick: (result: boolean) => void;
}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Title>{question}</Title>

      <Buttons>
        <Button type="primary" size="large" onClick={() => onPick(true)}>
          TAK
        </Button>

        <Button type="default" size="large" onClick={() => onPick(false)}>
          NIE
        </Button>
      </Buttons>
    </div>
  );
};
