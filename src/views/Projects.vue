<script >
import ProjectModal from './../components/ProjectModal.vue';
    export default {
        data(){
            return {  
                openModal:false,                      
                projects:[
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023'
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023'
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023'
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023'
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023'
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023'
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023'
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023'
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023'
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023'
                        },
                ],               
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
    {{ modalOpenAction }}
  <div class=" w-[128%] ">
    <div class="flex justify-between my-8">
        <h1 class="font-bold text-2xl mb-4 text-gray-800 opacity-[0.7]">Your Projects</h1>    
        <button @click="openModal = true" class="py-2 w-[230px] px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-400 text-white hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <span v-html="$globals.icons.plus" class="opacity-[0.3] w-[10%] h-[20px]"></span> 
            <span class="text-white text-base font-semibold ml-2">Create New Project</span>
        </button>
    </div>
    <div class="grid grid-cols-3 gap-6 pr-2 mb-8">        
        <div  v-for="project in projects" class="bg-white flex items-center justify-between py-5 rounded shadow-[#f5f5f5_0px_0px_7px_1px]">
            <div class="flex items-center">
                <span v-html="$globals.icons.picture" class="opacity-[0.9] w-[60px] h-[40px] mx-5 rounded bg-blue-100/50  px-4 py-3 h-[80%] "></span>
                <div class="text-white text-xl font-semibold ml-5">
                    <p class="font-bold text-lg text-indigo-900">{{ project.name }}</p>
                    <p class="font-sm text-base text-gray-500 m-0 ">{{ project.date }}</p>                                
                </div>
            </div>
            <span class="w-[14px] h-[100%] mr-[20px]" v-html="$globals.icons.dots"></span>
        </div>          
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
</style>
