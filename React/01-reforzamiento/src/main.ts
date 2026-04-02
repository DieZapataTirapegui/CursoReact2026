import './style.css'

import './bases/03-object-literal';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello Vite!</h1>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
