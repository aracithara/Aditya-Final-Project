// src/scripts/pages/about/about-page.js
import NavigationHelper from "../../utils/navigation-helper";

class AboutPage {
  async render() {
    return `
      <section class="container about-page" id="main-content">
        <div class="about-header">
          <h1 class="about-title">About <span class="highlight">Aditya</span></h1>
          <div class="title-underline"></div>
        </div>
        
        <div class="about-content">
          <div class="about-description">
            <p>Bebaskan imajinasi Anda dengan Aditorium Story! Bukan hanya tempat untuk membaca ribuan cerita inspiratif, tetapi juga platform bagi Anda untuk menuangkan ide dan menerbitkan karya Anda sendiri. Bergabunglah dengan komunitas kami, bagikan cerita Anda, dan temukan audiens yang tepat. Unduh sekarang dan biarkan kisah Anda dibaca oleh para pengguna!</p>
          </div>
        </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    NavigationHelper.setupAuthenticatedNavigation();
  }
}

export default AboutPage;
