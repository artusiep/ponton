start:
	yarn start

set-up-mongo:
	docker run -p 27017:27017 --name ponton mongo

stop-mongo:
	docker rm -f ponton

restart: stop-mongo set-up-mongo