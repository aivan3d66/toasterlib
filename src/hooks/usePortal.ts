import { useEffect, useState } from 'react'

export const usePortal = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false)
  const portalContainer: string = 'modal-root'

  useEffect(() => {
    const div: any = document.createElement('div')
    div.id = portalContainer

    document.getElementsByTagName('body')[0].appendChild(div)
    setIsLoad(true)

    return () => document.getElementsByTagName('body')[0].removeChild(div)
  }, [portalContainer])

  return { isLoad, portalContainer }
}
