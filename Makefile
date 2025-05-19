up:
	docker compose --env-file .env.docker up --build $(app) -d 

up-no-build:
	docker compose --env-file .env.docker up $(app) -d 

down:
	docker compose down $(app)

reup: down up

down-v:
	docker compose down -v $(app)

reup-v: down-v up

log:
	docker compose logs -f $(app)

restart:
	docker compose restart $(app)
