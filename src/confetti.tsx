import React from 'react'
import Confetti from 'react-confetti'
import { useWindowWidth,
    useWindowHeight} from '@react-hook/window-size'

export default () => {
    const onlyWidth = useWindowWidth()
    const onlyHeight = useWindowHeight()

  return (
    <Confetti
      width={onlyWidth}
      height={onlyHeight}
      colors={['#75aadb', '	#ffffff', '#ffef00']}
      gravity={0.05}
    />
  )
}