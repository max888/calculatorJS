function myMax(arr) {
  var max_of_array = Math.max.apply(Math, arr);
  return max_of_array;
};

function vowel_count(str) {
  vowels = 0;
  var is_vowel = function(c) {
    if ( c === "a" || c === "e" || c === "i" || c === "o" || c === "u" || c === "y") {
      return true;
    }
    return false;
  };

  length = str.length;

  for (var i = 0; i < length; i++) {
    if (is_vowel(str[i])) {
      vowels++;
    }
  }
  return vowels;
};

function reverse(str) {
  return str.split("").reverse().join("");
}