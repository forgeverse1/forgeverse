
const CONFIG = {
  tokenContract: "0x50151553b0772b579a7b906f43e21F768d075bE5",
  treasuryWallet: "0x52919f000897c8a8b15a1b607eae6024c00dbb1a"
};

document.getElementById("contract").innerText = CONFIG.tokenContract;
document.getElementById("treasury").innerText = CONFIG.treasuryWallet;

async function connectWallet() {
  try {
    if (!window.ethereum) {
      alert("MetaMask não encontrado");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const wallet = accounts[0];

    document.getElementById("wallet").innerText =
      "Carteira conectada: " + wallet;

  } catch (err) {
    console.error(err);
    alert("Erro ao conectar");
  }
}
