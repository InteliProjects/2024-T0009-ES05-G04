import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/usersService";
import logoImage from "../../assets/logo-gf.png";
import { LoginContainer } from "./styles";
import { StyledImage } from "./styles";
import { StyledForm } from "./styles";

export const Login = () => {
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");

  const { login: contextLogin } = useAuth();

  const onFinish = async (data) => {
    try {
      const response = await login(data.email, data.senha);
      const { userId, roleId, ongId } = response;
      contextLogin(userId, roleId, ongId);
      setLoginError("");
      if (roleId === 1) {
        return navigate("/turmas");
      } else if (roleId === 2) {
        return navigate("/dados");
      } else if (roleId === 3) {
        return navigate("/ongs");
      } 

    } catch (error) {
      setLoginError("Falha no login. Verifique suas credenciais.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <LoginContainer>
      <StyledImage src={logoImage} alt="Logo" />
      <StyledForm
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          label="E-mail:"
          name="email"
          rules={[
            {
              validator: (_, value) => {
                if (!value) {
                  return Promise.reject("Insira seu e-mail.");
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Senha:"
          name="senha"
          rules={[
            {
              validator: (_, value) => {
                if (!value) {
                  return Promise.reject("Insira sua senha.");
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {loginError && (
          <p style={{ color: "red", textAlign: "center" }}>{loginError}</p>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Fazer login
          </Button>
        </Form.Item>
      </StyledForm>
    </LoginContainer>
  );
};
