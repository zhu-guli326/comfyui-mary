import React from 'react'
import { Box, keyframes } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Button from '@chakra-ui/react'
import MusicPlayer from './MusicPlayer';

// ... 其他导入和样式定义保持不变 ...

export default function Generator(props: any) {
  const handleGenerate = () => {
    if (typeof window.startGenerating === 'function') {
      window.startGenerating();
    }
    // 其他生成逻辑
  };

  return (
    <Box position="relative" {...props}>
      {/* 现有的生成器内容 */}
      <EmojiBar />
      <Button onClick={handleGenerate}>生成</Button>
      <div className="absolute top-4 right-4 z-10">
        <MusicPlayer />
        {/* ... 现有的设置按钮等 ... */}
      </div>
    </Box>
  )
}