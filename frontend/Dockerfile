# Use latest patched Alpine to fix vulnerabilities
FROM php:8.2-cli-alpine

# Update packages and install dependencies
RUN apk update && apk upgrade && \
    apk add --no-cache bash curl libpng

# Copy app files
COPY . /app
WORKDIR /app

RUN sed -i 's/__VERSION__/green/g' index.html

# Expose port if your app uses one
EXPOSE 80

# Default command to start frontend
CMD ["php", "-S", "0.0.0.0:80", "-t", "/app"]  # Replace with your actual start command, e.g., ["npm", "start"] or ["php", "-S", "0.0.0.0:80"]
