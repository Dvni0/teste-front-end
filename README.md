
# Econverse - E-commerce Front-end Challenge

Este repositório contém o código-fonte do projeto **Econverse**, uma interface de e-commerce desenvolvida com foco em alta fidelidade visual (Pixel Perfect) em relação ao protótipo original. A implementação prioriza boas práticas de engenharia de software aplicadas ao Front-end, enfatizando a componentização, a tipagem estática e a arquitetura modular de estilos.

---

## Arquitetura e Tecnologias

A base tecnológica do projeto foi definida para assegurar performance, escalabilidade e manutenibilidade:

* **React.js**: Biblioteca base para a construção da interface de usuário declarativa.
* **TypeScript**: Linguagem empregada para o controle estático de tipos, mitigando falhas em tempo de compilação e definindo contratos rigorosos para entidades de dados e componentes.
* **Vite**: Ferramenta de build de alta performance, responsável pela otimização do ambiente de desenvolvimento através de *Hot Module Replacement (HMR)*.
* **Sass (SCSS)**: Pré-processador CSS implementado para o encapsulamento e a modularização de estilos. O controle do design system é gerido por variáveis globais (ex: `#3442B5`, `#F7A70B`, `#3F3F40`).
* **Git e GitHub**: Controle de versão semântico.

---

## Funcionalidades Implementadas

A interface contempla os seguintes requisitos técnicos e visuais:

* **Fidelidade Visual (Pixel Perfect)**: Transcrição exata das métricas do design original (Figma), compreendendo o tratamento de comportamentos padrão dos navegadores, como remoção de decorações nativas de texto e ajustes de tipografia.
* **Vitrine de Produtos (Carrossel Dinâmico)**: Estrutura de navegação horizontal responsiva baseada na manipulação de referências do DOM (`useRef`) para processamento de scroll suave. As interfaces de controle (setas) utilizam cálculos de posicionamento absoluto (`top: 50%`, `translateY(-50%)`) para alinhamento dinâmico.
* **Modal de Detalhes (Overlay)**: Interface sobreposta para visualização estendida do produto. Implementa interceptação de eventos (`stopPropagation`) para gestão do comportamento de fechamento. Integra um sistema de seleção de quantidade vinculado ao estado local e formatação de valores monetários através da API nativa `Intl`.
* **Navegação Global (Header)**: Cabeçalho com sistema de menus dinâmico, realce de rota ativa, alinhamento flexível de ícones vetorizados e campo de busca incorporado.
* **Rodapé (Footer) e Newsletter**: Layout estruturado em blocos para controle de contraste, validando a apresentação em seções semânticas e formulários com estado controlado.

---

## Pré-requisitos

Para a correta execução do ambiente local, são necessários os seguintes componentes:

* **Node.js** (Versão 16.x LTS ou superior)
* **npm** ou **yarn** (Gerenciadores de dependências)

---

## Instruções de Execução

Siga as etapas abaixo para compilar e executar o projeto em um ambiente de desenvolvimento local:

### 1. Clonagem do Repositório
```bash
git clone https://github.com/Dvni0/teste-front-end.git
```

### 2. Instalação de Dependências
```bash
cd NOME_DO_REPOSITORIO
npm install
```

### 3. Execução do Servidor de Desenvolvimento
```bash
npm run dev
```

O servidor será inicializado, operando por padrão no endereço local apontado no terminal (ex: `http://localhost:5173`).

---



## Autor

Vinícius Barros - Estudante de Engenharia da Computação na FIAP.

🔗 **LinkedIn:** https://www.linkedin.com/in/viniciusbarros-souza/  
