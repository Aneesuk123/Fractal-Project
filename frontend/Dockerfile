FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY images/ /usr/share/nginx/html/images/

# Replace placeholder __VERSION__ with ENV VERSION
ARG VERSION
RUN sed -i "s/__VERSION__/${VERSION}/g" /usr/share/nginx/html/index.html

EXPOSE 80
