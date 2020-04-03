# springBoot with angular
 -
1. Build the project : mvn clean package  
2.Build docker image of this springboot app using Dockerfile
   docker image build -t login .
3.Run this image
   docker container run --name login -p 3000:3000 -d login
4.Verify app logs
   docker container logs -f login
5.Verify app running
  http://localhost:3000