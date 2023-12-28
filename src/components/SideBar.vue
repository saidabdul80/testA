<template>
    <aside :key="refresh"      
      class="bg-[#2B2A3F] w-[inherit]  text-gray-200 w-64 flex-shrink-0 absolute top-0 left-0 h-full">
      <div class="pl-10 pr-6 py-10">
        <h1 class="text-2xl font-semibold">
            <img class="w-[90%]" src="./../assets/images/logo-test.png" alt="">
        </h1>
        <hr class="h-px my-8 bg-gray-700 border-0 dark:bg-gray-700">
        <!-- Your sidebar content goes here -->        
        <ul class="mt-4">            
          <li class="mt-1 w-full" >   
              <router-link  to="/dashboard" :class="activeClass('/dashboard')" class="py-3 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 flex items-center whitespace-nowrap rounded px-4 font-semibold text-slate-700 transition-colors">
                <span class="w-[14px] mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="activeIcon('/dashboard')" class="w-6 h-6">
                        <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                    </svg>                                        
                </span>                 
                Dashboard
              </router-link>
            </li>       
            <li class="mt-1 w-full" >   
              <router-link  to="/projects" :class="activeClass('/projects')" class="py-3 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 flex items-center whitespace-nowrap rounded px-4 font-semibold text-slate-700 transition-colors">
                <span class="w-[22px] mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" x="0px" y="0px"><g data-name="Layer 2"><g data-name="Layer 1"><circle cx="10.17" cy="9" r="2"/><path :fill="activeIcon('/projects')" d="M18,2H10L8,0H2A2,2,0,0,0,0,2V14a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V4A2,2,0,0,0,18,2ZM14.17,9a3.39,3.39,0,0,1-.06.64l.89,1-1,1.74-1.3-.27a4.23,4.23,0,0,1-1.11.64L11.17,14h-2l-.42-1.26a4.07,4.07,0,0,1-1.11-.64l-1.3.27-1-1.74.89-1a3.44,3.44,0,0,1,0-1.28l-.89-1,1-1.74,1.3.27a4.07,4.07,0,0,1,1.11-.64L9.17,4h2l.42,1.26a4.23,4.23,0,0,1,1.11.64L14,5.63l1,1.74-.89,1A3.39,3.39,0,0,1,14.17,9Z"/></g></g></svg>
                </span>                
                Projects
              </router-link>
            </li>    
            <li class="mt-1 w-full" >   
              <router-link  to="/dashboard" :class="activeClass('/scheduler')" class="py-3  dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 flex items-center whitespace-nowrap rounded px-4 font-semibold text-slate-700 transition-colors">
                <span class="w-[14px] mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g data-name="Layer 2"><path :fill="activeIcon('/scheduler')" d="M6.75 2v.75h-1.5V2a.75.75 0 0 1 1.5 0zM11.75 2v.75h-1.5V2a.75.75 0 0 1 1.5 0zM16.75 2v.75h-1.5V2a.75.75 0 0 1 1.5 0zM19 2.75h-2.25V4a.75.75 0 0 1-1.5 0V2.75h-3.5V4a.75.75 0 0 1-1.5 0V2.75h-3.5V4a.75.75 0 0 1-1.5 0V2.75H3A1.76 1.76 0 0 0 1.25 4.5v14A1.76 1.76 0 0 0 3 20.25h9.77a5.71 5.71 0 0 1-.27-1.75 6 6 0 0 1 6-6 5.79 5.79 0 0 1 2.25.45V4.5A1.76 1.76 0 0 0 19 2.75zM6 16.5a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM6 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-3.5a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm5 7a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-3.5a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-3.5a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm5 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" fill="#000000" opacity="1" data-original="#000000" class=""></path><path :fill="activeIcon('/scheduler')" d="M21.29 15A4.5 4.5 0 1 0 23 18.5a4.5 4.5 0 0 0-1.71-3.5zm-1.35 5.8a.73.73 0 0 1-.44.15.75.75 0 0 1-.61-.32l-1-1.39a.74.74 0 0 1-.14-.44v-2a.75.75 0 1 1 1.5 0v1.76l.86 1.2a.75.75 0 0 1-.17 1.04z"  opacity="1" data-original="#000000" class=""></path></g></g></svg>
                </span>                 
                Scheduler
              </router-link>
            </li>    
            <li class="mt-1 w-full" >   
                <router-link  to="/content-wizard" :class="activeClass('/content-wizard')" class="py-3  dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 flex items-center whitespace-nowrap rounded px-4 font-semibold text-slate-700 transition-colors">
                <span class="w-[14px] mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class="hovered-paths"><g transform="matrix(6.123233995736766e-17,-1,1,6.123233995736766e-17,-0.0016627311706542969,32.00080060958862)"><path d="M2.293 29.707a.997.997 0 0 0 1.414 0L14.244 19.17l.766 2.464a3.261 3.261 0 0 0 2.62 2.266 3.258 3.258 0 0 0 3.192-1.346l1.753-2.478c.244-.345.646-.512 1.062-.542l3.036.04c1.234.034 2.394-.671 2.965-1.792a3.262 3.262 0 0 0-.294-3.452l-1.816-2.434a1.281 1.281 0 0 1-.186-1.177l.975-2.875a3.26 3.26 0 0 0-.787-3.374 3.263 3.263 0 0 0-3.374-.787l-2.875.975c-.4.134-.84.066-1.177-.186L17.67 2.656a3.264 3.264 0 0 0-3.452-.294 3.262 3.262 0 0 0-1.791 2.965l.039 3.036a1.28 1.28 0 0 1-.542 1.062l-2.478 1.753A3.261 3.261 0 0 0 8.1 14.371a3.261 3.261 0 0 0 2.266 2.62l2.464.765L2.293 28.293a1 1 0 0 0 0 1.414z"  :fill="activeIcon('/content-wizard')"  opacity="1" data-original="#000000" class="hovered-path"></path></g></svg>
                </span>                 
                Content Wizard
              </router-link>
            </li>    
            <li class="mt-1 w-full" >   
              <router-link  to="/dashboard" :class="activeClass('/documents')" class="py-3  dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 flex items-center whitespace-nowrap rounded px-4 font-semibold text-slate-700 transition-colors">
                <span class="w-[14px] mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class="hovered-paths"><g><path d="M330 150c-19.299 0-35-15.701-35-35V0H116C85.673 0 61 24.673 61 55v402c0 30.327 24.673 55 55 55h280c30.327 0 55-24.673 55-55V150zM143 360h72.72c8.284 0 15 6.716 15 15s-6.716 15-15 15H143c-8.284 0-15-6.716-15-15s6.716-15 15-15zm-15-65c0-8.284 6.716-15 15-15h220c8.284 0 15 6.716 15 15s-6.716 15-15 15H143c-8.284 0-15-6.716-15-15zm235-95c8.284 0 15 6.716 15 15s-6.716 15-15 15H143c-8.284 0-15-6.716-15-15s6.716-15 15-15z" :fill="activeIcon('/documents')" opacity="1" data-original="#000000" class="hovered-path"></path><path d="M325 115c0 2.757 2.243 5 5 5h114.314a54.866 54.866 0 0 0-10.515-13.732l-96.423-91.222a55.137 55.137 0 0 0-12.375-8.825V115z" :fill="activeIcon('/documents')" opacity="1" data-original="#000000" class="hovered-path"></path></g></svg>
                </span>                 
                Documents
              </router-link>
            </li>    
            <li class="mt-1 w-full" >   
              <router-link  to="/logout" :class="activeClass('/logout')" class="py-3  dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 flex items-center whitespace-nowrap rounded px-4 font-semibold text-slate-700 transition-colors">
                <span class="w-[14px] mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class="hovered-paths"><g><path d="M256 512c140.61 0 256-115.39 256-256S396.61 0 256 0 0 115.39 0 256s115.39 256 256 256zm-75-331v45h271v60H181v45L61 256l120-75z" :fill="activeIcon('/logout')" opacity="1" data-original="#000000" class="hovered-path"></path></g></svg>
                </span>                 
                Logout
              </router-link>
            </li>    
            
        </ul>
      </div>
    </aside>
  </template>
  
  
  
  <script>
  export default {
    data() {
      return {
        refresh:0,
        isSidebarOpen: true,
      };
    },
    watch: {
        $route(to, from) {
        // Perform actions when the route changes
        this.refresh += 1;
        },
    },
    methods:{
        activeClass(route){
            return (this.$router.currentRoute._value.path==route) ? 'bg-blue-400 text-white':'text-white/50'
        },
        activeIcon(route){
            return (this.$router.currentRoute._value.path==route) ? 'white':'#E5EDFF99'
        }
    }
  };
  </script>
  
  <style>
  /* Add your Tailwind styles here */
  </style>
  