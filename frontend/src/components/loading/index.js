/* 
  Main loader for whole application
*/

import React from 'react';

// Antd
import { Spin, Space } from 'antd';

function Loading() {
  return (
    <Space className="app-loader" size="middle">
      <Spin size="large" />
    </Space>
  );
}

export default Loading;