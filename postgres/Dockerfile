FROM postgres:latest
ENV POSTGRES_DB=shoedidas_comments_2
ENV POSTGRES_USER=hayden
ENV POSTGRES_PASSWORD=hello
ADD build.sql /docker-entrypoint-initdb.d/
CMD ["psql", ${POSTGRES_DB}, "-f", "./docker-entrypoint-initdb.d/build.sql", "--u", ${POSTGRES_USER}]