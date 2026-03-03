## CSS Kararlı Notları 
  ## 1. Breakpoint Secimi
 640px → Tablet / küçük ekranlar için uygun, genellikle iPad ve orta boy cihazları kapsıyor.
 1024px → Masaüstü ve büyük ekranlar için, layout genişleyip daha fazla içerik yan yana sığacak şekilde optimize ediliyor.
  ## 2. Layout Tercihleri
  Responsive olarak dikey yığına geçmek de Flexbox ile kolayca mümkün.
  Kartları eşit aralık ve responsive şekilde yerleştirmek için Grid ideal.
  Auto-fit: Kartlar sığdığı kadar sütun oluşturuyor ve boş alanları eşit paylaştırıyor.
  ## 3. Design Tokens
  --color-primary: #1E3A8A → Logo ve vurgular için koyu mavi, güven ve profesyonellik hissi veriyor.
  --color-secondary: #2563EB → Hover ve button durumları için canlı mavi.
  --color-bg: #FFFFFF, --color-surface: #F9FAFB → Temiz, okunabilir bir arka plan.
  --color-text: #1F2937, --color-muted: #6B7280 → Ana metin ve alt metin ayrımı için.
  --space-xs → küçük boşluklar, padding ve margin için.
  --space-sm, --space-md, --space-lg → layout hiyerarşisi ve kart aralıkları için.
  --space-2xl, --space-3xl → section paddingleri ve büyük boşluklar için.
  Küçük ekranlarda okunabilirlik için minimum değer.
  Orta ekranlarda viewport’a bağlı olarak büyüme.
   ## 4. Responsive Stratejiler
   Varsayılan CSS mobil ekranlar için yazıldı.
   Daha büyük ekranlar için min-width: 640px ve min-width: 1024px media query’leri eklendi.
   Header: Yatay Flex → Dikey Flex (mobilde)
   Navigation: Inline linkler → Blok, full width linkler
   img { max-width: 100%; height: auto; } ile responsive
   Hakkımda fotoğrafı: aspect-ratio: 1; object-fit: cover
   Proje kartları: fixed height ve object-fit: cover