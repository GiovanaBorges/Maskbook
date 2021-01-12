import { useAsync } from 'react-use'
import { currentSelectedGasPriceServerSettings } from '../../plugins/Wallet/settings'
import { useValueRef } from '../../utils/hooks/useValueRef'
import { getGasPrices } from '../apis'
import { useChainId } from './useChainState'

export function useGasPrice() {
    const chainId = useChainId()
    const selectedGasPriceServer = useValueRef(currentSelectedGasPriceServerSettings)

    return useAsync(async () => {
        const gasPrices = await getGasPrices(selectedGasPriceServer, chainId)
        return gasPrices.reverse()
    }, [chainId, selectedGasPriceServer])
}
