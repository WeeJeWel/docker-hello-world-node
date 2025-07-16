FROM node
COPY /server.mjs /app/server.mjs
EXPOSE 3000
CMD ["node", "--watch", "/app/server.mjs"]