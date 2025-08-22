# Stage 1: Build React app
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:stable-alpine

# Build argument for folder (React build output)
ARG BUILD_FOLDER=build

# Create NGINX user (non-root) and required temp/cache folders
RUN addgroup -S cloudops && adduser -S cloudops -G cloudops
RUN mkdir -p /tmp/nginx_temp/client_temp \
             /tmp/nginx_temp/proxy_temp \
             /tmp/nginx_temp/fastcgi_temp \
             /tmp/nginx_temp/uwsgi_temp \
             /tmp/nginx_temp/scgi_temp \
             /var/cache/nginx && \
    chown -R cloudops:cloudops /usr/share/nginx /etc/nginx /tmp/nginx_temp /var/cache/nginx

# Copy built React app from builder stage
COPY --from=builder /app/$BUILD_FOLDER /usr/share/nginx/html

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Switch to non-root user
USER cloudops

# Expose port 8080
EXPOSE 8080

# Run NGINX in foreground
CMD ["nginx", "-g", "daemon off;"]
