# Arkad API
## Stack 
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## Sobre
O arkad foi pensado para ajudar os investidores à calcular seu lucro futuro com precisão e informação. Primeiramente, vamos trabalhar para disponibilizar os calculos e informações sobre os títulos do **Tesouro direto prefixado**. Ou seja, cadastrando os valores e datas dos títulos comprados, nós traremos a previsão de retirada no vencimento do título.

## Conceitos Técnicos
- Arquitetura Limpa
- Cobertura de testes automatizados
- Código Limpo

### Arquitetura Limpa
  Existem algumas abordagens sobre este tipo de arquitetura. 
 
 A que vamos utilizar terá as **entidades de domínio** com comportamentos, por exemplo, a entidade de investimento sabe calcular seu próprio lucro, a entidade de imposto de renda sabe calcular a dedução sobre o lucro com base no tempo de investimento.
  
  Os **casos de uso** serão orquestradores de entidades. Eles delegam o que precisam para as entidades e, com base nos retornos tomam as decisões da aplicação. Esta camada será responsável pela persistência de dados quando necessário.
  
  Os **controladores** serão responsáveis pela validação da entrada de dados e dar suporte ao caso de uso (estipulado apenas um caso de uso por controlador).
  
  A Camada externa ou **Camada de frameworks** sera responsável por implementar as interfaces criadas na camada de domínio.
  
  No projeto, optamos por fazer a construção de fluxos através da pasta **main**. Portanto, não utilizaremos injetores de dependências.
 
### Cobertura de testes automatizados
  Nosso objetivo é manter o repositório com 100% de cobertura.
 
### Código Limpo
  Este projeto foi criado por entusiastas do lado Jedi da programação. Somos seguidores (não cegos) dos ensinamentos do tio Bob e tentamos aplica-los no nosso mundo.
  Você vai encontrar aqui:
    - Nomes descritivos para funções, variáveis e classes;
    - Funções pequenas;
    - Muitos testes;
    - Espirito de escoteiro;
    
 Obs.: Nosso projeto está no início, mas vamos liberar um passo a passo para contribuições assim que possível. 
