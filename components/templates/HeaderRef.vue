<template>
  <div>
    <div class="px-4 py-4 bg-indigo-900">
      <div
        class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
        x-data="{ open: false }"
        x-cloak
      >
        <div class="flex items-center justify-between">
          <a href="#" class="inline-block py-2 text-xl font-bold text-white"
            >Demopay</a
          >
          <div
            class="inline-block cursor-pointer md:hidden"
            x-on:click="open = true"
          >
            <div class="w-8 mb-2 bg-gray-400" style="height: 2px"></div>
            <div class="w-8 mb-2 bg-gray-400" style="height: 2px"></div>
            <div class="w-8 bg-gray-400" style="height: 2px"></div>
          </div>
        </div>

        <div x-show="open" x-on:click.away="open = false">
          <a href="#" class="block py-2 text-gray-100">How it Works</a>
          <a href="#" class="block py-2 text-indigo-300 hover:text-gray-100"
            >Services</a
          >
          <a href="#" class="block py-2 text-indigo-300 hover:text-gray-100"
            >Blog</a
          >

          <div class="flex items-center justify-between pt-4">
            <a
              href="#"
              class="inline-block w-1/2 px-4 py-2 mr-2 font-bold text-center text-gray-600 bg-gray-100 rounded-lg hover:text-indigo-600 hover:bg-gray-200"
              >Login</a
            >
            <a
              href="#"
              class="inline-block w-1/2 px-4 py-2 font-bold text-center text-white bg-red-500 rounded-lg hover:bg-red-600"
              >Sign Up</a
            >
          </div>
        </div>

        <div>
          <div class="hidden md:block">
            <a
              href="#"
              class="inline-block py-1 mr-6 font-bold text-gray-100 md:py-4"
              >How it Works</a
            >
            <a
              href="#"
              class="inline-block py-1 mr-6 text-gray-500 md:py-4 hover:text-gray-100"
              >Services</a
            >
            <a
              href="#"
              class="inline-block py-1 text-gray-500 md:py-4 hover:text-gray-100"
              >Blog</a
            >
          </div>
        </div>
        <div class="hidden md:block">
          <a
            href="#"
            class="inline-block py-1 mr-6 text-gray-500 md:py-4 hover:text-gray-100"
            >Login</a
          >
          <a
            href="#"
            class="inline-block px-4 py-2 text-gray-700 bg-white rounded-lg hover:bg-gray-100"
            >Sign Up</a
          >
        </div>
      </div>
    </div>

    <div class="bg-indigo-900 md:overflow-hidden">
      <div class="px-4 py-20 md:py-4">
        <div class="md:max-w-6xl md:mx-auto">
          <div class="md:flex md:flex-wrap">
            <div class="text-center md:w-1/2 md:text-left md:pt-16">
              <h1
                class="mb-4 text-2xl font-bold leading-tight text-white md:text-5xl"
              >
                Simple payment platform for any service
              </h1>

              <p class="text-indigo-200 md:text-xl md:pr-48">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                vitae corrupti asperiores veritatis dolorum, commodi aperiam
                enim.
              </p>

              <a
                href="#"
                class="inline-block px-8 py-3 mt-6 mb-12 text-white bg-red-500 rounded-lg shadow md:mb-0 md:mt-10 hover:bg-red-600"
                >Get Started</a
              >
            </div>
            <div class="relative md:w-1/2">
              <div class="hidden md:block">
                <div
                  class="absolute bottom-0 left-0 w-40 px-6 py-8 -mb-40 -ml-24 bg-white rounded-lg shadow-lg"
                  style="transform: rotate(-8deg)"
                >
                  <div
                    class="relative px-2 pb-2 mx-auto mb-8 bg-indigo-800 rounded-lg"
                  >
                    <div class="mb-1">
                      <span
                        class="inline-block w-1 h-1 bg-indigo-100 rounded-full"
                        style="margin-right: 1px"
                      ></span
                      ><span
                        class="inline-block w-1 h-1 bg-indigo-100 rounded-full"
                        style="margin-right: 1px"
                      ></span
                      ><span
                        class="inline-block w-1 h-1 bg-indigo-100 rounded-full"
                      ></span>
                    </div>
                    <div class="w-12 h-1 mb-1 bg-indigo-100 rounded"></div>
                    <div class="w-10 h-1 mb-2 bg-indigo-100 rounded"></div>

                    <div class="flex">
                      <div class="w-6 h-3 mr-1 bg-indigo-100 rounded"></div>
                      <div class="w-6 h-3 bg-indigo-100 rounded"></div>
                    </div>

                    <div
                      class="absolute bottom-0 right-0 w-10 h-16 -mb-4 -mr-2 bg-green-700 border-2 border-white rounded-lg"
                    ></div>
                    <div
                      class="absolute bottom-0 right-0 z-10 w-2 h-2 mx-auto mr-2 -mb-2 bg-green-800 border-2 border-white rounded-full"
                    ></div>
                  </div>

                  <div class="text-center text-gray-800">
                    Online <br />Services
                  </div>
                </div>

                <div
                  class="absolute bottom-0 left-0 w-40 px-6 py-8 mb-16 ml-24 bg-white rounded-lg shadow-lg"
                  style="transform: rotate(-8deg); z-index: 2"
                >
                  <div
                    class="relative w-20 py-2 mx-auto mb-8 bg-indigo-800 border-2 border-white rounded-lg"
                  >
                    <div
                      class="absolute top-0 left-0 w-8 h-8 ml-4 -mt-3 bg-green-700 rounded"
                      style="transform: rotate(-45deg); z-index: -1"
                    ></div>
                    <div
                      class="absolute top-0 left-0 w-8 h-8 ml-8 -mt-3 bg-green-800 rounded"
                      style="transform: rotate(-12deg); z-index: -2"
                    ></div>

                    <div
                      class="flex items-center justify-center w-6 h-6 ml-auto -mr-1 bg-indigo-800 border-4 border-white rounded-l-lg"
                    >
                      <div
                        class="w-2 h-2 bg-indigo-800 border-2 border-white rounded-full"
                      ></div>
                    </div>

                    <div
                      class="w-8 h-8 -mb-5 -ml-3 bg-green-700 border-4 border-white rounded-full"
                    ></div>
                  </div>

                  <div class="text-center text-gray-800">Banking Services</div>
                </div>

                <div
                  class="absolute bottom-0 left-0 w-48 px-10 py-8 ml-32 bg-white rounded-lg shadow-lg"
                  style="
                    transform: rotate(-8deg);
                    z-index: 2;
                    margin-bottom: -220px;
                  "
                >
                  <div
                    class="relative pt-4 mx-auto mb-16 bg-indigo-800 rounded-lg"
                  >
                    <div class="h-4 bg-white"></div>

                    <div class="pb-1 my-2 text-right">
                      <div
                        class="inline-flex w-3 h-3 -mr-2 bg-white rounded-full"
                      ></div>
                      <div
                        class="inline-flex w-3 h-3 mr-2 bg-indigo-800 border-2 border-white rounded-full"
                      ></div>
                    </div>

                    <div
                      class="absolute bottom-0 left-0 w-16 pt-3 pb-2 mx-auto -mb-6 -ml-4 bg-green-700 rounded-lg"
                    >
                      <div class="h-2 mb-2 bg-white"></div>
                      <div class="w-6 h-2 ml-auto mr-2 bg-white rounded"></div>
                    </div>
                  </div>

                  <div class="text-center text-gray-800">
                    Payment for <br />Internet
                  </div>
                </div>

                <div
                  class="absolute top-0 right-0 flex w-full mt-10 overflow-hidden bg-white rounded-lg shadow-lg"
                  style="
                    transform: rotate(-8deg);
                    margin-right: -250px;
                    z-index: 1;
                  "
                >
                  <div class="w-32 bg-gray-200" style="height: 560px"></div>
                  <div class="flex-1 p-6">
                    <h2 class="mb-3 text-lg font-bold text-gray-700">
                      Popular Payments
                    </h2>
                    <div class="flex mb-5">
                      <div class="w-16 px-4 py-2 mr-2 bg-gray-100 rounded-full">
                        <div class="p-1 bg-gray-300 rounded-full"></div>
                      </div>
                      <div class="w-16 px-4 py-2 mr-2 bg-gray-100 rounded-full">
                        <div class="p-1 bg-gray-300 rounded-full"></div>
                      </div>
                      <div class="w-16 px-4 py-2 mr-2 bg-gray-100 rounded-full">
                        <div class="p-1 bg-gray-300 rounded-full"></div>
                      </div>
                      <div class="w-16 px-4 py-2 bg-gray-100 rounded-full">
                        <div class="p-1 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>

                    <div class="flex flex-wrap mb-5 -mx-4">
                      <div class="w-1/3 px-4">
                        <div class="h-40 p-6 bg-white rounded-lg shadow-lg">
                          <div
                            class="w-16 h-16 mb-6 bg-gray-200 rounded-full"
                          ></div>
                          <div
                            class="w-16 h-2 mb-2 bg-gray-200 rounded-full"
                          ></div>
                          <div class="w-10 h-2 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                      <div class="w-1/3 px-4">
                        <div class="h-40 p-6 bg-white rounded-lg shadow-lg">
                          <div
                            class="w-16 h-16 mb-6 bg-gray-200 rounded-full"
                          ></div>
                          <div
                            class="w-16 h-2 mb-2 bg-gray-200 rounded-full"
                          ></div>
                          <div class="w-10 h-2 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                      <div class="w-1/3 px-4">
                        <div class="h-40 p-6 bg-white rounded-lg shadow-lg">
                          <div
                            class="w-16 h-16 mb-6 bg-gray-200 rounded-full"
                          ></div>
                          <div
                            class="w-16 h-2 mb-2 bg-gray-200 rounded-full"
                          ></div>
                          <div class="w-10 h-2 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <h2 class="mb-3 text-lg font-bold text-gray-700">
                      Popular Payments
                    </h2>

                    <div
                      class="flex flex-wrap items-center justify-between w-full py-3 border-b-2 border-gray-100"
                    >
                      <div class="w-1/3">
                        <div class="flex">
                          <div class="w-8 h-8 mr-4 bg-gray-200 rounded"></div>
                          <div>
                            <div
                              class="w-16 h-2 mb-1 bg-gray-200 rounded-full"
                            ></div>
                            <div
                              class="w-10 h-2 bg-gray-100 rounded-full"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <div
                          class="w-16 px-4 py-2 mx-auto bg-green-100 rounded-full"
                        >
                          <div class="p-1 bg-green-200 rounded-full"></div>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <div
                          class="w-10 h-2 mx-auto bg-gray-100 rounded-full"
                        ></div>
                      </div>
                    </div>

                    <div
                      class="flex flex-wrap items-center justify-between py-3 border-b-2 border-gray-100"
                    >
                      <div class="w-1/3">
                        <div class="flex">
                          <div class="w-8 h-8 mr-4 bg-gray-200 rounded"></div>
                          <div>
                            <div
                              class="w-16 h-2 mb-1 bg-gray-200 rounded-full"
                            ></div>
                            <div
                              class="w-10 h-2 bg-gray-100 rounded-full"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <div
                          class="w-16 px-4 py-2 mx-auto bg-orange-100 rounded-full"
                        >
                          <div class="p-1 bg-orange-200 rounded-full"></div>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <div
                          class="w-16 h-2 mx-auto bg-gray-100 rounded-full"
                        ></div>
                      </div>
                    </div>

                    <div
                      class="flex flex-wrap items-center justify-between py-3 border-b-2 border-gray-100"
                    >
                      <div class="w-1/3">
                        <div class="flex">
                          <div class="w-8 h-8 mr-4 bg-gray-200 rounded"></div>
                          <div>
                            <div
                              class="w-16 h-2 mb-1 bg-gray-200 rounded-full"
                            ></div>
                            <div
                              class="w-10 h-2 bg-gray-100 rounded-full"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <div
                          class="w-16 px-4 py-2 mx-auto bg-blue-100 rounded-full"
                        >
                          <div class="p-1 bg-blue-200 rounded-full"></div>
                        </div>
                      </div>
                      <div class="w-1/3">
                        <div
                          class="w-8 h-2 mx-auto bg-gray-100 rounded-full"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="absolute bottom-0 left-0 w-full ml-1"
                  style="
                    transform: rotate(-8deg);
                    z-index: 1;
                    margin-bottom: -360px;
                  "
                >
                  <div class="w-48 h-48 grid--gray"></div>
                </div>
              </div>

              <div
                class="absolute top-0 right-0 flex w-full overflow-hidden bg-white rounded-lg shadow md:hidden"
              >
                <div
                  class="absolute top-0 left-0 right-0 flex items-center h-4 bg-gray-200 rounded-t-lg"
                >
                  <span
                    class="inline-block w-2 h-2 ml-2 mr-1 bg-red-500 rounded-full"
                  ></span>
                  <span
                    class="inline-block w-2 h-2 mr-1 bg-orange-400 rounded-full"
                  ></span>
                  <span
                    class="inline-block w-2 h-2 mr-1 bg-green-500 rounded-full"
                  ></span>
                </div>
                <div class="w-32 px-2 py-8 bg-gray-100" style="height: 340px">
                  <div class="w-16 h-2 mb-4 bg-gray-300 rounded-full"></div>
                  <div class="flex items-center mb-4">
                    <div
                      class="flex-shrink-0 w-5 h-5 mr-3 bg-gray-300 rounded-full"
                    ></div>
                    <div>
                      <div class="w-10 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>

                  <div class="w-16 h-2 mb-2 bg-gray-200 rounded-full"></div>
                  <div class="w-10 h-2 mb-2 bg-gray-200 rounded-full"></div>
                  <div class="w-20 h-2 mb-2 bg-gray-200 rounded-full"></div>
                  <div class="w-6 h-2 mb-2 bg-gray-200 rounded-full"></div>
                  <div class="w-16 h-2 mb-2 bg-gray-200 rounded-full"></div>
                  <div class="w-10 h-2 mb-2 bg-gray-200 rounded-full"></div>
                  <div class="w-20 h-2 mb-2 bg-gray-200 rounded-full"></div>
                  <div class="w-6 h-2 mb-2 bg-gray-200 rounded-full"></div>
                </div>
                <div class="flex-1 px-4 py-8">
                  <h2 class="mb-1 text-xs font-bold text-gray-700">
                    Popular Payments
                  </h2>
                  <div class="flex mb-5">
                    <div class="w-12 p-2 mr-2 bg-gray-100 rounded-full"></div>
                    <div class="w-12 p-2 mr-2 bg-gray-100 rounded-full"></div>
                    <div class="w-12 p-2 mr-2 bg-gray-100 rounded-full"></div>
                    <div class="w-12 p-2 mr-2 bg-gray-100 rounded-full"></div>
                  </div>

                  <div class="flex flex-wrap mb-5 -mx-2">
                    <div class="w-1/3 px-2">
                      <div class="p-3 bg-white rounded-lg shadow">
                        <div
                          class="w-6 h-6 mb-2 bg-gray-200 rounded-full"
                        ></div>
                        <div
                          class="w-10 h-2 mb-1 bg-gray-200 rounded-full"
                        ></div>
                        <div class="w-6 h-2 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    <div class="w-1/3 px-2">
                      <div class="p-3 bg-white rounded-lg shadow">
                        <div
                          class="w-6 h-6 mb-2 bg-gray-200 rounded-full"
                        ></div>
                        <div
                          class="w-10 h-2 mb-1 bg-gray-200 rounded-full"
                        ></div>
                        <div class="w-6 h-2 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    <div class="w-1/3 px-2">
                      <div class="p-3 bg-white rounded-lg shadow">
                        <div
                          class="w-6 h-6 mb-2 bg-gray-200 rounded-full"
                        ></div>
                        <div
                          class="w-10 h-2 mb-1 bg-gray-200 rounded-full"
                        ></div>
                        <div class="w-6 h-2 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <h2 class="mb-1 text-xs font-bold text-gray-700">
                    Popular Payments
                  </h2>

                  <div
                    class="flex flex-wrap items-center justify-between w-full py-3 border-b-2 border-gray-100"
                  >
                    <div class="w-1/3">
                      <div class="flex">
                        <div
                          class="flex-shrink-0 w-5 h-5 mr-3 bg-gray-200 rounded-full"
                        ></div>
                        <div>
                          <div
                            class="w-16 h-2 mb-1 bg-gray-200 rounded-full"
                          ></div>
                          <div class="w-10 h-2 bg-gray-100 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div class="w-1/3">
                      <div
                        class="w-16 px-4 py-2 mx-auto bg-green-100 rounded-full"
                      >
                        <div class="p-1 bg-green-200 rounded-full"></div>
                      </div>
                    </div>
                    <div class="w-1/3">
                      <div
                        class="w-10 h-2 mx-auto bg-gray-100 rounded-full"
                      ></div>
                    </div>
                  </div>

                  <div class="flex flex-wrap items-center justify-between py-3">
                    <div class="w-1/3">
                      <div class="flex">
                        <div
                          class="flex-shrink-0 w-5 h-5 mr-3 bg-gray-200 rounded-full"
                        ></div>
                        <div>
                          <div
                            class="w-16 h-2 mb-1 bg-gray-200 rounded-full"
                          ></div>
                          <div class="w-10 h-2 bg-gray-100 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div class="w-1/3">
                      <div
                        class="w-16 px-4 py-2 mx-auto bg-orange-100 rounded-full"
                      >
                        <div class="p-1 bg-orange-200 rounded-full"></div>
                      </div>
                    </div>
                    <div class="w-1/3">
                      <div
                        class="w-16 h-2 mx-auto bg-gray-100 rounded-full"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="absolute bottom-0 right-0 w-40 px-10 py-6 mr-3 bg-white rounded-lg shadow-lg md:hidden"
                style="z-index: 2; margin-bottom: -380px"
              >
                <div
                  class="relative w-20 pt-3 mx-auto mb-12 bg-indigo-800 rounded-lg"
                >
                  <div class="h-3 bg-white"></div>

                  <div class="my-2 text-right">
                    <div
                      class="inline-flex w-3 h-3 -mr-2 bg-white rounded-full"
                    ></div>
                    <div
                      class="inline-flex w-3 h-3 mr-2 bg-indigo-800 border-2 border-white rounded-full"
                    ></div>
                  </div>

                  <div
                    class="absolute bottom-0 left-0 w-16 pt-3 pb-2 mx-auto -mb-6 -ml-4 bg-green-700 rounded-lg"
                  >
                    <div class="h-2 mb-2 bg-white"></div>
                    <div class="w-6 h-2 ml-auto mr-2 bg-white rounded"></div>
                  </div>
                </div>

                <div class="text-sm text-center text-gray-800">
                  Payment for <br />Internet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        class="hidden text-white fill-current md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
      </svg>
    </div>

    <p class="p-4 pt-10 text-center text-gray-600">
      Created by
      <a
        class="text-blue-500 border-b"
        href="https://twitter.com/mithicher"
        target="_blank"
        >@mithicher</a
      >. Inspired by dribble shot
      <a
        href="https://dribbble.com/shots/8807920-Quickpay-Hero-section/attachments/1015863"
        target="_blank"
        class="text-blue-500 border-b"
        >https://dribbble.com/vadimdrut</a
      >
    </p>
  </div>
</template>

<script>
export default {}
</script>
