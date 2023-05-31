# Utiliza una imagen base adecuada para tu proyecto
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY package.json package-lock.json /app/
COPY . /app/

# Instala las dependencias del proyecto utilizando npm
RUN npm install

# Expone el puerto en el que se ejecutará tu aplicación
EXPOSE 4000

# Define el comando para ejecutar tu aplicación
CMD ["npm", "start"]
