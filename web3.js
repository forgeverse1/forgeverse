let provider;
let signer;
let userAddress;

async function connectWallet() {
    if (!window.ethereum) {
        alert("Instale MetaMask ou Trust Wallet");
        return;
    }

    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    signer = provider.getSigner();
    userAddress = await signer.getAddress();

    document.getElementById("walletAddress").innerText =
        userAddress.slice(0,6) + "..." + userAddress.slice(-4);

    document.getElementById("playerInfo").classList.remove("hidden");
    document.getElementById("mineBtn").classList.remove("hidden");

    document.getElementById("status").innerText = "Carteira conectada ✔";
}

document.getElementById("connectBtn").onclick = connectWallet;
