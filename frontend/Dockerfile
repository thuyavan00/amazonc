# Use an official Node.js 18 runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend files to the container
COPY frontend/ ./

# Build the React app
RUN npm run build

# Expose the port that the React app will run on
EXPOSE 3000

# Command to start the React app
CMD ["npm", "start"]
