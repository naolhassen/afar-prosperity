@php
$currentLocale = app()->getLocale();
$locales = [
    'aa' => ['Qafaraf', 'Qafar'],
    'am' => ['አማርኛ', 'Amharic'],
    'en' => ['English', 'English'],
];

$path = request()->path();
$pathWithoutLocale = ltrim(preg_replace('#^'.$currentLocale.'(/|$)#', '', $path), '/');

$aboutLinks = [
    ['route' => 'about.vision-mission', 'label' => __('messages.nav.visionMission')],
    ['route' => 'about.leadership', 'label' => __('messages.nav.leadership')],
    ['route' => 'about.formation', 'label' => __('messages.nav.formation')],
    ['route' => 'about.structure', 'label' => __('messages.nav.structure')],
    ['route' => 'about.logo-meaning', 'label' => __('messages.nav.logoMeaning')],
];

$briefingLinks = [
    ['route' => 'briefing.news', 'label' => __('messages.nav.news')],
    ['route' => 'briefing.articles', 'label' => __('messages.nav.articles')],
    ['route' => 'briefing.events', 'label' => __('messages.nav.events')],
    ['route' => 'briefing.press-release', 'label' => __('messages.nav.pressRelease')],
];

$resourceLinks = [
    ['route' => 'resources.manifesto', 'label' => __('messages.nav.manifesto')],
    ['route' => 'resources.party-program', 'label' => __('messages.nav.partyProgram')],
    ['route' => 'resources.rules-of-procedure', 'label' => __('messages.nav.rulesOfProcedure')],
];
@endphp

<header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <!-- Logo -->
            <a href="{{ route('home', ['locale' => $currentLocale]) }}" class="flex items-center gap-3">
                <div class="relative w-10 h-10 rounded-full overflow-hidden bg-muted">
                    <img src="/images/logo.jpg" alt="Prosperity Party" class="w-full h-full object-cover" onerror="this.style.display='none'">
                </div>
                <div>
                    <p class="font-bold text-dark leading-tight text-sm sm:text-base">
                        {{ $currentLocale === 'aa' ? 'Xisbaqo' : ($currentLocale === 'am' ? 'አፋር ክልል ቅ/ፅ/ቤት' : 'Afar Region Branch') }}
                    </p>
                </div>
            </a>

            <!-- Desktop Nav -->
            <nav class="hidden lg:flex items-center gap-1">
                <a href="{{ route('home', ['locale' => $currentLocale]) }}" class="px-3 py-2 text-sm font-medium text-dark hover:text-accent transition-colors rounded-lg hover:bg-muted">
                    {{ __('messages.nav.home') }}
                </a>

                <!-- About -->
                <div class="relative group">
                    <button class="flex items-center gap-1 px-3 py-2 text-sm font-medium text-dark hover:text-accent transition-colors rounded-lg hover:bg-muted">
                        {{ __('messages.nav.about') }}
                        <i data-lucide="chevron-down" class="w-3 h-3"></i>
                    </button>
                    <div class="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div class="bg-white rounded-xl shadow-lg border border-border py-2 min-w-[220px]">
                            @foreach ($aboutLinks as $link)
                                <a href="{{ route($link['route'], ['locale' => $currentLocale]) }}" class="block px-4 py-2.5 text-sm text-dark hover:text-accent hover:bg-muted transition-colors">
                                    {{ $link['label'] }}
                                </a>
                            @endforeach
                        </div>
                    </div>
                </div>

                <!-- Briefing -->
                <div class="relative group">
                    <button class="flex items-center gap-1 px-3 py-2 text-sm font-medium text-dark hover:text-accent transition-colors rounded-lg hover:bg-muted">
                        {{ __('messages.nav.briefing') }}
                        <i data-lucide="chevron-down" class="w-3 h-3"></i>
                    </button>
                    <div class="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div class="bg-white rounded-xl shadow-lg border border-border py-2 min-w-[220px]">
                            @foreach ($briefingLinks as $link)
                                <a href="{{ route($link['route'], ['locale' => $currentLocale]) }}" class="block px-4 py-2.5 text-sm text-dark hover:text-accent hover:bg-muted transition-colors">
                                    {{ $link['label'] }}
                                </a>
                            @endforeach
                        </div>
                    </div>
                </div>

                <!-- Resources -->
                <div class="relative group">
                    <button class="flex items-center gap-1 px-3 py-2 text-sm font-medium text-dark hover:text-accent transition-colors rounded-lg hover:bg-muted">
                        {{ __('messages.nav.resources') }}
                        <i data-lucide="chevron-down" class="w-3 h-3"></i>
                    </button>
                    <div class="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div class="bg-white rounded-xl shadow-lg border border-border py-2 min-w-[220px]">
                            @foreach ($resourceLinks as $link)
                                <a href="{{ route($link['route'], ['locale' => $currentLocale]) }}" class="block px-4 py-2.5 text-sm text-dark hover:text-accent hover:bg-muted transition-colors">
                                    {{ $link['label'] }}
                                </a>
                            @endforeach
                        </div>
                    </div>
                </div>

                <a href="{{ route('contact', ['locale' => $currentLocale]) }}" class="px-3 py-2 text-sm font-medium text-dark hover:text-accent transition-colors rounded-lg hover:bg-muted">
                    {{ __('messages.nav.contact') }}
                </a>
            </nav>

            <!-- Right side -->
            <div class="flex items-center gap-3">
                <!-- Language Switcher -->
                <div class="relative group">
                    <button class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-dark hover:text-accent border border-border rounded-lg hover:bg-muted transition-colors">
                        <i data-lucide="globe" class="w-4 h-4"></i>
                        <span class="hidden sm:inline">{{ $locales[$currentLocale][1] ?? $locales[$currentLocale][0] }}</span>
                        <i data-lucide="chevron-down" class="w-3 h-3"></i>
                    </button>
                    <div class="absolute top-full right-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div class="bg-white rounded-xl shadow-lg border border-border py-2 min-w-[140px]">
                            @foreach ($locales as $code => $label)
                                <a href="/{{ $code }}/{{ $pathWithoutLocale }}" class="block px-4 py-2.5 text-sm {{ $code === $currentLocale ? 'text-accent bg-muted font-medium' : 'text-dark hover:text-accent hover:bg-muted' }} transition-colors">
                                    {{ $label[0] }}
                                </a>
                            @endforeach
                        </div>
                    </div>
                </div>

                <!-- Mobile menu button -->
                <button id="mobile-menu-button" class="lg:hidden p-2 text-dark hover:text-accent hover:bg-muted rounded-lg transition-colors" aria-label="Open menu">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-border shadow-lg">
        <div class="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <a href="{{ route('home', ['locale' => $currentLocale]) }}" class="block px-4 py-3 text-sm font-medium text-dark hover:text-accent hover:bg-muted rounded-lg transition-colors">
                {{ __('messages.nav.home') }}
            </a>

            <details class="group">
                <summary class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-dark hover:text-accent hover:bg-muted rounded-lg transition-colors cursor-pointer list-none">
                    {{ __('messages.nav.about') }}
                    <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
                </summary>
                <div class="pl-4 space-y-1 pt-1">
                    @foreach ($aboutLinks as $link)
                        <a href="{{ route($link['route'], ['locale' => $currentLocale]) }}" class="block px-4 py-2.5 text-sm text-gray hover:text-accent hover:bg-muted rounded-lg transition-colors">
                            {{ $link['label'] }}
                        </a>
                    @endforeach
                </div>
            </details>

            <details class="group">
                <summary class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-dark hover:text-accent hover:bg-muted rounded-lg transition-colors cursor-pointer list-none">
                    {{ __('messages.nav.briefing') }}
                    <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
                </summary>
                <div class="pl-4 space-y-1 pt-1">
                    @foreach ($briefingLinks as $link)
                        <a href="{{ route($link['route'], ['locale' => $currentLocale]) }}" class="block px-4 py-2.5 text-sm text-gray hover:text-accent hover:bg-muted rounded-lg transition-colors">
                            {{ $link['label'] }}
                        </a>
                    @endforeach
                </div>
            </details>

            <details class="group">
                <summary class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-dark hover:text-accent hover:bg-muted rounded-lg transition-colors cursor-pointer list-none">
                    {{ __('messages.nav.resources') }}
                    <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-open:rotate-180"></i>
                </summary>
                <div class="pl-4 space-y-1 pt-1">
                    @foreach ($resourceLinks as $link)
                        <a href="{{ route($link['route'], ['locale' => $currentLocale]) }}" class="block px-4 py-2.5 text-sm text-gray hover:text-accent hover:bg-muted rounded-lg transition-colors">
                            {{ $link['label'] }}
                        </a>
                    @endforeach
                </div>
            </details>

            <a href="{{ route('contact', ['locale' => $currentLocale]) }}" class="block px-4 py-3 text-sm font-medium text-dark hover:text-accent hover:bg-muted rounded-lg transition-colors">
                {{ __('messages.nav.contact') }}
            </a>
        </div>
    </div>
</header>

<script>
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
</script>
