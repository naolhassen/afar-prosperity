@extends('layouts.app')

@section('content')
    <x-page-hero
        title="{{ __('messages.pages.visionMission.title') }}"
        titleHighlight="{{ __('messages.pages.visionMission.titleHighlight') }}"
        description="{{ __('messages.pages.visionMission.description') }}"
    />
    <section class="py-16 lg:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12">
                <div class="bg-muted rounded-2xl p-8 lg:p-10">
                    <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                        <i data-lucide="eye" class="w-6 h-6 text-accent"></i>
                    </div>
                    <h2 class="text-2xl font-bold text-dark mb-4">{{ __('messages.pages.visionMission.vision') }}</h2>
                    <p class="text-gray leading-relaxed">{{ __('messages.pages.visionMission.visionText') }}</p>
                </div>
                <div class="bg-muted rounded-2xl p-8 lg:p-10">
                    <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                        <i data-lucide="target" class="w-6 h-6 text-accent"></i>
                    </div>
                    <h2 class="text-2xl font-bold text-dark mb-4">{{ __('messages.pages.visionMission.mission') }}</h2>
                    <p class="text-gray leading-relaxed">{{ __('messages.pages.visionMission.missionText') }}</p>
                </div>
            </div>
            <div class="mt-12 bg-dark rounded-2xl p-8 lg:p-10 text-center">
                <h2 class="text-2xl font-bold text-white mb-4">{{ __('messages.pages.visionMission.values') }}</h2>
                <p class="text-gray-light leading-relaxed">{{ __('messages.pages.visionMission.valuesItems') }}</p>
            </div>
        </div>
    </section>
@endsection