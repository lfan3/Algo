function check(line) {
  let type = 0;
  const len = line.length;
  const sp = /a-z/g;
  const up = /A-Z/g;
  const np = /\d/g;
  // const ep = /[^[:alnum]]/g;
  const ep = /[^\w\d\s]/g;
  // const ep = /[\W\D\S]/; wrong
  const repeat3 = /(.{3,}).*\1/; //! new thing here \1
  if (len < 9) {
    console.log('NG');
    return;
  }
  if (sp.test(line)) {
    type++;
  }
  if (up.test(line)) {
    type++;
  }
  if (np.test(line)) {
    type++;
  }
  if (ep.test(line)) {
    type++;
  }
  if (type < 3) {
    console.log('NG');
    return;
  }
  if (repeat3.test(line)) {
    console.log('NG');
    return;
  }
  return true;
}

// const sp = /[a-z]/g;
// const up = /[A-Z]/g;
// const np = /[\d]/g;
// const ep2 = /[^[:alnum]]/g;
// const ep = /[^\w\d\s]/g;
// const repeat3 = /(.{3,}).*\1/
// const str = "021ABC9000";
// console.log(ep2.test(str), str.search(ep), str[0])



