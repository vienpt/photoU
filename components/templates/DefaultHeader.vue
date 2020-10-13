<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <nav class="bg-black">
    <div class="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <!-- logo / brandName -->
          <div class="flex-shrink-0">
            <!-- <img
              class="w-8 h-8"
              src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
              alt="Workflow logo"
            /> -->
            <span class="text-xl text-white rounded">photoU</span>
          </div>
          <!-- menu-items -->
          <div class="hidden md:block">
            <div class="flex items-baseline ml-10 space-x-4">
              <a
                href="#"
                class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
                >Portfolio</a
              >

              <a
                href="#"
                class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >Story</a
              >

              <a
                href="#"
                class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >Contact</a
              >

              <a
                href="#"
                class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >About</a
              >
            </div>
          </div>
        </div>
        <!-- button SignIn/SignUp -->
        <div class="hidden md:block">
          <div class="flex items-center md:ml-6">
            <button
              class="px-4 py-2 mr-3 text-gray-400 border rounded-md hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
              aria-label="SignIn"
            >
              Sign In
            </button>
            <button
              class="px-4 py-2 ml-3 text-black bg-white border-2 border-transparent rounded-md hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
              aria-label="SignUp"
            >
              Sign Up
            </button>

            <!-- Profile dropdown -->
            <div class="relative">
              <!-- <div>
                  <button
                    id="user-menu"
                    class="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    Sign In
                  </button>
                </div> -->
              <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <!-- <div
                  class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
                >
                  <div
                    class="py-1 bg-white rounded-md shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      >Your Profile</a
                    >

                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      >Settings</a
                    >

                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      >Sign out</a
                    >
                  </div>
                </div> -->
            </div>
          </div>
        </div>
        <!-- icon mobile  -->
        <div class="flex -mr-2 md:hidden">
          <!-- Mobile menu button -->
          <button
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
          >
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
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
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              class="hidden w-6 h-6"
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
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
    <div class="hidden md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          href="#"
          class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
          >Portfolio</a
        >

        <a
          href="#"
          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >Story</a
        >

        <a
          href="#"
          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >Contact</a
        >

        <a
          href="#"
          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >About</a
        >
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5 space-x-3">
          <button
            class="px-4 py-2 mr-3 text-gray-400 border rounded-md hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
            aria-label="SignIn"
          >
            Sign In
          </button>
          <button
            class="px-4 py-2 ml-3 text-black bg-white border-2 border-transparent rounded-md hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
            aria-label="SignUp"
          >
            Sign Up
          </button>
        </div>
        <!-- <div class="flex items-center px-5 space-x-3">
            <div class="flex-shrink-0">
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="space-y-1">
              <div class="text-base font-medium leading-none text-white">
                Tom Cook
              </div>
              <div class="text-sm font-medium leading-none text-gray-400">
                tom@example.com
              </div>
            </div>
          </div>
          <div class="px-2 mt-3 space-y-1">
            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Your Profile</a
            >

            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Settings</a
            >

            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Sign out</a
            >
          </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
