<script setup>
import WD2 from '../assets/img/portfolio/WD/structural/WD2.jpg';

</script>
<script>

export default {
  name: "Portfolio",
  data() {
    return {
      filterValue: 'All',
      isMobile: false,
      threeDImages: [],
      twoDImages:[],
      structuralWD:[],
      interiorWD: [],
      boxSizeCount3D:0,
      boxSizeCount2D:0,
      boxSizeCountStructuralWD:0,
      boxSizeCountInternalWD:0,
      coverImgUrl: '',
      profileImgUrl:'',
      aboutMeText:''
    }
  },
  methods: {
    setFilterValue(value) {
      localStorage.setItem('filterValue',value)
      this.$forceUpdate();
    },
    getImages: async () => {
      try {
        const fetchUrl = `https://cdn.contentful.com/spaces/ayoqprjz5dly/environments/master/entries?sys.id=71ArQ8C44gWbbvkbHfKjO0`;
        const fetchOptions = {
          method: "GET",
          headers: {
            Authorization: `Bearer 7EwYxT-Z1DCReyP5LWk4NXSn4XVPxffV4mWG-wL_mDU`,
            "Content-Type": "application/json"
          }
        };
        const response = await fetch(fetchUrl, fetchOptions).then(response =>
          response.json()
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  },
   async created() {
    let response = await this.getImages();
    let imgResponse = response.includes.Asset;

    this.threeDImages = imgResponse.filter(obj => obj.fields.title === '3D')
    this.twoDImages = imgResponse.filter(obj => obj.fields.title === '2D')
    this.structuralWD = imgResponse.filter(obj => obj.fields.title === 'structural_wd')
    this.interiorWD = imgResponse.filter(obj => obj.fields.title === 'interior_wd')
    this.profileImgUrl = imgResponse.filter(obj => obj.fields.title === 'profile-img')
    this.aboutMeText = response.items[0].fields.aboutUsText
    this.boxSizeCount3D = this.threeDImages.length % 3 === 0 ? 0 :this.threeDImages.length % 3 === 1? 2: 1;
    this.boxSizeCount2D = this.twoDImages.length % 3 === 0 ? 0 :this.twoDImages.length % 3 === 1? 2: 1;
    this.boxSizeCountStructuralWD = this.structuralWD.length % 3 === 0 ? 0 :this.structuralWD.length % 3 === 1? 2: 1;
    this.boxSizeCountInternalWD = this.interiorWD.length % 3 === 0 ? 0 :this.interiorWD.length % 3 === 1? 2: 1;
  },
  beforeMount() {
    this.filterValue = 'All'
    this.isMobile = window.innerWidth > 600 ? false : true
  },
  beforeUpdate() {
    this.filterValue = localStorage.filterValue
    this.isMobile = window.innerWidth > 600 ? false : true
  }
};

</script>

<template>
  <!-- ======= Mobile nav toggle button ======= -->
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

  <!-- ======= Header ======= -->
  <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img :src="profileImgUrl[0] ? profileImgUrl[0].fields.file.url:''" alt="" class="img-fluid rounded-circle">
        <h1 class="text-light"><a href="index.html">Waani Maheshwari</a></h1>
        <div class="social-links mt-3 text-center">
          <!-- <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> -->
          <a href="https://www.facebook.com/waani.maheshwari.5" target="_blank" class="facebook"><i
              class="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/waanim121/" target="_blank" class="instagram"><i
              class="bx bxl-instagram"></i></a>
          <a href="https://wa.me/918552855631" target="_blank" class="google-plus"><i class='bx bxl-whatsapp'></i></a>
          <a :href='"https://www.linkedin.com/in/waani-maheshwari/"' target="_blank" class="linkedin"><i
              class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#skills" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Technical Skills</span></a>
          </li>
          <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i>
              <span>Portfolio</span></a></li>
          <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav><!-- .nav-menu -->
    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
      <h1>Waani Maheshwari</h1>
      <p>I'm <span class="typed" data-typed-items="Architect, Freelancer, Designer"></span></p>
    </div>
  </section><!-- End Hero -->

  <main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about" style="padding-bottom:30px;">
      <div class="container">

        <div class="section-title">
          <h2>About</h2>
          <div class="content">
            <h3 style="font-size: 22px;">Architect</h3>
          </div>
          <p>{{aboutMeText?aboutMeText:''}}</p>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img :src="profileImgUrl[0] ? profileImgUrl[0].fields.file.url:''" class="img-fluid" alt="profile-img"
              style="width:350px;height:250px;">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91-8552855631</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Chaumahla(Raj.)</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Arch.</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>waanim121@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->

    <!-- ======= Facts Section ======= -->
    <!-- <section id="facts" class="facts">
      <div class="container">

        <div class="section-title">
          <h2>Facts</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row no-gutters">

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
            <div class="count-box">
              <i class="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                class="purecounter"></span>
              <p><strong>Happy Clients</strong> consequuntur quae</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="count-box">
              <i class="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1"
                class="purecounter"></span>
              <p><strong>Projects</strong> adipisci atque cum quia aut</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="count-box">
              <i class="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1"
                class="purecounter"></span>
              <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
            <div class="count-box">
              <i class="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1"
                class="purecounter"></span>
              <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
            </div>
          </div>

        </div>

      </div>
    </section> -->
    <!-- End Facts Section -->

    <!-- ======= Skills Section ======= -->
    <section id="skills" class="skills section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Technical Skills</h2>
        </div>

        <div class="row skills-content">

          <div class="col-lg-6" data-aos="fade-up">

            <div class="progress">
              <span class="skill">Autocad <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Skepchup <i class="val">65%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Lumion <i class="val">65%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Hand drafting <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div class="progress">
              <span class="skill">Revit <i class="val">40%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Photoshop <i class="val">50%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">MS Office <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Physical Model Making <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>


          </div>

        </div>

      </div>
    </section><!-- End Skills Section -->

    <!-- ======= Resume Section ======= -->
    <!-- <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>Resume</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Alex Smith</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and
                  developing user-centered digital/print marketing material from initial concept to final, polished
                  deliverable.</em></p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Master of Fine Arts &amp; Graphic Design</h4>
              <h5>2015 - 2016</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui
                ut dignissimos deleniti nerada porti sand markend</p>
            </div>
            <div class="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius
                unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart
                dila</p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Senior graphic design specialist</h4>
              <h5>2019 - Present</h5>
              <p><em>Experion, New York, NY </em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production
                  communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the
                  project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the
                  design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and
                  advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section> -->
    <!-- End Resume Section -->

    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Portfolio</h2>
          <!-- ==={{filterValue}}=========={{isMobile}} -->
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter=".all-filter" class="filter-active" @click="setFilterValue('All')">All</li>
              <li data-filter=".filter-app" @click="setFilterValue('filter-app')">3D</li>
              <li data-filter=".filter-card" @click="setFilterValue('filter-card')">2D</li>
              <li data-filter=".filter-web" v-tooltip="'Working Drawing'" @click="setFilterValue('filter-web')">WD</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          <!-- All filter code starts here-->
          <template v-if="!isMobile">
            <div class="col-lg-4 portfolio-item all-filter" v-show="filterValue === 'All'">
              <h2 class="custom_H2">3D Models</h2>
            </div>
            <div class="col-lg-4 portfolio-item all-filter" v-show="filterValue === 'All'">
              <h2 style="visibility: hidden" class="custom_H2">Structural Working Drawing</h2>
            </div>
            <div class="col-lg-4 portfolio-item all-filter" v-show="filterValue === 'All'">
              <h2 style="visibility: hidden" class="custom_H2">Structural Working Drawing</h2>
            </div>
          </template>
          <template v-if="isMobile">
            <div class="col-lg-12 portfolio-item all-filter" v-show="filterValue === 'All'">
              <h2 class="custom_H2">3D Models</h2>
            </div>
          </template>

          <div class="col-lg-4 col-md-6 portfolio-item all-filter" v-show="filterValue === 'All'" v-for="item in threeDImages">
            <div class="portfolio-wrap">
              <img :src="item.fields.file.url" class="img-fluid" v-bind:alt="item.fields.description">
              <div class="portfolio-links">
                <a :href="item.fields.file.url" data-gallery="portfolioGallery" class="portfolio-lightbox" style="width: 100%;"><i
                    class="bx bx-plus"></i></a>
              </div>
            </div>
          </div>

          <template v-if="!isMobile">
            <div class="col-lg-4 col-md-6 portfolio-item all-filter" v-show="filterValue === 'All' && boxSizeCount3D > 0"
              style="visibility: hidden;" v-for="item in boxSizeCount3D">
              <div class="portfolio-wrap">
                <img :src="WD2" class="img-fluid" v-bind:alt="item">
                <div class="portfolio-links">
                  <a :href="WD2" data-gallery="portfolioGallery" class="portfolio-lightbox" style="width: 100%;"><i
                      class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 portfolio-item all-filter" v-show="filterValue === 'All'">
              <h2 class="custom_H2">2D Layout</h2>
            </div>
            <div class="col-lg-4 portfolio-item all-filter" v-show="filterValue === 'All'">
              <h2 style="visibility: hidden" class="custom_H2">2D Layout</h2>
            </div>
            <div class="col-lg-4 portfolio-item all-filter" v-show="filterValue === 'All'">
              <h2 style="visibility: hidden" class="custom_H2">2D Layout</h2>
            </div>
          </template>
          <template v-if="isMobile">
            <div class="col-lg-12 portfolio-item all-filter" v-show="filterValue === 'All'">
              <h2 class="custom_H2">2D Layout</h2>
            </div>
          </template>

          <div class="col-lg-4 col-md-6 portfolio-item all-filter" v-show="filterValue === 'All'" v-for="imgData2D in twoDImages">
            <div class="portfolio-wrap">
              <img :src="imgData2D.fields.file.url" class="img-fluid" v-bind:alt="imgData2D.fields.description">
              <div class="portfolio-links">
                <a :href="imgData2D.fields.file.url" data-gallery="portfolioGallery" class="portfolio-lightbox" style="width: 100%;"><i
                    class="bx bx-plus"></i></a>
              </div>
            </div>
          </div>

          <template v-if="!isMobile">
            <div class="col-lg-4 col-md-6 portfolio-item all-filter" v-show="filterValue === 'All' && boxSizeCount2D > 0"
              style="visibility: hidden;" v-for="item in boxSizeCount2D">
              <div class="portfolio-wrap">
                <img :src="WD2" class="img-fluid" v-bind:alt="item">
                <div class="portfolio-links">
                  <a :href="WD2" data-gallery="portfolioGallery" class="portfolio-lightbox" style="width: 100%;"><i
                      class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 portfolio-item all-filter" v-show="filterValue === 'All'">
              <h2 class="custom_H2">Working Drawing</h2>
            </div>
            <div class="col-lg-4 portfolio-item all-filter" v-show="filterValue === 'All'">
              <h2 style="visibility: hidden" class="custom_H2">Working Drawing</h2>
            </div>
            <div class="col-lg-4 portfolio-item all-filter" v-show="filterValue === 'All'">
              <h2 style="visibility: hidden" class="custom_H2">Working Drawing</h2>
            </div>
          </template>
          <template v-if="isMobile">
            <div class="col-lg-12 portfolio-item all-filter" v-show="filterValue === 'All'">
              <h2 class="custom_H2">Working Drawing</h2>
            </div>
          </template>
          <div class="col-lg-4 col-md-6 portfolio-item all-filter" v-show="filterValue === 'All'" v-for="item in structuralWD">
            <div class="portfolio-wrap">
              <img :src="item.fields.file.url" class="img-fluid" v-bind:alt="item.fields.description">
              <div class="portfolio-links">
                <a :href="item.fields.file.url" data-gallery="portfolioGallery" class="portfolio-lightbox" style="width: 100%;"><i
                    class="bx bx-plus"></i></a>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 portfolio-item all-filter" v-show="filterValue === 'All'" v-for="item in interiorWD">
            <div class="portfolio-wrap">
              <img :src="item.fields.file.url" class="img-fluid" v-bind:alt="item.fields.description">
              <div class="portfolio-links">
                <a :href="item.fields.file.url" data-gallery="portfolioGallery" class="portfolio-lightbox" style="width: 100%;"><i
                    class="bx bx-plus"></i></a>
              </div>
            </div>
          </div>
          <!-- All filter code ends here -->


          <!-- 3D filter code starts here -->
          <div class="col-lg-4 col-md-6 portfolio-item filter-app" v-show="filterValue === 'filter-app'" v-for="item in threeDImages">
            <div class="portfolio-wrap">
              <img :src="item.fields.file.url" class="img-fluid" v-bind:alt="item.fields.description">
              <div class="portfolio-links">
                <a :href="item.fields.file.url" data-gallery="portfolioGallery" class="portfolio-lightbox" style="width: 100%;"><i
                    class="bx bx-plus"></i></a>
              </div>
            </div>
          </div>
          <!-- 3D filter code ends here -->

          <!-- Structural Working Drawing Code -->
          <template v-if="!isMobile">
            <div class="col-lg-4 portfolio-item filter-web" v-show="filterValue === 'filter-web'">
              <h2 class="custom_H2">Structural Working Drawing</h2>
            </div>
            <div class="col-lg-4 portfolio-item filter-web" v-show="filterValue === 'filter-web'">
              <h2 style="visibility: hidden" class="custom_H2">Structural Working Drawing</h2>
            </div>
            <div class="col-lg-4 portfolio-item filter-web" v-show="filterValue === 'filter-web'">
              <h2 style="visibility: hidden" class="custom_H2">Structural Working Drawing</h2>
            </div>
          </template>

          <template v-if="isMobile">
            <div class="col-lg-12 portfolio-item filter-web" v-show="filterValue === 'filter-web'">
              <h2 class="custom_H2">Structural Working Drawing</h2>
            </div>
          </template>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web" v-show="filterValue === 'filter-web'" v-for="item in structuralWD">
            <div class="portfolio-wrap">
              <img :src="item.fields.file.url" class="img-fluid" v-bind:alt="item.fields.description">
              <div class="portfolio-links">
                <a :href="item.fields.file.url" data-gallery="portfolioGallery" class="portfolio-lightbox" style="width: 100%;"><i
                    class="bx bx-plus"></i></a>
              </div>
            </div>
          </div>

          <template v-if="!isMobile">
            <div class="col-lg-4 col-md-6 portfolio-item filter-web" v-show="filterValue === 'filter-web' && boxSizeCountStructuralWD > 0"
              style="visibility: hidden;" v-for="item in boxSizeCountStructuralWD">
              <div class="portfolio-wrap">
                <img :src="WD2" class="img-fluid" v-bind:alt="item">
                <div class="portfolio-links">
                  <a :href="WD2" data-gallery="portfolioGallery" class="portfolio-lightbox" style="width: 100%;"><i
                      class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </template>

          <!-- Interior Working Drawing Code -->
          <template v-if="!isMobile">
            <div class="col-lg-4 portfolio-item filter-web" v-show="filterValue === 'filter-web'">
              <h2 class="custom_H2">Interior Working Drawing</h2>
            </div>
            <div class="col-lg-4 portfolio-item filter-web" v-show="filterValue === 'filter-web'">
              <h2 style="visibility: hidden;" class="custom_H2">Interior Working Drawing</h2>
            </div>
            <div class="col-lg-4 portfolio-item filter-web" v-show="filterValue === 'filter-web'">
              <h2 style="visibility: hidden;" class="custom_H2">Interior Working Drawing</h2>
            </div>
          </template>

          <template v-if="isMobile">
            <div class="col-lg-12 portfolio-item filter-web" v-show="filterValue === 'filter-web'">
              <h2 class="custom_H2">Interior Working Drawing</h2>
            </div>
          </template>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web" v-show="filterValue === 'filter-web'" v-for="item in interiorWD">
            <div class="portfolio-wrap">
              <img :src="item.fields.file.url" class="img-fluid" v-bind:alt="item.fields.description">
              <div class="portfolio-links">
                <a :href="item.fields.file.url" data-gallery="portfolioGallery" class="portfolio-lightbox"
                  style="width: 100%;"><i class="bx bx-plus"></i></a>
              </div>
            </div>
          </div>

          <!-- 2D image filter code starts here-->
          <div class="col-lg-4 col-md-6 portfolio-item filter-card" v-show="filterValue === 'filter-card'" v-for="imgData2D in twoDImages">
            <div class="portfolio-wrap">
              <img :src="imgData2D.fields.file.url" class="img-fluid" v-bind:alt="imgData2D.fields.description">
              <div class="portfolio-links">
                <a :href="imgData2D.fields.file.url" data-gallery="portfolioGallery" class="portfolio-lightbox" style="width: 100%;"><i
                    class="bx bx-plus"></i></a>
              </div>
            </div>
          </div>
          <!-- 2D image filter code ends here-->
        </div>
      </div>
    </section><!-- End Portfolio Section -->

    <!-- ======= Services Section ======= -->
    <!-- <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div class="icon"><i class="bi bi-briefcase"></i></div>
            <h4 class="title"><a href="">Lorem Ipsum</a></h4>
            <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div class="icon"><i class="bi bi-card-checklist"></i></div>
            <h4 class="title"><a href="">Dolor Sitema</a></h4>
            <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat tarad limino ata</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div class="icon"><i class="bi bi-bar-chart"></i></div>
            <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
            <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
            <div class="icon"><i class="bi bi-binoculars"></i></div>
            <h4 class="title"><a href="">Magni Dolores</a></h4>
            <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div class="icon"><i class="bi bi-brightness-high"></i></div>
            <h4 class="title"><a href="">Nemo Enim</a></h4>
            <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div class="icon"><i class="bi bi-calendar4-week"></i></div>
            <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
            <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
              soluta nobis est eligendi</p>
          </div>
        </div>

      </div>
    </section> -->
    <!-- End Services Section -->

    <!-- ======= Testimonials Section ======= -->
    <!-- <section id="testimonials" class="testimonials section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-item" data-aos="fade-up">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                  quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="../assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item" data-aos="fade-up" data-aos-delay="100">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                  quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="../assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item" data-aos="fade-up" data-aos-delay="200">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                  tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="../assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item" data-aos="fade-up" data-aos-delay="300">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                  minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="../assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-item" data-aos="fade-up" data-aos-delay="400">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
                  labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="../assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section> -->
    <!-- End Testimonials Section -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-title">
          <h2>Contact</h2>
        </div>
        <div class="row" data-aos="fade-in">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Near Bilawali Road, Chaumahla(Raj.)</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>waanim121@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 8552855631</p>
              </div>
              <div id="map"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.563442096402!2d75.5971256!3d23.9405082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39645b8ccc517843%3A0xc534020c2feda34a!2sBilawali%20Rd%2C%20Chaumahla%2C%20Rajasthan%20326515!5e0!3m2!1sen!2sin!4v1655960483932!5m2!1sen!2sin"
                frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
            </div>
          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdIWL5yaQos-q6FCbSQ0UxYUszY1P4hM33DXfds6A8roSFRSg/viewform?embedded=true"
              width="640" height="1250" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

  </main><!-- End #main -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
      class="bi bi-arrow-up-short"></i></a>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
