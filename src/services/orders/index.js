
const { DEV, VITE_LOCAL } = import.meta.env

import { ordersService as local } from './orders.service.local'
import { ordersService as remote } from './orders.service.remote'


export const ordersService = VITE_LOCAL === 'true' ? local : remote


// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.ordersService = ordersService
