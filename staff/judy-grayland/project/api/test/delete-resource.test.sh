#!/bin/bash

## TEST 'delete-resource'

# CASE 'passes for resource deleted successfully (activity)'
curl 'http://localhost:9000/resources/66426da90be978a737ab3347' \
-X DELETE \
-H 'Content-Type: application/json' \
