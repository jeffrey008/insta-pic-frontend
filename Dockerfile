FROM node:14.17.6 as build


# set working directory
WORKDIR /app
## add app
COPY . /app

# install and cache app dependencies
RUN npm install --no-fund

# generate build
RUN npm run build --prod

############
### prod ###
############

# base image
FROM nginx:1.16.0-alpine

# copy artifact build from the 'build environment'
COPY --from=build /app/dist/instapic-frontend /usr/share/nginx/html

# expose port 80
EXPOSE 80
