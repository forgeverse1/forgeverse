let provider;
let signer;
let userAddress;

const polygonChainId = "0x89"; // Polygon Mainnet

async function connectWallet(){
    const status = document.getElementById("status");

    if(typeof window.ethereum === "undefined"){
        alert("Abra dentro da MetaMask ou Trust Wallet.");
        return;
    }

    try{
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);

        // switch to Polygon automatically
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: polygonChainId }],
        });

        signer = provider.getSigner();
        userAddress = await signer.getAddress();

        document.getElementById("connectBtn").innerText =
            userAddress.slice(0,6)+"..."+userAddress.slice(-4);

        status.innerText = "✅ Carteira conectada";
    }catch(err){
        console.error(err);
        status.innerText = "Erro ao conectar carteira";
    }
}

async function buyTokens(){
    const status = document.getElementById("status");
    const amount = document.getElementById("amount").value;

    if(!amount || amount <= 0){
        alert("Digite um valor válido.");
        return;
    }

    try{
        const tx = await signer.sendTransaction({
            to: "0xf39eaefc669fde85ab13c262279ae267faf034b8",
            value: ethers.utils.parseEther(amount)
        });

        status.innerText = "⛓ Enviando transação...";
        await tx.wait();

        status.innerText = "🚀 Compra confirmada!";
    }catch(err){
        console.error(err);
        status.innerText = "Erro ao realizar pagamento.";
    }
}

document.getElementById("connectBtn").onclick = connectWallet;
document.getElementById("buyBtn").onclick = buyTokens;
