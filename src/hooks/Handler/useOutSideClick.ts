
import React, { Ref, useEffect } from 'react'

interface useOutSideClickProps {
  ref: any
  closeHandler: () => void
}

const useOutSideClick = ({ref, closeHandler}) => {
  useEffect(() => {
    const eventListner = (event: { target: any }) => {
      if (!ref.current || ref.current.contains(event.target)) return
      closeHandler(event)
    }

    document.addEventListener("mousedown", eventListner)
    document.addEventListener("touchstart", eventListner)
  
    return () => {
      document.removeEventListener("mousedown", eventListner)
    document.removeEventListener("touchstart", eventListner)
    }
  }, [closeHandler, ref])
  
}

export default useOutSideClick