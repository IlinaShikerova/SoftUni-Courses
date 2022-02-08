function validator(obj) {
  let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let messageText = /[<>&'"\\]+/;
  let uriRegex = /\w+/m;
  if (!obj.method || !validMethods.includes(obj.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (!obj.uri || obj.uri === "" || !uriRegex.test(obj.uri)) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (!obj.version || !validVersion.includes(obj.version)) {
    throw new Error("Invalid request header: Invalid version");
  }
  if (messageText.test(obj.message) || obj.message === undefined) {
    throw new Error("Invalid request header: Invalid message");
  }
  return obj;
}
validator({
  method: "GET",
  uri: "svn.public.catalog",
  version: "HTTP/1.1",
  message: "",
});
validator({
  method: "OPTIONS",
  uri: "git.master",
  version: "HTTP/1.1",
  message: "-recursive",
});
