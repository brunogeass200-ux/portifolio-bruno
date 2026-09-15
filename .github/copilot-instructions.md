# Sincronizacao do repositorio

Depois de concluir uma alteracao solicitada pelo usuario neste repositorio:

1. Verifique `git status` e inclua somente os arquivos relacionados ao pedido.
2. Nao inclua segredos, credenciais, arquivos `.env`, caches ou arquivos temporarios.
3. Crie um commit com uma mensagem curta e descritiva.
4. Execute `git pull --rebase origin main` antes do envio.
5. Execute `git push origin main` e confirme que a branch local ficou sincronizada.

Se houver conflito, falha de autenticacao ou alteracao inesperada de outro usuario, pare antes do push e informe o problema.