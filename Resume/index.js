function checkKeycode(e)
{
  var keycode;

  if (window.event)
    keycode = window.event.keyCode;
  else
    if (e) keycode = e.which;

  switch (keycode)
  {
    case 37:  // left arrow
      document.location = "../";
    break;

    case 39:  // right arrow
      document.location = "../Contacts";
    break;
  }
}

document.onkeydown = checkKeycode;