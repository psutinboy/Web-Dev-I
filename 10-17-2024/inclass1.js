function alphanumeric(uadd) {
    var letters = /^[a-zA-Z0-9]+$/;
    if (uadd.value.match(letters)) {
      return true;
    } else {
    alert("Please enter alphanumeric characters only");
    uadd.focus();
    return false;
    }
}


