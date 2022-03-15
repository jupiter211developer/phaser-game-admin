import React from "react";
import { Button, Form, Input } from "antd";

export default function AccountForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Country"
        name="country"
        rules={[
          {
            required: true,
            message: "Please input your country!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Total Point"
        name="total_point"
        rules={[
          {
            required: true,
            message: "Please input your total point!",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingLeft: "5px",
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Current Point"
        name="cur_point"
        rules={[
          {
            required: true,
            message: "Please input your total point!",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingLeft: "5px",
        }}
      >
        <Input />
      </Form.Item>
    </>
  );
}
