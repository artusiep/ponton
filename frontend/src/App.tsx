import * as React from 'react';
import './App.css';
import { RouteWizard } from './routeWizard/RouteWizard';
import { Button, PageHeader } from 'antd';
import { UserProfileDisplay } from './components/UserProfileDisplay';
import { Rides } from './rides/Rides';

const users = [
  'Fascynujący Wozniak',
  'Zmartwiony Tesla',
  'Wykwintny Einstein',
  'Kompetentny Waszyngton',
];

let currentId = 0;

const App = () => {
  const [state, setState] = React.useState({
    routeWizardKey: Math.random(),
    site: 'wizard',
    user: 'Fascynujący Wozniak' || users[currentId],
  });

  return (
    <div>
      <PageHeader
        title="Ponton"
        subTitle="pozostań mobilny"
        extra={[
          <Button
            key="1"
            type="primary"
            onClick={() =>
              setState(state => ({
                ...state,
                site: 'wizard',
                routeWizardKey: Math.random(),
              }))
            }
          >
            Zaplanuj trasę
          </Button>,
          <Button
            key="2"
            type="danger"
            onClick={() =>
              setState(state => ({
                ...state,
                site: 'rides',
              }))
            }
          >
            Przejazdy
          </Button>,
          <UserProfileDisplay key="3" user={state.user} />,
          <Button
            key="4"
            type="ghost"
            onClick={() =>
              setState(state => ({
                ...state,
                user: users[++currentId % users.length],
              }))
            }
          >
            USR
          </Button>,
        ]}
      />

      {state.site === 'wizard' && (
        <RouteWizard key={state.routeWizardKey} user={state.user} />
      )}

      {state.site === 'rides' && <Rides user={state.user} />}
    </div>
  );
};

export default App;
