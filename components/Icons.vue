<template>
  <template v-if="name === 'arrowRight'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      height="80px"
      width="80px"
      id="Layer_1"
      viewBox="0 0 512.005 512.005"
      xml:space="preserve"
    >
      <g>
        <g>
          <path
            d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005    L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251    l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"
          />
        </g>
      </g>
    </svg>
  </template>
  <template v-else-if="name === 'arrowLeft'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      width="80px"
      height="80px"
      viewBox="0 0 32 32"
      :style="styles"
    >
      <path
        d="M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"
      />
    </svg>
  </template>
  <template v-else-if="name === 'calendar'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      width="80px"
      height="80px"
      viewBox="0 0 64 64"
      xml:space="preserve"
    >
      <g>
        <g>
          <g>
            <path
              fill="#506C7F"
              d="M50,2c-0.553,0-1,0.447-1,1v1v2v4c0,0.553,0.447,1,1,1s1-0.447,1-1V6V4V3C51,2.447,50.553,2,50,2z"
            />
            <path
              fill="#506C7F"
              d="M14,2c-0.553,0-1,0.447-1,1v1v2v4c0,0.553,0.447,1,1,1s1-0.447,1-1V6V4V3C15,2.447,14.553,2,14,2z"
            />
          </g>
          <path
            fill="#F9EBB2"
            d="M62,60c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V17h60V60z"
          />
          <path
            fill="#F76D57"
            d="M62,15H2V8c0-1.104,0.896-2,2-2h7v4c0,1.657,1.343,3,3,3s3-1.343,3-3V6h30v4c0,1.657,1.343,3,3,3    s3-1.343,3-3V6h7c1.104,0,2,0.896,2,2V15z"
          />
          <g>
            <path
              fill="#394240"
              d="M11,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5     C10,53.553,10.447,54,11,54z M12,49h4v3h-4V49z"
            />
            <path
              fill="#394240"
              d="M23,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5     C22,53.553,22.447,54,23,54z M24,49h4v3h-4V49z"
            />
            <path
              fill="#394240"
              d="M35,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5     C34,53.553,34.447,54,35,54z M36,49h4v3h-4V49z"
            />
            <path
              fill="#394240"
              d="M11,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5     C10,42.553,10.447,43,11,43z M12,38h4v3h-4V38z"
            />
            <path
              fill="#394240"
              d="M23,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5     C22,42.553,22.447,43,23,43z M24,38h4v3h-4V38z"
            />
            <path
              fill="#394240"
              d="M35,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5     C34,42.553,34.447,43,35,43z M36,38h4v3h-4V38z"
            />
            <path
              fill="#394240"
              d="M47,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5     C46,42.553,46.447,43,47,43z M48,38h4v3h-4V38z"
            />
            <path
              fill="#394240"
              d="M11,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5     C10,31.553,10.447,32,11,32z M12,27h4v3h-4V27z"
            />
            <path
              fill="#394240"
              d="M23,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5     C22,31.553,22.447,32,23,32z M24,27h4v3h-4V27z"
            />
            <path
              fill="#394240"
              d="M35,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5     C34,31.553,34.447,32,35,32z M36,27h4v3h-4V27z"
            />
            <path
              fill="#394240"
              d="M47,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5     C46,31.553,46.447,32,47,32z M48,27h4v3h-4V27z"
            />
            <path
              fill="#394240"
              d="M60,4h-7V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H17V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H4     C1.789,4,0,5.789,0,8v52c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V8C64,5.789,62.211,4,60,4z M49,3c0-0.553,0.447-1,1-1     s1,0.447,1,1v7c0,0.553-0.447,1-1,1s-1-0.447-1-1V3z M13,3c0-0.553,0.447-1,1-1s1,0.447,1,1v7c0,0.553-0.447,1-1,1s-1-0.447-1-1     V3z M62,60c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V17h60V60z M62,15H2V8c0-1.104,0.896-2,2-2h7v4c0,1.657,1.343,3,3,3     s3-1.343,3-3V6h30v4c0,1.657,1.343,3,3,3s3-1.343,3-3V6h7c1.104,0,2,0.896,2,2V15z"
            />
          </g>
        </g>
        <g>
          <rect x="12" y="27" fill="#B4CCB9" width="4" height="3" />
          <rect x="24" y="27" fill="#B4CCB9" width="4" height="3" />
          <rect x="36" y="27" fill="#B4CCB9" width="4" height="3" />
          <rect x="48" y="27" fill="#B4CCB9" width="4" height="3" />
          <rect x="12" y="38" fill="#B4CCB9" width="4" height="3" />
          <rect x="24" y="38" fill="#B4CCB9" width="4" height="3" />
          <rect x="36" y="38" fill="#B4CCB9" width="4" height="3" />
          <rect x="48" y="38" fill="#B4CCB9" width="4" height="3" />
          <rect x="12" y="49" fill="#B4CCB9" width="4" height="3" />
          <rect x="24" y="49" fill="#B4CCB9" width="4" height="3" />
          <rect x="36" y="49" fill="#B4CCB9" width="4" height="3" />
        </g>
      </g>
    </svg>
  </template>
  <template v-else-if="iconName === 'instagram'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25px"
      height="25px"
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"
        fill="url(#paint0_radial_87_7153)"
      />
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"
        fill="url(#paint1_radial_87_7153)"
      />
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"
        fill="url(#paint2_radial_87_7153)"
      />
      <path
        d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_87_7153"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
        >
          <stop stop-color="#B13589" />
          <stop offset="0.79309" stop-color="#C62F94" />
          <stop offset="1" stop-color="#8A3AC8" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_87_7153"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
        >
          <stop stop-color="#E0E8B7" />
          <stop offset="0.444662" stop-color="#FB8A2E" />
          <stop offset="0.71474" stop-color="#E2425C" />
          <stop offset="1" stop-color="#E2425C" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_87_7153"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
        >
          <stop offset="0.156701" stop-color="#406ADC" />
          <stop offset="0.467799" stop-color="#6A45BE" />
          <stop offset="1" stop-color="#6A45BE" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </template>
  <template v-else-if="iconName === 'gmail'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25px"
      height="25px"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fill="#4285F4"
        d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
      />
      <path
        fill="#34A853"
        d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
      />
      <path
        fill="#FBBC04"
        d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
      />
      <path
        fill="#EA4335"
        d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
      />
    </svg>
  </template>
  <template v-else-if="iconName === 'facebook'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25px"
      height="25px"
      viewBox="0 0 48 48"
    >
      <title>Facebook-color</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Icons"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Color-"
          transform="translate(-200.000000, -160.000000)"
          fill="#4460A0"
        >
          <path
            d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
            id="Facebook"
          ></path>
        </g>
      </g>
    </svg>
  </template>
  <template v-else-if="iconName === 'burger'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="40px"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path
        d="M4 6H20M4 12H14M4 18H9"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </template>
  <template v-else-if="iconName === 'close'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="50"
      viewBox="0 0 24 24"
      version="1.1"
    >
      <title>Close</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Close">
          <rect
            id="Rectangle"
            fill-rule="nonzero"
            x="0"
            y="0"
            width="24"
            height="24"
          ></rect>
          <line
            x1="16.9999"
            y1="7"
            x2="7.00001"
            y2="16.9999"
            id="Path"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          ></line>
          <line
            x1="7.00006"
            y1="7"
            x2="17"
            y2="16.9999"
            id="Path"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          ></line>
        </g>
      </g>
    </svg>
  </template>
  <template v-else><span></span></template>
</template>

<script setup lang="ts">
const props = defineProps<{
  iconName: string;
  iconClass?: string;
}>();
const name = ref(props.iconName);
const styles = ref(props.iconClass);
</script>

<style scoped></style>
