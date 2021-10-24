import React from "react";
import { Form, Input, InputNumber, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function ContactUs() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div
      style={{
        display: "flex",
        padding:"20px",
        margin:"90px 10px",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "800px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div>
        <h1 style={{ color: "white" }}>Have a Project to discuss?</h1>
        <h1 style={{ color: "white" }}>Get in touch.</h1>
      </div>
      <div>
        <Form
          style={{ width: "600px" }}
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            rules={[{ required: true }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Input.Group compact>
          <Form.Item
           style={{width:"40%"}}
            name={["user", "email"]}
            rules={[{ type: "email" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
          style={{width:"40%"}}
            name={["user", "phone"]}
          >
            <Input placeholder="Phone" />
          </Form.Item>
          </Input.Group>

          <Form.Item name={["user", "message"]} >
            <Input.TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
            <Button style={{backgroundColor:"white", color:"black", width:"200px", height:"40px"}} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ContactUs;
