import React from "react";
import "./App.css";

import AppLayout from "./components/AppLayout";
import ExpenseForm from "./components/ExpenseForm";
import Balance from "./components/Balance";

import { Row, Col } from "antd";

function App() {
  return (
    <AppLayout>
      <Row justify="center" align="top" style={{ height: "100vh" }}>
        <Col span={9}>
          <ExpenseForm />
        </Col>
        <Col span={9}>
          <Balance />
        </Col>
      </Row>
    </AppLayout>
  );
}

export default App;
