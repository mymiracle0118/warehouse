import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Card, Typography } from "antd";
const { Title } = Typography;
import { useAuth } from "../../hooks/useAuth";
import messages from "../../utils/content/jp.json";
import { openNotificationWithIcon } from "../common/notification";
// import AlertComponent from "../common/alert";

const LoginForm = () => {
  const navigate = useNavigate();

  const { loginAction } = useAuth();

  const onFormSubmit = ({ login_id, password }) => {
    loginAction({ user: { login_id, password } });
  };

  // useEffect(() => {
  //   if (loginErrors != null && !beforeRequest) {
  //     openNotificationWithIcon("error", "error", loginErrors);
  //     setBeforeRequestAction(true);
  //   } else if (loginErrors == null && !beforeRequest) {
  //     navigate("/home");
  //   } else {
  //   }
  // }, [loginErrors, beforeRequest]);

  return (
    <div className="mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-sm ">
      <div className="flex flex-col justify-center h-full min-h-screen gap-6 xs:gap-7 xs:mt-0">
        <Title
          level={4}
          className="text-center"
          style={{ marginTop: 10, marginBottom: 20 }}
        >
          {messages.SiteInfo.title}
        </Title>
        <Card className="py-4">
          <Title
            level={5}
            className="text-center"
            style={{ marginTop: 10, marginBottom: 40 }}
          >
            {messages.pages.login}
          </Title>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFormSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label={messages.LoginFields.username}
              name="login_id"
              rules={[
                { required: true, message: messages.messages.type_username },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={messages.LoginFields.password}
              name="password"
              rules={[
                { required: true, message: messages.messages.type_password },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button htmlType="submit" className="btn-bg-black">
                {messages.buttons.login}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
