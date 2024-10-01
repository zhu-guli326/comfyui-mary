import React from 'react';

const titleStyle: React.CSSProperties = {
  fontSize: '3rem',
  color: '#FFD700', // 金色
  textShadow: '2px 2px 4px #FF4500', // 红色阴影
  fontFamily: 'Arial, sans-serif',
  marginBottom: '20px',
  animation: 'glow 1s ease-in-out infinite alternate'
};

export default function Home() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px',
      backgroundColor: '#1e2a3a', // 深蓝色背景
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <style jsx global>{`
        @keyframes glow {
          from { text-shadow: 2px 2px 4px #FF4500; }
          to { text-shadow: 0 0 8px #FF4500, 0 0 12px #FF4500; }
        }
      `}</style>
      <h1 style={titleStyle}>超级玛丽AI图像生成器</h1>
      {/* 其他组件 */}
    </div>
  );
}