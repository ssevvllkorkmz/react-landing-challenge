import React, { useState, useEffect } from 'react';
import './styles/landing.scss';
import Button from './components/Button/Button.jsx';
import Card from './components/Card/Card';
import Accordion from './components/Accordion/Accordion';
import Input from './components/Input/Input';

function App() {
  const [theme, setTheme] = useState('light');
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'İsim alanı boş bırakılamaz.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta alanı boş bırakılamaz.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Form başarıyla gönderildi! (Yalancı Submit)');
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <div className="app-container">
      <header className="navbar">
        <h2>StajPro.</h2>
        <nav>
          <Button variant="secondary" size="small" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </Button>
        </nav>
      </header>

      <main>
        <section className="section hero">
          <h1>Geleceği Kodlamaya Başla</h1>
          <p>
            Staj projelerinizi hızlı, erişilebilir ve modern bir şekilde hayata geçirin.
            Güçlü UI bileşenlerimizle zaman kazanın.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Button variant="primary" size="large">Hemen Başla</Button>
            <Button variant="secondary" size="large">Daha Fazla Bilgi</Button>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Özellikler</h2>
          <div className="grid-container">
            <Card title="Hızlı Kurulum">
              <p>Vite ve React ile saniyeler içinde projenizi ayağa kaldırın.</p>
            </Card>
            <Card title="Erişilebilirlik">
              <p>Klavye navigasyonu ve aria etiketleri ile herkes için uyumlu.</p>
            </Card>
            <Card title="Modern Tasarım">
              <p>Özelleştirilebilir SCSS yapısı ve BEM metodolojisi.</p>
            </Card>
          </div>
        </section>

        <section className="section" style={{ backgroundColor: 'var(--secondary-color)' }}>
          <h2 className="section__title">Fiyatlandırma</h2>
          <div className="grid-container" style={{ justifyContent: 'center' }}>
            <Card title="Başlangıç" footer={<Button variant="secondary">Seç</Button>}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ücretsiz</h3>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Temel Bileşenler</li>
                <li>Topluluk Desteği</li>
              </ul>
            </Card>
            <Card title="Pro" footer={<Button variant="primary">Satın Al</Button>}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>$19/ay</h3>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Tüm Bileşenler</li>
                <li>7/24 Destek</li>
                <li>Özel Temalar</li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">Sıkça Sorulan Sorular</h2>
          <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Accordion title="Bu kütüphane başka projelerde kullanılabilir mi?">
              <p>Evet, bileşenler tamamen bağımsız ve tekrar kullanılabilir şekilde tasarlanmıştır.</p>
            </Accordion>
            <Accordion title="Hangi teknolojiler kullanıldı?">
              <p>React, Vite, ve SCSS kullanılmıştır.</p>
            </Accordion>
          </div>
        </section>

        <section className="section">
          <h2 className="section__title">İletişim</h2>
          <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Input
              id="name"
              label="Adınız Soyadınız"
              placeholder="Örn: Ahmet Yılmaz"
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
            />
            <Input
              id="email"
              label="E-posta Adresi"
              type="email"
              placeholder="ornek@mail.com"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <div style={{ width: '100%', marginTop: '1rem' }}>
              <Button variant="primary" type="submit" style={{ width: '100%' }}>Gönder</Button>
            </div>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 StajPro. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;