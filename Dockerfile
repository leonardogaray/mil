FROM node:18-alpine
RUN npm install -g @ionic/cli@7
USER node
WORKDIR /app/mil
EXPOSE 4200 49153
CMD ionic serve --port=4200 --host=0.0.0.0
#CMD tail -f /dev/null 