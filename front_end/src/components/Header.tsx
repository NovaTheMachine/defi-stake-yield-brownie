import { useEthers } from "@usedapp/core";

export const Header = () => {
    const { account, activateBrowserWallet, deactivate } = useEthers()

    const iConnected = account !== undefined
    return (
        <div>
            {isConnected ?
                <button>
                    onClick = {deactivate}
                    disconnect
                </button>
        
        }
        </div>
    )
}