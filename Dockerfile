# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm ci --only=production

# Copy the app source code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose a port for serving the app (optional)
EXPOSE 3000

# Define the command to run when the container starts
CMD [ "npm", "start" ]
