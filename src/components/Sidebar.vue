<script setup>
    import { Menu, Close, Sun, Moon } from '@icons'
    import { links } from '@consts/links';
</script>

<template>
    <div>
        <div class="px-6 py-4 lg:hidden">
            <button class="text-2xl" @click="() => isHidden = !isHidden">
                <Menu />
            </button>
        </div>
        <aside 
            :class="isHidden ? 'hidden' : 'block'" 
            class="fixed top-0 left-0 z-10 w-full min-h-screen h-full px-6 py-4 bg-slate-700 dark:bg-orange-100 lg:static lg:block"
        >
            <nav>
                <ul class="flex flex-col gap-y-4">
                    <button class="lg:hidden text-2xl"  @click="() => isHidden = !isHidden">
                        <Close />
                    </button>

                    <button 
                        class="text-2xl border-2 border-white dark:border-gray-900 hover:opacity-80 rounded-lg p-2 w-10 h-10 mx-auto flex items-center justify-center" 
                        @click="switchTheme()"
                    >
                        <Sun v-show="darkMode" />
                        <Moon v-show="!darkMode" />
                    </button>

                    <li v-for="link in links">
                        <a :href="link.href" :class="pathname === link.href || pathname === link.href + '/' ? 'font-bold' : ''">
                            {{ link.label }}
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    </div>
</template>

<script>
    export default {
        props: {
            pathname: String
        },
        data() {
            return {
                isHidden: true,
                darkMode: true
            }
        },
        methods: {
            switchTheme() {
                const root = document.documentElement
                this.darkMode = !this.darkMode
                this.darkMode ? root.classList.remove('dark') : root.classList.add('dark')
            }
        }
    }
</script>