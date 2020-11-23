import { ChainId } from '../../../web3/types'

export * from './trending'
export * from './uniswap'

export const TRADE_CONSTANTS = {
    // contracts
    ROUTER_V2_ADDRESS: {
        [ChainId.Mainnet]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        [ChainId.Ropsten]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        [ChainId.Rinkeby]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        [ChainId.Kovan]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    },
}

export const MIN_SLIPPAGE_TOLERANCE = 10 // bips
export const DEFAULT_SLIPPAGE_TOLERANCE = 50 // bips
export const MAX_SLIPPAGE_TOLERANCE = 500 // bips
