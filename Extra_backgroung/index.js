function goBackInTime(howManyDaysBack) {
  let today = new Date();
  let date =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    (today.getDate() - howManyDaysBack);
  console.log(date);
}
goBackInTime(1);


curl "https://www.youtube.com/youtubei/v1/comment/create_comment?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8" ^
  -H "authority: www.youtube.com" ^
  -H "x-origin: https://www.youtube.com" ^
  -H "authorization: SAPISIDHASH 1633865798_f70e4fed1c6ea11a610c8a14fc03b64fc366a2b1" ^
  -H "content-type: application/json" ^
  -H "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36" ^
  -H "x-youtube-client-name: 1" ^
  -H "x-youtube-client-version: 2.20211008.01.00" ^
  -H "x-goog-authuser: 0" ^
  -H "x-goog-visitor-id: Cgt2VndJM0EtYk92dyjkn4uLBg^%^3D^%^3D" ^
  -H "accept: */*" ^
  -H "sec-gpc: 1" ^
  -H "origin: https://www.youtube.com" ^
  -H "sec-fetch-site: same-origin" ^
  -H "sec-fetch-mode: same-origin" ^
  -H "sec-fetch-dest: empty" ^
  -H "referer: https://www.youtube.com/watch?v=iiADhChRriM" ^
  -H "accept-language: en-GB,en-US;q=0.9,en;q=0.8" ^
  -H "cookie: VISITOR_INFO1_LIVE=vVwI3A-bOvw; YSC=UGtCcMeeEcE; wide=0; PREF=volume=40&f6=40000400&cvdm=grid&tz=Asia.Calcutta&repeat=NONE&library_tab_browse_id=FEmusic_liked_playlists&al=en&autoplay=true&f5=20030; LOGIN_INFO=AFmmF2swRQIhAINQX9F_MJd3mwpj7QmGAWgXp-H7HVx018g9oPC0xMEJAiAC5uPu6K_rMhI6_Q9BlIYZqafKOjH5Nve3VKNQFHwKsg:QUQ3MjNmeFJLME9XTXFpSVNsTVZMd2w1eG40TTVxd2RkU3NyVk5HOWhJTDNBbkhOLW8zTGZoUGVhVlBHUmswZE4yWV9VS0I2MnRpcmlla3I1MTJYaHl0Z0gtNTBfZ0ZuQVhVSThYcEMteVAwTFl4X3VBSlZ0aEJtZjdlNGZOcWQ4bzVvcldQU2Ixc0hjTy05TURMVTZWZHpuMk1QYkUzZ2xn; SID=CwgaZL8Wc20SeyLWlADjYcJenaoB43QG3jeYt-oX4zZ5-Ya_fW4mxrHu1cEOtIk_oZPnvw.; __Secure-1PSID=CwgaZL8Wc20SeyLWlADjYcJenaoB43QG3jeYt-oX4zZ5-Ya_n-nbTfw4sUcEjqB_6u88XQ.; __Secure-3PSID=CwgaZL8Wc20SeyLWlADjYcJenaoB43QG3jeYt-oX4zZ5-Ya_zPzib9KqTuh1vgKtXXBFTg.; HSID=A9Jh78bhqiYZT1snc; SSID=AppyS948QUBnXHcF0; APISID=sNaJRYE2QpsaX8xh/AgUDjrmozGz1iS7_X; SAPISID=nghPmnfutVze--E9/AqVBjHqVcuhMddrL-; __Secure-1PAPISID=nghPmnfutVze--E9/AqVBjHqVcuhMddrL-; __Secure-3PAPISID=nghPmnfutVze--E9/AqVBjHqVcuhMddrL-; CONSISTENCY=AGDxDeNT3Vnz2HcHh2gQpes35Xt4aRKiKjsQX7eiBl0msJFzhs72JwLK4gAAeVEPisiDBk9NZZqVD05gaQ6oxjWqaovoB2ke9xY9lGBgJLOwRuyuEx-ECVrjTktShX-jIDIBqJYo-lc7pw_-wqaG4ukn; SIDCC=AJi4QfGAdkonvfrsiF021jUzTUr2cS0IBt2O_mgwY7CzobyVFdNOc465c1s_xKTBYSfsXBkfQxE; __Secure-3PSIDCC=AJi4QfHDYvskBHJQHaaZ2R_TEaZ-M2Y0HFaSWxX30iXodHzqqGhyLt6h-4eUYBoshliNfX0fB1k" ^
  --data-raw "^{^\^"context^\^":^{^\^"client^\^":^{^\^"hl^\^":^\^"en^\^",^\^"gl^\^":^\^"IN^\^",^\^"remoteHost^\^":^\^"111.119.245.186^\^",^\^"deviceMake^\^":^\^"^\^",^\^"deviceModel^\^":^\^"^\^",^\^"visitorData^\^":^\^"Cgt2VndJM0EtYk92dyjkn4uLBg^%^3D^%^3D^\^",^\^"userAgent^\^":^\^"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36,gzip(gfe)^\^",^\^"clientName^\^":^\^"WEB^\^",^\^"clientVersion^\^":^\^"2.20211008.01.00^\^",^\^"osName^\^":^\^"Windows^\^",^\^"osVersion^\^":^\^"10.0^\^",^\^"originalUrl^\^":^\^"https://www.youtube.com/watch?v=iiADhChRriM^\^",^\^"platform^\^":^\^"DESKTOP^\^",^\^"clientFormFactor^\^":^\^"UNKNOWN_FORM_FACTOR^\^",^\^"configInfo^\^":^{^\^"appInstallData^\^":^\^"COSfi4sGEJLVrQUQ79etBRC3y60FENi-rQUQkfj8Eg^%^3D^%^3D^\^"^},^\^"userInterfaceTheme^\^":^\^"USER_INTERFACE_THEME_DARK^\^",^\^"timeZone^\^":^\^"Asia/Calcutta^\^",^\^"browserName^\^":^\^"Chrome^\^",^\^"browserVersion^\^":^\^"94.0.4606.71^\^",^\^"screenWidthPoints^\^":688,^\^"screenHeightPoints^\^":667,^\^"screenPixelDensity^\^":1,^\^"screenDensityFloat^\^":1,^\^"utcOffsetMinutes^\^":330,^\^"connectionType^\^":^\^"CONN_CELLULAR_4G^\^",^\^"mainAppWebInfo^\^":^{^\^"graftUrl^\^":^\^"https://www.youtube.com/watch?v=iiADhChRriM^\^",^\^"webDisplayMode^\^":^\^"WEB_DISPLAY_MODE_BROWSER^\^",^\^"isWebNativeShareAvailable^\^":true^}^},^\^"user^\^":^{^\^"lockedSafetyMode^\^":false^},^\^"request^\^":^{^\^"useSsl^\^":true,^\^"internalExperimentFlags^\^":^[^],^\^"consistencyTokenJars^\^":^[^{^\^"encryptedTokenJarContents^\^":^\^"AGDxDeNT3Vnz2HcHh2gQpes35Xt4aRKiKjsQX7eiBl0msJFzhs72JwLK4gAAeVEPisiDBk9NZZqVD05gaQ6oxjWqaovoB2ke9xY9lGBgJLOwRuyuEx-ECVrjTktShX-jIDIBqJYo-lc7pw_-wqaG4ukn^\^",^\^"expirationSeconds^\^":^\^"600^\^"^}^]^},^\^"clientScreenNonce^\^":^\^"MC4wOTcxODk0OTE3NTUyNDM4Mw..^\^",^\^"clickTracking^\^":^{^\^"clickTrackingParams^\^":^\^"CPQBEPBbIhMIsfiui-C_8wIVDeFzAR29NQaO^\^"^},^\^"adSignalsInfo^\^":^{^\^"params^\^":^[^{^\^"key^\^":^\^"dt^\^",^\^"value^\^":^\^"1633865700303^\^"^},^{^\^"key^\^":^\^"flash^\^",^\^"value^\^":^\^"0^\^"^},^{^\^"key^\^":^\^"frm^\^",^\^"value^\^":^\^"0^\^"^},^{^\^"key^\^":^\^"u_tz^\^",^\^"value^\^":^\^"330^\^"^},^{^\^"key^\^":^\^"u_his^\^",^\^"value^\^":^\^"2^\^"^},^{^\^"key^\^":^\^"u_h^\^",^\^"value^\^":^\^"768^\^"^},^{^\^"key^\^":^\^"u_w^\^",^\^"value^\^":^\^"1360^\^"^},^{^\^"key^\^":^\^"u_ah^\^",^\^"value^\^":^\^"768^\^"^},^{^\^"key^\^":^\^"u_aw^\^",^\^"value^\^":^\^"1360^\^"^},^{^\^"key^\^":^\^"u_cd^\^",^\^"value^\^":^\^"24^\^"^},^{^\^"key^\^":^\^"bc^\^",^\^"value^\^":^\^"31^\^"^},^{^\^"key^\^":^\^"bih^\^",^\^"value^\^":^\^"667^\^"^},^{^\^"key^\^":^\^"biw^\^",^\^"value^\^":^\^"672^\^"^},^{^\^"key^\^":^\^"brdim^\^",^\^"value^\^":^\^"0,0,0,0,1360,0,1360,768,688,667^\^"^},^{^\^"key^\^":^\^"vis^\^",^\^"value^\^":^\^"1^\^"^},^{^\^"key^\^":^\^"wgl^\^",^\^"value^\^":^\^"true^\^"^},^{^\^"key^\^":^\^"ca_type^\^",^\^"value^\^":^\^"image^\^"^}^]^}^},^\^"createCommentParams^\^":^\^"EgtpaUFEaENoUnJpTSoCCABQBw^%^3D^%^3D^\^",^\^"commentText^\^":^\^"Got introduced to REST API!^\^"^}" ^
  --compressed

  curl 'https://www.youtube.com/youtubei/v1/comment/create_comment?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8' \
  -H 'authority: www.youtube.com' \
  -H 'x-origin: https://www.youtube.com' \
  -H 'authorization: SAPISIDHASH 1633865798_f70e4fed1c6ea11a610c8a14fc03b64fc366a2b1' \
  -H 'content-type: application/json' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36' \
  -H 'x-youtube-client-name: 1' \
  -H 'x-youtube-client-version: 2.20211008.01.00' \
  -H 'x-goog-authuser: 0' \
  -H 'x-goog-visitor-id: Cgt2VndJM0EtYk92dyjkn4uLBg%3D%3D' \
  -H 'accept: */*' \
  -H 'sec-gpc: 1' \
  -H 'origin: https://www.youtube.com' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-fetch-mode: same-origin' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://www.youtube.com/watch?v=iiADhChRriM' \
  -H 'accept-language: en-GB,en-US;q=0.9,en;q=0.8' \
  -H 'cookie: VISITOR_INFO1_LIVE=vVwI3A-bOvw; YSC=UGtCcMeeEcE; wide=0; PREF=volume=40&f6=40000400&cvdm=grid&tz=Asia.Calcutta&repeat=NONE&library_tab_browse_id=FEmusic_liked_playlists&al=en&autoplay=true&f5=20030; LOGIN_INFO=AFmmF2swRQIhAINQX9F_MJd3mwpj7QmGAWgXp-H7HVx018g9oPC0xMEJAiAC5uPu6K_rMhI6_Q9BlIYZqafKOjH5Nve3VKNQFHwKsg:QUQ3MjNmeFJLME9XTXFpSVNsTVZMd2w1eG40TTVxd2RkU3NyVk5HOWhJTDNBbkhOLW8zTGZoUGVhVlBHUmswZE4yWV9VS0I2MnRpcmlla3I1MTJYaHl0Z0gtNTBfZ0ZuQVhVSThYcEMteVAwTFl4X3VBSlZ0aEJtZjdlNGZOcWQ4bzVvcldQU2Ixc0hjTy05TURMVTZWZHpuMk1QYkUzZ2xn; SID=CwgaZL8Wc20SeyLWlADjYcJenaoB43QG3jeYt-oX4zZ5-Ya_fW4mxrHu1cEOtIk_oZPnvw.; __Secure-1PSID=CwgaZL8Wc20SeyLWlADjYcJenaoB43QG3jeYt-oX4zZ5-Ya_n-nbTfw4sUcEjqB_6u88XQ.; __Secure-3PSID=CwgaZL8Wc20SeyLWlADjYcJenaoB43QG3jeYt-oX4zZ5-Ya_zPzib9KqTuh1vgKtXXBFTg.; HSID=A9Jh78bhqiYZT1snc; SSID=AppyS948QUBnXHcF0; APISID=sNaJRYE2QpsaX8xh/AgUDjrmozGz1iS7_X; SAPISID=nghPmnfutVze--E9/AqVBjHqVcuhMddrL-; __Secure-1PAPISID=nghPmnfutVze--E9/AqVBjHqVcuhMddrL-; __Secure-3PAPISID=nghPmnfutVze--E9/AqVBjHqVcuhMddrL-; CONSISTENCY=AGDxDeNT3Vnz2HcHh2gQpes35Xt4aRKiKjsQX7eiBl0msJFzhs72JwLK4gAAeVEPisiDBk9NZZqVD05gaQ6oxjWqaovoB2ke9xY9lGBgJLOwRuyuEx-ECVrjTktShX-jIDIBqJYo-lc7pw_-wqaG4ukn; SIDCC=AJi4QfGAdkonvfrsiF021jUzTUr2cS0IBt2O_mgwY7CzobyVFdNOc465c1s_xKTBYSfsXBkfQxE; __Secure-3PSIDCC=AJi4QfHDYvskBHJQHaaZ2R_TEaZ-M2Y0HFaSWxX30iXodHzqqGhyLt6h-4eUYBoshliNfX0fB1k' \
  --data-raw '{"context":{"client":{"hl":"en","gl":"IN","remoteHost":"111.119.245.186","deviceMake":"","deviceModel":"","visitorData":"Cgt2VndJM0EtYk92dyjkn4uLBg%3D%3D","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36,gzip(gfe)","clientName":"WEB","clientVersion":"2.20211008.01.00","osName":"Windows","osVersion":"10.0","originalUrl":"https://www.youtube.com/watch?v=iiADhChRriM","platform":"DESKTOP","clientFormFactor":"UNKNOWN_FORM_FACTOR","configInfo":{"appInstallData":"COSfi4sGEJLVrQUQ79etBRC3y60FENi-rQUQkfj8Eg%3D%3D"},"userInterfaceTheme":"USER_INTERFACE_THEME_DARK","timeZone":"Asia/Calcutta","browserName":"Chrome","browserVersion":"94.0.4606.71","screenWidthPoints":688,"screenHeightPoints":667,"screenPixelDensity":1,"screenDensityFloat":1,"utcOffsetMinutes":330,"connectionType":"CONN_CELLULAR_4G","mainAppWebInfo":{"graftUrl":"https://www.youtube.com/watch?v=iiADhChRriM","webDisplayMode":"WEB_DISPLAY_MODE_BROWSER","isWebNativeShareAvailable":true}},"user":{"lockedSafetyMode":false},"request":{"useSsl":true,"internalExperimentFlags":[],"consistencyTokenJars":[{"encryptedTokenJarContents":"AGDxDeNT3Vnz2HcHh2gQpes35Xt4aRKiKjsQX7eiBl0msJFzhs72JwLK4gAAeVEPisiDBk9NZZqVD05gaQ6oxjWqaovoB2ke9xY9lGBgJLOwRuyuEx-ECVrjTktShX-jIDIBqJYo-lc7pw_-wqaG4ukn","expirationSeconds":"600"}]},"clientScreenNonce":"MC4wOTcxODk0OTE3NTUyNDM4Mw..","clickTracking":{"clickTrackingParams":"CPQBEPBbIhMIsfiui-C_8wIVDeFzAR29NQaO"},"adSignalsInfo":{"params":[{"key":"dt","value":"1633865700303"},{"key":"flash","value":"0"},{"key":"frm","value":"0"},{"key":"u_tz","value":"330"},{"key":"u_his","value":"2"},{"key":"u_h","value":"768"},{"key":"u_w","value":"1360"},{"key":"u_ah","value":"768"},{"key":"u_aw","value":"1360"},{"key":"u_cd","value":"24"},{"key":"bc","value":"31"},{"key":"bih","value":"667"},{"key":"biw","value":"672"},{"key":"brdim","value":"0,0,0,0,1360,0,1360,768,688,667"},{"key":"vis","value":"1"},{"key":"wgl","value":"true"},{"key":"ca_type","value":"image"}]}},"createCommentParams":"EgtpaUFEaENoUnJpTSoCCABQBw%3D%3D","commentText":"Got introduced to REST API!"}' \
  --compressed