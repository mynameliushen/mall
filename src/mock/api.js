import mock from 'mockjs'

mock.mock('/api/user/login', {
  "status": 0,
  "data": {
    "name": "@cname",
    "id|10000-12000": 0
  } 
})