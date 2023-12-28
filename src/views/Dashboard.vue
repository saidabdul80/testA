<script >
    export default {
        data(){
            return {
                cards:[
                    {
                        icon:this.$globals.icons.document_gear,
                        text:'Written',
                        count:45
                    },
                    {
                        icon:this.$globals.icons.document_gear,
                        text:'Published',
                        count:10
                    },
                    {
                        icon:this.$globals.icons.document_gear,
                        text:'Scheduled',
                        count:15
                    },
                    {
                        icon:this.$globals.icons.document_gear,
                        text:'Draft',
                        count:40
                    },
                    {
                        icon:this.$globals.icons.document_gear,
                        text:'Wizard Docs',
                        count:45
                    }

                ],
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
                documents:[
                        {
                            icon:'',
                            name:'Email Copy',
                            date:'Generated 05 Nov 2023'
                        },
                        {
                            icon:'',
                            name:'Sales Copy',
                            date:'Generated 05 Nov 2023'
                        },
                        {
                            icon:'',
                            name:'Video Copy',
                            date:'Generated 05 Nov 2023'
                        }
                ],
                contentsWizard:[
                    { icon:"", text:"Blog Post" },
                    { icon:"", text:"Email" },
                    { icon:"", text:"Video Script" },
                    { icon:"", text:"Website" },
                    { icon:"", text:"Sales Copy" },
                    { icon:"", text:"Ad Copy" },
                    { icon:"", text:"Social Media" },
                    { icon:"", text:"eCommerce" },                    
                ]
            }
        },
        components: {          
        },
        methods: {            
        },
    };
</script>

<template>
    <div class=" w-[128%]">
        <div class="my-8 w-full bg-white rounded py-2 shadow-[#f5f5f5_0px_0px_7px_1px] ">
            <div class="flex items-center">
                <img src="../assets/images/bolb.png" class="w-[150px] opacity-[0.4] ml-[-4px]"/>
                <div >
                    <h5 class="text-2xl font-medium">Welcome Grace</h5>
                    <p class="text-base">Use the guide to learn how to write your First article using our AI writing  Tool. </p>
                    <div class="mt-3">
                        <button  disabled class="py-2 w-[130px] px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-400 text-white hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Learn More</button>
                        <button class="py-2 px-4 w-[130px] text-center inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-tranparent border-2 border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ml-3">Dismiss</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-5 gap-10">
            <div v-for="card in cards" class="mb-8 hover:bg-blue-100 w-full bg-white rounded shadow-[#f5f5f5_0px_0px_7px_1px] flex items-center py-6 px-8">                    
                <span class="bg-blue-100/50 h-[80%] flex items-center px-2 py-3 rounded mr-4" style="fill:rgb(50, 189, 236);" v-html="card.icon"></span>
                <div>
                    <p class="font-bold text-base text-gray-500 m-0">{{ card.text }}</p>
                    <p class="font-bold text-2xl text-indigo-900 leading-none">{{ card.count }}</p>
                </div>
            </div>
        </div>
        <div class=" mb-8">
            <div class="grid grid-cols-1  md:grid-cols-3 gap-10">
                <div class="col-span-1 md:col-span-2 ">
                    <h1 class="font-bold text-2xl mb-4 text-gray-800 opacity-[0.7]">Recent Projects</h1>
                    <div class="grid grid-cols-2 gap-6 pr-2 overflow-y-auto h-[200px] mb-8">
                        <div class="bg-blue-400 flex items-center justify-center py-5 rounded shadow-[#f5f5f5_0px_0px_7px_1px]">
                            <div class="flex items-center">
                                <span v-html="$globals.icons.plus" class="opacity-[0.3] w-[40px] h-[40px]"></span>
                                <span class="text-white text-xl font-semibold ml-5">Create New</span>
                            </div>
                        </div>
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
                    <h1 class="font-bold text-2xl mb-4 text-gray-800 opacity-[0.7]">Wizard Documents</h1>
                    <div class="grid grid-cols-1 gap-6 pr-2">
                        <div  v-for="document in documents" class="bg-white flex items-center justify-between py-5 rounded shadow-[#f5f5f5_0px_0px_7px_1px]">
                            <div class="flex items-center">
                                <span v-html="$globals.icons.picture" class="opacity-[0.9] w-[60px] h-[40px] mx-5 rounded bg-blue-100/50  px-4 py-3 h-[80%] "></span>
                                <div class="text-white text-xl font-semibold ml-5">
                                    <p class="font-bold text-lg text-indigo-900">{{ document.name }}</p>
                                    <p class="font-sm text-base text-gray-500 m-0 ">{{ document.date }}</p>                                
                                </div>
                            </div>
                            <span class="w-[14px] h-[100%] mr-[20px]" v-html="$globals.icons.dots"></span>
                        </div>      
                    </div>

                </div>
                <div class="col-span-1">
                    <h1 class="font-bold text-2xl mb-4 text-gray-800 opacity-[0.7]">Wizard Documents</h1>
                    <div class="grid grid-cols-2 gap-6 pr-2 mb-8">                      
                        <div  v-for="content in contentsWizard" class="bg-white hover:bg-blue-100 flex items-center py-5 rounded shadow-[#f5f5f5_0px_0px_7px_1px]">
                            <div class="flex items-center">
                                <span v-html="$globals.icons.picture" class="opacity-[0.9] w-[60px] h-[40px] mx-5 rounded bg-blue-100/50  px-4 py-3 h-[80%] "></span>
                                <div class="  font-semibold ">
                                    <p class="text-lg text-indigo-900">{{ content.text }}</p>                                    
                                </div>
                            </div>                                                        
                        </div>          
                    </div>     
                    <button class="py-4 w-full px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded border border-transparent bg-blue-400 text-white hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Generate</button>
                </div>
    
            </div>
        </div>
       
    </div> 
</template>

<style>
 
</style>
