

docker run --name todoAppContainer -e POSTGRES_PASSWORD=password -d -p 5431:5432 postgres
psql -h localhost -p 5431 -U postgres









always change the first port name
and contaier name 


connect locally with this command

```bash

   psql -h localhost -p 5431 -U postgres