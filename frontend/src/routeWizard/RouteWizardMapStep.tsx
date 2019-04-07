import React, { Component, useState } from 'react';
import {
  Form,
  Switch,
  Button,
  InputNumber,
  Typography,
  TimePicker,
} from 'antd';
import styled from 'styled-components';
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
  onSubmit: () => void;
  config: { title: string };
}) => {
  return (
    <div>
      <Title style={{ textAlign: 'center' }}>
        {config.title}
      </Title>
      <Form {...formItemLayout}>
        <MapPicker onChange={() => null} />

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
          <Switch defaultChecked />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          style={{ width: '100%' }}
          onClick={() => onSubmit()}
        >
          Zatwierdź
        </Button>
      </Form>
    </div>
  );
};
