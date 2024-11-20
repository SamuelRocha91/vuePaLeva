<img src="https://cdn-icons-png.flaticon.com/128/82/82667.png" alt="Rails Projects Logo" width="40" height="30"/> <h2>Vue "Pá Levá"</h2><img src="https://cdn-icons-png.flaticon.com/128/82/82667.png" alt="Rails Projects Logo" width="40" height="30"/> 


![Em Desenvolvimento](https://img.shields.io/badge/status-Em%20Desenvolvimento-yellow)

<details>

<summary> <h2>Visão Geral</h2> </summary>

Este projeto está sendo desenvolvido como requisito avaliativo do programa <a href="https://treinadev.com.br/">Treina Dev</a> da <a href="https://www.campuscode.com.br/">Campus Code</a>. O projeto consiste num **Sistema de Gerenciamento de Estabelecimentos que Comercializam Alimentos**. Este repositório contém uma aplicação Vue.js representativa de uma interface de gerenciamento dos pedidos por parte da cozinha. A aplicação ainda conta com um repositório [Ruby On Rails](https://github.com/SamuelRocha91/rails_paleva) para interface de gerenciamento dos usuários com a role de :admin e o seu back-end.
</details>

<details>

<summary> <h2>Instruções de uso</h2> </summary>

### Pré-requisitos

Antes de iniciar a aplicação, certifique-se de que você possui um **código de estabelecimento** gerado pelo backend. Este código é necessário para que a aplicação se conecte ao restaurante correto. 

No arquivo `main.js`, defina a vontante `ESTABLISHMENT_CODE` com o um código válido de restaurante:

```javascript
const ESTABLISHMENT_CODE = '97TT1J'; // Substitua com um código válido gerado no backend
```

### Passos para Execução

1. **Clone o Projeto:**
   - Clone este repositório em sua máquina local.

2. **Abrir o arquivo `index.html`:**
   - Navegue até o diretório do projeto e localize o arquivo `index.html`.

3. **Executar o arquivo `index.html`:**
   - Você pode abrir o arquivo diretamente no navegador (basta dar um duplo clique sobre ele a partir da pasta onde ele estiver localizado).
   - Alternativamente, para uma experiência de desenvolvimento mais prática, utilize a extensão **Live Server** no VS Code.

4. **Iniciar com Live Server:**
   - No VS Code, instale a extensão **Live Server** (caso ainda não a tenha).
   - Abra o arquivo `index.html`, clique com o botão direito e selecione **"Open with Live Server"**. Isso abrirá a aplicação no navegador e atualizará automaticamente ao fazer alterações.

### Utilização da Interface

- A interface permite que você:
  - Filtre pedidos por status.
  - Visualize detalhes de cada pedido.
  - Aceite ou finalize a preparação de pedidos, de acordo com seu status.

A aplicação se comunica com a API do backend Rails para buscar e atualizar as informações dos pedidos. Certifique-se de que o backend está em execução e acessível na URL configurada (`http://localhost:3000`).

---

## 🔧 Tecnologias Utilizadas

- **Vue.js**: Framework JavaScript progressivo para construção de interfaces.
- **Bootstrap 5**: Biblioteca de design para responsividade e estilização.
- **JavaScript Vanilla**: Código sem compilação direta para facilitar a execução via navegador.
  
---

## 🛠️ Repositórios Relacionados

- **Backend**: [Rails Pá Levá](https://github.com/SamuelRocha91/rails_paleva)
  
---
</details>

