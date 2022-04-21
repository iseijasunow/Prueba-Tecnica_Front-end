import { Result, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Error404Component() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Go Home</Link>
        </Button>
      }
    />
  );
}
