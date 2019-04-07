import React, { useState } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { RouteWizardQuestionStep } from './RouteWizardQuestionStep';
import { RouteWizardMapStep } from './RouteWizardMapStep';
import { RouteWizardTimePickerStep } from './RouteWizardTimePickerStep';
import { IRoute } from '../../../models/iRoute';
import {
  DriverPreference, DropOffTimePreference,
  IPreference,
  PeriodicPreference, PickupLocationPreference,
  PickupTimePreference,
} from '../../../models/iPreference';
import { config } from '../shared/Config';
import { post } from '../shared/Post';

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

const routeSender = (route: Partial<IRoute>) =>
  post(`${config.api}/routes`, route);

export const RouteWizard = () => {
  const [step, setStep] = useState<number>(0);
  const [preferences, setPreferences] = useState<IPreference<any>[]>([]);

  const nextStep = () => setStep(state => state + 1);

  const PrevButton = () => (
    <Button
      htmlType="button"
      type="default"
      onClick={() => setStep(state => state - 1)}
      style={{ width: '100%', marginTop: 10 }}
    >
      Wstecz
    </Button>
  );

  if (step === 6) {
    routeSender({ preferences }).then(() => nextStep());
  }

  return (
    <Container>
      {step === 0 && (
        <RouteWizardQuestionStep
          question="Czy pokonujesz tę trasę codziennie?"
          onPick={result => {
            setPreferences(state => [
              ...state,
              { kind: 'Periodic', properties: result } as PeriodicPreference,
            ]);
            nextStep();
          }}
        />
      )}
      {step === 1 && (
        <RouteWizardQuestionStep
          question="Czy możesz być kierowcą?"
          onPick={result => {
            setPreferences(state => [
              ...state,
              { kind: 'Driver', properties: result } as DriverPreference,
            ]);
            nextStep();
          }}
        />
      )}
      {step === 2 && (
        <div>
          <RouteWizardTimePickerStep
            onSubmit={properties => {
              setPreferences(state => [
                ...state,
                { kind: 'PickupTime', properties } as PickupTimePreference,
              ]);
              nextStep();
            }}
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
            onSubmit={properties => {
              setPreferences(state => [
                ...state,
                { kind: 'PickupLocation', properties } as PickupLocationPreference,
              ]);
              nextStep();
            }}
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
            onSubmit={properties => {
              setPreferences(state => [
                ...state,
                { kind: 'DropoffTime', properties } as DropOffTimePreference,
              ]);
              nextStep();
            }}
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
            onSubmit={properties => {
              setPreferences(state => [
                ...state,
                { kind: 'PickupLocation', properties } as PickupLocationPreference,
              ]);
              nextStep();
            }}
            config={{
              title: 'Dokąd chcesz dotrzeć?',
            }}
          />
          <PrevButton />
        </div>
      )}
      {step === 7 && <div>Dzięki</div>}
      <div>{JSON.stringify({preferences})}</div>
    </Container>
  );
};
