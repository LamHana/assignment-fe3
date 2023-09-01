import { Table } from "antd";
import { useEffect, useState } from "react";

const CallAPI = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];
  const dataSource = [];
  data?.map((user, index) => {
    dataSource.push({ key: index, name: user?.name, email: user?.email });
  });
  return (
    <Table
      pagination={{
        position: ["none", "none"],
      }}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default CallAPI;
