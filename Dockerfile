# Stage 1 - build
FROM node:lts-alpine as react-build
WORKDIR /app
COPY . ./
RUN npm ci
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 8000
ENTRYPOINT ["nginx", "-g", "daemon off;"]
