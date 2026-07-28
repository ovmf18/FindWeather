# FindWeather 🌤️

Um aplicativo moderno e interativo para previsão do tempo, desenvolvido durante o desafio **#7DaysOfCode** da Alura. O FindWeather permite que você pesquise por cidades ao redor do mundo e acompanhe o clima em tempo real, além da previsão para os próximos 5 dias.

## 🚀 Tecnologias e Ferramentas Utilizadas

Este projeto foi construído utilizando um conjunto de tecnologias modernas do ecossistema React e Mobile:

- **[React Native](https://reactnative.dev/) & [Expo](https://expo.dev/)**: Para desenvolvimento mobile rápido, fácil e multiplataforma (iOS e Android).
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para trazer mais segurança e escalabilidade ao código.
- **[Styled-Components](https://styled-components.com/)**: Biblioteca para estilização de componentes com CSS-in-JS, facilitando a criação de interfaces e suporte a temas.
- **[React Navigation](https://reactnavigation.org/)**: Gerenciamento de rotas e navegação fluida entre telas (Stack e Tabs).
- **[Axios](https://axios-http.com/)**: Realização das requisições HTTP para a API de clima.
- **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/)**: Para armazenar localmente o estado de introdução (Welcome) e a última cidade pesquisada, garantindo uma melhor experiência do usuário.
- **[Jest](https://jestjs.io/)**: Configurado para testes unitários, garantindo a integridade e confiança das lógicas utilitárias da aplicação.

## 📱 Funcionalidades

- **Splash Screen Animada:** Transição suave da inicialização nativa para o carregamento interno do aplicativo, utilizando as APIs de Animação do React Native.
- **Onboarding (Welcome):** Tela de boas-vindas exibida na primeira vez que o usuário abre o app.
- **Busca de Clima:** Pesquise por qualquer cidade para ver detalhes como umidade, velocidade do vento e cobertura de nuvens atuais.
- **Previsão Estendida:** Uma aba dedicada para conferir a previsão detalhada dos próximos 5 dias.
- **Persistência Local:** O app se lembra da última cidade que você visualizou para carregá-la imediatamente na sua próxima visita!

## ⚙️ Como rodar o projeto

Siga as instruções abaixo para executar o aplicativo no seu próprio ambiente:

### 1. Pré-requisitos
Certifique-se de que você tem o **[Node.js](https://nodejs.org/)** instalado.
Recomendamos também a instalação do aplicativo **Expo Go** no seu dispositivo físico (disponível para Android e iOS) ou ter um emulador (Android Studio ou Xcode) configurado.

### 2. Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
# Acesse a pasta do projeto
cd FindWeather

# Instale as dependências
npm install
```

### 3. Variáveis de Ambiente
O app consome serviços de clima e geolocalização. Crie um arquivo `.env` na raiz do projeto contendo as seguintes chaves:

```env
EXPO_PUBLIC_WEATHER_API_KEY=sua_chave_aqui
EXPO_PUBLIC_OPEN_WEATHER_KEY=sua_chave_aqui
EXPO_PUBLIC_OPEN_CAGE_DATA_KEY=sua_chave_aqui
```

### 4. Executando o aplicativo

Inicie o Metro Bundler do Expo:

```bash
npm start
# ou
npx expo start -c
```

Um QR Code aparecerá no seu terminal.
- **Dispositivo físico**: Abra o app do **Expo Go** e escaneie o QR Code.
- **Emulador Android**: Pressione `a` no terminal para rodar o app no emulador.
- **Emulador iOS**: Pressione `i` no terminal para rodar o app no iOS Simulator.

---
*Feito com dedicação para o #7DaysOfCode! 🚀*
