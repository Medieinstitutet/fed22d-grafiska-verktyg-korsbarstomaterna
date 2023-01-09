const initScript = () => {
  const documentElement = document.querySelector('#vite') as HTMLParagraphElement;
  documentElement.innerHTML = 'Hello from Vite';
};

initScript();
export default initScript;
