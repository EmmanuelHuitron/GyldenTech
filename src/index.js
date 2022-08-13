import { createRoot } from 'react-dom/client'
import { IntlProvider } from 'react-intl'
import { getCookie, setCookie } from './utils/cookie'
import './index.css'
import App from './App'

import en from './lang/en.json'
import es from './lang/es.json'

let local = getCookie('lang')
let messages
if (!local) {
  local = 'es-ES'
  setCookie('lang', 'es-ES')
  location.reload()
} else {
  if (local === 'es-ES') {
    messages = es
    setCookie('lang', local)
  } else {
    messages = en
    setCookie('lang', local)
  }
}

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <IntlProvider locale={local} messages={messages} defaultLocale="es-ES">
    <App tab="home" />
  </IntlProvider>,
)
