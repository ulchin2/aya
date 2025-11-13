# Iniciando (Create React App)

Este diretório contém a aplicação frontend criada com Create React App (CRA). Abaixo estão os scripts mais comuns para desenvolvimento, testes e build.

## Scripts disponíveis

No diretório do projeto (`aya/`), você pode executar:

### `npm start`

Executa a aplicação em modo de desenvolvimento.
Abra http://localhost:3000 para visualizar no navegador.

A página irá recarregar quando você fizer alterações e erros de lint aparecerão no console.

### `npm test`

Inicia o runner de testes em modo interativo (watch).

### `npm run build`

Gera uma versão otimizada para produção na pasta `build`.
Os arquivos serão minificados e prontos para deploy.

### `npm run eject`

Aviso: esta operação é irreversível. Ao ejetar, as configurações (webpack, Babel, ESLint etc.) serão copiadas para o projeto e você terá controle total sobre elas.

Você não precisa usar `eject` para começar; a configuração padrão serve bem para a maioria dos casos.

## Saiba mais

Documentação do Create React App:
https://facebook.github.io/create-react-app/docs/getting-started

Documentação do React:
https://reactjs.org/

Seções úteis (em inglês):

- Code splitting: https://facebook.github.io/create-react-app/docs/code-splitting
- Analisando o tamanho do bundle: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size
- Progressive Web App: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
- Configuração avançada: https://facebook.github.io/create-react-app/docs/advanced-configuration
- Deployment: https://facebook.github.io/create-react-app/docs/deployment
- Troubleshooting (build minify): https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Notas específicas deste projeto

- Esta pasta (`aya/`) é o frontend React do projeto TJBAScrapper. Para instruções de como rodar o projeto inteiro (frontend + serviços na raiz), consulte o `README.md` na raiz do repositório.
- Certifique-se de instalar as dependências dentro de `aya/` antes de rodar os scripts:

```powershell
cd aya
npm install
npm start
```

Se precisar, posso atualizar este README com instruções mais detalhadas (deploy, variáveis de ambiente específicas, exemplos de uso) — diga o que prefere.
### Advanced Configuration
