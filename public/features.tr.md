# RelaySMS Hakkında

## İçindekiler

- [Tarihçe ve kullanım alanları](#tarihçe-ve-kullanım-alanları)
  - [Tarihçe](#tarihçe)
  - [Kullanım alanları](#kullanım-alanları)
- [Teknik yapı](#teknik-yapı)
  - [Temel yazılım bileşenleri](#temel-yazılım-bileşenleri)
- [Keşfedilecek yollar](#keşfedilecek-yollar)
- [Platformlar](#platformlar)
- [Köprüler](#köprüler)
- [İstemciler](#i̇stemciler)
- [Gateway istemcileri](#gateway-istemcileri)
- [Kendi sunucunda barındırma (gerçek deneyime göre yazılacak)](#kendi-sunucunda-barındırma-gerçek-deneyime-göre-yazılacak)
- [Çıkarılan dersler](#çıkarılan-dersler)

---

## Tarihçe ve kullanım alanları

### Tarihçe

SMSWithoutBorders projesi 2021'de başladı ve 2022'de Internews'ten alınan bir hibe ile ardından Open Technology Fund'ın (OTF) sürekli desteği sayesinde internet kesintileriyle mücadele eden bir araca dönüştü.

SMSWithoutBorders, SWOB (SMSWithoutBorders'ın kısaltması) adlı tek bir Android istemcisiyle başladı; bu istemcinin adı daha sonra RelaySMS olarak değiştirildi. Takip eden yıllarda, 2023'ten itibaren uçtan uca şifreleme desteğine sahip bir SMS mesajlaşma uygulaması olan DekuSMS'i geliştirmeye başladık.

O dönemde RelaySMS için SMS iletimini Raspberry Pi ve USB modemlerle yapıyorduk; bu yöntem güç ve diğer lojistik sorunlar nedeniyle verimsizdi. Hizmetin kesinti süresi son derece yüksekti ve bu da hizmetin düşük ve sürekli yavaş benimsenmesine yol açtı.

Daha sonra iletimi DekuSMS'e taşıdık; bu daha iyi performans sağladı ve kesinti süresini %90'ın üzerinde azalttı. Bu da ilk kez kullananlar için daha iyi bir deneyim ve hizmetin bir miktar benimsenmesini sağladı.

RelaySMS'i geliştirme deneyimimiz, siyasi nedenlerle internet kesintisi yaşanan bir ortamda yaşamış olmamızdan kaynaklanıyor. Kesinti, ülkenin 2 bölgesinde 90 günden fazla sürdü ve bir Afrika rekoru kırdı. Bu, 2016'da Kamerun'da yaşandı.

### Kullanım alanları

RelaySMS, SMS mesajlarını kullanarak internet üzerinden mesajlaşmayı mümkün kılmayı amaçlayan açık kaynaklı bir iletişim platformudur. Bu, özellikle aktif internet bağlantısı olmayan bölgelerde işe yarar; bu durum hem uzak bölgelerde hem de huzursuzluk dönemlerinde yaygındır.

Hükümetlerin interneti tamamen (bazı durumlarda kısmen) kapatarak kendi halkına karşı bir silah olarak kullandığı iyi bilinmektedir. Bu, insanların haberlere ve hayat kurtarıcı bilgilere ulaşmasını engeller. Ayrıca ticareti ve güvenli iletişimi de sekteye uğratır. Bu koşullarda VPN'ler gibi araçlar ve başlıca sansür aşma teknikleri çalışmaz, çünkü işlemek için bir miktar internet erişimine ihtiyaç duyarlar.

RelaySMS'i tam da bu koşullar için geliştiriyoruz. SMS mesajlarının da huzursuzluk dönemlerinde zaman zaman engellendiğini biliyoruz; ancak genellikle internet bağlantılarından daha hızlı yeniden açılır. Bunun nedeni, karşı tarafın SMS mesajlaşmasını (yerel olarak kişiden kişiye iletişimin ötesinde) henüz bir tehdit olarak görmemesi olabilir.

---

## Teknik yapı

RelaySMS iki şekilde kullanılabilir: köprüler veya platformlar (ayrıntılar aşağıda). Hangi mod kullanılırsa kullanılsın:

- Kullanıcının mesaj içeriği, ileri gizlilik (forward secrecy) için Signal'in Double Ratchet algoritması kullanılarak kullanıcının cihazında şifrelenir.
- Mesajlar bir Gateway istemcisine (büyük olasılıkla Deku SMS çalıştıran bir Android cihaza) gönderilir. Bu cihaz gelen mesajı (hâlâ şifreli olarak) bir Gateway sunucusu çalıştıran bulut örneğine iletir.
- Gateway sunucusu mesajın hangi mod için olduğunu belirler ve mesajı yayımlanmak üzere bir köprü ya da platform sunucusuna aktarır.
- Mesajın şifresi ardından Vault'tan (kullanıcının kimlik bilgilerini koruyan ve saklayan sunucu tarafı yazılım) alınan anahtarlarla çözülür. Şifresi çözülen mesaj daha sonra yayımlanır.
- Gmail gibi çevrimiçi platformlarda yayımlama durumunda, kullanıcı isteğin durumunu (başarıyla yayımlandı veya yayımlanamadı) bildiren bir SMS alır.

**Not:** Köprülerden alınan mesajlar, bir istemciden gönderilen ilk mesaja verilen yanıtlardır. Bu, Double Ratchet oturumunu tamamlar; yani yeni bir anahtar seti üretilir (Ratcheting).

### Temel yazılım bileşenleri

- İstemciler (Android veya iOS uygulamaları)
- Gateway İstemcileri: DekuSMS çalıştıran Android cihazlar
- Gateway sunucusu: Mesajların nereye yayımlanacağını belirleyen yazılım
- Köprüler – ayrıntılar aşağıda
- Platformlar – ayrıntılar aşağıda
- Vault – Kullanıcı adına hassas verileri saklayan güvenli bir yazılım. Buna güvenlik anahtarları ve çevrimiçi yayımlama belirteçleri dahildir (ayrıntılar Platformlar bölümünde)

---

## Keşfedilecek yollar

Kısa vadede RelaySMS gibi araçlar, gelen bilgileri abone olan dinleyicilere yayınlamak üzere hazırlanmış çevrimiçi platformlarla iletişim kurmak için kullanılabilir. Bunlar WhatsApp/Signal/Telegram grupları gibi mesajlaşma kanalları olabilir.

---

## Platformlar

Bu, RelaySMS'in ilk ve orijinal iletişim modudur. Bu işlev, kullanıcının çevrimiçi platformlarına erişimini, RelaySMS Vault'larını çalıştıran bir bulut örneğine kaydetmesini gerektirir. Kaydedilen erişim türleri OAuth2.0 belirteçleri (yalnızca yayımlama yetkili) ve hesap belirteçleridir (Telegram gibi platformlar için). Bu belirteçler üçüncü bir tarafın kullanıcı adına işlem yapabilmesi için tasarlanmıştır; kullanıcı, yetki kapsamları (scope) ile üçüncü tarafın ne ölçüde işlem yapabileceğini belirler.

Kullanıcının bu belirteçleri verebilmesi için üçüncü tarafa güvenmesi gerekir; çünkü üçüncü tarafın kullanıcının onayı olmadan onun adına işlem yapma ihtimali vardır.

RelaySMS, kullanıcılara bir üçüncü tarafın kendi yaptıkları isteklerin ötesinde onların adına işlem yapıp yapmadığını nasıl doğrulayacaklarını öğretir. Bu, neredeyse tüm platformlarda standarttır; çünkü kullanıcının verdiği yetki kapsamı, hizmetin yaptığı işlemlerin kayıtlarını değiştirmesine (silmesine veya düzenlemesine) izin vermez.

Kişinin kendi çevrimiçi platformlarını bu şekilde kullanmasının faydaları arasında güveni artıran tutarlılık yer alır; alıcı, göndericinin kim olduğunu bilir. Sosyal medyada kullanıcının geniş bir takipçi kitlesi olabilir ve bu kitle, kullanıcı çevrimdışıyken yaşanan olaylardan anlık haberdar olmaktan fayda sağlar. Takipçiler başka bir hesaba taşınamaz ve mesajın duyulması gerekir. Bu, kullanıcının üyesi olduğu gruplar için de geçerlidir.

Kullanıcının bu adımları internet erişimi varken atması gerekir. Bunun, bir internet kesintisine hazırlığın ilk aşamalarına dahil edilmesi şiddetle tavsiye edilir. Bir internet kesintisine nasıl hazırlanılacağına dair bazı rehberlerimiz burada, ek kaynaklar ise aşağıdadır.

Şu anda desteklenen platformlar:

- Gmail
- Telegram
- Twitter (X)
- BlueSky
- Mastodon

---

## Köprüler

RelaySMS ile yayımlamanın bu modu ikincil ama kritik bir mod olarak kabul edilir. Kullanıcının çevrimiçi platformlarını kaydetmek için internet erişimi olmadığında ya da ana hesaplarını kullanmadan bilgi göndermek istediğinde köprüleri kullanır.

Köprüler, kullanıcının telefon numarasını hem mesaj gönderebilen hem de alabilen kalıcı bir e-posta takma adına dönüştürerek çalışır. Örnek bir senaryo:

+237123456789 telefon numarasına sahip bir kullanıcı, istemcilerden birini (Android veya iOS) kullanarak bir mesaj yazar ve gönderir. Mesaj cihazda şifrelenir ve onu Gateway sunucusuna ileten bir Gateway istemcisine gönderilir. Gateway sunucusu bunun bir köprü mesajı olduğunu belirler ve köprü sunucusuna iletir. Köprü sunucusu ardından kullanıcının telefon numarasından bir takma ad oluşturur ve ilgili açık anahtarları Vault'ta güvenle saklar. Bu kullanıcının telefon numarası için örnek bir takma ad şöyle olur: 237123456789@relaysms.me.

Kullanıcının mesajı bu takma ad kullanılarak hedeflenen alıcılara gönderilir. Kullanıcının telefon numarası alıcı tarafından zaten biliniyorsa bu büyük bir avantajdır; çünkü mesajın kaynağına duyulan güveni artırır.

Alıcı kullanıcının mesajına yanıt verirse, yanıt şifrelenir ve SMS ile kullanıcıya geri iletilir. Kullanıcı daha sonra mesajın şifresini RelaySMS istemcisinde (uygulamada) çözebilir.

Bu mod, gönderici ile alıcı arasında çift yönlü iletişim sağlar. Takma ad oluşturulduktan sonra, bu takma ada gönderilen her mesaj şifrelenir ve SMS ile kullanıcıya iletilir.

[Takma adın gelen kutusunun ne olduğu ve mesaj kullanıcıya iletilene kadar nasıl korunduğu hakkında daha fazla bilgi eklenmeli]

---

## İstemciler

RelaySMS için en çok desteklenen istemciler Android ve iOS istemcileridir. İkisi farklı işlevler sunar ve Android istemcisi güncellemeleri iOS'tan daha hızlı alır.

Tüm istemciler, Vault ile iletişim ve mesaj yayımlama için geliştirilmiş aynı standart protokolleri kullanır. Her istemcinin entegre etmesi gereken standartlar şunlardır:

- Vault'ta hesap oluşturma
- Vault'taki bir hesaba giriş yapma
- Aşağıdaki protokoller için hesapları Vault'a kaydetme:
  - OAuth2.0, ör. Bluesky
  - Telefon numarasıyla kimlik doğrulama, ör. Telegram
  - Köprülerle ilk mesajları yayımlama
  - Köprülerle sonraki mesajları yayımlama
  - Kayıtlı platformlardan mesaj yayımlama
  - Cihaz kimliği kullanarak kayıtlı platformlardan mesaj yayımlama
  - Belirteçleri cihazda saklama
  - Cihazda saklanan belirteçlerle yayımlama

Burada tanıtılan kavramlar:

- Cihaz Kimliği: Hem Vault'ta hem de istemcide türetilip saklanan, tanımlayıcı bir belirteçtir. Kullanıcının, telefon numarasını birincil kimlik aracı olarak kullanmadan kayıtlı platformları üzerinden mesaj yayımlamasını sağlar. Bu, SMS göndermek için kullanılan numaranın değişebildiği ancak gerekli tüm gönderim bilgilerinin cihazda bulunmaya devam ettiği çift SIM'li telefonlarda istemcilere yardımcı olur. Bu isteğe bağlı bir ayardır ve istemcilerde varsayılan olarak açık olmamalıdır.

- Belirteçleri cihazda saklama: Kullanıcının belirteçleri (OAuth2.0 veya telefon numarası tabanlı) öncelikle Vault'ta güvenle saklanır. İstemciler bu belirteçlerin Vault'tan cihaza taşınmasını talep edebilir. Belirteçler daha sonra yayımlama sırasında mesaja eklenir. Yenileme belirteci (OAuth2.0'da yaygın bir mekanizma) söz konusu olduğunda, yeni belirteç SMS ile cihaza geri gönderilir.

İstemciler, projelerinin işlevselliği için ihtiyaç duydukları yayımlama yöntemlerinden herhangi birini uygulamakta serbesttir.

Varsayılan istemciler, kullanıcıların onları tercih ettikleri herhangi bir Vault örneğine yönlendirmesine olanak tanır – ayrıntılar kendi sunucunda barındırma bölümünde. Bunun için yayımlamada kullandıkları Gateway istemcisinin de aynı Vault örneğine yönlendirilmesi gerekir; aksi takdirde mesajların şifresi sunucu tarafında çözülemez.

Her istemci farklı olabileceğinden, her istemci kendi rehberlerini sunmalıdır. RelaySMS ekibinin sağladığı varsayılan rehberleri burada bulabilirsiniz [RelaySMS rehberleri eklenecek]

---

## Gateway istemcileri

Gateway istemcileri, RelaySMS istemcilerinden gelen SMS mesajlarını alabilen cihazlardır. Gateway istemcileri Android cihazlarda veya USB modemli Linux cihazlarda çalıştırılabilir. RelaySMS'in varsayılan örnekleri, varsayılan Gateway istemcisi olarak DekuSMS çalıştıran Android cihazları kullanır. Ancak herhangi bir alıcıyı Gateway istemcisine dönüştürmek için yapılması gereken, JSON formatındaki [referans eklenecek] bir veri yükünü Gateway sunucusu çalıştıran bir bulut örneğine iletmektir.

Gateway istemcileri istemcilerle anahtar paylaşmadığından (ve istemcileri önceden tanımadığından) gelen mesajların şifresini çözemez. Gönderilen mesajlar ileri gizliliği de destekler; yani her mesaj farklı bir anahtarla şifrelenir – dolayısıyla bir mesajın anahtarını elde etmek, sonraki mesajların anahtarlarını elde etmeyi sağlamaz.

---

## Kendi sunucunda barındırma (gerçek deneyime göre yazılacak)

- Gereksinimler
- Platform ekleme
- İstemciler
- Gateway İstemcileri
- Destek
- Bitcoin
- Açık kaynak bağışları
- Paypal
- Olası yollar
- SMS ile internet
- Tüm mesajlaşmanın SMS ile yapılması

---

## Çıkarılan dersler

- Güçlü başlamak: Platformun teknik ihtiyaçlarını çok erken yayımlamak, kullanıcıların yazılım hakkında olumsuz bir görüş oluşturmasına yol açabilir. İlk ilgi insanların görüşlerini şekillendirmede çok etkili olduğundan, bundan sonra toparlanmak çok zordur. "Çok erken"in ne zaman olduğunu bilmek de oldukça zordur ve genellikle "hazır hissettirdiğinde" yayımlarız.
- Erken bir topluluk oluşturmak ve geliştirme sürecini gerçekleştiği anda üyelerle paylaşmak herkesi ilgili tutar ve karşılaştıkları sorunlara karşı daha anlayışlı olmalarını sağlar. Bunu, erkenden bir Telegram kanalı açıp üyelerle geliştirme ve yaklaşan özellikler hakkında iletişime geçtiğimiz DekuSMS'te deneyimledik. Kullanıcılar sorunlarını paylaşıyor ve güncellemeleri takip ediyordu – yazılım hazır olmasa ya da hatalı olsa bile insanlar topluluklara katılıyordu.
