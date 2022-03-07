if [ -z "$1" ]
  then
    echo "No argument supplied"
  else
    echo "starting server .."
    cd backend
    docker-compose up -d &&
    npm install &&
    NODE_ENV=$1 npm run devserver
fi
