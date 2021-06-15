# pull official base image
FROM node:16-alpine

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci
RUN npm install react-scripts@4.0.3 prettier@2.3.0 eslint@7.27.0 -g --silent


# start app
CMD ["npm", "start"]
