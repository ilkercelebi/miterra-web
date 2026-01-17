/**
 * Privacy Component
 * 
 * Privacy Policy page for Miterra Coffee
 * Displays comprehensive privacy information in both Turkish and English
 */

import '../App.css';

function Privacy() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-primary-dark dark:text-gray-200">
            {/* Privacy Policy Container */}
            <div className="max-w-4xl mx-auto px-6 py-24">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary-dark dark:from-accent-light dark:to-gray-200 bg-clip-text text-transparent">
                        Gizlilik Politikası
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">Privacy Policy</p>
                </div>

                {/* Turkish Version */}
                <section className="mb-20 prose prose-lg dark:prose-invert max-w-none">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-3xl">🇹🇷</span>
                            <h2 className="text-3xl font-bold m-0">TÜRKÇE</h2>
                        </div>

                        <h3 className="text-2xl font-bold mt-8 mb-4">1. Giriş</h3>
                        <p>
                            Miterra Coffee ("biz", "bize", "bizim") olarak, gizliliğinize saygı duyuyoruz. Bu Gizlilik Politikası, Miterra mobil uygulamasını ("Uygulama") kullanırken hangi bilgileri topladığımızı, nasıl kullandığımızını ve koruduğumuzu açıklar.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">2. Topladığımız Bilgiler</h3>

                        <h4 className="text-xl font-semibold mt-6 mb-3">2.1 Kişisel Bilgiler</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Ad ve Soyad:</strong> Profil oluşturma için</li>
                            <li><strong>Telefon Numarası:</strong> Giriş ve kimlik doğrulama için (Firebase Authentication)</li>
                            <li><strong>E-posta Adresi:</strong> İletişim için (opsiyonel)</li>
                        </ul>

                        <h4 className="text-xl font-semibold mt-6 mb-3">2.2 Kullanım Bilgileri</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>QR Kod Taramaları:</strong> Sadness loyalty program işlemleri için</li>
                            <li><strong>Kahve Satın Alma Geçmişi:</strong> Loyalty kartı takibi için</li>
                            <li><strong>Uygulama Kullanım Verileri:</strong> Firebase Analytics aracılığıyla</li>
                            <li><strong>Cihaz Bilgileri:</strong> Cihaz modeli, işletim sistemi versiyonu</li>
                            <li><strong>Push Notification Token:</strong> Bildirim göndermek için (FCM)</li>
                        </ul>

                        <h4 className="text-xl font-semibold mt-6 mb-3">2.3 Kamera ve Galeri Erişimi</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Kamera:</strong> QR kod okutma için gereklidir</li>
                            <li><strong>Galeri/Fotoğraf:</strong> Profil resmi ve kampanya görselleri yüklemek için (opsiyonel)</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4">3. Bilgileri Nasıl Kullanırız</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Loyalty program hizmetini sağlamak için</li>
                            <li>QR kod tabanlı kahve takibi için</li>
                            <li>Kampanya ve promosyon bildirimleri göndermek için</li>
                            <li>Uygulama performansını iyileştirmek için</li>
                            <li>Müşteri desteği sağlamak için</li>
                            <li>Yasal yükümlülükleri yerine getirmek için</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4">4. Veri Paylaşımı</h3>
                        <p>
                            Kişisel bilgilerinizi <strong>ASLA</strong> üçüncü taraflarla satmıyoruz. Ancak aşağıdaki durumlarda paylaşabiliriz:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Firebase/Google Cloud:</strong> Veritabanı ve kimlik doğrulama hizmetleri için</li>
                            <li><strong>Yasal Zorunluluklar:</strong> Mahkeme kararı veya yasal talep durumunda</li>
                            <li><strong>İş Ortakları:</strong> Sadece barista personeli sipariş işlemleri için sınırlı erişime sahiptir</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4">5. Veri Güvenliği</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Firebase Firestore:</strong> Şifreli veritabanı kullanımı</li>
                            <li><strong>SSL/TLS Şifreleme:</strong> Tüm veri iletişimi şifrelidir</li>
                            <li><strong>Güvenli Kimlik Doğrulama:</strong> Firebase Authentication ile</li>
                            <li><strong>Erişim Kontrolü:</strong> Role-based access control (kullanıcı/barista/admin)</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4">6. Veri Saklama Süresi</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Aktif Hesaplar:</strong> Hesap silinene kadar</li>
                            <li><strong>QR Log Kayıtları:</strong> 1 yıl boyunca</li>
                            <li><strong>Analytics Verileri:</strong> Google Analytics politikasına göre (maksimum 14 ay)</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4">7. Kullanıcı Hakları (KVKK Uyumlu)</h3>
                        <p>
                            6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında haklarınız:
                        </p>
                        <ul className="list-none pl-0 space-y-2">
                            <li>✅ Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                            <li>✅ İşlenmişse buna ilişkin bilgi talep etme</li>
                            <li>✅ Verilerin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                            <li>✅ Verilerin yurt içinde/dışında aktarıldığı üçüncü kişileri bilme</li>
                            <li>✅ Verilerin eksik/yanlış işlenmiş olması halinde düzeltilmesini isteme</li>
                            <li>✅ Verilerinizin silinmesini veya yok edilmesini talep etme</li>
                            <li>✅ İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi sonucu aleyhinize bir sonuç doğmasına itiraz etme</li>
                        </ul>
                        <p className="mt-4">
                            <strong>Veri Silme Talebi:</strong> Hesabınızı ve tüm verilerinizi silmek için Profil &gt; Ayarlar &gt; Hesabı Sil veya{' '}
                            <a href="mailto:info@miterra.com" className="text-accent hover:text-accent-dark">info@miterra.com</a> adresine e-posta gönderebilirsiniz.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">8. Çocukların Gizliliği</h3>
                        <p>
                            Uygulamamız 13 yaşın altındaki çocuklara yönelik değildir. Bilerek 13 yaşın altındaki kullanıcılardan veri toplamıyoruz.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">9. Push Notifications</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Firebase Cloud Messaging (FCM) kullanılır</li>
                            <li>Kampanya ve sistem bildirimleri</li>
                            <li>İstediğiniz zaman Ayarlar &gt; Bildirimler'den kapatabilirsiniz</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4">10. Üçüncü Taraf Hizmetler</h3>
                        <p><strong>Firebase Services (Google):</strong></p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Firebase Authentication</li>
                            <li>Cloud Firestore</li>
                            <li>Firebase Cloud Messaging</li>
                            <li>Firebase Storage</li>
                            <li>Firebase Analytics</li>
                            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-dark">Google Privacy Policy</a></li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4">11. Politika Değişiklikleri</h3>
                        <p>
                            Bu politikayı zaman zaman güncelleyebiliriz. Önemli değişiklikler olduğunda push notification ile bilgilendiririz.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">12. İletişim</h3>
                        <p>
                            <strong>Veri Sorumlusu:</strong> Miterra Coffee<br />
                            <strong>E-posta:</strong> <a href="mailto:privacy@miterra.com" className="text-accent hover:text-accent-dark">privacy@miterra.com</a><br />
                            <strong>Adres:</strong> Uludağ Üniversitesi, Görükle, Cadde No:1, 16000 Bursa
                        </p>
                    </div>
                </section>

                {/* English Version */}
                <section className="mb-20 prose prose-lg dark:prose-invert max-w-none">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-3xl">🇬🇧</span>
                            <h2 className="text-3xl font-bold m-0">ENGLISH</h2>
                        </div>

                        <h3 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h3>
                        <p>
                            Miterra Coffee ("we", "us", "our") respects your privacy. This Privacy Policy explains what information we collect, how we use it, and how we protect it when you use the Miterra mobile application ("App").
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h3>

                        <h4 className="text-xl font-semibold mt-6 mb-3">2.1 Personal Information</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Name and Surname:</strong> For profile creation</li>
                            <li><strong>Phone Number:</strong> For login and authentication (Firebase Authentication)</li>
                            <li><strong>Email Address:</strong> For communication (optional)</li>
                        </ul>

                        <h4 className="text-xl font-semibold mt-6 mb-3">2.2 Usage Information</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>QR Code Scans:</strong> For loyalty program transactions</li>
                            <li><strong>Coffee Purchase History:</strong> For loyalty card tracking</li>
                            <li><strong>App Usage Data:</strong> Through Firebase Analytics</li>
                            <li><strong>Device Information:</strong> Device model, OS version</li>
                            <li><strong>Push Notification Token:</strong> For sending notifications (FCM)</li>
                        </ul>

                        <h4 className="text-xl font-semibold mt-6 mb-3">2.3 Camera and Photo Library Access</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Camera:</strong> Required for QR code scanning</li>
                            <li><strong>Photo Library:</strong> For uploading profile and campaign images (optional)</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To provide loyalty program services</li>
                            <li>For QR code-based coffee tracking</li>
                            <li>To send campaign and promotional notifications</li>
                            <li>To improve app performance</li>
                            <li>To provide customer support</li>
                            <li>To comply with legal obligations</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4">4. Data Sharing</h3>
                        <p>
                            We <strong>NEVER</strong> sell your personal information. However, we may share in the following cases:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Firebase/Google Cloud:</strong> For database and authentication services</li>
                            <li><strong>Legal Requirements:</strong> Court orders or legal requests</li>
                            <li><strong>Business Partners:</strong> Barista staff has limited access for order processing only</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Firebase Firestore:</strong> Encrypted database</li>
                            <li><strong>SSL/TLS Encryption:</strong> All data transmission is encrypted</li>
                            <li><strong>Secure Authentication:</strong> Via Firebase Authentication</li>
                            <li><strong>Access Control:</strong> Role-based access control (user/barista/admin)</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4">6. Data Retention</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Active Accounts:</strong> Until account deletion</li>
                            <li><strong>QR Log Records:</strong> 1 year</li>
                            <li><strong>Analytics Data:</strong> Per Google Analytics policy (max 14 months)</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h3>
                        <p>You have the right to:</p>
                        <ul className="list-none pl-0 space-y-2">
                            <li>✅ Know if your personal data is being processed</li>
                            <li>✅ Request information about processed data</li>
                            <li>✅ Request correction of incomplete or inaccurate data</li>
                            <li>✅ Request deletion of your data</li>
                            <li>✅ Object to automated decision-making</li>
                        </ul>
                        <p className="mt-4">
                            <strong>Data Deletion:</strong> To delete your account and all data, go to Profile &gt; Settings &gt; Delete Account or email{' '}
                            <a href="mailto:info@miterra.com" className="text-accent hover:text-accent-dark">info@miterra.com</a>
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">8. Children's Privacy</h3>
                        <p>
                            Our app is not intended for children under 13. We do not knowingly collect data from users under 13.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">9. Push Notifications</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Uses Firebase Cloud Messaging (FCM)</li>
                            <li>Campaign and system notifications</li>
                            <li>Can be disabled anytime in Settings &gt; Notifications</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4">10. Third-Party Services</h3>
                        <p><strong>Firebase Services (Google):</strong></p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Firebase Authentication</li>
                            <li>Cloud Firestore</li>
                            <li>Firebase Cloud Messaging</li>
                            <li>Firebase Storage</li>
                            <li>Firebase Analytics</li>
                            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-dark">Google Privacy Policy</a></li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-8 mb-4">11. Policy Changes</h3>
                        <p>
                            We may update this policy from time to time. We will notify you of significant changes via push notification.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">12. Contact</h3>
                        <p>
                            <strong>Data Controller:</strong> Miterra Coffee<br />
                            <strong>Email:</strong> <a href="mailto:privacy@miterra.com" className="text-accent hover:text-accent-dark">privacy@miterra.com</a><br />
                            <strong>Address:</strong> Uludağ University, Görükle, Street No:1, 16000 Bursa, Turkey
                        </p>
                    </div>
                </section>

                {/* App Store Disclosures */}
                <section className="prose prose-lg dark:prose-invert max-w-none">
                    <div className="bg-gradient-to-br from-accent/10 to-primary-dark/10 dark:from-accent-light/10 dark:to-gray-700/20 rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-3xl">📋</span>
                            <h2 className="text-3xl font-bold m-0">App Store & Play Store Disclosures</h2>
                        </div>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Data Collection Summary</h3>

                        <h4 className="text-xl font-semibold mt-6 mb-3">Collected Data Types:</h4>
                        <ul className="list-none pl-0 space-y-2">
                            <li>✅ Name</li>
                            <li>✅ Phone Number</li>
                            <li>✅ Email (optional)</li>
                            <li>✅ Purchase History</li>
                            <li>✅ Device ID</li>
                            <li>✅ Usage Data</li>
                            <li>✅ Camera (for QR scanning)</li>
                            <li>✅ Photos (optional, user-initiated)</li>
                        </ul>

                        <h4 className="text-xl font-semibold mt-6 mb-3">Data Usage:</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>App Functionality</li>
                            <li>Analytics</li>
                            <li>Product Personalization</li>
                            <li>Marketing/Advertising (campaigns only)</li>
                        </ul>

                        <h4 className="text-xl font-semibold mt-6 mb-3">Data Linked to User:</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name, Phone, Email</li>
                            <li>Purchase History</li>
                        </ul>

                        <h4 className="text-xl font-semibold mt-6 mb-3">Tracking:</h4>
                        <p>❌ No third-party tracking for advertising</p>

                        <h4 className="text-xl font-semibold mt-6 mb-3">Data Security:</h4>
                        <ul className="list-none pl-0 space-y-2">
                            <li>✅ Data encrypted in transit</li>
                            <li>✅ Data encrypted at rest (Firebase)</li>
                            <li>✅ User can request data deletion</li>
                        </ul>
                    </div>
                </section>

                {/* Back to Home Link */}
                <div className="text-center mt-12">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        <span>← Ana Sayfaya Dön / Back to Home</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Privacy;
