import Mock, { Random } from "mockjs";

const user = Mock.mock({
  "array|100": [
    {
      "name": "@cname",
      "id|+1":1,
      avtor:Random.image('100x100')
    },
  ],
});
module.exports = [
  {
    method: "post",
    url: "/api/user",
    response({ body }) {
      // body 请求体
      return {
        code: 200,
        msg: "success",
        data: user,
      };
    },
  },
];
