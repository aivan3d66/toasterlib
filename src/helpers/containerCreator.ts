export const containerCreator = () => {
  const body = document.getElementsByTagName('body')[0] as HTMLBodyElement
  const toastContainer = document.createElement('div') as HTMLDivElement
  toastContainer.id = 'modal-root'
  body.insertAdjacentElement('beforeend', toastContainer)
  return toastContainer
}
