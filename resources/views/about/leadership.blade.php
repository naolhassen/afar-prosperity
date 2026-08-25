@extends('layouts.app')

@section('content')
    <x-page-hero
        title="{{ __('messages.pages.leadership.title') }}"
        titleHighlight="{{ __('messages.pages.leadership.titleHighlight') }}"
        description="{{ __('messages.pages.leadership.description') }}"
    />
    <section class="py-16 lg:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                @foreach ([
                    ['name' => 'messages.leaders.leader1Name', 'position' => 'messages.leaders.leader1Position', 'image' => '/images/leaders/mohammed-hussen-alisa.jpg'],
                    ['name' => 'messages.leaders.leader2Name', 'position' => 'messages.leaders.leader2Position', 'image' => '/images/leaders/weleo-aytile-hussen.jpg'],
                    ['name' => 'messages.leaders.leader3Name', 'position' => 'messages.leaders.leader3Position', 'image' => '/images/leaders/mohammed-aden-mohammed.jpg'],
                ] as $leader)
                    <div class="bg-muted rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                        <div class="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-accent/20">
                            <img src="{{ $leader['image'] }}" alt="{{ __($leader['name']) }}" class="w-full h-full object-cover" onerror="this.parentElement.classList.add('bg-accent/10'); this.style.display='none'; this.parentElement.innerHTML='<i data-lucide=\'user\' class=\'w-20 h-20 text-accent\'></i>';">
                        </div>
                        <h3 class="text-xl font-bold text-dark mb-2">{{ __($leader['name']) }}</h3>
                        <p class="text-accent font-medium">{{ __($leader['position']) }}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </section>
@endsection