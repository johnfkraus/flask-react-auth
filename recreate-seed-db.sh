#!/bin/bash

docker-compose exec api python manage.py recreate_db && docker-compose exec api python manage.py seed_db
