# Utiliser l'image officielle Node.js comme base
FROM node:14-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /DAILY-MOOD

# Copier les fichiers package.json et package-lock.json
COPY package.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port 3000 pour l'application
EXPOSE 3000

# Commande pour exécuter l'application
CMD ["npm", "start"]