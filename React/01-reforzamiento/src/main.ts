import './style.css'

import './bases/09-promises';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello Vite!</h1>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
