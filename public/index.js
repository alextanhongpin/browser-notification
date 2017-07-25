function notifyMe () {
  if (!('Notification' in window)) {
    window.alert('This browser does not support desktop notification')
  } else if (window.Notification.permission === 'granted') {
    new window.Notification('Hello world')
  } else if (window.Notification.permission !== 'denied') {
    window.Notification.requestPermission((permission) => {
      if (permission === 'granted') {
        new window.Notification('Granted')
      }
    })
  }
}

notifyMe()
