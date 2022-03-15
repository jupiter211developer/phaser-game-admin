import React from "react";
import { Button, Form, Input, Select } from "antd";

const { Option } = Select;

export default function AccountForm({ isUpdateForm = false }) {

  return (
    <>
      <Form.Item
        label="Team Name"
        name="team_name"
        rules={[
          {
            required: true,
            message: "Please input your team name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Team Logo"
        name="team_logo"
        rules={[
          {
            required: true,
            message: "Please choose a team logo!",
          },
        ]}
      >
        <Select defaultValue="" onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
      </Select>
      </Form.Item>
    </>
  );

  function handleChange() {
    
  }
}
