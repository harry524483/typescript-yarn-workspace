import { add } from "@cashew/common";

const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(add(1, 2, 5))
  };
};

export default handler;
