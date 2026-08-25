@extends('layouts.app')

@section('content')
    <x-page-hero
        title="{{ __('messages.pages.partyProgram.title') }}"
        titleHighlight="{{ __('messages.pages.partyProgram.titleHighlight') }}"
        description="{{ __('messages.pages.partyProgram.description') }}"
    />
    <section class="py-20 lg:py-28 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="max-w-md mx-auto">
                <div class="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <i data-lucide="clock" class="w-10 h-10 text-accent"></i>
                </div>
                <h2 class="text-2xl font-bold text-dark mb-3">{{ __('messages.pages.comingSoon') }}</h2>
                <p class="text-gray">{{ __('messages.pages.partyProgram.description') }}</p>
            </div>
        </div>
    </section>
@endsection