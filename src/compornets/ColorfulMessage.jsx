import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

// デフォルトエクスポートの時は、インポート先で名前を自由に変えられる
// 普段はデフォルトは使わない方が良いかも
// export default ColorfulMessage;
