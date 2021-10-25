# Stage 0, "build" based on Node.js
FROM 864613434505.dkr.ecr.us-east-1.amazonaws.com/nodealpine:latest as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG configuration=production

RUN npm run build -- --configuration $configuration

# Stage 1, based on Nginx, to have only the compiled app, ready for deployment with Nginx
FROM 864613434505.dkr.ecr.us-east-1.amazonaws.com/nginxalpine:latest

COPY --from=build /usr/src/app/dist/angular-todo /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
