const API_KEY = "2373995dbd82304ca8dc8117a9b7230b";

// Fonksiyon şehir ve birim bilgilerini parametre olarak alır
async function fetchWeatherData(city, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );
    // console.log(response.json());
    // Eğer istek başarılı değilse hata fırlatma
    if (!response.ok) {
      throw new Error("İstek başarılı değil");
    }
    // Api'den gelen yanıtı JSON formatına dönüştür ve geri dönderme
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
// FetchWeatherData fonksiyonunu diğer dosyalarda kullanılabilir hale getirme
export default fetchWeatherData;
