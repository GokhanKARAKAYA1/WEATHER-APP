// Zaman dilimini kullanarak biçimlendirilmiş bir tarih ve saat bilgisini döndüren fonksiyon
function convertTimeStamp(timeStamp, timezone) {
  // Zaman dilimini saat cinsinden dönüştürür (saniyeden saate)
  const convertTimezone = timezone / 3600;
  // Yeni bir tarih nesnesini oluştur
  const date = new Date(timeStamp * 1000);
  // Tarih ve Saat bilgisi için seçenekleri belirle
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timezone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(
      convertTimezone
    )}`, // Zaman dilimini belirleme
    hour12: true, // 12 saat formatında gösterilsin mi
  };
  // Tarihi ve saati kullanıcıya dost bir formata döndürür
  return date.toLocaleString("en-US", options);
}
// Ülke kodunu ülke adına çeviren fonksiyon
function convertCountryCode(country) {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  // Ülke kodunu alına bu "Intl.DisplayNames" örneği kullanarak ülke adına dönderir
  console.log(regionNames.of(country));
  return regionNames.of(country);
}

export { convertTimeStamp, convertCountryCode };
/*
      * Intl.DisplayNames: Javascriptte uluslararası dil ve bölge adlarına 
      * çevirmek için kullanılan bir API'dir
  
      * Intl:Internationalization
      * DisplayNames
  */
