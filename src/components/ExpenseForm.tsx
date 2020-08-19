import React from "react";
import { Row, Col, Input, Card, InputNumber, Button, Select } from "antd";
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { transactionAdded } from "../store/transactions";
import { Transaction, TransactionType } from "../model/Transaction";

const { Option } = Select;

const ExpenseForm: React.FC = () => {
  const dispatch = useDispatch();

  const handleTransactionForm = (data: any) => {
    const amount =
      data.transactionType === "income" ? +data.amount : -data.amount;

    const transaction: Transaction = {
      id: uuidv4(),
      name: data.name,
      amount,
      transactionType: data.transactionType,
    };

    dispatch(transactionAdded(transaction));
  };

  return (
    <>
      <Row justify="center" align="middle">
        <Card
          bordered={true}
          style={{
            minHeight: "15rem",
            minWidth: "30rem",
            margin: "2rem 0",
            padding: "1rem",
            borderRadius: "10px",
          }}
        >
          <Row justify="start" align="middle">
            <Col>
              <h3>Expense Name</h3>
              <Input
                style={{ width: 400 }}
                size="large"
                placeholder="Expense Name"
              />
            </Col>
          </Row>
          <Row justify="start" align="middle">
            <Col>
              <h3 style={{ paddingTop: "10px" }}>Expense Type</h3>
              <Select
                style={{ width: 200 }}
                size="large"
                showSearch
                placeholder="Select Type"
              >
                <Option value="income">Income</Option>
                <Option value="expense">Expense</Option>
              </Select>
            </Col>
          </Row>
          <Row justify="start" align="middle">
            <Col>
              <h3 style={{ paddingTop: "10px" }}>Expense Amount</h3>
              <InputNumber
                style={{ width: 400 }}
                size="large"
                defaultValue={0}
                min={0}
                max={10000000000000000}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
              />
            </Col>
          </Row>
          <Row justify="start" align="bottom" style={{ paddingTop: "10px" }}>
            <Col>
              <Button
                type="primary"
                size="large"
                style={{ background: "#73d13d", border: "#73d13d", outline: 0 }}
                onClick={handleTransactionForm}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Card>
      </Row>
    </>
  );
};

export default ExpenseForm;
