<template>
  <!-- header -->
  <!-- brand-name left side -->
  <!-- menu-item right side -->
  <nav
    id="header"
    class="fixed z-30 flex flex-row items-center w-full h-16 px-8 mx-auto overflow-hidden bg-gray-200"
  >
    <div id="navbar-brand" class="relative">PhotoU</div>
    <div
      id="navbar-menu"
      class="flex items-stretch justify-end flex-grow flex-shrink-0 align-baseline"
    >
      <div
        id="navbar-menu-start"
        class="grid grid-cols-4 col-span-3 gap-4 py-4 place-items-center"
      >
        <button class="text-gray-800">Porfolio</button>
        <button class="text-gray-800">Story</button>
        <button class="text-gray-800">About</button>
        <button class="text-gray-800">Contact</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
