# Use the official Node.js 20 image as base
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to container
COPY server/package*.json ./server/

# Install dependencies
RUN cd server && npm install

COPY server ./server

COPY frontend/package*.json ./frontend/

RUN cd frontend && npm install

COPY frontend ./frontend/
RUN cd frontend && npm run build

RUN cp -r frontend/dist ./server/dist


# Expose port 3000
EXPOSE 3000

RUN cd ./server

# Command to run the application
CMD ["npm", "start", "--prefix", "server"]

