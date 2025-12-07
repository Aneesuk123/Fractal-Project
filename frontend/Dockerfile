# Use latest patched Alpine to fix vulnerabilities
FROM alpine:3.23.0

# Update packages and install dependencies
RUN apk update && apk upgrade && \
    apk add --no-cache bash curl libpng

# Copy app files
COPY . /app
WORKDIR /app

# Default command
CMD ["sh"]
