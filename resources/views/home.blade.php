@extends('layouts.app')

@section('content')
@php
$locale = app()->getLocale();
@endphp

<!-- Hero -->
<section class="relative overflow-hidden bg-white py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="max-w-2xl">
                <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-dark text-sm font-medium mb-6">
                    <i data-lucide="flag" class="w-4 h-4 text-accent"></i>
                    {{ __('messages.hero.badge') }}
                </span>
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
                    {{ __('messages.hero.title') }}
                    <span class="text-accent">{{ __('messages.hero.titleHighlight') }}</span>
                </h1>
                <p class="text-lg text-gray leading-relaxed mb-8">
                    {{ __('messages.hero.description') }}
                </p>
                <div class="flex flex-wrap gap-4">
                    <a href="{{ route('briefing.news', ['locale' => $locale]) }}" class="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20">
                        {{ __('messages.hero.cta') }}
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </a>
                    <a href="{{ route('about.vision-mission', ['locale' => $locale]) }}" class="inline-flex items-center gap-2 px-6 py-3 border-2 border-dark text-dark font-semibold rounded-lg hover:bg-dark hover:text-white transition-colors">
                        {{ __('messages.hero.secondaryCta') }}
                    </a>
                </div>
            </div>
            <div class="relative">
                <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                    <img src="/images/afar-landscape.jpg" alt="Afar Region" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('bg-muted'); this.style.display='none'">
                </div>
                <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[260px] hidden sm:block">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                            <i data-lucide="users" class="w-6 h-6 text-accent"></i>
                        </div>
                        <div>
                            <p class="text-2xl font-bold text-dark">{{ __('messages.about.stats.members') }}</p>
                            <p class="text-sm text-gray">{{ __('messages.about.stats.membersLabel') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About -->
<section class="py-20 lg:py-28 bg-muted">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <span class="inline-block px-4 py-2 rounded-full bg-white text-accent text-sm font-semibold mb-4">{{ __('messages.about.sectionTag') }}</span>
                <h2 class="text-3xl sm:text-4xl font-bold text-dark mb-6">
                    {{ __('messages.about.title') }}
                    <span class="text-accent">{{ __('messages.about.titleHighlight') }}</span>
                </h2>
                <p class="text-gray leading-relaxed mb-8">
                    {{ __('messages.about.description') }}
                </p>
                <a href="{{ route('about.vision-mission', ['locale' => $locale]) }}" class="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                    {{ __('messages.about.learnMore') }}
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <p class="text-3xl font-bold text-accent mb-1">{{ __('messages.about.stats.members') }}</p>
                    <p class="text-sm text-gray">{{ __('messages.about.stats.membersLabel') }}</p>
                </div>
                <div class="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <p class="text-3xl font-bold text-accent mb-1">{{ __('messages.about.stats.offices') }}</p>
                    <p class="text-sm text-gray">{{ __('messages.about.stats.officesLabel') }}</p>
                </div>
                <div class="bg-white rounded-2xl p-6 text-center shadow-sm col-span-2">
                    <p class="text-3xl font-bold text-accent mb-1">{{ __('messages.about.stats.years') }}</p>
                    <p class="text-sm text-gray">{{ __('messages.about.stats.yearsLabel') }}</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services / Focus Areas -->
<section class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="inline-block px-4 py-2 rounded-full bg-muted text-accent text-sm font-semibold mb-4">{{ __('messages.services.sectionTag') }}</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-dark">
                {{ __('messages.services.title') }}
                <span class="text-accent">{{ __('messages.services.titleHighlight') }}</span>
            </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-muted rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <i data-lucide="book-open" class="w-6 h-6 text-accent"></i>
                </div>
                <h3 class="text-xl font-bold text-dark mb-3">{{ __('messages.services.politicalEducation') }}</h3>
                <p class="text-gray leading-relaxed">{{ __('messages.services.politicalEducationDesc') }}</p>
            </div>
            <div class="bg-muted rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <i data-lucide="users" class="w-6 h-6 text-accent"></i>
                </div>
                <h3 class="text-xl font-bold text-dark mb-3">{{ __('messages.services.youthEngagement') }}</h3>
                <p class="text-gray leading-relaxed">{{ __('messages.services.youthEngagementDesc') }}</p>
            </div>
            <div class="bg-muted rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <i data-lucide="landmark" class="w-6 h-6 text-accent"></i>
                </div>
                <h3 class="text-xl font-bold text-dark mb-3">{{ __('messages.services.communityDev') }}</h3>
                <p class="text-gray leading-relaxed">{{ __('messages.services.communityDevDesc') }}</p>
            </div>
            <div class="bg-muted rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <i data-lucide="heart-handshake" class="w-6 h-6 text-accent"></i>
                </div>
                <h3 class="text-xl font-bold text-dark mb-3">{{ __('messages.services.womenEmpowerment') }}</h3>
                <p class="text-gray leading-relaxed">{{ __('messages.services.womenEmpowermentDesc') }}</p>
            </div>
            <div class="bg-muted rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <i data-lucide="scale" class="w-6 h-6 text-accent"></i>
                </div>
                <h3 class="text-xl font-bold text-dark mb-3">{{ __('messages.services.goodGovernance') }}</h3>
                <p class="text-gray leading-relaxed">{{ __('messages.services.goodGovernanceDesc') }}</p>
            </div>
            <div class="bg-muted rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <i data-lucide="shield-check" class="w-6 h-6 text-accent"></i>
                </div>
                <h3 class="text-xl font-bold text-dark mb-3">{{ __('messages.services.peaceBuilding') }}</h3>
                <p class="text-gray leading-relaxed">{{ __('messages.services.peaceBuildingDesc') }}</p>
            </div>
        </div>
    </div>
</section>

<!-- Leaders -->
<section class="py-20 lg:py-28 bg-muted">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="inline-block px-4 py-2 rounded-full bg-white text-accent text-sm font-semibold mb-4">{{ __('messages.leaders.sectionTag') }}</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-dark">
                {{ __('messages.leaders.title') }}
                <span class="text-accent">{{ __('messages.leaders.titleHighlight') }}</span>
            </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            @foreach ([
                ['name' => 'messages.leaders.leader1Name', 'position' => 'messages.leaders.leader1Position'],
                ['name' => 'messages.leaders.leader2Name', 'position' => 'messages.leaders.leader2Position'],
                ['name' => 'messages.leaders.leader3Name', 'position' => 'messages.leaders.leader3Position'],
            ] as $leader)
                <div class="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                    <div class="w-24 h-24 rounded-full bg-accent/10 mx-auto mb-5 flex items-center justify-center">
                        <i data-lucide="user" class="w-10 h-10 text-accent"></i>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-1">{{ __($leader['name']) }}</h3>
                    <p class="text-sm text-accent">{{ __($leader['position']) }}</p>
                </div>
            @endforeach
        </div>
    </div>
</section>

<!-- News -->
<section class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
                <span class="inline-block px-4 py-2 rounded-full bg-muted text-accent text-sm font-semibold mb-4">{{ __('messages.news.sectionTag') }}</span>
                <h2 class="text-3xl sm:text-4xl font-bold text-dark">
                    {{ __('messages.news.title') }}
                    <span class="text-accent">{{ __('messages.news.titleHighlight') }}</span>
                </h2>
            </div>
            <a href="{{ route('briefing.news', ['locale' => $locale]) }}" class="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                {{ __('messages.news.viewAll') }}
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            @foreach ([
                ['title' => 'messages.news.item1Title', 'desc' => 'messages.news.item1Desc'],
                ['title' => 'messages.news.item2Title', 'desc' => 'messages.news.item2Desc'],
                ['title' => 'messages.news.item3Title', 'desc' => 'messages.news.item3Desc'],
            ] as $news)
                <article class="bg-muted rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div class="aspect-video bg-primary/10 flex items-center justify-center">
                        <i data-lucide="newspaper" class="w-12 h-12 text-primary/40"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-bold text-dark mb-2 line-clamp-2">{{ __($news['title']) }}</h3>
                        <p class="text-sm text-gray mb-4 line-clamp-3">{{ __($news['desc']) }}</p>
                        <a href="{{ route('briefing.news', ['locale' => $locale]) }}" class="inline-flex items-center gap-1 text-sm text-accent font-medium hover:underline">
                            {{ __('messages.news.readMore') }}
                            <i data-lucide="arrow-right" class="w-3 h-3"></i>
                        </a>
                    </div>
                </article>
            @endforeach
        </div>
    </div>
</section>

<!-- CTA -->
<section class="py-20 lg:py-28 bg-dark relative overflow-hidden">
    <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </div>
    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            {{ __('messages.cta.title') }}
            <span class="text-accent">{{ __('messages.cta.titleHighlight') }}</span>
        </h2>
        <p class="text-lg text-gray-light mb-8 max-w-2xl mx-auto">
            {{ __('messages.cta.description') }}
        </p>
        <a href="{{ route('contact', ['locale' => $locale]) }}" class="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20">
            {{ __('messages.cta.button') }}
            <i data-lucide="arrow-right" class="w-5 h-5"></i>
        </a>
    </div>
</section>
@endsection
