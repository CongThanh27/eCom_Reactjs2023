import { notification } from 'antd';
import React, { useEffect } from 'react';
import Buybtn from "../components/Buybtn";
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Bạn có hài lòng với sản phẩm này?`,
      description: <p>Nhấn mua ngay</p>,
      placement,
    });
  };
  useEffect(() => {
    openNotification('bottomRight');
  }, []);

  return (
    <>
      {contextHolder}     
    </>
  );
};

export default App;
