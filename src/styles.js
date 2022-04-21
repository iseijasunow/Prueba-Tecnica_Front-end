import styled from "styled-components";
import Input from "antd/lib/input";
import Button from "antd/lib/button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-top: 15px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 35%;
  margin-bottom: 35px;
`;

export const InputBase = styled(Input)`
  width: 70%;
`;

export const ButtonBase = styled(Button)`
  margin: ${(props) => props.margin ?? "0"};
  width: ${(props) => props.width ?? "auto"};
`;

export const TableContainer = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;

  .ant-table-wrapper {
    width: 100%;
  }

  tr,
  tr > th {
    text-align: center;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 35%;
  gap: 10px;

  p {
    margin: 0;
    padding: 0;
  }
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  h1 {
    margin: 0;
  }
`;

export const ContaierCharts = styled.div`
  max-width: ${(props) => props.maxWidth ?? "627px"};
  width: 100%;
  background: #fcfdfd;
  border-radius: 16px;
  padding: 30px 24px 32px 24px;
`;

export const ChartTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #35403b;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
