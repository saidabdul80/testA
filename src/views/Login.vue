<template>
    <div class="grid md:grid-cols-2 grid-cols-1 bg-[#F2F1F9]">
        <div class=" md:py-0 py-7 col-span-1 md:h-screen  flex items-center justify-center">
            <img src="../assets/images/login-image.png"  width="60%" alt="">
        </div>
        <div class="col-span-1 md:w-[70%] w-[80%] mx-auto ">
            <div class="w-[100%] bg white h-[100vh] bg-white">
                <div class=" flex items-center justify-center">
                    <img class="md:w-[35%] w-[55%] py-5 md:py-2" src="./../assets/images/logo-plain.png" alt="">
                </div>
                <div class="mt-10 max-[910px]:px-6 min-[920px]:px-20">
                    <h1 class="text-[3em]  font-bold text-[#2B2A5F]">Sign In</h1>
                    <p class="text-lg text-[#2B2A5F]/50">Enter your email and password to sign in!</p>

                    <form>
                        <div class="my-4">
                            <label for="email" class="block mb-2 text-sm font-medium text-[#2B2A5F] dark:text-white">Email
                                <span class="text-[#2B2AFF] text-base">*</span>
                            </label>
                            <input type="text" id="email" class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mail@simple.com" required>
                        </div>
                        <div class="my-4">
                            <label for="password" class="block mb-2 text-sm font-medium text-[#2B2A5F] dark:text-white">Password
                                <span class="text-[#2B2AFF] text-base">*</span>
                            </label>
                            <input type="text" id="password" class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Min 8 characters" required>
                        </div>
                        <div class="flex items-center justify-between my-7">
                            <div class="flex items-center mb-4">
                                <input type="checkbox" id="keepme" checked :value="true" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="keepme" class="block ml-2 text-sm font-medium text-[#2B2A5F] dark:text-white">Keep me logged in</label>
                            </div>
                            <a class="text-blue-400">Forget password?</a>
                        </div>

                        <button type="submit" class="text-white w-full bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-800">Sign In</button>                        
                        <div class="relative flex py-5 items-center">
                            <div class="flex-grow border-t border-gray-400"></div>
                            <span class="flex-shrink mx-4 text-gray-400">or</span>
                            <div class="flex-grow border-t border-gray-400"></div>
                        </div>
                        <button type="button" class="text-[#2B2A5F] flex justify-center w-full bg-blue-100/50 hover:bg-blue-200/50 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-800">
                            <span class="flex items-center"><img src="../assets/images/google.png" width="20px" alt=""><span class="ml-2">Sign in with Google</span></span>
                        </button>                        
                        
                        <div class="flex">
                            <span>Not yet registered</span>
                            <a class=" ml-3 text-blue-400">Create an Account?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>