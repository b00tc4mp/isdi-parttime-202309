#!/bin/bash

## TEST 'delete-resource'

# CASE 'passes for resource deleted successfully (activity)'
curl 'http://localhost:9000/resources' \
-X DELETE \
-H 'Content-Type: application/json' \
-d '{ "_id": "664231103395f3ea52d96326"}' \