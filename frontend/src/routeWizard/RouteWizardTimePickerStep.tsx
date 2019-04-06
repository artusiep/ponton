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

export const RouteWizardTimePickerStep = ({
  onSubmit,
  config,
}: {
  onSubmit: () => void;
  config: { title: string };
}) => {
  return (
    <div>
      <Title style={{ textAlign: 'center' }}>{config.title}</Title>
      <Form {...formItemLayout}>
        <Form.Item label="Preferowany czas">
          <TimePicker size="large" placeholder="Czas" format="HH:mm" />
        </Form.Item>
        <Form.Item label="Dopuszczalne odchylenie">
          <InputNumber size="large" min={5} max={30} defaultValue={10} />
          <span className="ant-form-text"> w minutach</span>
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
