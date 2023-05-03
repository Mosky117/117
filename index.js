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
      document.location = "/Contacts";
    break;

    case 39:  // right arrow
      document.location = "/Resume";
    break;
  }
}

document.onkeydown = checkKeycode;