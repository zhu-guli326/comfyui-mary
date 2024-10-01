import React from 'react';

const titleStyle: React.CSSProperties = {
  fontSize: '3rem',
  padding: '10px',
  borderRadius: '10px',
  display: 'inline-block',
  animation: 'color-scale 3s infinite'
};

export function Ref() {
  return (
    <div style={{ textAlign: 'center' }}>
      <style>
        {`
          @keyframes color-scale {
            0%, 100% { color: red; background-color: yellow; transform: scale(1); }
            50% { color: yellow; background-color: red; transform: scale(1.05); }
          }
        `}
      </style>
      <h1 style={titleStyle}>
        超级玛丽AI图像生成器
      </h1>
    </div>
  );
}