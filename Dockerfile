FROM node:alpine3.17 as dev
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile
COPY . .
CMD ["yarn", "dev"]