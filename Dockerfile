# Use a smaller base image to reduce image size
FROM nginx

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy your built web files into the Nginx html directory
COPY build/web /usr/share/nginx/html

# Copy our custom Nginx config
COPY nginx.conf /etc/nginx/conf.d

# Expose port 80
EXPOSE 80

# The default command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]