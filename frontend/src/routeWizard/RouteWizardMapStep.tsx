import React from 'react';
import { Button, Form, Switch, Typography } from 'antd';
import { MapPicker } from '../components/MapPicker';

const { Title, Text } = Typography;

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

export const RouteWizardMapStep = ({
  onSubmit,
  config,
}: {
  onSubmit: (value: { lat: number; lon: number; radius: number }) => void;
  config: { title: string };
}) => {
  const [state, setState] = React.useState({
    lat: 0,
    lon: 0,
    radius: 500,
  });

  return (
    <div>
      <Title style={{ textAlign: 'center' }}>{config.title}</Title>
      <Form {...formItemLayout}>
        <MapPicker
          onChange={value =>
            setState(state => ({
              ...state,
              lat: value ? value.lat : 0,
              lon: value ? value.lng : 0,
            }))
          }
          height={400}
          width={500}
        />

        <Text
          type="secondary"
          style={{ maxWidth: '400px', display: 'block', marginTop: 10 }}
        >
          <small>
            Aby najlepiej dopasować Twoją trasę do istniejących, możemy wymagać
            lekkiego przesunięcia wybranego punktu. Jeśli Ci to nie odpowiada,
            wyłącz poniższą opcję.
          </small>
        </Text>
        <Form.Item label="Poszerzony zasięg">
          <Switch
            defaultChecked
            onChange={checked =>
              setState(state => ({
                ...state,
                radius: checked ? 500 : 0,
              }))
            }
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          style={{ width: '100%' }}
          onClick={() => onSubmit(state)}
        >
          Zatwierdź
        </Button>
      </Form>
    </div>
  );
};
