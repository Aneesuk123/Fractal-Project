FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# FIXED → Now images will load
COPY images/ /usr/share/nginx/html/images/

EXPOSE 80
