* Pasos para compilar

$ cd frontend
$ rm -rf wwww
$ ng build --base-href="/build/app/"
$ rm -rf ../backend/public/build/app
$ cp wwww ../backend/public/build/app
