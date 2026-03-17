import EnLandingPage from './en/index.jsx'
import enLandingConfig from './en/config.js'
import JpLandingPage from './jp/index.jsx'
import jpLandingConfig from './jp/config.js'
import ThLandingPage from './th/index.jsx'
import thLandingConfig from './th/config.js'
import TwLandingPage from './tw/index.jsx'
import twLandingConfig from './tw/config.js'
import VnLandingPage from './vn/index.jsx'
import vnLandingConfig from './vn/config.js'

export const LANDINGS = [
  { ...enLandingConfig, component: EnLandingPage },
  { ...jpLandingConfig, component: JpLandingPage },
  { ...thLandingConfig, component: ThLandingPage },
  { ...twLandingConfig, component: TwLandingPage },
  { ...vnLandingConfig, component: VnLandingPage },
]

export const LANDING_BY_PATH = new Map(LANDINGS.map((landing) => [landing.path, landing.component]))
