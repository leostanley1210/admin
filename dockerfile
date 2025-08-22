# Stage 1: Build React app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:stable-alpine
RUN addgroup -S cloudops && adduser -S cloudops -G cloudops
RUN mkdir -p /tmp/nginx_temp/client_temp \
             /tmp/nginx_temp/proxy_temp \
             /tmp/nginx_temp/fastcgi_temp \
             /tmp/nginx_temp/uwsgi_temp \
             /tmp/nginx_temp/scgi_temp \
             /var/cache/nginx && \
    chown -R cloudops:cloudops /usr/share/nginx /etc/nginx /tmp/nginx_temp /var/cache/nginx

# Copy built React app
COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
USER cloudops
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
