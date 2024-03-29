FROM node:20-alpine
WORKDIR /app

COPY ./package.json ./

# RUN npm install create-react-app -g
# RUN npm install redux react-redux

# RUN npm install create-react-app@5.0.1
# RUN npm install -g tar@latest
# RUN npm update
# RUN npm audit fix
# RUN npm install -g npm@10.5.0   
# RUN npm install
COPY . .

EXPOSE 3000
# RUN npm start
CMD [ "npm", "start" ]    