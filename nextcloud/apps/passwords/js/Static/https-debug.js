"https:"!==location.protocol&&-1===location.href.indexOf("?https=false")?location.href=`${location.origin}${location.pathname}?https=false`:"https:"===location.protocol&&-1!==location.href.indexOf("?https=false")&&(location.href=`${location.origin}${location.pathname}`);