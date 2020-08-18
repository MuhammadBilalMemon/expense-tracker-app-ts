import React from "react";

//
import { Layout, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <Layout>
        <Header className="header">
          <Title level={2} style={{ textAlign: "center", paddingTop: "7px" }}>
            Expense Tracker
          </Title>
        </Header>
        {children}
      </Layout>
    </>
  );
};

export default AppLayout;
