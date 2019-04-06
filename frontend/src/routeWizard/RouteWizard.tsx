import React, { Component, useState } from 'react';
import { Form, Switch, Button } from 'antd';
import styled from 'styled-components';
import { RouteWizardFirstStep } from './RouteWizardFirstStep';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RouteWizard = () => {
  const [step, setStep] = useState(0);

  return (
    <Container>
      {step === 0 && <RouteWizardFirstStep />}
    </Container>
  );
};
