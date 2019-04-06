import React, { Component, useState } from 'react';
import { Form, Switch, Button } from 'antd';
import styled from 'styled-components';
import { RouteWizardQuestionStep } from './RouteWizardQuestionStep';
import { RouteWizardMapStep } from './RouteWizardMapStep';
import { RouteWizardTimePickerStep } from './RouteWizardTimePickerStep';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > * {
    width: 500px;
  }
`;

export const RouteWizard = () => {
  const [step, setStep] = useState<number>(0);
  const [properties, setProperties] = useState<object[]>([]);

  const nextStep = () => setStep(state => state + 1);

  const PrevButton = () => (
    <Button
      type="default"
      onClick={() => setStep(state => state - 1)}
      style={{ width: '100%', marginTop: 10 }}
    >
      Wstecz
    </Button>
  );

  return (
    <Container>
      {step === 0 && (
        <RouteWizardQuestionStep
          question="Czy wykonujesz tę trasę codziennie?"
          onPick={result => {
            setProperties(state => [
              ...state,
              { kind: 'periodic', properties: result },
            ]);
            nextStep();
          }}
        />
      )}
      {step === 1 && (
        <RouteWizardQuestionStep
          question="Czy możesz być kierowcą?"
          onPick={result => {
            setProperties(state => [
              ...state,
              { kind: 'periodic', properties: false },
            ]);
            nextStep();
          }}
        />
      )}
      {step === 2 && (
        <div>
          <RouteWizardTimePickerStep
            onSubmit={() => nextStep()}
            config={{
              title: 'O której godzinie chcesz wyjechać?',
            }}
          />
          <PrevButton />
        </div>
      )}
      {step === 3 && (
        <div>
          <RouteWizardMapStep
            onSubmit={() => nextStep()}
            config={{
              title: 'Skąd odjeżdżasz?',
            }}
          />
          <PrevButton />
        </div>
      )}
      {step === 4 && (
        <div>
          <RouteWizardTimePickerStep
            onSubmit={() => nextStep()}
            config={{
              title: 'O której godzinie chcesz dotrzeć?',
            }}
          />
          <PrevButton />
        </div>
      )}
      {step === 5 && (
        <div>
          <RouteWizardMapStep
            onSubmit={() => nextStep()}
            config={{
              title: 'Dokąd chcesz dotrzeć?',
            }}
          />
          <PrevButton />
        </div>
      )}
    </Container>
  );
};
