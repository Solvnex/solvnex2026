# Use the official Node.js 20 image as base
FROM node:20-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 (assuming your Node.js application listens on port 3000)
EXPOSE 3000

# Command to run the application
CMD ["npm", "serve"]
