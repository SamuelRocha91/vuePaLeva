<img src="https://cdn-icons-png.flaticon.com/128/82/82667.png" alt="Rails Projects Logo" width="40" height="30"/> <h2>Vue "Pá Levá"</h2><img src="https://cdn-icons-png.flaticon.com/128/82/82667.png" alt="Rails Projects Logo" width="40" height="30"/> 


![Em Desenvolvimento](https://img.shields.io/badge/status-Em%20Desenvolvimento-yellow)

<details>

<summary> <h2>Visão Geral</h2> </summary>

Este projeto está sendo desenvolvido como requisito avaliativo do programa <a href="https://treinadev.com.br/">Treina Dev</a> da <a href="https://www.campuscode.com.br/">Campus Code</a>. O projeto consiste num **Sistema de Gerenciamento de Estabelecimentos que Comercializam Alimentos**. Este repositório contém uma aplicação Vue.js representativa de uma interface de gerenciamento dos pedidos por parte da cozinha. A aplicação ainda conta com um repositório [Ruby On Rails](https://github.com/SamuelRocha91/rails_paleva) para interface de gerenciamento dos usuários com a role de :admin e o seu back-end.
</details>

<details>

<summary> <h2>Instruções de uso</h2> </summary>

### Pré-requisitos

Antes de iniciar a aplicação, é necessário obter um **código de estabelecimento** gerado pelo backend. Este código é essencial para que a aplicação consiga se conectar ao restaurante correto.  

#### Como Obter o Código de Estabelecimento  

1. Certifique-se de que a aplicação backend [Ruby on Rails](https://github.com/SamuelRocha91/rails_paleva) está configurada e funcionando corretamente.  
2. Acesse o **Rails Console** para buscar o código de um estabelecimento já cadastrado:  

   ```bash
   rails console
   ```

3. No console, execute um comando para encontrar o código do estabelecimento. Por exemplo:  

   ```ruby
   Establishment.first.code
   ```

4. Copie o código gerado (exemplo: `97TT1J`) e guarde-o.  

#### Configurando o Código na Aplicação  

1. Abra o arquivo `main.js` no projeto frontend.  
2. Localize a constante `ESTABLISHMENT_CODE` e defina-a com o código de estabelecimento obtido:  

   ```javascript
   const ESTABLISHMENT_CODE = '97TT1J'; // Substitua pelo código obtido no backend
   ```

3. Salve o arquivo.  

Pronto! Agora sua aplicação está configurada para se conectar ao restaurante correto.  

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

