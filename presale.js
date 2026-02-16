
let provider;
let signer;
let userAddress;

const connectBtn = document.getElementById("connectBtn");
const buyBtn = document.getElementById("buyBtn");
const statusText = document.getElementById("status");

connectBtn.onclick = async () => {
    if(!window.ethereum){
        alert("MetaMask não encontrada");
        return;
    }

    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    signer = provider.getSigner();
    userAddress = await signer.getAddress();

    document.getElementById("walletAddress").innerText = userAddress;
    document.getElementById("walletBox").classList.remove("hidden");

    statusText.innerText = "Carteira conectada ✅";
};

buyBtn.onclick = async () => {
    try{
        const amount = document.getElementById("amount").value;

        if(!amount || amount <= 0){
            alert("Digite um valor válido");
            return;
        }

        const tx = await signer.sendTransaction({
            to: CONFIG.PRESALE_WALLET,
            value: ethers.utils.parseEther(amount)
        });

        statusText.innerText = "Pagamento enviado. Aguardando confirmação...";
        await tx.wait();

        statusText.innerText = "✅ Compra realizada com sucesso!";
    }catch(err){
        console.error(err);
        statusText.innerText = "Erro ao realizar pagamento.";
    }
};
