import { useEffect, useState } from 'react'

export const usePortal = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false)
  const portalContainer: string = 'modal-root'

  useEffect(() => {
    const div = document.createElement('div') as any
    div.id = portalContainer

    document.getElementsByTagName('body')[0].appendChild(div)
    setIsLoad(true)

    return () => document.getElementsByTagName('body')[0].removeChild(div)
  }, [])

  return { isLoad, portalContainer }
}
