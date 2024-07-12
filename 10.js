function TitleCase(s) {
  return s.replace(/\b\w/g, function (c) {
    return c.toUpperCase();
  });
}
const string = "hello world";
const ans = TitleCase(string);
console.log(ans);