import React from 'react'
import { useGlobalStore } from '../store/global'
import { Box, Image, keyframes } from '@chakra-ui/react'
import styled from '@emotion/styled'

const walkAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(20px); }
`

const WalkingMario = styled(Image)`
  animation: ${walkAnimation} 0.5s infinite alternate;
`

export const MusicToggle: React.FC = () => {
  const { isMusicEnabled, toggleMusic } = useGlobalStore()

  return (
    <Box
      position="fixed"
      bottom="70px"
      right="20px"
      zIndex={1000}
      cursor="pointer"
      onClick={toggleMusic}
    >
      <WalkingMario
        src="/mario.png"
        alt="Mario"
        width="40px"
        height="40px"
        opacity={isMusicEnabled ? 1 : 0.5}
      />
    </Box>
  )
}