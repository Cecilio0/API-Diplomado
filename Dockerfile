FROM node:latest

# PORT and ENVIRONMENT VARIABLES
# Recommended port
# EXPOSE 8080 
ENV PORT value
ENV DB_URI value
ENV JWT_SECRET value

# COPY necessary files and commands to set up the project
COPY . .
RUN npm install

# RUN project
CMD [ "npm", "run", "start" ]

STOPSIGNAL SIGKILL