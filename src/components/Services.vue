<script setup lang="ts">
import { ref } from 'vue';

interface ServicesContent {
  name: string,
  link: string
}

const servicesContent: ServicesContent[] = [
  {
    name: "UX DESIGN",
    link: ""
  },
  {
    name: "UI DESIGN",
    link: ""
  },
  {
    name: "WEBSITE DEVELOPMENT",
    link: ""
  },
  {
    name: "MOBILE APP DEVELOPMENT",
    link: ""
  },
  {
    name: "ECOMMERCE",
    link: ""
  },
  {
    name: "CUSTOMER LOYALTY",
    link: ""
  },
  {
    name: "DIGITAL TRANSFORMATION",
    link: ""
  },
  {
    name: "DIGITAL MARKETING",
    link: ""
  },
  {
    name: "BRANDING",
    link: ""
  }
];

const viewTarget = ref<string>("");

const viewMore = (e: any) => viewTarget.value = e.target.classList[2];
const leaveView = () => viewTarget.value = "";
const handleItemName = (val: string) => val.toLowerCase().split(" ").join("-");
const handleImgName = (name: string) => new URL(`../assets/servicesIcon/${name.toLocaleLowerCase().split(" ").join("-")}.png`, import.meta.url).href;

</script>

<template>
<section id="services">
  <div class="awardsBlock">
    <div class="awardsDes fw-400">
      <div class="title awards">
        <h3>AWARDS</h3>
        <svg width="191" height="13" viewBox="0 0 191 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M178.746 11.2952C182.462 11.2952 184.347 9.16196 186.011 7.28243C186.436 6.79844 186.399 6.05603 185.923 5.62373C185.447 5.19144 184.717 5.22903 184.292 5.71301C182.757 7.44688 181.431 8.94582 178.746 8.94582C176.056 8.94582 174.734 7.44688 173.2 5.71301C171.536 3.83347 169.655 1.7002 165.94 1.7002C162.224 1.7002 160.338 3.83347 158.674 5.71301C157.14 7.44688 155.818 8.94582 153.129 8.94582C150.439 8.94582 149.117 7.44688 147.583 5.71301C145.919 3.83347 144.038 1.7002 140.318 1.7002C136.602 1.7002 134.716 3.83347 133.057 5.71301C131.523 7.44688 130.196 8.94582 127.511 8.94582C124.826 8.94582 123.5 7.44688 121.965 5.71301C120.302 3.83347 118.421 1.7002 114.705 1.7002C110.989 1.7002 109.104 3.83347 107.444 5.71301C105.91 7.44688 104.588 8.94582 101.899 8.94582C99.2088 8.94582 97.887 7.44688 96.3527 5.71301L96.5237 5.90566C96.4867 5.83988 96.4405 5.7741 96.385 5.71301C94.7213 3.83347 92.8403 1.7002 89.1199 1.7002C85.4042 1.7002 83.5186 3.83347 81.8549 5.71301C80.3205 7.44688 78.9941 8.94582 76.309 8.94582C73.6192 8.94582 72.2975 7.44688 70.7631 5.71301C69.0993 3.83347 67.2184 1.7002 63.5026 1.7002C59.7869 1.7002 57.9013 3.83347 56.2421 5.71301C54.7078 7.44688 53.386 8.94582 50.6963 8.94582C48.0065 8.94582 46.6848 7.44688 45.1504 5.71301C43.4866 3.83347 41.6057 1.7002 37.8899 1.7002C34.1742 1.7002 32.2886 3.83347 30.6295 5.71301C29.0951 7.44688 27.7733 8.94582 25.0836 8.94582C22.3938 8.94582 21.0721 7.44688 19.5377 5.71301C17.8739 3.83347 15.993 1.7002 12.2772 1.7002C8.5615 1.7002 6.6759 3.83347 5.01676 5.71301L4.99827 5.73181C4.56384 6.21579 4.60082 6.9582 5.07684 7.3905C5.55286 7.82279 6.27844 7.7852 6.70825 7.30122L6.72674 7.28243C8.26109 5.54855 9.58286 4.04962 12.2726 4.04962C14.9624 4.04962 16.2841 5.54855 17.8185 7.28243C19.4822 9.16196 21.3632 11.2952 25.079 11.2952C28.7947 11.2952 30.6803 9.16196 32.3394 7.28243C33.8738 5.54855 35.1956 4.04962 37.8853 4.04962C40.5751 4.04962 41.8968 5.54855 43.4312 7.28243C45.0949 9.16196 46.9759 11.2952 50.6917 11.2952C54.4074 11.2952 56.293 9.16196 57.9521 7.28243C59.4865 5.54855 60.8083 4.04962 63.498 4.04962C66.1878 4.04962 67.5095 5.54855 69.0439 7.28243C70.7076 9.16196 72.5886 11.2952 76.3044 11.2952C80.0201 11.2952 81.9057 9.16196 83.5694 7.28243C85.1038 5.54855 86.4256 4.04962 89.1153 4.04962C91.6942 4.04962 93.0159 5.42638 94.4763 7.07098C94.5133 7.13676 94.5595 7.20254 94.615 7.26363L94.6335 7.28243C96.2972 9.16196 98.1782 11.2952 101.894 11.2952C105.61 11.2952 107.495 9.16196 109.154 7.28243C110.689 5.54855 112.011 4.04962 114.7 4.04962C117.39 4.04962 118.712 5.54855 120.246 7.28243C121.91 9.16196 123.791 11.2952 127.507 11.2952C131.222 11.2952 133.108 9.16196 134.767 7.28243C136.301 5.54855 137.628 4.04962 140.313 4.04962C143.003 4.04962 144.325 5.54855 145.859 7.28243C147.523 9.16196 149.404 11.2952 153.119 11.2952C156.835 11.2952 158.721 9.16196 160.384 7.28243C161.919 5.54855 163.241 4.04962 165.93 4.04962C168.62 4.04962 169.942 5.54855 171.476 7.28243C173.149 9.16666 175.03 11.2952 178.746 11.2952Z" fill="#26C6D0" stroke="#26C6D0" stroke-width="3" stroke-miterlimit="10" stroke-linejoin="round"/>
        </svg>
      </div>
      <p>
        Cras quis nulla commodo, aliquam lectus sed,<br />
        blandit augue. Cras ullamcorper bibendum<br /> bibendum. Duis tincidunt urna non pretium porta.<br />
        Nam condimentum vitae ligula vel ornare. Phasellus<br />
        at semper turpis. Nunc eu tellus tortor. Etiam at<br />
        condimentum nisl, vitae sagittis orci. Donec id<br />
        dignissim nunc. 
      </p>
    </div>
    <div class="awardsImgs">
      <img :class="{ 'mr-38': n === 1 || n === 3 }" v-for="n in 4" src="../assets/awards.png" alt="awards">
    </div>
  </div>

  <div class="title services">
    <h3>OUR INGRADIENTS</h3>
    <svg width="369" height="13" viewBox="0 0 369 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M357.746 11.2952C361.462 11.2952 363.347 9.16196 365.011 7.28243C365.436 6.79844 365.399 6.05603 364.923 5.62373C364.447 5.19144 363.717 5.22903 363.292 5.71301C361.757 7.44688 360.431 8.94582 357.746 8.94582C355.056 8.94582 353.734 7.44688 352.2 5.71301C350.536 3.83347 348.655 1.7002 344.94 1.7002C341.224 1.7002 339.338 3.83347 337.674 5.71301C336.14 7.44688 334.818 8.94582 332.129 8.94582C329.439 8.94582 328.117 7.44688 326.583 5.71301C324.919 3.83347 323.038 1.7002 319.318 1.7002C315.602 1.7002 313.716 3.83347 312.057 5.71301C310.523 7.44688 309.196 8.94582 306.511 8.94582C303.826 8.94582 302.5 7.44688 300.965 5.71301C299.302 3.83347 297.421 1.7002 293.705 1.7002C289.989 1.7002 288.104 3.83347 286.444 5.71301C284.91 7.44688 283.588 8.94582 280.899 8.94582C278.209 8.94582 276.887 7.44688 275.353 5.71301L275.524 5.90566C275.487 5.83988 275.44 5.7741 275.385 5.71301C273.721 3.83347 271.84 1.7002 268.12 1.7002C264.404 1.7002 262.519 3.83347 260.855 5.71301C259.32 7.44688 257.994 8.94582 255.309 8.94582C252.619 8.94582 251.297 7.44688 249.763 5.71301C248.099 3.83347 246.218 1.7002 242.503 1.7002C238.787 1.7002 236.901 3.83347 235.242 5.71301C233.708 7.44688 232.386 8.94582 229.696 8.94582C227.007 8.94582 225.685 7.44688 224.15 5.71301C222.487 3.83347 220.606 1.7002 216.89 1.7002C213.174 1.7002 211.289 3.83347 209.629 5.71301C208.095 7.44688 206.773 8.94582 204.084 8.94582C201.394 8.94582 200.072 7.44688 198.538 5.71301C196.874 3.83347 194.993 1.7002 191.277 1.7002C187.561 1.7002 185.676 3.83347 184.017 5.71301L183.998 5.73181C183.564 6.21579 183.601 6.9582 184.077 7.3905C184.553 7.82279 185.278 7.7852 185.708 7.30122L185.727 7.28243C187.261 5.54855 188.583 4.04962 191.273 4.04962C193.962 4.04962 195.284 5.54855 196.818 7.28243C198.482 9.16196 200.363 11.2952 204.079 11.2952C207.795 11.2952 209.68 9.16196 211.339 7.28243C212.874 5.54855 214.196 4.04962 216.885 4.04962C219.575 4.04962 220.897 5.54855 222.431 7.28243C224.095 9.16196 225.976 11.2952 229.692 11.2952C233.407 11.2952 235.293 9.16196 236.952 7.28243C238.486 5.54855 239.808 4.04962 242.498 4.04962C245.188 4.04962 246.51 5.54855 248.044 7.28243C249.708 9.16196 251.589 11.2952 255.304 11.2952C259.02 11.2952 260.906 9.16196 262.569 7.28243C264.104 5.54855 265.426 4.04962 268.115 4.04962C270.694 4.04962 272.016 5.42638 273.476 7.07098C273.513 7.13676 273.56 7.20254 273.615 7.26363L273.633 7.28243C275.297 9.16196 277.178 11.2952 280.894 11.2952C284.61 11.2952 286.495 9.16196 288.154 7.28243C289.689 5.54855 291.011 4.04962 293.7 4.04962C296.39 4.04962 297.712 5.54855 299.246 7.28243C300.91 9.16196 302.791 11.2952 306.507 11.2952C310.222 11.2952 312.108 9.16196 313.767 7.28243C315.301 5.54855 316.628 4.04962 319.313 4.04962C322.003 4.04962 323.324 5.54855 324.859 7.28243C326.523 9.16196 328.404 11.2952 332.119 11.2952C335.835 11.2952 337.721 9.16196 339.384 7.28243C340.919 5.54855 342.241 4.04962 344.93 4.04962C347.62 4.04962 348.942 5.54855 350.476 7.28243C352.149 9.16666 354.03 11.2952 357.746 11.2952Z" fill="#585880" stroke="#585880" stroke-width="3" stroke-miterlimit="10" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M178.746 11.2952C182.462 11.2952 184.347 9.16196 186.011 7.28243C186.436 6.79844 186.399 6.05603 185.923 5.62373C185.447 5.19144 184.717 5.22903 184.292 5.71301C182.757 7.44688 181.431 8.94582 178.746 8.94582C176.056 8.94582 174.734 7.44688 173.2 5.71301C171.536 3.83347 169.655 1.7002 165.94 1.7002C162.224 1.7002 160.338 3.83347 158.674 5.71301C157.14 7.44688 155.818 8.94582 153.129 8.94582C150.439 8.94582 149.117 7.44688 147.583 5.71301C145.919 3.83347 144.038 1.7002 140.318 1.7002C136.602 1.7002 134.716 3.83347 133.057 5.71301C131.523 7.44688 130.196 8.94582 127.511 8.94582C124.826 8.94582 123.5 7.44688 121.965 5.71301C120.302 3.83347 118.421 1.7002 114.705 1.7002C110.989 1.7002 109.104 3.83347 107.444 5.71301C105.91 7.44688 104.588 8.94582 101.899 8.94582C99.2088 8.94582 97.887 7.44688 96.3527 5.71301L96.5237 5.90566C96.4867 5.83988 96.4405 5.7741 96.385 5.71301C94.7213 3.83347 92.8403 1.7002 89.1199 1.7002C85.4042 1.7002 83.5186 3.83347 81.8548 5.71301C80.3205 7.44688 78.9941 8.94582 76.309 8.94582C73.6192 8.94582 72.2974 7.44688 70.7631 5.71301C69.0993 3.83347 67.2183 1.7002 63.5026 1.7002C59.7869 1.7002 57.9013 3.83347 56.2421 5.71301C54.7078 7.44688 53.386 8.94582 50.6963 8.94582C48.0065 8.94582 46.6847 7.44688 45.1504 5.71301C43.4866 3.83347 41.6056 1.7002 37.8899 1.7002C34.1742 1.7002 32.2886 3.83347 30.6294 5.71301C29.0951 7.44688 27.7733 8.94582 25.0836 8.94582C22.3938 8.94582 21.072 7.44688 19.5377 5.71301C17.8739 3.83347 15.993 1.7002 12.2772 1.7002C8.56148 1.7002 6.67588 3.83347 5.01674 5.71301L4.99826 5.73181C4.56383 6.21579 4.6008 6.9582 5.07682 7.3905C5.55284 7.82279 6.27843 7.7852 6.70823 7.30122L6.72672 7.28243C8.26108 5.54855 9.58285 4.04962 12.2726 4.04962C14.9623 4.04962 16.2841 5.54855 17.8185 7.28243C19.4822 9.16196 21.3632 11.2952 25.0789 11.2952C28.7947 11.2952 30.6803 9.16196 32.3394 7.28243C33.8738 5.54855 35.1955 4.04962 37.8853 4.04962C40.575 4.04962 41.8968 5.54855 43.4312 7.28243C45.0949 9.16196 46.9759 11.2952 50.6916 11.2952C54.4074 11.2952 56.293 9.16196 57.9521 7.28243C59.4865 5.54855 60.8082 4.04962 63.498 4.04962C66.1877 4.04962 67.5095 5.54855 69.0439 7.28243C70.7076 9.16196 72.5886 11.2952 76.3043 11.2952C80.0201 11.2952 81.9057 9.16196 83.5694 7.28243C85.1038 5.54855 86.4256 4.04962 89.1153 4.04962C91.6941 4.04962 93.0159 5.42638 94.4763 7.07098C94.5133 7.13676 94.5595 7.20254 94.615 7.26363L94.6335 7.28243C96.2972 9.16196 98.1782 11.2952 101.894 11.2952C105.61 11.2952 107.495 9.16196 109.154 7.28243C110.689 5.54855 112.011 4.04962 114.7 4.04962C117.39 4.04962 118.712 5.54855 120.246 7.28243C121.91 9.16196 123.791 11.2952 127.507 11.2952C131.222 11.2952 133.108 9.16196 134.767 7.28243C136.301 5.54855 137.628 4.04962 140.313 4.04962C143.003 4.04962 144.324 5.54855 145.859 7.28243C147.523 9.16196 149.404 11.2952 153.119 11.2952C156.835 11.2952 158.721 9.16196 160.384 7.28243C161.919 5.54855 163.241 4.04962 165.93 4.04962C168.62 4.04962 169.942 5.54855 171.476 7.28243C173.149 9.16666 175.03 11.2952 178.746 11.2952Z" fill="#585880" stroke="#585880" stroke-width="3" stroke-miterlimit="10" stroke-linejoin="round"/>
    </svg>
  </div>

  <p class="blockDes">
    Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non<br />
    pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at<br />
    condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In<br />
    feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac<br />
    rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
  </p>

  <div class="btn-view services">
    <p>OUR SERVICES</p>
    <span></span>
  </div>

  <div class="servicesContent">
    <div
      class="serviceGroup"
      :class="[
        { 'mx-50': idx === 1 || idx === 4 || idx === 7 },
        { 'my-60': idx === 3 || idx === 4 || idx === 5 }
      ]"
      v-for="(item, idx) in servicesContent"
      :key="idx"
    >
      <div class="iconGroup fw-700">
        <div class="icon">
          <img :class="{ 'shake-an': viewTarget === handleItemName(item.name) }" :src="handleImgName(item.name)" alt="icon">
        </div>
      <h4>{{ item.name }}</h4>
      </div>

      <div class="des">
        Cras quis nulla commodo, aliquam lectus<br />
        sed, blandit augue. Cras ullamcorper<br />
        bibendum bibendum. Duis tincidunt urna<br />
        non pretium porta. Nam condimentum vitae<br />
        ligula vel ornare.
      </div>
      <div class="btn fw-700" :class="handleItemName(item.name)" @mouseleave="leaveView" @mouseenter="viewMore">VIEW MORE</div>
    </div>
  </div>

  <p class="highlightText services">VIEW MORE DIGISALAD’S INGRADIENTS</p>

  <div class="founderBlock">
    <div class="founderInfo">
      <img src="../assets/founder-img.png" alt="founder">
      <h4>TONY NG</h4>
      <p>Founder & Creative Director</p>
    </div>
    <div class="founderDes">
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M71.1973 36.8799C71.016 34.9203 71.1547 29.5933 76.2578 22.1857C76.6438 21.6267 76.5738 20.8728 76.0944 20.3936C74.0139 18.313 72.7257 17.0001 71.8222 16.0814C70.6342 14.8701 70.0918 14.3181 69.298 13.5984C68.768 13.122 67.966 13.1137 67.4304 13.5807C58.5356 21.3206 48.6561 37.3138 50.0857 56.908C50.9234 68.4133 59.3156 76.7644 70.0397 76.7644C81.0451 76.7644 89.999 67.8119 89.999 56.8063C89.999 46.1894 81.666 37.4827 71.1973 36.8799ZM70.0397 73.9519C60.8303 73.9519 53.6192 66.6981 52.89 56.7048C52.89 56.7048 52.89 56.7048 52.89 56.7034C51.2818 34.6662 64.3816 20.3524 68.3395 16.5621C68.7254 16.9425 69.1662 17.3901 69.8158 18.052C70.5985 18.8485 71.6698 19.9389 73.2902 21.565C67.0953 31.1093 68.264 37.9098 68.7761 38.8849C69.0193 39.3477 69.5178 39.6595 70.0397 39.6595C79.4947 39.6595 87.1865 47.3512 87.1865 56.8063C87.1865 66.2601 79.4947 73.9519 70.0397 73.9519Z" fill="white"/>
        <path d="M21.2535 36.8798C21.0709 34.9256 21.2054 29.6027 26.3141 22.1856C26.6987 21.6266 26.6299 20.8727 26.1507 20.3935C24.0742 18.317 22.7875 17.0055 21.8852 16.0868C20.6933 14.8728 20.1493 14.3193 19.3557 13.5983C18.8255 13.1219 18.0235 13.115 17.488 13.5792C8.59321 21.3191 -1.28767 37.3097 0.139115 56.9079V56.9093C0.97963 68.4132 9.37312 76.7643 20.0972 76.7643C31.1028 76.7643 40.0566 67.8118 40.0566 56.8062C40.0566 46.188 31.7235 37.48 21.2535 36.8798ZM20.0972 73.9518C10.8893 73.9518 3.67401 66.698 2.94346 56.7033V56.7047C1.33949 34.662 14.4393 20.3508 18.397 16.562C18.7843 16.9424 19.2266 17.3928 19.8775 18.0561C20.6588 18.8526 21.7287 19.9416 23.3465 21.5649C17.1515 31.1106 18.3202 37.9097 18.8324 38.8834C19.0755 39.3462 19.5753 39.6594 20.0972 39.6594C29.5524 39.6594 37.2441 47.3511 37.2441 56.8062C37.2441 66.26 29.5524 73.9518 20.0972 73.9518Z" fill="white"/>
      </svg>
      <p>
        A great digital work isn’t about designing beautiful pages<br />
        purely. It is about context - how do we deliver the <span>right<br />
        experience to the right person at the right time</span>. The most<br />
        important thing is that your work can engage customers at<br />
        anytime, anywhere and let users experience an entire amazing<br />
        digital journey.
      </p>
    </div>
  </div>
</section>
</template>

<style scoped>
#services {
  position: relative;
  background: #26C6D0;
  border-radius: 50px;
  padding: 320px 0 434px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.servicesContent {
  max-width: 1135px;
  width: 100%;
  margin: 85px auto 102px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}

.serviceGroup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30.3333%;
}

.iconGroup {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
}

.serviceGroup .icon {
  width: 108px;
  height: 108px;
  background: #FFFFFF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.serviceGroup .btn {
  font-size: 14px;
  padding: 20px 34px;
  border-radius: 32px;
  border: 1px solid #FFFFFF;
  cursor: pointer;
  transition: 0.3s;
  letter-spacing: 2px;
}

.serviceGroup .btn:hover {
  background: #FFFFFF;
  color: #26C6D0;
}

.serviceGroup .des {
  margin: 20px auto 35px;
}

.blockDes {
  color: #FFFFFF;
  margin: 40px auto;
}

.mx-50 {
  margin-right: 50px;
  margin-left: 50px;
}

.my-60 {
  margin-top: 60px;
  margin-bottom: 60px;
}

.mr-38 {
  margin-right: 38px;
}

.highlightText {
  font-size: 18px;
  letter-spacing: 2px;
}

.awardsBlock {
  width: 89%;
  background: #FFFFFF;
  border-radius: 40px 0 40px 40px;
  position: absolute;
  right: 0;
  top: -203px;
  padding: 70px 0 82px 70px;
  z-index: 3;
  display: flex;
}

.awardsDes {
  color: #262626;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  text-align: left;
  align-items: flex-start;
  letter-spacing: 1px;
}

.awardsImgs {
  display: flex;
  flex-wrap: wrap;
  max-width: 612px;
}

.founderBlock {
  position: absolute;
  left: 0;
  bottom: -329px;
  z-index: 3;
  display: flex;
  background: url('../assets/founderBlock-bg.png') no-repeat;
  background-size: cover;
  padding: 150px 110px 60px 150px;
  border-radius: 0 40px 40px 40px;
}

.founderDes {
  transform: translateY(-70px);
}

.founderDes {
  font-size: 22px;
  text-align: left;
  margin-top: 10px;
  letter-spacing: 2px;
  line-height: 47px;
}

.founderBlock p span {
  color: #FFBC58;
}

.founderInfo {
  margin-right: 88px;
}

.founderInfo h4 {
  margin-top: 32px;
  letter-spacing: 2px;
}

.founderInfo > p {
  font-style: oblique;
}

.highlightText.services:after {
  border: 4px solid #FFBC58;
  bottom: 3px;
}

.title.services {
  color: #FFFFFF;
}

.title.awards {
  margin-bottom: 35px;
}

.btn-view.services {
  background: #585880;
}

@keyframes shake {
	0%, 100% {transform: translateX(0);}
	10%, 30%, 50%, 70%, 90% {transform: translateX(-6px);}
	20%, 40%, 60%, 80% {transform: translateX(6px);}
}

.shake-an {
  animation: shake 3s ease infinite;
}

@media (max-width: 1288px) {
  #services {
    padding-top: 0;
  }

  .awardsBlock {
    flex-direction: column;
    width: 75%;
    border-radius: 0 0 40px 40px;
    position: relative;
    top: 0;
    right: 0;
    margin-bottom: 64px;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
  }
  
  .awardsDes {
    text-align: center;
    margin: 0 auto 50px;
  }

  .title.awards {
    margin: 0 auto 35px;
  }

  .mr-38 {
    margin: 0;
  }

  .awardsImgs {
    justify-content: center;
  }
}

@media (max-width: 1220px) {
  .mx-50 {
    margin: 0;
  }

  .my-60 {
    margin: 0;
  }

  .mr-38 {
    margin-right: 0;
  }

  #services {
    padding-bottom: 0;
    overflow: hidden;
  }

  .servicesContent {
    padding: 0 20px;
    margin: 50px auto;
  }

  .serviceGroup {
    margin: 0 20px 50px;
    width: 44%;
  }

  .founderBlock {
    position: relative;
    flex-direction: column;
    border-radius: 0 0 40px 40px;
    bottom: 0;
    margin-top: 50px;
    padding: 40px 20px;
  }

  .founderBlock br {
    display: none;
  }

  .founderInfo {
    margin: 0 auto 8px;
  }

  .founderDes {
    transform: translateY(0);
    text-align: center;
  }

  .founderDes > svg {
    display: none;
  }
}

@media (max-width: 820px) {
  .awardsImgs {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 740px) {
  .awardsBlock br {
    display: none;
  }

  .awardsBlock {
    width: 100%;
  }
}

@media (max-width: 870px) {
  .blockDes {
    margin: 30px 20px;
  }
}

@media (max-width: 768px) {
  .founderDes {
    font-size: 14px;
    line-height: 1.75;
  }
  
  .serviceGroup {
    width: 100%;
  }

  .serviceGroup .des {
    margin: 12px auto 24px;
  }

  .title h3 {
    margin-bottom: 0;
  }

  .title svg {
    width: 74%;
  }

  .highlightText {
    font-size: 14px;
  }
}

</style>
