import innerInterfaceHtml from '../html/innerInterface.html';
import initInnerInterface from './initInnerInerface';

export default () => {
  const appEl = document.querySelector('.app');
  appEl.innerHTML = '';
  appEl.innerHTML = innerInterfaceHtml;

  initInnerInterface();
};
