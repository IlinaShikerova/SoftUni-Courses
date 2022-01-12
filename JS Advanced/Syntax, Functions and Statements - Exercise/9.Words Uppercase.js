function wordsUppercase(input) {
  let result = input.toUpperCase().match(/\w+/g).join(", ");

  console.log(result);
}
wordsUppercase("Hi, how are you?");
wordsUppercase("hello");
