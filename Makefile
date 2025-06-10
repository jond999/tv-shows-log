all: dev


install: clean
	npm install

dev:
	node server.js

open:
	open http://localhost:8009

clean:
	rm -rf node_modules

diff:
	git diff > diff.out

.PHONY: dev open install clean diff
