# FROM node:20-buster
# RUN mkdir /app
# COPY package.json /app/
# WORKDIR /app
# COPY . ./

# ENV APP_URL=https://www.annasundberg.se

# RUN npm install
# RUN npm run build
# EXPOSE 4000
# CMD ["npm", "run","start"]

# Use an official Node.js runtime as the base image
FROM node:20-buster

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Environment variable for the app URL
ENV APP_URL=https://www.annasundberg.se

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "start"]
