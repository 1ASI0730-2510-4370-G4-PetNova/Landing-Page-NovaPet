<template>
  <div id="app">
    <!-- Header -->
    <header class="header">
      <nav class="navbar">
        <div class="logo">
          <img src="@/assets/images/logoPetnova.png" alt="Petnova Logo" class="logo-img" />
        </div>
        <ul class="nav-links">
          <li><a href="#home">{{ $t("home.title") }}</a></li>
          <li><a href="#why-choose-us">{{ $t("whyChooseUs.title") }}</a></li>
          <li><a href="#subscriptions">{{ $t("subscriptions.title") }}</a></li>
          <li><a href="#contact">{{ $t("contact.title") }}</a></li>
          <li>
            <button @click="changeLanguage('en')">EN</button>
            <button @click="changeLanguage('es')">ES</button>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Home Section -->
    <section id="home" class="home-section">
      <div class="home-content">
        <div class="home-text">
          <h1>{{ $t('home.description') }}</h1>
          <p>{{ $t('home.subTitle') }}</p>
          <div class="buttons">
            <button class="btn">{{ $t('home.getStarted') }}</button>
          </div>
          <div class="icons">
            <div><img src="@/assets/images/pata.png" alt="Health Icon" /><p>{{ $t('home.petHealth') }}</p></div>
            <div><img src="@/assets/images/aguja.png" alt="Vaccine Icon" /><p>{{ $t('home.vaccines') }}</p></div>
            <div><img src="@/assets/images/recordatorio.png" alt="Reminder Icon" /><p>{{ $t('home.reminders') }}</p></div>
          </div>
        </div>
        <div class="home-image">
          <img src="@/assets/images/homeImage.png" alt="Vet with Pet" />
        </div>
      </div>
    </section>

    <!-- Other Sections -->
    <section id="why-choose-us" class="why-choose-us">
      <h2>{{ $t('whyChooseUs.title') }}</h2>
      <p>{{ $t('whyChooseUs.description') }}</p>
      <ul class="points">
        <li>{{ $t('whyChooseUs.points.1') }}</li>
        <li>{{ $t('whyChooseUs.points.2') }}</li>
        <li>{{ $t('whyChooseUs.points.3') }}</li>
      </ul>
    </section>

    <!-- Subscriptions Section -->
    <section id="subscriptions" class="subscriptions">
      <h2>{{ $t('subscriptions.title') }}</h2>
      <div class="plans">
        <div class="plan-card">
          <h3>{{ $t('subscriptions.plans.starter.name') }}</h3>
          <p class="price">{{ $t('subscriptions.plans.starter.price') }}</p>
          <ul>
            <li>{{ $t('subscriptions.plans.starter.features.0') }}</li>
            <li>{{ $t('subscriptions.plans.starter.features.1') }}</li>
            <li>{{ $t('subscriptions.plans.starter.features.2') }}</li>
          </ul>
        </div>
        <div class="plan-card">
          <h3>{{ $t('subscriptions.plans.growth.name') }}</h3>
          <p class="price">{{ $t('subscriptions.plans.growth.price') }}</p>
          <ul>
            <li>{{ $t('subscriptions.plans.growth.features.0') }}</li>
            <li>{{ $t('subscriptions.plans.growth.features.1') }}</li>
            <li>{{ $t('subscriptions.plans.growth.features.2') }}</li>
          </ul>
        </div>
        <div class="plan-card">
          <h3>{{ $t('subscriptions.plans.premium.name') }}</h3>
          <p class="price">{{ $t('subscriptions.plans.premium.price') }}</p>
          <ul>
            <li>{{ $t('subscriptions.plans.premium.features.0') }}</li>
            <li>{{ $t('subscriptions.plans.premium.features.1') }}</li>
            <li>{{ $t('subscriptions.plans.premium.features.2') }}</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Our Partners Section -->
    <section id="our-partners" class="partners-section">
      <h2>Our Partners</h2>
      <div class="partners-logos">
        <div class="partner-logo">
          <img src="@/assets/images/canbo.png" alt="Canbo Dog Food Logo" />
        </div>
        <div class="partner-logo">
          <img src="@/assets/images/eukanuba.png" alt="Eukanuba Logo" />
        </div>
        <div class="partner-logo">
          <img src="@/assets/images/superpet.png" alt="SuperPet Logo" />
        </div>
        <div class="partner-logo">
          <img src="@/assets/images/proplan.png" alt="Purina Pro Plan Logo" />
        </div>
      </div>
    </section>
    <!-- Customers Section -->
    <section id="customers" class="customers-section">
      <h2>Customers</h2>
      <div class="customers">
        <div class="customer-card">
          <img src="@/assets/images/hombre-perro.png" alt="Customer 1" />
          <h3>Streamlined Workflow</h3>
          <p>With Pawfect Care, I spend less time on paperwork and more time caring for my patients. It’s a tool every veterinarian should have.</p>
        </div>
        <div class="customer-card">
          <img src="@/assets/images/mujer-gato.png" alt="Customer 2" />
          <h3>Peace of Mind</h3>
          <p>Scheduling my dog’s appointment has never been easier. Everything is just a click away, and I feel at ease knowing his health is in good hands.</p>
        </div>
        <div class="customer-card">
          <img src="@/assets/images/mujer-perro.png" alt="Customer 3" />
          <h3>Effortless Management</h3>
          <p>Since using Pawfect Care, our clinic runs like clockwork. Appointments schedule themselves, and our patients are happier than ever.</p>
        </div>
      </div>
    </section>
    <!-- For Veterinarians Section -->
    <section id="for-veterinarians" class="veterinarians-section">
      <div class="vet-content">
        <div class="vet-text">
          <h2>Are you a veterinarian?</h2>
          <p>Digitalize your operations and grow faster with FuelTrack's smart order management.</p>
          <div class="vet-buttons">
            <button class="btn">{{ $t('home.getStarted') }}</button>
          </div>
          <div class="vet-icons">
            <div><img src="@/assets/images/cliniccare.png" alt="Clinic Care Icon" /><p>Clinic Care</p></div>
            <div><img src="@/assets/images/patient.png" alt="Patient Records Icon" /><p>Patient Records</p></div>
            <div><img src="@/assets/images/appointments.png" alt="Appointments Icon" /><p>Appointments</p></div>
          </div>
        </div>
        <div class="vet-image">
          <img src="@/assets/images/veterinarian.png" alt="Veterinarian with Cat" />
        </div>
      </div>
    </section>
    <!-- Contact Section -->
    <section id="contact" class="contact">
      <h2>{{ $t('contact.title') }}</h2>
      <form>
        <label>{{ $t('contact.name') }}:</label>
        <input type="text" placeholder="Enter your name" />
        <label>{{ $t('contact.phoneNumber') }}:</label>
        <input type="text" placeholder="Enter your phone number" />
        <label>{{ $t('contact.message') }}:</label>
        <textarea placeholder="Enter your message"></textarea>
        <button>{{ $t('contact.sendMessage') }}</button>
      </form>
    </section>

    <!-- Footer -->
    <footer>
      <p>© 2025 Petnova. All Rights Reserved.</p>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>

<style scoped>
/* Global Styles */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f9fd;
  color: #333;
}

h1, h2 {
  font-size: 2.5em;
  color: #1E3A5F;
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

/* Header Styles */
.header {
  background-color: #1E3A5F;
  color: white;
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .logo-img {
  height: 50px;
}

.navbar .nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar .nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
}

.navbar button {
  background-color: #6ABFE3;
  border: none;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
}

.navbar button:hover {
  background-color: #6ABFE3;
}

/* Home Section */
.home-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 60px 0;
}

.home-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

.home-text {
  max-width: 50%;
  text-align: left;
}

.home-text h1 {
  font-size: 3em;
}

.home-text p {
  font-size: 1.3em;
  color: #555;
}

.buttons .btn {
  background-color: #6ABFE3;
  padding: 15px 30px;
  color: white;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
}

.buttons .btn:hover {
  background-color: #6ABFE3;
}

.icons {
  display: flex;
  gap: 50px;
  margin-top: 40px;
}

.icons div {
  text-align: center;
}

.icons img {
  height: 50px;
  margin-bottom: 10px;
}

.home-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

/* Why Choose Us Section */
.why-choose-us {
  background-color: #f4f9fd;
  padding: 60px 20px;
  text-align: center;
}

.points {
  list-style: none;
  padding: 0;
}

.points li {
  font-size: 1.2em;
  margin-bottom: 10px;
}

/* Subscriptions Section */
.subscriptions {
  background-color: #ffffff;
  padding: 60px 20px;
  text-align: center;
}

.plans {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
}

.plan-card {
  background-color: #f4f9fd;
  padding: 20px;
  width: 280px;
  border-radius: 10px;
  text-align: center;
}

.plan-card h3 {
  font-size: 2em;
}

.plan-card .price {
  font-size: 1.5em;
  margin-top: 10px;
  color: #f5a623;
}

.plan-card ul {
  list-style: none;
  padding: 0;
}

.plan-card ul li {
  font-size: 1.1em;
  margin-bottom: 10px;
}
/* Our Partners Section */
.partners-section {
  text-align: center;
  padding: 60px 20px;
  background-color: #f4f9fd;
}

.partners-section h2 {
  font-size: 2.5em;
  color: #2b5b8a;
  margin-bottom: 40px;
}

.partners-logos {
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
}

.partner-logo img {
  height: 100px;
  object-fit: contain;
}
/* Customers Section */
.customers-section {
  text-align: center;
  padding: 60px 20px;
  background-color: #1E3A5F;
}

.customers-section h2 {
  font-size: 2.5em;
  color: #FFFFFF;
  margin-bottom: 40px;
}

.customers {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  align-items: center;
}

.customer-card {
  background-color: #ffffff;
  padding: 20px;
  width: 280px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.customer-card img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 20px;
}

.customer-card h3 {
  font-size: 1.5em;
  color: #2b5b8a;
}

.customer-card p {
  font-size: 1.1em;
  color: #555;
}
/* For Veterinarians Section */
.veterinarians-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 60px 20px;
}

.vet-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

.vet-image {
  max-width: 45%;
}

.vet-image img {
  width: 100%;
  border-radius: 10px;
}

.vet-text {
  max-width: 50%;
  text-align: left;
}

.vet-text h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.vet-text p {
  font-size: 1.3em;
  color: #555;
}

.vet-buttons .btn {
  background-color: #f5a623;
  padding: 15px 30px;
  color: white;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
}

.vet-buttons .btn:hover {
  background-color: #d4830e;
}

.vet-icons {
  display: flex;
  gap: 50px;
  margin-top: 40px;
}

.vet-icons div {
  text-align: center;
}

.vet-icons img {
  height: 50px;
  margin-bottom: 10px;
}

/* Contact Section */
.contact {
  background-color: #f4f9fd;
  padding: 60px 20px;
  text-align: center;
}

form input,
form textarea {
  width: 60%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

form button {
  background-color: #f5a623;
  padding: 10px 20px;
  color: white;
  border: none;
  cursor: pointer;
}

form button:hover {
  background-color: #d4830e;
}

/* Footer */
footer {
  background-color: #1E3A5F;
  color: white;
  text-align: center;
  padding: 20px 0;
}

.footer-links a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
