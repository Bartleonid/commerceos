FROM node:12.13.1

ENV COMMERCEOS_HOME /commerceos

RUN apt-get update && \
	apt-get -y install nodejs && \
	npm install

RUN install -g mocha && \
    npm install chai && \
    npm install chromedriver && \
    npm install chrome -g

RUN mkdir $COMMERCEOS_HOME

COPY . $COMMERCEOS_HOME

CMD ["npm", "start"] && \
    ["mocha test.js"]