<script >
import ProjectModal from './../components/ProjectModal.vue';
    export default {
        props:['project'],
        data(){
            return {  
                openModal:false,                                               
            }
        },
        computed: {
          
        },       
        components: { 
            ProjectModal         
        },
        methods: {                 
        },
    };
</script>

<template>    
  <div class="w-[inherit]">
    <div class="flex justify-between my-8 items-center">
        <div class="flex items-center">
            <button @click="$emit('backBtn', true)" class="h-[40px] w-[45px] block relative rounded bg-blue-400 hover:bg-blue-500 disabled:opacity-50">
                <span v-html="$globals.icons.arrow_right" style="fill: white;" class=" absolute top-[6.5px] left-[40px] mb-1 w-[5px] h-[20px]  flipped-arrow"></span>
            </button>
            <h1 class="font-bold ml-3 mt-3 text-xl md:text-2xl mb-4 text-gray-800 opacity-[0.8]">Cosmetic Blog ({{ project.cosmetics.length }})</h1>    
        </div>
        <div class="flex" >
            <button  class="px-3  h-[40px] flex items-center justify-center relative rounded bg-blue-400 hover:bg-blue-500 disabled:opacity-50">
                <span v-html="$globals.icons.filter" style="fill: white;" class="w-[25px] opacity-[0.8] "></span>
                <span class="text-sm text-white md:inline-block hidden ml-2">By Date</span>
            </button>
            <button  class="px-3 md:w-[230px] h-[40px]  flex items-center mx-3 justify-center relative rounded bg-blue-400 hover:bg-blue-500 disabled:opacity-50">
                <span v-html="$globals.icons.pencil" style="fill: white;" class="w-[25px] opacity-[0.8] "></span>
                <span class="text-sm text-white md:inline-block hidden ml-2">Content Writer</span>
            </button>
            <button  class="px-3 md:w-[230px] h-[40px]  flex items-center justify-center relative rounded bg-blue-400 hover:bg-blue-500 disabled:opacity-50">
                <span v-html="$globals.icons.plus" style="fill: white;" class="opacity-[0.8] w-[25px] h-[20px] "></span>
                <span class="text-sm text-white md:inline-block hidden ml-2">New Topic Idea</span>
            </button>
        </div>
    </div>
    <div class=" pr-2 mb-8">     
        <table class="min-w-full">
            <thead class="bg-gray-50">
                <tr class="">
                    <th class="px-0 pb-2 bg-[transparent] text-left">
                        <div class="font-bold flex items-center px-6 h-[80px] py-4 whitespace-nowrap bg-white shadow-[#efefef_0px_1px_7px_1px]">Checkbox</div></th>
                    <th class="px-0 pb-2 bg-[transparent] text-left">
                        <div class="font-bold flex items-center px-6 h-[80px] py-4 whitespace-nowrap bg-white shadow-[#efefef_7px_1px_7px_1px]">Project Name</div></th>
                    <th class="px-0 pb-2 bg-[transparent] text-left">
                        <div class="font-bold flex items-center px-6 h-[80px] py-4 whitespace-nowrap bg-white shadow-[#efefef_7px_1px_7px_1px]">Content</div></th>
                    <th class="px-0 pb-2 bg-[transparent] text-left">
                        <div class="font-bold flex items-center px-6 h-[80px] py-4 whitespace-nowrap bg-white shadow-[#efefef_7px_1px_7px_1px]">Status</div></th>
                    <th class="px-0 pb-2 bg-[transparent] text-left">
                        <div class="font-bold flex items-center px-6 h-[80px] py-4 whitespace-nowrap bg-white shadow-[#efefef_7px_1px_7px_1px]">Date</div></th>
                    <th class="px-0 pb-2 bg-[transparent] text-center">
                        <div class="font-bold flex items-center justify-center px-6 h-[80px] py-4 whitespace-nowrap bg-white shadow-[#efefef_7px_1px_7px_1px]">Traffic Stats</div></th>
                    <th class="px-0 pb-2 bg-[transparent] text-left">
                        <div class="font-bold flex items-center px-6 h-[80px] py-4 whitespace-nowrap bg-white shadow-[#efefef_9px_1px_7px_1px]">Action</div></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                <tr  v-for="cosmetic in project?.cosmetics"  class="my-5 rounded ">
                    <td class="px-0 pb-2 bg-[transparent] ">
                        <div class="px-6 h-[80px] py-4 whitespace-nowrap bg-white shadow-[#efefef_0px_1px_7px_1px]">
                            <input type="checkbox">
                        </div>
                    </td>
                    <td class="px-0 pb-2 bg-[transparent] ">
                        <div class="px-6 h-[80px] py-4 whitespace-nowrap bg-white shadow-[#efefef_7px_1px_7px_1px]">
                            {{ cosmetic.name}}
                        </div>
                    </td>
                    <td class="px-0 pb-2 bg-[transparent] ">
                        <div class="px-6 h-[80px] py-4 whitespace-nowrap bg-white shadow-[#efefef_7px_1px_7px_1px]">
                            {{ cosmetic.content}}
                        </div>
                    </td>
                    <td class="px-0 pb-2 bg-[transparent] ">
                        <div class="px-6 h-[80px] py-4 whitespace-nowrap bg-white shadow-[#efefef_7px_1px_7px_1px]">
                            {{cosmetic.status}}
                        </div>
                    </td>
                    <td class="px-0 pb-2 bg-[transparent] ">
                        <div class="px-6 h-[80px] py-4 whitespace-nowrap bg-white shadow-[#efefef_7px_1px_7px_1px]">
                            {{ cosmetic.created_at}}
                        </div>
                    </td>
                    <td class="px-0 pb-2 bg-[transparent] ">
                        <div class="px-6 h-[80px] py-4 whitespace-nowrap bg-white shadow-[#efefef_7px_1px_7px_1px]">
                            <div class="flex justify-between">
                                <div class="">
                                    <p class="m-0 text-xs">Vistors Today</p>
                                    <p class="text-center  font-semibold">{{ cosmetic.visitors }}</p>
                                </div>
                                <div class="mx-4">
                                    <p class="m-0 text-xs">Monthly Avg. Vistors</p>
                                    <p class="text-center  font-semibold">{{ cosmetic.monthly_avg_visitors }}</p>
                                </div>                    
                                <div class="">
                                    <p class="m-0 text-xs">Keyword Ranking Top 30</p>
                                    <p class="text-center font-semibold">{{ cosmetic.keyword_ranking_top }}</p>
                                </div>                    
                            </div>
                        </div>
                    </td>
                    <td class="px-0 pb-2 bg-[transparent] ">
                        <div class="px-6 h-[80px] py-4 whitespace-nowrap bg-white shadow-[#efefef_9px_1px_7px_1px]">
                            <span  class=" cursor-pointer w-[14px] h-[100%] mr-[20px]" v-html="$globals.icons.dots"></span>
                        </div>
                    </td>
                </tr>
            </tbody>

        </table>       
     <!--    <div  v-for="cosmetic in project?.cosmetics" class="bg-white flex items-center justify-between py-5 rounded shadow-[#f5f5f5_0px_0px_7px_1px]">
            <div class="flex items-center">
                <span v-html="$globals.icons.picture" class="opacity-[0.9] w-[60px] h-[40px] mx-5 rounded bg-blue-100/50  px-4 py-3 h-[80%] "></span>
                <div class="text-white text-xl font-semibold ml-1 md:ml-5">
                    <p class="font-bold text-lg text-indigo-900">{{ cosmetic.name }}</p>
                    <p class="font-sm text-base text-gray-500 m-0 ">{{ cosmetic.date }}</p>                                
                </div>
            </div>
            <span class="w-[14px] h-[100%] mr-[20px]" v-html="$globals.icons.dots"></span>
        </div>    -->       
    </div>  
    <div >
        <Teleport to="#app">
            <Transition  name="fade">
                <ProjectModal v-if="openModal" @closeModal="openModal=false" />
            </Transition>
            </Teleport>
        </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.flipped-arrow {
  transform: rotateY(180deg) !important;
  display: block;
}

</style>
