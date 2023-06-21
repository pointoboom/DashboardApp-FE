FROM node:18
WORKDIR /app
COPY package*.json ./
# COPY package*.json ./
RUN npm ci
COPY . .
# Build the React app
RUN npm run build
EXPOSE 3000
CMD [ "npm","start" ]