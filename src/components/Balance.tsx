import React from "react";
import { Row, Card, Empty } from "antd";

const Balance = () => {
  return (
    <>
      <Row justify="center" align="middle">
        <Card
          bordered={true}
          style={{
            minHeight: "15rem",
            minWidth: "30rem",
            margin: "2rem",
            padding: "1rem",
            borderRadius: "10px",
          }}
        >
          <Empty description={false} />
        </Card>
      </Row>
    </>
  );
};

export default Balance;
