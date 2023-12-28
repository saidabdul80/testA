<script >
    export default {
        data(){
            return {  
                type:'Project_Name',                      
            }              
        },
        computed: {
          
        },       
        components: { 
         
        },
        methods: {                 
        },
    };
</script>

<template>
    <div  class="fixed left-0 top-0 z-[1055] bg-[black]/25  h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="projectModalLabel" tabindex="-1" aria-labelledby="projectModalLabelLabel"
  aria-modal="true" role="dialog">
  <div  class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-[80%] md:min-w-[calc(100%*1.9/3)] translate-y-[-50px] items-center transition-all duration-300 ease-in-out mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
    <div
      class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
      <div
        class="flex flex-shrink-0 items-center justify-between rounded-t-md  border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <!--Modal title-->
        <div>
            <h5 class="text-xl font-bold leading-normal text-[#2B2A3F] opacity-[0.9]">
              New Project
            </h5>
            <p class="text-base ">Define your project by providing some basic information about it</p>
        </div>
        <!--Close button-->
        <button type="button" @click="$emit('closeModal',true)"
          class="box-content rounded-full bg-blue-400 p-1 border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4"
            stroke="white" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!--Modal body-->
      <div class="relative md:py-12 w-full flex justify-center">
        <div class="py-5 w-[90%]  md:w-[60%] ">
            <div class="flex">
                <div class="flex items-center mb-4">
                    <input id="disabled-radio-1" type="radio" v-model="type" value="Domain_Name" name="domain" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  ">
                    <label for="disabled-radio-1" class="ms-2 text-sm font-medium text-gray-600 dark:text-gray-500">Proceed with Domain name</label>
                </div>
                <div class="flex items-center mb-4 ml-10">
                    <input id="disabled-radio-1" type="radio" v-model="type" value="Project_Name" name="domain" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-400 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="disabled-radio-1" class="ms-2 text-sm font-medium text-gray-600 dark:text-gray-500">Proceed with Project name</label>
                </div>
            </div>
            <h5 class="text-xl mt-5 font-bold leading-normal text-[#2B2A3F] opacity-[0.9]">
              Project {{type.replace('_',' ')}}
            </h5>
            <div v-if="type=='Domain_Name'" class="grid  w-[100%] grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                <div class="md:col-span-3">
                    <input type="text" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://yourdomain.com" >
                </div>
                <div class="col-span-1">
                    <button class="py-3.5 w-[80%] px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded border border-transparent bg-blue-400 text-white hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        <span class="text-white text-base font-semibold ml-2">Next</span>
                        <span v-html="$globals.icons.arrow_right" style="fill: white;" class="opacity-[0.9] w-[40px] h-[20px]"></span> 
                    </button>
                </div>
            </div>
            <div v-else class="grid  w-[100%] grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                <div class="md:col-span-3">
                    <input type="text"  class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Food Blog" >
                </div>
                <div class="col-span-1">
                    <button class="py-3.5 w-[100%] md:w-[80%] px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded border border-transparent bg-blue-400 text-white hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        <span class="text-white text-base font-semibold ml-2">Next</span>
                        <span v-html="$globals.icons.arrow_right" style="fill: white;" class="opacity-[0.9] w-[40px] h-[20px]"></span> 
                    </button>
                </div>
            </div>
        </div>
      </div>
  
    </div>
  </div>
</div>
</template>