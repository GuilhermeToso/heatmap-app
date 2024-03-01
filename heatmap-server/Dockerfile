# Stage 1: Build the NestJS application
FROM node:18.17.1 AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to work directory
COPY package.json ./

# Install dependencies including 'devDependencies'
# 'devDependencies' are needed for the 'nest build' script
RUN npm install

# Copy the rest of the application's code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Prepare the production environment
FROM node:18.17.1-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to work directory
COPY package.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the built application from the build stage
COPY --from=build /usr/src/app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"]
