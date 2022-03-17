import postMessage from "../../../controllers/messageController/postMessage";

export default function reqHandler (req, res) {
  const method = req.method;
  if (method === "POST") postMessage(req, res);
  else {
    errorController(422, "req_method_not_supported", res);
  }
};