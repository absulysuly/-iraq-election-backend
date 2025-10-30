FROM node:20.19.5
WORKDIR /app
COPY . .
RUN npm install && npx prisma generate && npm run build
CMD ["npm", "start"]
