# Stage 1: Build the React application
FROM node:18.17.1 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application's code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app using serve
FROM node:18.17.1-slim

# Install serve - a static server to serve the React app
RUN npm install -g serve

# Copy the build folder from the build stage
COPY --from=build /app/build /app

# Expose port 3000 for the server
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "/app", "-l", "3000"]
