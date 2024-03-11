source pepetest.sh

TEST "retrieve-movements-sequence"

CASE "success on correct sequence id"

curl 'http://localhost:9000/arduino/controller/ottoController/65ec9788bcfbaf8e5d352a6c/movements' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWQ4ZDlkZmZkZmMwNTFjMmU2YzFlOTYiLCJpYXQiOjE3MTAxODQ0NjcsImV4cCI6MTcxMDE4ODA2N30.QYbueqIlTKOp_XJNTEzOzRP_S4klt7fuW2VJfKu5eV8' \
-v
