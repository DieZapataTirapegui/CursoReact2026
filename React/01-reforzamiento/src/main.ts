import './style.css'

import './bases/05-functions';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello Vite!</h1>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
