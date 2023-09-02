export function message(type, text) {
  let flag, time;

  if (type === 'success') {
    flag = false;
    time = 1000;
  } else {
    flag = true;
    time = 5000;
  }

  Swal.fire({
    icon: type,
    text: text,
    showConfirmButton: flag,
    timer: time,
  });
}
