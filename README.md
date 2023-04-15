# GP-FigmaDesignToPage
[Project](https://github.com/grigorybabkin/GP-FigmaDesignToPage) | 
[Github Page](https://grigorybabkin.github.io/GP-FigmaDesignToPage/)

Проект - выполненная верстка страницы по [макету из Figma](https://www.figma.com/file/Ws3wFnGWBYw5OjhNv4K2Kk/ITMO?node-id=0%3A1&t=EpECoYI0GXfcBuQF-0)

Страница проекта является гибкой и подстраивается под изменение экрана браузера. Минимальная ширина страницы 750px. Адаптация под мобильные устройства
не предусмотрена, так как по заданию был предоставлен макет только десктопной версии. Выполненная верстка соответствует заданию. 

## Структура проекта
```bash
GP-FigmaDesignToPage
├── public                     
│     
├── srs                             
│    ├── assets
│    ├── components                                 # компоненты проекта
│           ├── BasicTopicCard                      
│           ├── CircularProgressBar
│           ├── DeveloperWay              
│           ├── NavBar  
│           ├── RecommendedTopics              
│           ├── TopicCatalog  
│           └── WideTopicCard                       # каталог с реализацией и стилями компонента
│                    ├── index.ts 
│                    ├── ...
│                    ├── WideTopicCard.tsx    
│                    └── WideTopicCard.module.scss
│
│
│    ├── styles                                     # общие стили проекты
│    ├── ...
│    ├── App.tsx 
│    └── main.tsx
│
├── ...
└── README.md
```
### Требования
```bash
node.js --version >= 18
yarn    --version >= 1.22
npm     --version >= 8
```

### Сборка проекта

```bash
$ git clone https://github.com/grigorybabkin/GP-FigmaDesignToPage.git
```
```bash
$ cd GP-FigmaDesignToPage
```
```bash
$ yarn
```
```bash
$ yarn build
```
