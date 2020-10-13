<template>
  <!-- brand-name left side -->
  <!-- menu-item leftside -->
  <nav
    id="header"
    class="relative z-30 flex flex-row items-center w-full h-16 px-8 mx-auto overflow-hidden bg-gray-200"
  >
    <div id="navbar-brand" class="relative">PhotoU</div>
    <div
      id="navbar-menu"
      class="flex items-stretch justify-center flex-grow flex-shrink-0 ml-16 align-baseline"
    >
      <!-- menu-item-start -->
      <div
        id="navbar-menu-start"
        class="grid grid-cols-4 col-span-3 gap-4 py-4 place-items-center"
      >
        <button class="text-gray-800">Porfolio</button>
        <button class="text-gray-800">Story</button>
        <button class="text-gray-800">About</button>
        <button class="text-gray-800">Contact</button>
      </div>
      <!-- menu-item-end -->
      <div
        id="navbar-menu-end"
        class="grid grid-cols-2 col-span-1 gap-2 ml-auto place-items-center"
      >
        <button id="sign-in" class="font-semibold">Sign In</button>
        <button
          id="sign-up"
          class="px-4 py-2 font-semibold text-white bg-black rounded-md"
        >
          Sign Up
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
