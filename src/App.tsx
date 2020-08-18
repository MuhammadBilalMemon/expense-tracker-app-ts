import React from "react";
import "./App.css";

import AppLayout from "./components/AppLayout";

import { Row, Col } from "antd";

function App() {
  return (
    <AppLayout>
      <Row justify="center" align="middle" style={{ height: "90vh" }}>
        <Col span={12}>
          <h1>App Component</h1>
        </Col>
        <Col span={12}>
          <h1>App Component</h1>
        </Col>
      </Row>
    </AppLayout>
  );
}

export default App;
