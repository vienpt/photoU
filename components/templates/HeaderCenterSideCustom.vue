<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <!-- This example requires Tailwind CSS v1.4.0+ -->
  <div class="sticky top-0 bg-black">
    <div class="px-4 mx-auto max-w-7xl sm:px-6">
      <div
        class="flex items-center justify-between py-6 md:justify-start md:space-x-10"
      >
        <div class="lg:w-0 lg:flex-1">
          <!-- logo brand -->
          <!--
          <a href="#" class="flex">
            <img
              class="w-auto h-8 sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
              alt="Workflow"
            />
          </a>
           -->
          <a href="#" class="flex text-2xl font-bold text-grey">PhotoU</a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-grey hover:bg-gray-900 focus:outline-none focus:bg-gray-900 focus:text-grey"
            @click="toggleMobileMenu"
          >
            <!-- Heroicon name: menu -->
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden space-x-10 md:flex">
          <div class="relative">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <button
              type="button"
              class="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-400 transition duration-150 ease-in-out hover:text-white focus:outline-none focus:text-white"
            >
              <span>Portfolio</span>
              <!--
              Heroicon name: chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
              <svg
                class="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
            <!-- ** Todo -->
            <!-- portfolio megamenu -->
          </div>

          <a
            href="#"
            class="text-base font-medium leading-6 text-gray-400 transition duration-150 ease-in-out hover:text-white focus:outline-none focus:text-white"
          >
            Story
          </a>
          <a
            href="#"
            class="text-base font-medium leading-6 text-gray-400 transition duration-150 ease-in-out hover:text-white focus:outline-none focus:text-white"
          >
            About
          </a>
          <nuxt-link
            to="/contact"
            class="text-base font-medium leading-6 text-gray-400 transition duration-150 ease-in-out hover:text-white focus:outline-none focus:text-white"
          >
            Contact
          </nuxt-link>
        </nav>
        <div
          class="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0"
        >
          <a
            href="#"
            class="text-base font-medium leading-6 text-gray-400 whitespace-no-wrap hover:text-white focus:outline-none focus:text-white"
          >
            Sign in
          </a>
          <span class="inline-flex rounded-md shadow-sm">
            <a
              href="#"
              class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            >
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <div
      :class="showMobileMenu"
      class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
    >
      <div class="rounded-lg shadow-lg">
        <div class="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
          <div class="px-5 pt-5 pb-6 space-y-6">
            <div class="flex items-center justify-between">
              <!-- <div>
                <img
                  class="w-auto h-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                  alt="Workflow"
                />
              </div> -->
              <div class="text-2xl font-bold text-gray-800">PhotoU</div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-500 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-grey focus:outline-none focus:bg-grey focus:text-gray-900"
                  @click="toggleMobileMenu"
                >
                  <!-- Heroicon name: x -->
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
            </div>
            <div>
              <nav class="grid gap-y-8">
                <a
                  href="#"
                  class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                >
                  <!-- Heroicon name: chart-bar -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <div class="text-base font-medium leading-6 text-gray-900">
                    Portfolio
                  </div>
                </a>
                <a
                  href="#"
                  class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                >
                  <!-- Heroicon name: cursor-click -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                  <div class="text-base font-medium leading-6 text-gray-900">
                    Story
                  </div>
                </a>
                <a
                  href="#"
                  class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                >
                  <!-- Heroicon name: shield-check -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <div class="text-base font-medium leading-6 text-gray-900">
                    About
                  </div>
                </a>
                <nuxt-link
                  to="/contact"
                  class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                >
                  <!-- Heroicon name: view-grid -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  <div class="text-base font-medium leading-6 text-gray-900">
                    Contact
                  </div>
                </nuxt-link>
              </nav>
            </div>
          </div>
          <div class="px-5 py-6 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#"
                class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
              >
                Pricing
              </a>
              <a
                href="#"
                class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
              >
                Enterprise
              </a>
              <a
                href="#"
                class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
              >
                Help Center
              </a>
              <a
                href="#"
                class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
              >
                Guides
              </a>
              <a
                href="#"
                class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
              >
                Events
              </a>
            </div>
            <div class="space-y-6">
              <span class="flex w-full rounded-md shadow-sm">
                <a
                  href="#"
                  class="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                >
                  Sign up
                </a>
              </span>
              <p
                class="text-base font-medium leading-6 text-center text-gray-500"
              >
                Existing customer?
                <a
                  href="#"
                  class="text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: 'hidden',
      collapseNavMenu: true,
    }
  },
  methods: {
    toggleMobileMenu() {
      this.collapseNavMenu = !this.collapseNavMenu

      if (this.collapseNavMenu) {
        this.showMobileMenu = 'hidden'
      } else {
        this.showMobileMenu = 'block'
      }
    },
  },
}
</script>
