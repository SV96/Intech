function StringCompression(str) {
  let newStr = '';
  let strCount = 0;
  for (let s1 = 0; s1 < str.length; s1++) {
    strCount++;
    if (s1 + 1 >= str.length || str[s1] !== str[s1 + 1]) {
      newStr += str[s1] + strCount;
      strCount = 0;
    }
  }
  console.log(newStr)
  return newStr;
}

StringCompression('aaaabbcddddd');
