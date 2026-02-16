# Criar estrutura de pastas
mkdir -p forgeverse/{client,server,contracts}

# Baixar tudo de uma vez (Windows PowerShell)
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/forgeverse/game/main/forgeverse.zip" -OutFile "forgeverse.zip"

# Ou no Linux/Mac
wget https://raw.githubusercontent.com/forgeverse/game/main/forgeverse.zip
unzip forgeverse.zip