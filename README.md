# Приложение можно запустить с помощью docker несколькими способами

## Запуск контейнера из папки с текущим репозиторием

В папке репозитория выполните команду:

``````
docker-compose up
``````
После чего контейнер запустит приложение по адресу http://localhost:3000


## Пул образа с репозитория docker hub 

Ссылка на хаб с репозиторием: https://hub.docker.com/r/jermastock/react-book-app

При создании контейнера необходимо прописать 

``````
docker run -p 3000:3000 --name react-book-app jermastock/react-book-app
``````

Важно связать порты при создании контейнера -p 3000:3000

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
