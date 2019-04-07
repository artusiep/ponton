import React from 'react';
import { Button, Form, InputNumber, TimePicker, Typography } from 'antd';

const { Title } = Typography;

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

export const RouteWizardTimePickerStep = ({
  onSubmit,
  config,
}: {
  onSubmit: (value: {
    time: { hour: number; minute: number };
    offset: { before: number; after: number };
  }) => void;
  config: { title: string };
}) => {
  const [state, setState] = React.useState({
    time: { hour: 0, minute: 0 },
    offset: { before: 10, after: 10 },
  });

  return (
    <div>
      <Title style={{ textAlign: 'center' }}>{config.title}</Title>
      <Form {...formItemLayout}>
        <Form.Item label="Preferowany czas">
          <TimePicker
            size="large"
            placeholder="Czas"
            format="HH:mm"
            onChange={value =>
              setState(state => ({
                ...state,
                time: { hour: value.hour(), minute: value.minute() },
              }))
            }
          />
        </Form.Item>
        <Form.Item label="Dopuszczalne odchylenie">
          <InputNumber
            size="large"
            min={5}
            max={30}
            defaultValue={10}
            onChange={value =>
              setState(state => ({
                ...state,
                offset: { before: value || 0, after: value || 0 },
              }))
            }
          />
          <span className="ant-form-text"> w minutach</span>
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
