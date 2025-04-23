# Paniel-de-Tarefa

# 📋 Painel de Tarefas com Firebase e Frontend Local

Este projeto é um painel de tarefas com duas páginas:

- `index.html`: Exibe as tarefas e suas subtarefas
- `cadastro.html`: Permite cadastrar novas tarefas
- Backend com Node.js e Firebase para persistência (opcional)

---

## 🚀 Tecnologias Usadas

- HTML, CSS, JavaScript (Frontend)
- Node.js (Backend)
- Firebase (Firestore)
- LocalStorage (fallback/local)

---

## 📁 Estrutura do Projeto

```
/painel-tarefas/
│
├── public/
│   ├── index.html
│   ├── cadastro.html
│   ├── style.css
│   
│
├── controllers/
│   └── taskController.js
│
├── serviceKey.json
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 💡 Reflexões sobre o Projeto

### 1. Qual foi sua lógica para estruturar o projeto?

Organizei o projeto separando claramente o **frontend** (na pasta `public`) do **backend** (servidor Node.js com rotas organizadas em `controllers`). Isso facilita a manutenção, escalabilidade e entendimento do sistema. A escolha do Firebase Firestore como banco foi por ser simples, gratuito para projetos pequenos, e de fácil integração com aplicações JavaScript.

### 2. Que parte você achou mais difícil ou travou?

A parte mais desafiadora foi a integração do Firebase, especialmente o uso correto da `serviceKey.json` para autenticação do backend e o gerenciamento de permissões do Firestore. Além disso, entender como conectar isso de forma fluida com o frontend feito em HTML/CSS/JS puro exigiu atenção aos detalhes.

### 3. O que faria diferente se tivesse mais tempo?

- Modularizaria ainda mais o código, separando as responsabilidades em arquivos menores.
- Melhoraria a interface visual com feedbacks claros ao usuário.
- Permitiria autenticação de usuário para salvar tarefas por pessoa.

### 4. O que faria diferente se fosse para um cliente real?

- Usaria autenticação com Firebase Auth ou outra solução segura.
- Aplicaria boas práticas de segurança no backend (validação, autenticação, rate limiting).
- Garantiria total responsividade para dispositivos móveis.
- Criaria uma documentação técnica mais robusta e um manual de uso para o cliente.
