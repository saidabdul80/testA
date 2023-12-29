<template>
    <div class="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
        <!-- User Input Section -->
        <div class="mb-4">
            <label for="keyword" class="block text-gray-700 font-bold mb-2">Enter Keyword:</label>
            <input type="text" id="keyword" v-model="keyword"
                class="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500">
            <label for="density" class="block text-gray-700 font-bold mt-4 mb-2">Keyword Density Range:</label>
            <div class="flex items-center">
                <input type="number" id="densityMin" v-model="densityMin"
                    class="w-1/2 mr-2 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500">%
                <input type="number" id="densityMax" v-model="densityMax"
                    class="w-1/2 ml-2 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500">%
            </div>
            <select v-model="selectedTone"
                class="block border border-gray-300 px-3 py-2 mt-4 rounded-md focus:outline-none focus:border-blue-500">
                <option value="narrative">Narrative</option>
                <option value="authoritative">Authoritative</option>
                <!-- Add more tone options -->
            </select>
            <button @click="generateContent"
                class="block w-full bg-blue-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-blue-600 focus:outline-none">Generate
                Content</button>
        </div>

        <!-- Display Generated Content -->
        <div v-if="generatedContent" class="border border-gray-300 p-4 rounded">
            <h2 class="text-lg font-bold mb-3">Generated Content</h2>
            <div>
                <p class="text-gray-700">{{ generatedContent }}</p>
                <!-- Display images here -->
            </div>
        </div>
        <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-50">
            <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-300 h-12 w-12 mb-4"></div>
            <p class="text-center">Processing...</p>
        </div>
    </div>
</template>
  
<script>
// Import necessary libraries or define API functions here

export default {
    data() {
        return {
            isLoading: false,
            keyword: '',
            densityMin: 2,
            densityMax: 5,
            selectedTone: 'narrative',
            generatedContent: ''
        };
    },
    methods: {
        generateContent() {
            this.isLoading = true;
            const apiKey = import.meta.env.VITE_GPT_API_KEY;
            const endpoint = 'https://api.openai.com/v1/engines/davinci/completions';

            const prompt = `Write an article about ${this.keyword} with a tone of ${this.selectedTone}.`;

            fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    prompt,
                    max_tokens:200,
                })
            })
                .then(response => response.json())
                .then(data => {
                    const generatedText = data.choices[0].text.trim();
                    // Check and adjust keyword density
                    const keywordCount = (generatedText.match(new RegExp(this.keyword, 'gi')) || []).length;
                    const totalWords = generatedText.split(/\s+/).length;
                    const calculatedDensity = (keywordCount / totalWords) * 100;

                    if (calculatedDensity >= this.densityMin && calculatedDensity <= this.densityMax) {
                        this.generatedContent = generatedText;
                    } else {
                        // Regenerate content if keyword density is not within the specified range
                        this.generateContent();
                        return;
                    }

                    this.isLoading = false; // Hide loader after response
                    // Handle other content additions here if needed
                })
                .catch(error => {
                    console.error('Error:', error);
                    this.isLoading = false; // Hide loader on error
                    // Handle errors or provide feedback to the user
                });
        }

    }
};
</script>
<style>
/* Loader styles - Add this in your global CSS or customize as needed */
.loader {
    border-top-color: #3498db;
    -webkit-animation: spinner 1.5s linear infinite;
    animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
    to {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spinner {
    to {
        transform: rotate(360deg);
    }
}</style>