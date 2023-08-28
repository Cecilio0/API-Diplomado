FROM node:latest

# PORT and ENVIRONMENT VARIABLES
EXPOSE 8080
ENV PORT 8080
ENV DB_URI mongodb+srv://Cecilio:BnoR2mAEXcEutPEU@cluster0.ll5jefv.mongodb.net/diplomadoBackend
ENV JWT_SECRET ElHibridoDeHary

# COPY necessary files and commands to set up the project
COPY . .
RUN npm install

# RUN project
CMD [ "npm", "run", "start" ]

STOPSIGNAL SIGKILL