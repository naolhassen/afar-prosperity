@php
$currentLocale = app()->getLocale();
@endphp

<footer class="bg-dark text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <!-- Brand -->
            <div class="lg:col-span-1">
                <a href="{{ route('home', ['locale' => $currentLocale]) }}" class="flex items-center gap-3 mb-6">
                    <div class="w-10 h-10 rounded-full overflow-hidden bg-white/10">
                        <img src="/images/logo.jpg" alt="Prosperity Party" class="w-full h-full object-cover" onerror="this.style.display='none'">
                    </div>
                    <span class="font-bold text-white">
                        {{ $currentLocale === 'aa' ? 'Xisbaqo' : ($currentLocale === 'am' ? 'አፋር ክልል ቅ/ፅ/ቤት' : 'Afar Region Branch') }}
                    </span>
                </a>
                <p class="text-sm text-gray-light leading-relaxed max-w-xs">
                    {{ $currentLocale === 'aa' ? 'Xisbaqo Umaato' : ($currentLocale === 'am' ? 'የአፋር ክልል ብልጽግና ፓርቲ ቅ/ፅ/ቤት' : 'Prosperity Party Afar Region Branch Office') }}
                </p>
            </div>

            <!-- Quick Links -->
            <div>
                <h3 class="font-semibold text-white mb-5">{{ __('messages.footer.quickLinks') }}</h3>
                <ul class="space-y-3">
                    <li><a href="{{ route('home', ['locale' => $currentLocale]) }}" class="text-sm text-gray-light hover:text-accent transition-colors">{{ __('messages.nav.home') }}</a></li>
                    <li><a href="{{ route('about.vision-mission', ['locale' => $currentLocale]) }}" class="text-sm text-gray-light hover:text-accent transition-colors">{{ __('messages.nav.visionMission') }}</a></li>
                    <li><a href="{{ route('about.leadership', ['locale' => $currentLocale]) }}" class="text-sm text-gray-light hover:text-accent transition-colors">{{ __('messages.nav.leadership') }}</a></li>
                    <li><a href="{{ route('briefing.news', ['locale' => $currentLocale]) }}" class="text-sm text-gray-light hover:text-accent transition-colors">{{ __('messages.nav.news') }}</a></li>
                    <li><a href="{{ route('contact', ['locale' => $currentLocale]) }}" class="text-sm text-gray-light hover:text-accent transition-colors">{{ __('messages.nav.contact') }}</a></li>
                </ul>
            </div>

            <!-- Resources -->
            <div>
                <h3 class="font-semibold text-white mb-5">{{ __('messages.nav.resources') }}</h3>
                <ul class="space-y-3">
                    <li><a href="{{ route('resources.manifesto', ['locale' => $currentLocale]) }}" class="text-sm text-gray-light hover:text-accent transition-colors">{{ __('messages.nav.manifesto') }}</a></li>
                    <li><a href="{{ route('resources.party-program', ['locale' => $currentLocale]) }}" class="text-sm text-gray-light hover:text-accent transition-colors">{{ __('messages.nav.partyProgram') }}</a></li>
                    <li><a href="{{ route('resources.rules-of-procedure', ['locale' => $currentLocale]) }}" class="text-sm text-gray-light hover:text-accent transition-colors">{{ __('messages.nav.rulesOfProcedure') }}</a></li>
                </ul>
            </div>

            <!-- Contact -->
            <div>
                <h3 class="font-semibold text-white mb-5">{{ __('messages.footer.contactInfo') }}</h3>
                <ul class="space-y-4">
                    <li class="flex items-start gap-3">
                        <i data-lucide="mail" class="w-5 h-5 text-accent mt-0.5 shrink-0"></i>
                        <div>
                            <p class="text-xs text-gray-light mb-0.5">{{ __('messages.footer.email') }}</p>
                            <a href="mailto:prosperityafarbranch@gmail.com" class="text-sm text-white hover:text-accent transition-colors">prosperityafarbranch@gmail.com</a>
                        </div>
                    </li>
                    <li class="flex items-start gap-3">
                        <i data-lucide="map-pin" class="w-5 h-5 text-accent mt-0.5 shrink-0"></i>
                        <div>
                            <p class="text-xs text-gray-light mb-0.5">{{ __('messages.footer.address') }}</p>
                            <p class="text-sm text-white">{{ __('messages.footer.addressValue') }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p class="text-sm text-gray-light">
                {{ str_replace('{year}', date('Y'), __('messages.footer.rights')) }}
            </p>
        </div>
    </div>
</footer>
