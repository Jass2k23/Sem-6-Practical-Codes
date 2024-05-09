# Tells Docker to use this Node version
FROM node:latest

# Tells Docker to create a folder called code inside the Docker image
WORKDIR /code

# Environment variables can be accessed inside the image
ENV  PORT 80
EXPOSE 80

# Copies the package.json file into the code folder
COPY package.json /code/package.json

# Runs Node Package Manager and installs dependencies, including express
RUN npm install express

# Copies all code from the current working directory into the code directory in the image
COPY . /code

# Specifies the command to run the application
CMD [ "node", "app.js" ]





# First step
# npm init -y


# To build the docker file
# docker build -t my-node-app .

# To build the docker file
# docker run -p 8000:80 my-node-app