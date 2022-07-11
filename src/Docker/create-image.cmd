docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss7/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss7/app ../..
