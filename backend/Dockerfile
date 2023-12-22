# Use an official Node.js 18 runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

# Install dependencies
RUN npm install

# Expose the port that the Express app will run on
EXPOSE 5000

# Command to start the Express app
CMD ["node", "server.js"]
