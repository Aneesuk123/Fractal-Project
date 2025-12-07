# Use latest patched Alpine to fix vulnerabilities
FROM alpine:3.23.0

# Update packages and install dependencies
RUN apk update && apk upgrade && \
    apk add --no-cache bash curl libpng

# Copy app files
COPY . /app
WORKDIR /app

# Expose port if your app uses one
EXPOSE 80

# Default command to start frontend
CMD ["sh"]  # Replace with your actual start command, e.g., ["npm", "start"] or ["php", "-S", "0.0.0.0:80"]
