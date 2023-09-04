# Use an official Node.js 18 runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend files to the container
COPY backend/ ./

# Expose the port that the Express app will run on
EXPOSE 5000

# Command to start the Express app
CMD ["node", "server.js"]
