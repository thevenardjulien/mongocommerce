*** Lancement front-end ***

1 - npm install

2 - Créer fichier .env

    VITE_BACKEND_URL=http://localhost:3000
    VITE_API_URL=http://localhost:3000/api

3 - npm run dev

4 - http://localhost:5173/


*** Lancement back-end ***

1 - npm install

2 - Créer fichier .env.development

    NODE_ENV=development
    APP_NAME=mongocommerce
    DB_URL=mongodb://localhost:27017/
    DBNAME=mongocommerce
    JWT_SECRET=mongocommerce-loki-dev-secret
    APP_PORT=3000
    HOST_URL=http://localhost:3000
    API_URL=http://localhost:3000/api

3 - npm run dev:watch

4 - http://localhost:3000/