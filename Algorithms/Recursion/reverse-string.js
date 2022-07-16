function reverseStringRecursive(str) {
  console.log(str);
  if (str === '') {
    return '';
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringRecursive('hello'));
/**
 * Inputs for each recursion
 * 0) Hello
 * 1) ello
 * 2) llo
 * 3) lo
 * 4) o
 * 5) ''
 *
 * Returns in order
 * 5) returns ''
 * 4) returns '' + str[0] -> o
 * 3) returns o + str[0] -> o + l -> ol
 * 2) returns ol + str[0] -> ol + l -> oll
 * 1) returns oll + str[0] -> oll + e -> olle
 * 0) returns olle + str[0] -> ollle + H -> olleH
 *
 *
 */
