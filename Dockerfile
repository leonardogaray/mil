FROM node:18-alpine
RUN npm install -g @angular/cli@15
USER node
WORKDIR /app
EXPOSE 4200 49153
CMD ng serve --host 0.0.0.0