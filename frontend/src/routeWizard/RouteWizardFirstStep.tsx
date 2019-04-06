import React, { Component, useState } from 'react';
import { Form, Switch, Button, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const Buttons = styled.div`
  & > * {
    min-width: 8rem;
    margin: 0.5rem;
  }
`;

export const RouteWizardFirstStep = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Title>Czy wykonujesz tę trasę codziennie?</Title>

      <Buttons>
        <Button type="primary" size="large">
          TAK
        </Button>

        <Button type="default" size="large">
          NIE
        </Button>
      </Buttons>
    </div>
  );
};
