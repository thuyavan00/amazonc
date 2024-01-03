# Use an official Node.js 18 runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./
COPY . .

# Install backend dependencies
RUN cd backend && npm install

# Install frontend dependencies and build the frontend
RUN cd frontend && npm install && npm run build

# Expose the port that the React app will run on
EXPOSE 5000

CMD ["npm", "start"]

