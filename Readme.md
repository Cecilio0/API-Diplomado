## API web

### Para ejecutar el proyecto en node:
1. Instalar node y npm
2. Usar el comando `npm install`
3. Crear .env y asignar variables `PORT`, `DB_URI` y `JWT_SECRET`
4. Correr en modo dev usando `npm run dev`
5. Si se desea hacer una build usar `npm run build`
6. Para correr la build usar `npm run start`

### Para ejecutar el proyecto en Docker:
1. Crear la imagen de Docker usando `docker build -t nombreimagen:tag .`
2. Para crear un contenedor usar `-e PORT=PUERTOCONTENEDOR -e DB_URI=VALUE -p PUERTOMAQUINA:PUERTOCONTENEDOR -e JWT_SECRET=CLAVEPRIVADA -d nombreimagen:tag`