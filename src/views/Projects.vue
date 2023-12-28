<script >
import CosmeticBlog from './../components/CosmeticBlog.vue';
import ProjectModal from './../components/ProjectModal.vue';
    export default {
        data(){
            return {  
                verbs : ["run", "jump", "sing", "eat", "sleep", "dance", "read", "write", "swim", "talk", "laugh", "fly", "play", "work", "think", "study", "drive", "climb", "cook", "draw"],
                prepositions :["on", "under", "over", "beside", "inside", "across", "through", "behind", "between", "against", "along", "onto", "within", "before", "after", "beneath", "among", "above", "near", "inside" ],
                nouns :["cat", "dog", "house", "ball", "tree", "book", "car", "sun", "moon", "flower", "friend", "computer", "school", "music", "beach", "mountain", "river", "city", "child", "food" ],
                adjectives : ["happy", "blue", "large", "quick", "beautiful", "tall", "funny", "smart", "bright", "kind", "loud", "soft", "hard", "sweet", "cold", "hot", "angry", "calm", "young", "old"],
                openModal:false,                      
                projects:[
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023',
                            cosmetics:[
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Scheduled',
                                    created_at:'18 Nov 2023',
                                    visitors:557,
                                    monthly_avg_visitors:7560,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Draft',
                                    created_at:'20 Nov 2023',
                                    visitors:0,
                                    monthly_avg_visitors:0,
                                    keyword_ranking_top:0
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Published',
                                    created_at:'21 Nov 2023',
                                    visitors:55,
                                    monthly_avg_visitors:756,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Written',
                                    created_at:'22 Nov 2023',
                                    visitors:5,
                                    monthly_avg_visitors:76,
                                    keyword_ranking_top:13
                                }
                            ]
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023',
                            cosmetics:[
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Scheduled',
                                    created_at:'18 Nov 2023',
                                    visitors:557,
                                    monthly_avg_visitors:7560,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Draft',
                                    created_at:'20 Nov 2023',
                                    visitors:0,
                                    monthly_avg_visitors:0,
                                    keyword_ranking_top:0
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Published',
                                    created_at:'21 Nov 2023',
                                    visitors:55,
                                    monthly_avg_visitors:756,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Written',
                                    created_at:'22 Nov 2023',
                                    visitors:5,
                                    monthly_avg_visitors:76,
                                    keyword_ranking_top:13
                                }
                            ]
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023',
                            cosmetics:[
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Scheduled',
                                    created_at:'18 Nov 2023',
                                    visitors:557,
                                    monthly_avg_visitors:7560,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Draft',
                                    created_at:'20 Nov 2023',
                                    visitors:0,
                                    monthly_avg_visitors:0,
                                    keyword_ranking_top:0
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Published',
                                    created_at:'21 Nov 2023',
                                    visitors:55,
                                    monthly_avg_visitors:756,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Written',
                                    created_at:'22 Nov 2023',
                                    visitors:5,
                                    monthly_avg_visitors:76,
                                    keyword_ranking_top:13
                                }
                            ]
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023',
                            cosmetics:[
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Scheduled',
                                    created_at:'18 Nov 2023',
                                    visitors:557,
                                    monthly_avg_visitors:7560,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Draft',
                                    created_at:'20 Nov 2023',
                                    visitors:0,
                                    monthly_avg_visitors:0,
                                    keyword_ranking_top:0
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Published',
                                    created_at:'21 Nov 2023',
                                    visitors:55,
                                    monthly_avg_visitors:756,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Written',
                                    created_at:'22 Nov 2023',
                                    visitors:5,
                                    monthly_avg_visitors:76,
                                    keyword_ranking_top:13
                                }
                            ]
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023',
                            cosmetics:[
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Scheduled',
                                    created_at:'18 Nov 2023',
                                    visitors:557,
                                    monthly_avg_visitors:7560,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Draft',
                                    created_at:'20 Nov 2023',
                                    visitors:0,
                                    monthly_avg_visitors:0,
                                    keyword_ranking_top:0
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Published',
                                    created_at:'21 Nov 2023',
                                    visitors:55,
                                    monthly_avg_visitors:756,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Written',
                                    created_at:'22 Nov 2023',
                                    visitors:5,
                                    monthly_avg_visitors:76,
                                    keyword_ranking_top:13
                                }
                            ]
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023',
                            cosmetics:[
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Scheduled',
                                    created_at:'18 Nov 2023',
                                    visitors:557,
                                    monthly_avg_visitors:7560,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Draft',
                                    created_at:'20 Nov 2023',
                                    visitors:0,
                                    monthly_avg_visitors:0,
                                    keyword_ranking_top:0
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Published',
                                    created_at:'21 Nov 2023',
                                    visitors:55,
                                    monthly_avg_visitors:756,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Written',
                                    created_at:'22 Nov 2023',
                                    visitors:5,
                                    monthly_avg_visitors:76,
                                    keyword_ranking_top:13
                                }
                            ]
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023',
                            cosmetics:[
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Scheduled',
                                    created_at:'18 Nov 2023',
                                    visitors:557,
                                    monthly_avg_visitors:7560,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Draft',
                                    created_at:'20 Nov 2023',
                                    visitors:0,
                                    monthly_avg_visitors:0,
                                    keyword_ranking_top:0
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Published',
                                    created_at:'21 Nov 2023',
                                    visitors:55,
                                    monthly_avg_visitors:756,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Written',
                                    created_at:'22 Nov 2023',
                                    visitors:5,
                                    monthly_avg_visitors:76,
                                    keyword_ranking_top:13
                                }
                            ]
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023',
                            cosmetics:[
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Scheduled',
                                    created_at:'18 Nov 2023',
                                    visitors:557,
                                    monthly_avg_visitors:7560,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Draft',
                                    created_at:'20 Nov 2023',
                                    visitors:0,
                                    monthly_avg_visitors:0,
                                    keyword_ranking_top:0
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Published',
                                    created_at:'21 Nov 2023',
                                    visitors:55,
                                    monthly_avg_visitors:756,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Written',
                                    created_at:'22 Nov 2023',
                                    visitors:5,
                                    monthly_avg_visitors:76,
                                    keyword_ranking_top:13
                                }
                            ]
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023',
                            cosmetics:[
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Scheduled',
                                    created_at:'18 Nov 2023',
                                    visitors:557,
                                    monthly_avg_visitors:7560,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Draft',
                                    created_at:'20 Nov 2023',
                                    visitors:0,
                                    monthly_avg_visitors:0,
                                    keyword_ranking_top:0
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Published',
                                    created_at:'21 Nov 2023',
                                    visitors:55,
                                    monthly_avg_visitors:756,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Written',
                                    created_at:'22 Nov 2023',
                                    visitors:5,
                                    monthly_avg_visitors:76,
                                    keyword_ranking_top:13
                                }
                            ]
                        },
                        {
                            icon:'',
                            name:'Project 01',
                            date:'Modified 05 Nov 2023',
                            cosmetics:[
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Scheduled',
                                    created_at:'18 Nov 2023',
                                    visitors:557,
                                    monthly_avg_visitors:7560,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Draft',
                                    created_at:'20 Nov 2023',
                                    visitors:0,
                                    monthly_avg_visitors:0,
                                    keyword_ranking_top:0
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Published',
                                    created_at:'21 Nov 2023',
                                    visitors:55,
                                    monthly_avg_visitors:756,
                                    keyword_ranking_top:137
                                },
                                {
                                    name:'Cosmetic blog',
                                    content:'',
                                    status:'Written',
                                    created_at:'22 Nov 2023',
                                    visitors:5,
                                    monthly_avg_visitors:76,
                                    keyword_ranking_top:13
                                }
                            ]
                        },
                ],     
                page:'main',          
                selectedProject:null
            }
        },
        computed: {
          
        },       
        components: {
            ProjectModal,
            CosmeticBlog
        },
        methods: {     
            openProject(project){
                this.selectedProject = project
                this.page= 'sub'
            },       
            backToMain(){
                this.selectedProject = null
                this.page= 'main'
            },       
            generateMixedWords() {
                const mixedWords = [];
                
                for (let i = 0; i < 1; i++) {
                    const verb = this.verbs[Math.floor(Math.random() * this.verbs.length)];
                    const preposition = this.prepositions[Math.floor(Math.random() * this.prepositions.length)];
                    const noun = this.nouns[Math.floor(Math.random() * this.nouns.length)];
                    const adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)];

                    mixedWords.push(verb, preposition, noun, adjective);
                }

                return mixedWords.join(' ');
            }
        },
        created() {    
            this.projects.forEach(project => {
            project.cosmetics.forEach(cosmetic => {
                cosmetic.content = this.generateMixedWords();
            });
            });
            console.log(this.projects,100)
        }
    };
</script>

<template>
    {{ modalOpenAction }}
  <div class="w-100 md:w-[128%] ">
    <Transition name="fade">
        <div v-if="page=='main'" class="w-[inherit]">
            <div class="flex justify-between my-8 items-center">
                <h1 class="font-bold text-xl md:text-2xl mb-4 text-gray-800 opacity-[0.7]">Your Projects</h1>    
                <button @click="openModal = true" class="py-2 w-[100px] md:w-[230px] px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-400 text-white hover:bg-blue-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <span v-html="$globals.icons.plus" class="opacity-[0.7] w-[30px] md:w-[10%] h-[20px]"></span> 
                    <span class="text-white text-base font-semibold hidden md:inline-block md:ml-2">Create New Project</span>
                </button>
            </div>
            <div class="grid md:grid-cols-3 gap-6 pr-2 mb-8">        
                <div  v-for="project in projects" class="bg-white flex items-center justify-between py-5 rounded shadow-[#f5f5f5_0px_0px_7px_1px]">
                    <div class="flex items-center">
                        <span v-html="$globals.icons.picture" class="opacity-[0.9] w-[60px] h-[40px] mx-5 rounded bg-blue-100/50  px-4 py-3 h-[80%] "></span>
                        <div class="text-white text-xl font-semibold ml-1 md:ml-5">
                            <p class="font-bold text-lg text-indigo-900">{{ project.name }}</p>
                            <p class="font-sm text-base text-gray-500 m-0 ">{{ project.date }}</p>                                
                        </div>
                    </div>
                    <span @click="openProject(project)" class=" cursor-pointer w-[14px] h-[100%] mr-[20px]" v-html="$globals.icons.dots"></span>
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
        <div v-else>
            <CosmeticBlog @backBtn="backToMain()" :project="selectedProject" />
        </div>
    </Transition>
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
