FROM node:17-alpine

WORKDIR /app

# Cache and Install dependencies
COPY package.json .

COPY package-lock.json .

RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["yarn", "start"]