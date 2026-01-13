# Miterra Web - Artisan Coffee Website

Miterra Cafe için modern, responsive bir web sitesi. React + Vite ile geliştirilmiştir.

## 🚀 Özellikler

- ✨ Modern ve responsive tasarım
- 🌙 Dark mode desteği
- 📱 Mobil uyumlu
- 🎨 Tailwind CSS ile stil
- ⚡ Vite ile hızlı geliştirme

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Build'i önizle
npm run preview
```

## 🌐 GitHub Pages'e Deploy

Bu proje `gh-pages` paketi ile GitHub Pages'e deploy edilir.

### Adımlar:

1. **GitHub Pages'i etkinleştirin**:
   - GitHub repository'nize gidin
   - **Settings** → **Pages**
   - **Source**: "Deploy from a branch" seçin
   - **Branch**: `gh-pages` / `/ (root)` seçin
   - **Save**

2. **Deploy komutunu çalıştırın**:
   ```bash
   npm run deploy
   ```

3. **Sitenizi kontrol edin**:
   - Birkaç dakika sonra siteniz `https://KULLANICI_ADI.github.io/miterra/` adresinde yayında olacak

### Otomatik Deploy

- Her değişiklikten sonra `npm run deploy` komutunu çalıştırmanız yeterli
- Deploy işlemi build eder ve `gh-pages` branch'ine push eder

## 📝 Notlar

- İlk deploy 2-3 dakika sürebilir
- GitHub Pages HTTPS kullanır
- Custom domain kullanmak için GitHub Pages ayarlarından domain ekleyebilirsiniz
- `vite.config.js`'de base path `/miterra/` olarak ayarlı (repository adınıza göre güncelleyin)
