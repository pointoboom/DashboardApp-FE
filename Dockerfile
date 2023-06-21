FROM node:18
WORKDIR /app
COPY package*.json ./
# COPY package*.json ./
RUN npm i
COPY . .
# Build the React app
RUN npm run build
EXPOSE 3000
CMD [ "npm","start" ]