<template>
  <!-- brand-name left side -->
  <!-- menu-item leftside -->
  <nav
    id="header"
    class="relative z-30 flex flex-row items-center w-full h-16 px-6 mx-auto overflow-hidden bg-black"
  >
    <div
      id="navbar-menu"
      class="flex items-stretch justify-center flex-grow flex-shrink-0 align-baseline"
    >
      <!-- mobile brand name -->
      <div
        class="absolute p-2 md:hidden md:grid md:grid-cols-1 md:col-span-1 md:gap-2 md:place-items-center"
      >
        <button
          id="navbar-brand"
          class="text-lg text-gray-400 hover:text-white hover:bg-black"
        >
          PhotoU
        </button>
      </div>
      <!-- fullscreen brand name -->
      <div
        class="hidden md:grid md:grid-cols-1 md:col-span-1 md:gap-2 md:place-items-center"
      >
        <button
          id="navbar-brand"
          class="text-lg text-gray-400 hover:text-white hover:bg-black"
        >
          PhotoU
        </button>
      </div>
      <!-- menu items mobile -->
      <div v-if="showMenuItem" class="overflow-hidden md:hidden">
        <div
          class="fixed flex flex-col items-center justify-center w-full h-full mt-12 overflow-hidden transition-all duration-700 ease-in-out origin-top-right bg-black"
        >
          <button
            class="px-3 py-2 text-3xl font-medium text-gray-400 rounded-md hover:text-white hover:bg-black focus:outline-none focus:text-white"
          >
            Porfolio
          </button>
          <button
            class="px-3 py-2 text-3xl font-medium text-gray-400 rounded-md hover:text-white hover:bg-black focus:outline-none focus:text-white"
          >
            Story
          </button>
          <button
            class="px-3 py-2 text-3xl font-medium text-gray-400 rounded-md hover:text-white hover:bg-black focus:outline-none focus:text-white"
          >
            About
          </button>
          <button
            class="px-3 py-2 text-3xl font-medium text-gray-400 rounded-md hover:text-white hover:bg-black focus:outline-none focus:text-white"
          >
            Contact
          </button>
        </div>
      </div>
      <!-- menu-item-centered -->
      <!-- id: header => relative -->
      <!-- id: navbar-menu-centered
        => absolute
        => style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
      -->
      <div class="hidden md:block">
        <div
          id="navbar-menu-centered"
          class="absolute grid float-none grid-cols-4 col-span-3 gap-4 py-4 place-items-center"
          style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
        >
          <button
            class="px-3 py-2 text-lg font-medium text-gray-400 rounded-md hover:text-white hover:bg-black focus:outline-none focus:text-white"
          >
            Porfolio
          </button>
          <button
            class="px-3 py-2 text-lg font-medium text-gray-400 rounded-md hover:text-white hover:bg-black focus:outline-none focus:text-white"
          >
            Story
          </button>
          <button
            class="px-3 py-2 text-lg font-medium text-gray-400 rounded-md hover:text-white hover:bg-black focus:outline-none focus:text-white"
          >
            About
          </button>
          <button
            class="px-3 py-2 text-lg font-medium text-gray-400 rounded-md hover:text-white hover:bg-black focus:outline-none focus:text-white"
          >
            Contact
          </button>
        </div>
      </div>

      <!-- icon mobile display -->
      <div class="flex md:hidden">
        <!-- Mobile menu button -->
        <button
          class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white focus:outline-none focus:text-white"
          @click="toggleMenuItem"
        >
          <!-- Menu open: "hidden", Menu closed: "block" -->
          <svg
            v-if="!showMenuItem"
            class="block w-6 h-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-if="showMenuItem"
            class="block w-6 h-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <!-- menu-item-end -->
      <div
        id="navbar-menu-end"
        class="grid grid-cols-1 col-span-1 gap-2 ml-auto place-items-center"
      >
        <button
          id="sign-up"
          class="px-4 py-2 text-lg text-gray-400 rounded-md md:hover:bg-white md:hover:text-black md:text-black md:bg-white hover:text-white hover:bg-black"
        >
          Sign In
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenuItem: false,
    }
  },
  methods: {
    toggleMenuItem() {
      this.showMenuItem = !this.showMenuItem
    },
  },
}
</script>
