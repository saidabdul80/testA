<template>    
    <div class="flex h-screen relative " :class="{}" >
    <!-- <div class="flex h-screen relative antialiased transition-transform duration-200 " :class="{'-translate-x-[300px]':!showMenu,}" :style="{minWidth:!showMenu?'calc(100% + 300px)':'100%'}"> -->
        <div class="flex-shrink   antialiased  transition-all duration-200 w-[250px]" :class="{'w-0':!showMenu,'-translate-x-[300px]':!showMenu}">
            <SideBar key="1" />
        </div>
        <div class="bg-[#F2F1F9] flex-1 duration-200 h-[100vh] p-5 md:p-7 overflow-x-auto">
            <!-- header card -->
            <div class="bg-white rounded py-4 px-8 shadow-[#f5f5f5_0px_0px_7px_1px] flex justify-between md:w-[128%]">
                <div class="flex">
                    <!-- Hamburger Menu for Mobile -->
                    <button @click="showMenu = !showMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" height="33" width="24" viewBox="0 0 448 512">
                        <!-- Top line -->
                        <rect x="16" y="100" width="416" height="40" rx="8" ry="8" fill="#444"/>
                        <!-- Middle line -->
                        <rect x="16" y="220" width="312" height="40" rx="8" ry="8" fill="#444"/>
                        <!-- Bottom line -->
                        <rect x="16" y="340" width="416" height="40" rx="8" ry="8" fill="#444"/>
                        </svg>
                    </button>
                    <div class="md:flex ml-5 hidden">                       
                        <input type="text" class="bg-gray-50 text-gray-900 focus:outline-none block flex-1 min-w-0 w-full text-sm  p-2.5  dark:bg-gray-700 dark:border-none dark:placeholder-gray-400 dark:text-white"
                            placeholder="My Workspace">
                            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="white" d="M207 381.5L12.7 187.1c-9.4-9.4-9.4-24.6 0-33.9l22.7-22.7c9.4-9.4 24.5-9.4 33.9 0L224 284.5l154.7-154c9.4-9.3 24.5-9.3 33.9 0l22.7 22.7c9.4 9.4 9.4 24.6 0 33.9L241 381.5c-9.4 9.4-24.6 9.4-33.9 0z"/></svg>
                        </span>
                    </div>
                </div>
                <div class="flex items-center relative">
                    <div class="md:flex ml-5 hidden">                       
                        <input type="text" class="bg-gray-50 text-gray-900 focus:outline-none block flex-1 min-w-0 w-full text-sm  p-2.5  dark:bg-gray-700 dark:border-none dark:placeholder-gray-400 dark:text-white" placeholder="Search here">
                        <span class="inline-flex items-center px-3 text-sm text-white bg-blue-400">Search</span>
                    </div>
                    <span class="w-[24px] mx-4 md:mx-8">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a1a1a1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0009 5C13.4331 5 14.8066 5.50571 15.8193 6.40589C16.832 7.30606 17.4009 8.52696 17.4009 9.8C17.4009 11.7691 17.846 13.2436 18.4232 14.3279C19.1606 15.7133 19.5293 16.406 19.5088 16.5642C19.4849 16.7489 19.4544 16.7997 19.3026 16.9075C19.1725 17 18.5254 17 17.2311 17H6.77066C5.47638 17 4.82925 17 4.69916 16.9075C4.54741 16.7997 4.51692 16.7489 4.493 16.5642C4.47249 16.406 4.8412 15.7133 5.57863 14.3279C6.1558 13.2436 6.60089 11.7691 6.60089 9.8C6.60089 8.52696 7.16982 7.30606 8.18251 6.40589C9.19521 5.50571 10.5687 5 12.0009 5ZM12.0009 5V3M9.35489 20C10.0611 20.6233 10.9888 21.0016 12.0049 21.0016C13.0209 21.0016 13.9486 20.6233 14.6549 20" stroke="#666666" stroke-width="0.624" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </span>
                    <span  class="w-[22px]">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <circle cx="12" cy="12" r="9" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M12 11V17" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.75 8V7H12.25V8H11.75Z" stroke="#666" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </span>
                    <div @click="toggleDropdown" class="cursor-pointer flex items-center ml-4 md:ml-8 relative">
                        <img class="w-[35px] rounded-lg inline-block" src="./assets/images/user.svg">
                        <div class="hidden md:inline-block">
                        <p class="text-sm font-medium text-gray-900 dark:text-white mb-0 ml-2">Welcome Grace</p>
                        <span class="text-sm ml-2">Admin</span>
                        </div>
                        <div :class="{'block': isDropdownOpen, 'hidden': !isDropdownOpen}" class="dropdown top-[50px] left-[0px] shadow-[#ccc_0px_10px_25px_-10px] w-[150px] absolute z-[1000]">
                            <Transition name="fade">
                                <ul v-show="isDropdownOpen" class="bg-white cursor-pointer	">
                                    <li class="hover:text-blue-400 p-3 text-gray-500 text-sm border-b">Profile</li>
                                    <li class="hover:text-blue-400 p-3 text-gray-500 text-sm border-b">Support</li>
                                    <li class="hover:text-blue-400 p-3 text-gray-500 text-sm border-b">Settings</li>
                                    <li @click="$router.push('/login')" class="hover:text-blue-400 p-3 text-gray-500 text-sm border-b">Log Out</li>
                                </ul>
                            </Transition>
                        </div>
                    </div>
                </div>

            </div>
            <div @click="isDropdownOpen=false">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
  
<script>
import SideBar from './components/SideBar.vue';

export default {
    data(){
        return {
            showMenu:true,
            isDropdownOpen: false
        }
    },
    components: {
        SideBar,
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        toggleSidebar() {
            this.$emit('toggle-sidebar');
        },
    },
};
</script>
  
<style scoped>/* Your scoped styles here */</style>
  