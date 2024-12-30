# 1. Use Node.js as the base image
FROM node:20-alpine3.20

# 2. Set the working directory inside the container
WORKDIR /backends

# 3. Copy package.json and package-lock.json to the container
COPY package*.json ./ 

# 4. Install dependencies
RUN npm install 

# 5. Copy the application code to the container
COPY . . 

# 6. Expose the port the application will run on
EXPOSE 3000 

# 7. Define the command to start the application
CMD ["npm", "run", "start:dev"]
